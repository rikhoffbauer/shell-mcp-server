#!/usr/bin/env bun
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { TextContent } from "@modelcontextprotocol/sdk/types.js"; // Changed import path again
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { execa } from 'execa';
import type { Result, ExecaError, Options as ExecaOptions } from 'execa'; // Using base Result/ExecaError

// Define the schema for the request
export const ShellCommandRequestSchema = z.object({
  cwd: z.string().optional().describe("The current working directory for the command. If not provided, the command will run in the default working directory of the MCP server process."),
  command: z.string().describe("The shell command to execute. This should be a single command string, including any arguments."),
  env: z.record(z.string()).optional().describe("A record of environment variables to set for the command. These will be merged with the MCP server's environment variables."),
}).describe("Schema for a shell command execution request. It specifies the command to run, an optional current working directory, and optional environment variables.");

/**
 * Defines the structure of the response returned after executing a shell command.
 */
export interface ShellCommandResponse {
  /** The exit code of the executed command. 0 typically indicates success. */
  exit_code: number;
  /** The standard output (stdout) from the command. */
  stdout: string;
  /** The standard error (stderr) from the command. */
  stderr: string;
}

// Define the expected return structure for the MCP tool handler
interface ShellHandlerResponse {
  [x: string]: unknown; // Added index signature for SDK compatibility
  content: [TextContent];
}

/**
 * MCP server designed to execute shell commands.
 * It provides a 'run_shell_command' tool to run arbitrary commands in a shell environment.
 */
export const server = new McpServer({
  name: "ShellCommandExecutor",
  version: "1.0.0"
});

// Add a tool to execute shell commands
server.tool(
  "run_shell_command",
  "Executes a given shell command and returns its exit code, stdout, and stderr. Supports specifying a current working directory and environment variables.",
  ShellCommandRequestSchema.shape,
  runShellCommandHandler
); // Use the exported handler

// Define the handler function separately so it can be exported and tested
export async function runShellCommandHandler(request: z.infer<typeof ShellCommandRequestSchema>): Promise<ShellHandlerResponse> {
  const { command, cwd, env } = request;

  let exit_code: number = -1; // Default to -1 for errors or undefined exit codes
  let stdout: string = "";
  let stderr: string = "";

  try {
    const execaOptions: ExecaOptions = {
      cwd: cwd,
      env: { ...process.env, ...env }, // Merge environments, allowing user to override
      shell: true, // Use shell for more natural command syntax like pipes, etc.
      encoding: 'utf8',
      reject: false, // VERY IMPORTANT: execa will not throw on non-zero exit, but resolve with error object
    };
    // Explicitly cast the result to base Result, assuming string properties due to encoding
    const result = await execa(command, [], execaOptions) as Result;
    
    stdout = result.stdout as string; // Assert stdout is string
    stderr = result.stderr as string; // Assert stderr is string
    exit_code = result.exitCode ?? -1; // Handle potentially undefined exitCode
  } catch (error: any) {
    // This catch block handles errors from execa itself (e.g., command not found if shell option fails)
    const execaError = error as ExecaError; // Assert base ExecaError
    
    stderr = (execaError.stderr as string) || execaError.shortMessage || execaError.message; // Prioritize stderr
    stdout = (execaError.stdout as string) || ""; // stdout might exist even in errors
    exit_code = typeof execaError.exitCode === 'number' ? execaError.exitCode : -1; // Default to -1
  }

  const responsePayload: ShellCommandResponse = {
    exit_code,
    stdout,
    stderr,
  };

  return {
    content: [{
      type: "text" as const, // Ensure 'text' is a literal type for SDK compatibility
      text: JSON.stringify(responsePayload)
    }],
    structuredContent: responsePayload,
  };
}

// Start receiving messages on stdin and sending messages on stdout
const stdioTransport = new StdioServerTransport();
await server.connect(stdioTransport);

process.stderr.write("Server started\n");