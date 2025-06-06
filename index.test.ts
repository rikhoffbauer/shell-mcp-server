import { describe, it, expect, vi, beforeEach } from 'vitest';
import { runShellCommandHandler } from './index';
import type { ShellCommandResponse } from './index';
import type { ExecaError, Result } from 'execa'; // Using base types

// Mock the execa module
vi.mock('execa', () => ({
  execa: vi.fn(),
}));

// Import execa after mocking
import { execa } from 'execa';

describe('runShellCommandHandler', () => {
  beforeEach(() => {
    // Reset mocks before each test
    vi.mocked(execa).mockReset();
  });

  it('should execute a simple command successfully', async () => {
    const mockRequest = {
      command: 'echo "hello world"',
    };

    const mockExecaResult: Result = { 
      command: 'echo "hello world"',
      escapedCommand: 'echo "hello world"',
      exitCode: 0,
      stdout: 'hello world',
      stderr: '',
      failed: false,
      timedOut: false,
      isCanceled: false,
      cwd: process.cwd(),
      durationMs: 100,
      stdio: [undefined, 'hello world', ''] as [undefined, string, string],
      all: undefined,
      signal: undefined,
      signalDescription: undefined,
      pipedFrom: [],
      ipcOutput: [],
      isGracefullyCanceled: false, // Added
      isMaxBuffer: false,          // Added
      isTerminated: false,         // Added
      isForcefullyTerminated: false, // Added
      // Properties from OmitErrorIfReject for reject: false
      name: undefined,
      message: undefined,
      stack: undefined,
      shortMessage: undefined,
      originalMessage: undefined,
      cause: undefined,
      code: undefined,
    };

    vi.mocked(execa).mockResolvedValue(mockExecaResult as Result); 

    const expectedResponse: ShellCommandResponse = {
      exit_code: 0,
      stdout: 'hello world',
      stderr: '',
    };

    const result = await runShellCommandHandler(mockRequest);

    expect(execa).toHaveBeenCalledWith('echo "hello world"', [], {
      cwd: undefined,
      env: expect.objectContaining(process.env),
      shell: true,
      encoding: 'utf8',
      reject: false,
    });
    expect(result.content).toHaveLength(1);
    expect(result.content[0]!.type).toBe('text');
    expect(JSON.parse(result.content[0]!.text as string)).toEqual(expectedResponse);
  });

  it('should handle command failure when reject:false', async () => {
    const mockRequest = {
      command: 'git statusssssss',
    };

    const mockFailedCommandResult: Result = { 
      command: 'git statusssssss',
      escapedCommand: 'git statusssssss',
      exitCode: 1,
      stdout: '',
      stderr: 'git: \'statusssssss\' is not a git command. See \'git --help\'.',
      failed: true,
      timedOut: false,
      isCanceled: false,
      cwd: process.cwd(),
      durationMs: 100,
      stdio: [undefined, '', 'git: \'statusssssss\' is not a git command. See \'git --help\'.'] as [undefined, string, string],
      all: undefined,
      signal: undefined,
      signalDescription: undefined,
      pipedFrom: [],
      ipcOutput: [],
      isGracefullyCanceled: false, // Added
      isMaxBuffer: false,          // Added
      isTerminated: false,         // Added
      isForcefullyTerminated: false, // Added
      // Properties from OmitErrorIfReject for reject: false
      name: undefined,
      message: undefined,
      stack: undefined,
      shortMessage: undefined,
      originalMessage: undefined,
      cause: undefined,
      code: undefined,
    };
    vi.mocked(execa).mockResolvedValue(mockFailedCommandResult as Result); 

    const expectedResponse: ShellCommandResponse = {
      exit_code: 1,
      stdout: '',
      stderr: 'git: \'statusssssss\' is not a git command. See \'git --help\'.',
    };

    const result = await runShellCommandHandler(mockRequest);

    expect(execa).toHaveBeenCalledWith('git statusssssss', [], {
      cwd: undefined,
      env: expect.objectContaining(process.env),
      shell: true,
      encoding: 'utf8',
      reject: false,
    });
    expect(result.content[0].type).toBe('text');
    expect(JSON.parse(result.content[0]!.text as string)).toEqual(expectedResponse);
  });

  it('should use cwd and env from request', async () => {
    const mockCwd = '/test/cwd';
    const mockEnv = { TEST_VAR: 'test_value' };
    const mockRequest = {
      command: 'echo $TEST_VAR',
      cwd: mockCwd,
      env: mockEnv,
    };

    const mockExecaResult: Partial<Result> = { 
      exitCode: 0,
      stdout: 'test_value',
      stderr: '',
      // Other properties will be undefined due to Partial, including the new booleans
    };
    vi.mocked(execa).mockResolvedValue(mockExecaResult as Result); 

    await runShellCommandHandler(mockRequest);

    expect(execa).toHaveBeenCalledWith('echo $TEST_VAR', [], {
      cwd: mockCwd,
      env: expect.objectContaining({ ...process.env, ...mockEnv }),
      shell: true,
      encoding: 'utf8',
      reject: false,
    });
  });

  it('should handle environment variable merging correctly', async () => {
    process.env.EXISTING_VAR = 'original_value';
    const mockRequest = {
      command: 'echo $EXISTING_VAR $NEW_VAR',
      env: { NEW_VAR: 'new_value' },
    };

    const mockExecaResult: Partial<Result> = { 
      exitCode: 0,
      stdout: 'original_value new_value',
      stderr: '',
    };
    vi.mocked(execa).mockResolvedValue(mockExecaResult as Result); 

    await runShellCommandHandler(mockRequest);

    expect(execa).toHaveBeenCalledWith(
      'echo $EXISTING_VAR $NEW_VAR',
      [],
      expect.objectContaining({
        env: expect.objectContaining({
          EXISTING_VAR: 'original_value',
          NEW_VAR: 'new_value',
        }),
      })
    );
    delete process.env.EXISTING_VAR; 
  });


  it('should handle internal execa errors (promise rejection)', async () => {
    const mockRequest = {
      command: 'some_non_existent_command_that_breaks_execa_setup',
    };

    const execaInternalError: ExecaError = { 
      name: 'ExecaError', 
      message: 'Internal execa error',
      stack: 'Error: Internal execa error\\n    at <anonymous>:1:1',
      shortMessage: 'Internal execa error',
      originalMessage: 'Original message if any',
      command: 'some_non_existent_command_that_breaks_execa_setup',
      escapedCommand: 'some_non_existent_command_that_breaks_execa_setup',
      exitCode: -1, 
      stdout: '',
      stderr: 'Failed to spawn',
      failed: true,
      timedOut: false,
      isCanceled: false,
      isMaxBuffer: false, 
      cwd: process.cwd(),
      durationMs: 0,
      stdio: [undefined, '', 'Failed to spawn'] as [undefined, string, string],
      all: undefined,
      // pid: 789, // Removed: pid might not be on ExecaError<Options>
      signal: undefined,
      signalDescription: undefined,
      pipedFrom: [],
      ipcOutput: [],
      // Termination properties for ExecaError
      isGracefullyCanceled: false,
      isTerminated: false,
      isForcefullyTerminated: false,
    };

    vi.mocked(execa).mockRejectedValue(execaInternalError); 

    const expectedResponse: ShellCommandResponse = {
      exit_code: -1,
      stdout: '',
      stderr: 'Failed to spawn',
    };

    const result = await runShellCommandHandler(mockRequest);

    expect(execa).toHaveBeenCalledWith('some_non_existent_command_that_breaks_execa_setup', [], {
      cwd: undefined,
      env: expect.objectContaining(process.env),
      shell: true,
      encoding: 'utf8',
      reject: false,
    });
    expect(result.content[0].type).toBe('text');
    expect(JSON.parse(result.content[0]!.text as string)).toEqual(expectedResponse);
  });
});
