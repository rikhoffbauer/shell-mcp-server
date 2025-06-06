import { vi } from 'vitest';

const mock = vi.fn(() => {
  // Default mock implementation, can be overridden by test-specific mockReturnValueOnce etc.
  return Promise.resolve({
    stdout: 'mocked stdout',
    stderr: 'mocked stderr',
    exitCode: 0,
    failed: false,
    timedOut: false,
    isCanceled: false,
    killed: false,
    command: 'mocked command',
    originalMessage: '',
    escapedCommand: 'mocked command',
    shortMessage: '',
    message: '',
    name: 'MockedExecaResult',
    cwd: process.cwd(),
    stdio: ['pipe', 'pipe', 'pipe'],
    pipedFrom: [],
  });
});

console.log('[Mock Check] __mocks__/execa.ts: vi.fn() created. typeof mock.mockReset:', typeof mock.mockReset);

export const execa = mock;
