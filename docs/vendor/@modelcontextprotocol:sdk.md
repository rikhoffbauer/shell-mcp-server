This file is a merged representation of a subset of the codebase, containing specifically included files, combined into a single document by Repomix.
The content has been processed where security check has been disabled.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: **/*.md, src/examples/**/*.*
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Security check has been disabled - content may contain sensitive information
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
src/
  examples/
    client/
      multipleClientsParallel.ts
      parallelToolCallsClient.ts
      simpleOAuthClient.ts
      simpleStreamableHttp.ts
      streamableHttpWithSseFallbackClient.ts
    server/
      demoInMemoryOAuthProvider.ts
      jsonResponseStreamableHttp.ts
      mcpServerOutputSchema.ts
      simpleSseServer.ts
      simpleStatelessStreamableHttp.ts
      simpleStreamableHttp.ts
      sseAndStreamableHttpCompatibleServer.ts
      standaloneSseWithGetStreamableHttp.ts
    shared/
      inMemoryEventStore.ts
    README.md
CLAUDE.md
CODE_OF_CONDUCT.md
CONTRIBUTING.md
README.md
SECURITY.md
```

# Files

## File: src/examples/client/multipleClientsParallel.ts
````typescript
import { Client } from '../../client/index.js';
import { StreamableHTTPClientTransport } from '../../client/streamableHttp.js';
import {
  CallToolRequest,
  CallToolResultSchema,
  LoggingMessageNotificationSchema,
  CallToolResult,
} from '../../types.js';

/**
 * Multiple Clients MCP Example
 * 
 * This client demonstrates how to:
 * 1. Create multiple MCP clients in parallel
 * 2. Each client calls a single tool 
 * 3. Track notifications from each client independently
 */

// Command line args processing
const args = process.argv.slice(2);
const serverUrl = args[0] || 'http://localhost:3000/mcp';

interface ClientConfig {
  id: string;
  name: string;
  toolName: string;
  toolArguments: Record<string, string | number | boolean>;
}

async function createAndRunClient(config: ClientConfig): Promise<{ id: string; result: CallToolResult }> {
  console.log(`[${config.id}] Creating client: ${config.name}`);

  const client = new Client({
    name: config.name,
    version: '1.0.0'
  });

  const transport = new StreamableHTTPClientTransport(new URL(serverUrl));

  // Set up client-specific error handler
  client.onerror = (error) => {
    console.error(`[${config.id}] Client error:`, error);
  };

  // Set up client-specific notification handler
  client.setNotificationHandler(LoggingMessageNotificationSchema, (notification) => {
    console.log(`[${config.id}] Notification: ${notification.params.data}`);
  });

  try {
    // Connect to the server
    await client.connect(transport);
    console.log(`[${config.id}] Connected to MCP server`);

    // Call the specified tool
    console.log(`[${config.id}] Calling tool: ${config.toolName}`);
    const toolRequest: CallToolRequest = {
      method: 'tools/call',
      params: {
        name: config.toolName,
        arguments: {
          ...config.toolArguments,
          // Add client ID to arguments for identification in notifications
          caller: config.id
        }
      }
    };

    const result = await client.request(toolRequest, CallToolResultSchema);
    console.log(`[${config.id}] Tool call completed`);

    // Keep the connection open for a bit to receive notifications
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Disconnect
    await transport.close();
    console.log(`[${config.id}] Disconnected from MCP server`);

    return { id: config.id, result };
  } catch (error) {
    console.error(`[${config.id}] Error:`, error);
    throw error;
  }
}

async function main(): Promise<void> {
  console.log('MCP Multiple Clients Example');
  console.log('============================');
  console.log(`Server URL: ${serverUrl}`);
  console.log('');

  try {
    // Define client configurations
    const clientConfigs: ClientConfig[] = [
      {
        id: 'client1',
        name: 'basic-client-1',
        toolName: 'start-notification-stream',
        toolArguments: {
          interval: 3, // 1 second between notifications
          count: 5     // Send 5 notifications
        }
      },
      {
        id: 'client2',
        name: 'basic-client-2',
        toolName: 'start-notification-stream',
        toolArguments: {
          interval: 2, // 2 seconds between notifications
          count: 3     // Send 3 notifications
        }
      },
      {
        id: 'client3',
        name: 'basic-client-3',
        toolName: 'start-notification-stream',
        toolArguments: {
          interval: 1, // 0.5 second between notifications
          count: 8       // Send 8 notifications
        }
      }
    ];

    // Start all clients in parallel
    console.log(`Starting ${clientConfigs.length} clients in parallel...`);
    console.log('');

    const clientPromises = clientConfigs.map(config => createAndRunClient(config));
    const results = await Promise.all(clientPromises);

    // Display results from all clients
    console.log('\n=== Final Results ===');
    results.forEach(({ id, result }) => {
      console.log(`\n[${id}] Tool result:`);
      if (Array.isArray(result.content)) {
        result.content.forEach((item: { type: string; text?: string }) => {
          if (item.type === 'text' && item.text) {
            console.log(`  ${item.text}`);
          } else {
            console.log(`  ${item.type} content:`, item);
          }
        });
      } else {
        console.log(`  Unexpected result format:`, result);
      }
    });

    console.log('\n=== All clients completed successfully ===');

  } catch (error) {
    console.error('Error running multiple clients:', error);
    process.exit(1);
  }
}

// Start the example
main().catch((error: unknown) => {
  console.error('Error running MCP multiple clients example:', error);
  process.exit(1);
});
````

## File: src/examples/client/parallelToolCallsClient.ts
````typescript
import { Client } from '../../client/index.js';
import { StreamableHTTPClientTransport } from '../../client/streamableHttp.js';
import {
  ListToolsRequest,
  ListToolsResultSchema,
  CallToolResultSchema,
  LoggingMessageNotificationSchema,
  CallToolResult,
} from '../../types.js';

/**
 * Parallel Tool Calls MCP Client
 * 
 * This client demonstrates how to:
 * 1. Start multiple tool calls in parallel
 * 2. Track notifications from each tool call using a caller parameter
 */

// Command line args processing
const args = process.argv.slice(2);
const serverUrl = args[0] || 'http://localhost:3000/mcp';

async function main(): Promise<void> {
  console.log('MCP Parallel Tool Calls Client');
  console.log('==============================');
  console.log(`Connecting to server at: ${serverUrl}`);

  let client: Client;
  let transport: StreamableHTTPClientTransport;

  try {
    // Create client with streamable HTTP transport
    client = new Client({
      name: 'parallel-tool-calls-client',
      version: '1.0.0'
    });

    client.onerror = (error) => {
      console.error('Client error:', error);
    };

    // Connect to the server
    transport = new StreamableHTTPClientTransport(new URL(serverUrl));
    await client.connect(transport);
    console.log('Successfully connected to MCP server');

    // Set up notification handler with caller identification
    client.setNotificationHandler(LoggingMessageNotificationSchema, (notification) => {
      console.log(`Notification: ${notification.params.data}`);
    });

    console.log("List tools")
    const toolsRequest = await listTools(client);
    console.log("Tools: ", toolsRequest)


    // 2. Start multiple notification tools in parallel
    console.log('\n=== Starting Multiple Notification Streams in Parallel ===');
    const toolResults = await startParallelNotificationTools(client);

    // Log the results from each tool call
    for (const [caller, result] of Object.entries(toolResults)) {
      console.log(`\n=== Tool result for ${caller} ===`);
      result.content.forEach((item: { type: string; text?: string; }) => {
        if (item.type === 'text') {
          console.log(`  ${item.text}`);
        } else {
          console.log(`  ${item.type} content:`, item);
        }
      });
    }

    // 3. Wait for all notifications (10 seconds)
    console.log('\n=== Waiting for all notifications ===');
    await new Promise(resolve => setTimeout(resolve, 10000));

    // 4. Disconnect
    console.log('\n=== Disconnecting ===');
    await transport.close();
    console.log('Disconnected from MCP server');

  } catch (error) {
    console.error('Error running client:', error);
    process.exit(1);
  }
}

/**
 * List available tools on the server
 */
async function listTools(client: Client): Promise<void> {
  try {
    const toolsRequest: ListToolsRequest = {
      method: 'tools/list',
      params: {}
    };
    const toolsResult = await client.request(toolsRequest, ListToolsResultSchema);

    console.log('Available tools:');
    if (toolsResult.tools.length === 0) {
      console.log('  No tools available');
    } else {
      for (const tool of toolsResult.tools) {
        console.log(`  - ${tool.name}: ${tool.description}`);
      }
    }
  } catch (error) {
    console.log(`Tools not supported by this server: ${error}`);
  }
}

/**
 * Start multiple notification tools in parallel with different configurations
 * Each tool call includes a caller parameter to identify its notifications
 */
async function startParallelNotificationTools(client: Client): Promise<Record<string, CallToolResult>> {
  try {
    // Define multiple tool calls with different configurations
    const toolCalls = [
      {
        caller: 'fast-notifier',
        request: {
          method: 'tools/call',
          params: {
            name: 'start-notification-stream',
            arguments: {
              interval: 2,  // 0.5 second between notifications
              count: 10,      // Send 10 notifications
              caller: 'fast-notifier' // Identify this tool call
            }
          }
        }
      },
      {
        caller: 'slow-notifier',
        request: {
          method: 'tools/call',
          params: {
            name: 'start-notification-stream',
            arguments: {
              interval: 5, // 2 seconds between notifications
              count: 5,       // Send 5 notifications
              caller: 'slow-notifier' // Identify this tool call
            }
          }
        }
      },
      {
        caller: 'burst-notifier',
        request: {
          method: 'tools/call',
          params: {
            name: 'start-notification-stream',
            arguments: {
              interval: 1,  // 0.1 second between notifications
              count: 3,       // Send just 3 notifications
              caller: 'burst-notifier' // Identify this tool call
            }
          }
        }
      }
    ];

    console.log(`Starting ${toolCalls.length} notification tools in parallel...`);

    // Start all tool calls in parallel
    const toolPromises = toolCalls.map(({ caller, request }) => {
      console.log(`Starting tool call for ${caller}...`);
      return client.request(request, CallToolResultSchema)
        .then(result => ({ caller, result }))
        .catch(error => {
          console.error(`Error in tool call for ${caller}:`, error);
          throw error;
        });
    });

    // Wait for all tool calls to complete
    const results = await Promise.all(toolPromises);

    // Organize results by caller
    const resultsByTool: Record<string, CallToolResult> = {};
    results.forEach(({ caller, result }) => {
      resultsByTool[caller] = result;
    });

    return resultsByTool;
  } catch (error) {
    console.error(`Error starting parallel notification tools:`, error);
    throw error;
  }
}

// Start the client
main().catch((error: unknown) => {
  console.error('Error running MCP client:', error);
  process.exit(1);
});
````

## File: src/examples/client/simpleOAuthClient.ts
````typescript
#!/usr/bin/env node

import { createServer } from 'node:http';
import { createInterface } from 'node:readline';
import { URL } from 'node:url';
import { exec } from 'node:child_process';
import { Client } from '../../client/index.js';
import { StreamableHTTPClientTransport } from '../../client/streamableHttp.js';
import { OAuthClientInformation, OAuthClientInformationFull, OAuthClientMetadata, OAuthTokens } from '../../shared/auth.js';
import {
  CallToolRequest,
  ListToolsRequest,
  CallToolResultSchema,
  ListToolsResultSchema
} from '../../types.js';
import { OAuthClientProvider, UnauthorizedError } from '../../client/auth.js';

// Configuration
const DEFAULT_SERVER_URL = 'http://localhost:3000/mcp';
const CALLBACK_PORT = 8090; // Use different port than auth server (3001)
const CALLBACK_URL = `http://localhost:${CALLBACK_PORT}/callback`;

/**
 * In-memory OAuth client provider for demonstration purposes
 * In production, you should persist tokens securely
 */
class InMemoryOAuthClientProvider implements OAuthClientProvider {
  private _clientInformation?: OAuthClientInformationFull;
  private _tokens?: OAuthTokens;
  private _codeVerifier?: string;

  constructor(
    private readonly _redirectUrl: string | URL,
    private readonly _clientMetadata: OAuthClientMetadata,
    onRedirect?: (url: URL) => void
  ) {
    this._onRedirect = onRedirect || ((url) => {
      console.log(`Redirect to: ${url.toString()}`);
    });
  }

  private _onRedirect: (url: URL) => void;

  get redirectUrl(): string | URL {
    return this._redirectUrl;
  }

  get clientMetadata(): OAuthClientMetadata {
    return this._clientMetadata;
  }

  clientInformation(): OAuthClientInformation | undefined {
    return this._clientInformation;
  }

  saveClientInformation(clientInformation: OAuthClientInformationFull): void {
    this._clientInformation = clientInformation;
  }

  tokens(): OAuthTokens | undefined {
    return this._tokens;
  }

  saveTokens(tokens: OAuthTokens): void {
    this._tokens = tokens;
  }

  redirectToAuthorization(authorizationUrl: URL): void {
    this._onRedirect(authorizationUrl);
  }

  saveCodeVerifier(codeVerifier: string): void {
    this._codeVerifier = codeVerifier;
  }

  codeVerifier(): string {
    if (!this._codeVerifier) {
      throw new Error('No code verifier saved');
    }
    return this._codeVerifier;
  }
}
/**
 * Interactive MCP client with OAuth authentication
 * Demonstrates the complete OAuth flow with browser-based authorization
 */
class InteractiveOAuthClient {
  private client: Client | null = null;
  private readonly rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  constructor(private serverUrl: string) { }

  /**
   * Prompts user for input via readline
   */
  private async question(query: string): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(query, resolve);
    });
  }

  /**
   * Opens the authorization URL in the user's default browser
   */
  private async openBrowser(url: string): Promise<void> {
    console.log(`🌐 Opening browser for authorization: ${url}`);

    const command = `open "${url}"`;

    exec(command, (error) => {
      if (error) {
        console.error(`Failed to open browser: ${error.message}`);
        console.log(`Please manually open: ${url}`);
      }
    });
  }
  /**
   * Example OAuth callback handler - in production, use a more robust approach
   * for handling callbacks and storing tokens
   */
  /**
   * Starts a temporary HTTP server to receive the OAuth callback
   */
  private async waitForOAuthCallback(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const server = createServer((req, res) => {
        // Ignore favicon requests
        if (req.url === '/favicon.ico') {
          res.writeHead(404);
          res.end();
          return;
        }

        console.log(`📥 Received callback: ${req.url}`);
        const parsedUrl = new URL(req.url || '', 'http://localhost');
        const code = parsedUrl.searchParams.get('code');
        const error = parsedUrl.searchParams.get('error');

        if (code) {
          console.log(`✅ Authorization code received: ${code?.substring(0, 10)}...`);
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(`
            <html>
              <body>
                <h1>Authorization Successful!</h1>
                <p>You can close this window and return to the terminal.</p>
                <script>setTimeout(() => window.close(), 2000);</script>
              </body>
            </html>
          `);

          resolve(code);
          setTimeout(() => server.close(), 3000);
        } else if (error) {
          console.log(`❌ Authorization error: ${error}`);
          res.writeHead(400, { 'Content-Type': 'text/html' });
          res.end(`
            <html>
              <body>
                <h1>Authorization Failed</h1>
                <p>Error: ${error}</p>
              </body>
            </html>
          `);
          reject(new Error(`OAuth authorization failed: ${error}`));
        } else {
          console.log(`❌ No authorization code or error in callback`);
          res.writeHead(400);
          res.end('Bad request');
          reject(new Error('No authorization code provided'));
        }
      });

      server.listen(CALLBACK_PORT, () => {
        console.log(`OAuth callback server started on http://localhost:${CALLBACK_PORT}`);
      });
    });
  }

  private async attemptConnection(oauthProvider: InMemoryOAuthClientProvider): Promise<void> {
    console.log('🚢 Creating transport with OAuth provider...');
    const baseUrl = new URL(this.serverUrl);
    const transport = new StreamableHTTPClientTransport(baseUrl, {
      authProvider: oauthProvider
    });
    console.log('🚢 Transport created');

    try {
      console.log('🔌 Attempting connection (this will trigger OAuth redirect)...');
      await this.client!.connect(transport);
      console.log('✅ Connected successfully');
    } catch (error) {
      if (error instanceof UnauthorizedError) {
        console.log('🔐 OAuth required - waiting for authorization...');
        const callbackPromise = this.waitForOAuthCallback();
        const authCode = await callbackPromise;
        await transport.finishAuth(authCode);
        console.log('🔐 Authorization code received:', authCode);
        console.log('🔌 Reconnecting with authenticated transport...');
        await this.attemptConnection(oauthProvider);
      } else {
        console.error('❌ Connection failed with non-auth error:', error);
        throw error;
      }
    }
  }

  /**
   * Establishes connection to the MCP server with OAuth authentication
   */
  async connect(): Promise<void> {
    console.log(`🔗 Attempting to connect to ${this.serverUrl}...`);

    const clientMetadata: OAuthClientMetadata = {
      client_name: 'Simple OAuth MCP Client',
      redirect_uris: [CALLBACK_URL],
      grant_types: ['authorization_code', 'refresh_token'],
      response_types: ['code'],
      token_endpoint_auth_method: 'client_secret_post',
      scope: 'mcp:tools'
    };

    console.log('🔐 Creating OAuth provider...');
    const oauthProvider = new InMemoryOAuthClientProvider(
      CALLBACK_URL,
      clientMetadata,
      (redirectUrl: URL) => {
        console.log(`📌 OAuth redirect handler called - opening browser`);
        console.log(`Opening browser to: ${redirectUrl.toString()}`);
        this.openBrowser(redirectUrl.toString());
      }
    );
    console.log('🔐 OAuth provider created');

    console.log('👤 Creating MCP client...');
    this.client = new Client({
      name: 'simple-oauth-client',
      version: '1.0.0',
    }, { capabilities: {} });
    console.log('👤 Client created');

    console.log('🔐 Starting OAuth flow...');

    await this.attemptConnection(oauthProvider);

    // Start interactive loop
    await this.interactiveLoop();
  }

  /**
   * Main interactive loop for user commands
   */
  async interactiveLoop(): Promise<void> {
    console.log('\n🎯 Interactive MCP Client with OAuth');
    console.log('Commands:');
    console.log('  list - List available tools');
    console.log('  call <tool_name> [args] - Call a tool');
    console.log('  quit - Exit the client');
    console.log();

    while (true) {
      try {
        const command = await this.question('mcp> ');

        if (!command.trim()) {
          continue;
        }

        if (command === 'quit') {
          break;
        } else if (command === 'list') {
          await this.listTools();
        } else if (command.startsWith('call ')) {
          await this.handleCallTool(command);
        } else {
          console.log('❌ Unknown command. Try \'list\', \'call <tool_name>\', or \'quit\'');
        }
      } catch (error) {
        if (error instanceof Error && error.message === 'SIGINT') {
          console.log('\n\n👋 Goodbye!');
          break;
        }
        console.error('❌ Error:', error);
      }
    }
  }

  private async listTools(): Promise<void> {
    if (!this.client) {
      console.log('❌ Not connected to server');
      return;
    }

    try {
      const request: ListToolsRequest = {
        method: 'tools/list',
        params: {},
      };

      const result = await this.client.request(request, ListToolsResultSchema);

      if (result.tools && result.tools.length > 0) {
        console.log('\n📋 Available tools:');
        result.tools.forEach((tool, index) => {
          console.log(`${index + 1}. ${tool.name}`);
          if (tool.description) {
            console.log(`   Description: ${tool.description}`);
          }
          console.log();
        });
      } else {
        console.log('No tools available');
      }
    } catch (error) {
      console.error('❌ Failed to list tools:', error);
    }
  }

  private async handleCallTool(command: string): Promise<void> {
    const parts = command.split(/\s+/);
    const toolName = parts[1];

    if (!toolName) {
      console.log('❌ Please specify a tool name');
      return;
    }

    // Parse arguments (simple JSON-like format)
    let toolArgs: Record<string, unknown> = {};
    if (parts.length > 2) {
      const argsString = parts.slice(2).join(' ');
      try {
        toolArgs = JSON.parse(argsString);
      } catch {
        console.log('❌ Invalid arguments format (expected JSON)');
        return;
      }
    }

    await this.callTool(toolName, toolArgs);
  }

  private async callTool(toolName: string, toolArgs: Record<string, unknown>): Promise<void> {
    if (!this.client) {
      console.log('❌ Not connected to server');
      return;
    }

    try {
      const request: CallToolRequest = {
        method: 'tools/call',
        params: {
          name: toolName,
          arguments: toolArgs,
        },
      };

      const result = await this.client.request(request, CallToolResultSchema);

      console.log(`\n🔧 Tool '${toolName}' result:`);
      if (result.content) {
        result.content.forEach((content) => {
          if (content.type === 'text') {
            console.log(content.text);
          } else {
            console.log(content);
          }
        });
      } else {
        console.log(result);
      }
    } catch (error) {
      console.error(`❌ Failed to call tool '${toolName}':`, error);
    }
  }

  close(): void {
    this.rl.close();
    if (this.client) {
      // Note: Client doesn't have a close method in the current implementation
      // This would typically close the transport connection
    }
  }
}

/**
 * Main entry point
 */
async function main(): Promise<void> {
  const serverUrl = process.env.MCP_SERVER_URL || DEFAULT_SERVER_URL;

  console.log('🚀 Simple MCP OAuth Client');
  console.log(`Connecting to: ${serverUrl}`);
  console.log();

  const client = new InteractiveOAuthClient(serverUrl);

  // Handle graceful shutdown
  process.on('SIGINT', () => {
    console.log('\n\n👋 Goodbye!');
    client.close();
    process.exit(0);
  });

  try {
    await client.connect();
  } catch (error) {
    console.error('Failed to start client:', error);
    process.exit(1);
  } finally {
    client.close();
  }
}

// Run if this file is executed directly
main().catch((error) => {
  console.error('Unhandled error:', error);
  process.exit(1);
});
````

## File: src/examples/client/simpleStreamableHttp.ts
````typescript
import { Client } from '../../client/index.js';
import { StreamableHTTPClientTransport } from '../../client/streamableHttp.js';
import { createInterface } from 'node:readline';
import {
  ListToolsRequest,
  ListToolsResultSchema,
  CallToolRequest,
  CallToolResultSchema,
  ListPromptsRequest,
  ListPromptsResultSchema,
  GetPromptRequest,
  GetPromptResultSchema,
  ListResourcesRequest,
  ListResourcesResultSchema,
  LoggingMessageNotificationSchema,
  ResourceListChangedNotificationSchema,
} from '../../types.js';

// Create readline interface for user input
const readline = createInterface({
  input: process.stdin,
  output: process.stdout
});

// Track received notifications for debugging resumability
let notificationCount = 0;

// Global client and transport for interactive commands
let client: Client | null = null;
let transport: StreamableHTTPClientTransport | null = null;
let serverUrl = 'http://localhost:3000/mcp';
let notificationsToolLastEventId: string | undefined = undefined;
let sessionId: string | undefined = undefined;

async function main(): Promise<void> {
  console.log('MCP Interactive Client');
  console.log('=====================');

  // Connect to server immediately with default settings
  await connect();

  // Print help and start the command loop
  printHelp();
  commandLoop();
}

function printHelp(): void {
  console.log('\nAvailable commands:');
  console.log('  connect [url]              - Connect to MCP server (default: http://localhost:3000/mcp)');
  console.log('  disconnect                 - Disconnect from server');
  console.log('  terminate-session          - Terminate the current session');
  console.log('  reconnect                  - Reconnect to the server');
  console.log('  list-tools                 - List available tools');
  console.log('  call-tool <name> [args]    - Call a tool with optional JSON arguments');
  console.log('  greet [name]               - Call the greet tool');
  console.log('  multi-greet [name]         - Call the multi-greet tool with notifications');
  console.log('  start-notifications [interval] [count] - Start periodic notifications');
  console.log('  run-notifications-tool-with-resumability [interval] [count] - Run notification tool with resumability');
  console.log('  list-prompts               - List available prompts');
  console.log('  get-prompt [name] [args]   - Get a prompt with optional JSON arguments');
  console.log('  list-resources             - List available resources');
  console.log('  help                       - Show this help');
  console.log('  quit                       - Exit the program');
}

function commandLoop(): void {
  readline.question('\n> ', async (input) => {
    const args = input.trim().split(/\s+/);
    const command = args[0]?.toLowerCase();

    try {
      switch (command) {
        case 'connect':
          await connect(args[1]);
          break;

        case 'disconnect':
          await disconnect();
          break;

        case 'terminate-session':
          await terminateSession();
          break;

        case 'reconnect':
          await reconnect();
          break;

        case 'list-tools':
          await listTools();
          break;

        case 'call-tool':
          if (args.length < 2) {
            console.log('Usage: call-tool <name> [args]');
          } else {
            const toolName = args[1];
            let toolArgs = {};
            if (args.length > 2) {
              try {
                toolArgs = JSON.parse(args.slice(2).join(' '));
              } catch {
                console.log('Invalid JSON arguments. Using empty args.');
              }
            }
            await callTool(toolName, toolArgs);
          }
          break;

        case 'greet':
          await callGreetTool(args[1] || 'MCP User');
          break;

        case 'multi-greet':
          await callMultiGreetTool(args[1] || 'MCP User');
          break;

        case 'start-notifications': {
          const interval = args[1] ? parseInt(args[1], 10) : 2000;
          const count = args[2] ? parseInt(args[2], 10) : 10;
          await startNotifications(interval, count);
          break;
        }

        case 'run-notifications-tool-with-resumability': {
          const interval = args[1] ? parseInt(args[1], 10) : 2000;
          const count = args[2] ? parseInt(args[2], 10) : 10;
          await runNotificationsToolWithResumability(interval, count);
          break;
        }

        case 'list-prompts':
          await listPrompts();
          break;

        case 'get-prompt':
          if (args.length < 2) {
            console.log('Usage: get-prompt <name> [args]');
          } else {
            const promptName = args[1];
            let promptArgs = {};
            if (args.length > 2) {
              try {
                promptArgs = JSON.parse(args.slice(2).join(' '));
              } catch {
                console.log('Invalid JSON arguments. Using empty args.');
              }
            }
            await getPrompt(promptName, promptArgs);
          }
          break;

        case 'list-resources':
          await listResources();
          break;

        case 'help':
          printHelp();
          break;

        case 'quit':
        case 'exit':
          await cleanup();
          return;

        default:
          if (command) {
            console.log(`Unknown command: ${command}`);
          }
          break;
      }
    } catch (error) {
      console.error(`Error executing command: ${error}`);
    }

    // Continue the command loop
    commandLoop();
  });
}

async function connect(url?: string): Promise<void> {
  if (client) {
    console.log('Already connected. Disconnect first.');
    return;
  }

  if (url) {
    serverUrl = url;
  }

  console.log(`Connecting to ${serverUrl}...`);

  try {
    // Create a new client
    client = new Client({
      name: 'example-client',
      version: '1.0.0'
    });
    client.onerror = (error) => {
      console.error('\x1b[31mClient error:', error, '\x1b[0m');
    }

    transport = new StreamableHTTPClientTransport(
      new URL(serverUrl),
      {
        sessionId: sessionId
      }
    );

    // Set up notification handlers
    client.setNotificationHandler(LoggingMessageNotificationSchema, (notification) => {
      notificationCount++;
      console.log(`\nNotification #${notificationCount}: ${notification.params.level} - ${notification.params.data}`);
      // Re-display the prompt
      process.stdout.write('> ');
    });

    client.setNotificationHandler(ResourceListChangedNotificationSchema, async (_) => {
      console.log(`\nResource list changed notification received!`);
      try {
        if (!client) {
          console.log('Client disconnected, cannot fetch resources');
          return;
        }
        const resourcesResult = await client.request({
          method: 'resources/list',
          params: {}
        }, ListResourcesResultSchema);
        console.log('Available resources count:', resourcesResult.resources.length);
      } catch {
        console.log('Failed to list resources after change notification');
      }
      // Re-display the prompt
      process.stdout.write('> ');
    });

    // Connect the client
    await client.connect(transport);
    sessionId = transport.sessionId
    console.log('Transport created with session ID:', sessionId);
    console.log('Connected to MCP server');
  } catch (error) {
    console.error('Failed to connect:', error);
    client = null;
    transport = null;
  }
}

async function disconnect(): Promise<void> {
  if (!client || !transport) {
    console.log('Not connected.');
    return;
  }

  try {
    await transport.close();
    console.log('Disconnected from MCP server');
    client = null;
    transport = null;
  } catch (error) {
    console.error('Error disconnecting:', error);
  }
}

async function terminateSession(): Promise<void> {
  if (!client || !transport) {
    console.log('Not connected.');
    return;
  }

  try {
    console.log('Terminating session with ID:', transport.sessionId);
    await transport.terminateSession();
    console.log('Session terminated successfully');

    // Check if sessionId was cleared after termination
    if (!transport.sessionId) {
      console.log('Session ID has been cleared');
      sessionId = undefined;

      // Also close the transport and clear client objects
      await transport.close();
      console.log('Transport closed after session termination');
      client = null;
      transport = null;
    } else {
      console.log('Server responded with 405 Method Not Allowed (session termination not supported)');
      console.log('Session ID is still active:', transport.sessionId);
    }
  } catch (error) {
    console.error('Error terminating session:', error);
  }
}

async function reconnect(): Promise<void> {
  if (client) {
    await disconnect();
  }
  await connect();
}

async function listTools(): Promise<void> {
  if (!client) {
    console.log('Not connected to server.');
    return;
  }

  try {
    const toolsRequest: ListToolsRequest = {
      method: 'tools/list',
      params: {}
    };
    const toolsResult = await client.request(toolsRequest, ListToolsResultSchema);

    console.log('Available tools:');
    if (toolsResult.tools.length === 0) {
      console.log('  No tools available');
    } else {
      for (const tool of toolsResult.tools) {
        console.log(`  - ${tool.name}: ${tool.description}`);
      }
    }
  } catch (error) {
    console.log(`Tools not supported by this server (${error})`);
  }
}

async function callTool(name: string, args: Record<string, unknown>): Promise<void> {
  if (!client) {
    console.log('Not connected to server.');
    return;
  }

  try {
    const request: CallToolRequest = {
      method: 'tools/call',
      params: {
        name,
        arguments: args
      }
    };

    console.log(`Calling tool '${name}' with args:`, args);
    const result = await client.request(request, CallToolResultSchema);

    console.log('Tool result:');
    result.content.forEach(item => {
      if (item.type === 'text') {
        console.log(`  ${item.text}`);
      } else {
        console.log(`  ${item.type} content:`, item);
      }
    });
  } catch (error) {
    console.log(`Error calling tool ${name}: ${error}`);
  }
}


async function callGreetTool(name: string): Promise<void> {
  await callTool('greet', { name });
}

async function callMultiGreetTool(name: string): Promise<void> {
  console.log('Calling multi-greet tool with notifications...');
  await callTool('multi-greet', { name });
}

async function startNotifications(interval: number, count: number): Promise<void> {
  console.log(`Starting notification stream: interval=${interval}ms, count=${count || 'unlimited'}`);
  await callTool('start-notification-stream', { interval, count });
}

async function runNotificationsToolWithResumability(interval: number, count: number): Promise<void> {
  if (!client) {
    console.log('Not connected to server.');
    return;
  }

  try {
    console.log(`Starting notification stream with resumability: interval=${interval}ms, count=${count || 'unlimited'}`);
    console.log(`Using resumption token: ${notificationsToolLastEventId || 'none'}`);
    
    const request: CallToolRequest = {
      method: 'tools/call',
      params: {
        name: 'start-notification-stream',
        arguments: { interval, count }
      }
    };

    const onLastEventIdUpdate = (event: string) => {
      notificationsToolLastEventId = event;
      console.log(`Updated resumption token: ${event}`);
    };
    
    const result = await client.request(request, CallToolResultSchema, {
      resumptionToken: notificationsToolLastEventId,
      onresumptiontoken: onLastEventIdUpdate
    });

    console.log('Tool result:');
    result.content.forEach(item => {
      if (item.type === 'text') {
        console.log(`  ${item.text}`);
      } else {
        console.log(`  ${item.type} content:`, item);
      }
    });
  } catch (error) {
    console.log(`Error starting notification stream: ${error}`);
  }
}

async function listPrompts(): Promise<void> {
  if (!client) {
    console.log('Not connected to server.');
    return;
  }

  try {
    const promptsRequest: ListPromptsRequest = {
      method: 'prompts/list',
      params: {}
    };
    const promptsResult = await client.request(promptsRequest, ListPromptsResultSchema);
    console.log('Available prompts:');
    if (promptsResult.prompts.length === 0) {
      console.log('  No prompts available');
    } else {
      for (const prompt of promptsResult.prompts) {
        console.log(`  - ${prompt.name}: ${prompt.description}`);
      }
    }
  } catch (error) {
    console.log(`Prompts not supported by this server (${error})`);
  }
}

async function getPrompt(name: string, args: Record<string, unknown>): Promise<void> {
  if (!client) {
    console.log('Not connected to server.');
    return;
  }

  try {
    const promptRequest: GetPromptRequest = {
      method: 'prompts/get',
      params: {
        name,
        arguments: args as Record<string, string>
      }
    };

    const promptResult = await client.request(promptRequest, GetPromptResultSchema);
    console.log('Prompt template:');
    promptResult.messages.forEach((msg, index) => {
      console.log(`  [${index + 1}] ${msg.role}: ${msg.content.text}`);
    });
  } catch (error) {
    console.log(`Error getting prompt ${name}: ${error}`);
  }
}

async function listResources(): Promise<void> {
  if (!client) {
    console.log('Not connected to server.');
    return;
  }

  try {
    const resourcesRequest: ListResourcesRequest = {
      method: 'resources/list',
      params: {}
    };
    const resourcesResult = await client.request(resourcesRequest, ListResourcesResultSchema);

    console.log('Available resources:');
    if (resourcesResult.resources.length === 0) {
      console.log('  No resources available');
    } else {
      for (const resource of resourcesResult.resources) {
        console.log(`  - ${resource.name}: ${resource.uri}`);
      }
    }
  } catch (error) {
    console.log(`Resources not supported by this server (${error})`);
  }
}

async function cleanup(): Promise<void> {
  if (client && transport) {
    try {
      // First try to terminate the session gracefully
      if (transport.sessionId) {
        try {
          console.log('Terminating session before exit...');
          await transport.terminateSession();
          console.log('Session terminated successfully');
        } catch (error) {
          console.error('Error terminating session:', error);
        }
      }

      // Then close the transport
      await transport.close();
    } catch (error) {
      console.error('Error closing transport:', error);
    }
  }

  process.stdin.setRawMode(false);
  readline.close();
  console.log('\nGoodbye!');
  process.exit(0);
}

// Set up raw mode for keyboard input to capture Escape key
process.stdin.setRawMode(true);
process.stdin.on('data', async (data) => {
  // Check for Escape key (27)
  if (data.length === 1 && data[0] === 27) {
    console.log('\nESC key pressed. Disconnecting from server...');

    // Abort current operation and disconnect from server
    if (client && transport) {
      await disconnect();
      console.log('Disconnected. Press Enter to continue.');
    } else {
      console.log('Not connected to server.');
    }

    // Re-display the prompt
    process.stdout.write('> ');
  }
});

// Handle Ctrl+C
process.on('SIGINT', async () => {
  console.log('\nReceived SIGINT. Cleaning up...');
  await cleanup();
});

// Start the interactive client
main().catch((error: unknown) => {
  console.error('Error running MCP client:', error);
  process.exit(1);
});
````

## File: src/examples/client/streamableHttpWithSseFallbackClient.ts
````typescript
import { Client } from '../../client/index.js';
import { StreamableHTTPClientTransport } from '../../client/streamableHttp.js';
import { SSEClientTransport } from '../../client/sse.js';
import {
  ListToolsRequest,
  ListToolsResultSchema,
  CallToolRequest,
  CallToolResultSchema,
  LoggingMessageNotificationSchema,
} from '../../types.js';

/**
 * Simplified Backwards Compatible MCP Client
 * 
 * This client demonstrates backward compatibility with both:
 * 1. Modern servers using Streamable HTTP transport (protocol version 2025-03-26)
 * 2. Older servers using HTTP+SSE transport (protocol version 2024-11-05)
 * 
 * Following the MCP specification for backwards compatibility:
 * - Attempts to POST an initialize request to the server URL first (modern transport)
 * - If that fails with 4xx status, falls back to GET request for SSE stream (older transport)
 */

// Command line args processing
const args = process.argv.slice(2);
const serverUrl = args[0] || 'http://localhost:3000/mcp';

async function main(): Promise<void> {
  console.log('MCP Backwards Compatible Client');
  console.log('===============================');
  console.log(`Connecting to server at: ${serverUrl}`);

  let client: Client;
  let transport: StreamableHTTPClientTransport | SSEClientTransport;

  try {
    // Try connecting with automatic transport detection
    const connection = await connectWithBackwardsCompatibility(serverUrl);
    client = connection.client;
    transport = connection.transport;

    // Set up notification handler
    client.setNotificationHandler(LoggingMessageNotificationSchema, (notification) => {
      console.log(`Notification: ${notification.params.level} - ${notification.params.data}`);
    });

    // DEMO WORKFLOW:
    // 1. List available tools
    console.log('\n=== Listing Available Tools ===');
    await listTools(client);

    // 2. Call the notification tool
    console.log('\n=== Starting Notification Stream ===');
    await startNotificationTool(client);

    // 3. Wait for all notifications (5 seconds)
    console.log('\n=== Waiting for all notifications ===');
    await new Promise(resolve => setTimeout(resolve, 5000));

    // 4. Disconnect
    console.log('\n=== Disconnecting ===');
    await transport.close();
    console.log('Disconnected from MCP server');

  } catch (error) {
    console.error('Error running client:', error);
    process.exit(1);
  }
}

/**
 * Connect to an MCP server with backwards compatibility
 * Following the spec for client backward compatibility
 */
async function connectWithBackwardsCompatibility(url: string): Promise<{
  client: Client,
  transport: StreamableHTTPClientTransport | SSEClientTransport,
  transportType: 'streamable-http' | 'sse'
}> {
  console.log('1. Trying Streamable HTTP transport first...');

  // Step 1: Try Streamable HTTP transport first
  const client = new Client({
    name: 'backwards-compatible-client',
    version: '1.0.0'
  });

  client.onerror = (error) => {
    console.error('Client error:', error);
  };
  const baseUrl = new URL(url);

  try {
    // Create modern transport
    const streamableTransport = new StreamableHTTPClientTransport(baseUrl);
    await client.connect(streamableTransport);

    console.log('Successfully connected using modern Streamable HTTP transport.');
    return {
      client,
      transport: streamableTransport,
      transportType: 'streamable-http'
    };
  } catch (error) {
    // Step 2: If transport fails, try the older SSE transport
    console.log(`StreamableHttp transport connection failed: ${error}`);
    console.log('2. Falling back to deprecated HTTP+SSE transport...');

    try {
      // Create SSE transport pointing to /sse endpoint
      const sseTransport = new SSEClientTransport(baseUrl);
      const sseClient = new Client({
        name: 'backwards-compatible-client',
        version: '1.0.0'
      });
      await sseClient.connect(sseTransport);

      console.log('Successfully connected using deprecated HTTP+SSE transport.');
      return {
        client: sseClient,
        transport: sseTransport,
        transportType: 'sse'
      };
    } catch (sseError) {
      console.error(`Failed to connect with either transport method:\n1. Streamable HTTP error: ${error}\n2. SSE error: ${sseError}`);
      throw new Error('Could not connect to server with any available transport');
    }
  }
}

/**
 * List available tools on the server
 */
async function listTools(client: Client): Promise<void> {
  try {
    const toolsRequest: ListToolsRequest = {
      method: 'tools/list',
      params: {}
    };
    const toolsResult = await client.request(toolsRequest, ListToolsResultSchema);

    console.log('Available tools:');
    if (toolsResult.tools.length === 0) {
      console.log('  No tools available');
    } else {
      for (const tool of toolsResult.tools) {
        console.log(`  - ${tool.name}: ${tool.description}`);
      }
    }
  } catch (error) {
    console.log(`Tools not supported by this server: ${error}`);
  }
}

/**
 * Start a notification stream by calling the notification tool
 */
async function startNotificationTool(client: Client): Promise<void> {
  try {
    // Call the notification tool using reasonable defaults
    const request: CallToolRequest = {
      method: 'tools/call',
      params: {
        name: 'start-notification-stream',
        arguments: {
          interval: 1000, // 1 second between notifications
          count: 5       // Send 5 notifications
        }
      }
    };

    console.log('Calling notification tool...');
    const result = await client.request(request, CallToolResultSchema);

    console.log('Tool result:');
    result.content.forEach(item => {
      if (item.type === 'text') {
        console.log(`  ${item.text}`);
      } else {
        console.log(`  ${item.type} content:`, item);
      }
    });
  } catch (error) {
    console.log(`Error calling notification tool: ${error}`);
  }
}

// Start the client
main().catch((error: unknown) => {
  console.error('Error running MCP client:', error);
  process.exit(1);
});
````

## File: src/examples/server/demoInMemoryOAuthProvider.ts
````typescript
import { randomUUID } from 'node:crypto';
import { AuthorizationParams, OAuthServerProvider } from '../../server/auth/provider.js';
import { OAuthRegisteredClientsStore } from '../../server/auth/clients.js';
import { OAuthClientInformationFull, OAuthMetadata, OAuthTokens } from 'src/shared/auth.js';
import express, { Request, Response } from "express";
import { AuthInfo } from 'src/server/auth/types.js';
import { createOAuthMetadata, mcpAuthRouter } from 'src/server/auth/router.js';


export class DemoInMemoryClientsStore implements OAuthRegisteredClientsStore {
  private clients = new Map<string, OAuthClientInformationFull>();

  async getClient(clientId: string) {
    return this.clients.get(clientId);
  }

  async registerClient(clientMetadata: OAuthClientInformationFull) {
    this.clients.set(clientMetadata.client_id, clientMetadata);
    return clientMetadata;
  }
}

/**
 * 🚨 DEMO ONLY - NOT FOR PRODUCTION
 *
 * This example demonstrates MCP OAuth flow but lacks some of the features required for production use,
 * for example:
 * - Persistent token storage
 * - Rate limiting
 */
export class DemoInMemoryAuthProvider implements OAuthServerProvider {
  clientsStore = new DemoInMemoryClientsStore();
  private codes = new Map<string, {
    params: AuthorizationParams,
    client: OAuthClientInformationFull}>();
  private tokens = new Map<string, AuthInfo>();

  async authorize(
    client: OAuthClientInformationFull,
    params: AuthorizationParams,
    res: Response
  ): Promise<void> {
    const code = randomUUID();

    const searchParams = new URLSearchParams({
      code,
    });
    if (params.state !== undefined) {
      searchParams.set('state', params.state);
    }

    this.codes.set(code, {
      client,
      params
    });

    const targetUrl = new URL(client.redirect_uris[0]);
    targetUrl.search = searchParams.toString();
    res.redirect(targetUrl.toString());
  }

  async challengeForAuthorizationCode(
    client: OAuthClientInformationFull,
    authorizationCode: string
  ): Promise<string> {

    // Store the challenge with the code data
    const codeData = this.codes.get(authorizationCode);
    if (!codeData) {
      throw new Error('Invalid authorization code');
    }

    return codeData.params.codeChallenge;
  }

  async exchangeAuthorizationCode(
    client: OAuthClientInformationFull,
    authorizationCode: string,
    // Note: code verifier is checked in token.ts by default
    // it's unused here for that reason.
    _codeVerifier?: string
  ): Promise<OAuthTokens> {
    const codeData = this.codes.get(authorizationCode);
    if (!codeData) {
      throw new Error('Invalid authorization code');
    }

    if (codeData.client.client_id !== client.client_id) {
      throw new Error(`Authorization code was not issued to this client, ${codeData.client.client_id} != ${client.client_id}`);
    }

    this.codes.delete(authorizationCode);
    const token = randomUUID();

    const tokenData = {
      token,
      clientId: client.client_id,
      scopes: codeData.params.scopes || [],
      expiresAt: Date.now() + 3600000, // 1 hour
      type: 'access'
    };

    this.tokens.set(token, tokenData);

    return {
      access_token: token,
      token_type: 'bearer',
      expires_in: 3600,
      scope: (codeData.params.scopes || []).join(' '),
    };
  }

  async exchangeRefreshToken(
    _client: OAuthClientInformationFull,
    _refreshToken: string,
    _scopes?: string[]
  ): Promise<OAuthTokens> {
    throw new Error('Not implemented for example demo');
  }

  async verifyAccessToken(token: string): Promise<AuthInfo> {
    const tokenData = this.tokens.get(token);
    if (!tokenData || !tokenData.expiresAt || tokenData.expiresAt < Date.now()) {
      throw new Error('Invalid or expired token');
    }

    return {
      token,
      clientId: tokenData.clientId,
      scopes: tokenData.scopes,
      expiresAt: Math.floor(tokenData.expiresAt / 1000),
    };
  }
}


export const setupAuthServer = (authServerUrl: URL): OAuthMetadata => {
  // Create separate auth server app
  // NOTE: This is a separate app on a separate port to illustrate
  // how to separate an OAuth Authorization Server from a Resource
  // server in the SDK. The SDK is not intended to be provide a standalone
  // authorization server.
  const provider = new DemoInMemoryAuthProvider();
  const authApp = express();
  authApp.use(express.json());
  // For introspection requests
  authApp.use(express.urlencoded());

  // Add OAuth routes to the auth server
  // NOTE: this will also add a protected resource metadata route,
  // but it won't be used, so leave it.
  authApp.use(mcpAuthRouter({
    provider,
    issuerUrl: authServerUrl,
    scopesSupported: ['mcp:tools'],
  }));

  authApp.post('/introspect', async (req: Request, res: Response) => {
    try {
      const { token } = req.body;
      if (!token) {
        res.status(400).json({ error: 'Token is required' });
        return;
      }

      const tokenInfo = await provider.verifyAccessToken(token);
      res.json({
        active: true,
        client_id: tokenInfo.clientId,
        scope: tokenInfo.scopes.join(' '),
        exp: tokenInfo.expiresAt
      });
      return
    } catch (error) {
      res.status(401).json({
        active: false,
        error: 'Unauthorized',
        error_description: `Invalid token: ${error}`
      });
    }
  });

  const auth_port = authServerUrl.port;
  // Start the auth server
  authApp.listen(auth_port, () => {
    console.log(`OAuth Authorization Server listening on port ${auth_port}`);
  });

  // Note: we could fetch this from the server, but then we end up
  // with some top level async which gets annoying.
  const oauthMetadata: OAuthMetadata = createOAuthMetadata({
    provider,
    issuerUrl: authServerUrl,
    scopesSupported: ['mcp:tools'],
  })

  oauthMetadata.introspection_endpoint = new URL("/introspect", authServerUrl).href;

  return oauthMetadata;
}
````

## File: src/examples/server/jsonResponseStreamableHttp.ts
````typescript
import express, { Request, Response } from 'express';
import { randomUUID } from 'node:crypto';
import { McpServer } from '../../server/mcp.js';
import { StreamableHTTPServerTransport } from '../../server/streamableHttp.js';
import { z } from 'zod';
import { CallToolResult, isInitializeRequest } from '../../types.js';


// Create an MCP server with implementation details
const getServer = () => {
  const server = new McpServer({
    name: 'json-response-streamable-http-server',
    version: '1.0.0',
  }, {
    capabilities: {
      logging: {},
    }
  });

  // Register a simple tool that returns a greeting
  server.tool(
    'greet',
    'A simple greeting tool',
    {
      name: z.string().describe('Name to greet'),
    },
    async ({ name }): Promise<CallToolResult> => {
      return {
        content: [
          {
            type: 'text',
            text: `Hello, ${name}!`,
          },
        ],
      };
    }
  );

  // Register a tool that sends multiple greetings with notifications
  server.tool(
    'multi-greet',
    'A tool that sends different greetings with delays between them',
    {
      name: z.string().describe('Name to greet'),
    },
    async ({ name }, { sendNotification }): Promise<CallToolResult> => {
      const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

      await sendNotification({
        method: "notifications/message",
        params: { level: "debug", data: `Starting multi-greet for ${name}` }
      });

      await sleep(1000); // Wait 1 second before first greeting

      await sendNotification({
        method: "notifications/message",
        params: { level: "info", data: `Sending first greeting to ${name}` }
      });

      await sleep(1000); // Wait another second before second greeting

      await sendNotification({
        method: "notifications/message",
        params: { level: "info", data: `Sending second greeting to ${name}` }
      });

      return {
        content: [
          {
            type: 'text',
            text: `Good morning, ${name}!`,
          }
        ],
      };
    }
  );
  return server;
}

const app = express();
app.use(express.json());

// Map to store transports by session ID
const transports: { [sessionId: string]: StreamableHTTPServerTransport } = {};

app.post('/mcp', async (req: Request, res: Response) => {
  console.log('Received MCP request:', req.body);
  try {
    // Check for existing session ID
    const sessionId = req.headers['mcp-session-id'] as string | undefined;
    let transport: StreamableHTTPServerTransport;

    if (sessionId && transports[sessionId]) {
      // Reuse existing transport
      transport = transports[sessionId];
    } else if (!sessionId && isInitializeRequest(req.body)) {
      // New initialization request - use JSON response mode
      transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: () => randomUUID(),
        enableJsonResponse: true, // Enable JSON response mode
        onsessioninitialized: (sessionId) => {
          // Store the transport by session ID when session is initialized
          // This avoids race conditions where requests might come in before the session is stored
          console.log(`Session initialized with ID: ${sessionId}`);
          transports[sessionId] = transport;
        }
      });

      // Connect the transport to the MCP server BEFORE handling the request
      const server = getServer();
      await server.connect(transport);
      await transport.handleRequest(req, res, req.body);
      return; // Already handled
    } else {
      // Invalid request - no session ID or not initialization request
      res.status(400).json({
        jsonrpc: '2.0',
        error: {
          code: -32000,
          message: 'Bad Request: No valid session ID provided',
        },
        id: null,
      });
      return;
    }

    // Handle the request with existing transport - no need to reconnect
    await transport.handleRequest(req, res, req.body);
  } catch (error) {
    console.error('Error handling MCP request:', error);
    if (!res.headersSent) {
      res.status(500).json({
        jsonrpc: '2.0',
        error: {
          code: -32603,
          message: 'Internal server error',
        },
        id: null,
      });
    }
  }
});

// Handle GET requests for SSE streams according to spec
app.get('/mcp', async (req: Request, res: Response) => {
  // Since this is a very simple example, we don't support GET requests for this server
  // The spec requires returning 405 Method Not Allowed in this case
  res.status(405).set('Allow', 'POST').send('Method Not Allowed');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`MCP Streamable HTTP Server listening on port ${PORT}`);
});

// Handle server shutdown
process.on('SIGINT', async () => {
  console.log('Shutting down server...');
  process.exit(0);
});
````

## File: src/examples/server/mcpServerOutputSchema.ts
````typescript
#!/usr/bin/env node
/**
 * Example MCP server using the high-level McpServer API with outputSchema
 * This demonstrates how to easily create tools with structured output
 */

import { McpServer } from "../../server/mcp.js";
import { StdioServerTransport } from "../../server/stdio.js";
import { z } from "zod";

const server = new McpServer(
  {
    name: "mcp-output-schema-high-level-example",
    version: "1.0.0",
  }
);

// Define a tool with structured output - Weather data
server.registerTool(
  "get_weather",
  {
    description: "Get weather information for a city",
    inputSchema: {
      city: z.string().describe("City name"),
      country: z.string().describe("Country code (e.g., US, UK)")
    },
    outputSchema: {
      temperature: z.object({
        celsius: z.number(),
        fahrenheit: z.number()
      }),
      conditions: z.enum(["sunny", "cloudy", "rainy", "stormy", "snowy"]),
      humidity: z.number().min(0).max(100),
      wind: z.object({
        speed_kmh: z.number(),
        direction: z.string()
      })
    },
  },
  async ({ city, country }) => {
    // Parameters are available but not used in this example
    void city;
    void country;
    // Simulate weather API call
    const temp_c = Math.round((Math.random() * 35 - 5) * 10) / 10;
    const conditions = ["sunny", "cloudy", "rainy", "stormy", "snowy"][Math.floor(Math.random() * 5)];

    const structuredContent = {
      temperature: {
        celsius: temp_c,
        fahrenheit: Math.round((temp_c * 9 / 5 + 32) * 10) / 10
      },
      conditions,
      humidity: Math.round(Math.random() * 100),
      wind: {
        speed_kmh: Math.round(Math.random() * 50),
        direction: ["N", "NE", "E", "SE", "S", "SW", "W", "NW"][Math.floor(Math.random() * 8)]
      }
    };

    return {
      content: [{
        type: "text",
        text: JSON.stringify(structuredContent, null, 2)
      }],
      structuredContent
    };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("High-level Output Schema Example Server running on stdio");
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
````

## File: src/examples/server/simpleSseServer.ts
````typescript
import express, { Request, Response } from 'express';
import { McpServer } from '../../server/mcp.js';
import { SSEServerTransport } from '../../server/sse.js';
import { z } from 'zod';
import { CallToolResult } from '../../types.js';

/**
 * This example server demonstrates the deprecated HTTP+SSE transport 
 * (protocol version 2024-11-05). It mainly used for testing backward compatible clients.
 * 
 * The server exposes two endpoints:
 * - /mcp: For establishing the SSE stream (GET)
 * - /messages: For receiving client messages (POST)
 * 
 */

// Create an MCP server instance
const getServer = () => {
  const server = new McpServer({
    name: 'simple-sse-server',
    version: '1.0.0',
  }, { capabilities: { logging: {} } });

  server.tool(
    'start-notification-stream',
    'Starts sending periodic notifications',
    {
      interval: z.number().describe('Interval in milliseconds between notifications').default(1000),
      count: z.number().describe('Number of notifications to send').default(10),
    },
    async ({ interval, count }, { sendNotification }): Promise<CallToolResult> => {
      const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
      let counter = 0;

      // Send the initial notification
      await sendNotification({
        method: "notifications/message",
        params: {
          level: "info",
          data: `Starting notification stream with ${count} messages every ${interval}ms`
        }
      });

      // Send periodic notifications
      while (counter < count) {
        counter++;
        await sleep(interval);

        try {
          await sendNotification({
            method: "notifications/message",
            params: {
              level: "info",
              data: `Notification #${counter} at ${new Date().toISOString()}`
            }
          });
        }
        catch (error) {
          console.error("Error sending notification:", error);
        }
      }

      return {
        content: [
          {
            type: 'text',
            text: `Completed sending ${count} notifications every ${interval}ms`,
          }
        ],
      };
    }
  );
  return server;
};

const app = express();
app.use(express.json());

// Store transports by session ID
const transports: Record<string, SSEServerTransport> = {};

// SSE endpoint for establishing the stream
app.get('/mcp', async (req: Request, res: Response) => {
  console.log('Received GET request to /sse (establishing SSE stream)');

  try {
    // Create a new SSE transport for the client
    // The endpoint for POST messages is '/messages'
    const transport = new SSEServerTransport('/messages', res);

    // Store the transport by session ID
    const sessionId = transport.sessionId;
    transports[sessionId] = transport;

    // Set up onclose handler to clean up transport when closed
    transport.onclose = () => {
      console.log(`SSE transport closed for session ${sessionId}`);
      delete transports[sessionId];
    };

    // Connect the transport to the MCP server
    const server = getServer();
    await server.connect(transport);

    console.log(`Established SSE stream with session ID: ${sessionId}`);
  } catch (error) {
    console.error('Error establishing SSE stream:', error);
    if (!res.headersSent) {
      res.status(500).send('Error establishing SSE stream');
    }
  }
});

// Messages endpoint for receiving client JSON-RPC requests
app.post('/messages', async (req: Request, res: Response) => {
  console.log('Received POST request to /messages');

  // Extract session ID from URL query parameter
  // In the SSE protocol, this is added by the client based on the endpoint event
  const sessionId = req.query.sessionId as string | undefined;

  if (!sessionId) {
    console.error('No session ID provided in request URL');
    res.status(400).send('Missing sessionId parameter');
    return;
  }

  const transport = transports[sessionId];
  if (!transport) {
    console.error(`No active transport found for session ID: ${sessionId}`);
    res.status(404).send('Session not found');
    return;
  }

  try {
    // Handle the POST message with the transport
    await transport.handlePostMessage(req, res, req.body);
  } catch (error) {
    console.error('Error handling request:', error);
    if (!res.headersSent) {
      res.status(500).send('Error handling request');
    }
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Simple SSE Server (deprecated protocol version 2024-11-05) listening on port ${PORT}`);
});

// Handle server shutdown
process.on('SIGINT', async () => {
  console.log('Shutting down server...');

  // Close all active transports to properly clean up resources
  for (const sessionId in transports) {
    try {
      console.log(`Closing transport for session ${sessionId}`);
      await transports[sessionId].close();
      delete transports[sessionId];
    } catch (error) {
      console.error(`Error closing transport for session ${sessionId}:`, error);
    }
  }
  console.log('Server shutdown complete');
  process.exit(0);
});
````

## File: src/examples/server/simpleStatelessStreamableHttp.ts
````typescript
import express, { Request, Response } from 'express';
import { McpServer } from '../../server/mcp.js';
import { StreamableHTTPServerTransport } from '../../server/streamableHttp.js';
import { z } from 'zod';
import { CallToolResult, GetPromptResult, ReadResourceResult } from '../../types.js';

const getServer = () => {
  // Create an MCP server with implementation details
  const server = new McpServer({
    name: 'stateless-streamable-http-server',
    version: '1.0.0',
  }, { capabilities: { logging: {} } });

  // Register a simple prompt
  server.prompt(
    'greeting-template',
    'A simple greeting prompt template',
    {
      name: z.string().describe('Name to include in greeting'),
    },
    async ({ name }): Promise<GetPromptResult> => {
      return {
        messages: [
          {
            role: 'user',
            content: {
              type: 'text',
              text: `Please greet ${name} in a friendly manner.`,
            },
          },
        ],
      };
    }
  );

  // Register a tool specifically for testing resumability
  server.tool(
    'start-notification-stream',
    'Starts sending periodic notifications for testing resumability',
    {
      interval: z.number().describe('Interval in milliseconds between notifications').default(100),
      count: z.number().describe('Number of notifications to send (0 for 100)').default(10),
    },
    async ({ interval, count }, { sendNotification }): Promise<CallToolResult> => {
      const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
      let counter = 0;

      while (count === 0 || counter < count) {
        counter++;
        try {
          await sendNotification({
            method: "notifications/message",
            params: {
              level: "info",
              data: `Periodic notification #${counter} at ${new Date().toISOString()}`
            }
          });
        }
        catch (error) {
          console.error("Error sending notification:", error);
        }
        // Wait for the specified interval
        await sleep(interval);
      }

      return {
        content: [
          {
            type: 'text',
            text: `Started sending periodic notifications every ${interval}ms`,
          }
        ],
      };
    }
  );

  // Create a simple resource at a fixed URI
  server.resource(
    'greeting-resource',
    'https://example.com/greetings/default',
    { mimeType: 'text/plain' },
    async (): Promise<ReadResourceResult> => {
      return {
        contents: [
          {
            uri: 'https://example.com/greetings/default',
            text: 'Hello, world!',
          },
        ],
      };
    }
  );
  return server;
}

const app = express();
app.use(express.json());

app.post('/mcp', async (req: Request, res: Response) => {
  const server = getServer();
  try {
    const transport: StreamableHTTPServerTransport = new StreamableHTTPServerTransport({
      sessionIdGenerator: undefined,
    });
    await server.connect(transport);
    await transport.handleRequest(req, res, req.body);
    res.on('close', () => {
      console.log('Request closed');
      transport.close();
      server.close();
    });
  } catch (error) {
    console.error('Error handling MCP request:', error);
    if (!res.headersSent) {
      res.status(500).json({
        jsonrpc: '2.0',
        error: {
          code: -32603,
          message: 'Internal server error',
        },
        id: null,
      });
    }
  }
});

app.get('/mcp', async (req: Request, res: Response) => {
  console.log('Received GET MCP request');
  res.writeHead(405).end(JSON.stringify({
    jsonrpc: "2.0",
    error: {
      code: -32000,
      message: "Method not allowed."
    },
    id: null
  }));
});

app.delete('/mcp', async (req: Request, res: Response) => {
  console.log('Received DELETE MCP request');
  res.writeHead(405).end(JSON.stringify({
    jsonrpc: "2.0",
    error: {
      code: -32000,
      message: "Method not allowed."
    },
    id: null
  }));
});


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`MCP Stateless Streamable HTTP Server listening on port ${PORT}`);
});

// Handle server shutdown
process.on('SIGINT', async () => {
  console.log('Shutting down server...');
  process.exit(0);
});
````

## File: src/examples/server/simpleStreamableHttp.ts
````typescript
import express, { Request, Response } from 'express';
import { randomUUID } from 'node:crypto';
import { z } from 'zod';
import { McpServer } from '../../server/mcp.js';
import { StreamableHTTPServerTransport } from '../../server/streamableHttp.js';
import { getOAuthProtectedResourceMetadataUrl, mcpAuthMetadataRouter } from '../../server/auth/router.js';
import { requireBearerAuth } from '../../server/auth/middleware/bearerAuth.js';
import { CallToolResult, GetPromptResult, isInitializeRequest, ReadResourceResult } from '../../types.js';
import { InMemoryEventStore } from '../shared/inMemoryEventStore.js';
import { setupAuthServer } from './demoInMemoryOAuthProvider.js';
import { OAuthMetadata } from 'src/shared/auth.js';

// Check for OAuth flag
const useOAuth = process.argv.includes('--oauth');

// Create an MCP server with implementation details
const getServer = () => {
  const server = new McpServer({
    name: 'simple-streamable-http-server',
    version: '1.0.0',
  }, { capabilities: { logging: {} } });

  // Register a simple tool that returns a greeting
  server.tool(
    'greet',
    'A simple greeting tool',
    {
      name: z.string().describe('Name to greet'),
    },
    async ({ name }): Promise<CallToolResult> => {
      return {
        content: [
          {
            type: 'text',
            text: `Hello, ${name}!`,
          },
        ],
      };
    }
  );

  // Register a tool that sends multiple greetings with notifications (with annotations)
  server.tool(
    'multi-greet',
    'A tool that sends different greetings with delays between them',
    {
      name: z.string().describe('Name to greet'),
    },
    {
      title: 'Multiple Greeting Tool',
      readOnlyHint: true,
      openWorldHint: false
    },
    async ({ name }, { sendNotification }): Promise<CallToolResult> => {
      const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

      await sendNotification({
        method: "notifications/message",
        params: { level: "debug", data: `Starting multi-greet for ${name}` }
      });

      await sleep(1000); // Wait 1 second before first greeting

      await sendNotification({
        method: "notifications/message",
        params: { level: "info", data: `Sending first greeting to ${name}` }
      });

      await sleep(1000); // Wait another second before second greeting

      await sendNotification({
        method: "notifications/message",
        params: { level: "info", data: `Sending second greeting to ${name}` }
      });

      return {
        content: [
          {
            type: 'text',
            text: `Good morning, ${name}!`,
          }
        ],
      };
    }
  );

  // Register a simple prompt
  server.prompt(
    'greeting-template',
    'A simple greeting prompt template',
    {
      name: z.string().describe('Name to include in greeting'),
    },
    async ({ name }): Promise<GetPromptResult> => {
      return {
        messages: [
          {
            role: 'user',
            content: {
              type: 'text',
              text: `Please greet ${name} in a friendly manner.`,
            },
          },
        ],
      };
    }
  );

  // Register a tool specifically for testing resumability
  server.tool(
    'start-notification-stream',
    'Starts sending periodic notifications for testing resumability',
    {
      interval: z.number().describe('Interval in milliseconds between notifications').default(100),
      count: z.number().describe('Number of notifications to send (0 for 100)').default(50),
    },
    async ({ interval, count }, { sendNotification }): Promise<CallToolResult> => {
      const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
      let counter = 0;

      while (count === 0 || counter < count) {
        counter++;
        try {
          await sendNotification({
            method: "notifications/message",
            params: {
              level: "info",
              data: `Periodic notification #${counter} at ${new Date().toISOString()}`
            }
          });
        }
        catch (error) {
          console.error("Error sending notification:", error);
        }
        // Wait for the specified interval
        await sleep(interval);
      }

      return {
        content: [
          {
            type: 'text',
            text: `Started sending periodic notifications every ${interval}ms`,
          }
        ],
      };
    }
  );

  // Create a simple resource at a fixed URI
  server.resource(
    'greeting-resource',
    'https://example.com/greetings/default',
    { mimeType: 'text/plain' },
    async (): Promise<ReadResourceResult> => {
      return {
        contents: [
          {
            uri: 'https://example.com/greetings/default',
            text: 'Hello, world!',
          },
        ],
      };
    }
  );
  return server;
};

const MCP_PORT = 3000;
const AUTH_PORT = 3001;

const app = express();
app.use(express.json());

// Set up OAuth if enabled
let authMiddleware = null;
if (useOAuth) {
  // Create auth middleware for MCP endpoints
  const mcpServerUrl = new URL(`http://localhost:${MCP_PORT}`);
  const authServerUrl = new URL(`http://localhost:${AUTH_PORT}`);

  const oauthMetadata: OAuthMetadata = setupAuthServer(authServerUrl);

  const tokenVerifier = {
    verifyAccessToken: async (token: string) => {
      const endpoint = oauthMetadata.introspection_endpoint;

      if (!endpoint) {
        throw new Error('No token verification endpoint available in metadata');
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          token: token
        }).toString()
      });


      if (!response.ok) {
        throw new Error(`Invalid or expired token: ${await response.text()}`);
      }

      const data = await response.json();

      // Convert the response to AuthInfo format
      return {
        token,
        clientId: data.client_id,
        scopes: data.scope ? data.scope.split(' ') : [],
        expiresAt: data.exp,
      };
    }
  }
  // Add metadata routes to the main MCP server
  app.use(mcpAuthMetadataRouter({
    oauthMetadata,
    resourceServerUrl: mcpServerUrl,
    scopesSupported: ['mcp:tools'],
    resourceName: 'MCP Demo Server',
  }));

  authMiddleware = requireBearerAuth({
    verifier: tokenVerifier,
    requiredScopes: ['mcp:tools'],
    resourceMetadataUrl: getOAuthProtectedResourceMetadataUrl(mcpServerUrl),
  });
}

// Map to store transports by session ID
const transports: { [sessionId: string]: StreamableHTTPServerTransport } = {};

// MCP POST endpoint with optional auth
const mcpPostHandler = async (req: Request, res: Response) => {
  console.log('Received MCP request:', req.body);
  if (useOAuth && req.auth) {
    console.log('Authenticated user:', req.auth);
  }
  try {
    // Check for existing session ID
    const sessionId = req.headers['mcp-session-id'] as string | undefined;
    let transport: StreamableHTTPServerTransport;

    if (sessionId && transports[sessionId]) {
      // Reuse existing transport
      transport = transports[sessionId];
    } else if (!sessionId && isInitializeRequest(req.body)) {
      // New initialization request
      const eventStore = new InMemoryEventStore();
      transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: () => randomUUID(),
        eventStore, // Enable resumability
        onsessioninitialized: (sessionId) => {
          // Store the transport by session ID when session is initialized
          // This avoids race conditions where requests might come in before the session is stored
          console.log(`Session initialized with ID: ${sessionId}`);
          transports[sessionId] = transport;
        }
      });

      // Set up onclose handler to clean up transport when closed
      transport.onclose = () => {
        const sid = transport.sessionId;
        if (sid && transports[sid]) {
          console.log(`Transport closed for session ${sid}, removing from transports map`);
          delete transports[sid];
        }
      };

      // Connect the transport to the MCP server BEFORE handling the request
      // so responses can flow back through the same transport
      const server = getServer();
      await server.connect(transport);

      await transport.handleRequest(req, res, req.body);
      return; // Already handled
    } else {
      // Invalid request - no session ID or not initialization request
      res.status(400).json({
        jsonrpc: '2.0',
        error: {
          code: -32000,
          message: 'Bad Request: No valid session ID provided',
        },
        id: null,
      });
      return;
    }

    // Handle the request with existing transport - no need to reconnect
    // The existing transport is already connected to the server
    await transport.handleRequest(req, res, req.body);
  } catch (error) {
    console.error('Error handling MCP request:', error);
    if (!res.headersSent) {
      res.status(500).json({
        jsonrpc: '2.0',
        error: {
          code: -32603,
          message: 'Internal server error',
        },
        id: null,
      });
    }
  }
};

// Set up routes with conditional auth middleware
if (useOAuth && authMiddleware) {
  app.post('/mcp', authMiddleware, mcpPostHandler);
} else {
  app.post('/mcp', mcpPostHandler);
}

// Handle GET requests for SSE streams (using built-in support from StreamableHTTP)
const mcpGetHandler = async (req: Request, res: Response) => {
  const sessionId = req.headers['mcp-session-id'] as string | undefined;
  if (!sessionId || !transports[sessionId]) {
    res.status(400).send('Invalid or missing session ID');
    return;
  }

  if (useOAuth && req.auth) {
    console.log('Authenticated SSE connection from user:', req.auth);
  }

  // Check for Last-Event-ID header for resumability
  const lastEventId = req.headers['last-event-id'] as string | undefined;
  if (lastEventId) {
    console.log(`Client reconnecting with Last-Event-ID: ${lastEventId}`);
  } else {
    console.log(`Establishing new SSE stream for session ${sessionId}`);
  }

  const transport = transports[sessionId];
  await transport.handleRequest(req, res);
};

// Set up GET route with conditional auth middleware
if (useOAuth && authMiddleware) {
  app.get('/mcp', authMiddleware, mcpGetHandler);
} else {
  app.get('/mcp', mcpGetHandler);
}

// Handle DELETE requests for session termination (according to MCP spec)
const mcpDeleteHandler = async (req: Request, res: Response) => {
  const sessionId = req.headers['mcp-session-id'] as string | undefined;
  if (!sessionId || !transports[sessionId]) {
    res.status(400).send('Invalid or missing session ID');
    return;
  }

  console.log(`Received session termination request for session ${sessionId}`);

  try {
    const transport = transports[sessionId];
    await transport.handleRequest(req, res);
  } catch (error) {
    console.error('Error handling session termination:', error);
    if (!res.headersSent) {
      res.status(500).send('Error processing session termination');
    }
  }
};

// Set up DELETE route with conditional auth middleware
if (useOAuth && authMiddleware) {
  app.delete('/mcp', authMiddleware, mcpDeleteHandler);
} else {
  app.delete('/mcp', mcpDeleteHandler);
}

app.listen(MCP_PORT, () => {
  console.log(`MCP Streamable HTTP Server listening on port ${MCP_PORT}`);
});

// Handle server shutdown
process.on('SIGINT', async () => {
  console.log('Shutting down server...');

  // Close all active transports to properly clean up resources
  for (const sessionId in transports) {
    try {
      console.log(`Closing transport for session ${sessionId}`);
      await transports[sessionId].close();
      delete transports[sessionId];
    } catch (error) {
      console.error(`Error closing transport for session ${sessionId}:`, error);
    }
  }
  console.log('Server shutdown complete');
  process.exit(0);
});
````

## File: src/examples/server/sseAndStreamableHttpCompatibleServer.ts
````typescript
import express, { Request, Response } from 'express';
import { randomUUID } from "node:crypto";
import { McpServer } from '../../server/mcp.js';
import { StreamableHTTPServerTransport } from '../../server/streamableHttp.js';
import { SSEServerTransport } from '../../server/sse.js';
import { z } from 'zod';
import { CallToolResult, isInitializeRequest } from '../../types.js';
import { InMemoryEventStore } from '../shared/inMemoryEventStore.js';

/**
 * This example server demonstrates backwards compatibility with both:
 * 1. The deprecated HTTP+SSE transport (protocol version 2024-11-05)
 * 2. The Streamable HTTP transport (protocol version 2025-03-26)
 * 
 * It maintains a single MCP server instance but exposes two transport options:
 * - /mcp: The new Streamable HTTP endpoint (supports GET/POST/DELETE)
 * - /sse: The deprecated SSE endpoint for older clients (GET to establish stream)
 * - /messages: The deprecated POST endpoint for older clients (POST to send messages)
 */

const getServer = () => {
  const server = new McpServer({
    name: 'backwards-compatible-server',
    version: '1.0.0',
  }, { capabilities: { logging: {} } });

  // Register a simple tool that sends notifications over time
  server.tool(
    'start-notification-stream',
    'Starts sending periodic notifications for testing resumability',
    {
      interval: z.number().describe('Interval in milliseconds between notifications').default(100),
      count: z.number().describe('Number of notifications to send (0 for 100)').default(50),
    },
    async ({ interval, count }, { sendNotification }): Promise<CallToolResult> => {
      const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
      let counter = 0;

      while (count === 0 || counter < count) {
        counter++;
        try {
          await sendNotification({
            method: "notifications/message",
            params: {
              level: "info",
              data: `Periodic notification #${counter} at ${new Date().toISOString()}`
            }
          });
        }
        catch (error) {
          console.error("Error sending notification:", error);
        }
        // Wait for the specified interval
        await sleep(interval);
      }

      return {
        content: [
          {
            type: 'text',
            text: `Started sending periodic notifications every ${interval}ms`,
          }
        ],
      };
    }
  );
  return server;
};

// Create Express application
const app = express();
app.use(express.json());

// Store transports by session ID
const transports: Record<string, StreamableHTTPServerTransport | SSEServerTransport> = {};

//=============================================================================
// STREAMABLE HTTP TRANSPORT (PROTOCOL VERSION 2025-03-26)
//=============================================================================

// Handle all MCP Streamable HTTP requests (GET, POST, DELETE) on a single endpoint
app.all('/mcp', async (req: Request, res: Response) => {
  console.log(`Received ${req.method} request to /mcp`);

  try {
    // Check for existing session ID
    const sessionId = req.headers['mcp-session-id'] as string | undefined;
    let transport: StreamableHTTPServerTransport;

    if (sessionId && transports[sessionId]) {
      // Check if the transport is of the correct type
      const existingTransport = transports[sessionId];
      if (existingTransport instanceof StreamableHTTPServerTransport) {
        // Reuse existing transport
        transport = existingTransport;
      } else {
        // Transport exists but is not a StreamableHTTPServerTransport (could be SSEServerTransport)
        res.status(400).json({
          jsonrpc: '2.0',
          error: {
            code: -32000,
            message: 'Bad Request: Session exists but uses a different transport protocol',
          },
          id: null,
        });
        return;
      }
    } else if (!sessionId && req.method === 'POST' && isInitializeRequest(req.body)) {
      const eventStore = new InMemoryEventStore();
      transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: () => randomUUID(),
        eventStore, // Enable resumability
        onsessioninitialized: (sessionId) => {
          // Store the transport by session ID when session is initialized
          console.log(`StreamableHTTP session initialized with ID: ${sessionId}`);
          transports[sessionId] = transport;
        }
      });

      // Set up onclose handler to clean up transport when closed
      transport.onclose = () => {
        const sid = transport.sessionId;
        if (sid && transports[sid]) {
          console.log(`Transport closed for session ${sid}, removing from transports map`);
          delete transports[sid];
        }
      };

      // Connect the transport to the MCP server
      const server = getServer();
      await server.connect(transport);
    } else {
      // Invalid request - no session ID or not initialization request
      res.status(400).json({
        jsonrpc: '2.0',
        error: {
          code: -32000,
          message: 'Bad Request: No valid session ID provided',
        },
        id: null,
      });
      return;
    }

    // Handle the request with the transport
    await transport.handleRequest(req, res, req.body);
  } catch (error) {
    console.error('Error handling MCP request:', error);
    if (!res.headersSent) {
      res.status(500).json({
        jsonrpc: '2.0',
        error: {
          code: -32603,
          message: 'Internal server error',
        },
        id: null,
      });
    }
  }
});

//=============================================================================
// DEPRECATED HTTP+SSE TRANSPORT (PROTOCOL VERSION 2024-11-05)
//=============================================================================

app.get('/sse', async (req: Request, res: Response) => {
  console.log('Received GET request to /sse (deprecated SSE transport)');
  const transport = new SSEServerTransport('/messages', res);
  transports[transport.sessionId] = transport;
  res.on("close", () => {
    delete transports[transport.sessionId];
  });
  const server = getServer();
  await server.connect(transport);
});

app.post("/messages", async (req: Request, res: Response) => {
  const sessionId = req.query.sessionId as string;
  let transport: SSEServerTransport;
  const existingTransport = transports[sessionId];
  if (existingTransport instanceof SSEServerTransport) {
    // Reuse existing transport
    transport = existingTransport;
  } else {
    // Transport exists but is not a SSEServerTransport (could be StreamableHTTPServerTransport)
    res.status(400).json({
      jsonrpc: '2.0',
      error: {
        code: -32000,
        message: 'Bad Request: Session exists but uses a different transport protocol',
      },
      id: null,
    });
    return;
  }
  if (transport) {
    await transport.handlePostMessage(req, res, req.body);
  } else {
    res.status(400).send('No transport found for sessionId');
  }
});


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backwards compatible MCP server listening on port ${PORT}`);
  console.log(`
==============================================
SUPPORTED TRANSPORT OPTIONS:

1. Streamable Http(Protocol version: 2025-03-26)
   Endpoint: /mcp
   Methods: GET, POST, DELETE
   Usage: 
     - Initialize with POST to /mcp
     - Establish SSE stream with GET to /mcp
     - Send requests with POST to /mcp
     - Terminate session with DELETE to /mcp

2. Http + SSE (Protocol version: 2024-11-05)
   Endpoints: /sse (GET) and /messages (POST)
   Usage:
     - Establish SSE stream with GET to /sse
     - Send requests with POST to /messages?sessionId=<id>
==============================================
`);
});

// Handle server shutdown
process.on('SIGINT', async () => {
  console.log('Shutting down server...');

  // Close all active transports to properly clean up resources
  for (const sessionId in transports) {
    try {
      console.log(`Closing transport for session ${sessionId}`);
      await transports[sessionId].close();
      delete transports[sessionId];
    } catch (error) {
      console.error(`Error closing transport for session ${sessionId}:`, error);
    }
  }
  console.log('Server shutdown complete');
  process.exit(0);
});
````

## File: src/examples/server/standaloneSseWithGetStreamableHttp.ts
````typescript
import express, { Request, Response } from 'express';
import { randomUUID } from 'node:crypto';
import { McpServer } from '../../server/mcp.js';
import { StreamableHTTPServerTransport } from '../../server/streamableHttp.js';
import { isInitializeRequest, ReadResourceResult } from '../../types.js';

// Create an MCP server with implementation details
const server = new McpServer({
  name: 'resource-list-changed-notification-server',
  version: '1.0.0',
});

// Store transports by session ID to send notifications
const transports: { [sessionId: string]: StreamableHTTPServerTransport } = {};

const addResource = (name: string, content: string) => {
  const uri = `https://mcp-example.com/dynamic/${encodeURIComponent(name)}`;
  server.resource(
    name,
    uri,
    { mimeType: 'text/plain', description: `Dynamic resource: ${name}` },
    async (): Promise<ReadResourceResult> => {
      return {
        contents: [{ uri, text: content }],
      };
    }
  );

};

addResource('example-resource', 'Initial content for example-resource');

const resourceChangeInterval = setInterval(() => {
  const name = randomUUID();
  addResource(name, `Content for ${name}`);
}, 5000); // Change resources every 5 seconds for testing

const app = express();
app.use(express.json());

app.post('/mcp', async (req: Request, res: Response) => {
  console.log('Received MCP request:', req.body);
  try {
    // Check for existing session ID
    const sessionId = req.headers['mcp-session-id'] as string | undefined;
    let transport: StreamableHTTPServerTransport;

    if (sessionId && transports[sessionId]) {
      // Reuse existing transport
      transport = transports[sessionId];
    } else if (!sessionId && isInitializeRequest(req.body)) {
      // New initialization request
      transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: () => randomUUID(),
        onsessioninitialized: (sessionId) => {
          // Store the transport by session ID when session is initialized
          // This avoids race conditions where requests might come in before the session is stored
          console.log(`Session initialized with ID: ${sessionId}`);
          transports[sessionId] = transport;
        }
      });

      // Connect the transport to the MCP server
      await server.connect(transport);

      // Handle the request - the onsessioninitialized callback will store the transport
      await transport.handleRequest(req, res, req.body);
      return; // Already handled
    } else {
      // Invalid request - no session ID or not initialization request
      res.status(400).json({
        jsonrpc: '2.0',
        error: {
          code: -32000,
          message: 'Bad Request: No valid session ID provided',
        },
        id: null,
      });
      return;
    }

    // Handle the request with existing transport
    await transport.handleRequest(req, res, req.body);
  } catch (error) {
    console.error('Error handling MCP request:', error);
    if (!res.headersSent) {
      res.status(500).json({
        jsonrpc: '2.0',
        error: {
          code: -32603,
          message: 'Internal server error',
        },
        id: null,
      });
    }
  }
});

// Handle GET requests for SSE streams (now using built-in support from StreamableHTTP)
app.get('/mcp', async (req: Request, res: Response) => {
  const sessionId = req.headers['mcp-session-id'] as string | undefined;
  if (!sessionId || !transports[sessionId]) {
    res.status(400).send('Invalid or missing session ID');
    return;
  }

  console.log(`Establishing SSE stream for session ${sessionId}`);
  const transport = transports[sessionId];
  await transport.handleRequest(req, res);
});


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Handle server shutdown
process.on('SIGINT', async () => {
  console.log('Shutting down server...');
  clearInterval(resourceChangeInterval);
  await server.close();
  process.exit(0);
});
````

## File: src/examples/shared/inMemoryEventStore.ts
````typescript
import { JSONRPCMessage } from '../../types.js';
import { EventStore } from '../../server/streamableHttp.js';

/**
 * Simple in-memory implementation of the EventStore interface for resumability
 * This is primarily intended for examples and testing, not for production use
 * where a persistent storage solution would be more appropriate.
 */
export class InMemoryEventStore implements EventStore {
  private events: Map<string, { streamId: string, message: JSONRPCMessage }> = new Map();

  /**
   * Generates a unique event ID for a given stream ID
   */
  private generateEventId(streamId: string): string {
    return `${streamId}_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
  }

  /**
   * Extracts the stream ID from an event ID
   */
  private getStreamIdFromEventId(eventId: string): string {
    const parts = eventId.split('_');
    return parts.length > 0 ? parts[0] : '';
  }

  /**
   * Stores an event with a generated event ID
   * Implements EventStore.storeEvent
   */
  async storeEvent(streamId: string, message: JSONRPCMessage): Promise<string> {
    const eventId = this.generateEventId(streamId);
    this.events.set(eventId, { streamId, message });
    return eventId;
  }

  /**
   * Replays events that occurred after a specific event ID
   * Implements EventStore.replayEventsAfter
   */
  async replayEventsAfter(lastEventId: string,
    { send }: { send: (eventId: string, message: JSONRPCMessage) => Promise<void> }
  ): Promise<string> {
    if (!lastEventId || !this.events.has(lastEventId)) {
      return '';
    }

    // Extract the stream ID from the event ID
    const streamId = this.getStreamIdFromEventId(lastEventId);
    if (!streamId) {
      return '';
    }

    let foundLastEvent = false;

    // Sort events by eventId for chronological ordering
    const sortedEvents = [...this.events.entries()].sort((a, b) => a[0].localeCompare(b[0]));

    for (const [eventId, { streamId: eventStreamId, message }] of sortedEvents) {
      // Only include events from the same stream
      if (eventStreamId !== streamId) {
        continue;
      }

      // Start sending events after we find the lastEventId
      if (eventId === lastEventId) {
        foundLastEvent = true;
        continue;
      }

      if (foundLastEvent) {
        await send(eventId, message);
      }
    }
    return streamId;
  }
}
````

## File: src/examples/README.md
````markdown
# MCP TypeScript SDK Examples

This directory contains example implementations of MCP clients and servers using the TypeScript SDK.

## Table of Contents

- [Client Implementations](#client-implementations)
  - [Streamable HTTP Client](#streamable-http-client)
  - [Backwards Compatible Client](#backwards-compatible-client)
- [Server Implementations](#server-implementations)
  - [Single Node Deployment](#single-node-deployment)
    - [Streamable HTTP Transport](#streamable-http-transport)
    - [Deprecated SSE Transport](#deprecated-sse-transport)
    - [Backwards Compatible Server](#streamable-http-backwards-compatible-server-with-sse)
  - [Multi-Node Deployment](#multi-node-deployment)
- [Backwards Compatibility](#testing-streamable-http-backwards-compatibility-with-sse)

## Client Implementations

### Streamable HTTP Client

A full-featured interactive client that connects to a Streamable HTTP server, demonstrating how to:

- Establish and manage a connection to an MCP server
- List and call tools with arguments
- Handle notifications through the SSE stream
- List and get prompts with arguments
- List available resources
- Handle session termination and reconnection
- Support for resumability with Last-Event-ID tracking

```bash
npx tsx src/examples/client/simpleStreamableHttp.ts
```

Example client with OAuth:

```bash
npx tsx src/examples/client/simpleOAuthClient.js
```

### Backwards Compatible Client

A client that implements backwards compatibility according to the [MCP specification](https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#backwards-compatibility), allowing it to work with both new and legacy servers. This client demonstrates:

- The client first POSTs an initialize request to the server URL:
  - If successful, it uses the Streamable HTTP transport
  - If it fails with a 4xx status, it attempts a GET request to establish an SSE stream

```bash
npx tsx src/examples/client/streamableHttpWithSseFallbackClient.ts
```

## Server Implementations

### Single Node Deployment

These examples demonstrate how to set up an MCP server on a single node with different transport options.

#### Streamable HTTP Transport

##### Simple Streamable HTTP Server

A server that implements the Streamable HTTP transport (protocol version 2025-03-26). 

- Basic server setup with Express and the Streamable HTTP transport
- Session management with an in-memory event store for resumability
- Tool implementation with the `greet` and `multi-greet` tools
- Prompt implementation with the `greeting-template` prompt
- Static resource exposure
- Support for notifications via SSE stream established by GET requests
- Session termination via DELETE requests

```bash
npx tsx src/examples/server/simpleStreamableHttp.ts

# To add a demo of authentication to this example, use:
npx tsx src/examples/server/simpleStreamableHttp.ts --oauth
```

##### JSON Response Mode Server

A server that uses Streamable HTTP transport with JSON response mode enabled (no SSE). 

- Streamable HTTP with JSON response mode, which returns responses directly in the response body
- Limited support for notifications (since SSE is disabled)
- Proper response handling according to the MCP specification for servers that don't support SSE
- Returning appropriate HTTP status codes for unsupported methods

```bash
npx tsx src/examples/server/jsonResponseStreamableHttp.ts
```

##### Streamable HTTP with server notifications

A server that demonstrates server notifications using Streamable HTTP. 

- Resource list change notifications with dynamically added resources
- Automatic resource creation on a timed interval


```bash
npx tsx src/examples/server/standaloneSseWithGetStreamableHttp.ts
```

#### Deprecated SSE Transport

A server that implements the deprecated HTTP+SSE transport (protocol version 2024-11-05). This example only used for testing backwards compatibility for clients.

- Two separate endpoints: `/mcp` for the SSE stream (GET) and `/messages` for client messages (POST)
- Tool implementation with a `start-notification-stream` tool that demonstrates sending periodic notifications

```bash
npx tsx src/examples/server/simpleSseServer.ts
```

#### Streamable Http Backwards Compatible Server with SSE 

A server that supports both Streamable HTTP and SSE transports, adhering to the [MCP specification for backwards compatibility](https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#backwards-compatibility). 

- Single MCP server instance with multiple transport options
- Support for Streamable HTTP requests at `/mcp` endpoint (GET/POST/DELETE)
- Support for deprecated SSE transport with `/sse` (GET) and `/messages` (POST)
- Session type tracking to avoid mixing transport types
- Notifications and tool execution across both transport types

```bash
npx tsx src/examples/server/sseAndStreamableHttpCompatibleServer.ts
```

### Multi-Node Deployment

When deploying MCP servers in a horizontally scaled environment (multiple server instances), there are a few different options that can be useful for different use cases:
- **Stateless mode** - No need to maintain state between calls to MCP servers. Useful for simple API wrapper servers.
- **Persistent storage mode** - No local state needed, but session data is stored in a database. Example: an MCP server for online ordering where the shopping cart is stored in a database.
- **Local state with message routing** - Local state is needed, and all requests for a session must be routed to the correct node. This can be done with a message queue and pub/sub system.

#### Stateless Mode

The Streamable HTTP transport can be configured to operate without tracking sessions. This is perfect for simple API proxies or when each request is completely independent.

##### Implementation

To enable stateless mode, configure the `StreamableHTTPServerTransport` with:
```typescript
sessionIdGenerator: undefined
```

This disables session management entirely, and the server won't generate or expect session IDs.

- No session ID headers are sent or expected
- Any server node can process any request
- No state is preserved between requests
- Perfect for RESTful or stateless API scenarios
- Simplest deployment model with minimal infrastructure requirements

```
┌─────────────────────────────────────────────┐
│                  Client                     │
└─────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────┐
│                Load Balancer                │
└─────────────────────────────────────────────┘
          │                       │
          ▼                       ▼
┌─────────────────┐     ┌─────────────────────┐
│  MCP Server #1  │     │    MCP Server #2    │
│ (Node.js)       │     │  (Node.js)          │
└─────────────────┘     └─────────────────────┘
```



#### Persistent Storage Mode

For cases where you need session continuity but don't need to maintain in-memory state on specific nodes, you can use a database to persist session data while still allowing any node to handle requests.

##### Implementation

Configure the transport with session management, but retrieve and store all state in an external persistent storage:

```typescript
sessionIdGenerator: () => randomUUID(),
eventStore: databaseEventStore
```

All session state is stored in the database, and any node can serve any client by retrieving the state when needed.

- Maintains sessions with unique IDs
- Stores all session data in an external database
- Provides resumability through the database-backed EventStore
- Any node can handle any request for the same session
- No node-specific memory state means no need for message routing
- Good for applications where state can be fully externalized
- Somewhat higher latency due to database access for each request


```
┌─────────────────────────────────────────────┐
│                  Client                     │
└─────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────┐
│                Load Balancer                │
└─────────────────────────────────────────────┘
          │                       │
          ▼                       ▼
┌─────────────────┐     ┌─────────────────────┐
│  MCP Server #1  │     │    MCP Server #2    │
│ (Node.js)       │     │  (Node.js)          │
└─────────────────┘     └─────────────────────┘
          │                       │
          │                       │
          ▼                       ▼
┌─────────────────────────────────────────────┐
│           Database (PostgreSQL)             │
│                                             │
│  • Session state                            │
│  • Event storage for resumability           │
└─────────────────────────────────────────────┘
```



#### Streamable HTTP with Distributed Message Routing

For scenarios where local in-memory state must be maintained on specific nodes (such as Computer Use or complex session state), the Streamable HTTP transport can be combined with a pub/sub system to route messages to the correct node handling each session.

1. **Bidirectional Message Queue Integration**:
   - All nodes both publish to and subscribe from the message queue
   - Each node registers the sessions it's actively handling
   - Messages are routed based on session ownership

2. **Request Handling Flow**:
   - When a client connects to Node A with an existing `mcp-session-id`
   - If Node A doesn't own this session, it:
     - Establishes and maintains the SSE connection with the client
     - Publishes the request to the message queue with the session ID
     - Node B (which owns the session) receives the request from the queue
     - Node B processes the request with its local session state
     - Node B publishes responses/notifications back to the queue
     - Node A subscribes to the response channel and forwards to the client

3. **Channel Identification**:
   - Each message channel combines both `mcp-session-id` and `stream-id`
   - This ensures responses are correctly routed back to the originating connection

```
┌─────────────────────────────────────────────┐
│                  Client                     │
└─────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────┐
│                Load Balancer                │
└─────────────────────────────────────────────┘
          │                       │
          ▼                       ▼
┌─────────────────┐     ┌─────────────────────┐
│  MCP Server #1  │◄───►│    MCP Server #2    │
│ (Has Session A) │     │  (Has Session B)    │
└─────────────────┘     └─────────────────────┘
          ▲│                     ▲│
          │▼                     │▼
┌─────────────────────────────────────────────┐
│         Message Queue / Pub-Sub             │
│                                             │
│  • Session ownership registry               │
│  • Bidirectional message routing            │
│  • Request/response forwarding              │
└─────────────────────────────────────────────┘
```


- Maintains session affinity for stateful operations without client redirection
- Enables horizontal scaling while preserving complex in-memory state
- Provides fault tolerance through the message queue as intermediary


## Backwards Compatibility

### Testing Streamable HTTP Backwards Compatibility with SSE

To test the backwards compatibility features:

1. Start one of the server implementations:
   ```bash
   # Legacy SSE server (protocol version 2024-11-05)
   npx tsx src/examples/server/simpleSseServer.ts
   
   # Streamable HTTP server (protocol version 2025-03-26)
   npx tsx src/examples/server/simpleStreamableHttp.ts
   
   # Backwards compatible server (supports both protocols)
   npx tsx src/examples/server/sseAndStreamableHttpCompatibleServer.ts
   ```

2. Then run the backwards compatible client:
   ```bash
   npx tsx src/examples/client/streamableHttpWithSseFallbackClient.ts
   ```

This demonstrates how the MCP ecosystem ensures interoperability between clients and servers regardless of which protocol version they were built for.
````

## File: CLAUDE.md
````markdown
# MCP TypeScript SDK Guide

## Build & Test Commands

```sh
npm run build        # Build ESM and CJS versions
npm run lint         # Run ESLint
npm test             # Run all tests
npx jest path/to/file.test.ts  # Run specific test file
npx jest -t "test name"        # Run tests matching pattern
```

## Code Style Guidelines

- **TypeScript**: Strict type checking, ES modules, explicit return types
- **Naming**: PascalCase for classes/types, camelCase for functions/variables
- **Files**: Lowercase with hyphens, test files with `.test.ts` suffix
- **Imports**: ES module style, include `.js` extension, group imports logically
- **Error Handling**: Use TypeScript's strict mode, explicit error checking in tests
- **Formatting**: 2-space indentation, semicolons required, single quotes preferred
- **Testing**: Co-locate tests with source files, use descriptive test names
- **Comments**: JSDoc for public APIs, inline comments for complex logic

## Project Structure

- `/src`: Source code with client, server, and shared modules
- Tests alongside source files with `.test.ts` suffix
- Node.js >= 18 required
````

## File: CODE_OF_CONDUCT.md
````markdown
# Contributor Covenant Code of Conduct

## Our Pledge

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone, regardless of age, body
size, visible or invisible disability, ethnicity, sex characteristics, gender
identity and expression, level of experience, education, socio-economic status,
nationality, personal appearance, race, religion, or sexual identity
and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming,
diverse, inclusive, and healthy community.

## Our Standards

Examples of behavior that contributes to a positive environment for our
community include:

* Demonstrating empathy and kindness toward other people
* Being respectful of differing opinions, viewpoints, and experiences
* Giving and gracefully accepting constructive feedback
* Accepting responsibility and apologizing to those affected by our mistakes,
  and learning from the experience
* Focusing on what is best not just for us as individuals, but for the
  overall community

Examples of unacceptable behavior include:

* The use of sexualized language or imagery, and sexual attention or
  advances of any kind
* Trolling, insulting or derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or email
  address, without their explicit permission
* Other conduct which could reasonably be considered inappropriate in a
  professional setting

## Enforcement Responsibilities

Community leaders are responsible for clarifying and enforcing our standards of
acceptable behavior and will take appropriate and fair corrective action in
response to any behavior that they deem inappropriate, threatening, offensive,
or harmful.

Community leaders have the right and responsibility to remove, edit, or reject
comments, commits, code, wiki edits, issues, and other contributions that are
not aligned to this Code of Conduct, and will communicate reasons for moderation
decisions when appropriate.

## Scope

This Code of Conduct applies within all community spaces, and also applies when
an individual is officially representing the community in public spaces.
Examples of representing our community include using an official e-mail address,
posting via an official social media account, or acting as an appointed
representative at an online or offline event.

## Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported to the community leaders responsible for enforcement at
<mcp-coc@anthropic.com>.
All complaints will be reviewed and investigated promptly and fairly.

All community leaders are obligated to respect the privacy and security of the
reporter of any incident.

## Enforcement Guidelines

Community leaders will follow these Community Impact Guidelines in determining
the consequences for any action they deem in violation of this Code of Conduct:

### 1. Correction

**Community Impact**: Use of inappropriate language or other behavior deemed
unprofessional or unwelcome in the community.

**Consequence**: A private, written warning from community leaders, providing
clarity around the nature of the violation and an explanation of why the
behavior was inappropriate. A public apology may be requested.

### 2. Warning

**Community Impact**: A violation through a single incident or series
of actions.

**Consequence**: A warning with consequences for continued behavior. No
interaction with the people involved, including unsolicited interaction with
those enforcing the Code of Conduct, for a specified period of time. This
includes avoiding interactions in community spaces as well as external channels
like social media. Violating these terms may lead to a temporary or
permanent ban.

### 3. Temporary Ban

**Community Impact**: A serious violation of community standards, including
sustained inappropriate behavior.

**Consequence**: A temporary ban from any sort of interaction or public
communication with the community for a specified period of time. No public or
private interaction with the people involved, including unsolicited interaction
with those enforcing the Code of Conduct, is allowed during this period.
Violating these terms may lead to a permanent ban.

### 4. Permanent Ban

**Community Impact**: Demonstrating a pattern of violation of community
standards, including sustained inappropriate behavior,  harassment of an
individual, or aggression toward or disparagement of classes of individuals.

**Consequence**: A permanent ban from any sort of public interaction within
the community.

## Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage],
version 2.0, available at
<https://www.contributor-covenant.org/version/2/0/code_of_conduct.html>.

Community Impact Guidelines were inspired by [Mozilla's code of conduct
enforcement ladder](https://github.com/mozilla/diversity).

[homepage]: https://www.contributor-covenant.org

For answers to common questions about this code of conduct, see the FAQ at
<https://www.contributor-covenant.org/faq>. Translations are available at
<https://www.contributor-covenant.org/translations>.
````

## File: CONTRIBUTING.md
````markdown
# Contributing to MCP TypeScript SDK

We welcome contributions to the Model Context Protocol TypeScript SDK! This document outlines the process for contributing to the project.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR-USERNAME/typescript-sdk.git`
3. Install dependencies: `npm install`
4. Build the project: `npm run build`
5. Run tests: `npm test`

## Development Process

1. Create a new branch for your changes
2. Make your changes
3. Run `npm run lint` to ensure code style compliance
4. Run `npm test` to verify all tests pass
5. Submit a pull request

## Pull Request Guidelines

- Follow the existing code style
- Include tests for new functionality
- Update documentation as needed
- Keep changes focused and atomic
- Provide a clear description of changes

## Running Examples

- Start the server: `npm run server`
- Run the client: `npm run client`

## Code of Conduct

This project follows our [Code of Conduct](CODE_OF_CONDUCT.md). Please review it before contributing.

## Reporting Issues

- Use the [GitHub issue tracker](https://github.com/modelcontextprotocol/typescript-sdk/issues)
- Search existing issues before creating a new one
- Provide clear reproduction steps

## Security Issues

Please review our [Security Policy](SECURITY.md) for reporting security vulnerabilities.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
````

## File: README.md
````markdown
# MCP TypeScript SDK ![NPM Version](https://img.shields.io/npm/v/%40modelcontextprotocol%2Fsdk) ![MIT licensed](https://img.shields.io/npm/l/%40modelcontextprotocol%2Fsdk)

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Quickstart](#quick-start)
- [What is MCP?](#what-is-mcp)
- [Core Concepts](#core-concepts)
  - [Server](#server)
  - [Resources](#resources)
  - [Tools](#tools)
  - [Prompts](#prompts)
- [Running Your Server](#running-your-server)
  - [stdio](#stdio)
  - [Streamable HTTP](#streamable-http)
  - [Testing and Debugging](#testing-and-debugging)
- [Examples](#examples)
  - [Echo Server](#echo-server)
  - [SQLite Explorer](#sqlite-explorer)
- [Advanced Usage](#advanced-usage)
  - [Dynamic Servers](#dynamic-servers)
  - [Low-Level Server](#low-level-server)
  - [Writing MCP Clients](#writing-mcp-clients)
  - [Proxy Authorization Requests Upstream](#proxy-authorization-requests-upstream)
  - [Backwards Compatibility](#backwards-compatibility)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Model Context Protocol allows applications to provide context for LLMs in a standardized way, separating the concerns of providing context from the actual LLM interaction. This TypeScript SDK implements the full MCP specification, making it easy to:

- Build MCP clients that can connect to any MCP server
- Create MCP servers that expose resources, prompts and tools
- Use standard transports like stdio and Streamable HTTP
- Handle all MCP protocol messages and lifecycle events

## Installation

```bash
npm install @modelcontextprotocol/sdk
```

## Quick Start

Let's create a simple MCP server that exposes a calculator tool and some data:

```typescript
import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Create an MCP server
const server = new McpServer({
  name: "Demo",
  version: "1.0.0"
});

// Add an addition tool
server.tool("add",
  { a: z.number(), b: z.number() },
  async ({ a, b }) => ({
    content: [{ type: "text", text: String(a + b) }]
  })
);

// Add a dynamic greeting resource
server.resource(
  "greeting",
  new ResourceTemplate("greeting://{name}", { list: undefined }),
  async (uri, { name }) => ({
    contents: [{
      uri: uri.href,
      text: `Hello, ${name}!`
    }]
  })
);

// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport);
```

## What is MCP?

The [Model Context Protocol (MCP)](https://modelcontextprotocol.io) lets you build servers that expose data and functionality to LLM applications in a secure, standardized way. Think of it like a web API, but specifically designed for LLM interactions. MCP servers can:

- Expose data through **Resources** (think of these sort of like GET endpoints; they are used to load information into the LLM's context)
- Provide functionality through **Tools** (sort of like POST endpoints; they are used to execute code or otherwise produce a side effect)
- Define interaction patterns through **Prompts** (reusable templates for LLM interactions)
- And more!

## Core Concepts

### Server

The McpServer is your core interface to the MCP protocol. It handles connection management, protocol compliance, and message routing:

```typescript
const server = new McpServer({
  name: "My App",
  version: "1.0.0"
});
```

### Resources

Resources are how you expose data to LLMs. They're similar to GET endpoints in a REST API - they provide data but shouldn't perform significant computation or have side effects:

```typescript
// Static resource
server.resource(
  "config",
  "config://app",
  async (uri) => ({
    contents: [{
      uri: uri.href,
      text: "App configuration here"
    }]
  })
);

// Dynamic resource with parameters
server.resource(
  "user-profile",
  new ResourceTemplate("users://{userId}/profile", { list: undefined }),
  async (uri, { userId }) => ({
    contents: [{
      uri: uri.href,
      text: `Profile data for user ${userId}`
    }]
  })
);
```

### Tools

Tools let LLMs take actions through your server. Unlike resources, tools are expected to perform computation and have side effects:

```typescript
// Simple tool with parameters
server.tool(
  "calculate-bmi",
  {
    weightKg: z.number(),
    heightM: z.number()
  },
  async ({ weightKg, heightM }) => ({
    content: [{
      type: "text",
      text: String(weightKg / (heightM * heightM))
    }]
  })
);

// Async tool with external API call
server.tool(
  "fetch-weather",
  { city: z.string() },
  async ({ city }) => {
    const response = await fetch(`https://api.weather.com/${city}`);
    const data = await response.text();
    return {
      content: [{ type: "text", text: data }]
    };
  }
);
```

### Prompts

Prompts are reusable templates that help LLMs interact with your server effectively:

```typescript
server.prompt(
  "review-code",
  { code: z.string() },
  ({ code }) => ({
    messages: [{
      role: "user",
      content: {
        type: "text",
        text: `Please review this code:\n\n${code}`
      }
    }]
  })
);
```

## Running Your Server

MCP servers in TypeScript need to be connected to a transport to communicate with clients. How you start the server depends on the choice of transport:

### stdio

For command-line tools and direct integrations:

```typescript
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
  name: "example-server",
  version: "1.0.0"
});

// ... set up server resources, tools, and prompts ...

const transport = new StdioServerTransport();
await server.connect(transport);
```

### Streamable HTTP

For remote servers, set up a Streamable HTTP transport that handles both client requests and server-to-client notifications.

#### With Session Management

In some cases, servers need to be stateful. This is achieved by [session management](https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#session-management).

```typescript
import express from "express";
import { randomUUID } from "node:crypto";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { isInitializeRequest } from "@modelcontextprotocol/sdk/types.js"



const app = express();
app.use(express.json());

// Map to store transports by session ID
const transports: { [sessionId: string]: StreamableHTTPServerTransport } = {};

// Handle POST requests for client-to-server communication
app.post('/mcp', async (req, res) => {
  // Check for existing session ID
  const sessionId = req.headers['mcp-session-id'] as string | undefined;
  let transport: StreamableHTTPServerTransport;

  if (sessionId && transports[sessionId]) {
    // Reuse existing transport
    transport = transports[sessionId];
  } else if (!sessionId && isInitializeRequest(req.body)) {
    // New initialization request
    transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: () => randomUUID(),
      onsessioninitialized: (sessionId) => {
        // Store the transport by session ID
        transports[sessionId] = transport;
      }
    });

    // Clean up transport when closed
    transport.onclose = () => {
      if (transport.sessionId) {
        delete transports[transport.sessionId];
      }
    };
    const server = new McpServer({
      name: "example-server",
      version: "1.0.0"
    });

    // ... set up server resources, tools, and prompts ...

    // Connect to the MCP server
    await server.connect(transport);
  } else {
    // Invalid request
    res.status(400).json({
      jsonrpc: '2.0',
      error: {
        code: -32000,
        message: 'Bad Request: No valid session ID provided',
      },
      id: null,
    });
    return;
  }

  // Handle the request
  await transport.handleRequest(req, res, req.body);
});

// Reusable handler for GET and DELETE requests
const handleSessionRequest = async (req: express.Request, res: express.Response) => {
  const sessionId = req.headers['mcp-session-id'] as string | undefined;
  if (!sessionId || !transports[sessionId]) {
    res.status(400).send('Invalid or missing session ID');
    return;
  }
  
  const transport = transports[sessionId];
  await transport.handleRequest(req, res);
};

// Handle GET requests for server-to-client notifications via SSE
app.get('/mcp', handleSessionRequest);

// Handle DELETE requests for session termination
app.delete('/mcp', handleSessionRequest);

app.listen(3000);
```

#### Without Session Management (Stateless)

For simpler use cases where session management isn't needed:

```typescript
const app = express();
app.use(express.json());

app.post('/mcp', async (req: Request, res: Response) => {
  // In stateless mode, create a new instance of transport and server for each request
  // to ensure complete isolation. A single instance would cause request ID collisions
  // when multiple clients connect concurrently.
  
  try {
    const server = getServer(); 
    const transport: StreamableHTTPServerTransport = new StreamableHTTPServerTransport({
      sessionIdGenerator: undefined,
    });
    res.on('close', () => {
      console.log('Request closed');
      transport.close();
      server.close();
    });
    await server.connect(transport);
    await transport.handleRequest(req, res, req.body);
  } catch (error) {
    console.error('Error handling MCP request:', error);
    if (!res.headersSent) {
      res.status(500).json({
        jsonrpc: '2.0',
        error: {
          code: -32603,
          message: 'Internal server error',
        },
        id: null,
      });
    }
  }
});

app.get('/mcp', async (req: Request, res: Response) => {
  console.log('Received GET MCP request');
  res.writeHead(405).end(JSON.stringify({
    jsonrpc: "2.0",
    error: {
      code: -32000,
      message: "Method not allowed."
    },
    id: null
  }));
});

app.delete('/mcp', async (req: Request, res: Response) => {
  console.log('Received DELETE MCP request');
  res.writeHead(405).end(JSON.stringify({
    jsonrpc: "2.0",
    error: {
      code: -32000,
      message: "Method not allowed."
    },
    id: null
  }));
});


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`MCP Stateless Streamable HTTP Server listening on port ${PORT}`);
});

```

This stateless approach is useful for:

- Simple API wrappers
- RESTful scenarios where each request is independent
- Horizontally scaled deployments without shared session state

### Testing and Debugging

To test your server, you can use the [MCP Inspector](https://github.com/modelcontextprotocol/inspector). See its README for more information.

## Examples

### Echo Server

A simple server demonstrating resources, tools, and prompts:

```typescript
import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

const server = new McpServer({
  name: "Echo",
  version: "1.0.0"
});

server.resource(
  "echo",
  new ResourceTemplate("echo://{message}", { list: undefined }),
  async (uri, { message }) => ({
    contents: [{
      uri: uri.href,
      text: `Resource echo: ${message}`
    }]
  })
);

server.tool(
  "echo",
  { message: z.string() },
  async ({ message }) => ({
    content: [{ type: "text", text: `Tool echo: ${message}` }]
  })
);

server.prompt(
  "echo",
  { message: z.string() },
  ({ message }) => ({
    messages: [{
      role: "user",
      content: {
        type: "text",
        text: `Please process this message: ${message}`
      }
    }]
  })
);
```

### SQLite Explorer

A more complex example showing database integration:

```typescript
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import sqlite3 from "sqlite3";
import { promisify } from "util";
import { z } from "zod";

const server = new McpServer({
  name: "SQLite Explorer",
  version: "1.0.0"
});

// Helper to create DB connection
const getDb = () => {
  const db = new sqlite3.Database("database.db");
  return {
    all: promisify<string, any[]>(db.all.bind(db)),
    close: promisify(db.close.bind(db))
  };
};

server.resource(
  "schema",
  "schema://main",
  async (uri) => {
    const db = getDb();
    try {
      const tables = await db.all(
        "SELECT sql FROM sqlite_master WHERE type='table'"
      );
      return {
        contents: [{
          uri: uri.href,
          text: tables.map((t: {sql: string}) => t.sql).join("\n")
        }]
      };
    } finally {
      await db.close();
    }
  }
);

server.tool(
  "query",
  { sql: z.string() },
  async ({ sql }) => {
    const db = getDb();
    try {
      const results = await db.all(sql);
      return {
        content: [{
          type: "text",
          text: JSON.stringify(results, null, 2)
        }]
      };
    } catch (err: unknown) {
      const error = err as Error;
      return {
        content: [{
          type: "text",
          text: `Error: ${error.message}`
        }],
        isError: true
      };
    } finally {
      await db.close();
    }
  }
);
```

## Advanced Usage

### Dynamic Servers

If you want to offer an initial set of tools/prompts/resources, but later add additional ones based on user action or external state change, you can add/update/remove them _after_ the Server is connected. This will automatically emit the corresponding `listChanged` notifications:

```ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

const server = new McpServer({
  name: "Dynamic Example",
  version: "1.0.0"
});

const listMessageTool = server.tool(
  "listMessages",
  { channel: z.string() },
  async ({ channel }) => ({
    content: [{ type: "text", text: await listMessages(channel) }]
  })
);

const putMessageTool = server.tool(
  "putMessage",
  { channel: z.string(), message: z.string() },
  async ({ channel, message }) => ({
    content: [{ type: "text", text: await putMessage(channel, string) }]
  })
);
// Until we upgrade auth, `putMessage` is disabled (won't show up in listTools)
putMessageTool.disable()

const upgradeAuthTool = server.tool(
  "upgradeAuth",
  { permission: z.enum(["write', admin"])},
  // Any mutations here will automatically emit `listChanged` notifications
  async ({ permission }) => {
    const { ok, err, previous } = await upgradeAuthAndStoreToken(permission)
    if (!ok) return {content: [{ type: "text", text: `Error: ${err}` }]}

    // If we previously had read-only access, 'putMessage' is now available
    if (previous === "read") {
      putMessageTool.enable()
    }

    if (permission === 'write') {
      // If we've just upgraded to 'write' permissions, we can still call 'upgradeAuth' 
      // but can only upgrade to 'admin'. 
      upgradeAuthTool.update({
        paramSchema: { permission: z.enum(["admin"]) }, // change validation rules
      })
    } else {
      // If we're now an admin, we no longer have anywhere to upgrade to, so fully remove that tool
      upgradeAuthTool.remove()
    }
  }
)

// Connect as normal
const transport = new StdioServerTransport();
await server.connect(transport);
```

### Low-Level Server

For more control, you can use the low-level Server class directly:

```typescript
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  ListPromptsRequestSchema,
  GetPromptRequestSchema
} from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
  {
    name: "example-server",
    version: "1.0.0"
  },
  {
    capabilities: {
      prompts: {}
    }
  }
);

server.setRequestHandler(ListPromptsRequestSchema, async () => {
  return {
    prompts: [{
      name: "example-prompt",
      description: "An example prompt template",
      arguments: [{
        name: "arg1",
        description: "Example argument",
        required: true
      }]
    }]
  };
});

server.setRequestHandler(GetPromptRequestSchema, async (request) => {
  if (request.params.name !== "example-prompt") {
    throw new Error("Unknown prompt");
  }
  return {
    description: "Example prompt",
    messages: [{
      role: "user",
      content: {
        type: "text",
        text: "Example prompt text"
      }
    }]
  };
});

const transport = new StdioServerTransport();
await server.connect(transport);
```

### Writing MCP Clients

The SDK provides a high-level client interface:

```typescript
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const transport = new StdioClientTransport({
  command: "node",
  args: ["server.js"]
});

const client = new Client(
  {
    name: "example-client",
    version: "1.0.0"
  }
);

await client.connect(transport);

// List prompts
const prompts = await client.listPrompts();

// Get a prompt
const prompt = await client.getPrompt({
  name: "example-prompt",
  arguments: {
    arg1: "value"
  }
});

// List resources
const resources = await client.listResources();

// Read a resource
const resource = await client.readResource({
  uri: "file:///example.txt"
});

// Call a tool
const result = await client.callTool({
  name: "example-tool",
  arguments: {
    arg1: "value"
  }
});
```

### Proxy Authorization Requests Upstream

You can proxy OAuth requests to an external authorization provider:

```typescript
import express from 'express';
import { ProxyOAuthServerProvider } from '@modelcontextprotocol/sdk/server/auth/providers/proxyProvider.js';
import { mcpAuthRouter } from '@modelcontextprotocol/sdk/server/auth/router.js';

const app = express();

const proxyProvider = new ProxyOAuthServerProvider({
    endpoints: {
        authorizationUrl: "https://auth.external.com/oauth2/v1/authorize",
        tokenUrl: "https://auth.external.com/oauth2/v1/token",
        revocationUrl: "https://auth.external.com/oauth2/v1/revoke",
    },
    verifyAccessToken: async (token) => {
        return {
            token,
            clientId: "123",
            scopes: ["openid", "email", "profile"],
        }
    },
    getClient: async (client_id) => {
        return {
            client_id,
            redirect_uris: ["http://localhost:3000/callback"],
        }
    }
})

app.use(mcpAuthRouter({
    provider: proxyProvider,
    issuerUrl: new URL("http://auth.external.com"),
    baseUrl: new URL("http://mcp.example.com"),
    serviceDocumentationUrl: new URL("https://docs.example.com/"),
}))
```

This setup allows you to:

- Forward OAuth requests to an external provider
- Add custom token validation logic
- Manage client registrations
- Provide custom documentation URLs
- Maintain control over the OAuth flow while delegating to an external provider

### Backwards Compatibility

Clients and servers with StreamableHttp tranport can maintain [backwards compatibility](https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#backwards-compatibility) with the deprecated HTTP+SSE transport (from protocol version 2024-11-05) as follows

#### Client-Side Compatibility

For clients that need to work with both Streamable HTTP and older SSE servers:

```typescript
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";
let client: Client|undefined = undefined
const baseUrl = new URL(url);
try {
  client = new Client({
    name: 'streamable-http-client',
    version: '1.0.0'
  });
  const transport = new StreamableHTTPClientTransport(
    new URL(baseUrl)
  );
  await client.connect(transport);
  console.log("Connected using Streamable HTTP transport");
} catch (error) {
  // If that fails with a 4xx error, try the older SSE transport
  console.log("Streamable HTTP connection failed, falling back to SSE transport");
  client = new Client({
    name: 'sse-client',
    version: '1.0.0'
  });
  const sseTransport = new SSEClientTransport(baseUrl);
  await client.connect(sseTransport);
  console.log("Connected using SSE transport");
}
```

#### Server-Side Compatibility

For servers that need to support both Streamable HTTP and older clients:

```typescript
import express from "express";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";

const server = new McpServer({
  name: "backwards-compatible-server",
  version: "1.0.0"
});

// ... set up server resources, tools, and prompts ...

const app = express();
app.use(express.json());

// Store transports for each session type
const transports = {
  streamable: {} as Record<string, StreamableHTTPServerTransport>,
  sse: {} as Record<string, SSEServerTransport>
};

// Modern Streamable HTTP endpoint
app.all('/mcp', async (req, res) => {
  // Handle Streamable HTTP transport for modern clients
  // Implementation as shown in the "With Session Management" example
  // ...
});

// Legacy SSE endpoint for older clients
app.get('/sse', async (req, res) => {
  // Create SSE transport for legacy clients
  const transport = new SSEServerTransport('/messages', res);
  transports.sse[transport.sessionId] = transport;
  
  res.on("close", () => {
    delete transports.sse[transport.sessionId];
  });
  
  await server.connect(transport);
});

// Legacy message endpoint for older clients
app.post('/messages', async (req, res) => {
  const sessionId = req.query.sessionId as string;
  const transport = transports.sse[sessionId];
  if (transport) {
    await transport.handlePostMessage(req, res, req.body);
  } else {
    res.status(400).send('No transport found for sessionId');
  }
});

app.listen(3000);
```

**Note**: The SSE transport is now deprecated in favor of Streamable HTTP. New implementations should use Streamable HTTP, and existing SSE implementations should plan to migrate.

## Documentation

- [Model Context Protocol documentation](https://modelcontextprotocol.io)
- [MCP Specification](https://spec.modelcontextprotocol.io)
- [Example Servers](https://github.com/modelcontextprotocol/servers)

## Contributing

Issues and pull requests are welcome on GitHub at <https://github.com/modelcontextprotocol/typescript-sdk>.

## License

This project is licensed under the MIT License—see the [LICENSE](LICENSE) file for details.
````

## File: SECURITY.md
````markdown
# Security Policy

Thank you for helping us keep the SDKs and systems they interact with secure.

## Reporting Security Issues

This SDK is maintained by [Anthropic](https://www.anthropic.com/) as part of the Model Context Protocol project.

The security of our systems and user data is Anthropic’s top priority. We appreciate the work of security researchers acting in good faith in identifying and reporting potential vulnerabilities.

Our security program is managed on HackerOne and we ask that any validated vulnerability in this functionality be reported through their [submission form](https://hackerone.com/anthropic-vdp/reports/new?type=team&report_type=vulnerability).

## Vulnerability Disclosure Program

Our Vulnerability Program Guidelines are defined on our [HackerOne program page](https://hackerone.com/anthropic-vdp).
````
