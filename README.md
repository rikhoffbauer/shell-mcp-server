# Shell MCP Server

This project implements a Model Context Protocol (MCP) server that allows execution of arbitrary shell commands. It provides a single tool, `run_shell_command`, which takes a command string, an optional current working directory (CWD), and optional environment variables, then returns the command's exit code, standard output (stdout), and standard error (stderr).

## Features

*   Execute any shell command.
*   Specify a custom Current Working Directory (CWD) for the command.
*   Pass custom environment variables to the command.
*   Returns structured output including exit code, stdout, and stderr.
*   Handles command execution errors gracefully.

## Tool: `run_shell_command`

### Description

Executes a given shell command and returns its output and status.

### Input Schema

The tool expects a JSON object with the following fields:

*   `command` (string, **required**): The shell command to execute (e.g., `"ls -la"`). This should be a single command string, including any arguments.
*   `cwd` (string, optional): The current working directory for the command. If not provided, the command will run in the default working directory of the MCP server process.
*   `env` (object, optional): A record of environment variables (key-value pairs of strings) to set for the command (e.g., `{"NODE_ENV": "development"}`). These will be merged with the MCP server's environment variables, with request-defined variables taking precedence.

### Output Schema

The tool returns a JSON object with the following structure:

```typescript
export interface ShellCommandResponse {
  /** The exit code of the executed command. 0 typically indicates success. */
  exit_code: number;
  /** The standard output (stdout) from the command. */
  stdout: string;
  /** The standard error (stderr) from the command. */
  stderr: string;
}
```

**Fields:**

*   `exit_code` (number): The exit code of the command.
*   `stdout` (string): The standard output of the command.
*   `stderr` (string): The standard error output of the command.

### Example Usage

**Request:**

```json
{
  "tool_name": "run_shell_command",
  "tool_input": {
    "command": "echo Hello MCP && ls non_existent_file",
    "cwd": "/tmp"
  }
}
```

**Expected Response (example):**

```json
{
  "content": [
    {
      "type": "text",
      "text": "{\"exit_code\":1,\"stdout\":\"Hello MCP\\n\",\"stderr\":\"ls: non_existent_file: No such file or directory\\n\"}"
    }
  ]
}
```
*(Note: The actual `stderr` message for `ls` might vary slightly based on the operating system.)*

## Setup and Running the Server

This server is built using Bun and TypeScript.

1.  **Prerequisites:**
    *   Bun (refer to [Bun's official documentation](https://bun.sh/docs/installation) for installation)

2.  **Install Dependencies:**
    Navigate to the project root directory and run:
    ```bash
    bun install
    ```

3.  **Run the Server:**
    To start the MCP server, execute:
    ```bash
    bun run index.ts
    ```
    The server will listen for MCP requests on stdio.

## Running Tests

The project uses Vitest for testing.

1.  **Ensure dependencies are installed:**
    ```bash
    bun install
    ```

2.  **Run tests:**
    ```bash
    bun test
    ```
    This will execute the test suite defined in `index.test.ts`.

## Dependencies

*   `@modelcontextprotocol/sdk`: For MCP server and type definitions.
*   `execa`: For robust execution of shell commands.
*   `zod`: For schema definition and validation.

## Development Notes

*   The server uses `execa` with `reject: false` to ensure that it always captures `stdout`, `stderr`, and `exitCode`, even if the command fails.
*   Environment variables passed in the request are merged with the server's process environment, with request-defined variables taking precedence in case of conflicts.
