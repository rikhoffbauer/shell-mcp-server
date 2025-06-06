This file is a merged representation of the entire codebase, combined into a single document by Repomix.
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
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Security check has been disabled - content may contain sensitive information
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.github/
  workflows/
    ci.yml
  FUNDING.yml
bench/
  index.js
  package.json
src/
  index.js
test/
  index.js
  num.js
  unknown.js
.editorconfig
.gitignore
index.d.ts
license.md
package.json
readme.md
```

# Files

## File: .github/workflows/ci.yml
````yaml
name: CI

on: [push, pull_request]

jobs:
  test:
    name: Node.js v6
    runs-on: ubuntu-latest
    timeout-minutes: 3
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: 6

    - name: Install
      run: npm install

    - name: Tests
      run: npm test
````

## File: .github/FUNDING.yml
````yaml
github: lukeed
````

## File: bench/index.js
````javascript
const { Suite } = require('benchmark');
const previous = require('mri');

console.log('Load Times:');

console.time('nopt');
const nopt = require('nopt');
console.timeEnd('nopt');

console.time('yargs-parser');
const yargs = require('yargs-parser');
console.timeEnd('yargs-parser');

console.time('minimist');
const minimist = require('minimist');
console.timeEnd('minimist');

console.time('mri');
const mri = require('../lib');
console.timeEnd('mri');


console.log('\nBenchmark:');
const bench = new Suite();
const args = ['-b', '--bool', '--no-meep', '--multi=baz'];

bench
	.add('minimist     ', () => minimist(args))
	.add('mri (1.1.1)  ', () => previous(args))
	.add('mri          ', () => mri(args))
	.add('nopt         ', () => nopt(args))
	.add('yargs-parser ', () => yargs(args))
	.on('cycle', e => console.log(String(e.target)))
	.run();
````

## File: bench/package.json
````json
{
  "devDependencies": {
    "benchmark": "2.1.4",
    "minimist": "1.2.5",
    "mri": "1.1.1",
    "nopt": "5.0.0",
    "yargs-parser": "20.2.9"
  }
}
````

## File: src/index.js
````javascript
function toArr(any) {
	return any == null ? [] : Array.isArray(any) ? any : [any];
}

function toVal(out, key, val, opts) {
	var x, old=out[key], nxt=(
		!!~opts.string.indexOf(key) ? (val == null || val === true ? '' : String(val))
		: typeof val === 'boolean' ? val
		: !!~opts.boolean.indexOf(key) ? (val === 'false' ? false : val === 'true' || (out._.push((x = +val,x * 0 === 0) ? x : val),!!val))
		: (x = +val,x * 0 === 0) ? x : val
	);
	out[key] = old == null ? nxt : (Array.isArray(old) ? old.concat(nxt) : [old, nxt]);
}

export default function (args, opts) {
	args = args || [];
	opts = opts || {};

	var k, arr, arg, name, val, out={ _:[] };
	var i=0, j=0, idx=0, len=args.length;

	const alibi = opts.alias !== void 0;
	const strict = opts.unknown !== void 0;
	const defaults = opts.default !== void 0;

	opts.alias = opts.alias || {};
	opts.string = toArr(opts.string);
	opts.boolean = toArr(opts.boolean);

	if (alibi) {
		for (k in opts.alias) {
			arr = opts.alias[k] = toArr(opts.alias[k]);
			for (i=0; i < arr.length; i++) {
				(opts.alias[arr[i]] = arr.concat(k)).splice(i, 1);
			}
		}
	}

	for (i=opts.boolean.length; i-- > 0;) {
		arr = opts.alias[opts.boolean[i]] || [];
		for (j=arr.length; j-- > 0;) opts.boolean.push(arr[j]);
	}

	for (i=opts.string.length; i-- > 0;) {
		arr = opts.alias[opts.string[i]] || [];
		for (j=arr.length; j-- > 0;) opts.string.push(arr[j]);
	}

	if (defaults) {
		for (k in opts.default) {
			name = typeof opts.default[k];
			arr = opts.alias[k] = opts.alias[k] || [];
			if (opts[name] !== void 0) {
				opts[name].push(k);
				for (i=0; i < arr.length; i++) {
					opts[name].push(arr[i]);
				}
			}
		}
	}

	const keys = strict ? Object.keys(opts.alias) : [];

	for (i=0; i < len; i++) {
		arg = args[i];

		if (arg === '--') {
			out._ = out._.concat(args.slice(++i));
			break;
		}

		for (j=0; j < arg.length; j++) {
			if (arg.charCodeAt(j) !== 45) break; // "-"
		}

		if (j === 0) {
			out._.push(arg);
		} else if (arg.substring(j, j + 3) === 'no-') {
			name = arg.substring(j + 3);
			if (strict && !~keys.indexOf(name)) {
				return opts.unknown(arg);
			}
			out[name] = false;
		} else {
			for (idx=j+1; idx < arg.length; idx++) {
				if (arg.charCodeAt(idx) === 61) break; // "="
			}

			name = arg.substring(j, idx);
			val = arg.substring(++idx) || (i+1 === len || (''+args[i+1]).charCodeAt(0) === 45 || args[++i]);
			arr = (j === 2 ? [name] : name);

			for (idx=0; idx < arr.length; idx++) {
				name = arr[idx];
				if (strict && !~keys.indexOf(name)) return opts.unknown('-'.repeat(j) + name);
				toVal(out, name, (idx + 1 < arr.length) || val, opts);
			}
		}
	}

	if (defaults) {
		for (k in opts.default) {
			if (out[k] === void 0) {
				out[k] = opts.default[k];
			}
		}
	}

	if (alibi) {
		for (k in out) {
			arr = opts.alias[k] || [];
			while (arr.length > 0) {
				out[arr.shift()] = out[k];
			}
		}
	}

	return out;
}
````

## File: test/index.js
````javascript
const test = require('tape');
const fn = require('../lib');

test('parse args', t => {
	const res1 = fn(['--no-moo']);
	const res2 = fn(['-v', 'a', '-v', 'b', '-v', 'c']);
	t.deepEqual(res1, { moo: false, _: [] }, 'no');
	t.deepEqual(res2, { v: ['a', 'b', 'c'], _: [] }, 'multi');
	t.end();
});

test('comprehensive', t => {
	t.deepEqual(
		fn([
			'--name=meowmers',
			'bare',
			'-cats',
			'woo',
			'-h',
			'awesome',
			'--multi=quux',
			'--key',
			'value',
			'-b',
			'--bool',
			'--no-meep',
			'--multi=baz',
			'--number=-123',
			'--zeronum=0',
			'--',
			'--not-a-flag',
			'eek'
		]),
		{
			c: true,
			a: true,
			t: true,
			s: 'woo',
			h: 'awesome',
			b: true,
			bool: true,
			key: 'value',
			multi: ['quux', 'baz'],
			meep: false,
			name: 'meowmers',
			number: -123,
			zeronum: 0,
			_: ['bare', '--not-a-flag', 'eek']
		}
	);
	t.end();
});

test('flag boolean', t => {
	const res = fn(['-t', 'moo'], { boolean: 't' });
	t.deepEqual(res, { t: true, _: ['moo'] });
	t.deepEqual(typeof res.t, 'boolean');
	t.end();
});

test('flag boolean value', t => {
	const res = fn(['--verbose', 'false', 'moo', '-t', 'true'], {
		boolean: ['t', 'verbose'],
		default: { verbose: true }
	});

	t.deepEqual(res, { verbose: false, t: true, _: ['moo'] });

	t.deepEqual(typeof res.verbose, 'boolean');
	t.deepEqual(typeof res.t, 'boolean');
	t.end();
});

test('flag default value', t => {
	const res = fn(['--foo'], {
		default: { bar: true }
	});
	t.deepEqual(res, { foo: true, bar: true, _: [] });
	t.equal(typeof res.foo, 'boolean');
	t.equal(typeof res.bar, 'boolean');
	t.end();
});

test('flag default and alias', t => {
	const res = fn(['--foo'], {
		default: { bar: true },
		alias: { bar: 'b' }
	});
	t.deepEqual(res, { foo: true, bar: true, b: true, _: [] });
	t.equal(typeof res.foo, 'boolean');
	t.equal(typeof res.bar, 'boolean');
	t.equal(typeof res.b, 'boolean');
	t.end();
});

test('flag default string w/ alias', t => {
	t.deepEqual(
		fn(['--arg', '01'], {
			alias: { a: ['arg'] },
			default: { arg: '' },
		}),
		{ _: [], arg: '01', a: '01' }
	);

	t.deepEqual(
		fn(['-a', '01'], {
			alias: { a: ['arg'] },
			default: { arg: '' },
		}),
		{ _: [], arg: '01', a: '01' }
	);

	// ---

	t.deepEqual(
		fn(['-a', '01'], {
			alias: { arg: ['a'] },
			default: { a: '' },
		}),
		{ _: [], arg: '01', a: '01' }
	);

	t.deepEqual(
		fn(['--arg', '01'], {
			alias: { arg: ['a'] },
			default: { a: '' },
		}),
		{ _: [], arg: '01', a: '01' }
	);

	// ---

	t.deepEqual(
		fn(['-a', '01'], {
			alias: { arg: ['a'] },
			default: { arg: '' },
		}),
		{ _: [], arg: '01', a: '01' }
	);

	t.end();
});

// test('newlines in params' , t => {
//    var args = fn(['-s', "X\nX"])
//    t.deepEqual(args, { _ : [], s : "X\nX" });

//    // reproduce in bash:
//    // VALUE="new
//    // line"
//    // node program.js --s="$VALUE"
//    args = fn(["--s=X\nX"])
//    t.deepEqual(args, { _ : [], s : "X\nX" });
//    t.end();
// });

test('strings', t => {
	const s = fn(['-s', '0001234'], { string: 's' }).s;
	t.equal(typeof s, 'string');
	t.equal(s, '0001234');

	const x = fn(['-x', '56'], { string: 'x' }).x;
	t.equal(typeof x, 'string');
	t.equal(x, '56');
	t.end();
});

test('stringArgs', t => {
	const s = fn(['  ', '  '], { string: '_' })._;
	t.same(s.length, 2);
	t.same(typeof s[0], 'string');
	t.same(s[0], '  ');
	t.same(typeof s[1], 'string');
	t.same(s[1], '  ');
	t.end();
});

test('empty strings', t => {
	const s = fn(['-s'], { string: 's' }).s;
	t.equal(typeof s, 'string');
	t.equal(s, '');

	const str = fn(['--str'], { string: 'str' }).str;
	t.equal(typeof str, 'string');
	t.equal(str, '');

	const letters = fn(['-art'], { string: ['a', 't'] });

	t.equal(letters.r, true);
	t.equal(letters.a, '');
	t.equal(letters.t, '');

	t.end();
});

test('string and alias', t => {
	const x = fn(['--str', '000123'], {
		string: 's',
		alias: { s: 'str' }
	});

	t.equal(x.str, '000123');
	t.equal(typeof x.str, 'string');
	t.equal(x.s, '000123');
	t.equal(typeof x.s, 'string');

	const y = fn(['-s', '000123'], {
		string: 'str',
		alias: { str: 's' }
	});

	t.equal(typeof y.str, 'string');
	t.equal(typeof y.s, 'string');
	t.equal(y.str, '000123');
	t.equal(y.s, '000123');
	t.end();
});

// test('slashBreak', t => {
//    t.same(
//        fn(['-I/foo/bar/baz']),
//        { I : '/foo/bar/baz', _ : [] }
//    );
//    t.same(
//        fn(['-xyz/foo/bar/baz']),
//        { x : true, y : true, z : '/foo/bar/baz', _ : [] }
//    );
//    t.end();
// });

test('alias', t => {
	const argv = fn(['-f', '11', '--zoom', '55'], {
		alias: { z: 'zoom' }
	});
	t.equal(argv.zoom, 55);
	t.equal(argv.z, argv.zoom);
	t.equal(argv.f, 11);
	t.end();
});

test('multiAlias', t => {
	const argv = fn(['-f', '11', '--zoom', '55'], {
		alias: { z: ['zm', 'zoom'] }
	});
	t.equal(argv.zoom, 55);
	t.equal(argv.z, argv.zoom);
	t.equal(argv.z, argv.zm);
	t.equal(argv.f, 11);
	t.end();
});

// test('nested dotted objects', t => {
//    const argv = fn([
//        '--foo.bar', '3', '--foo.baz', '4',
//        '--foo.quux.quibble', '5', '--foo.quux.o_O',
//        '--beep.boop'
//   ]);

//    t.same(argv.foo, {
//        bar : 3,
//        baz : 4,
//        quux : {
//            quibble : 5,
//            o_O : true
//        }
//    });
//    t.same(argv.beep, { boop : true });
//    t.end();
// });

test('parse with modifier functions' , t => {
	const argv = fn(['-b', '123'], { boolean:'b' });
	t.same(argv, { b:true, _:[123] });
	t.end();
});

test('flag default null value', t => {
	const argv = fn(['--foo'], { default: { bar:null }});
	t.same(argv, { foo:true, bar:null, _:[] });
	t.end();
});

test('flag boolean with default', t => {
	const foo = fn(['-t'], { default: { t:true }});
	t.same(foo, { t:true, _:[] });
	t.is(typeof foo.t, 'boolean');

	const bar = fn(['-t'], { default: { t:false }});
	t.same(bar, { t:true, _:[] });
	t.is(typeof bar.t, 'boolean');

	const baz = fn(['--no-two'], { default: { two:true }});
	t.same(baz, { two:false, _:[] });
	t.is(typeof baz.two, 'boolean');
	t.end();
});

test('flag boolean with default & alias', t => {
	const alias = { t: ['tt'], two:['toot'] };

	const foo = fn(['-t'], { alias, default: { t:true }});
	t.same(foo, { t:true, tt:true, _:[] });
	t.is(typeof foo.t, 'boolean');

	const bar = fn(['-t'], { alias, default: { t:false }});
	t.same(bar, { t:true, tt:true, _:[] });
	t.is(typeof bar.t, 'boolean');

	const baz = fn(['--no-two'], { alias, default: { two:true }});
	t.same(baz, { two:false, toot:false, _:[] });
	t.is(typeof baz.two, 'boolean');

	t.end();
});

test('flag boolean with default string & alias', t => {
	const foo = fn(['-t'], { default: { t:'hi' }});
	t.same(foo, { t:'', _:[] });
	t.is(typeof foo.t, 'string');

	const bar = fn(['-t'], { alias:{ t:'tt' }, default: { t:'boo' }});
	t.same(bar, { t:'', tt:'', _:[] });
	t.is(typeof bar.t, 'string');

	// --no-* overrides
	const baz = fn(['--no-two'], { default: { two:'hi' }});
	t.same(baz, { two:false, _:[] });
	t.is(typeof baz.two, 'boolean');
	t.end();
});
````

## File: test/num.js
````javascript
const test = require('tape');
const fn = require('../lib');

test('nums', t => {
	const argv = fn([
		'-x', '1234',
		'-y', '5.67',
		'-z', '1e7',
		'-w', '10f',
		'--hex', '0xdeadbeef',
		'789'
	]);
	t.same(argv, {
		x : 1234,
		y : 5.67,
		z : 1e7,
		w : '10f',
		hex : 0xdeadbeef,
		_ : ['789']
	});
	t.is(typeof argv.x, 'number');
	t.is(typeof argv.y, 'number');
	t.is(typeof argv.z, 'number');
	t.is(typeof argv.w, 'string');
	t.is(typeof argv.hex, 'number');
	t.is(typeof argv._[0], 'string');
	t.end();
});

test('already a number', t => {
	const argv = fn(['-x', 1234, 789]);
	t.same(argv, { x:1234, _:[789] });
	t.is(typeof argv._[0], 'number');
	t.is(typeof argv.x, 'number');
	t.end();
});
````

## File: test/unknown.js
````javascript
const test = require('tape');
const fn = require('../lib');

test('boolean and alias is not unknown', t => {
	const unknown = [];
	const unknownFn = arg => (unknown.push(arg), false);
	const aliased = ['-h', 'true', '--derp', 'true'];
	const regular = ['--herp', 'true', '-d', 'true'];
	const opts = {
		alias: { h: 'herp' },
		boolean: 'h',
		unknown: unknownFn
	};
	const aliasedArgv = fn(aliased, opts);
	const propertyArgv = fn(regular, opts);

	t.same(unknown, ['--derp', '-d']);
	t.end();
});

// test('flag boolean true any double hyphen argument is not unknown', t => {
// 	const unknown = [];
// 	const unknownFn = arg => (unknown.push(arg),false);

// 	const argv = fn(['--honk', '--tacos=good', 'cow', '-p', '55'], { boolean: true, unknown: unknownFn });
// 	t.same(unknown, ['--tacos', 'cow', '-p']);
// 	t.same(argv, { honk: true, _: [] });
// 	t.end();
// });

test('string and alias is not unknown', t => {
	const unknown = [];
	const unknownFn = arg => (unknown.push(arg), false);
	// const unknownFn = arg => console.log('unknown arg', arg);

	const aliased = ['-h', 'hello', '--derp', 'goodbye'];
	const regular = ['--herp', 'hello', '-d', 'moon'];
	const opts = {
		alias: { h: 'herp' },
		string: 'h',
		unknown: unknownFn
	};
	const aliasedArgv = fn(aliased, opts);
	const propertyArgv = fn(regular, opts);

	t.same(unknown, ['--derp', '-d']);
	t.end();
});

test('default and alias is not unknown', t => {
	const unknown = [];
	const unknownFn = arg => (unknown.push(arg), false);

	const aliased = ['-h', 'hello'];
	const regular = ['--herp', 'hello'];
	const opts = {
		default: { h: 'bar' },
		alias: { h: 'herp' },
		unknown: unknownFn
	};
	const aliasedArgv = fn(aliased, opts);
	const propertyArgv = fn(regular, opts);

	t.same(unknown, []);
	t.end();
	unknownFn(); // exercise fn for 100% coverage
});

// test('value following -- is not unknown', t => {
// 	const unknown = [];
// 	const unknownFn = arg => (unknown.push(arg),false);

// 	const aliased = [ '--bad', '--', 'good', 'arg' ];
// 	const opts = { '--': true, unknown: unknownFn };
// 	const argv = fn(aliased, opts);

// 	t.same(unknown, ['--bad']);
// 	t.same(argv, { '--': ['good', 'arg'], '_': [] });
// 	t.end();
// });
````

## File: .editorconfig
````
root = true

[*]
indent_size = 2
indent_style = tab
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.{json,yml}]
indent_style = space
````

## File: .gitignore
````
node_modules
.DS_Store
*-lock.*
*.lock
*.log

/lib
````

## File: index.d.ts
````typescript
type Dict<T> = Record<string, T>;
type Arrayable<T> = T | T[];
type Default = Dict<any>;

declare function mri<T=Default>(args?: string[], options?: mri.Options): mri.Argv<T>;

declare namespace mri {
	export interface Options {
		boolean?: Arrayable<string>;
		string?: Arrayable<string>;
		alias?: Dict<Arrayable<string>>;
		default?: Dict<any>;
		unknown?(flag: string): void;
	}

	export type Argv<T=Default> = T & {
		_: string[];
	}
}

export = mri;
````

## File: license.md
````markdown
The MIT License (MIT)

Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
````

## File: package.json
````json
{
  "name": "mri",
  "version": "1.2.0",
  "description": "Quickly scan for CLI flags and arguments",
  "repository": "lukeed/mri",
  "module": "lib/index.mjs",
  "main": "lib/index.js",
  "types": "index.d.ts",
  "license": "MIT",
  "files": [
    "*.d.ts",
    "lib"
  ],
  "author": {
    "name": "Luke Edwards",
    "email": "luke.edwards05@gmail.com",
    "url": "https://lukeed.com"
  },
  "engines": {
    "node": ">=4"
  },
  "scripts": {
    "build": "bundt",
    "bench": "node bench",
    "pretest": "npm run build",
    "test": "tape test/*.js | tap-spec"
  },
  "keywords": [
    "argv",
    "arguments",
    "cli",
    "minimist",
    "options",
    "optimist",
    "parser",
    "args"
  ],
  "devDependencies": {
    "bundt": "1.0.2",
    "tap-spec": "4.1.2",
    "tape": "4.13.3"
  }
}
````

## File: readme.md
````markdown
# mri [![CI](https://github.com/lukeed/mri/workflows/CI/badge.svg?branch=master&event=push)](https://github.com/lukeed/mri/actions) [![licenses](https://licenses.dev/b/npm/mri)](https://licenses.dev/npm/mri)

> Quickly scan for CLI flags and arguments

This is a [fast](#benchmarks) and lightweight alternative to [`minimist`](https://github.com/substack/minimist) and [`yargs-parser`](https://github.com/yargs/yargs-parser).

It only exists because I find that I usually don't need most of what `minimist` and `yargs-parser` have to offer. However, `mri` is similar _enough_ that it might function as a "drop-in replacement" for you, too!

See [Comparisons](#comparisons) for more info.

## Install

```sh
$ npm install --save mri
```

## Usage

```sh
$ demo-cli --foo --bar=baz -mtv -- hello world
```

```js
const mri = require('mri');

const argv = process.argv.slice(2);

mri(argv);
//=> { _: ['hello', 'world'], foo:true, bar:'baz', m:true, t:true, v:true }

mri(argv, { boolean:['bar'] });
//=> { _: ['baz', 'hello', 'world'], foo:true, bar:true, m:true, t:true, v:true }

mri(argv, {
  alias: {
    b: 'bar',
    foo: ['f', 'fuz']
  }
});
//=> { _: ['hello', 'world'], foo:true, f:true, fuz:true, b:'baz', bar:'baz', m:true, t:true, v:true }
```

## API

### mri(args, options)
Return: `Object`

#### args
Type: `Array`<br>
Default: `[]`

An array of arguments to parse. For CLI usage, send `process.argv.slice(2)`. See [`process.argv`](https://nodejs.org/docs/latest/api/process.html#process_process_argv) for info.

#### options.alias
Type: `Object`<br>
Default: `{}`

An object of keys whose values are `String`s or `Array<String>` of aliases. These will be added to the parsed output with matching values.

#### options.boolean
Type: `Array|String`<br>
Default: `[]`

A single key (or array of keys) that should be parsed as `Boolean`s.

#### options.default
Type: `Object`<br>
Default: `{}`

An `key:value` object of defaults. If a default is provided for a key, its type (`typeof`) will be used to cast parsed arguments.

```js
mri(['--foo', 'bar']);
//=> { _:[], foo:'bar' }

mri(['--foo', 'bar'], {
  default: { foo:true, baz:'hello', bat:42 }
});
//=> { _:['bar'], foo:true, baz:'hello', bat:42 }
```

> **Note:** Because `--foo` has a default of `true`, its output is cast to a Boolean. This means that `foo=true`, making `'bar'` an extra argument (`_` key).

#### options.string
Type: `Array|String`<br>
Default: `[]`

A single key (or array of keys) that should be parsed as `String`s.

#### options.unknown
Type: `Function`<br>
Default: `undefined`

Callback that is run when a parsed flag has not been defined as a known key or alias. Its only parameter is the unknown flag itself; eg `--foobar` or `-f`.

Once an unknown flag is encountered, parsing will terminate, regardless of your return value.

> **Note:** `mri` _only_ checks for unknown flags if `options.unknown` **and** `options.alias` are populated. Otherwise, everything will be accepted.


## Comparisons

#### minimist

- `mri` is 5x faster (see [benchmarks](#benchmarks))
- Numerical values are cast as `Number`s when possible
  - A key (and its aliases) will always honor `opts.boolean` or `opts.string`
- Short flag groups are treated as `Boolean`s by default:
    ```js
    minimist(['-abc', 'hello']);
    //=> { _:[], a:'', b:'', c:'hello' }

    mri(['-abc', 'hello']);
    //=> { _:[], a:true, b:true, c:'hello' }
    ```
- The `opts.unknown` behaves differently:
  - Unlike `minimist`, `mri` will not continue continue parsing after encountering an unknown flag
- Missing `options`:
  - `opts.stopEarly`
  - `opts['--']`
- Ignores newlines (`\n`) within args (see [test](https://github.com/substack/minimist/blob/master/test/parse.js#L69-L80))
- Ignores slashBreaks within args (see [test](https://github.com/substack/minimist/blob/master/test/parse.js#L147-L157))
- Ignores dot-nested flags (see [test](https://github.com/substack/minimist/blob/master/test/parse.js#L180-L197))

#### yargs-parser

- `mri` is 40x faster (see [benchmarks](#benchmarks))
- Numerical values are cast as `Number`s when possible
  - A key (and its aliases) will always honor `opts.boolean` or `opts.string`
- Missing `options`:
  - `opts.array`
  - `opts.config`
  - `opts.coerce`
  - `opts.count`
  - `opts.envPrefix`
  - `opts.narg`
  - `opts.normalize`
  - `opts.configuration`
  - `opts.number`
  - `opts['--']`
- Missing [`parser.detailed()`](https://github.com/yargs/yargs-parser#requireyargs-parserdetailedargs-opts) method
- No [additional configuration](https://github.com/yargs/yargs-parser#configuration) object
- Added [`options.unknown`](#optionsunknown) feature


## Benchmarks

> Running Node.js v10.13.0

```
Load Times:
  nopt          3.179ms
  yargs-parser  2.137ms
  minimist      0.746ms
  mri           0.517ms

Benchmark:
  minimist      x    328,747 ops/sec ±1.09% (89 runs sampled)
  mri           x  1,622,801 ops/sec ±0.94% (92 runs sampled)
  nopt          x    888,223 ops/sec ±0.22% (92 runs sampled)
  yargs-parser  x     30,538 ops/sec ±0.81% (91 runs sampled)
```

## License

MIT © [Luke Edwards](https://lukeed.com)
````
