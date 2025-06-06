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
- Only files matching these patterns are included: docs/**/*.*
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Security check has been disabled - content may contain sensitive information
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
docs/
  api.md
  bash.md
  binary.md
  debugging.md
  environment.md
  errors.md
  escaping.md
  execution.md
  input.md
  ipc.md
  lines.md
  node.md
  output.md
  pipe.md
  scripts.md
  shell.md
  small.md
  streams.md
  termination.md
  transform.md
  typescript.md
  windows.md
```

# Files

## File: docs/api.md
````markdown
<picture>
       <source media="(prefers-color-scheme: dark)" srcset="../media/logo_dark.svg">
       <img alt="execa logo" src="../media/logo.svg" width="400">
</picture>
<br>

# 📔 API reference

This lists all available [methods](#methods) and their [options](#options-1). This also describes the properties of the [subprocess](#subprocess), [result](#result) and [error](#execaerror) they return.

## Methods

### execa(file, arguments?, options?)

`file`: `string | URL`\
`arguments`: `string[]`\
`options`: [`Options`](#options-1)\
_Returns_: [`ResultPromise`](#return-value)

Executes a command using `file ...arguments`.

More info on the [syntax](execution.md#array-syntax) and [escaping](escaping.md#array-syntax).

### $(file, arguments?, options?)

`file`: `string | URL`\
`arguments`: `string[]`\
`options`: [`Options`](#options-1)\
_Returns_: [`ResultPromise`](#return-value)

Same as [`execa()`](#execafile-arguments-options) but using [script-friendly default options](scripts.md#script-files).

This is the preferred method when executing multiple commands in a script file.

[More info.](scripts.md)

### execaNode(scriptPath, arguments?, options?)

`scriptPath`: `string | URL`\
`arguments`: `string[]`\
`options`: [`Options`](#options-1)\
_Returns_: [`ResultPromise`](#return-value)

Same as [`execa()`](#execafile-arguments-options) but using the [`node: true`](#optionsnode) option.
Executes a Node.js file using `node scriptPath ...arguments`.

This is the preferred method when executing Node.js files.

[More info.](node.md)

### execaSync(file, arguments?, options?)
### $.sync(file, arguments?, options?)
### $.s(file, arguments?, options?)

`file`: `string | URL`\
`arguments`: `string[]`\
`options`: [`SyncOptions`](#options-1)\
_Returns_: [`SyncResult`](#return-value)

Same as [`execa()`](#execafile-arguments-options) and [`$`](#file-arguments-options) but synchronous.

Returns a subprocess [`result`](#result) or throws an [`error`](#execasyncerror). The [`subprocess`](#subprocess) is not returned: its methods and properties are not available.

Those methods are discouraged as they hold the CPU and lack multiple features.

[More info.](execution.md#synchronous-execution)

### execa\`command\`
### $\`command\`
### execaNode\`command\`
### execaSync\`command\`
### $.sync\`command\`
### $.s\`command\`

`command`: `string`\
_Returns_: [`ResultPromise`](#return-value), [`SyncResult`](#return-value)

Same as [`execa()`](#execafile-arguments-options), [`$()`](#file-arguments-options), [`execaNode()`](#execanodescriptpath-arguments-options) and [`execaSync()`](#execasyncfile-arguments-options) but using a [template string](execution.md#template-string-syntax). `command` includes both the `file` and its `arguments`.

More info on the [syntax](execution.md#template-string-syntax) and [escaping](escaping.md#template-string-syntax).

### execa(options)\`command\`
### $(options)\`command\`
### execaNode(options)\`command\`
### execaSync(options)\`command\`
### $.sync(options)\`command\`
### $.s(options)\`command\`

`command`: `string`\
`options`: [`Options`](#options-1), [`SyncOptions`](#options-1)\
_Returns_: [`ResultPromise`](#return-value), [`SyncResult`](#return-value)

Same as [```execa`command` ```](#execacommand) but with [options](#options-1).

[More info.](execution.md#template-string-syntax)

### execa(options)
### $(options)
### execaNode(options)
### execaSync(options)
### $.sync(options)
### $.s(options)

`options`: [`Options`](#options-1), [`SyncOptions`](#options-1)\
_Returns_: [`ExecaMethod`](#execafile-arguments-options), [`ExecaScriptMethod`](#file-arguments-options), [`ExecaNodeMethod`](#execanodescriptpath-arguments-options), [`ExecaSyncMethod`](#execasyncfile-arguments-options), [`ExecaScriptSyncMethod`](#syncfile-arguments-options)

Returns a new instance of those methods but with different default [`options`](#options-1). Consecutive calls are merged to previous ones.

[More info.](execution.md#globalshared-options)

### parseCommandString(command)

`command`: `string`\
_Returns_: `string[]`

Split a `command` string into an array. For example, `'npm run build'` returns `['npm', 'run', 'build']` and `'argument otherArgument'` returns `['argument', 'otherArgument']`.

[More info.](escaping.md#user-defined-input)

### sendMessage(message, sendMessageOptions?)

`message`: [`Message`](ipc.md#message-type)\
`sendMessageOptions`: [`SendMessageOptions`](#sendmessageoptions)\
_Returns_: `Promise<void>`

Send a `message` to the parent process.

This requires the [`ipc`](#optionsipc) option to be `true`. The [type](ipc.md#message-type) of `message` depends on the [`serialization`](#optionsserialization) option.

[More info.](ipc.md#exchanging-messages)

#### sendMessageOptions

_Type_: `object`

#### sendMessageOptions.strict

_Type_: `boolean`\
_Default_: `false`

Throw when the other process is not receiving or listening to messages.

[More info.](ipc.md#ensure-messages-are-received)

### getOneMessage(getOneMessageOptions?)

`getOneMessageOptions`: [`GetOneMessageOptions`](#getonemessageoptions)\
_Returns_: [`Promise<Message>`](ipc.md#message-type)

Receive a single `message` from the parent process.

This requires the [`ipc`](#optionsipc) option to be `true`. The [type](ipc.md#message-type) of `message` depends on the [`serialization`](#optionsserialization) option.

[More info.](ipc.md#exchanging-messages)

#### getOneMessageOptions

_Type_: `object`

#### getOneMessageOptions.filter

_Type_: [`(Message) => boolean`](ipc.md#message-type)

Ignore any `message` that returns `false`.

[More info.](ipc.md#filter-messages)

#### getOneMessageOptions.reference

_Type_: `boolean`\
_Default_: `true`

Keep the subprocess alive while `getOneMessage()` is waiting.

[More info.](ipc.md#keeping-the-subprocess-alive)

### getEachMessage(getEachMessageOptions?)

`getEachMessageOptions`: [`GetEachMessageOptions`](#geteachmessageoptions)\
_Returns_: [`AsyncIterable<Message>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols)

Iterate over each `message` from the parent process.

This requires the [`ipc`](#optionsipc) option to be `true`. The [type](ipc.md#message-type) of `message` depends on the [`serialization`](#optionsserialization) option.

[More info.](ipc.md#listening-to-messages)

#### getEachMessageOptions

_Type_: `object`

#### getEachMessageOptions.reference

_Type_: `boolean`\
_Default_: `true`

Keep the subprocess alive while `getEachMessage()` is waiting.

[More info.](ipc.md#keeping-the-subprocess-alive)

### getCancelSignal()

_Returns_: [`Promise<AbortSignal>`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal)

Retrieves the [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) shared by the [`cancelSignal`](#optionscancelsignal) option.

This can only be called inside a subprocess. This requires the [`gracefulCancel`](#optionsgracefulcancel) option to be `true`.

[More info.](termination.md#graceful-termination)

## Return value

_TypeScript:_ [`ResultPromise`](typescript.md)\
_Type:_ `Promise<object> | Subprocess`

The return value of all [asynchronous methods](#methods) is both:
- the [subprocess](#subprocess).
- a `Promise` either resolving with its successful [`result`](#result), or rejecting with its [`error`](#execaerror).

[More info.](execution.md#subprocess)

## Subprocess

_TypeScript:_ [`Subprocess`](typescript.md)

[`child_process` instance](https://nodejs.org/api/child_process.html#child_process_class_childprocess) with the following methods and properties.

### subprocess\[Symbol.asyncIterator\]()

_Returns_: [`AsyncIterable`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols)

Subprocesses are [async iterables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator). They iterate over each output line.

[More info.](lines.md#progressive-splitting)

### subprocess.iterable(readableOptions?)

`readableOptions`: [`ReadableOptions`](#readableoptions)\
_Returns_: [`AsyncIterable`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols)

Same as [`subprocess[Symbol.asyncIterator]`](#subprocesssymbolasynciterator) except [options](#readableoptions) can be provided.

[More info.](lines.md#progressive-splitting)

### subprocess.pipe(file, arguments?, options?)

`file`: `string | URL`\
`arguments`: `string[]`\
`options`: [`Options`](#options-1) and [`PipeOptions`](#pipeoptions)\
_Returns_: [`Promise<Result>`](#result)

[Pipe](https://nodejs.org/api/stream.html#readablepipedestination-options) the subprocess' [`stdout`](#subprocessstdout) to a second Execa subprocess' [`stdin`](#subprocessstdin). This resolves with that second subprocess' [result](#result). If either subprocess is rejected, this is rejected with that subprocess' [error](#execaerror) instead.

This follows the same syntax as [`execa(file, arguments?, options?)`](#execafile-arguments-options) except both [regular options](#options-1) and [pipe-specific options](#pipeoptions) can be specified.

[More info.](pipe.md#array-syntax)

### subprocess.pipe\`command\`
### subprocess.pipe(options)\`command\`

`command`: `string`\
`options`: [`Options`](#options-1) and [`PipeOptions`](#pipeoptions)\
_Returns_: [`Promise<Result>`](#result)

Like [`subprocess.pipe(file, arguments?, options?)`](#subprocesspipefile-arguments-options) but using a [`command` template string](execution.md#template-string-syntax) instead. This follows the same syntax as `execa` [template strings](execution.md#template-string-syntax).

[More info.](pipe.md#template-string-syntax)

### subprocess.pipe(secondSubprocess, pipeOptions?)

`secondSubprocess`: [`ResultPromise`](#return-value)\
`pipeOptions`: [`PipeOptions`](#pipeoptions)\
_Returns_: [`Promise<Result>`](#result)

Like [`subprocess.pipe(file, arguments?, options?)`](#subprocesspipefile-arguments-options) but using the [return value](#return-value) of another [`execa()`](#execafile-arguments-options) call instead.

[More info.](pipe.md#advanced-syntax)

#### pipeOptions

_Type:_ `object`

#### pipeOptions.from

_Type:_ `"stdout" | "stderr" | "all" | "fd3" | "fd4" | ...`\
_Default:_ `"stdout"`

Which stream to pipe from the source subprocess. A [file descriptor](https://en.wikipedia.org/wiki/File_descriptor) like `"fd3"` can also be passed.

`"all"` pipes both [`stdout`](#subprocessstdout) and [`stderr`](#subprocessstderr). This requires the [`all`](#optionsall) option to be `true`.

[More info.](pipe.md#source-file-descriptor)

#### pipeOptions.to

_Type:_ `"stdin" | "fd3" | "fd4" | ...`\
_Default:_ `"stdin"`

Which [stream](#subprocessstdin) to pipe to the destination subprocess. A [file descriptor](https://en.wikipedia.org/wiki/File_descriptor) like `"fd3"` can also be passed.

[More info.](pipe.md#destination-file-descriptor)

#### pipeOptions.unpipeSignal

_Type:_ [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal)

Unpipe the subprocess when the signal aborts.

[More info.](pipe.md#unpipe)

### subprocess.kill(signal, error?)
### subprocess.kill(error?)

`signal`: `string | number`\
`error`: `Error`\
_Returns_: `boolean`

Sends a [signal](https://nodejs.org/api/os.html#signal-constants) to the subprocess. The default signal is the [`killSignal`](#optionskillsignal) option. `killSignal` defaults to `SIGTERM`, which [terminates](#erroristerminated) the subprocess.

This returns `false` when the signal could not be sent, for example when the subprocess has already exited.

When an error is passed as argument, it is set to the subprocess' [`error.cause`](#errorcause). The subprocess is then terminated with the default signal. This does not emit the [`error` event](https://nodejs.org/api/child_process.html#event-error).

[More info.](termination.md)

### subprocess.pid

_Type:_ `number | undefined`

Process identifier ([PID](https://en.wikipedia.org/wiki/Process_identifier)).

This is `undefined` if the subprocess failed to spawn.

[More info.](termination.md#inter-process-termination)

### subprocess.sendMessage(message, sendMessageOptions)

`message`: [`Message`](ipc.md#message-type)\
`sendMessageOptions`: [`SendMessageOptions`](#sendmessageoptions)\
_Returns_: `Promise<void>`

Send a `message` to the subprocess.

This requires the [`ipc`](#optionsipc) option to be `true`. The [type](ipc.md#message-type) of `message` depends on the [`serialization`](#optionsserialization) option.

[More info.](ipc.md#exchanging-messages)

### subprocess.getOneMessage(getOneMessageOptions?)

`getOneMessageOptions`: [`GetOneMessageOptions`](#getonemessageoptions)\
_Returns_: [`Promise<Message>`](ipc.md#message-type)

Receive a single `message` from the subprocess.

This requires the [`ipc`](#optionsipc) option to be `true`. The [type](ipc.md#message-type) of `message` depends on the [`serialization`](#optionsserialization) option.

[More info.](ipc.md#exchanging-messages)

### subprocess.getEachMessage(getEachMessageOptions?)

`getEachMessageOptions`: [`GetEachMessageOptions`](#geteachmessageoptions)\
_Returns_: [`AsyncIterable<Message>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols)

Iterate over each `message` from the subprocess.

This requires the [`ipc`](#optionsipc) option to be `true`. The [type](ipc.md#message-type) of `message` depends on the [`serialization`](#optionsserialization) option.

[More info.](ipc.md#listening-to-messages)

### subprocess.stdin

_Type:_ [`Writable | null`](https://nodejs.org/api/stream.html#class-streamwritable)

The subprocess [`stdin`](https://en.wikipedia.org/wiki/Standard_streams#Standard_input_(stdin)) as a stream.

This is `null` if the [`stdin`](#optionsstdin) option is set to [`'inherit'`](input.md#terminal-input), [`'ignore'`](input.md#ignore-input), [`Readable`](streams.md#input) or [`integer`](input.md#terminal-input).

[More info.](streams.md#manual-streaming)

### subprocess.stdout

_Type:_ [`Readable | null`](https://nodejs.org/api/stream.html#class-streamreadable)

The subprocess [`stdout`](https://en.wikipedia.org/wiki/Standard_streams#Standard_output_(stdout)) as a stream.

This is `null` if the [`stdout`](#optionsstdout) option is set to [`'inherit'`](output.md#terminal-output), [`'ignore'`](output.md#ignore-output), [`Writable`](streams.md#output) or [`integer`](output.md#terminal-output), or if the [`buffer`](#optionsbuffer) option is `false`.

[More info.](streams.md#manual-streaming)

### subprocess.stderr

_Type:_ [`Readable | null`](https://nodejs.org/api/stream.html#class-streamreadable)

The subprocess [`stderr`](https://en.wikipedia.org/wiki/Standard_streams#Standard_error_(stderr)) as a stream.

This is `null` if the [`stderr`](#optionsstdout) option is set to [`'inherit'`](output.md#terminal-output), [`'ignore'`](output.md#ignore-output), [`Writable`](streams.md#output) or [`integer`](output.md#terminal-output), or if the [`buffer`](#optionsbuffer) option is `false`.

[More info.](streams.md#manual-streaming)

### subprocess.all

_Type:_ [`Readable | undefined`](https://nodejs.org/api/stream.html#class-streamreadable)

Stream combining/interleaving [`subprocess.stdout`](#subprocessstdout) and [`subprocess.stderr`](#subprocessstderr).

This requires the [`all`](#optionsall) option to be `true`.

This is `undefined` if [`stdout`](#optionsstdout) and [`stderr`](#optionsstderr) options are set to [`'inherit'`](output.md#terminal-output), [`'ignore'`](output.md#ignore-output), [`Writable`](streams.md#output) or [`integer`](output.md#terminal-output), or if the [`buffer`](#optionsbuffer) option is `false`.

More info on [interleaving](output.md#interleaved-output) and [streaming](streams.md#manual-streaming).

### subprocess.stdio

_Type:_ [`[Writable | null, Readable | null, Readable | null, ...Array<Writable | Readable | null>]`](https://nodejs.org/api/stream.html#class-streamreadable)

The subprocess [`stdin`](#subprocessstdin), [`stdout`](#subprocessstdout), [`stderr`](#subprocessstderr) and [other files descriptors](#optionsstdio) as an array of streams.

Each array item is `null` if the corresponding [`stdin`](#optionsstdin), [`stdout`](#optionsstdout), [`stderr`](#optionsstderr) or [`stdio`](#optionsstdio) option is set to [`'inherit'`](output.md#terminal-output), [`'ignore'`](output.md#ignore-output), [`Stream`](streams.md#output) or [`integer`](output.md#terminal-output), or if the [`buffer`](#optionsbuffer) option is `false`.

[More info.](streams.md#manual-streaming)

### subprocess.readable(readableOptions?)

`readableOptions`: [`ReadableOptions`](#readableoptions)\
_Returns_: [`Readable`](https://nodejs.org/api/stream.html#class-streamreadable) Node.js stream

Converts the subprocess to a readable stream.

[More info.](streams.md#converting-a-subprocess-to-a-stream)

#### readableOptions

_Type:_ `object`

#### readableOptions.from

_Type:_ `"stdout" | "stderr" | "all" | "fd3" | "fd4" | ...`\
_Default:_ `"stdout"`

Which stream to read from the subprocess. A [file descriptor](https://en.wikipedia.org/wiki/File_descriptor) like `"fd3"` can also be passed.

`"all"` reads both [`stdout`](#subprocessstdout) and [`stderr`](#subprocessstderr). This requires the [`all`](#optionsall) option to be `true`.

[More info.](streams.md#different-file-descriptor)

#### readableOptions.binary

_Type:_ `boolean`\
_Default:_ `false` with [`subprocess.iterable()`](#subprocessiterablereadableoptions), `true` with [`subprocess.readable()`](#subprocessreadablereadableoptions)/[`subprocess.duplex()`](#subprocessduplexduplexoptions)

If `false`, iterates over lines. Each line is a string.

If `true`, iterates over arbitrary chunks of data. Each line is an [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) (with [`subprocess.iterable()`](#subprocessiterablereadableoptions)) or a [`Buffer`](https://nodejs.org/api/buffer.html#class-buffer) (with [`subprocess.readable()`](#subprocessreadablereadableoptions)/[`subprocess.duplex()`](#subprocessduplexduplexoptions)).

This is always `true` when the [`encoding`](#optionsencoding) option is binary.

More info for [iterables](binary.md#iterable) and [streams](binary.md#streams).

#### readableOptions.preserveNewlines

_Type:_ `boolean`\
_Default:_ `false` with [`subprocess.iterable()`](#subprocessiterablereadableoptions), `true` with [`subprocess.readable()`](#subprocessreadablereadableoptions)/[`subprocess.duplex()`](#subprocessduplexduplexoptions)

If both this option and the [`binary`](#readableoptionsbinary) option is `false`, [newlines](https://en.wikipedia.org/wiki/Newline) are stripped from each line.

[More info.](lines.md#iterable)

### subprocess.writable(writableOptions?)

`writableOptions`: [`WritableOptions`](#writableoptions)\
_Returns_: [`Writable`](https://nodejs.org/api/stream.html#class-streamwritable) Node.js stream

Converts the subprocess to a writable stream.

[More info.](streams.md#converting-a-subprocess-to-a-stream)

#### writableOptions

_Type:_ `object`

#### writableOptions.to

_Type:_ `"stdin" | "fd3" | "fd4" | ...`\
_Default:_ `"stdin"`

Which [stream](#subprocessstdin) to write to the subprocess. A [file descriptor](https://en.wikipedia.org/wiki/File_descriptor) like `"fd3"` can also be passed.

[More info.](streams.md#different-file-descriptor)

### subprocess.duplex(duplexOptions?)

`duplexOptions`: [`ReadableOptions | WritableOptions`](#readableoptions)\
_Returns_: [`Duplex`](https://nodejs.org/api/stream.html#class-streamduplex) Node.js stream

Converts the subprocess to a duplex stream.

[More info.](streams.md#converting-a-subprocess-to-a-stream)

## Result

_TypeScript:_ [`Result`](typescript.md) or [`SyncResult`](typescript.md)\
_Type:_ `object`

[Result](execution.md#result) of a subprocess successful execution.

When the subprocess [fails](errors.md#subprocess-failure), it is rejected with an [`ExecaError`](#execaerror) instead.

### result.stdout

_Type:_ `string | Uint8Array | string[] | Uint8Array[] | unknown[] | undefined`

The output of the subprocess on [`stdout`](https://en.wikipedia.org/wiki/Standard_streams#Standard_output_(stdout)).

This is `undefined` if the [`stdout`](#optionsstdout) option is set to only [`'inherit'`](output.md#terminal-output), [`'ignore'`](output.md#ignore-output), [`Writable`](streams.md#output) or [`integer`](output.md#terminal-output), or if the [`buffer`](#optionsbuffer) option is `false`.

This is an array if the [`lines`](#optionslines) option is `true`, or if the `stdout` option is a [transform in object mode](transform.md#object-mode).

[More info.](output.md#stdout-and-stderr)

### result.stderr

_Type:_ `string | Uint8Array | string[] | Uint8Array[] | unknown[] | undefined`

The output of the subprocess on [`stderr`](https://en.wikipedia.org/wiki/Standard_streams#Standard_error_(stderr)).

This is `undefined` if the [`stderr`](#optionsstderr) option is set to only [`'inherit'`](output.md#terminal-output), [`'ignore'`](output.md#ignore-output), [`Writable`](streams.md#output) or [`integer`](output.md#terminal-output), or if the [`buffer`](#optionsbuffer) option is `false`.

This is an array if the [`lines`](#optionslines) option is `true`, or if the `stderr` option is a [transform in object mode](transform.md#object-mode).

[More info.](output.md#stdout-and-stderr)

### result.all

_Type:_ `string | Uint8Array | string[] | Uint8Array[] | unknown[] | undefined`

The output of the subprocess with [`result.stdout`](#resultstdout) and [`result.stderr`](#resultstderr) interleaved.

This requires the [`all`](#optionsall) option to be `true`.

This is `undefined` if both [`stdout`](#optionsstdout) and [`stderr`](#optionsstderr) options are set to only [`'inherit'`](output.md#terminal-output), [`'ignore'`](output.md#ignore-output), [`Writable`](streams.md#output) or [`integer`](output.md#terminal-output), or if the [`buffer`](#optionsbuffer) option is `false`.

This is an array if the [`lines`](#optionslines) option is `true`, or if either the `stdout` or `stderr` option is a [transform in object mode](transform.md#object-mode).

[More info.](output.md#interleaved-output)

### result.stdio

_Type:_ `Array<string | Uint8Array | string[] | Uint8Array[] | unknown[] | undefined>`

The output of the subprocess on [`stdin`](#optionsstdin), [`stdout`](#optionsstdout), [`stderr`](#optionsstderr) and [other file descriptors](#optionsstdio).

Items are `undefined` when their corresponding [`stdio`](#optionsstdio) option is set to [`'inherit'`](output.md#terminal-output), [`'ignore'`](output.md#ignore-output), [`Writable`](streams.md#output) or [`integer`](output.md#terminal-output), or if the [`buffer`](#optionsbuffer) option is `false`.

Items are arrays when their corresponding `stdio` option is a [transform in object mode](transform.md#object-mode).

[More info.](output.md#additional-file-descriptors)

### result.ipcOutput

_Type_: [`Message[]`](ipc.md#message-type)

All the messages [sent by the subprocess](#sendmessagemessage-sendmessageoptions) to the current process.

This is empty unless the [`ipc`](#optionsipc) option is `true`. Also, this is empty if the [`buffer`](#optionsbuffer) option is `false`.

[More info.](ipc.md#retrieve-all-messages)

### result.pipedFrom

_Type:_ [`Array<Result | ExecaError>`](#result)

[Results](#result) of the other subprocesses that were piped into this subprocess.

This array is initially empty and is populated each time the [`subprocess.pipe()`](#subprocesspipefile-arguments-options) method resolves.

[More info.](pipe.md#result)

### result.command

_Type:_ `string`

The file and [arguments](input.md#command-arguments) that were run.

[More info.](debugging.md#command)

### result.escapedCommand

_Type:_ `string`

Same as [`command`](#resultcommand) but escaped.

[More info.](debugging.md#command)

### result.cwd

_Type:_ `string`

The [current directory](#optionscwd) in which the command was run.

[More info.](environment.md#current-directory)

### result.durationMs

_Type:_ `number`

Duration of the subprocess, in milliseconds.

[More info.](debugging.md#duration)

### result.failed

_Type:_ `boolean`

Whether the subprocess failed to run.

When this is `true`, the result is an [`ExecaError`](#execaerror) instance with additional error-related properties.

[More info.](errors.md#subprocess-failure)

## ExecaError
## ExecaSyncError

_Type:_ `Error`

Result of a subprocess [failed execution](errors.md#subprocess-failure).

This error is thrown as an exception. If the [`reject`](#optionsreject) option is false, it is returned instead.

This has the same shape as [successful results](#result), with the following additional properties.

[More info.](errors.md)

### error.message

_Type:_ `string`

Error message when the subprocess [failed](errors.md#subprocess-failure) to run.

[More info.](errors.md#error-message)

### error.shortMessage

_Type:_ `string`

This is the same as [`error.message`](#errormessage) except it does not include the subprocess [output](output.md).

[More info.](errors.md#error-message)

### error.originalMessage

_Type:_ `string | undefined`

Original error message. This is the same as [`error.message`](#errormessage) excluding the subprocess [output](output.md) and some additional information added by Execa.

[More info.](errors.md#error-message)

### error.cause

_Type:_ `unknown | undefined`

Underlying error, if there is one. For example, this is set by [`subprocess.kill(error)`](#subprocesskillerror).

This is usually an `Error` instance.

[More info.](termination.md#error-message-and-stack-trace)

### error.code

_Type:_ `string | undefined`

Node.js-specific [error code](https://nodejs.org/api/errors.html#errorcode), when available.

### error.timedOut

_Type:_ `boolean`

Whether the subprocess timed out due to the [`timeout`](#optionstimeout) option.

[More info.](termination.md#timeout)

### error.isCanceled

_Type:_ `boolean`

Whether the subprocess was canceled using the [`cancelSignal`](#optionscancelsignal) option.

[More info.](termination.md#canceling)

### error.isGracefullyCanceled

_Type:_ `boolean`

Whether the subprocess was canceled using both the [`cancelSignal`](#optionscancelsignal) and the [`gracefulCancel`](#optionsgracefulcancel) options.

[More info.](termination.md#graceful-termination)

### error.isMaxBuffer

_Type:_ `boolean`

Whether the subprocess failed because its output was larger than the [`maxBuffer`](#optionsmaxbuffer) option.

[More info.](output.md#big-output)

### error.isTerminated

_Type:_ `boolean`

Whether the subprocess was terminated by a [signal](termination.md#signal-termination) (like [`SIGTERM`](termination.md#sigterm)) sent by either:
- The current process.
- [Another process](termination.md#inter-process-termination). This case is [not supported on Windows](https://nodejs.org/api/process.html#signal-events).

[More info.](termination.md#signal-name-and-description)

### error.isForcefullyTerminated

_Type:_ `boolean`

Whether the subprocess was terminated by the [`SIGKILL`](termination.md#sigkill) signal sent by the [`forceKillAfterDelay`](#optionsforcekillafterdelay) option.

[More info.](termination.md#forceful-termination)

### error.exitCode

_Type:_ `number | undefined`

The numeric [exit code](https://en.wikipedia.org/wiki/Exit_status) of the subprocess that was run.

This is `undefined` when the subprocess could not be spawned or was terminated by a [signal](#errorsignal).

[More info.](errors.md#exit-code)

### error.signal

_Type:_ `string | undefined`

The name of the [signal](termination.md#signal-termination) (like [`SIGTERM`](termination.md#sigterm)) that terminated the subprocess, sent by either:
- The current process.
- [Another process](termination.md#inter-process-termination). This case is [not supported on Windows](https://nodejs.org/api/process.html#signal-events).

If a signal terminated the subprocess, this property is defined and included in the [error message](#errormessage). Otherwise it is `undefined`.

[More info.](termination.md#signal-name-and-description)

### error.signalDescription

_Type:_ `string | undefined`

A human-friendly description of the [signal](termination.md#signal-termination) that was used to terminate the subprocess.

If a signal terminated the subprocess, this property is defined and included in the error message. Otherwise it is `undefined`. It is also `undefined` when the signal is very uncommon which should seldomly happen.

[More info.](termination.md#signal-name-and-description)

## Options

_TypeScript:_ [`Options`](typescript.md) or [`SyncOptions`](typescript.md)\
_Type:_ `object`

This lists all options for [`execa()`](#execafile-arguments-options) and the [other methods](#methods).

The following options [can specify different values](output.md#stdoutstderr-specific-options) for [`stdout`](#optionsstdout) and [`stderr`](#optionsstderr): [`verbose`](#optionsverbose), [`lines`](#optionslines), [`stripFinalNewline`](#optionsstripfinalnewline), [`buffer`](#optionsbuffer), [`maxBuffer`](#optionsmaxbuffer).

### options.preferLocal

_Type:_ `boolean`\
_Default:_ `true` with [`$`](#file-arguments-options), `false` otherwise

Prefer locally installed binaries when looking for a binary to execute.

[More info.](environment.md#local-binaries)

### options.localDir

_Type:_ `string | URL`\
_Default:_ [`cwd`](#optionscwd) option

Preferred path to find locally installed binaries, when using the [`preferLocal`](#optionspreferlocal) option.

[More info.](environment.md#local-binaries)

### options.node

_Type:_ `boolean`\
_Default:_ `true` with [`execaNode()`](#execanodescriptpath-arguments-options), `false` otherwise

If `true`, runs with Node.js. The first argument must be a Node.js file.

The subprocess inherits the current Node.js [CLI flags](https://nodejs.org/api/cli.html#options) and version. This can be overridden using the [`nodeOptions`](#optionsnodeoptions) and [`nodePath`](#optionsnodepath) options.

[More info.](node.md)

### options.nodeOptions

_Type:_ `string[]`\
_Default:_ [`process.execArgv`](https://nodejs.org/api/process.html#process_process_execargv) (current Node.js CLI flags)

List of [CLI flags](https://nodejs.org/api/cli.html#cli_options) passed to the [Node.js executable](#optionsnodepath).

Requires the [`node`](#optionsnode) option to be `true`.

[More info.](node.md#nodejs-cli-flags)

### options.nodePath

_Type:_ `string | URL`\
_Default:_ [`process.execPath`](https://nodejs.org/api/process.html#process_process_execpath) (current Node.js executable)

Path to the Node.js executable.

Requires the [`node`](#optionsnode) option to be `true`.

[More info.](node.md#nodejs-version)

### options.shell

_Type:_ `boolean | string | URL`\
_Default:_ `false`

If `true`, runs the command inside of a [shell](https://en.wikipedia.org/wiki/Shell_(computing)).

Uses [`/bin/sh`](https://en.wikipedia.org/wiki/Unix_shell) on UNIX and [`cmd.exe`](https://en.wikipedia.org/wiki/Cmd.exe) on Windows. A different shell can be specified as a string. The shell should understand the `-c` switch on UNIX or `/d /s /c` on Windows.

We [recommend against](shell.md#avoiding-shells) using this option.

[More info.](shell.md)

### options.cwd

_Type:_ `string | URL`\
_Default:_ `process.cwd()`

Current [working directory](https://en.wikipedia.org/wiki/Working_directory) of the subprocess.

This is also used to resolve the [`nodePath`](#optionsnodepath) option when it is a relative path.

[More info.](environment.md#current-directory)

### options.env

_Type:_ `object`\
_Default:_ [`process.env`](https://nodejs.org/api/process.html#processenv)

[Environment variables](https://en.wikipedia.org/wiki/Environment_variable).

Unless the [`extendEnv`](#optionsextendenv) option is `false`, the subprocess also uses the current process' environment variables ([`process.env`](https://nodejs.org/api/process.html#processenv)).

[More info.](input.md#environment-variables)

### options.extendEnv

_Type:_ `boolean`\
_Default:_ `true`

If `true`, the subprocess uses both the [`env`](#optionsenv) option and the current process' environment variables ([`process.env`](https://nodejs.org/api/process.html#processenv)).
If `false`, only the `env` option is used, not `process.env`.

[More info.](input.md#environment-variables)

### options.input

_Type:_ `string | Uint8Array | stream.Readable`

Write some input to the subprocess' [`stdin`](https://en.wikipedia.org/wiki/Standard_streams#Standard_input_(stdin)).

See also the [`inputFile`](#optionsinputfile) and [`stdin`](#optionsstdin) options.

[More info.](input.md#string-input)

### options.inputFile

_Type:_ `string | URL`

Use a file as input to the subprocess' [`stdin`](https://en.wikipedia.org/wiki/Standard_streams#Standard_input_(stdin)).

See also the [`input`](#optionsinput) and [`stdin`](#optionsstdin) options.

[More info.](input.md#file-input)

### options.stdin

_TypeScript:_ [`StdinOption`](typescript.md) or [`StdinSyncOption`](typescript.md)\
_Type:_ `string | number | stream.Readable | ReadableStream | TransformStream | URL | {file: string} | Uint8Array | Iterable<string | Uint8Array | unknown> | AsyncIterable<string | Uint8Array | unknown> | GeneratorFunction<string | Uint8Array | unknown> | AsyncGeneratorFunction<string | Uint8Array | unknown> | {transform: GeneratorFunction | AsyncGeneratorFunction | Duplex | TransformStream}` (or a tuple of those types)\
_Default:_ `'inherit'` with [`$`](#file-arguments-options), `'pipe'` otherwise

How to setup the subprocess' [standard input](https://en.wikipedia.org/wiki/Standard_streams#Standard_input_(stdin)). This can be [`'pipe'`](streams.md#manual-streaming), [`'overlapped'`](windows.md#asynchronous-io), [`'ignore`](input.md#ignore-input), [`'inherit'`](input.md#terminal-input), a [file descriptor integer](input.md#terminal-input), a [Node.js `Readable` stream](streams.md#input), a web [`ReadableStream`](streams.md#web-streams), a [`{ file: 'path' }` object](input.md#file-input), a [file URL](input.md#file-input), an [`Iterable`](streams.md#iterables-as-input) (including an [array of strings](input.md#string-input)), an [`AsyncIterable`](streams.md#iterables-as-input), an [`Uint8Array`](binary.md#binary-input), a [generator function](transform.md), a [`Duplex`](transform.md#duplextransform-streams) or a web [`TransformStream`](transform.md#duplextransform-streams).

This can be an [array of values](output.md#multiple-targets) such as `['inherit', 'pipe']` or `[fileUrl, 'pipe']`.

More info on [available values](input.md), [streaming](streams.md) and [transforms](transform.md).

### options.stdout

_TypeScript:_ [`StdoutStderrOption`](typescript.md) or [`StdoutStderrSyncOption`](typescript.md)\
_Type:_ `string | number | stream.Writable | WritableStream | TransformStream | URL | {file: string} | GeneratorFunction<string | Uint8Array | unknown> | AsyncGeneratorFunction<string | Uint8Array | unknown>  | {transform: GeneratorFunction | AsyncGeneratorFunction | Duplex | TransformStream}` (or a tuple of those types)\
_Default:_ `pipe`

How to setup the subprocess' [standard output](https://en.wikipedia.org/wiki/Standard_streams#Standard_input_(stdin)). This can be [`'pipe'`](output.md#stdout-and-stderr), [`'overlapped'`](windows.md#asynchronous-io), [`'ignore`](output.md#ignore-output), [`'inherit'`](output.md#terminal-output), a [file descriptor integer](output.md#terminal-output), a [Node.js `Writable` stream](streams.md#output), a web [`WritableStream`](streams.md#web-streams), a [`{ file: 'path' }` object](output.md#file-output), a [file URL](output.md#file-output), a [generator function](transform.md), a [`Duplex`](transform.md#duplextransform-streams) or a web [`TransformStream`](transform.md#duplextransform-streams).

This can be an [array of values](output.md#multiple-targets) such as `['inherit', 'pipe']` or `[fileUrl, 'pipe']`.

More info on [available values](output.md), [streaming](streams.md) and [transforms](transform.md).

### options.stderr

_TypeScript:_ [`StdoutStderrOption`](typescript.md) or [`StdoutStderrSyncOption`](typescript.md)\
_Type:_ `string | number | stream.Writable | WritableStream | TransformStream | URL | {file: string} | GeneratorFunction<string | Uint8Array | unknown> | AsyncGeneratorFunction<string | Uint8Array | unknown> | {transform: GeneratorFunction | AsyncGeneratorFunction | Duplex | TransformStream}` (or a tuple of those types)\
_Default:_ `pipe`

How to setup the subprocess' [standard error](https://en.wikipedia.org/wiki/Standard_streams#Standard_input_(stdin)). This can be [`'pipe'`](output.md#stdout-and-stderr), [`'overlapped'`](windows.md#asynchronous-io), [`'ignore`](output.md#ignore-output), [`'inherit'`](output.md#terminal-output), a [file descriptor integer](output.md#terminal-output), a [Node.js `Writable` stream](streams.md#output), a web [`WritableStream`](streams.md#web-streams), a [`{ file: 'path' }` object](output.md#file-output), a [file URL](output.md#file-output), a [generator function](transform.md), a [`Duplex`](transform.md#duplextransform-streams) or a web [`TransformStream`](transform.md#duplextransform-streams).

This can be an [array of values](output.md#multiple-targets) such as `['inherit', 'pipe']` or `[fileUrl, 'pipe']`.

More info on [available values](output.md), [streaming](streams.md) and [transforms](transform.md).

### options.stdio

_TypeScript:_ [`Options['stdio']`](typescript.md) or [`SyncOptions['stdio']`](typescript.md)\
_Type:_ `string | Array<string | number | stream.Readable | stream.Writable | ReadableStream | WritableStream | TransformStream | URL | {file: string} | Uint8Array | Iterable<string> | Iterable<Uint8Array> | Iterable<unknown> | AsyncIterable<string | Uint8Array | unknown> | GeneratorFunction<string | Uint8Array | unknown> | AsyncGeneratorFunction<string | Uint8Array | unknown> | {transform: GeneratorFunction | AsyncGeneratorFunction | Duplex | TransformStream}>` (or a tuple of those types)\
_Default:_ `pipe`

Like the [`stdin`](#optionsstdin), [`stdout`](#optionsstdout) and [`stderr`](#optionsstderr) options but for all [file descriptors](https://en.wikipedia.org/wiki/File_descriptor) at once. For example, `{stdio: ['ignore', 'pipe', 'pipe']}` is the same as `{stdin: 'ignore', stdout: 'pipe', stderr: 'pipe'}`.

A single string can be used [as a shortcut](output.md#shortcut).

The array can have more than 3 items, to create [additional file descriptors](output.md#additional-file-descriptors) beyond [`stdin`](#optionsstdin)/[`stdout`](#optionsstdout)/[`stderr`](#optionsstderr).

More info on [available values](output.md), [streaming](streams.md) and [transforms](transform.md).

### options.all

_Type:_ `boolean`\
_Default:_ `false`

Add a [`subprocess.all`](#subprocessall) stream and a [`result.all`](#resultall) property.

[More info.](output.md#interleaved-output)

### options.encoding

_Type:_ `'utf8' | 'utf16le' | 'buffer' | 'hex' | 'base64' | 'base64url' | 'latin1' | 'ascii'`\
_Default:_ `'utf8'`

If the subprocess outputs text, specifies its character encoding, either [`'utf8'`](https://en.wikipedia.org/wiki/UTF-8) or [`'utf16le'`](https://en.wikipedia.org/wiki/UTF-16).

If it outputs binary data instead, this should be either:
- `'buffer'`: returns the binary output as an [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).
- [`'hex'`](https://en.wikipedia.org/wiki/Hexadecimal), [`'base64'`](https://en.wikipedia.org/wiki/Base64), [`'base64url'`](https://en.wikipedia.org/wiki/Base64#URL_applications), [`'latin1'`](https://nodejs.org/api/buffer.html#buffers-and-character-encodings) or [`'ascii'`](https://nodejs.org/api/buffer.html#buffers-and-character-encodings): encodes the binary output as a string.

The output is available with [`result.stdout`](#resultstdout), [`result.stderr`](#resultstderr) and [`result.stdio`](#resultstdio).

[More info.](binary.md)

### options.lines

_Type:_ `boolean`\
_Default:_ `false`

Set [`result.stdout`](#resultstdout), [`result.stderr`](#resultstdout), [`result.all`](#resultall) and [`result.stdio`](#resultstdio) as arrays of strings, splitting the subprocess' output into lines.

This cannot be used if the [`encoding`](#optionsencoding) option is [binary](binary.md#binary-output).

By default, this applies to both `stdout` and `stderr`, but [different values can also be passed](output.md#stdoutstderr-specific-options).

[More info.](lines.md#simple-splitting)

### options.stripFinalNewline

_Type:_ `boolean`\
_Default:_ `true`

Strip the final [newline character](https://en.wikipedia.org/wiki/Newline) from the output.

If the [`lines`](#optionslines) option is true, this applies to each output line instead.

By default, this applies to both `stdout` and `stderr`, but [different values can also be passed](output.md#stdoutstderr-specific-options).

[More info.](lines.md#newlines)

### options.maxBuffer

_Type:_ `number`\
_Default:_ `100_000_000`

Largest amount of data allowed on [`stdout`](#resultstdout), [`stderr`](#resultstderr) and [`stdio`](#resultstdio).

By default, this applies to both `stdout` and `stderr`, but [different values can also be passed](output.md#stdoutstderr-specific-options).

When reached, [`error.isMaxBuffer`](#errorismaxbuffer) becomes `true`.

[More info.](output.md#big-output)

### options.buffer

_Type:_ `boolean`\
_Default:_ `true`

When `buffer` is `false`, the [`result.stdout`](#resultstdout), [`result.stderr`](#resultstderr), [`result.all`](#resultall) and [`result.stdio`](#resultstdio) properties are not set.

By default, this applies to both `stdout` and `stderr`, but [different values can also be passed](output.md#stdoutstderr-specific-options).

[More info.](output.md#low-memory)

### options.ipc

_Type:_ `boolean`\
_Default:_ `true` if the [`node`](#optionsnode), [`ipcInput`](#optionsipcinput) or [`gracefulCancel`](#optionsgracefulcancel) option is set, `false` otherwise

Enables exchanging messages with the subprocess using [`subprocess.sendMessage(message)`](#subprocesssendmessagemessage-sendmessageoptions), [`subprocess.getOneMessage()`](#subprocessgetonemessagegetonemessageoptions) and [`subprocess.getEachMessage()`](#subprocessgeteachmessagegeteachmessageoptions).

The subprocess must be a Node.js file.

[More info.](ipc.md)

### options.serialization

_Type:_ `'json' | 'advanced'`\
_Default:_ `'advanced'`

Specify the kind of serialization used for sending messages between subprocesses when using the [`ipc`](#optionsipc) option.

[More info.](ipc.md#message-type)

### options.ipcInput

_Type_: [`Message`](ipc.md#message-type)

Sends an IPC message when the subprocess starts.

The subprocess must be a [Node.js file](#optionsnode). The value's [type](ipc.md#message-type) depends on the [`serialization`](#optionsserialization) option.

More info [here](ipc.md#send-an-initial-message) and [there](input.md#any-input-type).

### options.verbose

_Type:_ `'none' | 'short' | 'full' | Function`\
_Default:_ `'none'`

If `verbose` is `'short'`, prints the command on [`stderr`](https://en.wikipedia.org/wiki/Standard_streams#Standard_error_(stderr)): its file, arguments, duration and (if it failed) error message.

If `verbose` is `'full'` or a function, the command's [`stdout`](https://en.wikipedia.org/wiki/Standard_streams#Standard_output_(stdout)), `stderr` and [IPC messages](ipc.md) are also printed.

A [function](#verbose-function) can be passed to customize logging. Please see [this page](debugging.md#custom-logging) for more information.

By default, this applies to both `stdout` and `stderr`, but [different values can also be passed](output.md#stdoutstderr-specific-options).

[More info.](debugging.md#verbose-mode)

### options.reject

_Type:_ `boolean`\
_Default:_ `true`

Setting this to `false` resolves the [result's promise](#return-value) with the [error](#execaerror) instead of rejecting it.

[More info.](errors.md#preventing-exceptions)

### options.timeout

_Type:_ `number`\
_Default:_ `0`

If `timeout` is greater than `0`, the subprocess will be [terminated](#optionskillsignal) if it runs for longer than that amount of milliseconds.

On timeout, [`error.timedOut`](#errortimedout) becomes `true`.

[More info.](termination.md#timeout)

### options.cancelSignal

_Type:_ [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal)

When the `cancelSignal` is [aborted](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort), terminate the subprocess using a `SIGTERM` signal.

When aborted, [`error.isCanceled`](#erroriscanceled) becomes `true`.

[More info.](termination.md#canceling)

### options.gracefulCancel

_Type:_ `boolean`\
_Default:_: `false`

When the [`cancelSignal`](#optionscancelsignal) option is [aborted](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort), do not send any [`SIGTERM`](termination.md#canceling). Instead, abort the [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) returned by [`getCancelSignal()`](#getcancelsignal). The subprocess should use it to terminate gracefully.

The subprocess must be a [Node.js file](#optionsnode).

When aborted, [`error.isGracefullyCanceled`](#errorisgracefullycanceled) becomes `true`.

[More info.](termination.md#graceful-termination)

### options.forceKillAfterDelay

_Type:_ `number | false`\
_Default:_ `5000`

If the subprocess is terminated but does not exit, forcefully exit it by sending [`SIGKILL`](https://en.wikipedia.org/wiki/Signal_(IPC)#SIGKILL).

When this happens, [`error.isForcefullyTerminated`](#errorisforcefullyterminated) becomes `true`.

[More info.](termination.md#forceful-termination)

### options.killSignal

_Type:_ `string | number`\
_Default:_ `'SIGTERM'`

Default [signal](https://en.wikipedia.org/wiki/Signal_(IPC)) used to terminate the subprocess.

This can be either a name (like [`'SIGTERM'`](termination.md#sigterm)) or a number (like `9`).

[More info.](termination.md#default-signal)

### options.detached

_Type:_ `boolean`\
_Default:_ `false`

Run the subprocess independently from the current process.

[More info.](environment.md#background-subprocess)

### options.cleanup

_Type:_ `boolean`\
_Default:_ `true`

Kill the subprocess when the current process exits.

[More info.](termination.md#current-process-exit)

### options.uid

_Type:_ `number`\
_Default:_ current user identifier

Sets the [user identifier](https://en.wikipedia.org/wiki/User_identifier) of the subprocess.

[More info.](windows.md#uid-and-gid)

### options.gid

_Type:_ `number`\
_Default:_ current group identifier

Sets the [group identifier](https://en.wikipedia.org/wiki/Group_identifier) of the subprocess.

[More info.](windows.md#uid-and-gid)

### options.argv0

_Type:_ `string`\
_Default:_ file being executed

Value of [`argv[0]`](https://nodejs.org/api/process.html#processargv0) sent to the subprocess.

### options.windowsHide

_Type:_ `boolean`\
_Default:_ `true`

On Windows, do not create a new console window.

[More info.](windows.md#console-window)

### options.windowsVerbatimArguments

_Type:_ `boolean`\
_Default:_ `true` if the [`shell`](#optionsshell) option is `true`, `false` otherwise

If `false`, escapes the command arguments on Windows.

[More info.](windows.md#escaping)

## Verbose function

_Type_: `(string, VerboseObject) => string | undefined`

Function passed to the [`verbose`](#optionsverbose) option to customize logging.

[More info.](debugging.md#custom-logging)

### Verbose object

_Type_: `VerboseObject` or `SyncVerboseObject`

Subprocess event object, for logging purpose, using the [`verbose`](#optionsverbose) option.

#### verboseObject.type

_Type_: `string`

Event type. This can be:
- `'command'`: subprocess start
- `'output'`: `stdout`/`stderr` [output](output.md#stdout-and-stderr)
- `'ipc'`: IPC [output](ipc.md#retrieve-all-messages)
- `'error'`: subprocess [failure](errors.md#subprocess-failure)
- `'duration'`: subprocess success or failure

#### verboseObject.message

_Type_: `string`

Depending on [`verboseObject.type`](#verboseobjecttype), this is:
- `'command'`: the [`result.escapedCommand`](#resultescapedcommand)
- `'output'`: one line from [`result.stdout`](#resultstdout) or [`result.stderr`](#resultstderr)
- `'ipc'`: one IPC message from [`result.ipcOutput`](#resultipcoutput)
- `'error'`: the [`error.shortMessage`](#errorshortmessage)
- `'duration'`: the [`result.durationMs`](#resultdurationms)

#### verboseObject.escapedCommand

_Type_: `string`

The file and [arguments](input.md#command-arguments) that were run. This is the same as [`result.escapedCommand`](#resultescapedcommand).

#### verboseObject.options

_Type_: [`Options`](#options-1) or [`SyncOptions`](#options-1)

The [options](#options-1) passed to the subprocess.

#### verboseObject.commandId

_Type_: `string`

Serial number identifying the subprocess within the current process. It is incremented from `'0'`.

This is helpful when multiple subprocesses are running at the same time.

This is similar to a [PID](https://en.wikipedia.org/wiki/Process_identifier) except it has no maximum limit, which means it never repeats. Also, it is usually shorter.

#### verboseObject.timestamp

_Type_: `Date`

Event date/time.

#### verboseObject.result

_Type_: [`Result`](#result), [`SyncResult`](#result) or `undefined`

Subprocess [result](#result).

This is `undefined` if [`verboseObject.type`](#verboseobjecttype) is `'command'`, `'output'` or `'ipc'`.

#### verboseObject.piped

_Type_: `boolean`

Whether another subprocess is [piped](pipe.md) into this subprocess. This is `false` when [`result.pipedFrom`](#resultfailed) is empty.

## Transform options

A transform or an [array of transforms](transform.md#combining) can be passed to the [`stdin`](#optionsstdin), [`stdout`](#optionsstdout), [`stderr`](#optionsstderr) or [`stdio`](#optionsstdio) option.

A transform is either a [generator function](#transformoptionstransform) or a plain object with the following members.

[More info.](transform.md)

### transformOptions.transform

_Type:_ `GeneratorFunction<string | Uint8Array | unknown>` | `AsyncGeneratorFunction<string | Uint8Array | unknown>`

Map or [filter](transform.md#filtering) the [input](input.md) or [output](output.md) of the subprocess.

More info [here](transform.md#summary) and [there](transform.md#sharing-state).

### transformOptions.final

_Type:_ `GeneratorFunction<string | Uint8Array | unknown>` | `AsyncGeneratorFunction<string | Uint8Array | unknown>`

Create additional lines after the last one.

[More info.](transform.md#finalizing)

### transformOptions.binary

_Type:_ `boolean`\
_Default:_ `false`

If `true`, iterate over arbitrary chunks of `Uint8Array`s instead of line `string`s.

[More info.](binary.md#transforms)

### transformOptions.preserveNewlines

_Type:_ `boolean`\
_Default:_ `false`

If `true`, keep newlines in each `line` argument. Also, this allows multiple `yield`s to produces a single line.

[More info.](lines.md#transforms)

### transformOptions.objectMode

_Type:_ `boolean`\
_Default:_ `false`

If `true`, allow [`transformOptions.transform`](#transformoptionstransform) and [`transformOptions.final`](#transformoptionsfinal) to return any type, not just `string` or `Uint8Array`.

[More info.](transform.md#object-mode)

<hr>

[**Previous**: 🔍 Differences with Bash and zx](bash.md)\
[**Top**: Table of contents](../readme.md#documentation)
````

## File: docs/bash.md
````markdown
<picture>
	<source media="(prefers-color-scheme: dark)" srcset="../media/logo_dark.svg">
	<img alt="execa logo" src="../media/logo.svg" width="400">
</picture>
<br>

# 🔍 Differences with Bash and zx

This page describes the differences between [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)), Execa, and [zx](https://github.com/google/zx). Execa intends to be more:
- [Simple](#simplicity): minimalistic API, no [globals](#global-variables), no [binary](#main-binary), no builtin CLI utilities.
- [Cross-platform](#shell): [no shell](shell.md) is used, only JavaScript.
- [Secure](#escaping): no shell injection.
- [Featureful](#simplicity): all Execa features are available ([text lines iteration](#iterate-over-output-lines), [advanced piping](#piping-stdout-to-another-command), [simple IPC](#ipc), [passing any input type](#pass-any-input-type), [returning any output type](#return-any-output-type), [transforms](#transforms), [web streams](#web-streams), [convert to Duplex stream](#convert-to-duplex-stream), [cleanup on exit](termination.md#current-process-exit), [graceful termination](#graceful-termination), [forceful termination](termination.md#forceful-termination), and [more](../readme.md#documentation)).
- [Easy to debug](#debugging): [verbose mode](#verbose-mode-single-command), [detailed errors](#detailed-errors), [messages and stack traces](#cancelation), stateless API.
- [Performant](#performance)

## Flexibility

Unlike shell languages like Bash, libraries like Execa and zx enable you to write scripts with a more featureful programming language (JavaScript). This allows complex logic (such as [parallel execution](#parallel-commands)) to be expressed easily. This also lets you use any Node.js package.

## Shell

The main difference between Execa and zx is that Execa does not require any shell. Shell-specific keywords and features are [written in JavaScript](#variable-substitution) instead.

This is more cross-platform. For example, your code works the same on Windows machines without Bash installed.

Also, there is no shell syntax to remember: everything is just plain JavaScript.

If you really need a shell though, the [`shell`](shell.md) option can be used.

## Simplicity

Execa's scripting API mostly consists of only two methods: [`` $`command` ``](shell.md) and [`$(options)`](execution.md#globalshared-options).

[No special binary](#main-binary) is recommended, no [global variable](#global-variables) is injected: scripts are regular Node.js files.

Execa is a thin wrapper around the core Node.js [`child_process` module](https://nodejs.org/api/child_process.html). It lets you use any of its native features.

## Modularity

zx includes many builtin utilities: [`fetch()`](#http-requests), [`question()`](#cli-prompts), [`sleep()`](#sleep), [`echo()`](#printing-to-stdout), [`stdin()`](#retrieve-stdin), [`retry()`](#retry-on-error), [`spinner()`](#cli-spinner), [`globby`](#globbing), [`chalk`](https://github.com/chalk/chalk), [`fs`](https://github.com/jprichardson/node-fs-extra), [`os`](https://nodejs.org/api/os.html), [`path`](https://nodejs.org/api/path.html), [`yaml`](https://github.com/eemeli/yaml), [`which`](https://github.com/npm/node-which), [`ps`](https://github.com/webpod/ps), [`tmpfile()`](#temporary-file), [`argv`](#cli-arguments), Markdown scripts, remote scripts.

Execa does not include any utility: it focuses on being small and modular instead. [Any Node.js package](https://github.com/sindresorhus/awesome-nodejs#command-line-utilities) can be used in your scripts.

## Performance

Spawning a shell for every command comes at a performance cost, which Execa avoids.

## Debugging

Subprocesses can be hard to debug, which is why Execa includes a [`verbose`](#verbose-mode-single-command) option. It includes [more information](debugging.md#full-mode) than zx: timestamps, command completion and duration, interleaved commands, IPC messages.

Also, Execa's error messages and [properties](#detailed-errors) are very detailed to make it clear to determine why a subprocess failed. Error messages and stack traces can be set with [`subprocess.kill(error)`](termination.md#error-message-and-stack-trace).

Finally, unlike Bash and zx, which are stateful (options, current directory, etc.), Execa is [purely functional](#current-directory), which also helps with debugging.

## Examples

### Main binary

```sh
# Bash
bash file.sh
```

```js
// zx
zx file.js

// or a shebang can be used:
//   #!/usr/bin/env zx
```

```js
// Execa scripts are just regular Node.js files
node file.js
```

### Global variables

```js
// zx
await $`npm run build`;
```

```js
// Execa
import {$} from 'execa';

await $`npm run build`;
```

[More info.](execution.md)

### Command execution

```sh
# Bash
npm run build
```

```js
// zx
await $`npm run build`;
```

```js
// Execa
await $`npm run build`;
```

[More info.](execution.md)

### Multiline commands

```sh
# Bash
npm run build \
	--example-flag-one \
	--example-flag-two
```

```js
// zx
await $`npm run build ${[
	'--example-flag-one',
	'--example-flag-two',
]}`;
```

```js
// Execa
await $`npm run build
	--example-flag-one
	--example-flag-two`;
```

[More info.](execution.md#multiple-lines)

### Concatenation

```sh
# Bash
tmpDirectory="/tmp"
mkdir "$tmpDirectory/filename"
```

```js
// zx
const tmpDirectory = '/tmp'
await $`mkdir ${tmpDirectory}/filename`;
```

```js
// Execa
const tmpDirectory = '/tmp'
await $`mkdir ${tmpDirectory}/filename`;
```

[More info.](execution.md#concatenation)

### Variable substitution

```sh
# Bash
echo $LANG
```

```js
// zx
await $`echo $LANG`;
```

```js
// Execa
await $`echo ${process.env.LANG}`;
```

[More info.](input.md#environment-variables)

### Escaping

```sh
# Bash
echo 'one two'
```

```js
// zx
await $`echo ${'one two'}`;
```

```js
// Execa
await $`echo ${'one two'}`;
```

[More info.](escaping.md)

### Escaping multiple arguments

```sh
# Bash
echo 'one two' '$'
```

```js
// zx
await $`echo ${['one two', '$']}`;
```

```js
// Execa
await $`echo ${['one two', '$']}`;
```

[More info.](execution.md#multiple-arguments)

### Subcommands

```sh
# Bash
echo "$(npm run build)"
```

```js
// zx
const result = await $`npm run build`;
await $`echo ${result}`;
```

```js
// Execa
const result = await $`npm run build`;
await $`echo ${result}`;
```

[More info.](execution.md#subcommands)

### Serial commands

```sh
# Bash
npm run build && npm run test
```

```js
// zx
await $`npm run build && npm run test`;
```

```js
// Execa
await $`npm run build`;
await $`npm run test`;
```

### Parallel commands

```sh
# Bash
npm run build &
npm run test &
```

```js
// zx
await Promise.all([$`npm run build`, $`npm run test`]);
```

```js
// Execa
await Promise.all([$`npm run build`, $`npm run test`]);
```

### Global/shared options

```sh
# Bash
options="timeout 5"
$options npm run init
$options npm run build
$options npm run test
```

```js
// zx
const $$ = $({verbose: true});

await $$`npm run init`;
await $$`npm run build`;
await $$`npm run test`;
```

```js
// Execa
import {$ as $_} from 'execa';

const $ = $_({verbose: true});

await $`npm run init`;
await $`npm run build`;
await $`npm run test`;
```

[More info.](execution.md#globalshared-options)

### Environment variables

```sh
# Bash
EXAMPLE=1 npm run build
```

```js
// zx
await $({env: {EXAMPLE: '1'}})`npm run build`;
```

```js
// Execa
await $({env: {EXAMPLE: '1'}})`npm run build`;
```

[More info.](input.md#environment-variables)

### Local binaries

```sh
# Bash
npx tsc --version
```

```js
// zx
await $({preferLocal: true})`tsc --version`;
```

```js
// Execa
await $({preferLocal: true})`tsc --version`;
```

[More info.](environment.md#local-binaries)

### Retrieve stdin

```sh
# Bash
read content
```

```js
// zx
const content = await stdin();
```

```js
// Execa
import getStdin from 'get-stdin';

const content = await getStdin();
```

[More info.](https://github.com/sindresorhus/get-stdin)

### Pass input to stdin

```sh
# Bash
cat <<<"example"
```

```js
// zx
$({input: 'example'})`cat`;
```

```js
// Execa
$({input: 'example'})`cat`;
```

### Pass any input type

```sh
# Bash only allows passing strings as input
```

```js
// zx only allows passing specific input types
```

```js
// Execa - main.js
const ipcInput = [
	{task: 'lint', ignore: /test\.js/},
	{task: 'copy', files: new Set(['main.js', 'index.js']),
}];
await $({ipcInput})`node build.js`;
```

```js
// Execa - build.js
import {getOneMessage} from 'execa';

const ipcInput = await getOneMessage();
```

[More info.](ipc.md#send-an-initial-message)

### Return any output type

```sh
# Bash only allows returning strings as output
```

```js
// zx only allows returning specific output types
```

```js
// Execa - main.js
const {ipcOutput} = await $({ipc: true})`node build.js`;
console.log(ipcOutput[0]); // {kind: 'start', timestamp: date}
console.log(ipcOutput[1]); // {kind: 'stop', timestamp: date}
```

```js
// Execa - build.js
import {sendMessage} from 'execa';

await sendMessage({kind: 'start', timestamp: new Date()});
await runBuild();
await sendMessage({kind: 'stop', timestamp: new Date()});
```

[More info.](ipc.md#retrieve-all-messages)

### Printing to stdout

```sh
# Bash
echo example
```

```js
// zx
echo`example`;
```

```js
// Execa
console.log('example');
```

### Silent stdout

```sh
# Bash
npm run build > /dev/null
```

```js
// zx
await $`npm run build`.quiet();
```

```js
// Execa does not print stdout by default
await $`npm run build`;
```

### Binary output

```sh
# Bash usually requires redirecting binary output
zip -r - input.txt > output.txt
```

```js
// zx
const stdout = await $`zip -r - input.txt`.buffer();
```

```js
// Execa
const {stdout} = await $({encoding: 'buffer'})`zip -r - input.txt`;
```

[More info.](binary.md#binary-output)

### Verbose mode (single command)

```sh
# Bash
set -v
npm run build
set +v
```

```js
// zx
await $`npm run build`.verbose();
```

```js
// Execa
await $({verbose: 'full'})`npm run build`;
```

[More info.](debugging.md#verbose-mode)

### Verbose mode (global)

```sh
# Bash
set -v
npm run build
```

```
// zx
$ zx --verbose file.js
$ npm run build
Building...
Done.
```

```
$ NODE_DEBUG=execa node file.js
[19:49:00.360] [0] $ npm run build
[19:49:00.360] [0]   Building...
[19:49:00.360] [0]   Done.
[19:49:00.383] [0] √ (done in 23ms)
```

[More info.](debugging.md#global-mode)

### Piping stdout to another command

```sh
# Bash
echo npm run build | sort | head -n2
```

```js
// zx
await $`npm run build`
	.pipe($`sort`)
	.pipe($`head -n2`);
```

```js
// Execa
await $`npm run build`
	.pipe`sort`
	.pipe`head -n2`;
```

[More info.](pipe.md)

### Piping stdout and stderr to another command

```sh
# Bash
npm run build |& cat
```

```js
// zx
const subprocess = $`npm run build`;
const cat = $`cat`;
subprocess.pipe(cat);
subprocess.stderr.pipe(cat.stdin);
await Promise.all([subprocess, cat]);
```

```js
// Execa
await $({all: true})`npm run build`
	.pipe({from: 'all'})`cat`;
```

[More info.](pipe.md#source-file-descriptor)

### Piping stdout to a file

```sh
# Bash
npm run build > output.txt
```

```js
// zx
import {createWriteStream} from 'node:fs';

await $`npm run build`.pipe(createWriteStream('output.txt'));
```

```js
// Execa
await $({stdout: {file: 'output.txt'}})`npm run build`;
```

[More info.](output.md#file-output)

### Append stdout to a file

```sh
# Bash
npm run build >> output.txt
```

```js
// zx
import {createWriteStream} from 'node:fs';

await $`npm run build`.pipe(createWriteStream('output.txt', {flags: 'a'}));
```

```js
// Execa
await $({stdout: {file: 'output.txt', append: true}})`npm run build`;
```

[More info.](output.md#file-output)

### Piping interleaved stdout and stderr to a file

```sh
# Bash
npm run build &> output.txt
```

```js
// zx
import {createWriteStream} from 'node:fs';

const subprocess = $`npm run build`;
const fileStream = createWriteStream('output.txt');
subprocess.pipe(fileStream);
subprocess.stderr.pipe(fileStream);
await subprocess;
```

```js
// Execa
const output = {file: 'output.txt'};
await $({stdout: output, stderr: output})`npm run build`;
```

[More info.](output.md#file-output)

### Piping stdin from a file

```sh
# Bash
cat < input.txt
```

```js
// zx
const cat = $`cat`;
fs.createReadStream('input.txt').pipe(cat.stdin);
await cat;
```

```js
// Execa
await $({inputFile: 'input.txt'})`cat`;
```

[More info.](input.md#file-input)

### Web streams

```js
// zx does not support web streams
```

```js
// Execa
const response = await fetch('https://example.com');
await $({stdin: response.body})`npm run build`;
```

[More info.](streams.md#web-streams)

### Convert to Duplex stream

```js
// zx does not support converting subprocesses to streams
```

```js
// Execa
import {pipeline} from 'node:stream/promises';
import {createReadStream, createWriteStream} from 'node:fs';

await pipeline(
	createReadStream('./input.txt'),
	$`node ./transform.js`.duplex(),
	createWriteStream('./output.txt'),
);
```

[More info.](streams.md#convert)

### Handle pipeline errors

```sh
# Bash
set -e
npm run crash | sort | head -n2
```

```js
// zx
try {
	await $`npm run crash`
		.pipe($`sort`)
		.pipe($`head -n2`);
// This is never reached.
// The process crashes instead.
} catch (error) {
	console.error(error);
}
```

```js
// Execa
try {
	await $`npm run build`
		.pipe`sort`
		.pipe`head -n2`;
} catch (error) {
	console.error(error);
}
```

[More info.](pipe.md#errors)

### Return all pipeline results

```sh
# Bash only allows returning each command's exit code
npm run crash | sort | head -n2
# 1 0 0
echo "${PIPESTATUS[@]}"
```

```js
// zx only returns the last command's result
```

```js
// Execa
const destinationResult = await execa`npm run build`
	.pipe`head -n 2`;
console.log(destinationResult.stdout); // First 2 lines of `npm run build`

const sourceResult = destinationResult.pipedFrom[0];
console.log(sourceResult.stdout); // Full output of `npm run build`
```

[More info.](pipe.md#result)

### Split output into lines

```sh
# Bash
npm run build | IFS='\n' read -ra lines
```

```js
// zx
const lines = await $`npm run build`.lines();
```

```js
// Execa
const lines = await $({lines: true})`npm run build`;
```

[More info.](lines.md#simple-splitting)

### Iterate over output lines

```sh
# Bash
while read
do
	if [[ "$REPLY" == *ERROR* ]]
	then
		echo "$REPLY"
	fi
done < <(npm run build)
```

```js
// zx does not allow easily iterating over output lines.
// Also, the iteration does not handle subprocess errors.
```

```js
// Execa
for await (const line of $`npm run build`) {
	if (line.includes('ERROR')) {
		console.log(line);
	}
}
```

[More info.](lines.md#progressive-splitting)

### Detailed errors

```sh
# Bash communicates errors only through the exit code and stderr
timeout 1 sleep 2
echo $?
```

```js
// zx
await $`sleep 2`.timeout('1ms');
// Error:
//   at file:///home/me/Desktop/example.js:6:12
//   exit code: null
//   signal: SIGTERM
```

```js
// Execa
await $({timeout: 1})`sleep 2`;
// ExecaError: Command timed out after 1 milliseconds: sleep 2
//     at file:///home/me/Desktop/example.js:2:20
//     at ... {
//   shortMessage: 'Command timed out after 1 milliseconds: sleep 2\nTimed out',
//   originalMessage: '',
//   command: 'sleep 2',
//   escapedCommand: 'sleep 2',
//   cwd: '/path/to/cwd',
//   durationMs: 19.95693,
//   failed: true,
//   timedOut: true,
//   isCanceled: false,
//   isTerminated: true,
//   isMaxBuffer: false,
//   signal: 'SIGTERM',
//   signalDescription: 'Termination',
//   stdout: '',
//   stderr: '',
//   stdio: [undefined, '', ''],
//   pipedFrom: []
// }
```

[More info.](errors.md)

### Exit codes

```sh
# Bash
npm run build
echo $?
```

```js
// zx
const {exitCode} = await $`npm run build`.nothrow();
```

```js
// Execa
const {exitCode} = await $({reject: false})`npm run build`;
```

[More info.](errors.md#exit-code)

### Timeouts

```sh
# Bash
timeout 5 npm run build
```

```js
// zx
await $`npm run build`.timeout('5s');
```

```js
// Execa
await $({timeout: 5000})`npm run build`;
```

[More info.](termination.md#timeout)

### Current filename

```sh
# Bash
echo "$(basename "$0")"
```

```js
// zx
await $`echo ${__filename}`;
```

```js
// Execa
await $`echo ${import.meta.filename}`;
```

### Current directory

```sh
# Bash
cd project
```

```js
// zx
const $$ = $({cwd: 'project'});

// Or:
cd('project');
```

```js
// Execa
const $$ = $({cwd: 'project'});
```

[More info.](environment.md#current-directory)

### Background subprocess

```sh
# Bash
npm run build &
```

```js
// zx
await $({detached: true})`npm run build`;
```

```js
// Execa
await $({detached: true})`npm run build`;
```

[More info.](environment.md#background-subprocess)

### IPC

```sh
# Bash does not allow simple IPC
```

```js
// zx does not allow simple IPC
```

```js
// Execa
const subprocess = $({node: true})`script.js`;

for await (const message of subprocess.getEachMessage()) {
	if (message === 'ping') {
		await subprocess.sendMessage('pong');
	}
});
```

[More info.](ipc.md)

### Transforms

```sh
# Bash does not allow transforms
```

```js
// zx does not allow transforms
```

```js
// Execa
const transform = function * (line) {
	if (!line.includes('secret')) {
		yield line;
	}
};

await $({stdout: [transform, 'inherit']})`echo ${'This is a secret.'}`;
```

[More info.](transform.md)

### Signal termination

```sh
# Bash
kill $PID
```

```js
// zx
subprocess.kill();
```

```js
// Execa
subprocess.kill();

// Or with an error message and stack trace:
subprocess.kill(error);
```

[More info.](termination.md#signal-termination)

### Default signal

```sh
# Bash does not allow changing the default termination signal
```

```js
// zx only allows changing the signal used for timeouts
const $$ = $({timeoutSignal: 'SIGINT'});
```

```js
// Execa
const $ = $_({killSignal: 'SIGINT'});
```

[More info.](termination.md#default-signal)

### Cancelation

```sh
# Bash
kill $PID
```

```js
// zx
const controller = new AbortController();
await $({signal: controller.signal})`node long-script.js`;
```

```js
// Execa
const controller = new AbortController();
await $({cancelSignal: controller.signal})`node long-script.js`;
```

[More info.](termination.md#canceling)

### Graceful termination

```sh
# Bash
trap cleanup SIGTERM
```

```js
// zx
// This does not work on Windows
process.on('SIGTERM', () => {
	// ...
});
```

```js
// Execa - main.js
const controller = new AbortController();
await $({
	cancelSignal: controller.signal,
	gracefulCancel: true,
})`node build.js`;
```

```js
// Execa - build.js
import {getCancelSignal} from 'execa';

const cancelSignal = await getCancelSignal();
await fetch('https://example.com', {signal: cancelSignal});
```

### Interleaved output

```sh
# Bash prints stdout and stderr interleaved
```

```js
// zx
const all = String(await $`node example.js`);
```

```js
// Execa
const {all} = await $({all: true})`node example.js`;
```

[More info.](output.md#interleaved-output)

### PID

```sh
# Bash
npm run build &
echo $!
```

```js
// zx does not return `subprocess.pid`
```

```js
// Execa
const {pid} = $`npm run build`;
```

[More info.](termination.md#inter-process-termination)

### CLI arguments

```js
// zx
const {myCliFlag} = argv;
```

```js
// Execa
import {parseArgs} from 'node:util';

const {myCliFlag} = parseArgs({strict: false}).values;
```

[More info.](https://nodejs.org/api/util.html#utilparseargsconfig)

### CLI prompts

```sh
# Bash
read -p "Question? " answer
```

```js
// zx
const answer = await question('Question? ');
```

```js
// Execa
import input from '@inquirer/input';

const answer = await input({message: 'Question?'});
```

[More info.](https://github.com/SBoudrias/Inquirer.js)

### CLI spinner

```sh
# Bash does not provide with a builtin spinner
```

```js
// zx
await spinner(() => $`node script.js`);
```

```js
// Execa
import {oraPromise} from 'ora';

await oraPromise($`node script.js`);
```

[More info.](https://github.com/sindresorhus/ora)

### Sleep

```sh
# Bash
sleep 5
```

```js
// zx
await sleep(5000);
```

```js
// Execa
import {setTimeout} from 'node:timers/promises';

await setTimeout(5000);
```

[More info.](https://nodejs.org/api/timers.html#timerspromisessettimeoutdelay-value-options)

### Globbing

```sh
# Bash
ls packages/*
```

```js
// zx
const files = await glob(['packages/*']);
```

```js
// Execa
import {glob} from 'node:fs/promises';

const files = await Array.fromAsync(glob('packages/*'));
```

[More info.](https://nodejs.org/api/fs.html#fspromisesglobpattern-options)

### Temporary file

```js
// zx
const filePath = tmpfile();
```

```js
// Execa
import tempfile from 'tempfile';

const filePath = tempfile();
```

[More info.](https://github.com/sindresorhus/tempfile)

### HTTP requests

```sh
# Bash
curl https://github.com
```

```js
// zx
await fetch('https://github.com');
```

```js
// Execa
await fetch('https://github.com');
```

[More info.](https://nodejs.org/api/globals.html#fetch)

### Retry on error

```js
// zx
await retry(
	5,
	() => $`curl -sSL https://sindresorhus.com/unicorn`,
)
```

```js
// Execa
import pRetry from 'p-retry';

await pRetry(
	() => $`curl -sSL https://sindresorhus.com/unicorn`,
	{retries: 5},
);
```

[More info.](https://github.com/sindresorhus/p-retry)

<hr>

[**Next**: 🐭 Small packages](small.md)\
[**Previous**: 📎 Windows](windows.md)\
[**Top**: Table of contents](../readme.md#documentation)
````

## File: docs/binary.md
````markdown
<picture>
	<source media="(prefers-color-scheme: dark)" srcset="../media/logo_dark.svg">
	<img alt="execa logo" src="../media/logo.svg" width="400">
</picture>
<br>

# 🤖 Binary data

## Binary input

There are multiple ways to pass binary input using the [`stdin`](api.md#optionsstdin), [`input`](api.md#optionsinput) or [`inputFile`](api.md#optionsinputfile) options: `Uint8Array`s, [files](input.md#file-input), [streams](streams.md) or [other subprocesses](pipe.md).

This is required if the subprocess input includes [null bytes](https://en.wikipedia.org/wiki/Null_character).

```js
import {execa} from 'execa';

const binaryData = new Uint8Array([/* ... */]);
await execa({stdin: binaryData})`hexdump`;
```

## Binary output

By default, the subprocess [output](api.md#resultstdout) is a [UTF8](https://en.wikipedia.org/wiki/UTF-8) string. If it is binary, the [`encoding`](api.md#optionsencoding) option should be set to `'buffer'` instead. The output will be an [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).

```js
const {stdout} = await execa({encoding: 'buffer'})`zip -r - input.txt`;
console.log(stdout.byteLength);
```

## Encoding

When the output is binary, the [`encoding`](api.md#optionsencoding) option can also be set to [`'hex'`](https://en.wikipedia.org/wiki/Hexadecimal), [`'base64'`](https://en.wikipedia.org/wiki/Base64) or [`'base64url'`](https://en.wikipedia.org/wiki/Base64#URL_applications). The output will be a string then.

```js
const {stdout} = await execa({encoding: 'hex'})`zip -r - input.txt`;
console.log(stdout); // Hexadecimal string
```

## Iterable

By default, the subprocess [iterates](lines.md#progressive-splitting) over line strings. However, if the [`encoding`](api.md#optionsencoding) subprocess option is binary, or if the [`binary`](api.md#readableoptionsbinary) iterable option is `true`, it iterates over arbitrary chunks of [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) data instead.

```js
for await (const data of execa({encoding: 'buffer'})`zip -r - input.txt`) {
	/* ... */
}
```

## Transforms

The same applies to transforms. When the [`encoding`](api.md#optionsencoding) subprocess option is binary, or when the [`binary`](api.md#transformoptionsbinary) transform option is `true`, it iterates over arbitrary chunks of [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) data instead.

However, transforms can always `yield` either a `string` or an `Uint8Array`, regardless of whether the output is binary or not.

```js
const transform = function * (data) {
	/* ... */
}

await execa({stdout: {transform, binary: true}})`zip -r - input.txt`;
```

## Streams

[Streams produced](streams.md#converting-a-subprocess-to-a-stream) by [`subprocess.readable()`](api.md#subprocessreadablereadableoptions) and [`subprocess.duplex()`](api.md#subprocessduplexduplexoptions) are binary by default, which means they iterate over arbitrary [`Buffer`](https://nodejs.org/api/buffer.html#class-buffer) chunks. However, if the [`binary`](api.md#readableoptionsbinary) option is `false`, they iterate over line strings instead, and the stream is [in object mode](https://nodejs.org/api/stream.html#object-mode).

```js
const readable = execa`npm run build`.readable({binary: false});
readable.on('data', lineString => {
	/* ... */
});
```

<hr>

[**Next**: 🧙 Transforms](transform.md)\
[**Previous**: 📃 Text lines](lines.md)\
[**Top**: Table of contents](../readme.md#documentation)
````

## File: docs/debugging.md
````markdown
<picture>
	<source media="(prefers-color-scheme: dark)" srcset="../media/logo_dark.svg">
	<img alt="execa logo" src="../media/logo.svg" width="400">
</picture>
<br>

# 🐛 Debugging

## Command

[`error.command`](api.md#resultcommand) contains the file and [arguments](input.md#command-arguments) that were run. It is intended for logging or debugging.

[`error.escapedCommand`](api.md#resultescapedcommand) is the same, except control characters are escaped. This makes it safe to either print or copy and paste in a terminal, for debugging purposes.

Since the escaping is fairly basic, neither `error.command` nor `error.escapedCommand` should be executed directly, including using [`execa()`](api.md#execafile-arguments-options) or [`parseCommandString()`](api.md#parsecommandstringcommand).

```js
import {execa} from 'execa';

try {
	await execa`npm run build\ntask`;
} catch (error) {
	console.error(error.command); // "npm run build\ntask"
	console.error(error.escapedCommand); // "npm run 'build\\ntask'"
	throw error;
}
```

## Duration

```js
try {
	const result = await execa`npm run build`;
	console.log('Command duration:', result.durationMs); // 150
} catch (error) {
	console.error('Command duration:', error.durationMs); // 150
	throw error;
}
```

## Verbose mode

### Short mode

When the [`verbose`](api.md#optionsverbose) option is `'short'`, the [command](#command), [duration](#duration) and [error messages](errors.md#error-message) are printed on [`stderr`](https://en.wikipedia.org/wiki/Standard_streams#Standard_error_(stderr)).

```js
// build.js
await execa({verbose: 'short'})`npm run build`;
```

```
$ node build.js
[20:36:11.043] [0] $ npm run build
[20:36:11.885] [0] ✔ (done in 842ms)
```

### Full mode

When the [`verbose`](api.md#optionsverbose) option is `'full'`, the subprocess' [`stdout`, `stderr`](output.md) and [IPC messages](ipc.md) are also logged. They are all printed on [`stderr`](https://en.wikipedia.org/wiki/Standard_streams#Standard_error_(stderr)).

The output is not logged if either:
- The [`stdout`](api.md#optionsstdout)/[`stderr`](api.md#optionsstderr) option is [`'ignore'`](output.md#ignore-output) or [`'inherit'`](output.md#terminal-output).
- The `stdout`/`stderr` is redirected to [a stream](streams.md#output), [a file](output.md#file-output), [a file descriptor](output.md#terminal-output), or [another subprocess](pipe.md).
- The [`encoding`](api.md#optionsencoding) option is [binary](binary.md#binary-output).

```js
// build.js
await execa({verbose: 'full'})`npm run build`;
await execa({verbose: 'full'})`npm run test`;
```

```
$ node build.js
[00:57:44.581] [0] $ npm run build
[00:57:44.653] [0]   Building application...
[00:57:44.653] [0]   Done building.
[00:57:44.658] [0] ✔ (done in 78ms)
[00:57:44.658] [1] $ npm run test
[00:57:44.740] [1]   Running tests...
[00:57:44.740] [1]   Error: the entrypoint is invalid.
[00:57:44.747] [1] ✘ Command failed with exit code 1: npm run test
[00:57:44.747] [1] ✘ (done in 89ms)
```

### Global mode

When the `NODE_DEBUG=execa` [environment variable](https://en.wikipedia.org/wiki/Environment_variable) is set, the [`verbose`](api.md#optionsverbose) option defaults to `'full'` for all commands.

```js
// build.js

// This is logged by default
await execa`npm run build`;
// This is not logged
await execa({verbose: 'none'})`npm run test`;
```

```
$ NODE_DEBUG=execa node build.js
```

### Colors

When printed to a terminal, the verbose mode uses colors.

<img alt="execa verbose output" src="../media/verbose.png" width="603">

## Custom logging

### Verbose function

The [`verbose`](api.md#optionsverbose) option can be a function to customize logging.

It is called once per log line. The first argument is the default log line string. The second argument is the same information but as an object instead (documented [here](api.md#verbose-object)).

If a string is returned, it is printed on `stderr`. If `undefined` is returned, nothing is printed.

### Filter logs

```js
import {execa as execa_} from 'execa';

// Only print log lines showing the subprocess duration
const execa = execa_({
	verbose(verboseLine, {type}) {
		return type === 'duration' ? verboseLine : undefined;
	},
});
```

### Transform logs

```js
import {execa as execa_} from 'execa';

// Prepend current process' PID
const execa = execa_({
	verbose(verboseLine) {
		return `[${process.pid}] ${verboseLine}`;
	},
});
```

### Custom log format

```js
import {execa as execa_} from 'execa';

// Use a different format for the timestamp
const execa = execa_({
	verbose(verboseLine, {timestamp}) {
		return verboseLine.replace(timestampRegExp, timestamp.toISOString());
	},
});

// Timestamp at the start of each log line
const timestampRegExp = /\d{2}:\d{2}:\d{2}\.\d{3}/;
```

### JSON logging

```js
import {execa as execa_} from 'execa';

const execa = execa_({
	verbose(verboseLine, verboseObject) {
		return JSON.stringify(verboseObject);
	},
});
```

### Advanced logging

```js
import {execa as execa_} from 'execa';
import {createLogger, transports} from 'winston';

// Log to a file using Winston
const transport = new transports.File({filename: 'logs.txt'});
const logger = createLogger({transports: [transport]});
const LOG_LEVELS = {
	command: 'info',
	output: 'verbose',
	ipc: 'verbose',
	error: 'error',
	duration: 'info',
};

const execa = execa_({
	verbose(verboseLine, {message, ...verboseObject}) {
		const level = LOG_LEVELS[verboseObject.type];
		logger[level](message, verboseObject);
	},
});
```

<hr>

[**Next**: 📎 Windows](windows.md)\
[**Previous**: 📞 Inter-process communication](ipc.md)\
[**Top**: Table of contents](../readme.md#documentation)
````

## File: docs/environment.md
````markdown
<picture>
	<source media="(prefers-color-scheme: dark)" srcset="../media/logo_dark.svg">
	<img alt="execa logo" src="../media/logo.svg" width="400">
</picture>
<br>

# 🌐 Environment

## Current directory

The [current directory](https://en.wikipedia.org/wiki/Working_directory) when running the command can be set with the [`cwd`](api.md#optionscwd) option.

```js
import {execa} from 'execa';

await execa({cwd: '/path/to/cwd'})`npm run build`;
```

And be retrieved with the [`result.cwd`](api.md#resultcwd) property.

```js
const {cwd} = await execa`npm run build`;
```

## Local binaries

Package managers like `npm` install local binaries in `./node_modules/.bin`.

```sh
$ npm install -D eslint
```

```js
await execa('./node_modules/.bin/eslint');
```

The [`preferLocal`](api.md#optionspreferlocal) option can be used to execute those local binaries.

```js
await execa({preferLocal: true})`eslint`;
```

Those are searched in the current or any parent directory. The [`localDir`](api.md#optionslocaldir) option can select a different directory.

```js
await execa({preferLocal: true, localDir: '/path/to/dir'})`eslint`;
```

## Current package's binary

Execa can be combined with [`get-bin-path`](https://github.com/ehmicky/get-bin-path) to test the current package's binary. As opposed to hard-coding the path to the binary, this validates that the `package.json` [`bin`](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#bin) field is correctly set up.

```js
import {execa} from 'execa';
import {getBinPath} from 'get-bin-path';

const binPath = await getBinPath();
await execa(binPath);
```

## Background subprocess

When the [`detached`](api.md#optionsdetached) option is `true`, the subprocess [runs independently](https://en.wikipedia.org/wiki/Background_process) from the current process.

Specific behavior depends on the platform. [More info.](https://nodejs.org/api/child_process.html#child_process_options_detached)

```js
await execa({detached: true})`npm run start`;
```

<hr>

[**Next**: ❌ Errors](errors.md)\
[**Previous**: 🐢 Node.js files](node.md)\
[**Top**: Table of contents](../readme.md#documentation)
````

## File: docs/errors.md
````markdown
<picture>
	<source media="(prefers-color-scheme: dark)" srcset="../media/logo_dark.svg">
	<img alt="execa logo" src="../media/logo.svg" width="400">
</picture>
<br>

# ❌ Errors

## Subprocess failure

When the subprocess fails, the promise returned by [`execa()`](api.md#execafile-arguments-options) is rejected with an [`ExecaError`](api.md#execaerror) instance. The `error` has the same shape as successful [results](api.md#result), with a few additional [error-specific fields](api.md#execaerror). [`error.failed`](api.md#resultfailed) is always `true`.

```js
import {execa, ExecaError} from 'execa';

try {
	const result = await execa`npm run build`;
	console.log(result.failed); // false
} catch (error) {
	if (error instanceof ExecaError) {
		console.error(error.failed); // true
	}
}
```

## Preventing exceptions

When the [`reject`](api.md#optionsreject) option is `false`, the `error` is returned instead.

```js
const resultOrError = await execa({reject: false})`npm run build`;
if (resultOrError.failed) {
	console.error(resultOrError);
}
```

## Exit code

The subprocess fails when its [exit code](https://en.wikipedia.org/wiki/Exit_status) is not `0`. The exit code is available as [`error.exitCode`](api.md#errorexitcode). It is `undefined` when the subprocess fails to spawn or when it was [terminated by a signal](termination.md#signal-termination).

```js
try {
	await execa`npm run build`;
} catch (error) {
	// Either non-0 integer or undefined
	console.error(error.exitCode);
}
```

## Failure reason

The subprocess can fail for other reasons. Some of them can be detected using a specific boolean property:
- [`error.timedOut`](api.md#errortimedout): [`timeout`](termination.md#timeout) option.
- [`error.isCanceled`](api.md#erroriscanceled): [`cancelSignal`](termination.md#canceling) option.
- [`error.isGracefullyCanceled`](api.md#errorisgracefullycanceled): `cancelSignal` option, if the [`gracefulCancel`](termination.md#graceful-termination) option is `true`.
- [`error.isMaxBuffer`](api.md#errorismaxbuffer): [`maxBuffer`](output.md#big-output) option.
- [`error.isTerminated`](api.md#erroristerminated): [signal termination](termination.md#signal-termination). This includes the [`timeout`](termination.md#timeout) and [`forceKillAfterDelay`](termination.md#forceful-termination) options since those terminate the subprocess with a [signal](termination.md#default-signal). This also includes the [`cancelSignal`](termination.md#canceling) option unless the [`gracefulCancel`](termination.md#graceful-termination) option is `true`. This does not include the [`maxBuffer`](output.md#big-output) option.

Otherwise, the subprocess failed because either:
- An exception was thrown in a [stream](streams.md) or [transform](transform.md).
- The command's executable file was not found.
- An invalid [option](api.md#options-1) was passed.
- There was not enough memory or too many subprocesses.

```js
try {
	await execa`npm run build`;
} catch (error) {
	if (error.timedOut) {
		handleTimeout(error);
	}

	throw error;
}
```

## Error message

For better [debugging](debugging.md), [`error.message`](api.md#errormessage) includes both:
- The command and the [reason it failed](#failure-reason).
- Its [`stdout`, `stderr`](output.md#stdout-and-stderr), [other file descriptors'](output.md#additional-file-descriptors) output and [IPC messages](ipc.md), separated with newlines and not [interleaved](output.md#interleaved-output).

[`error.shortMessage`](api.md#errorshortmessage) is the same but without `stdout`, `stderr` nor IPC messages.

[`error.originalMessage`](api.md#errororiginalmessage) is the same but also without the command. This exists only in specific instances, such as when calling [`subprocess.kill(error)`](termination.md#error-message-and-stack-trace), using the [`cancelSignal`](termination.md#canceling) option, passing an invalid command or [option](api.md#options-1), or throwing an exception in a [stream](streams.md) or [transform](transform.md).

```js
try {
	await execa`npm run build`;
} catch (error) {
	console.error(error.originalMessage);
	// The task "build" does not exist.

	console.error(error.shortMessage);
	// Command failed with exit code 3: npm run build
	// The task "build" does not exist.

	console.error(error.message);
	// Command failed with exit code 3: npm run build
	// The task "build" does not exist.
	// [stderr contents...]
	// [stdout contents...]
}
```

<hr>

[**Next**: 🏁 Termination](termination.md)\
[**Previous**: 🌐 Environment](environment.md)\
[**Top**: Table of contents](../readme.md#documentation)
````

## File: docs/escaping.md
````markdown
<picture>
	<source media="(prefers-color-scheme: dark)" srcset="../media/logo_dark.svg">
	<img alt="execa logo" src="../media/logo.svg" width="400">
</picture>
<br>

# 💬 Escaping/quoting

## Array syntax

When using the [array syntax](execution.md#array-syntax), arguments are automatically escaped. They can contain any character, including spaces, tabs and newlines. However, they cannot contain [null bytes](https://en.wikipedia.org/wiki/Null_character): [binary inputs](binary.md#binary-input) should be used instead.

```js
import {execa} from 'execa';

await execa('npm', ['run', 'task with space']);
```

## Template string syntax

The same applies when using the [template string syntax](execution.md#template-string-syntax). However, spaces, tabs and newlines must use `${}`.

```js
await execa`npm run ${'task with space'}`;
```

## User-defined input

The above syntaxes allow the file and its arguments to be user-defined by passing a variable.

```js
import {execa} from 'execa';

const file = 'npm';
const commandArguments = ['run', 'task with space'];
await execa`${file} ${commandArguments}`;

await execa(file, commandArguments);
```

If the file and/or multiple arguments are supplied as a single string, [`parseCommandString()`](api.md#parsecommandstringcommand) can split it into an array.

```js
import {execa, parseCommandString} from 'execa';

const commandString = 'npm run task';
const commandArray = parseCommandString(commandString);
await execa`${commandArray}`;

const [file, ...commandArguments] = commandArray;
await execa(file, commandArguments);
```

Spaces are used as delimiters. They can be escaped with a backslash.

```js
await execa`${parseCommandString('npm run task\\ with\\ space')}`;
```

## Shells

[Shells](shell.md) ([Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)), [cmd.exe](https://en.wikipedia.org/wiki/Cmd.exe), etc.) are not used unless the [`shell`](api.md#optionsshell) option is set. This means shell-specific syntax has no special meaning and does not need to be escaped:
- Quotes: `"value"`, `'value'`, `$'value'`
- Characters: `$variable`, `&&`, `||`, `;`, `|`
- Globbing: `*`, `**`
- Expressions: `$?`, `~`

```js
// This prints `$TASK_NAME`, not `build`
await execa({env: {TASK_NAME: 'build'}})`echo $TASK_NAME`;
```

If you do set the `shell` option, arguments will not be automatically escaped anymore. Instead, they will be concatenated as a single string using spaces as delimiters.

```js
await execa({shell: true})`npm ${'run'} ${'task with space'}`;
// Is the same as:
await execa({shell: true})`npm run task with space`;
```

Therefore, you need to manually quote the arguments, using the shell-specific syntax.

```js
await execa({shell: true})`npm ${'run'} ${'"task with space"'}`;
// Is the same as:
await execa({shell: true})`npm run "task with space"`;
```

Sometimes a shell command is passed as argument to an executable that runs it indirectly. In that case, that shell command must quote its own arguments.

```js
const command = 'npm run "task with space"';
await execa`ssh host ${command}`;
```

<hr>

[**Next**: 💻 Shell](shell.md)\
[**Previous**: ️▶️ Basic execution](execution.md)\
[**Top**: Table of contents](../readme.md#documentation)
````

## File: docs/execution.md
````markdown
<picture>
	<source media="(prefers-color-scheme: dark)" srcset="../media/logo_dark.svg">
	<img alt="execa logo" src="../media/logo.svg" width="400">
</picture>
<br>

# ▶️ Basic execution

## Array syntax

```js
import {execa} from 'execa';

await execa('npm', ['run', 'build']);
```

## Template string syntax

All [available methods](api.md#methods) can use either the [array syntax](#array-syntax) or the template string syntax, which are equivalent.

```js
await execa`npm run build`;
```

### String argument

```js
await execa`npm run ${'task with space'}`;
```

### Number argument

```js
await execa`npm run build --concurrency ${2}`;
```

### Subcommands

```js
const result = await execa`get-concurrency`;

// Uses `result.stdout`
await execa`npm run build --concurrency ${result}`;
```

### Concatenation

```js
const tmpDirectory = '/tmp';
await execa`mkdir ${tmpDirectory}/filename`;
```

### Multiple arguments

```js
const result = await execa`get-concurrency`;

await execa`npm ${['run', 'build', '--concurrency', result]}`;
```

### No arguments

```js
await execa`npm run build ${[]}`;
// Same as:
await execa('npm', ['run', 'build']);
```

### Empty string argument

```js
await execa`npm run build ${''}`;
// Same as:
await execa('npm', ['run', 'build', '']);
```

### Conditional argument

```js
const commandArguments = failFast ? ['--fail-fast'] : [];
await execa`npm run build ${commandArguments}`;
```

### Multiple lines

```js
await execa`npm run build
	--concurrency 2
	--fail-fast`;
```

### Shells

By default, any shell-specific syntax has no special meaning and does not need to be escaped. This prevents [shell injections](https://en.wikipedia.org/wiki/Code_injection#Shell_injection). [More info.](escaping.md#shells)

```js
// This prints `$TASK_NAME`, not `build`
await execa({env: {TASK_NAME: 'build'}})`echo $TASK_NAME`;
```

## Options

[Options](api.md#options-1) can be passed to influence the execution's behavior.

### Array syntax

```js
await execa('npm', ['run', 'build'], {timeout: 5000});
```

### Template string syntax

```js
await execa({timeout: 5000})`npm run build`;
```

### Global/shared options

```js
const timedExeca = execa({timeout: 5000});

await timedExeca('npm', ['run', 'build']);
await timedExeca`npm run test`;
```

## Return value

### Subprocess

The subprocess is returned as soon as it is spawned. It is a [`child_process` instance](https://nodejs.org/api/child_process.html#child_process_class_childprocess) with [additional methods and properties](api.md#subprocess).

```js
const subprocess = execa`npm run build`;
console.log(subprocess.pid);
```

### Result

The subprocess is also a `Promise` that resolves with the [`result`](api.md#result).

```js
const {stdout} = await execa`npm run build`;
```

### Synchronous execution

[`execaSync()`](api.md#execasyncfile-arguments-options) and [`$.sync()`](api.md#syncfile-arguments-options) return the [`result`](api.md#result) without needing to `await`. The [`subprocess`](#subprocess) is not returned: its methods and properties are not available.

```js
import {execaSync} from 'execa';

const {stdout} = execaSync`npm run build`;
```

Synchronous execution is generally discouraged as it holds the CPU and prevents parallelization. Also, the following features cannot be used:
- Streams: [`subprocess.stdin`](api.md#subprocessstdin), [`subprocess.stdout`](api.md#subprocessstdout), [`subprocess.stderr`](api.md#subprocessstderr), [`subprocess.readable()`](api.md#subprocessreadablereadableoptions), [`subprocess.writable()`](api.md#subprocesswritablewritableoptions), [`subprocess.duplex()`](api.md#subprocessduplexduplexoptions).
- The [`stdin`](api.md#optionsstdin), [`stdout`](api.md#optionsstdout), [`stderr`](api.md#optionsstderr) and [`stdio`](api.md#optionsstdio) options cannot be [`'overlapped'`](api.md#optionsstdout), an [async iterable](lines.md#progressive-splitting), an async [transform](transform.md), a [`Duplex`](transform.md#duplextransform-streams), nor a [web stream](streams.md#web-streams). Node.js streams can be passed but only if either they [have a file descriptor](streams.md#file-descriptors), or the [`input`](api.md#optionsinput) option is used.
- Signal termination: [`subprocess.kill()`](api.md#subprocesskillerror), [`subprocess.pid`](api.md#subprocesspid), [`cleanup`](api.md#optionscleanup) option, [`cancelSignal`](api.md#optionscancelsignal) option, [`forceKillAfterDelay`](api.md#optionsforcekillafterdelay) option.
- Piping multiple subprocesses: [`subprocess.pipe()`](api.md#subprocesspipefile-arguments-options).
- [`subprocess.iterable()`](lines.md#progressive-splitting).
- [IPC](ipc.md): [`sendMessage()`](api.md#sendmessagemessage-sendmessageoptions), [`getOneMessage()`](api.md#getonemessagegetonemessageoptions), [`getEachMessage()`](api.md#geteachmessagegeteachmessageoptions), [`result.ipcOutput`](output.md#any-output-type), [`ipc`](api.md#optionsipc) option, [`serialization`](api.md#optionsserialization) option, [`ipcInput`](input.md#any-input-type) option.
- [`result.all`](api.md#resultall) is not interleaved.
- [`detached`](api.md#optionsdetached) option.
- The [`maxBuffer`](api.md#optionsmaxbuffer) option is always measured in bytes, not in characters, [lines](api.md#optionslines) nor [objects](transform.md#object-mode). Also, it ignores transforms and the [`encoding`](api.md#optionsencoding) option.

<hr>

[**Next**: 💬 Escaping/quoting](escaping.md)\
[**Top**: Table of contents](../readme.md#documentation)
````

## File: docs/input.md
````markdown
<picture>
	<source media="(prefers-color-scheme: dark)" srcset="../media/logo_dark.svg">
	<img alt="execa logo" src="../media/logo.svg" width="400">
</picture>
<br>

# 🎹 Input

## Command arguments

The simplest way to pass input to a subprocess is to use command arguments.

```js
import {execa} from 'execa';

const commandArgument = 'build';
await execa`node child.js ${commandArgument}`;
```

If the subprocess is a Node.js file, those are available using [`process.argv`](https://nodejs.org/api/process.html#processargv).

```js
// child.js
import process from 'node:process';

const commandArgument = process.argv[2];
```

## Environment variables

Unlike [command arguments](#command-arguments), [environment variables](https://en.wikipedia.org/wiki/Environment_variable) have names. They are commonly used to configure applications.

If the subprocess spawns its own subprocesses, they inherit environment variables. To isolate subprocesses from each other, either command arguments or [`stdin`](#string-input) should be preferred instead.

```js
// Keep the current process' environment variables, and set `NO_COLOR`
await execa({env: {NO_COLOR: 'true'}})`node child.js`;
// Discard the current process' environment variables, only pass `NO_COLOR`
await execa({env: {NO_COLOR: 'true'}, extendEnv: false})`node child.js`;
```

If the subprocess is a Node.js file, environment variables are available using [`process.env`](https://nodejs.org/api/process.html#processenv).

```js
// child.js
import process from 'node:process';

console.log(process.env.NO_COLOR);
```

## String input

Alternatively, input can be provided to [`stdin`](https://en.wikipedia.org/wiki/Standard_streams#Standard_input_(stdin)). Unlike [command arguments](#command-arguments) and [environment variables](#environment-variables) which have [size](https://unix.stackexchange.com/questions/120642/what-defines-the-maximum-size-for-a-command-single-argument) [limits](https://stackoverflow.com/questions/1078031/what-is-the-maximum-size-of-a-linux-environment-variable-value), `stdin` works when the input is big. Also, the input can be redirected from the [terminal](#terminal-input), a [file](#file-input), another [subprocess](pipe.md) or a [stream](streams.md#manual-streaming). Finally, this is required when the input might contain [null bytes](https://en.wikipedia.org/wiki/Null_character), for example when it might be [binary](binary.md#binary-input).

If the input is already available as a string, it can be passed directly to the [`input`](api.md#optionsinput) option.

```js
await execa({input: 'stdinInput'})`npm run scaffold`;
```

The [`stdin`](api.md#optionsstdin) option can also be used, although the string must be wrapped in two arrays for [syntax reasons](output.md#multiple-targets).

```js
await execa({stdin: [['stdinInput']]})`npm run scaffold`;
```

## Ignore input

```js
const subprocess = execa({stdin: 'ignore'})`npm run scaffold`;
console.log(subprocess.stdin); // undefined
await subprocess;
```

## File input

```js
await execa({inputFile: 'input.txt'})`npm run scaffold`;
// Or:
await execa({stdin: {file: 'input.txt'}})`npm run scaffold`;
// Or:
await execa({stdin: new URL('file:///path/to/input.txt')})`npm run scaffold`;
```

## Terminal input

The parent process' input can be re-used in the subprocess by passing `'inherit'`. This is especially useful to receive interactive input in command line applications.

```js
await execa({stdin: 'inherit'})`npm run scaffold`;
```

## Any input type

If the subprocess [uses Node.js](node.md), [almost any type](ipc.md#message-type) can be passed to the subprocess using the [`ipcInput`](ipc.md#send-an-initial-message) option. The subprocess retrieves that input using [`getOneMessage()`](api.md#getonemessagegetonemessageoptions).

```js
// main.js
import {execaNode} from 'execa';

const ipcInput = [
	{task: 'lint', ignore: /test\.js/},
	{task: 'copy', files: new Set(['main.js', 'index.js']),
}];
await execaNode({ipcInput})`build.js`;
```

```js
// build.js
import {getOneMessage} from 'execa';

const ipcInput = await getOneMessage();
```

## Additional file descriptors

The [`stdio`](api.md#optionsstdio) option can be used to pass some input to any [file descriptor](https://en.wikipedia.org/wiki/File_descriptor), as opposed to only [`stdin`](api.md#optionsstdin).

```js
// Pass input to the file descriptor number 3
await execa({
	stdio: ['pipe', 'pipe', 'pipe', new Uint8Array([/* ... */])],
})`npm run build`;
```

<hr>

[**Next**: 📢 Output](output.md)\
[**Previous**: 🏁 Termination](termination.md)\
[**Top**: Table of contents](../readme.md#documentation)
````

## File: docs/ipc.md
````markdown
<picture>
	<source media="(prefers-color-scheme: dark)" srcset="../media/logo_dark.svg">
	<img alt="execa logo" src="../media/logo.svg" width="400">
</picture>
<br>

# 📞 Inter-process communication

## Exchanging messages

When the [`ipc`](api.md#optionsipc) option is `true`, the current process and subprocess can exchange messages. This only works if the subprocess is a [Node.js file](node.md).

The `ipc` option defaults to `true` when using [`execaNode()`](node.md#run-nodejs-files) or the [`node`](node.md#run-nodejs-files) option.

The current process sends messages with [`subprocess.sendMessage(message)`](api.md#subprocesssendmessagemessage-sendmessageoptions) and receives them with [`subprocess.getOneMessage()`](api.md#subprocessgetonemessagegetonemessageoptions).

The subprocess uses [`sendMessage(message)`](api.md#sendmessagemessage-sendmessageoptions) and [`getOneMessage()`](api.md#getonemessagegetonemessageoptions). Those are the same methods, but imported directly from the `'execa'` module.

```js
// parent.js
import {execaNode} from 'execa';

const subprocess = execaNode`child.js`;
await subprocess.sendMessage('Hello from parent');
const message = await subprocess.getOneMessage();
console.log(message); // 'Hello from child'
await subprocess;
```

```js
// child.js
import {getOneMessage, sendMessage} from 'execa';

const message = await getOneMessage(); // 'Hello from parent'
const newMessage = message.replace('parent', 'child'); // 'Hello from child'
await sendMessage(newMessage);
```

## Listening to messages

The methods described above read a single message. On the other hand, [`subprocess.getEachMessage()`](api.md#subprocessgeteachmessagegeteachmessageoptions) and [`getEachMessage()`](api.md#geteachmessagegeteachmessageoptions) return an [async iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols). This should be preferred when listening to multiple messages.

[`subprocess.getEachMessage()`](api.md#subprocessgeteachmessagegeteachmessageoptions) waits for the subprocess to end (even when using [`break`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) or [`return`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)). It throws if the subprocess [fails](api.md#result). This means you do not need to `await` the subprocess' [promise](execution.md#result).

```js
// parent.js
import {execaNode} from 'execa';

const subprocess = execaNode`child.js`;
await subprocess.sendMessage(0);

// This loop ends when the subprocess exits.
// It throws if the subprocess fails.
for await (const message of subprocess.getEachMessage()) {
	console.log(message); // 1, 3, 5, 7, 9
	await subprocess.sendMessage(message + 1);
}
```

```js
// child.js
import {sendMessage, getEachMessage} from 'execa';

// The subprocess exits when hitting `break`
for await (const message of getEachMessage()) {
	if (message === 10) {
		break;
	}

	console.log(message); // 0, 2, 4, 6, 8
	await sendMessage(message + 1);
}
```

## Filter messages

```js
import {getOneMessage} from 'execa';

const startMessage = await getOneMessage({
	filter: message => message.type === 'start',
});
```

```js
import {getEachMessage} from 'execa';

for await (const message of getEachMessage()) {
	if (message.type === 'start') {
		// ...
	}
}
```

## Ensure messages are received

When a message is sent by one process, the other process must receive it using [`getOneMessage()`](#exchanging-messages), [`getEachMessage()`](#listening-to-messages), or automatically with [`result.ipcOutput`](api.md#resultipcoutput). If not, that message is silently discarded.

If the [`strict: true`](api.md#sendmessageoptionsstrict) option is passed to [`subprocess.sendMessage(message)`](api.md#subprocesssendmessagemessage-sendmessageoptions) or [`sendMessage(message)`](api.md#sendmessagemessage-sendmessageoptions), an error is thrown instead. This helps identifying subtle race conditions like the following example.

```js
// main.js
import {execaNode} from 'execa';

const subprocess = execaNode`build.js`;
// This `build` message is received
await subprocess.sendMessage('build', {strict: true});
// This `lint` message is not received, so it throws
await subprocess.sendMessage('lint', {strict: true});
await subprocess;
```

```js
// build.js
import {getOneMessage} from 'execa';

// Receives the 'build' message
const task = await getOneMessage();
// The `lint` message is sent while `runTask()` is ongoing
// Therefore the `lint` message is discarded
await runTask(task);

// Does not receive the `lint` message
// Without `strict`, this would wait forever
const secondTask = await getOneMessage();
await runTask(secondTask);
```

## Retrieve all messages

The [`result.ipcOutput`](api.md#resultipcoutput) array contains all the messages sent by the subprocess. In many situations, this is simpler than using [`subprocess.getOneMessage()`](api.md#subprocessgetonemessagegetonemessageoptions) and [`subprocess.getEachMessage()`](api.md#subprocessgeteachmessagegeteachmessageoptions).

```js
// main.js
import {execaNode} from 'execa';

const {ipcOutput} = await execaNode`build.js`;
console.log(ipcOutput[0]); // {kind: 'start', timestamp: date}
console.log(ipcOutput[1]); // {kind: 'stop', timestamp: date}
```

```js
// build.js
import {sendMessage} from 'execa';

await sendMessage({kind: 'start', timestamp: new Date()});
await runBuild();
await sendMessage({kind: 'stop', timestamp: new Date()});
```

## Send an initial message

The [`ipcInput`](api.md#optionsipcinput) option sends a message to the [Node.js subprocess](node.md) when it starts.

```js
// main.js
import {execaNode} from 'execa';

const ipcInput = [
	{task: 'lint', ignore: /test\.js/},
	{task: 'copy', files: new Set(['main.js', 'index.js']),
}];
await execaNode({ipcInput})`build.js`;
```

```js
// build.js
import {getOneMessage} from 'execa';

const ipcInput = await getOneMessage();
```

## Message type

By default, messages are serialized using [`structuredClone()`](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm). This supports most types including objects, arrays, `Error`, `Date`, `RegExp`, `Map`, `Set`, `bigint`, `Uint8Array`, and circular references. This throws when passing functions, symbols or promises (including inside an object or array).

To limit messages to JSON instead, the [`serialization`](api.md#optionsserialization) option can be set to `'json'`.

```js
import {execaNode} from 'execa';

await execaNode({serialization: 'json'})`child.js`;
```

## Messages order

The messages are always received in the same order they were sent. Even when sent all at once.

```js
import {sendMessage} from 'execa';

await Promise.all([
	sendMessage('first'),
	sendMessage('second'),
	sendMessage('third'),
]);
```

## Keeping the subprocess alive

By default, the subprocess is kept alive as long as [`getOneMessage()`](api.md#getonemessagegetonemessageoptions) or [`getEachMessage()`](api.md#geteachmessagegeteachmessageoptions) is waiting. This is recommended if you're sure the current process will send a message, as this prevents the subprocess from exiting too early.

However, if you don't know whether a message will be sent, this can leave the subprocess hanging forever. In that case, the [`reference: false`](api.md#geteachmessageoptionsreference) option can be set.

```js
import {getEachMessage} from 'execa';

// {type: 'gracefulExit'} is sometimes received, but not always
for await (const message of getEachMessage({reference: false})) {
	if (message.type === 'gracefulExit') {
		gracefulExit();
	}
}
```

## Debugging

When the [`verbose`](api.md#optionsverbose) option is `'full'`, the IPC messages sent by the subprocess to the current process are [printed on the console](debugging.md#full-mode).

Also, when the subprocess [failed](errors.md#subprocess-failure), [`error.ipcOutput`](api.md) contains all the messages sent by the subprocess. Those are also shown at the end of the [error message](errors.md#error-message).

<hr>

[**Next**: 🐛 Debugging](debugging.md)\
[**Previous**: ⏳️ Streams](streams.md)\
[**Top**: Table of contents](../readme.md#documentation)
````

## File: docs/lines.md
````markdown
<picture>
	<source media="(prefers-color-scheme: dark)" srcset="../media/logo_dark.svg">
	<img alt="execa logo" src="../media/logo.svg" width="400">
</picture>
<br>

# 📃 Text lines

## Simple splitting

If the [`lines`](api.md#optionslines) option is `true`, the output is split into lines, as an array of strings.

```js
import {execa} from 'execa';

const lines = await execa({lines: true})`npm run build`;
console.log(lines.join('\n'));
```

## Iteration

### Progressive splitting

The subprocess' return value is an [async iterable](api.md#subprocesssymbolasynciterator). It iterates over the output's lines while the subprocess is still running.

```js
for await (const line of execa`npm run build`) {
	if (line.includes('ERROR')) {
		console.log(line);
	}
}
```

Alternatively, [`subprocess.iterable()`](api.md#subprocessiterablereadableoptions) can be called to pass [iterable options](api.md#readableoptions).

The iteration waits for the subprocess to end (even when using [`break`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) or [`return`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)). It throws if the subprocess [fails](api.md#result). This means you do not need to `await` the subprocess' [promise](execution.md#result).

```js
for await (const line of execa`npm run build`.iterable())) {
	/* ... */
}
```

### Stdout/stderr

By default, the subprocess' [`stdout`](https://en.wikipedia.org/wiki/Standard_streams#Standard_output_(stdout)) is used. The [`from`](api.md#readableoptionsfrom) iterable option can select a different file descriptor, such as [`'stderr'`](https://en.wikipedia.org/wiki/Standard_streams#Standard_error_(stderr)), [`'all'`](output.md#interleaved-output) or [`'fd3'`](output.md#additional-file-descriptors).

```js
for await (const stderrLine of execa`npm run build`.iterable({from: 'stderr'})) {
	/* ... */
}
```

## Newlines

### Final newline

The final newline is stripped from the output's last line, unless the [`stripFinalNewline`](api.md#optionsstripfinalnewline) option is `false`.

```js
const {stdout} = await execa({stripFinalNewline: false})`npm run build`;
console.log(stdout.endsWith('\n')); // true
```

### Array of lines

When using the [`lines`](#simple-splitting) option, newlines are stripped from each line, unless the [`stripFinalNewline`](api.md#optionsstripfinalnewline) option is `false`.

```js
// Each line now ends with '\n'.
// The last `line` might or might not end with '\n', depending on the output.
const lines = await execa({lines: true, stripFinalNewline: false})`npm run build`;
console.log(lines.join(''));
```

### Iterable

When [iterating](#progressive-splitting) over lines, newlines are stripped from each line, unless the [`preserveNewlines`](api.md#readableoptionspreservenewlines) iterable option is `true`.

This option can also be used with [streams produced](streams.md#converting-a-subprocess-to-a-stream) by [`subprocess.readable()`](api.md#subprocessreadablereadableoptions) or [`subprocess.duplex()`](api.md#subprocessduplexduplexoptions), providing the [`binary`](binary.md#streams) option is `false`.

```js
// `line` now ends with '\n'.
// The last `line` might or might not end with '\n', depending on the output.
for await (const line of execa`npm run build`.iterable({preserveNewlines: true})) {
	/* ... */
}
```

### Transforms

When using [transforms](transform.md), newlines are stripped from each `line` argument, unless the [`preserveNewlines`](api.md#transformoptionspreservenewlines) transform option is `true`.

```js
// `line` now ends with '\n'.
// The last `line` might or might not end with '\n', depending on the output.
const transform = function * (line) { /* ... */ };

await execa({stdout: {transform, preserveNewlines: true}})`npm run build`;
```

Each `yield` produces at least one line. Calling `yield` multiple times or calling `yield *` produces multiples lines.

```js
const transform = function * (line) {
	yield 'Important note:';
	yield 'Read the comments below.';

	// Or:
	yield * [
		'Important note:',
		'Read the comments below.',
	];

	// Is the same as:
	yield 'Important note:\nRead the comments below.\n';

	yield line;
};

await execa({stdout: transform})`npm run build`;
```

However, if the [`preserveNewlines`](api.md#transformoptionspreservenewlines) transform option is `true`, multiple `yield`s produce a single line instead.

```js
const transform = function * (line) {
	yield 'Important note: ';
	yield 'Read the comments below.\n';

	// Is the same as:
	yield 'Important note: Read the comments below.\n';

	yield line;
};

await execa({stdout: {transform, preserveNewlines: true}})`npm run build`;
```

<hr>

[**Next**: 🤖 Binary data](binary.md)\
[**Previous**: 📢 Output](output.md)\
[**Top**: Table of contents](../readme.md#documentation)
````

## File: docs/node.md
````markdown
<picture>
	<source media="(prefers-color-scheme: dark)" srcset="../media/logo_dark.svg">
	<img alt="execa logo" src="../media/logo.svg" width="400">
</picture>
<br>

# 🐢 Node.js files

## Run Node.js files

```js
import {execaNode, execa} from 'execa';

await execaNode`file.js argument`;
// Is the same as:
await execa({node: true})`file.js argument`;
// Or:
await execa`node file.js argument`;
```

## Node.js CLI flags

When using the [`node`](api.md#optionsnode) option or [`execaNode()`](api.md#execanodescriptpath-arguments-options), the current Node.js [CLI flags](https://nodejs.org/api/cli.html#options) are inherited. For example, the subprocess will use [`--allow-fs-read`](https://nodejs.org/api/cli.html#--allow-fs-read) if the current process does.

The [`nodeOptions`](api.md#optionsnodeoptions) option can be used to set different CLI flags.

```js
await execaNode({nodeOptions: ['--allow-fs-write']})`file.js argument`;
```

## Node.js version

The same applies to the Node.js version, which is inherited too.

[`get-node`](https://github.com/ehmicky/get-node) and the [`nodePath`](api.md#optionsnodepath) option can be used to run a specific Node.js version. Alternatively, [`nvexeca`](https://github.com/ehmicky/nvexeca) or [`nve`](https://github.com/ehmicky/nve) can be used.

```js
import {execaNode} from 'execa';
import getNode from 'get-node';

const {path: nodePath} = await getNode('16.2.0');
await execaNode({nodePath})`file.js argument`;
```

<hr>

[**Next**: 🌐 Environment](environment.md)\
[**Previous**: 📜 Scripts](scripts.md)\
[**Top**: Table of contents](../readme.md#documentation)
````

## File: docs/output.md
````markdown
<picture>
	<source media="(prefers-color-scheme: dark)" srcset="../media/logo_dark.svg">
	<img alt="execa logo" src="../media/logo.svg" width="400">
</picture>
<br>

# 📢 Output

## Stdout and stderr

The [`stdout`](api.md#optionsstdout) and [`stderr`](api.md#optionsstderr) options redirect the subprocess output. They default to `'pipe'`, which returns the output using [`result.stdout`](api.md#resultstdout) and [`result.stderr`](api.md#resultstderr).

```js
import {execa} from 'execa';

const {stdout, stderr} = await execa`npm run build`;
console.log(stdout);
console.log(stderr);
```

## Ignore output

```js
const {stdout, stderr} = await execa({stdout: 'ignore'})`npm run build`;
console.log(stdout); // undefined
console.log(stderr); // string with errors
```

## File output

```js
await execa({stdout: {file: 'output.txt'}})`npm run build`;
// Or:
await execa({stdout: new URL('file:///path/to/output.txt')})`npm run build`;
```

```js
// Redirect interleaved stdout and stderr to same file
const output = {file: 'output.txt'};
await execa({stdout: output, stderr: output})`npm run build`;
```

```js
// Append instead of overwriting
await execa({stdout: {file: 'output.txt', append: true}})`npm run build`;
```

## Terminal output

The parent process' output can be re-used in the subprocess by passing `'inherit'`. This is especially useful to print to the terminal in command line applications.

```js
await execa({stdout: 'inherit', stderr: 'inherit'})`npm run build`;
```

To redirect from/to a different [file descriptor](https://en.wikipedia.org/wiki/File_descriptor), pass its [number](https://en.wikipedia.org/wiki/Standard_streams) or [`process.stdout`](https://nodejs.org/api/process.html#processstdout)/[`process.stderr`](https://nodejs.org/api/process.html#processstderr).

```js
// Print both stdout/stderr to the parent stdout
await execa({stdout: process.stdout, stderr: process.stdout})`npm run build`;
// Or:
await execa({stdout: 1, stderr: 1})`npm run build`;
```

## Any output type

If the subprocess uses Node.js, [IPC](ipc.md) can be used to return [almost any type](ipc.md#message-type) from the subprocess. The [`result.ipcOutput`](api.md#resultipcoutput) array contains all the messages sent by the subprocess.

```js
// main.js
import {execaNode} from 'execa';

const {ipcOutput} = await execaNode`build.js`;
console.log(ipcOutput[0]); // {kind: 'start', timestamp: date}
console.log(ipcOutput[1]); // {kind: 'stop', timestamp: date}
```

```js
// build.js
import {sendMessage} from 'execa';

await sendMessage({kind: 'start', timestamp: new Date()});
await runBuild();
await sendMessage({kind: 'stop', timestamp: new Date()});
```

## Multiple targets

The output can be redirected to multiple targets by setting the [`stdout`](api.md#optionsstdout) or [`stderr`](api.md#optionsstderr) option to an array of values. This also allows specifying multiple inputs with the [`stdin`](api.md#optionsstdin) option.

The following example redirects `stdout` to both the [terminal](#terminal-output) and an `output.txt` [file](#file-output), while also retrieving its value [programmatically](#stdout-and-stderr).

```js
const {stdout} = await execa({stdout: ['inherit', {file: 'output.txt'}, 'pipe']})`npm run build`;
console.log(stdout);
```

When combining [`'inherit'`](#terminal-output) with other values, please note that the subprocess will not be an interactive TTY, even if the current process is one.

## Interleaved output

If the [`all`](api.md#optionsall) option is `true`, [`stdout`](https://en.wikipedia.org/wiki/Standard_streams#Standard_output_(stdout)) and [`stderr`](https://en.wikipedia.org/wiki/Standard_streams#Standard_error_(stderr)) are combined:
- [`result.all`](api.md#resultall): [`result.stdout`](api.md#resultstdout) + [`result.stderr`](api.md#resultstderr)
- [`subprocess.all`](api.md#subprocessall): [`subprocess.stdout`](api.md#subprocessstdout) + [`subprocess.stderr`](api.md#subprocessstderr)

`stdout` and `stderr` are guaranteed to interleave. However, for performance reasons, the subprocess might buffer and merge multiple simultaneous writes to `stdout` or `stderr`. This can prevent proper interleaving.

For example, this prints `1 3 2` instead of `1 2 3` because both `console.log()` are merged into a single write.

```js
const {all} = await execa({all: true})`node example.js`;
```

```js
// example.js
console.log('1'); // writes to stdout
console.error('2'); // writes to stderr
console.log('3'); // writes to stdout
```

This can be worked around by using `setTimeout()`.

```js
import {setTimeout} from 'timers/promises';

console.log('1');
console.error('2');
await setTimeout(0);
console.log('3');
```

## Stdout/stderr-specific options

Some options are related to the subprocess output: [`verbose`](api.md#optionsverbose), [`lines`](api.md#optionslines), [`stripFinalNewline`](api.md#optionsstripfinalnewline), [`buffer`](api.md#optionsbuffer), [`maxBuffer`](api.md#optionsmaxbuffer). By default, those options apply to all [file descriptors](https://en.wikipedia.org/wiki/File_descriptor) ([`stdout`](https://en.wikipedia.org/wiki/Standard_streams#Standard_output_(stdout)), [`stderr`](https://en.wikipedia.org/wiki/Standard_streams#Standard_error_(stderr)), and [others](#additional-file-descriptors)) and [IPC messages](ipc.md). A plain object can be passed instead to apply them to only `stdout`, `stderr`, `all` (both stdout and stderr), [`ipc`](ipc.md), [`fd3`](#additional-file-descriptors), etc.

```js
// Same value for stdout and stderr
await execa({verbose: 'full'})`npm run build`;

// Different values for stdout and stderr
await execa({verbose: {stdout: 'none', stderr: 'full'}})`npm run build`;
```

## Additional file descriptors

The [`stdio`](api.md#optionsstdio) option is an array combining [`stdin`](api.md#optionsstdin), [`stdout`](api.md#optionsstdout), [`stderr`](api.md#optionsstderr) and any other file descriptor. It is useful when using additional [file descriptors](https://en.wikipedia.org/wiki/File_descriptor) beyond the [standard ones](https://en.wikipedia.org/wiki/Standard_streams), either for [input](input.md#additional-file-descriptors) or output.

[`result.stdio`](api.md#resultstdio) can be used to retrieve some output from any file descriptor, as opposed to only [`stdout`](api.md#optionsstdout) and [`stderr`](api.md#optionsstderr).

```js
// Retrieve output from file descriptor number 3
const {stdio} = await execa({
	stdio: ['pipe', 'pipe', 'pipe', 'pipe'],
})`npm run build`;
console.log(stdio[3]);
```

## Shortcut

The [`stdio`](api.md#optionsstdio) option can also be a single value [`'pipe'`](#stdout-and-stderr), [`'overlapped'`](windows.md#asynchronous-io), [`'ignore'`](#ignore-output) or [`'inherit'`](#terminal-output). This is a shortcut for setting that same value with the [`stdin`](api.md#optionsstdin), [`stdout`](api.md#optionsstdout) and [`stderr`](api.md#optionsstderr) options.

```js
await execa({stdio: 'ignore'})`npm run build`;
// Same as:
await execa({stdin: 'ignore', stdout: 'ignore', stderr: 'ignore'})`npm run build`;
```

## Big output

To prevent high memory consumption, a maximum output size can be set using the [`maxBuffer`](api.md#optionsmaxbuffer) option. It defaults to 100MB.

When this threshold is hit, the subprocess fails and [`error.isMaxBuffer`](api.md#errorismaxbuffer) becomes `true`. The truncated output is still available using [`error.stdout`](api.md#resultstdout), [`error.stderr`](api.md#resultstderr) and [`error.ipcOutput`](api.md#resultipcoutput).

This is measured:
- By default: in [characters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length).
- If the [`encoding`](binary.md#encoding) option is `'buffer'`: in bytes.
- If the [`lines`](lines.md#simple-splitting) option is `true`: in lines.
- If a [transform in object mode](transform.md#object-mode) is used: in objects.
- With [`error.ipcOutput`](ipc.md#retrieve-all-messages): in messages.

```js
try {
	await execa({maxBuffer: 1_000_000})`npm run build`;
} catch (error) {
	if (error.isMaxBuffer) {
		console.error('Error: output larger than 1MB.');
		console.error(error.stdout);
		console.error(error.stderr);
	}

	throw error;
}
```

## Low memory

When the [`buffer`](api.md#optionsbuffer) option is `false`, [`result.stdout`](api.md#resultstdout), [`result.stderr`](api.md#resultstderr), [`result.all`](api.md#resultall), [`result.stdio[*]`](api.md#resultstdio) and [`result.ipcOutput`](api.md#resultipcoutput) properties are empty.

This prevents high memory consumption when the output is big. However, the output must be either ignored, [redirected](#file-output), [streamed](streams.md) or [listened to](ipc.md#listening-to-messages). If streamed, this should be done right away to avoid missing any data.

<hr>

[**Next**: 📃 Text lines](lines.md)\
[**Previous**: 🎹 Input](input.md)\
[**Top**: Table of contents](../readme.md#documentation)
````

## File: docs/pipe.md
````markdown
<picture>
	<source media="(prefers-color-scheme: dark)" srcset="../media/logo_dark.svg">
	<img alt="execa logo" src="../media/logo.svg" width="400">
</picture>
<br>

# 🔀 Piping multiple subprocesses

## Array syntax

A subprocess' [output](output.md) can be [piped](https://en.wikipedia.org/wiki/Pipeline_(Unix)) to another subprocess' [input](input.md). The syntax is the same as [`execa(file, arguments?, options?)`](execution.md#array-syntax).

```js
import {execa} from 'execa';

// Similar to `npm run build | head -n 2` in shells
const {stdout} = await execa('npm', ['run', 'build'])
	.pipe('head', ['-n', '2']);
```

## Template string syntax

```js
const {stdout} = await execa`npm run build`
	.pipe`head -n 2`;
```

## Advanced syntax

```js
const subprocess = execa`head -n 2`;
const {stdout} = await execa`npm run build`
	.pipe(subprocess);
```

## Options

[Options](api.md#options-1) can be passed to either the source or the destination subprocess. Some [pipe-specific options](api.md#pipeoptions) can also be set by the destination subprocess.

```js
const {stdout} = await execa('npm', ['run', 'build'], subprocessOptions)
	.pipe('head', ['-n', '2'], subprocessOrPipeOptions);
```

```js
const {stdout} = await execa(subprocessOptions)`npm run build`
	.pipe(subprocessOrPipeOptions)`head -n 2`;
```

```js
const subprocess = execa(subprocessOptions)`head -n 2`;
const {stdout} = await execa(subprocessOptions)`npm run build`
	.pipe(subprocess, pipeOptions);
```

## Result

When both subprocesses succeed, the [`result`](api.md#result) of the destination subprocess is returned. The [`result`](api.md#result) of the source subprocess is available in a [`result.pipedFrom`](api.md#resultpipedfrom) array.

```js
const destinationResult = await execa`npm run build`
	.pipe`head -n 2`;
console.log(destinationResult.stdout); // First 2 lines of `npm run build`

const sourceResult = destinationResult.pipedFrom[0];
console.log(sourceResult.stdout); // Full output of `npm run build`
```

## Errors

When either subprocess fails, `subprocess.pipe()` is rejected with that subprocess' error. If the destination subprocess fails, [`error.pipedFrom`](api.md#resultpipedfrom) includes the source subprocess' result, which is useful for debugging.

```js
try {
	await execa`npm run build`
		.pipe`head -n 2`;
} catch (error) {
	if (error.pipedFrom.length === 0) {
		// `npm run build` failure
		console.error(error);
	} else {
		// `head -n 2` failure
		console.error(error);
		// `npm run build` output
		console.error(error.pipedFrom[0].stdout);
	}

	throw error;
}
```

## Series of subprocesses

```js
await execa`npm run build`
	.pipe`sort`
	.pipe`head -n 2`;
```

## 1 source, multiple destinations

```js
const subprocess = execa`npm run build`;
const [sortedResult, truncatedResult] = await Promise.all([
	subprocess.pipe`sort`,
	subprocess.pipe`head -n 2`,
]);
```

## Multiple sources, 1 destination

```js
const destination = execa`./log-remotely.js`;
await Promise.all([
	execa`npm run build`.pipe(destination),
	execa`npm run test`.pipe(destination),
]);
```

## Source file descriptor

By default, the source's [`stdout`](api.md#subprocessstdout) is used, but this can be changed using the [`from`](api.md#pipeoptionsfrom) piping option.

```js
await execa`npm run build`
	.pipe({from: 'stderr'})`head -n 2`;
```

## Destination file descriptor

By default, the destination's [`stdin`](api.md#subprocessstdin) is used, but this can be changed using the [`to`](api.md#pipeoptionsto) piping option.

```js
await execa`npm run build`
	.pipe({to: 'fd3'})`./log-remotely.js`;
```

## Unpipe

Piping can be stopped using the [`unpipeSignal`](api.md#pipeoptionsunpipesignal) piping option.

The [`subprocess.pipe()`](api.md#subprocesspipefile-arguments-options) method will be rejected with a cancelation error. However, each subprocess will keep running.

```js
const abortController = new AbortController();

process.on('SIGUSR1', () => {
	abortController.abort();
});

// If the process receives SIGUSR1, `npm run build` stopped being logged remotely.
// However, it keeps running successfully.
try {
	await execa`npm run build`
		.pipe({unpipeSignal: abortController.signal})`./log-remotely.js`;
} catch (error) {
	if (!abortController.signal.aborted) {
		throw error;
	}
}
```

<hr>

[**Next**: ⏳️ Streams](streams.md)\
[**Previous**: 🧙 Transforms](transform.md)\
[**Top**: Table of contents](../readme.md#documentation)
````

## File: docs/scripts.md
````markdown
<picture>
	<source media="(prefers-color-scheme: dark)" srcset="../media/logo_dark.svg">
	<img alt="execa logo" src="../media/logo.svg" width="400">
</picture>
<br>

# 📜 Scripts

## Script files

[Scripts](https://en.wikipedia.org/wiki/Shell_script) are Node.js files executing a series of commands. While those used to be written with a shell language like [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)), libraries like Execa provide with a better, modern experience.

Scripts use [`$`](api.md#file-arguments-options) instead of [`execa`](api.md#execafile-arguments-options). The only difference is that `$` includes script-friendly default options: [`stdin: 'inherit'`](input.md#terminal-input) and [`preferLocal: true`](environment.md#local-binaries).

[More info about the difference between Execa, Bash and zx.](bash.md)

```js
import {$} from 'execa';

const {stdout: name} = await $`cat package.json`.pipe`grep name`;
console.log(name);

const branch = await $`git branch --show-current`;
await $`dep deploy --branch=${branch}`;

await Promise.all([
	$`sleep 1`,
	$`sleep 2`,
	$`sleep 3`,
]);

const directoryName = 'foo bar';
await $`mkdir /tmp/${directoryName}`;
```

## Template string syntax

Just like [`execa`](api.md#execacommand), [`$`](api.md#command) can use either the [template string syntax](execution.md#template-string-syntax) or the [array syntax](execution.md#array-syntax).

Conversely, the template string syntax can be used outside of script files: `$` is not required to use that syntax. For example, `execa` [can use it too](execution.md#template-string-syntax).

```js
import {execa, $} from 'execa';

const branch = await execa`git branch --show-current`;
await $('dep', ['deploy', `--branch=${branch}`]);
```

<hr>

[**Next**: 🐢 Node.js files](node.md)\
[**Previous**: 💻 Shell](shell.md)\
[**Top**: Table of contents](../readme.md#documentation)
````

## File: docs/shell.md
````markdown
<picture>
	<source media="(prefers-color-scheme: dark)" srcset="../media/logo_dark.svg">
	<img alt="execa logo" src="../media/logo.svg" width="400">
</picture>
<br>

# 💻 Shell

## Avoiding shells

In general, [shells](https://en.wikipedia.org/wiki/Shell_(computing)) should be avoided because they are:
- Not cross-platform, encouraging shell-specific syntax.
- Slower, because of the additional shell interpretation.
- Unsafe, potentially allowing [command injection](https://en.wikipedia.org/wiki/Code_injection#Shell_injection) (see the [escaping section](escaping.md#shells)).

In almost all cases, plain JavaScript is a better alternative to shells. The [following page](bash.md) shows how to convert Bash into JavaScript.

## Specific shell

```js
import {execa} from 'execa';

await execa({shell: '/bin/bash'})`npm run "$TASK" && npm run test`;
```

## OS-specific shell

When the [`shell`](api.md#optionsshell) option is `true`, `sh` is used on Unix and [`cmd.exe`](https://en.wikipedia.org/wiki/Cmd.exe) is used on Windows.

`sh` and `cmd.exe` syntaxes are very different. Therefore, this is usually not useful.

```js
await execa({shell: true})`npm run build`;
```

<hr>

[**Next**: 📜 Scripts](scripts.md)\
[**Previous**: 💬 Escaping/quoting](escaping.md)\
[**Top**: Table of contents](../readme.md#documentation)
````

## File: docs/small.md
````markdown
<picture>
	<source media="(prefers-color-scheme: dark)" srcset="../media/logo_dark.svg">
	<img alt="execa logo" src="../media/logo.svg" width="400">
</picture>
<br>

# 🐭 Small packages

## `nano-spawn`

Execa aims to be the best way to run commands on Node.js. It is [very widely used](https://github.com/sindresorhus/execa/network/dependents), [battle-tested](https://github.com/sindresorhus/execa/graphs/contributors) and has a bunch of [features](../readme.md#features).

However, this means it has a relatively big package size: [![Install size](https://packagephobia.com/badge?p=execa)](https://packagephobia.com/result?p=execa). This should not be a problem in a server-side context, such as a script, a server, or an app. But you might be in an environment requiring small packages, such as a library or a serverless function.

If so, you can use [nano-spawn](https://github.com/sindresorhus/nano-spawn). It is similar, is maintained by the [same people](https://github.com/sindresorhus/nano-spawn#maintainers), has no dependencies, and a smaller package size: ![npm package minzipped size](https://img.shields.io/bundlejs/size/nano-spawn) [![Install size](https://packagephobia.com/badge?p=nano-spawn)](https://packagephobia.com/result?p=nano-spawn).

On the other hand, please note `nano-spawn` lacks many features from Execa: [scripts](scripts.md), [template string syntax](execution.md#template-string-syntax), [synchronous execution](execution.md#synchronous-execution), [file input/output](output.md#file-output), [binary input/output](binary.md), [advanced piping](pipe.md), [verbose mode](debugging.md#verbose-mode), [graceful](termination.md#graceful-termination) or [forceful termination](termination.md#forceful-termination), [IPC](ipc.md), [shebangs on Windows](windows.md), [and much more](https://github.com/sindresorhus/nano-spawn/issues/14).

```js
import spawn from 'nano-spawn';

const result = await spawn('npm', ['run', 'build']);
```

### `node:child_process`

Both Execa and nano-spawn are built on top of the [`node:child_process`](https://nodejs.org/api/child_process.html) core module.

If you'd prefer avoiding adding any dependency, you may use `node:child_process` directly. However, you might miss some basic [features](https://github.com/sindresorhus/nano-spawn#features) that both Execa and nano-spawn provide: [proper error handling](https://github.com/sindresorhus/nano-spawn#subprocesserror), [full Windows support](https://github.com/sindresorhus/nano-spawn#windows-support), [local binaries](https://github.com/sindresorhus/nano-spawn#optionspreferlocal), [piping](https://github.com/sindresorhus/nano-spawn#subprocesspipefile-arguments-options), [lines iteration](https://github.com/sindresorhus/nano-spawn#subprocesssymbolasynciterator), [interleaved output](https://github.com/sindresorhus/nano-spawn#resultoutput), [and more](https://github.com/sindresorhus/nano-spawn#features).

```js
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';

const pExecFile = promisify(execFile);

const result = await pExecFile('npm', ['run', 'build']);
```

<hr>

[**Next**: 🤓 TypeScript](typescript.md)\
[**Previous**: 🔍 Differences with Bash and zx](bash.md)\
[**Top**: Table of contents](../readme.md#documentation)
````

## File: docs/streams.md
````markdown
<picture>
	<source media="(prefers-color-scheme: dark)" srcset="../media/logo_dark.svg">
	<img alt="execa logo" src="../media/logo.svg" width="400">
</picture>
<br>

# ⏳️ Streams

## Node.js streams

### Input

```js
import {createReadStream} from 'node:fs';
import {once} from 'node:events';
import {execa} from 'execa';

const readable = createReadStream('input.txt');
await once(readable, 'open');
await execa({stdin: readable})`npm run scaffold`;
```

### Output

```js
import {createWriteStream} from 'node:fs';
import {once} from 'node:events';
import {execa} from 'execa';

const writable = createWriteStream('output.txt');
await once(writable, 'open');
await execa({stdout: writable})`npm run build`;
```

### File descriptors

When passing a Node.js stream to the [`stdin`](api.md#optionsstdin), [`stdout`](api.md#optionsstdout) or [`stderr`](api.md#optionsstderr) option, that stream must have an underlying file or socket, such as the streams created by the [`fs`](https://nodejs.org/api/fs.html#filehandlecreatereadstreamoptions), [`net`](https://nodejs.org/api/net.html#new-netsocketoptions) or [`http`](https://nodejs.org/api/http.html#class-httpincomingmessage) core modules. Otherwise the following error is thrown.

```
TypeError [ERR_INVALID_ARG_VALUE]: The argument 'stdio' is invalid.
```

This limitation can be worked around by either:
- Using the [`input`](api.md#optionsinput) option instead of the [`stdin`](api.md#optionsstdin) option.
- Passing a [web stream](#web-streams).
- Passing [`[nodeStream, 'pipe']`](output.md#multiple-targets) instead of `nodeStream`.

## Web streams

[Web streams](https://nodejs.org/api/webstreams.html) ([`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) or [`WritableStream`](https://developer.mozilla.org/en-US/docs/Web/API/WritableStream)) can be used instead of [Node.js streams](https://nodejs.org/api/stream.html).

```js
const response = await fetch('https://example.com');
await execa({stdin: response.body})`npm run build`;
```

## Iterables as input

```js
const getReplInput = async function * () {
	for await (const replLine of getReplLines()) {
		yield replLine;
	}
};

await execa({stdin: getReplInput()})`npm run scaffold`;
```

## Manual streaming

[`subprocess.stdin`](api.md#subprocessstdin) is a Node.js [`Readable`](https://nodejs.org/api/stream.html#class-streamreadable) stream and [`subprocess.stdout`](api.md#subprocessstdout)/[`subprocess.stderr`](api.md#subprocessstderr)/[`subprocess.all`](api.md#subprocessall) are Node.js [`Writable`](https://nodejs.org/api/stream.html#class-streamwritable) streams.

They can be used to stream input/output manually. This is intended for advanced situations. In most cases, the following simpler solutions can be used instead:
- [`result.stdout`](output.md#stdout-and-stderr), [`result.stderr`](output.md#stdout-and-stderr) or [`result.stdio`](output.md#additional-file-descriptors).
- The [`stdin`](api.md#optionsstdin), [`stdout`](api.md#optionsstdout), [`stderr`](api.md#optionsstderr) or [`stdio`](api.md#optionsstdio) options.
- [`subprocess.iterable()`](lines.md#progressive-splitting).
- [`subprocess.pipe()`](pipe.md).

## Converting a subprocess to a stream

### Convert

The [`subprocess.readable()`](api.md#subprocessreadablereadableoptions), [`subprocess.writable()`](api.md#subprocesswritablewritableoptions) and [`subprocess.duplex()`](api.md#subprocessduplexduplexoptions) methods convert the subprocess to a Node.js [`Readable`](https://nodejs.org/api/stream.html#class-streamreadable), [`Writable`](https://nodejs.org/api/stream.html#class-streamwritable) and [`Duplex`](https://nodejs.org/api/stream.html#class-streamduplex) stream.

This is useful when using a library or API that expects Node.js streams as arguments. In every other situation, the simpler solutions described [above](#manual-streaming) can be used instead.

```js
const readable = execa`npm run scaffold`.readable();

const writable = execa`npm run scaffold`.writable();

const duplex = execa`npm run scaffold`.duplex();
```

### Different file descriptor

By default, [`subprocess.readable()`](api.md#subprocessreadablereadableoptions), [`subprocess.writable()`](api.md#subprocesswritablewritableoptions) and [`subprocess.duplex()`](api.md#subprocessduplexduplexoptions) methods use [`stdin`](api.md#subprocessstdin) and [`stdout`](api.md#subprocessstdout). This can be changed using the [`from`](api.md#readableoptionsfrom) and [`to`](api.md#writableoptionsto) options.

```js
const readable = execa`npm run scaffold`.readable({from: 'stderr'});

const writable = execa`npm run scaffold`.writable({to: 'fd3'});

const duplex = execa`npm run scaffold`.duplex({from: 'stderr', to: 'fd3'});
```

### Error handling

When using [`subprocess.readable()`](api.md#subprocessreadablereadableoptions), [`subprocess.writable()`](api.md#subprocesswritablewritableoptions) or [`subprocess.duplex()`](api.md#subprocessduplexduplexoptions), the stream waits for the subprocess to end, and emits an [`error`](https://nodejs.org/api/stream.html#event-error) event if the subprocess [fails](errors.md). This differs from [`subprocess.stdin`](api.md#subprocessstdin), [`subprocess.stdout`](api.md#subprocessstdout) and [`subprocess.stderr`](api.md#subprocessstderr)'s behavior.

This means you do not need to `await` the subprocess' [promise](execution.md#result). On the other hand, you (or the library using the stream) do need to both consume the stream, and handle its `error` event. This can be done by using [`await finished(stream)`](https://nodejs.org/api/stream.html#streamfinishedstream-options), [`await pipeline(..., stream, ...)`](https://nodejs.org/api/stream.html#streampipelinesource-transforms-destination-options) or [`await text(stream)`](https://nodejs.org/api/webstreams.html#streamconsumerstextstream) which throw an exception when the stream errors.

<hr>

[**Next**: 📞 Inter-process communication](ipc.md)\
[**Previous**: 🔀 Piping multiple subprocesses](pipe.md)\
[**Top**: Table of contents](../readme.md#documentation)
````

## File: docs/termination.md
````markdown
<picture>
	<source media="(prefers-color-scheme: dark)" srcset="../media/logo_dark.svg">
	<img alt="execa logo" src="../media/logo.svg" width="400">
</picture>
<br>

# 🏁 Termination

## Alternatives

Terminating a subprocess ends it abruptly. This prevents rolling back the subprocess' operations and leaves them incomplete.

Ideally subprocesses should end on their own. If that's not possible, [graceful termination](#graceful-termination) should be preferred.

## Canceling

The [`cancelSignal`](api.md#optionscancelsignal) option can be used to cancel a subprocess. When it is [aborted](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort), a [`SIGTERM` signal](#default-signal) is sent to the subprocess.

```js
import {execaNode} from 'execa';

const controller = new AbortController();
const cancelSignal = controller.signal;

setTimeout(() => {
	controller.abort();
}, 5000);

try {
	await execaNode({cancelSignal})`build.js`;
} catch (error) {
	if (error.isCanceled) {
		console.error('Canceled by cancelSignal.');
	}

	throw error;
}
```

## Graceful termination

### Share a `cancelSignal`

When the [`gracefulCancel`](api.md#optionsgracefulcancel) option is `true`, the [`cancelSignal`](api.md#optionscancelsignal) option does not send any [`SIGTERM`](#sigterm). Instead, the subprocess calls [`getCancelSignal()`](api.md#getcancelsignal) to retrieve and handle the [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal). This allows the subprocess to properly clean up and abort operations.

This option only works with Node.js files.

This is cross-platform. If you do not need to support Windows, [signal handlers](#handling-signals) can also be used.

```js
// main.js
import {execaNode} from 'execa';

const controller = new AbortController();
const cancelSignal = controller.signal;

setTimeout(() => {
	controller.abort();
}, 5000);

try {
	await execaNode({cancelSignal, gracefulCancel: true})`build.js`;
} catch (error) {
	if (error.isGracefullyCanceled) {
		console.error('Cancelled gracefully.');
	}

	throw error;
}
```

```js
// build.js
import {getCancelSignal} from 'execa';

const cancelSignal = await getCancelSignal();
```

### Abort operations

The [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) returned by [`getCancelSignal()`](api.md#getcancelsignal) can be passed to most long-running Node.js methods: [`setTimeout()`](https://nodejs.org/api/timers.html#timerspromisessettimeoutdelay-value-options), [`setInterval()`](https://nodejs.org/api/timers.html#timerspromisessetintervaldelay-value-options), [events](https://nodejs.org/api/events.html#eventsonemitter-eventname-options), [streams](https://nodejs.org/api/stream.html#new-streamreadableoptions), [REPL](https://nodejs.org/api/readline.html#rlquestionquery-options), HTTP/TCP [requests](https://nodejs.org/api/http.html#httprequesturl-options-callback) or [servers](https://nodejs.org/api/net.html#serverlistenoptions-callback), [reading](https://nodejs.org/api/fs.html#fspromisesreadfilepath-options) / [writing](https://nodejs.org/api/fs.html#fspromiseswritefilefile-data-options) / [watching](https://nodejs.org/api/fs.html#fspromiseswatchfilename-options) files, or spawning another subprocess.

When aborted, those methods throw the `Error` instance which was passed to [`abortController.abort(error)`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort). Since those methods keep the subprocess alive, aborting them makes the subprocess end on its own.

```js
import {getCancelSignal} from 'execa';
import {watch} from 'node:fs/promises';

const cancelSignal = await getCancelSignal();

try {
	for await (const fileChange of watch('./src', {signal: cancelSignal})) {
		onFileChange(fileChange);
	}
} catch (error) {
	if (error.isGracefullyCanceled) {
		console.log(error.cause === cancelSignal.reason); // true
	}
}
```

### Cleanup logic

For other kinds of operations, the [`abort`](https://nodejs.org/api/globals.html#event-abort) event should be listened to. Although [`cancelSignal.addEventListener('abort')`](https://nodejs.org/api/events.html#eventtargetaddeventlistenertype-listener-options) can be used, [`events.addAbortListener(cancelSignal)`](https://nodejs.org/api/events.html#eventsaddabortlistenersignal-listener) is preferred since it works even if the `cancelSignal` is already aborted.

### Graceful exit

We recommend explicitly [stopping](#abort-operations) each pending operation when the subprocess is aborted. This allows it to end on its own.

```js
import {getCancelSignal} from 'execa';
import {addAbortListener} from 'node:events';

const cancelSignal = await getCancelSignal();
addAbortListener(cancelSignal, async () => {
	await cleanup();
	process.exitCode = 1;
});
```

However, if any operation is still ongoing, the subprocess will keep running. It can be forcefully ended using [`process.exit(exitCode)`](https://nodejs.org/api/process.html#processexitcode) instead of [`process.exitCode`](https://nodejs.org/api/process.html#processexitcode_1).

If the subprocess is still alive after 5 seconds, it is forcefully terminated with [`SIGKILL`](#sigkill). This can be [configured or disabled](#forceful-termination) using the [`forceKillAfterDelay`](api.md#optionsforcekillafterdelay) option.

## Timeout

### Execution timeout

If the subprocess lasts longer than the [`timeout`](api.md#optionstimeout) option, a [`SIGTERM` signal](#default-signal) is sent to it.

```js
try {
	await execa({timeout: 5000})`npm run build`;
} catch (error) {
	if (error.timedOut) {
		console.error('Timed out.');
	}

	throw error;
}
```

### Inactivity timeout

To terminate a subprocess when it becomes inactive, the [`cancelSignal`](#canceling) option can be combined with [transforms](transform.md) and some [debouncing logic](https://github.com/sindresorhus/debounce-fn). The following example terminates the subprocess if it has not printed to [`stdout`](api.md#resultstdout)/[`stderr`](api.md#resultstderr) in the last minute.

```js
import {execa} from 'execa';
import debounceFn from 'debounce-fn';

// 1 minute
const wait = 60_000;

const getInactivityOptions = () => {
	const controller = new AbortController();
	const cancelSignal = controller.signal;

	// Delay and debounce `cancelSignal` each time `controller.abort()` is called
	const scheduleAbort = debounceFn(controller.abort.bind(controller), {wait});

	const onOutput = {
		* transform(data) {
			// When anything is printed, debounce `controller.abort()`
			scheduleAbort();

			// Keep the output as is
			yield data;
		},
		// Debounce even if the output does not include any newline
		binary: true,
	};

	// Start debouncing
	scheduleAbort();

	return {
		cancelSignal,
		stdout: onOutput,
		stderr: onOutput,
	};
};

const options = getInactivityOptions();

await execa(options)`npm run build`;
```

## Current process exit

If the current process exits, the subprocess is automatically [terminated](#default-signal) unless either:
- The [`cleanup`](api.md#optionscleanup) option is `false`.
- The subprocess is run in the background using the [`detached`](api.md#optionsdetached) option.
- The current process was terminated abruptly, for example, with [`SIGKILL`](#sigkill) as opposed to [`SIGTERM`](#sigterm) or a successful exit.

## Signal termination

[`subprocess.kill()`](api.md#subprocesskillsignal-error) sends a [signal](https://en.wikipedia.org/wiki/Signal_(IPC)) to the subprocess. This is an inter-process message handled by the OS. Most (but [not all](https://github.com/ehmicky/human-signals#action)) signals terminate the subprocess.

[More info.](https://nodejs.org/api/child_process.html#subprocesskillsignal)

### SIGTERM

[`SIGTERM`](https://en.wikipedia.org/wiki/Signal_(IPC)#SIGTERM) is the default signal. It terminates the subprocess. On Unix, it can [be handled](#handling-signals) to run some cleanup logic.

```js
const subprocess = execa`npm run build`;
subprocess.kill();
// Is the same as:
subprocess.kill('SIGTERM');
```

### SIGINT

[`SIGINT`](https://en.wikipedia.org/wiki/Signal_(IPC)#SIGINT) terminates the process. Its [handler](#handling-signals) is triggered on `CTRL-C`.

```js
subprocess.kill('SIGINT');
```

### SIGKILL

[`SIGKILL`](https://en.wikipedia.org/wiki/Signal_(IPC)#SIGKILL) forcefully terminates the subprocess. It [cannot be handled](#handling-signals).

```js
subprocess.kill('SIGKILL');
```

### SIGQUIT

[`SIGQUIT`](https://en.wikipedia.org/wiki/Signal_(IPC)#SIGQUIT) terminates the process. On Unix, it creates a [core dump](https://en.wikipedia.org/wiki/Core_dump).

```js
subprocess.kill('SIGQUIT');
```

### Other signals

Other signals can be passed as argument. However, most other signals do not fully [work on Windows](https://github.com/ehmicky/cross-platform-node-guide/blob/main/docs/6_networking_ipc/signals.md#cross-platform-signals).

### Default signal

The [`killSignal`](api.md#optionskillsignal) option sets the default signal used by [`subprocess.kill()`](api.md#subprocesskillsignal-error) and the following options: [`cancelSignal`](#canceling), [`timeout`](#timeout), [`maxBuffer`](output.md#big-output) and [`cleanup`](#current-process-exit). It is [`SIGTERM`](#sigterm) by default.

```js
const subprocess = execa({killSignal: 'SIGKILL'})`npm run build`;
subprocess.kill(); // Forceful termination
```

### Handling signals

On Unix, most signals (not [`SIGKILL`](#sigkill)) can be intercepted to perform a graceful exit.

```js
process.on('SIGTERM', () => {
	cleanup();
	process.exit(1);
})
```

Unfortunately this [usually does not work](https://github.com/ehmicky/cross-platform-node-guide/blob/main/docs/6_networking_ipc/signals.md#cross-platform-signals) on Windows. The only signal that is somewhat cross-platform is [`SIGINT`](#sigint): on Windows, its handler is triggered when the user types `CTRL-C` in the terminal. However `subprocess.kill('SIGINT')` is only handled on Unix.

Execa provides the [`gracefulCancel`](#graceful-termination) option as a cross-platform alternative to signal handlers.

### Signal name and description

When a subprocess was terminated by a signal, [`error.isTerminated`](api.md#erroristerminated) is `true`.

Also, [`error.signal`](api.md#errorsignal) and [`error.signalDescription`](api.md#errorsignaldescription) indicate the signal's name and [human-friendly description](https://github.com/ehmicky/human-signals). On Windows, those are only set if the current process terminated the subprocess, as opposed to [another process](#inter-process-termination).

```js
try {
	await execa`npm run build`;
} catch (error) {
	if (error.isTerminated) {
		console.error(error.signal); // SIGFPE
		console.error(error.signalDescription); // 'Floating point arithmetic error'
	}

	throw error;
}
```

## Forceful termination

If the subprocess is terminated but does not exit, [`SIGKILL`](#sigkill) is automatically sent to forcefully terminate it.

The grace period is set by the [`forceKillAfterDelay`](api.md#optionsforcekillafterdelay) option, which is 5 seconds by default. This feature can be disabled with `false`.

The [`error.isForcefullyTerminated`](api.md#errorisforcefullyterminated) boolean property can be used to check whether a subprocess was forcefully terminated by the `forceKillAfterDelay` option.

This works when the subprocess is terminated by either:
- Calling [`subprocess.kill()`](api.md#subprocesskillsignal-error) with no arguments.
- The [`cancelSignal`](#canceling), [`timeout`](#timeout), [`maxBuffer`](output.md#big-output) or [`cleanup`](#current-process-exit) option.

This does not work when the subprocess is terminated by either:
- Calling [`subprocess.kill()`](api.md#subprocesskillsignal-error) with a specific signal.
- Calling [`process.kill(subprocess.pid)`](api.md#subprocesspid).
- Sending a termination signal [from another process](#inter-process-termination).

Also, this does not work on Windows, because Windows [doesn't support signals](https://nodejs.org/api/process.html#process_signal_events): `SIGKILL` and `SIGTERM` both terminate the subprocess immediately. Other packages (such as [`taskkill`](https://github.com/sindresorhus/taskkill)) can be used to achieve fail-safe termination on Windows.

```js
// No forceful termination
const subprocess = execa({forceKillAfterDelay: false})`npm run build`;
subprocess.kill();
```

## Inter-process termination

[`subprocess.kill()`](api.md#subprocesskillsignal-error) only works when the current process terminates the subprocess. To terminate the subprocess from a different process, its [`subprocess.pid`](api.md#subprocesspid) can be used instead.

```js
const subprocess = execa`npm run build`;
console.log('PID:', subprocess.pid); // PID: 6513
await subprocess;
```

For example, from a terminal:

```sh
$ kill -SIGTERM 6513
```

Or from a different Node.js process:

```js
import process from 'node:process';

process.kill(subprocessPid);
```

## Error message and stack trace

When terminating a subprocess, it is possible to include an error message and stack trace by using [`subprocess.kill(error)`](api.md#subprocesskillerror). The `error` argument will be available at [`error.cause`](api.md#errorcause).

```js
try {
	const subprocess = execa`npm run build`;
	setTimeout(() => {
		subprocess.kill(new Error('Timed out after 5 seconds.'));
	}, 5000);
	await subprocess;
} catch (error) {
	if (error.isTerminated) {
		console.error(error.cause); // new Error('Timed out after 5 seconds.')
		console.error(error.cause.stack); // Stack trace from `error.cause`
		console.error(error.originalMessage); // 'Timed out after 5 seconds.'
	}

	throw error;
}
```

<hr>

[**Next**: 🎹 Input](input.md)\
[**Previous**: ❌ Errors](errors.md)\
[**Top**: Table of contents](../readme.md#documentation)
````

## File: docs/transform.md
````markdown
<picture>
	<source media="(prefers-color-scheme: dark)" srcset="../media/logo_dark.svg">
	<img alt="execa logo" src="../media/logo.svg" width="400">
</picture>
<br>

# 🧙 Transforms

## Summary

Transforms map or filter the input or output of a subprocess. They are defined by passing a [generator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) or a [transform options object](api.md#transform-options) to the [`stdin`](api.md#optionsstdin), [`stdout`](api.md#optionsstdout), [`stderr`](api.md#optionsstderr) or [`stdio`](api.md#optionsstdio) option. It can be [`async`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function*).

```js
import {execa} from 'execa';

const transform = function * (line) {
	const prefix = line.includes('error') ? 'ERROR' : 'INFO';
	yield `${prefix}: ${line}`;
};

const {stdout} = await execa({stdout: transform})`npm run build`;
console.log(stdout); // HELLO
```

## Difference with iteration

Transforms operate one `line` at a time, just like [`subprocess.iterable()`](lines.md#progressive-splitting). However, unlike iteration, transforms:
- Modify the subprocess' [output](api.md#resultstdout) and [streams](api.md#subprocessstdout).
- Can apply to the subprocess' input.
- Are defined using a [generator function](#summary), [`Duplex`](#duplextransform-streams) stream, Node.js [`Transform`](#duplextransform-streams) stream or web [`TransformStream`](#duplextransform-streams).

## Filtering

`yield` can be called 0, 1 or multiple times. Not calling `yield` enables filtering a specific line.

```js
const transform = function * (line) {
	if (!line.includes('secret')) {
		yield line;
	}
};

const {stdout} = await execa({stdout: transform})`echo ${'This is a secret'}`;
console.log(stdout); // ''
```

## Object mode

By default, [`stdout`](api.md#optionsstdout) and [`stderr`](api.md#optionsstderr)'s transforms must return a string or an `Uint8Array`. However, if the [`objectMode`](api.md#transformoptionsobjectmode) transform option is `true`, any type can be returned instead, except `null` or `undefined`. The subprocess' [`result.stdout`](api.md#resultstdout)/[`result.stderr`](api.md#resultstderr) will be an array of values.

```js
const transform = function * (line) {
	yield JSON.parse(line);
};

const {stdout} = await execa({stdout: {transform, objectMode: true}})`node jsonlines-output.js`;
for (const data of stdout) {
	console.log(stdout); // {...object}
}
```

[`stdin`](api.md#optionsstdin) can also use `objectMode: true`.

```js
const transform = function * (line) {
	yield JSON.stringify(line);
};

const input = [{event: 'example'}, {event: 'otherExample'}];
await execa({stdin: [input, {transform, objectMode: true}]})`node jsonlines-input.js`;
```

## Sharing state

State can be shared between calls of the [`transform`](api.md#transformoptionstransform) and [`final`](api.md#transformoptionsfinal) functions.

```js
let count = 0;

// Prefix line number
const transform = function * (line) {
	yield `[${count++}] ${line}`;
};
```

## Finalizing

To create additional lines after the last one, a [`final`](api.md#transformoptionsfinal) generator function can be used.

```js
let count = 0;

const transform = function * (line) {
	count += 1;
	yield line;
};

const final = function * () {
	yield `Number of lines: ${count}`;
};

const {stdout} = await execa({stdout: {transform, final}})`npm run build`;
console.log(stdout); // Ends with: 'Number of lines: 54'
```

## Duplex/Transform streams

A [`Duplex`](https://nodejs.org/api/stream.html#class-streamduplex) stream, Node.js [`Transform`](https://nodejs.org/api/stream.html#class-streamtransform) stream or web [`TransformStream`](https://developer.mozilla.org/en-US/docs/Web/API/TransformStream) can be used instead of a generator function.

Like generator functions, web `TransformStream` can be passed either directly or as a [`{transform}` plain object](api.md#transform-options). But `Duplex` and `Transform` must always be passed as a `{transform}` plain object.

The [`objectMode`](#object-mode) transform option can be used, but not the [`binary`](api.md#transformoptionsbinary) nor [`preserveNewlines`](api.md#transformoptionspreservenewlines) options.

```js
import {createGzip} from 'node:zlib';
import {execa} from 'execa';

const {stdout} = await execa({
	stdout: {transform: createGzip()},
	encoding: 'buffer',
})`npm run build`;
console.log(stdout); // `stdout` is compressed with gzip
```

```js
const {stdout} = await execa({
	stdout: new CompressionStream('gzip'),
	encoding: 'buffer',
})`npm run build`;
console.log(stdout); // `stdout` is compressed with gzip
```

## Combining

The [`stdin`](api.md#optionsstdin), [`stdout`](api.md#optionsstdout), [`stderr`](api.md#optionsstderr) and [`stdio`](api.md#optionsstdio) options can accept [an array of values](output.md#multiple-targets). While this is not specific to transforms, this can be useful with them too. For example, the following transform impacts the value printed by `'inherit'`.

```js
await execa({stdout: [transform, 'inherit']})`npm run build`;
```

This also allows using multiple transforms.

```js
await execa({stdout: [transform, otherTransform]})`npm run build`;
```

Or saving to archives.

```js
await execa({stdout: [new CompressionStream('gzip'), {file: './output.gz'}]})`npm run build`;
```

<hr>

[**Next**: 🔀 Piping multiple subprocesses](pipe.md)\
[**Previous**: 🤖 Binary data](binary.md)\
[**Top**: Table of contents](../readme.md#documentation)
````

## File: docs/typescript.md
````markdown
<picture>
	<source media="(prefers-color-scheme: dark)" srcset="../media/logo_dark.svg">
	<img alt="execa logo" src="../media/logo.svg" width="400">
</picture>
<br>

# 🤓 TypeScript

## Available types

The following types can be imported: [`ResultPromise`](api.md#return-value), [`Subprocess`](api.md#subprocess), [`Result`](api.md#result), [`ExecaError`](api.md#execaerror), [`Options`](api.md#options-1), [`StdinOption`](api.md#optionsstdin), [`StdoutStderrOption`](api.md#optionsstdout), [`TemplateExpression`](api.md#execacommand), [`Message`](api.md#subprocesssendmessagemessage-sendmessageoptions), [`VerboseObject`](api.md#verbose-object), [`ExecaMethod`](api.md#execaoptions), [`ExecaNodeMethod`](api.md#execanodeoptions) and [`ExecaScriptMethod`](api.md#options).

```ts
import {
	execa as execa_,
	ExecaError,
	type ResultPromise,
	type Result,
	type Options,
	type StdinOption,
	type StdoutStderrOption,
	type TemplateExpression,
	type Message,
	type VerboseObject,
	type ExecaMethod,
} from 'execa';

const execa: ExecaMethod = execa_({preferLocal: true});

const options: Options = {
	stdin: 'inherit' satisfies StdinOption,
	stdout: 'pipe' satisfies StdoutStderrOption,
	stderr: 'pipe' satisfies StdoutStderrOption,
	timeout: 1000,
	ipc: true,
	verbose(verboseLine: string, verboseObject: VerboseObject) {
		return verboseObject.type === 'duration' ? verboseLine : undefined;
	},
};
const task: TemplateExpression = 'build';
const message: Message = 'hello world';

try {
	const subprocess: ResultPromise = execa(options)`npm run ${task}`;
	await subprocess.sendMessage?.(message);
	const result: Result = await subprocess;
	console.log(result.stdout);
} catch (error) {
	if (error instanceof ExecaError) {
		console.error(error);
	}
}
```

## Synchronous execution

Their [synchronous](#synchronous-execution) counterparts are [`SyncResult`](api.md#result), [`ExecaSyncError`](api.md#execasyncerror), [`SyncOptions`](api.md#options-1), [`StdinSyncOption`](api.md#optionsstdin), [`StdoutStderrSyncOption`](api.md#optionsstdout), [`TemplateExpression`](api.md#execacommand), [`SyncVerboseObject`](api.md#verbose-object), [`ExecaSyncMethod`](api.md#execasyncoptions) and [`ExecaScriptSyncMethod`](api.md#syncoptions).

```ts
import {
	execaSync as execaSync_,
	ExecaSyncError,
	type SyncResult,
	type SyncOptions,
	type StdinSyncOption,
	type StdoutStderrSyncOption,
	type TemplateExpression,
	type SyncVerboseObject,
	type ExecaSyncMethod,
} from 'execa';

const execaSync: ExecaSyncMethod = execaSync_({preferLocal: true});

const options: SyncOptions = {
	stdin: 'inherit' satisfies StdinSyncOption,
	stdout: 'pipe' satisfies StdoutStderrSyncOption,
	stderr: 'pipe' satisfies StdoutStderrSyncOption,
	timeout: 1000,
	verbose(verboseLine: string, verboseObject: SyncVerboseObject) {
		return verboseObject.type === 'duration' ? verboseLine : undefined;
	},
};
const task: TemplateExpression = 'build';

try {
	const result: SyncResult = execaSync(options)`npm run ${task}`;
	console.log(result.stdout);
} catch (error) {
	if (error instanceof ExecaSyncError) {
		console.error(error);
	}
}
```

## Type inference

The above examples demonstrate those types. However, types are automatically inferred. Therefore, explicit types are only needed when defining functions that take those values as parameters.

```ts
import {
	execa as execa_,
	ExecaError,
	type Result,
	type VerboseObject,
} from 'execa';

const execa = execa_({preferLocal: true});

const printResultStdout = (result: Result) => {
	console.log('Stdout', result.stdout);
};

const options = {
	stdin: 'inherit',
	stdout: 'pipe',
	stderr: 'pipe',
	timeout: 1000,
	ipc: true,
	verbose(verboseLine: string, verboseObject: VerboseObject) {
		return verboseObject.type === 'duration' ? verboseLine : undefined;
	},
} as const;
const task = 'build';
const message = 'hello world';

try {
	const subprocess = execa(options)`npm run ${task}`;
	await subprocess.sendMessage(message);
	const result = await subprocess;
	printResultStdout(result);
} catch (error) {
	if (error instanceof ExecaError) {
		console.error(error);
	}
}
```

## Troubleshooting

### Supported version

The minimum supported TypeScript version is [`5.1.6`](https://github.com/microsoft/TypeScript/releases/tag/v5.1.6).

### ES modules

This package uses pure ES modules. Therefore the TypeScript's `--module` compiler option must be set to [`nodenext`](https://www.typescriptlang.org/docs/handbook/modules/reference.html#node16-nodenext) or [`preserve`](https://www.typescriptlang.org/docs/handbook/modules/reference.html#preserve). [More info.](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)

Otherwise, transpilation will work, but running the transpiled file will throw the following runtime error:

```
Error [ERR_REQUIRE_ESM]: require() of ES Module ... not supported.
```

Or:

```
ReferenceError: exports is not defined in ES module scope
```

### Strict unions

Several options are typed as unions of strings: [`stdin`](api.md#optionsstdin), [`stdout`](api.md#optionsstdout), [`stderr`](api.md#optionsstderr), [`encoding`](api.md#optionsencoding), [`serialization`](api.md#optionsserialization), [`verbose`](api.md#optionsverbose), [`killSignal`](api.md#optionskillsignal), [`from`](api.md#pipeoptionsfrom) and [`to`](api.md#pipeoptionsto). For example, the `serialization` option's type is `'advanced' | 'json'`, not `string`. Therefore the following example fails:

```ts
import {execa} from 'execa';

// Type error: "No overload matches this call"
const spawnSubprocess = (serialization: string) => execa({serialization})`npm run build`;

// Without `as const`, `options.serialization` is typed as `string`, not `'json'`
const options = {serialization: 'json'};
// Type error: "No overload matches this call"
await execa(options)`npm run build`;
```

But this works:

```ts
import {execa, type Options} from 'execa';

const spawnSubprocess = (serialization: Options['serialization']) => execa({serialization})`npm run build`;

const options = {serialization: 'json'} as const;
await execa(options)`npm run build`;
```

<hr>

[**Next**: 📔 API reference](api.md)\
[**Previous**: 🐭 Small packages](small.md)\
[**Top**: Table of contents](../readme.md#documentation)
````

## File: docs/windows.md
````markdown
<picture>
	<source media="(prefers-color-scheme: dark)" srcset="../media/logo_dark.svg">
	<img alt="execa logo" src="../media/logo.svg" width="400">
</picture>
<br>

# 📎 Windows

Although each OS implements subprocesses very differently, Execa makes them cross-platform, except in a few instances.

## Shebang

On Unix, executable files can use [shebangs](https://en.wikipedia.org/wiki/Shebang_(Unix)).

```js
import {execa} from 'execa';

// If script.js starts with #!/usr/bin/env node
await execa`./script.js`;

// Then, the above is a shortcut for:
await execa`node ./script.js`;
```

Although Windows does not natively support shebangs, Execa adds support for them.

## Signals

Only few [signals](termination.md#other-signals) work on Windows with Node.js: [`SIGTERM`](termination.md#sigterm), [`SIGKILL`](termination.md#sigkill), [`SIGINT`](https://en.wikipedia.org/wiki/Signal_(IPC)#SIGINT) and [`SIGQUIT`](termination.md#sigquit). Also, sending signals from other processes is [not supported](termination.md#signal-name-and-description). Finally, the [`forceKillAfterDelay`](api.md#optionsforcekillafterdelay) option [is a noop](termination.md#forceful-termination) on Windows.

## Asynchronous I/O

The default value for the [`stdin`](api.md#optionsstdin), [`stdout`](api.md#optionsstdout) and [`stderr`](api.md#optionsstderr) options is [`'pipe'`](output.md#stdout-and-stderr). This returns the output as [`result.stdout`](api.md#resultstdout) and [`result.stderr`](api.md#resultstderr) and allows for [manual streaming](streams.md#manual-streaming).

Instead of `'pipe'`, `'overlapped'` can be used instead to use [asynchronous I/O](https://learn.microsoft.com/en-us/windows/win32/fileio/synchronous-and-asynchronous-i-o) under-the-hood on Windows, instead of the default behavior which is synchronous. On other platforms, asynchronous I/O is always used, so `'overlapped'` behaves the same way as `'pipe'`.

## Escaping

Windows requires files and arguments to be quoted when they contain spaces, tabs, backslashes or double quotes. Unlike Unix, this is needed even when no [shell](shell.md) is used.

When not using any shell, Execa performs that quoting automatically. This ensures files and arguments are split correctly.

```js
await execa`npm run ${'task with space'}`;
```

When using a [shell](shell.md), the user must manually perform shell-specific quoting, on both Unix and Windows. When the [`shell`](api.md#optionsshell) option is `true`, [`cmd.exe`](https://en.wikipedia.org/wiki/Cmd.exe) is used on Windows and `sh` on Unix. Unfortunately, both shells use different quoting rules. With `cmd.exe`, this mostly involves double quoting arguments and prepending double quotes with a backslash.

```js
if (isWindows) {
	await execa({shell: true})`npm run ${'"task with space"'}`;
} else {
	await execa({shell: true})`npm run ${'\'task with space\''}`;
}
```

When using other Windows shells (such as PowerShell or WSL), Execa performs `cmd.exe`-specific automatic quoting by default. This is a problem since Powershell uses different quoting rules. This can be disabled using the [`windowsVerbatimArguments: true`](api.md#optionswindowsverbatimarguments) option.

```js
if (isWindows) {
	await execa({windowsVerbatimArguments: true})`wsl ...`;
}
```

## Console window

If the [`windowsHide`](api.md#optionswindowshide) option is `false`, the subprocess is run in a new console window. This is necessary to make [`SIGINT` work](https://github.com/nodejs/node/issues/29837) on Windows, and to prevent subprocesses not being cleaned up in [some specific situations](https://github.com/sindresorhus/execa/issues/433).

## UID and GID

By default, subprocesses are run using the current [user](https://en.wikipedia.org/wiki/User_identifier) and [group](https://en.wikipedia.org/wiki/Group_identifier). The [`uid`](api.md#optionsuid) and [`gid`](api.md#optionsgid) options can be used to set a different user or group.

However, since Windows uses a different permission model, those options throw.

<hr>

[**Next**: 🔍 Differences with Bash and zx](bash.md)\
[**Previous**: 🐛 Debugging](debugging.md)\
[**Top**: Table of contents](../readme.md#documentation)
````
