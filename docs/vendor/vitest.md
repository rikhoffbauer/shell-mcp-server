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
  .vitepress/
    components/
      ArrowDown.vue
      BlogIndex.vue
      Box.vue
      Contributors.vue
      CourseLink.vue
      FeaturesList.vue
      HomePage.vue
      ListItem.vue
      NonProjectOption.vue
      Version.vue
    scripts/
      cli-generator.ts
      fetch-avatars.ts
      pwa.ts
      transformHead.ts
    style/
      main.css
      vars.css
    theme/
      index.ts
      pwa.ts
    blog.data.ts
    components.d.ts
    config.ts
    contributor-names.json
    contributors.ts
    meta.ts
    sponsors.ts
  advanced/
    api/
      import-example.md
      index.md
      plugin.md
      reporters.md
      test-case.md
      test-collection.md
      test-module.md
      test-project.md
      test-specification.md
      test-suite.md
      vitest.md
    guide/
      tests.md
    metadata.md
    pool.md
    reporters.md
    runner.md
  api/
    assert-type.md
    assert.md
    expect-typeof.md
    expect.md
    index.md
    mock.md
    vi.md
  blog/
    vitest-3-2.md
    vitest-3.md
  config/
    index.md
  guide/
    browser/
      assertion-api.md
      commands.md
      config.md
      context.md
      index.md
      interactivity-api.md
      locators.md
      multiple-setups.md
      playwright.md
      webdriverio.md
      why.md
    examples/
      projects-workspace.md
      promise-done.md
    cli-generated.md
    cli.md
    common-errors.md
    comparisons.md
    coverage.md
    debugging.md
    environment.md
    extending-matchers.md
    features.md
    filtering.md
    ide.md
    improving-performance.md
    in-source.md
    index.md
    migration.md
    mocking.md
    parallelism.md
    profiling-test-performance.md
    projects.md
    reporters.md
    snapshot.md
    test-annotations.md
    test-context.md
    testing-types.md
    ui.md
    using-plugins.md
    why.md
  public/
    bit.svg
    bolt.svg
    infosupport.svg
    logo-shadow.svg
    logo.svg
    netlify.svg
    nuxtlabs.svg
    robots.txt
    stackblitz.svg
    vital.svg
    vite.svg
    voidzero.svg
    zammad.svg
  blog.md
  index.md
  package.json
  pwa-assets.config.ts
  team.md
  tsconfig.json
  vite.config.ts
```

# Files

## File: docs/.vitepress/components/ArrowDown.vue
````vue
<template>
  <span class="arrow-down">
    <span class="arrow-line" />
    <span class="arrow-head" />
  </span>
</template>

<style scoped>
.arrow-down {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.arrow-line {
  height: 1rem;
  width: 0.2rem;
  background-color: var(--vp-c-brand-1);
}

.arrow-head {
  height: 1rem;
  width: 1rem;
  background-color: var(--vp-c-brand-1);
  clip-path: polygon(100% 0, 0 0, 50% 100%);
}
</style>
````

## File: docs/.vitepress/components/BlogIndex.vue
````vue
<script setup lang="ts">
import { data as posts } from '../blog.data'

function getDateTime(time: number) {
  return new Date(time).toISOString()
}
</script>

<template>
  <ul class="blog-list">
    <li v-for="post of posts" :key="post.url" class="blog-entry">
      <article>
        <time :datetime="getDateTime(post.date.time)">{{
          post.date.string
        }}</time>
        <h2 class="title">
          <a :href="post.url">{{ post.title }}</a>
        </h2>
      </article>
    </li>
  </ul>
</template>

<style scoped>
.blog-list {
  list-style-type: none;
  padding: 0;
}
.blog-entry {
  margin-top: 3em;
  border-bottom: 1px solid var(--vp-c-divider);
}
.blog-entry time {
  font-size: 14px;
}
.title {
  border: none;
  margin-top: 0;
  padding-top: 0;
  font-size: 22px;
}
.title a {
  font-weight: 600;
  text-decoration: none;
}
</style>
````

## File: docs/.vitepress/components/Box.vue
````vue
<template>
  <span class="box">
    <slot />
  </span>
</template>

<style scoped>
.box {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 0.1rem solid var(--vp-c-brand-1);
  border-radius: 15px;
  padding: 1rem 2rem;
}
</style>
````

## File: docs/.vitepress/components/Contributors.vue
````vue
<script setup lang="ts">
import { contributors } from '../contributors'
</script>

<template>
  <div flex="~ wrap gap2" justify-center>
    <a v-for="{ name, avatar } of contributors" :key="name" :href="`https://github.com/${name}`" m-0 rel="noopener noreferrer" :aria-label="`${name} on GitHub`">
      <img loading="lazy" decoding="async" :src="avatar" width="50" height="50" rounded-full h-12 w-12 :alt="`${name}'s avatar`">
    </a>
  </div>
</template>
````

## File: docs/.vitepress/components/CourseLink.vue
````vue
<script setup lang="ts">
defineProps<{
  href: string
}>()
</script>

<template>
  <a :href="href" target="_blank" bg-green:10 px4 py3 rounded block mt2 flex items-center gap2>
    <div i-carbon:play-filled flex-none text-lg />
    <slot />
  </a>
</template>
````

## File: docs/.vitepress/components/FeaturesList.vue
````vue
<template>
  <ul
    class="features-list"
    dir="auto"
    flex="~ col gap2 md:gap-3"
  >
    <ListItem><a target="_blank" href="https://vitejs.dev" rel="noopener noreferrer">Vite</a>'s config, transformers, resolvers, and plugins</ListItem>
    <ListItem>Use the same setup from your app to run the tests!</ListItem>
    <ListItem>Smart & instant watch mode, like HMR for tests!</ListItem>
    <ListItem>Component testing for Vue, React, Svelte, Lit, Marko and more</ListItem>
    <ListItem>Out-of-the-box TypeScript / JSX support</ListItem>
    <ListItem>ESM first, top level await</ListItem>
    <ListItem>Workers multi-threading via <a target="_blank" href="https://github.com/tinylibs/tinypool" rel="noopener noreferrer">Tinypool</a></ListItem>
    <ListItem>Benchmarking support with <a target="_blank" href="https://github.com/tinylibs/tinybench" rel="noopener noreferrer">Tinybench</a></ListItem>
    <ListItem>Filtering, timeouts, concurrent for suite and tests</ListItem>
    <ListItem><a href="/guide/projects">Projects</a> support</ListItem>
    <ListItem>
      <a href="/guide/snapshot">
        Jest-compatible Snapshot
      </a>
    </ListItem>
    <ListItem><a target="_blank" href="https://www.chaijs.com/" rel="noopener noreferrer">Chai</a> built-in for assertions + <a target="_blank" href="https://jestjs.io/docs/expect" rel="noopener noreferrer">Jest expect</a> compatible APIs</ListItem>
    <ListItem><a target="_blank" href="https://github.com/tinylibs/tinyspy" rel="noopener noreferrer">Tinyspy</a> built-in for mocking</ListItem>
    <ListItem><a target="_blank" href="https://github.com/capricorn86/happy-dom" rel="noopener noreferrer">happy-dom</a> or <a target="_blank" href="https://github.com/jsdom/jsdom" rel="noopener noreferrer">jsdom</a> for DOM mocking</ListItem>
    <ListItem><a href="https://vitest.dev/guide/browser/" rel="noopener noreferrer">Browser Mode</a> for running component tests in the browser</ListItem>
    <ListItem>Code coverage via <a target="_blank" href="https://v8.dev/blog/javascript-code-coverage" rel="noopener noreferrer">v8</a> or <a target="_blank" href="https://istanbul.js.org/" rel="noopener noreferrer">istanbul</a></ListItem>
    <ListItem>Rust-like <a href="/guide/in-source">in-source testing</a></ListItem>
    <ListItem>Type Testing via <a target="_blank" href="https://github.com/mmkal/expect-type" rel="noopener noreferrer">expect-type</a></ListItem>
    <ListItem>Sharding Support</ListItem>
    <ListItem>Reporting Uncaught Errors</ListItem>
  </ul>
</template>

<style>
.features-list li {
  list-style: none;
  display: flex;
  gap: 0.4rem;
  margin: 0;
}

.features-list {
  padding: 0;
}
</style>
````

## File: docs/.vitepress/components/HomePage.vue
````vue
<script setup lang="ts">
import { VPHomeSponsors } from 'vitepress/theme'
import { sponsors } from '../sponsors'
</script>

<template>
  <div class="content">
    <div class="content-container">
      <main class="main">
        <VPHomeSponsors
          v-if="sponsors"
          message="Vitest is free and open source, made possible by wonderful sponsors."
          :data="sponsors"
        />
        <div class="action">
          <a
            class="sponsor"
            href="https://github.com/sponsors/vitest-dev"
            target="_blank"
            rel="noreferrer"
          >
            Sponsor Vitest
          </a>
        </div>
        <p flex flex-col items-center mt-10 class="text-center opacity-75">
          <a href="https://www.netlify.com" rel="noopener noreferrer">
            <img src="/netlify.svg" alt="Deploys by Netlify" width="114" height="151" decoding="async">
          </a>
        </p>
      </main>
    </div>
  </div>
</template>

<style scoped>
.action {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding-top: 4rem;
}

.sponsor {
  /* .VPButton */
  display: inline-block;
  border: 1px solid transparent;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition:
    color 0.25s,
    border-color 0.25s,
    background-color 0.25s;
  /* .VPButton.medium */
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
  /* .VPButton.sponsor */
  border-color: var(--vp-button-sponsor-border);
  color: var(--vp-button-sponsor-text);
  background-color: var(--vp-button-sponsor-bg);
}

.sponsor:hover {
  /* .VPButton.sponsor:hover */
  border-color: var(--vp-button-sponsor-hover-border);
  color: var(--vp-button-sponsor-hover-text);
  background-color: var(--vp-button-sponsor-hover-bg);
}
</style>
````

## File: docs/.vitepress/components/ListItem.vue
````vue
<script setup lang="ts">
import { until, useElementVisibility } from '@vueuse/core'
import { computed, effectScope, onMounted, ref } from 'vue'

const el = ref<HTMLDivElement>()
const state = ref(0)

function reset() {
  state.value = 0
  setTimeout(() => {
    state.value = Math.random() > 0.9 ? 2 : 1
    if (state.value === 2) {
      setTimeout(reset, 1000)
    }
  }, Math.round(Math.random() * 3000) + 400)
}

const color = computed(() => {
  return {
    '--vp-c-brand-1': state.value === 1
      ? '#66ba1c'
      : state.value === 2
        ? 'rgba(248, 113, 113)'
        : 'rgba(250, 204, 21)',
  } as any
})

const scope = effectScope()

const visibility = scope.run(() => useElementVisibility(el))

onMounted(async () => {
  await until(visibility).toBe(true)

  scope.stop()
  reset()
})
</script>

<template>
  <li :style="color">
    <div
      ref="el"
      relative
      m="ya r-1"
      w-5
      h-5
      flex-none
      align-mid
    >
      <div absolute transition duration-300 :class="state ? 'flip' : ''">
        <div i-carbon:circle-dash animate-spin animate-2s text-yellow4 />
      </div>
      <div absolute transition duration-300 :class="state === 2 ? '' : 'flip'">
        <div i-carbon:close-outline text-red4 />
      </div>
      <div absolute transition duration-300 :class="state === 1 ? '' : 'flip'">
        <div i-carbon:checkmark-outline class="text-$vp-c-brand-1" />
      </div>
    </div>
    <div>
      <slot />
    </div>
  </li>
</template>

<style>
.flip {
  transform: rotateY(90deg);
}
</style>
````

## File: docs/.vitepress/components/NonProjectOption.vue
````vue
<template>
  <span
    text-sm
    text-orange
    cursor-not-allowed
    title="Not supported in workspace project config"
  >
    *
  </span>
</template>
````

## File: docs/.vitepress/components/Version.vue
````vue
<script setup lang="ts">
import { VPBadge } from 'vitepress/theme'
</script>

<template>
  <VPBadge type="info">
    <slot />+
  </VPBadge>
</template>
````

## File: docs/.vitepress/scripts/cli-generator.ts
````typescript
import type { CLIOption, CLIOptions } from '../../../packages/vitest/src/node/cli/cli-config'
import { writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { cliOptionsConfig } from '../../../packages/vitest/src/node/cli/cli-config'

const docsDir = resolve(dirname(fileURLToPath(import.meta.url)), '../..')
const cliTablePath = resolve(docsDir, './guide/cli-generated.md')

const nonNullable = <T>(value: T): value is NonNullable<T> => value !== null && value !== undefined

const skipCli = new Set([
  'mergeReports',
  'changed',
  'shard',
])

const skipConfig = new Set([
  'config',
  'api.port',
  'api.host',
  'api.strictPort',
  'coverage.watermarks.statements',
  'coverage.watermarks.lines',
  'coverage.watermarks.branches',
  'coverage.watermarks.functions',
  'coverage.thresholds.statements',
  'coverage.thresholds.branches',
  'coverage.thresholds.functions',
  'coverage.thresholds.lines',
  'standalone',
  'clearScreen',
  'configLoader',
  'color',
  'run',
  'hideSkippedTests',
  'dom',
])

function resolveOptions(options: CLIOptions<any>, parentName?: string) {
  return Object.entries(options).flatMap(
    ([subcommandName, subcommandConfig]) => resolveCommand(
      parentName ? `${parentName}.${subcommandName}` : subcommandName,
      subcommandConfig,
    ),
  ).filter(nonNullable)
}

function resolveCommand(name: string, config: CLIOption<any> | null): any {
  if (!config || skipCli.has(name)) {
    return null
  }

  let title = '`'
  if (config.shorthand) {
    title += `-${config.shorthand}, `
  }
  title += `--${config.alias || name}`
  if ('argument' in config) {
    title += ` ${config.argument}`
  }
  title += '`'
  if ('subcommands' in config && config.subcommands) {
    return resolveOptions(config.subcommands, name)
  }

  return {
    title: name,
    cli: title,
    description: config.description,
  }
}

const options = resolveOptions(cliOptionsConfig)

const template = options.map((option) => {
  const title = option.title
  const cli = option.cli
  const config = skipConfig.has(title) ? '' : `[${title}](${title.includes('browser.') ? '/guide/browser/config' : '/config/'}#${title.toLowerCase().replace(/\./g, '-')})`
  return `### ${title}\n\n- **CLI:** ${cli}\n${config ? `- **Config:** ${config}\n` : ''}\n${option.description}\n`
}).join('\n')

writeFileSync(cliTablePath, template, 'utf-8')
````

## File: docs/.vitepress/scripts/fetch-avatars.ts
````typescript
import { existsSync, promises as fsp } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'pathe'
import { teamEmeritiMembers, teamMembers } from '../contributors'

const docsDir = resolve(dirname(fileURLToPath(import.meta.url)), '../..')
const dirAvatars = resolve(docsDir, 'public/user-avatars/')
const dirSponsors = resolve(docsDir, 'public/sponsors/')

async function download(url: string, fileName: string) {
  if (existsSync(fileName)) {
    return
  }

  console.log('downloading', fileName)
  try {
    const image = await (await fetch(url)).arrayBuffer()
    await fsp.writeFile(fileName, Buffer.from(image))
  }
  catch {}
}

async function fetchAvatars() {
  if (!existsSync(dirAvatars)) {
    await fsp.mkdir(dirAvatars, { recursive: true })
  }

  await Promise.all([...teamEmeritiMembers, ...teamMembers].map(c => c.github).map(name => download(`https://github.com/${name}.png?size=100`, join(dirAvatars, `${name}.png`))))
}

async function fetchSponsors() {
  if (!existsSync(dirSponsors)) {
    await fsp.mkdir(dirSponsors, { recursive: true })
  }
  await Promise.all([
    download('https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg', join(dirSponsors, 'antfu.svg')),
    download('https://cdn.jsdelivr.net/gh/patak-dev/static/sponsors.svg', join(dirSponsors, 'patak-dev.svg')),
    download('https://cdn.jsdelivr.net/gh/sheremet-va/static/sponsors.svg', join(dirSponsors, 'sheremet-va.svg')),
  ])
}

fetchAvatars()
fetchSponsors()
````

## File: docs/.vitepress/scripts/pwa.ts
````typescript
import type { PwaOptions } from '@vite-pwa/vitepress'
import {
  githubusercontentRegex,
  pwaFontsRegex,
  pwaFontStylesRegex,
  vitestDescription,
  vitestName,
  vitestShortName,
} from '../meta'

export const pwa: PwaOptions = {
  outDir: '.vitepress/dist',
  registerType: 'autoUpdate',
  // include all static assets under public/
  manifest: {
    id: '/',
    name: vitestName,
    short_name: vitestShortName,
    description: vitestDescription,
    theme_color: '#ffffff',
    start_url: '/',
    lang: 'en-US',
    dir: 'ltr',
    orientation: 'natural',
    display: 'standalone',
    display_override: ['window-controls-overlay'],
    categories: ['development', 'developer tools'],
    icons: [
      {
        src: 'pwa-64x64.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'maskable-icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    screenshots: [{
      src: 'og.png',
      sizes: '2258x1185',
      type: 'image/png',
      label: `Screenshot of ${vitestName}`,
    }],
    handle_links: 'preferred',
    launch_handler: {
      client_mode: ['navigate-existing', 'auto'],
    },
    edge_side_panel: {
      preferred_width: 480,
    },
  },
  workbox: {
    navigateFallbackDenylist: [/^\/new$/],
    // warning: sponsors/antfu.svg is 2.51 MB, and won't be precached
    maximumFileSizeToCacheInBytes: 3 * 1024 * 1024, // <== 3MB
    globPatterns: ['**/*.{css,js,html,png,svg,ico,txt,woff2,json}'],
    // Rollup 4 change the layout: don't calculate revision (hash)
    dontCacheBustURLsMatching: /^assets\//,
    runtimeCaching: [
      {
        urlPattern: pwaFontsRegex,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: pwaFontStylesRegex,
        handler: 'CacheFirst',
        options: {
          cacheName: 'gstatic-fonts-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: githubusercontentRegex,
        handler: 'CacheFirst',
        options: {
          cacheName: 'githubusercontent-images-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  experimental: {
    includeAllowlist: true,
  },
}
````

## File: docs/.vitepress/scripts/transformHead.ts
````typescript
import type { HeadConfig, TransformContext } from 'vitepress'

import { preconnectHomeLinks, preconnectLinks } from '../meta'

export async function transformHead({ pageData }: TransformContext): Promise<HeadConfig[]> {
  const head: HeadConfig[] = []

  const home = pageData.relativePath === 'index.md'

  ;(home ? preconnectHomeLinks : preconnectLinks).forEach((link) => {
    head.push(['link', { rel: 'dns-prefetch', href: link }])
    head.push(['link', { rel: 'preconnect', href: link }])
  })

  head.push(['link', { rel: 'prefetch', href: '/logo.svg', as: 'image' }])
  if (home) {
    head.push(['link', { rel: 'prefetch', href: '/logo-shadow.svg', as: 'image' }])
    head.push(['link', { rel: 'prefetch', href: '/sponsors/antfu.svg', as: 'image' }])
    head.push(['link', { rel: 'prefetch', href: '/sponsors/sheremet-va.svg', as: 'image' }])
    head.push(['link', { rel: 'prefetch', href: '/sponsors/patak-dev.svg', as: 'image' }])
    head.push(['link', { rel: 'prefetch', href: '/netlify.svg', as: 'image' }])
  }

  return head
}
````

## File: docs/.vitepress/style/main.css
````css
.dark [img-light] {
  display: none;
}

html:not(.dark) [img-dark] {
  display: none;
}

details summary {
  cursor: pointer;
}

/* Overrides */

.sp .sp-link.link:hover,
.sp .sp-link.link:focus {
  background-color: var(--vitest-c-sponsor-hover) !important;
}

/* outline styles for buttons and VPButton anchors */
button:focus,
button:focus-visible,
.DocSearch-Button:focus,
.DocSearch-Button:focus-visible,
a:focus-visible,
a:focus {
  border-radius: 2px;
  outline: 2px solid var(--vp-c-text-1);
}

a:focus:not(:focus-visible),
button:focus:not(:focus-visible) {
  outline: none !important;
}

/* custom block styles */
html:not(.dark) .custom-block.tip code {
  color: var(--vitest-custom-block-tip-code-text) !important;
}
html:not(.dark) .custom-block.info code {
  color: var(--vitest-custom-block-info-code-text) !important;
}
.custom-block.tip a:hover,
.vp-doc .custom-block.tip a:hover > code {
  color: var(--vp-c-brand-1) !important;
  opacity: 1;
}
.custom-block.info a:hover,
.vp-doc .custom-block.info a:hover > code {
  color: var(--vp-c-brand-1) !important;
  opacity: 1;
}
html:not(.dark) .custom-block.info a:hover,
html:not(.dark) .vp-doc .custom-block.info a:hover > code {
  color: var(--vitest-custom-block-info-code-text) !important;
  opacity: 1;
}
.custom-block.warning a:hover,
.vp-doc .custom-block.warning a:hover > code {
  color: var(--vp-c-warning-1) !important;
  opacity: 1;
}
.custom-block.danger a:hover,
.vp-doc .custom-block.danger a:hover > code {
  color: var(--vp-c-danger-1) !important;
  opacity: 1;
}

/* search # styles */
:not(.dark) .title-icon {
  opacity: 1 !important;
}
.dark .title-icon {
  opacity: 0.67 !important;
}

.VPSocialLink {
  transform: scale(0.9);
}

.vp-doc a {
  text-decoration-style: dotted;
}
.custom-block a:focus,
.custom-block a:active,
.custom-block a:hover,
.custom-block a:active,
.vp-doc a:focus,
.vp-doc a:active,
.vp-doc a:hover,
.vp-doc a:active {
  text-decoration: underline;
}

.vp-doc th, .vp-doc td {
  padding: 6px 10px;
  border: 1px solid #8882;
}

/* h3 breaks SEO => replaced with h2 with the same size */
.home-content h2 {
  margin-top: 2rem;
  font-size: 1.35rem;
  border-bottom: none;
  margin-bottom: 0;
}

img.resizable-img {
  width: unset;
  height: unset;
}

.VPTeamMembersItem.medium .profile .data .affiliation {
  min-height: unset;
}
.VPTeamMembersItem.medium .profile .data .desc {
  min-height: unset;
}
/* fix height ~ 2 lines of text: 3 cards per row */
@media (min-width: 648px) {
  .VPTeamMembersItem.medium .profile .data .affiliation {
    min-height: 4rem;
  }
  .VPTeamMembersItem.medium .profile .data .desc {
    min-height: 4rem;
  }
}

/* fix height ~ 2 lines of text: 3 or more cards per row */
.VPTeamMembersItem.small .profile .data .affiliation {
  min-height: 3rem;
}
.VPTeamMembersItem.small .profile .data .desc {
  min-height: 3rem;
}

/* fix height ~ 3 lines of text: 4 cards per row */
@media (min-width: 1064px) and (max-width: 1143px) {
  .VPTeamMembersItem.small .profile .data .affiliation {
    min-height: 4rem;
  }
  .VPTeamMembersItem.small .profile .data .desc {
    min-height: 4rem;
  }
}
/* fix height ~ 3 lines of text: 3 cards per row */
@media (min-width: 815px) and (max-width: 875px) {
  .VPTeamMembersItem.small .profile .data .affiliation {
    min-height: 4rem;
  }
  .VPTeamMembersItem.small .profile .data .desc {
    min-height: 4rem;
  }
}
/* fix height ~ 3 lines of text: 2 cards per row */
@media (max-width: 612px) {
  .VPTeamMembersItem.small .profile .data .affiliation {
    min-height: 4rem;
  }
  .VPTeamMembersItem.small .profile .data .desc {
    min-height: 4rem;
  }
}
/* fix height: one card per row */
@media (max-width: 568px) {
  .VPTeamMembersItem.small .profile .data .affiliation {
    min-height: unset;
  }
  .VPTeamMembersItem.small .profile .data .desc {
    min-height: unset;
  }
}

.highlighted-word {
  background-color: var(--vp-code-line-highlight-color);
  transition: background-color 0.5s;
  display: inline-block;
}
````

## File: docs/.vitepress/style/vars.css
````css
/**
 * Colors
 * -------------------------------------------------------------------------- */

:root {
  --vp-c-brand-1: #52730d;
  --vp-c-brand-2: #57791b;
  --vp-c-brand-3: #506e10;
  --vp-c-sponsor: #ca2971;
  --vitest-c-sponsor-hover: #c13071;
}

.dark {
  --vp-c-brand-1: #add467;
  --vp-c-brand-2: #a7cc66;
  --vp-c-brand-3: #acd268;
  --vp-c-sponsor: #ee4e95;
  --vitest-c-sponsor-hover: #e51370;
}


/**
 * Component: Custom Block
 * -------------------------------------------------------------------------- */
:root {
  --vp-custom-block-tip-code-bg: var(--vp-c-brand-soft);
  --vp-custom-block-danger-code-bg: #a79fa029;
  --vitest-custom-block-tip-code-text: #4a680c;
  --vitest-custom-block-info-code-text: #394f0c
}

.dark {
  --vp-custom-block-tip-code-bg: var(--vp-c-brand-soft);
  --vp-custom-block-danger-code-bg: #6c6a6a2b;
}

/**
 * Component: Button
 * -------------------------------------------------------------------------- */
.dark {
  --vp-button-brand-text: #243600;
  --vp-button-brand-active-text: #243600;
  --vp-button-brand-hover-text: #243600;
}

/**
 * Component: Home
 * -------------------------------------------------------------------------- */

 :root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(
    120deg,
    #86b91a 30%,
    #edd532
  );
  --vp-home-hero-image-background-image: linear-gradient(
    -45deg,
    #86b91a60 30%,
    #edd53260
  );
  --vp-home-hero-image-filter: blur(30px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}


/**
 * Component: Algolia
 * -------------------------------------------------------------------------- */

.DocSearch {
  --docsearch-primary-color: var(--vp-c-brand) !important;
}

.vp-sponsor-grid.big .vp-sponsor-grid-image {
  max-height: 96px;
}

.vp-sponsor-grid.mini .vp-sponsor-grid-image[alt='Bit'] {
  max-height: 48px;
}

.vp-sponsor-grid.big .vp-sponsor-grid-image[alt='Vite'] {
  max-height: 65px;
}

.vp-sponsor-grid.big .vp-sponsor-grid-image[alt='Zammad'] {
  max-height: 74px;
}
````

## File: docs/.vitepress/theme/index.ts
````typescript
import type { Theme } from 'vitepress'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import { inBrowser } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import { h } from 'vue'
import HomePage from '../components/HomePage.vue'
import Version from '../components/Version.vue'
import '../style/main.css'
import '../style/vars.css'
import 'uno.css'
import '@shikijs/vitepress-twoslash/style.css'
import 'virtual:group-icons.css'

if (inBrowser) {
  import('./pwa')
}

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-features-after': () => h(HomePage),
    })
  },
  enhanceApp({ app }) {
    app.component('Version', Version)
    app.use(TwoslashFloatingVue)
    enhanceAppWithTabs(app)
  },
} satisfies Theme
````

## File: docs/.vitepress/theme/pwa.ts
````typescript
import { registerSW } from 'virtual:pwa-register'

registerSW({ immediate: true })
````

## File: docs/.vitepress/blog.data.ts
````typescript
import { createContentLoader } from 'vitepress'

interface Post {
  title: string
  url: string
  date: {
    time: number
    string: string
  }
}

declare const data: Post[]
export { data }

export default createContentLoader('blog/*.md', {
  // excerpt: true,
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter }) => ({
        title: frontmatter.head.find((e: any) => e[1].property === 'og:title')[1]
          .content,
        url,
        date: formatDate(frontmatter.date),
      }))
      .sort((a, b) => b.date.time - a.date.time)
  },
})

function formatDate(raw: string): Post['date'] {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  }
}
````

## File: docs/.vitepress/components.d.ts
````typescript
/* eslint-disable */
// @ts-nocheck
// Generated by unplugin-vue-components
// Read more: https://github.com/vuejs/core/pull/3399
export {}

/* prettier-ignore */
declare module 'vue' {
  export interface GlobalComponents {
    ArrowDown: typeof import('./components/ArrowDown.vue')['default']
    BlogIndex: typeof import('./components/BlogIndex.vue')['default']
    Box: typeof import('./components/Box.vue')['default']
    Contributors: typeof import('./components/Contributors.vue')['default']
    CourseLink: typeof import('./components/CourseLink.vue')['default']
    FeaturesList: typeof import('./components/FeaturesList.vue')['default']
    HomePage: typeof import('./components/HomePage.vue')['default']
    ListItem: typeof import('./components/ListItem.vue')['default']
    NonProjectOption: typeof import('./components/NonProjectOption.vue')['default']
    Version: typeof import('./components/Version.vue')['default']
  }
}
````

## File: docs/.vitepress/config.ts
````typescript
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { transformerNotationWordHighlight } from '@shikijs/transformers'
import { withPwa } from '@vite-pwa/vitepress'
import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from 'vitepress-plugin-group-icons'
import { version } from '../../package.json'
import { teamMembers } from './contributors'
import {
  bluesky,
  contributing,
  discord,
  font,
  github,
  mastodon,
  ogImage,
  ogUrl,
  releases,
  vitestDescription,
  vitestName,
} from './meta'
import { pwa } from './scripts/pwa'
import { transformHead } from './scripts/transformHead'

export default ({ mode }: { mode: string }) => {
  return withPwa(defineConfig({
    lang: 'en-US',
    title: vitestName,
    description: vitestDescription,
    srcExclude: [
      '**/guide/examples/*',
      '**/guide/cli-generated.md',
    ],
    locales: {
      root: {
        label: 'English',
        lang: 'en-US',
      },
      zh: {
        label: '简体中文',
        lang: 'zh',
        link: 'https://cn.vitest.dev/',
      },
    },
    head: [
      ['meta', { name: 'theme-color', content: '#729b1a' }],
      ['link', { rel: 'icon', href: '/favicon.ico', sizes: '48x48' }],
      ['link', { rel: 'icon', href: '/logo.svg', sizes: 'any', type: 'image/svg+xml' }],
      ['meta', { name: 'author', content: `${teamMembers.map(c => c.name).join(', ')} and ${vitestName} contributors` }],
      ['meta', { name: 'keywords', content: 'vitest, vite, test, coverage, snapshot, react, vue, preact, svelte, solid, lit, marko, ruby, cypress, puppeteer, jsdom, happy-dom, test-runner, jest, typescript, esm, tinypool, tinyspy, node' }],
      ['meta', { property: 'og:title', content: vitestName }],
      ['meta', { property: 'og:description', content: vitestDescription }],
      ['meta', { property: 'og:url', content: ogUrl }],
      ['meta', { property: 'og:image', content: ogImage }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['link', { rel: 'preload', as: 'style', onload: 'this.onload=null;this.rel=\'stylesheet\'', href: font }],
      ['noscript', {}, `<link rel="stylesheet" crossorigin="anonymous" href="${font}" />`],
      ['link', { rel: 'me', href: 'https://m.webtoo.ls/@vitest' }],
      ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#ffffff' }],
      ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
    ],
    lastUpdated: true,
    vite: {
      plugins: [
        groupIconVitePlugin({
          customIcon: {
            'CLI': 'vscode-icons:file-type-shell',
            'vitest.shims': 'vscode-icons:file-type-vitest',
            'vitest.workspace': 'vscode-icons:file-type-vitest',
            'vitest.config': 'vscode-icons:file-type-vitest',
            '.spec.ts': 'vscode-icons:file-type-testts',
            '.test.ts': 'vscode-icons:file-type-testts',
            '.spec.js': 'vscode-icons:file-type-testjs',
            '.test.js': 'vscode-icons:file-type-testjs',
            'marko': 'vscode-icons:file-type-marko',
          },
        }),
      ],
    },
    markdown: {
      config(md) {
        md.use(tabsMarkdownPlugin)
        md.use(groupIconMdPlugin)
      },
      theme: {
        light: 'github-light',
        dark: 'github-dark',
      },
      codeTransformers: mode === 'development'
        ? [transformerNotationWordHighlight()]
        : [
            transformerNotationWordHighlight(),
            transformerTwoslash({
              processHoverInfo: (info) => {
                if (info.includes(process.cwd())) {
                  return info.replace(new RegExp(process.cwd(), 'g'), '')
                }
                return info
              },
            }),
          ],
      languages: ['js', 'jsx', 'ts', 'tsx'],
    },
    themeConfig: {
      logo: '/logo.svg',

      editLink: {
        pattern: 'https://github.com/vitest-dev/vitest/edit/main/docs/:path',
        text: 'Suggest changes to this page',
      },

      search: {
        provider: 'local',
      /* provider: 'algolia',
      options: {
        appId: 'ZTF29HGJ69',
        apiKey: '9c3ced6fed60d2670bb36ab7e8bed8bc',
        indexName: 'vitest',
        // searchParameters: {
        //   facetFilters: ['tags:en'],
        // },
      }, */
      },

      carbonAds: {
        code: 'CW7DVKJE',
        placement: 'vitestdev',
      },

      socialLinks: [
        { icon: 'bluesky', link: bluesky },
        { icon: 'mastodon', link: mastodon },
        { icon: 'discord', link: discord },
        { icon: 'github', link: github },
      ],

      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2021-PRESENT Anthony Fu, Matías Capeletto and Vitest contributors',
      },

      nav: [
        { text: 'Guide & API', link: '/guide/', activeMatch: '^/(guide|api)/(?!browser)' },
        { text: 'Config', link: '/config/', activeMatch: '^/config/' },
        { text: 'Browser Mode', link: '/guide/browser', activeMatch: '^/guide/browser/' },
        {
          text: 'Resources',
          items: [
            {
              text: 'Advanced API',
              link: '/advanced/api/',
              activeMatch: '^/advanced/',
            },
            {
              items: [
                {
                  text: 'Blog',
                  link: '/blog',
                },
                {
                  text: 'Team',
                  link: '/team',
                },
              ],
            },
          ],
        },
        {
          text: `v${version}`,
          items: [
            {
              items: [
                {
                  text: `v${version}`,
                  link: `https://github.com/vitest-dev/vitest/releases/tag/v${version}`,
                },
                {
                  text: 'Releases Notes',
                  link: releases,
                },
                {
                  text: 'Contributing',
                  link: contributing,
                },
              ],
            },
            {
              items: [
                {
                  text: 'unreleased',
                  link: 'https://main.vitest.dev/',
                },
                {
                  text: 'v0.x',
                  link: 'https://v0.vitest.dev/',
                },
                {
                  text: 'v1.x',
                  link: 'https://v1.vitest.dev/',
                },
                {
                  text: 'v2.x',
                  link: 'https://v2.vitest.dev/',
                },
              ],
            },
          ],
        },
      ],

      sidebar: {
        '/guide/browser': [
          {
            text: 'Introduction',
            collapsed: false,
            items: [
              {
                text: 'Why Browser Mode',
                link: '/guide/browser/why',
                docFooterText: 'Why Browser Mode | Browser Mode',
              },
              {
                text: 'Getting Started',
                link: '/guide/browser/',
                docFooterText: 'Getting Started | Browser Mode',
              },
            ],
          },
          {
            text: 'Configuration',
            collapsed: false,
            items: [
              {
                text: 'Browser Config Reference',
                link: '/guide/browser/config',
                docFooterText: 'Browser Config Reference | Browser Mode',
              },
              {
                text: 'Configuring Playwright',
                link: '/guide/browser/playwright',
                docFooterText: 'Configuring Playwright | Browser Mode',
              },
              {
                text: 'Configuring WebdriverIO',
                link: '/guide/browser/webdriverio',
                docFooterText: 'Configuring WebdriverIO | Browser Mode',
              },
            ],
          },
          {
            text: 'API',
            collapsed: false,
            items: [
              {
                text: 'Context API',
                link: '/guide/browser/context',
                docFooterText: 'Context API | Browser Mode',
              },
              {
                text: 'Interactivity API',
                link: '/guide/browser/interactivity-api',
                docFooterText: 'Interactivity API | Browser Mode',
              },
              {
                text: 'Locators',
                link: '/guide/browser/locators',
                docFooterText: 'Locators | Browser Mode',
              },
              {
                text: 'Assertion API',
                link: '/guide/browser/assertion-api',
                docFooterText: 'Assertion API | Browser Mode',
              },
              {
                text: 'Commands API',
                link: '/guide/browser/commands',
                docFooterText: 'Commands | Browser Mode',
              },
            ],
          },
          {
            text: 'Guides',
            collapsed: false,
            items: [
              {
                text: 'Multiple Setups',
                link: '/guide/browser/multiple-setups',
                docFooterText: 'Multiple Setups | Browser Mode',
              },
            ],
          },
          {
            items: [
              ...footer(),
              {
                text: 'Node API Reference',
                link: '/advanced/api/',
              },
            ],
          },
        ],
        '/advanced': [
          {
            text: 'API',
            collapsed: false,
            items: [
              {
                text: 'Node API',
                items: [
                  {
                    text: 'Getting Started',
                    link: '/advanced/api/',
                  },
                  {
                    text: 'Vitest',
                    link: '/advanced/api/vitest',
                  },
                  {
                    text: 'TestProject',
                    link: '/advanced/api/test-project',
                  },
                  {
                    text: 'TestSpecification',
                    link: '/advanced/api/test-specification',
                  },
                ],
              },
              {
                text: 'Test Task API',
                items: [
                  {
                    text: 'TestCase',
                    link: '/advanced/api/test-case',
                  },
                  {
                    text: 'TestSuite',
                    link: '/advanced/api/test-suite',
                  },
                  {
                    text: 'TestModule',
                    link: '/advanced/api/test-module',
                  },
                  {
                    text: 'TestCollection',
                    link: '/advanced/api/test-collection',
                  },
                ],
              },
              {
                text: 'Plugin API',
                link: '/advanced/api/plugin',
              },
              {
                text: 'Runner API',
                link: '/advanced/runner',
              },
              {
                text: 'Reporters API',
                link: '/advanced/api/reporters',
              },
              {
                text: 'Task Metadata',
                link: '/advanced/metadata',
              },
            ],
          },
          {
            text: 'Guides',
            collapsed: false,
            items: [
              {
                text: 'Running Tests',
                link: '/advanced/guide/tests',
              },
              {
                text: 'Extending Reporters',
                link: '/advanced/reporters',
              },
              {
                text: 'Custom Pool',
                link: '/advanced/pool',
              },
            ],
          },
          {
            items: footer(),
          },
        ],
        '/team': [],
        '/blog': [],
        '/': [
          {
            text: 'Introduction',
            collapsed: false,
            items: introduction(),
          },
          {
            text: 'API',
            collapsed: false,
            items: api(),
          },
          {
            text: 'Guides',
            collapsed: false,
            items: guide(),
          },
          {
            items: [
              {
                text: 'Browser Mode',
                link: '/guide/browser',
              },
              {
                text: 'Node API Reference',
                link: '/advanced/api',
              },
              {
                text: 'Comparisons',
                link: '/guide/comparisons',
              },
            ],
          },
        ],
      },
    },
    pwa,
    transformHead,
  }))
}

function footer(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Config Reference',
      link: '/config/',
    },
    {
      text: 'Test API Reference',
      link: '/api/',
    },
  ]
}

function introduction(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Why Vitest',
      link: '/guide/why',
    },
    {
      text: 'Getting Started',
      link: '/guide/',
    },
    {
      text: 'Features',
      link: '/guide/features',
    },
    {
      text: 'Config Reference',
      link: '/config/',
    },
  ]
}

function guide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'CLI',
      link: '/guide/cli',
    },
    {
      text: 'Test Filtering',
      link: '/guide/filtering',
    },
    {
      text: 'Test Projects',
      link: '/guide/projects',
    },
    {
      text: 'Reporters',
      link: '/guide/reporters',
    },
    {
      text: 'Coverage',
      link: '/guide/coverage',
    },
    {
      text: 'Snapshot',
      link: '/guide/snapshot',
    },
    {
      text: 'Mocking',
      link: '/guide/mocking',
    },
    {
      text: 'Parallelism',
      link: '/guide/parallelism',
    },
    {
      text: 'Testing Types',
      link: '/guide/testing-types',
    },
    {
      text: 'Vitest UI',
      link: '/guide/ui',
    },
    {
      text: 'In-Source Testing',
      link: '/guide/in-source',
    },
    {
      text: 'Test Context',
      link: '/guide/test-context',
    },
    {
      text: 'Test Annotations',
      link: '/guide/test-annotations',
    },
    {
      text: 'Environment',
      link: '/guide/environment',
    },
    {
      text: 'Extending Matchers',
      link: '/guide/extending-matchers',
    },
    {
      text: 'IDE Integration',
      link: '/guide/ide',
    },
    {
      text: 'Debugging',
      link: '/guide/debugging',
    },
    {
      text: 'Common Errors',
      link: '/guide/common-errors',
    },
    {
      text: 'Migration Guide',
      link: '/guide/migration',
      collapsed: false,
      items: [
        {
          text: 'Migrating to Vitest 3.0',
          link: '/guide/migration#vitest-3',
        },
        {
          text: 'Migrating from Jest',
          link: '/guide/migration#jest',
        },
      ],
    },
    {
      text: 'Performance',
      collapsed: false,
      items: [
        {
          text: 'Profiling Test Performance',
          link: '/guide/profiling-test-performance',
        },
        {
          text: 'Improving Performance',
          link: '/guide/improving-performance',
        },
      ],
    },
  ]
}

function api(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Test API Reference',
      link: '/api/',
    },
    {
      text: 'Mock Functions',
      link: '/api/mock',
    },
    {
      text: 'Vi Utility',
      link: '/api/vi',
    },
    {
      text: 'Expect',
      link: '/api/expect',
    },
    {
      text: 'ExpectTypeOf',
      link: '/api/expect-typeof',
    },
    {
      text: 'Assert',
      link: '/api/assert',
    },
    {
      text: 'AssertType',
      link: '/api/assert-type',
    },
  ]
}
````

## File: docs/.vitepress/contributor-names.json
````json
[
  "sheremet-va",
  "antfu",
  "hi-ogawa",
  "AriPerkkio",
  "userquin",
  "patak-dev",
  "Dunqing",
  "btea",
  "Demivan",
  "Aslemammad",
  "poyoho",
  "fenghan34",
  "DerYeger",
  "edimitchel",
  "dammy001",
  "togami2864",
  "cexbrayat",
  "sapphi-red",
  "dsyddall",
  "Saul-Mirone",
  "nieyuyao",
  "g4rry420",
  "benmccann",
  "wtchnm",
  "11joselu",
  "simon-abbott",
  "so1ve",
  "PatrickChen928",
  "zxch3n",
  "tony-go",
  "dominikg",
  "bluwy",
  "mysteryven",
  "stygian-desolator",
  "mitchelvanbever",
  "aryaemami59",
  "danielroe",
  "pengooseDev",
  "azaleta",
  "wojtekmaj",
  "trivikr",
  "tigerabrodi",
  "pd4d10",
  "marcelobotega",
  "JessicaSachs",
  "horacioh",
  "capricorn86",
  "danez",
  "bartoszgolebiowski",
  "haikyuu",
  "syi0808",
  "Tanimodori",
  "tim-we",
  "pastelmind",
  "alexzhang1030",
  "jereklas",
  "rxliuli",
  "webfansplz",
  "BluesYoung-web",
  "antoinerey",
  "sudongyuer",
  "jgoux",
  "thebanjomatic",
  "adriencaccia",
  "aleclarson",
  "ouduidui",
  "ghiscoding",
  "huyenltnguyen",
  "kalvenschraut",
  "LoTwT",
  "saitonakamura",
  "leonardssh",
  "nickserv",
  "Shinigami92",
  "sachinraja",
  "sanjaiyan-dev",
  "pikax",
  "TrickyPi",
  "tmkx",
  "tigranmk",
  "thor-juhasz",
  "TheJaredWilcurt",
  "SuperchupuDev",
  "sabertazimi",
  "ST-DDT",
  "robcaldecott",
  "PuruVJ",
  "pionxzh",
  "eroblaze",
  "paescuj",
  "dubzzz",
  "mzhubail",
  "OrbisK",
  "mrginglymus",
  "IgnusG",
  "jfgreffier",
  "sxzz",
  "murongg",
  "sun0day",
  "skarab42",
  "scarf005",
  "samkevin1",
  "ocavue",
  "nopeless",
  "irvile",
  "gtm-nayan",
  "bonyuta0204",
  "willieho",
  "vasilii-kovalev",
  "haoqunjiang",
  "hannoeru",
  "hamirmahal",
  "Akryum",
  "spiroka",
  "filiptammergard",
  "EvHaus",
  "posva",
  "Dragomir-Ivanov",
  "Namchee",
  "ChrisTowles",
  "cawa-93",
  "iiio2",
  "allisons11",
  "anthonyblond",
  "Monkatraz",
  "azrikahar",
  "mmkal",
  "mbland",
  "ciddan",
  "macko911",
  "Marcel-G",
  "LuciNyan",
  "tsirlucas",
  "Lioness100",
  "IanVS",
  "InfiniteXyy",
  "jacoberdman2147",
  "JakeGinnivan",
  "janosh",
  "DevJoaoLopes",
  "joezimjs",
  "joshnuss",
  "JoostK",
  "MPeloquin",
  "Maxim-Mazurok",
  "neiromaster",
  "onmax",
  "Max10240",
  "sirlancelot",
  "mkantor",
  "silvenon",
  "molily",
  "Andarist",
  "MatanBobi",
  "bard",
  "masonlouchart",
  "Krisell",
  "mascii",
  "marvinhagemeister",
  "marpme",
  "tmcw",
  "jeongnaehyeok",
  "vorant94",
  "mkermani144",
  "miserylee",
  "xxzefgh",
  "minsgy",
  "NMinhNguyen",
  "MindfulPol",
  "sukovanej",
  "Connormiha",
  "mikewheaton",
  "mikestopcontinues",
  "mneveroff",
  "mikekidder",
  "mcous",
  "michaelnwani",
  "lampewebdev",
  "mikearnaldi",
  "Metehan-Altuntekin",
  "meduzen",
  "wokcito",
  "krishnan-chandra",
  "kkuegler",
  "Idlesome",
  "kidonng",
  "khalednadam",
  "KentoMoriwaki",
  "gaokun",
  "oekazuma",
  "kazuma1989",
  "karolstawowski",
  "kanadgupta",
  "kamontat",
  "kamilogorek",
  "kaioduarte",
  "kainstar",
  "way2ex",
  "zephraph",
  "JSanchezIO",
  "joshuahhh",
  "JoshuaKGoldberg",
  "marshallswain",
  "marcomuser",
  "brzezinskimarcin",
  "MaoShizhong",
  "malkiii",
  "Ma-hawaj",
  "macklinu",
  "mhogeveen",
  "lyx-jay",
  "lukashass",
  "luismartinezs",
  "wnr",
  "lazcanoluca",
  "localhousee",
  "linux-china",
  "Lenni009",
  "LarsSalembier",
  "jqkk",
  "KyleAMathews",
  "kricact",
  "movahhedi",
  "segrey",
  "segevfiner",
  "sebastinez",
  "fubhy",
  "scottbedard",
  "Greenheart",
  "bodinsamuel",
  "samthor",
  "sakit0",
  "Sajad-Sharhani",
  "ecstrema",
  "apple-yagi",
  "kemuridama",
  "rwaskiewicz",
  "rgrove",
  "runyasak",
  "pandyarudra",
  "rowanwins",
  "roryokane",
  "zookatron",
  "tgriesser",
  "tim-smart",
  "ferdodo",
  "tanhauhau",
  "camiha",
  "TadejPolajnar",
  "Flambe",
  "NoriSte",
  "vojvodics",
  "penalosa",
  "Sneaken",
  "Sjoertjuh",
  "smcenlly",
  "simonelnahas",
  "sidharthv96",
  "hakshu25",
  "shiwano",
  "ShivamJoker",
  "shayc",
  "rmehner",
  "PaulRosset",
  "patrickelectric",
  "pascalberger",
  "PengYYYYY",
  "oskarols",
  "Orleydovsky",
  "oriolgm",
  "OrestHk",
  "freshollie",
  "kxalex",
  "okikio",
  "obadakhalili",
  "RedJanvier",
  "masnormen",
  "nstepien",
  "nicojs",
  "NickHeap2",
  "nathanbabcock",
  "nathan-knight",
  "nathanmmiller",
  "RobertPechaCZ",
  "RobbeCl",
  "believer",
  "richardboehme",
  "rianfowler",
  "wheresrhys",
  "RDIL",
  "rluvaton",
  "ChiChuRita",
  "rafedramzi",
  "pi0",
  "pjotrsavitski",
  "g-plane",
  "PCreations",
  "kleinfreund",
  "kecrily",
  "Peeterush",
  "yingpengsha",
  "pedro00dk",
  "PaulienM",
  "Gravitonic",
  "ChristopherHaws",
  "geersch",
  "cpojer",
  "screendriver",
  "christianhg",
  "christian-bromann",
  "chriswheeldon-peakon",
  "foges",
  "zyyv",
  "zirkelc",
  "craciuncezar",
  "ChenKS12138",
  "carlobeltrame",
  "CamilleTeruel",
  "calebwaldner",
  "everett1992",
  "CyriacBr",
  "sugaaloop",
  "bfanger",
  "blake-newman",
  "DylanPiercey",
  "drwpow",
  "d3lm",
  "eddienubes",
  "diogotorres97",
  "deot",
  "VisualYuki",
  "davidmyersdev",
  "david-crespo",
  "byr-gdp",
  "DannyFeliz",
  "freezepluto",
  "dts",
  "thecuvii",
  "cuebit",
  "luckylooke",
  "Cphayim",
  "collinstevens",
  "ghry5",
  "clarkf",
  "haines",
  "aqandrew",
  "CoolGoose",
  "abereghici",
  "TheAlexLichter",
  "anicholls",
  "Codex-",
  "atk",
  "abarke",
  "fooddilsn",
  "DoodleBobBuffPants",
  "BickfordA",
  "katranci",
  "AgarkovRoman",
  "xsjcTony",
  "adrienbaron",
  "surc54",
  "thecodrr",
  "lifeiscontent",
  "ad1992",
  "btkostner",
  "BreakBB",
  "bnjm",
  "kouak",
  "hahanein",
  "benjakugler96",
  "bencodezen",
  "EskiMojo14",
  "gBasil",
  "bandhan-majumder",
  "ayoayco",
  "austinhnelson",
  "weedySeaDragon",
  "ArtyMaury",
  "datsenkoboos",
  "kettanaito",
  "aktyw",
  "Oreoxmt",
  "RobinTail",
  "ann-kilzer",
  "Josef-Friedrich",
  "jhuleatt",
  "jpleclerc",
  "nyarthan",
  "Carnageous",
  "jvliwanag",
  "jamacku",
  "JR-G",
  "jcbhmr",
  "beckjake",
  "cliarena",
  "knownasilya",
  "Ilanaya",
  "cogor",
  "IKoshelev",
  "IAfanasov",
  "cometkim",
  "nvh95",
  "hugoattal",
  "hubertstrk",
  "xuhdev",
  "Joristdh",
  "reithose",
  "Jordan-Hall",
  "DerZade",
  "jonahkagan",
  "FlippingBinary",
  "dotnetCarpenter",
  "wuzzeb",
  "hershelh",
  "joelgallant",
  "Lordfirespeed",
  "Jannchie",
  "jessevanassen",
  "WonderPanda",
  "0x-jerry",
  "jellyfishgh",
  "okxiaoliang4",
  "ydcjeff",
  "Jastor11",
  "stormwarning",
  "FelixGraf",
  "fregante",
  "fawazahmed0",
  "cyco130",
  "Farouk19",
  "bfamchon",
  "evandroguedes",
  "yzh990918",
  "bad4iz",
  "Barbapapazes",
  "soc221b",
  "erik-perri",
  "macdaddyaz",
  "ericjgagnon",
  "innocenzi",
  "Pando58",
  "elonehoo",
  "elliotwestlake",
  "elby22",
  "ELanning",
  "hogoww",
  "hironytic",
  "3c1u",
  "henningway",
  "Haroenv",
  "Emiyaaaaa",
  "HannesOberreiter",
  "bissolli",
  "guoyunhe",
  "Plumbiu",
  "gleysonabreu",
  "Giildo",
  "GeopJr",
  "gaspardip",
  "G-Rath",
  "gabskoro",
  "GabrielAlfs",
  "fgordillo",
  "Flamenco",
  "fbritoferreira"
]
````

## File: docs/.vitepress/contributors.ts
````typescript
import type { DefaultTheme } from 'vitepress'
import contributorNames from './contributor-names.json'

export interface Contributor {
  name: string
  avatar: string
}

export interface CoreTeam extends DefaultTheme.TeamMember {
  // required to download avatars from GitHub
  github: string
  bluesky?: string
  mastodon?: string
  discord?: string
  youtube?: string
}

const contributorsAvatars: Record<string, string> = {}

function getAvatarUrl(name: string) {
  return import.meta.hot ? `https://github.com/${name}.png` : `/user-avatars/${name}.png`
}

export const contributors = (contributorNames).reduce<Contributor[]>((acc, name) => {
  contributorsAvatars[name] = getAvatarUrl(name)
  acc.push({ name, avatar: contributorsAvatars[name] })
  return acc
}, [])

function createLinks(tm: CoreTeam): CoreTeam {
  tm.links = [{ icon: 'github', link: `https://github.com/${tm.github}` }]
  if (tm.bluesky) {
    tm.links.push({ icon: 'bluesky', link: tm.bluesky })
  }

  if (tm.mastodon) {
    tm.links.push({ icon: 'mastodon', link: tm.mastodon })
  }

  if (tm.discord) {
    tm.links.push({ icon: 'discord', link: tm.discord })
  }

  if (tm.youtube) {
    tm.links.push({ icon: 'youtube', link: `https://www.youtube.com/@${tm.youtube}` })
  }

  return tm
}

const plainTeamMembers: CoreTeam[] = [
  {
    avatar: contributorsAvatars['sheremet-va'],
    name: 'Vladimir',
    github: 'sheremet-va',
    bluesky: 'https://bsky.app/profile/erus.dev',
    mastodon: 'https://elk.zone/m.webtoo.ls/@sheremet_va',
    sponsor: 'https://github.com/sponsors/sheremet-va',
    title: 'Open source developer',
    desc: 'Core team member of Vitest & Vite',
    org: 'VoidZero',
    orgLink: 'https://voidzero.dev/',
  },
  {
    avatar: contributorsAvatars.antfu,
    name: 'Anthony Fu',
    github: 'antfu',
    bluesky: 'https://bsky.app/profile/antfu.me',
    mastodon: 'https://elk.zone/m.webtoo.ls/@antfu',
    discord: 'https://chat.antfu.me',
    youtube: 'antfu',
    sponsor: 'https://github.com/sponsors/antfu',
    title: 'A fanatical open sourceror',
    org: 'NuxtLabs',
    orgLink: 'https://nuxtlabs.com/',
    desc: 'Core team member of Vite & Vue',
  },
  {
    avatar: contributorsAvatars.AriPerkkio,
    name: 'Ari Perkkiö',
    github: 'AriPerkkio',
    bluesky: 'https://bsky.app/profile/ariperkkio.dev',
    mastodon: 'https://elk.zone/m.webtoo.ls/@AriPerkkio',
    sponsor: 'https://github.com/sponsors/AriPerkkio',
    title: 'Open source engineer',
    desc: 'Core team member of Vitest',
    org: 'StackBlitz',
    orgLink: 'https://stackblitz.com/',
  },
  {
    avatar: contributorsAvatars['hi-ogawa'],
    name: 'Hiroshi Ogawa',
    github: 'hi-ogawa',
    bluesky: 'https://bsky.app/profile/hiogawa.bsky.social',
    sponsor: 'https://github.com/sponsors/hi-ogawa',
    title: 'Open source enthusiast',
    desc: 'Team member of Vitest',
    org: 'VoidZero',
    orgLink: 'https://voidzero.dev/',
  },
  {
    avatar: contributorsAvatars['patak-dev'],
    name: 'Patak',
    github: 'patak-dev',
    bluesky: 'https://bsky.app/profile/patak.dev',
    mastodon: 'https://elk.zone/m.webtoo.ls/@patak',
    sponsor: 'https://github.com/sponsors/patak-dev',
    title: 'A collaborative being',
    org: 'StackBlitz',
    orgLink: 'https://stackblitz.com/',
    desc: 'Core team member of Vite & Vue',
  },
  {
    avatar: contributorsAvatars.userquin,
    name: 'Joaquín Sánchez',
    github: 'userquin',
    bluesky: 'https://bsky.app/profile/userquin.bsky.social',
    mastodon: 'https://elk.zone/m.webtoo.ls/@userquin',
    title: 'A fullstack and android developer',
    desc: 'Vite\'s fanatical follower',
  },
]

const plainTeamEmeritiMembers: CoreTeam[] = [
  {
    avatar: contributorsAvatars.Dunqing,
    name: 'Dunqing',
    github: 'Dunqing',
    title: 'A passionate enthusiast of open source contributions',
    desc: 'Team member of oxc & UnoCSS',
  },
  {
    avatar: contributorsAvatars.Aslemammad,
    name: 'Mohammad Bagher',
    github: 'Aslemammad',
    bluesky: 'https://bsky.app/profile/aslemammad.bsky.social',
    mastodon: 'https://elk.zone/m.webtoo.ls/@aslemammad',
    title: 'An open source developer',
    desc: 'Team member of Poimandres & Vike',
  },
  {
    avatar: contributorsAvatars.Demivan,
    name: 'Ivan Demchuk',
    github: 'Demivan',
    mastodon: 'https://elk.zone/fosstodon.org/@demivan',
    title: 'A tech lead, fullstack developer',
    desc: 'Author of fluent-vue',
  },
  {
    avatar: contributorsAvatars.poyoho,
    name: 'Yoho Po',
    github: 'poyoho',
    title: 'It\'s no problem in my locall',
    desc: 'Core team member of Vite & Team member of Vitest',
  },
  {
    avatar: contributorsAvatars.zxch3n,
    name: 'Zixuan Chen',
    github: 'zxch3n',
    bluesky: 'https://bsky.app/profile/zxch3n.bsky.social',
    mastodon: 'https://elk.zone/hachyderm.io/@zx',
    title: 'A fullstack developer',
    desc: 'Working on CRDTs & local-first software',
  },
]

const teamMembers = plainTeamMembers.map(tm => createLinks(tm))
const teamEmeritiMembers = plainTeamEmeritiMembers.map(tm => createLinks(tm))

export { teamEmeritiMembers, teamMembers }
````

## File: docs/.vitepress/meta.ts
````typescript
// noinspection ES6PreferShortImport: IntelliJ IDE hint to avoid warning to use `~/contributors`, will fail on build if changed

/* Texts */
export const vitestName = 'Vitest'
export const vitestShortName = 'Vitest'
export const vitestDescription = 'Next generation testing framework powered by Vite'

/* CDN fonts and styles */
export const googleapis = 'https://fonts.googleapis.com'
export const gstatic = 'https://fonts.gstatic.com'
export const font = `${googleapis}/css2?family=Readex+Pro:wght@200;400;600&display=swap`

/* vitepress head */
export const ogUrl = 'https://vitest.dev/'
export const ogImage = `${ogUrl}og.png`

/* GitHub and social links */
export const github = 'https://github.com/vitest-dev/vitest'
export const releases = 'https://github.com/vitest-dev/vitest/releases'
export const contributing = 'https://github.com/vitest-dev/vitest/blob/main/CONTRIBUTING.md'
export const discord = 'https://chat.vitest.dev'
export const bluesky = 'https://bsky.app/profile/vitest.dev'
export const mastodon = 'https://elk.zone/m.webtoo.ls/@vitest'

/* Avatar/Image/Sponsors servers */
export const preconnectLinks = [googleapis, gstatic]
export const preconnectHomeLinks = [googleapis, gstatic]

/* PWA runtime caching urlPattern regular expressions */
export const pwaFontsRegex = new RegExp(`^${googleapis}/.*`, 'i')
export const pwaFontStylesRegex = new RegExp(`^${gstatic}/.*`, 'i')
// eslint-disable-next-line prefer-regex-literals
export const githubusercontentRegex = new RegExp('^https://((i.ibb.co)|((raw|user-images).githubusercontent.com))/.*', 'i')
````

## File: docs/.vitepress/sponsors.ts
````typescript
interface Sponsor {
  name: string
  img: string
  url: string
}

const vitestSponsors = {
  special: [
    {
      name: 'VoidZero',
      url: 'https://voidzero.dev',
      img: '/voidzero.svg',
    },
    {
      name: 'NuxtLabs',
      url: 'https://nuxtlabs.com',
      img: '/nuxtlabs.svg',
    },
    {
      name: 'Bolt',
      url: 'https://bolt.new',
      img: '/bolt.svg',
    },
    {
      name: 'Zammad',
      url: 'https://zammad.com',
      img: '/zammad.svg',
    },
  ],
  platinum: [
    {
      name: 'Bit',
      url: 'https://bit.dev',
      img: '/bit.svg',
    },
  ],
  gold: [
    {
      name: 'vital',
      url: 'https://vital.io/',
      img: '/vital.svg',
    },
  ],
} satisfies Record<string, Sponsor[]>

export const sponsors = [
  {
    tier: 'Special Sponsors',
    size: 'big',
    items: vitestSponsors.special,
  },
  {
    tier: 'Platinum Sponsors',
    size: 'big',
    items: vitestSponsors.platinum,
  },
  {
    tier: 'Gold Sponsors',
    size: 'medium',
    items: vitestSponsors.gold,
  },
]
````

## File: docs/advanced/api/import-example.md
````markdown
```ts
function import<T>(moduleId: string): Promise<T>
```
````

## File: docs/advanced/api/index.md
````markdown
---
title: Advanced API
---

# Getting Started

::: warning
This guide lists advanced APIs to run tests via a Node.js script. If you just want to [run tests](/guide/), you probably don't need this. It is primarily used by library authors.
:::

You can import any method from the `vitest/node` entry-point.

## startVitest

```ts
function startVitest(
  mode: VitestRunMode,
  cliFilters: string[] = [],
  options: CliOptions = {},
  viteOverrides?: ViteUserConfig,
  vitestOptions?: VitestOptions,
): Promise<Vitest>
```

You can start running Vitest tests using its Node API:

```js
import { startVitest } from 'vitest/node'

const vitest = await startVitest('test')

await vitest.close()
```

`startVitest` function returns [`Vitest`](/advanced/api/vitest) instance if tests can be started.

If watch mode is not enabled, Vitest will call `close` method automatically.

If watch mode is enabled and the terminal supports TTY, Vitest will register console shortcuts.

You can pass down a list of filters as a second argument. Vitest will run only tests that contain at least one of the passed-down strings in their file path.

Additionally, you can use the third argument to pass in CLI arguments, which will override any test config options. Alternatively, you can pass in the complete Vite config as the fourth argument, which will take precedence over any other user-defined options.

After running the tests, you can get the results from the [`state.getTestModules`](/advanced/api/test-module) API:

```ts
import type { TestModule } from 'vitest/node'

const vitest = await startVitest('test')

console.log(vitest.state.getTestModules()) // [TestModule]
```

::: tip
The ["Running Tests"](/advanced/guide/tests#startvitest) guide has a usage example.
:::

## createVitest

```ts
function createVitest(
  mode: VitestRunMode,
  options: CliOptions,
  viteOverrides: ViteUserConfig = {},
  vitestOptions: VitestOptions = {},
): Promise<Vitest>
```

You can create Vitest instance by using `createVitest` function. It returns the same [`Vitest`](/advanced/api/vitest) instance as `startVitest`, but it doesn't start tests and doesn't validate installed packages.

```js
import { createVitest } from 'vitest/node'

const vitest = await createVitest('test', {
  watch: false,
})
```

::: tip
The ["Running Tests"](/advanced/guide/tests#createvitest) guide has a usage example.
:::

## resolveConfig

```ts
function resolveConfig(
  options: UserConfig = {},
  viteOverrides: ViteUserConfig = {},
): Promise<{
  vitestConfig: ResolvedConfig
  viteConfig: ResolvedViteConfig
}>
```

This method resolves the config with custom parameters. If no parameters are given, the `root` will be `process.cwd()`.

```ts
import { resolveConfig } from 'vitest/node'

// vitestConfig only has resolved "test" properties
const { vitestConfig, viteConfig } = await resolveConfig({
  mode: 'custom',
  configFile: false,
  resolve: {
    conditions: ['custom']
  },
  test: {
    setupFiles: ['/my-setup-file.js'],
    pool: 'threads',
  },
})
```

::: info
Due to how Vite's `createServer` works, Vitest has to resolve the config during the plugin's `configResolve` hook. Therefore, this method is not actually used internally and is exposed exclusively as a public API.

If you pass down the config to the `startVitest` or `createVitest` APIs, Vitest will still resolve the config again.
:::

::: warning
The `resolveConfig` doesn't resolve `projects`. To resolve projects configs, Vitest needs an established Vite server.

Also note that `viteConfig.test` will not be fully resolved. If you need Vitest config, use `vitestConfig` instead.
:::

## parseCLI

```ts
function parseCLI(argv: string | string[], config: CliParseOptions = {}): {
  filter: string[]
  options: CliOptions
}
```

You can use this method to parse CLI arguments. It accepts a string (where arguments are split by a single space) or a strings array of CLI arguments in the same format that Vitest CLI uses. It returns a filter and `options` that you can later pass down to `createVitest` or `startVitest` methods.

```ts
import { parseCLI } from 'vitest/node'

const result = parseCLI('vitest ./files.ts --coverage --browser=chrome')

result.options
// {
//   coverage: { enabled: true },
//   browser: { name: 'chrome', enabled: true }
// }

result.filter
// ['./files.ts']
```
````

## File: docs/advanced/api/plugin.md
````markdown
---
title: Plugin API
outline: deep
---

# Plugin API <Version>3.1.0</Version> {#plugin-api}

::: warning
This is an advanced API. If you just want to [run tests](/guide/), you probably don't need this. It is primarily used by library authors.

This guide assumes you know how to work with [Vite plugins](https://vite.dev/guide/api-plugin.html).
:::

Vitest supports an experimental `configureVitest` [plugin](https://vite.dev/guide/api-plugin.html) hook hook since version 3.1. Any feedback regarding this API is welcome in [GitHub](https://github.com/vitest-dev/vitest/discussions/7104).

::: code-group
```ts [only vitest]
import type { Vite, VitestPluginContext } from 'vitest/node'

export function plugin(): Vite.Plugin {
  return {
    name: 'vitest:my-plugin',
    configureVitest(context: VitestPluginContext) {
      // ...
    }
  }
}
```
```ts [vite and vitest]
/// <reference types="vitest/config" />

import type { Plugin } from 'vite'

export function plugin(): Plugin {
  return {
    name: 'vitest:my-plugin',
    transform() {
      // ...
    },
    configureVitest(context) {
      // ...
    }
  }
}
```
:::

::: tip TypeScript
Vitest re-exports all Vite type-only imports via a `Vite` namespace, which you can use to keep your versions in sync. However, if you are writing a plugin for both Vite and Vitest, you can continue using the `Plugin` type from the `vite` entrypoint. Just make sure you have `vitest/config` referenced somewhere so that `configureVitest` is augmented correctly:

```ts
/// <reference types="vitest/config" />
```
:::

Unlike [`reporter.onInit`](/advanced/api/reporters#oninit), this hooks runs early in Vitest lifecycle allowing you to make changes to configuration like `coverage` and `reporters`. A more notable change is that you can manipulate the global config from a [test project](/guide/projects) if your plugin is defined in the project and not in the global config.

## Context

### project

The current [test project](./test-project) that the plugin belongs to.

::: warning Browser Mode
Note that if you are relying on a browser feature, the `project.browser` field is not set yet. Use [`reporter.onBrowserInit`](./reporters#onbrowserinit) event instead.
:::

### vitest

The global [Vitest](./vitest) instance. You can change the global configuration by directly mutating the `vitest.config` property:

```ts
vitest.config.coverage.enabled = false
vitest.config.reporters.push([['my-reporter', {}]])
```

::: warning Config is Resolved
Note that Vitest already resolved the config, so some types might be different from the usual user configuration. This also means that some properties will not be resolved again, like `setupFile`. If you are adding new files, make sure to resolve it first.

At this point reporters are not created yet, so modifying `vitest.reporters` will have no effect because it will be overwritten. If you need to inject your own reporter, modify the config instead.
:::

### injectTestProjects

```ts
function injectTestProjects(
  config: TestProjectConfiguration | TestProjectConfiguration[]
): Promise<TestProject[]>
```

This methods accepts a config glob pattern, a filepath to the config or an inline configuration. It returns an array of resolved [test projects](./test-project).

```ts
// inject a single project with a custom alias
const newProjects = await injectTestProjects({
  // you can inherit the current project config by referencing `extends`
  // note that you cannot have a project with the name that already exists,
  // so it's a good practice to define a custom name
  extends: project.vite.config.configFile,
  test: {
    name: 'my-custom-alias',
    alias: {
      customAlias: resolve('./custom-path.js'),
    },
  },
})
```

::: warning Projects are Filtered
Vitest filters projects during the config resolution, so if the user defined a filter, injected project might not be resolved unless it [matches the filter](./vitest#matchesprojectfilter). You can update the filter via the `vitest.config.project` option to always include your test project:

```ts
vitest.config.project.push('my-project-name')
```

Note that this will only affect projects injected with [`injectTestProjects`](#injecttestprojects) method.
:::

::: tip Referencing the Current Config
If you want to keep the user configuration, you can specify the `extends` property. All other properties will be merged with the user defined config.

The project's `configFile` can be accessed in Vite's config: `project.vite.config.configFile`.

Note that this will also inherit the `name` - Vitest doesn't allow multiple projects with the same name, so this will throw an error. Make sure you specified a different name. You can access the current name via the `project.name` property and all used names are available in the `vitest.projects` array.
:::
````

## File: docs/advanced/api/reporters.md
````markdown
# Reporters

::: warning
This is an advanced API. If you just want to configure built-in reporters, read the ["Reporters"](/guide/reporters) guide.
:::

Vitest has its own test run lifecycle. These are represented by reporter's methods:

- [`onInit`](#oninit)
- [`onTestRunStart`](#ontestrunstart)
  - [`onTestModuleQueued`](#ontestmodulequeued)
  - [`onTestModuleCollected`](#ontestmodulecollected)
  - [`onTestModuleStart`](#ontestmodulestart)
    - [`onTestSuiteReady`](#ontestsuiteready)
      - [`onHookStart(beforeAll)`](#onhookstart)
      - [`onHookEnd(beforeAll)`](#onhookend)
        - [`onTestCaseReady`](#ontestcaseready)
          - [`onTestAnnotate`](#ontestannotate) <Version>3.2.0</Version>
          - [`onHookStart(beforeEach)`](#onhookstart)
          - [`onHookEnd(beforeEach)`](#onhookend)
          - [`onHookStart(afterEach)`](#onhookstart)
          - [`onHookEnd(afterEach)`](#onhookend)
        - [`onTestCaseResult`](#ontestcaseresult)
      - [`onHookStart(afterAll)`](#onhookstart)
      - [`onHookEnd(afterAll)`](#onhookend)
    - [`onTestSuiteResult`](#ontestsuiteresult)
  - [`onTestModuleEnd`](#ontestmoduleend)
- [`onTestRunEnd`](#ontestrunend)

Tests and suites within a single module will be reported in order unless they were skipped. All skipped tests are reported at the end of suite/module.

Note that since test modules can run in parallel, Vitest will report them in parallel.

This guide lists all supported reporter methods. However, don't forget that instead of creating your own reporter, you can [extend existing one](/advanced/reporters) instead:

```ts [custom-reporter.js]
import { BaseReporter } from 'vitest/reporters'

export default class CustomReporter extends BaseReporter {
  onTestRunEnd(testModules, errors) {
    console.log(testModule.length, 'tests finished running')
    super.onTestRunEnd(testModules, errors)
  }
}
```

## onInit

```ts
function onInit(vitest: Vitest): Awaitable<void>
```

This method is called when [Vitest](/advanced/api/vitest) was initiated or started, but before the tests were filtered.

::: info
Internally this method is called inside [`vitest.start`](/advanced/api/vitest#start), [`vitest.init`](/advanced/api/vitest#init) or [`vitest.mergeReports`](/advanced/api/vitest#mergereports). If you are using programmatic API, make sure to call either one depending on your needs before calling [`vitest.runTestSpecifications`](/advanced/api/vitest#runtestspecifications), for example. Built-in CLI will always run methods in correct order.
:::

Note that you can also get access to `vitest` instance from test cases, suites and test modules via a [`project`](/advanced/api/test-project) property, but it might also be useful to store a reference to `vitest` in this method.

::: details Example
```ts
import type { Reporter, TestSpecification, Vitest } from 'vitest/node'

class MyReporter implements Reporter {
  private vitest!: Vitest

  onInit(vitest: Vitest) {
    this.vitest = vitest
  }

  onTestRunStart(specifications: TestSpecification[]) {
    console.log(
      specifications.length,
      'test files will run in',
      this.vitest.config.root,
    )
  }
}

export default new MyReporter()
```
:::

## onBrowserInit <Badge type="warning">experimental</Badge> {#onbrowserinit}

```ts
function onBrowserInit(project: TestProject): Awaitable<void>
```

This method is called when the browser instance is initiated. It receives an instance of the project for which the browser is initiated. `project.browser` will always be defined when this method is called.

## onTestRunStart

```ts
function onTestRunStart(
  specifications: TestSpecification[]
): Awaitable<void>
```

This method is called when a new test run has started. It receives an array of [test specifications](/advanced/api/test-specification) scheduled to run. This array is readonly and available only for information purposes.

If Vitest didn't find any test files to run, this event will be invoked with an empty array, and then [`onTestRunEnd`](#ontestrunend) will be called immediately after.

::: details Example
```ts
import type { Reporter, TestSpecification } from 'vitest/node'

class MyReporter implements Reporter {
  onTestRunStart(specifications: TestSpecification[]) {
    console.log(specifications.length, 'test files will run')
  }
}

export default new MyReporter()
```
:::

::: tip DEPRECATION NOTICE
This method was added in Vitest 3, replacing `onPathsCollected` and `onSpecsCollected`, both of which are now deprecated.
:::

## onTestRunEnd

```ts
function onTestRunEnd(
  testModules: ReadonlyArray<TestModule>,
  unhandledErrors: ReadonlyArray<SerializedError>,
  reason: TestRunEndReason
): Awaitable<void>
```

This method is called after all tests have finished running and the coverage merged all reports, if it's enabled. Note that you can get the coverage information in [`onCoverage`](#oncoverage) hook.

It receives a readonly list of test modules. You can iterate over it via a [`testModule.children`](/advanced/api/test-collection) property to report the state and errors, if any.

The second argument is a readonly list of unhandled errors that Vitest wasn't able to attribute to any test. These can happen outside of the test run because of an error in a plugin, or inside the test run as a side-effect of a non-awaited function (for example, a timeout that threw an error after the test has finished running).

The third argument indicated why the test run was finished:

- `passed`: test run was finished normally and there are no errors
- `failed`: test run has at least one error (due to a syntax error during collection or an actual error during test execution)
- `interrupted`: test was interrupted by [`vitest.cancelCurrentRun`](/advanced/api/vitest#cancelcurrentrun) call or `Ctrl+C` was pressed in the terminal (note that it's still possible to have failed tests in this case)

If Vitest didn't find any test files to run, this event will be invoked with empty arrays of modules and errors, and the state will depend on the value of [`config.passWithNoTests`](/config/#passwithnotests).

::: details Example
```ts
import type {
  Reporter,
  SerializedError,
  TestModule,
  TestRunEndReason,
  TestSpecification
} from 'vitest/node'

class MyReporter implements Reporter {
  onTestRunEnd(
    testModules: ReadonlyArray<TestModule>,
    unhandledErrors: ReadonlyArray<SerializedError>,
    reason: TestRunEndReason,
  ) {
    if (reason === 'passed') {
      testModules.forEach(module => console.log(module.moduleId, 'succeeded'))
    }
    else if (reason === 'failed') {
      // note that this will skip possible errors in suites
      // you can get them from testSuite.errors()
      for (const testCase of testModules.children.allTests()) {
        if (testCase.result().state === 'failed') {
          console.log(testCase.fullName, 'in', testCase.module.moduleId, 'failed')
          console.log(testCase.result().errors)
        }
      }
    }
    else {
      console.log('test run was interrupted, skipping report')
    }
  }
}

export default new MyReporter()
```
:::

::: tip DEPRECATION NOTICE
This method was added in Vitest 3, replacing `onFinished`, which is now deprecated.
:::

## onCoverage

```ts
function onCoverage(coverage: unknown): Awaitable<void>
```

This hook is called after coverage results have been processed. Coverage provider's reporters are called after this hook. The typings of `coverage` depends on the `coverage.provider`. For Vitest's default built-in providers you can import the types from `istanbul-lib-coverage` package:

```ts
import type { CoverageMap } from 'istanbul-lib-coverage'

declare function onCoverage(coverage: CoverageMap): Awaitable<void>
```

If Vitest didn't perform any coverage, this hook is not called.

## onTestModuleQueued

```ts
function onTestModuleQueued(testModule: TestModule): Awaitable<void>
```

This method is called right before Vitest imports the setup file and the test module itself. This means that `testModule` will have no [`children`](/advanced/api/test-suite#children) yet, but you can start reporting it as the next test to run.

## onTestModuleCollected

```ts
function onTestModuleCollected(testModule: TestModule): Awaitable<void>
```

This method is called when all tests inside the file were collected, meaning [`testModule.children`](/advanced/api/test-suite#children) collection is populated, but tests don't have any results yet.

## onTestModuleStart

```ts
function onTestModuleStart(testModule: TestModule): Awaitable<void>
```

This method is called right after [`onTestModuleCollected`](#ontestmodulecollected) unless Vitest runs in collection mode ([`vitest.collect()`](/advanced/api/vitest#collect) or `vitest collect` in the CLI), in this case it will not be called at all because there are no tests to run.

## onTestModuleEnd

```ts
function onTestModuleEnd(testModule: TestModule): Awaitable<void>
```

This method is called when every test in the module finished running. This means, every test inside [`testModule.children`](/advanced/api/test-suite#children) will have a `test.result()` that is not equal to `pending`.

## onHookStart

```ts
function onHookStart(context: ReportedHookContext): Awaitable<void>
```

This method is called when any of these hooks have started running:

- `beforeAll`
- `afterAll`
- `beforeEach`
- `afterEach`

If `beforeAll` or `afterAll` are started, the `entity` will be either [`TestSuite`](/advanced/api/test-suite) or [`TestModule`](/advanced/api/test-module).

If `beforeEach` or `afterEach` are started, the `entity` will always be [`TestCase`](/advanced/api/test-case).

::: warning
`onHookStart` method will not be called if the hook did not run during the test run.
:::

## onHookEnd

```ts
function onHookEnd(context: ReportedHookContext): Awaitable<void>
```

This method is called when any of these hooks have finished running:

- `beforeAll`
- `afterAll`
- `beforeEach`
- `afterEach`

If `beforeAll` or `afterAll` have finished, the `entity` will be either [`TestSuite`](/advanced/api/test-suite) or [`TestModule`](/advanced/api/test-module).

If `beforeEach` or `afterEach` have finished, the `entity` will always be [`TestCase`](/advanced/api/test-case).

::: warning
`onHookEnd` method will not be called if the hook did not run during the test run.
:::

## onTestSuiteReady

```ts
function onTestSuiteReady(testSuite: TestSuite): Awaitable<void>
```

This method is called before the suite starts to run its tests. This method is also called if the suite was skipped.

If the file doesn't have any suites, this method will not be called. Consider using `onTestModuleStart` to cover this use case.

## onTestSuiteResult

```ts
function onTestSuiteResult(testSuite: TestSuite): Awaitable<void>
```

This method is called after the suite has finished running tests. This method is also called if the suite was skipped.

If the file doesn't have any suites, this method will not be called. Consider using `onTestModuleEnd` to cover this use case.

## onTestCaseReady

```ts
function onTestCaseReady(testCase: TestCase): Awaitable<void>
```

This method is called before the test starts to run or it was skipped. Note that `beforeEach` and `afterEach` hooks are considered part of the test because they can influence the result.

::: warning
Notice that it's possible to have [`testCase.result()`](/advanced/api/test-case#result) with `passed` or `failed` state already when `onTestCaseReady` is called. This can happen if test was running too fast and both `onTestCaseReady` and `onTestCaseResult` were scheduled to run in the same microtask.
:::

## onTestCaseResult

```ts
function onTestCaseResult(testCase: TestCase): Awaitable<void>
```

This method is called when the test has finished running or was just skipped. Note that this will be called after the `afterEach` hook is finished, if there are any.

At this point, [`testCase.result()`](/advanced/api/test-case#result) will have non-pending state.

## onTestAnnotate <Version>3.2.0</Version> {#ontestannotate}

```ts
function onTestAnnotate(
  testCase: TestCase,
  annotation: TestAnnotation,
): Awaitable<void>
```

The `onTestAnnotate` hook is associated with the [`context.annotate`](/guide/test-context#annotate) method. When `annotate` is invoked, Vitest serialises it and sends the same attachment to the main thread where reporter can interact with it.

If the path is specified, Vitest stores it in a separate directory (configured by [`attachmentsDir`](/config/#attachmentsdir)) and modifies the `path` property to reference it.
````

## File: docs/advanced/api/test-case.md
````markdown
# TestCase

The `TestCase` class represents a single test. This class is only available in the main thread. Refer to the ["Runner API"](/advanced/runner#tasks) if you are working with runtime tasks.

The `TestCase` instance always has a `type` property with the value of `test`. You can use it to distinguish between different task types:

```ts
if (task.type === 'test') {
  task // TestCase
}
```

## project

This references the [`TestProject`](/advanced/api/test-project) that the test belongs to.

## module

This is a direct reference to the [`TestModule`](/advanced/api/test-module) where the test is defined.

## name

This is a test name that was passed to the `test` function.

```ts
import { test } from 'vitest'

// [!code word:'the validation works correctly']
test('the validation works correctly', () => {
  // ...
})
```

## fullName

The name of the test including all parent suites separated with `>` symbol. This test has a full name "the validation logic > the validation works correctly":

```ts
import { describe, test } from 'vitest'

// [!code word:'the validation works correctly']
// [!code word:'the validation logic']
describe('the validation logic', () => {
  test('the validation works correctly', () => {
    // ...
  })
})
```

## id

This is test's unique identifier. This ID is deterministic and will be the same for the same test across multiple runs. The ID is based on the [project](/advanced/api/test-project) name, module ID and test order.

The ID looks like this:

```
1223128da3_0_0
^^^^^^^^^^ the file hash
           ^ suite index
             ^ test index
```

::: tip
You can generate file hash with `generateFileHash` function from `vitest/node` which is available since Vitest 3:

```ts
import { generateFileHash } from 'vitest/node'

const hash = generateFileHash(
  '/file/path.js', // relative path
  undefined, // the project name or `undefined` is not set
)
```
:::

::: danger
Don't try to parse the ID. It can have a minus at the start: `-1223128da3_0_0_0`.
:::

## location

The location in the module where the test was defined. Locations are collected only if [`includeTaskLocation`](/config/#includetasklocation) is enabled in the config. Note that this option is automatically enabled if `--reporter=html`, `--ui` or `--browser` flags are used.

The location of this test will be equal to `{ line: 3, column: 1 }`:

```ts:line-numbers {3}
import { test } from 'vitest'

test('the validation works correctly', () => {
  // ...
})
```

## parent

Parent [suite](/advanced/api/test-suite). If the test was called directly inside the [module](/advanced/api/test-module), the parent will be the module itself.

## options

```ts
interface TaskOptions {
  readonly each: boolean | undefined
  readonly fails: boolean | undefined
  readonly concurrent: boolean | undefined
  readonly shuffle: boolean | undefined
  readonly retry: number | undefined
  readonly repeats: number | undefined
  readonly mode: 'run' | 'only' | 'skip' | 'todo'
}
```

The options that test was collected with.

## ok

```ts
function ok(): boolean
```

Checks if the test did not fail the suite. If the test is not finished yet or was skipped, it will return `true`.

## meta

```ts
function meta(): TaskMeta
```

Custom [metadata](/advanced/metadata) that was attached to the test during its execution. The meta can be attached by assigning a property to the `ctx.task.meta` object during a test run:

```ts {3,6}
import { test } from 'vitest'

test('the validation works correctly', ({ task }) => {
  // ...

  task.meta.decorated = false
})
```

If the test did not finish running yet, the meta will be an empty object.

## result

```ts
function result(): TestResult
```

Test results. If test is not finished yet or was just collected, it will be equal to `TestResultPending`:

```ts
export interface TestResultPending {
  /**
   * The test was collected, but didn't finish running yet.
   */
  readonly state: 'pending'
  /**
   * Pending tests have no errors.
   */
  readonly errors: undefined
}
```

If the test was skipped, the return value will be `TestResultSkipped`:

```ts
interface TestResultSkipped {
  /**
   * The test was skipped with `skip` or `todo` flag.
   * You can see which one was used in the `options.mode` option.
   */
  readonly state: 'skipped'
  /**
   * Skipped tests have no errors.
   */
  readonly errors: undefined
  /**
   * A custom note passed down to `ctx.skip(note)`.
   */
  readonly note: string | undefined
}
```

::: tip
If the test was skipped because another test has `only` flag, the `options.mode` will be equal to `skip`.
:::

If the test failed, the return value will be `TestResultFailed`:

```ts
interface TestResultFailed {
  /**
   * The test failed to execute.
   */
  readonly state: 'failed'
  /**
   * Errors that were thrown during the test execution.
   */
  readonly errors: ReadonlyArray<TestError>
}
```

If the test passed, the return value will be `TestResultPassed`:

```ts
interface TestResultPassed {
  /**
   * The test passed successfully.
   */
  readonly state: 'passed'
  /**
   * Errors that were thrown during the test execution.
   */
  readonly errors: ReadonlyArray<TestError> | undefined
}
```

::: warning
Note that the test with `passed` state can still have errors attached - this can happen if `retry` was triggered at least once.
:::

## diagnostic

```ts
function diagnostic(): TestDiagnostic | undefined
```

Useful information about the test like duration, memory usage, etc:

```ts
interface TestDiagnostic {
  /**
   * If the duration of the test is above `slowTestThreshold`.
   */
  readonly slow: boolean
  /**
   * The amount of memory used by the test in bytes.
   * This value is only available if the test was executed with `logHeapUsage` flag.
   */
  readonly heap: number | undefined
  /**
   * The time it takes to execute the test in ms.
   */
  readonly duration: number
  /**
   * The time in ms when the test started.
   */
  readonly startTime: number
  /**
   * The amount of times the test was retried.
   */
  readonly retryCount: number
  /**
   * The amount of times the test was repeated as configured by `repeats` option.
   * This value can be lower if the test failed during the repeat and no `retry` is configured.
   */
  readonly repeatCount: number
  /**
   * If test passed on a second retry.
   */
  readonly flaky: boolean
}
```

::: info
`diagnostic()` will return `undefined` if the test was not scheduled to run yet.
:::
````

## File: docs/advanced/api/test-collection.md
````markdown
# TestCollection

`TestCollection` represents a collection of top-level [suites](/advanced/api/test-suite) and [tests](/advanced/api/test-case) in a suite or a module. It also provides useful methods to iterate over itself.

::: info
Most methods return an iterator instead of an array for better performance in case you don't need every item in the collection. If you prefer working with array, you can spread the iterator: `[...children.allSuites()]`.

Also note that the collection itself is an iterator:

```ts
for (const child of module.children) {
  console.log(child.type, child.name)
}
```
:::

## size

The number of tests and suites in the collection.

::: warning
This number includes only tests and suites at the top-level, it doesn't include nested suites and tests.
:::

## at

```ts
function at(index: number): TestCase | TestSuite | undefined
```

Returns the test or suite at a specific index. This method accepts negative indexes.

## array

```ts
function array(): (TestCase | TestSuite)[]
```

The same collection but as an array. This is useful if you want to use `Array` methods like `map` and `filter` that are not supported by the `TaskCollection` implementation.

## allSuites

```ts
function allSuites(): Generator<TestSuite, undefined, void>
```

Filters all suites that are part of this collection and its children.

```ts
for (const suite of module.children.allSuites()) {
  if (suite.errors().length) {
    console.log('failed to collect', suite.errors())
  }
}
```

## allTests

```ts
function allTests(state?: TestState): Generator<TestCase, undefined, void>
```

Filters all tests that are part of this collection and its children.

```ts
for (const test of module.children.allTests()) {
  if (test.result().state === 'pending') {
    console.log('test', test.fullName, 'did not finish')
  }
}
```

You can pass down a `state` value to filter tests by the state.

## tests

```ts
function tests(state?: TestState): Generator<TestCase, undefined, void>
```

Filters only the tests that are part of this collection. You can pass down a `state` value to filter tests by the state.

## suites

```ts
function suites(): Generator<TestSuite, undefined, void>
```

Filters only the suites that are part of this collection.
````

## File: docs/advanced/api/test-module.md
````markdown
# TestModule

The `TestModule` class represents a single module in a single project. This class is only available in the main thread. Refer to the ["Runner API"](/advanced/runner#tasks) if you are working with runtime tasks.

The `TestModule` instance always has a `type` property with the value of `module`. You can use it to distinguish between different task types:

```ts
if (task.type === 'module') {
  task // TestModule
}
```

::: warning Extending Suite Methods
The `TestModule` class inherits all methods and properties from the [`TestSuite`](/advanced/api/test-suite). This guide will only list methods and properties unique to the `TestModule`.
:::

## moduleId

This is usually an absolute unix file path (even on Windows). It can be a virtual id if the file is not on the disk. This value corresponds to Vite's `ModuleGraph` id.

```ts
'C:/Users/Documents/project/example.test.ts' // ✅
'/Users/mac/project/example.test.ts' // ✅
'C:\\Users\\Documents\\project\\example.test.ts' // ❌
```

## state

```ts
function state(): TestModuleState
```

Works the same way as [`testSuite.state()`](/advanced/api/test-suite#state), but can also return `queued` if module wasn't executed yet.

## meta <Version>3.1.0</Version> {#meta}

```ts
function meta(): TaskMeta
```

Custom [metadata](/advanced/metadata) that was attached to the module during its execution or collection. The meta can be attached by assigning a property to the `task.meta` object during a test run:

```ts {5,10}
import { test } from 'vitest'

describe('the validation works correctly', (task) => {
  // assign "decorated" during collection
  task.file.meta.decorated = false

  test('some test', ({ task }) => {
    // assign "decorated" during test run, it will be available
    // only in onTestCaseReady hook
    task.file.meta.decorated = false
  })
})
```

:::tip
If metadata was attached during collection (outside of the `test` function), then it will be available in [`onTestModuleCollected`](./reporters#ontestmodulecollected) hook in the custom reporter.
:::

## diagnostic

```ts
function diagnostic(): ModuleDiagnostic
```

Useful information about the module like duration, memory usage, etc. If the module was not executed yet, all diagnostic values will return `0`.

```ts
interface ModuleDiagnostic {
  /**
   * The time it takes to import and initiate an environment.
   */
  readonly environmentSetupDuration: number
  /**
   * The time it takes Vitest to setup test harness (runner, mocks, etc.).
   */
  readonly prepareDuration: number
  /**
   * The time it takes to import the test module.
   * This includes importing everything in the module and executing suite callbacks.
   */
  readonly collectDuration: number
  /**
   * The time it takes to import the setup module.
   */
  readonly setupDuration: number
  /**
   * Accumulated duration of all tests and hooks in the module.
   */
  readonly duration: number
  /**
   * The amount of memory used by the module in bytes.
   * This value is only available if the test was executed with `logHeapUsage` flag.
   */
  readonly heap: number | undefined
  /**
   * The time spent importing every non-externalized dependency that Vitest has processed.
   */
  readonly importDurations: Record<string, ImportDuration>
}

/** The time spent importing & executing a non-externalized file. */
interface ImportDuration {
  /** The time spent importing & executing the file itself, not counting all non-externalized imports that the file does. */
  selfTime: number

  /** The time spent importing & executing the file and all its imports. */
  totalTime: number
}
```
````

## File: docs/advanced/api/test-project.md
````markdown
---
title: TestProject
---

# TestProject <Version>3.0.0</Version> {#testproject}

::: warning
This guide describes the advanced Node.js API. If you just want to define projects, follow the ["Test Projects"](/guide/projects) guide.
:::

## name

The name is a unique string assigned by the user or interpreted by Vitest. If user did not provide a name, Vitest tries to load a `package.json` in the root of the project and takes the `name` property from there. If there is no `package.json`, Vitest uses the name of the folder by default. Inline projects use numbers as the name (converted to string).

::: code-group
```ts [node.js]
import { createVitest } from 'vitest/node'

const vitest = await createVitest('test')
vitest.projects.map(p => p.name) === [
  '@pkg/server',
  'utils',
  '2',
  'custom'
]
```
```ts [vitest.config.js]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      './packages/server', // has package.json with "@pkg/server"
      './utils', // doesn't have a package.json file
      {
        // doesn't customize the name
        test: {
          pool: 'threads',
        },
      },
      {
        // customized the name
        test: {
          name: 'custom',
        },
      },
    ],
  },
})
```
:::

::: info
If the [root project](/advanced/api/vitest#getroottestproject) is not part of user projects, its `name` will not be resolved.
:::

## vitest

`vitest` references the global [`Vitest`](/advanced/api/vitest) process.

## serializedConfig

This is the config that test processes receive. Vitest [serializes config](https://github.com/vitest-dev/vitest/blob/main/packages/vitest/src/node/config/serializeConfig.ts) manually by removing all functions and properties that are not possible to serialize. Since this value is available in both tests and node, its type is exported from the main entry point.

```ts
import type { SerializedConfig } from 'vitest'

const config: SerializedConfig = vitest.projects[0].serializedConfig
```

::: warning
The `serializedConfig` property is a getter. Every time it's accessed Vitest serializes the config again in case it was changed. This also means that it always returns a different reference:

```ts
project.serializedConfig === project.serializedConfig // ❌
```
:::

## globalConfig

The test config that [`Vitest`](/advanced/api/vitest) was initialized with. If this is the [root project](/advanced/api/vitest#getroottestproject), `globalConfig` and `config` will reference the same object. This config is useful for values that cannot be set on the project level, like `coverage` or `reporters`.

```ts
import type { ResolvedConfig } from 'vitest/node'

vitest.config === vitest.projects[0].globalConfig
```

## config

This is the project's resolved test config.

## hash <Version>3.2.0</Version> {#hash}

The unique hash of this project. This value is consistent between the reruns.

It is based on the root of the project and its name. Note that the root path is not consistent between different OS, so the hash will also be different.

## vite

This is project's [`ViteDevServer`](https://vite.dev/guide/api-javascript#vitedevserver). All projects have their own Vite servers.

## browser

This value will be set only if tests are running in the browser. If `browser` is enabled, but tests didn't run yet, this will be `undefined`. If you need to check if the project supports browser tests, use `project.isBrowserEnabled()` method.

::: warning
The browser API is even more experimental and doesn't follow SemVer. The browser API will be standardized separately from the rest of the APIs.
:::

## provide

```ts
function provide<T extends keyof ProvidedContext & string>(
  key: T,
  value: ProvidedContext[T],
): void
```

A way to provide custom values to tests in addition to [`config.provide`](/config/#provide) field. All values are validated with [`structuredClone`](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone) before they are stored, but the values on `providedContext` themselves are not cloned.

::: code-group
```ts [node.js]
import { createVitest } from 'vitest/node'

const vitest = await createVitest('test')
const project = vitest.projects.find(p => p.name === 'custom')
project.provide('key', 'value')
await vitest.start()
```
```ts [test.spec.js]
import { inject } from 'vitest'
const value = inject('key')
```
:::

The values can be provided dynamically. Provided value in tests will be updated on their next run.

::: tip
This method is also available to [global setup files](/config/#globalsetup) for cases where you cannot use the public API:

```js
export default function setup({ provide }) {
  provide('wsPort', 3000)
}
```
:::

## getProvidedContext

```ts
function getProvidedContext(): ProvidedContext
```

This returns the context object. Every project also inherits the global context set by `vitest.provide`.

```ts
import { createVitest } from 'vitest/node'

const vitest = await createVitest('test')
vitest.provide('global', true)
const project = vitest.projects.find(p => p.name === 'custom')
project.provide('key', 'value')

// { global: true, key: 'value' }
const context = project.getProvidedContext()
```

::: tip
Project context values will always override root project's context.
:::

## createSpecification

```ts
function createSpecification(
  moduleId: string,
  locations?: number[],
): TestSpecification
```

Create a [test specification](/advanced/api/test-specification) that can be used in [`vitest.runTestSpecifications`](/advanced/api/vitest#runtestspecifications). Specification scopes the test file to a specific `project` and test `locations` (optional). Test [locations](/advanced/api/test-case#location) are code lines where the test is defined in the source code. If locations are provided, Vitest will only run tests defined on those lines. Note that if [`testNamePattern`](/config/#testnamepattern) is defined, then it will also be applied.

```ts
import { createVitest } from 'vitest/node'
import { resolve } from 'node:path/posix'

const vitest = await createVitest('test')
const project = vitest.projects[0]
const specification = project.createSpecification(
  resolve('./example.test.ts'),
  [20, 40], // optional test lines
)
await vitest.runTestSpecifications([specification])
```

::: warning
`createSpecification` expects resolved [module ID](/advanced/api/test-specification#moduleid). It doesn't auto-resolve the file or check that it exists on the file system.

Also note that `project.createSpecification` always returns a new instance.
:::

## isRootProject

```ts
function isRootProject(): boolean
```

Checks if the current project is the root project. You can also get the root project by calling [`vitest.getRootProject()`](#getrootproject).

## globTestFiles

```ts
function globTestFiles(filters?: string[]): {
  /**
   * Test files that match the filters.
   */
  testFiles: string[]
  /**
   * Typecheck test files that match the filters. This will be empty unless `typecheck.enabled` is `true`.
   */
  typecheckTestFiles: string[]
}
```

Globs all test files. This function returns an object with regular tests and typecheck tests.

This method accepts `filters`. Filters can only a part of the file path, unlike in other methods on the [`Vitest`](/advanced/api/vitest) instance:

```js
project.globTestFiles(['foo']) // ✅
project.globTestFiles(['basic/foo.js:10']) // ❌
```

::: tip
Vitest uses [fast-glob](https://www.npmjs.com/package/fast-glob) to find test files. `test.dir`, `test.root`, `root` or `process.cwd()` define the `cwd` option.

This method looks at several config options:

- `test.include`, `test.exclude` to find regular test files
- `test.includeSource`, `test.exclude` to find in-source tests
- `test.typecheck.include`, `test.typecheck.exclude` to find typecheck tests
:::

## matchesTestGlob

```ts
function matchesTestGlob(
  moduleId: string,
  source?: () => string
): boolean
```

This method checks if the file is a regular test file. It uses the same config properties that `globTestFiles` uses for validation.

This method also accepts a second parameter, which is the source code. This is used to validate if the file is an in-source test. If you are calling this method several times for several projects it is recommended to read the file once and pass it down directly. If the file is not a test file, but matches the `includeSource` glob, Vitest will synchronously read the file unless the `source` is provided.

```ts
import { createVitest } from 'vitest/node'
import { resolve } from 'node:path/posix'

const vitest = await createVitest('test')
const project = vitest.projects[0]

project.matchesTestGlob(resolve('./basic.test.ts')) // true
project.matchesTestGlob(resolve('./basic.ts')) // false
project.matchesTestGlob(resolve('./basic.ts'), () => `
if (import.meta.vitest) {
  // ...
}
`) // true if `includeSource` is set
```

## import

<!--@include: ./import-example.md-->

Import a file using Vite module runner. The file will be transformed by Vite with provided project's config and executed in a separate context. Note that `moduleId` will be relative to the `config.root`.

::: danger
`project.import` reuses Vite's module graph, so importing the same module using a regular import will return a different module:

```ts
import * as staticExample from './example.js'
const dynamicExample = await project.import('./example.js')

dynamicExample !== staticExample // ✅
```
:::

::: info
Internally, Vitest uses this method to import global setups, custom coverage providers and custom reporters, meaning all of them share the same module graph as long as they belong to the same Vite server.
:::

## onTestsRerun

```ts
function onTestsRerun(cb: OnTestsRerunHandler): void
```

This is a shorthand for [`project.vitest.onTestsRerun`](/advanced/api/vitest#ontestsrerun). It accepts a callback that will be awaited when the tests have been scheduled to rerun (usually, due to a file change).

```ts
project.onTestsRerun((specs) => {
  console.log(specs)
})
```

## isBrowserEnabled

```ts
function isBrowserEnabled(): boolean
```

Returns `true` if this project runs tests in the browser.

## close

```ts
function close(): Promise<void>
```

Closes the project and all associated resources. This can only be called once; the closing promise is cached until the server restarts. If the resources are needed again, create a new project.

In detail, this method closes the Vite server, stops the typechecker service, closes the browser if it's running, deletes the temporary directory that holds the source code, and resets the provided context.
````

## File: docs/advanced/api/test-specification.md
````markdown
# TestSpecification

The `TestSpecification` class describes what module to run as a test and its parameters.

You can only create a specification by calling [`createSpecification`](/advanced/api/test-project#createspecification) method on a test project:

```ts
const specification = project.createSpecification(
  resolve('./example.test.ts'),
  [20, 40], // optional test lines
)
```

`createSpecification` expects resolved module ID. It doesn't auto-resolve the file or check that it exists on the file system.

## taskId

[Test module's](/advanced/api/test-suite#id) identifier.

## project

This references the [`TestProject`](/advanced/api/test-project) that the test module belongs to.

## moduleId

The ID of the module in Vite's module graph. Usually, it's an absolute file path using posix separator:

```ts
'C:/Users/Documents/project/example.test.ts' // ✅
'/Users/mac/project/example.test.ts' // ✅
'C:\\Users\\Documents\\project\\example.test.ts' // ❌
```

## testModule

Instance of [`TestModule`](/advanced/api/test-module) associated with the specification. If test wasn't queued yet, this will be `undefined`.

## pool <Badge type="warning">experimental</Badge> {#pool}

The [`pool`](/config/#pool) in which the test module will run.

::: danger
It's possible to have multiple pools in a single test project with [`poolMatchGlob`](/config/#poolmatchglob) and [`typecheck.enabled`](/config/#typecheck-enabled). This means it's possible to have several specifications with the same `moduleId` but different `pool`. In Vitest 4, the project will only support a single pool, and this property will be removed.
:::

## testLines

This is an array of lines in the source code where the test files are defined. This field is defined only if the `createSpecification` method received an array.

Note that if there is no test on at least one of the lines, the whole suite will fail. An example of a correct `testLines` configuration:

::: code-group
```ts [script.js]
const specification = project.createSpecification(
  resolve('./example.test.ts'),
  [3, 8, 9],
)
```
```ts:line-numbers{3,8,9} [example.test.js]
import { test, describe } from 'vitest'

test('verification works')

describe('a group of tests', () => { // [!code error]
  // ...

  test('nested test')
  test.skip('skipped test')
})
```
:::

## toJSON

```ts
function toJSON(): SerializedTestSpecification
```

`toJSON` generates a JSON-friendly object that can be consumed by the [Browser Mode](/guide/browser/) or [Vitest UI](/guide/ui).
````

## File: docs/advanced/api/test-suite.md
````markdown
# TestSuite

The `TestSuite` class represents a single suite. This class is only available in the main thread. Refer to the ["Runner API"](/advanced/runner#tasks) if you are working with runtime tasks.

The `TestSuite` instance always has a `type` property with the value of `suite`. You can use it to distinguish between different task types:

```ts
if (task.type === 'suite') {
  task // TestSuite
}
```

## project

This references the [`TestProject`](/advanced/api/test-project) that the test belongs to.

## module

This is a direct reference to the [`TestModule`](/advanced/api/test-module) where the test is defined.

## name

This is a suite name that was passed to the `describe` function.

```ts
import { describe } from 'vitest'

// [!code word:'the validation logic']
describe('the validation logic', () => {
  // ...
})
```

## fullName

The name of the suite including all parent suites separated with `>` symbol. This suite has a full name "the validation logic > validating cities":

```ts
import { describe, test } from 'vitest'

// [!code word:'the validation logic']
// [!code word:'validating cities']
describe('the validation logic', () => {
  describe('validating cities', () => {
    // ...
  })
})
```

## id

This is suite's unique identifier. This ID is deterministic and will be the same for the same suite across multiple runs. The ID is based on the [project](/advanced/api/test-project) name, module ID and suite order.

The ID looks like this:

```
1223128da3_0_0_0
^^^^^^^^^^ the file hash
           ^ suite index
             ^ nested suite index
               ^ test index
```

::: tip
You can generate file hash with `generateFileHash` function from `vitest/node` which is available since Vitest 3:

```ts
import { generateFileHash } from 'vitest/node'

const hash = generateFileHash(
  '/file/path.js', // relative path
  undefined, // the project name or `undefined` is not set
)
```
:::

::: danger
Don't try to parse the ID. It can have a minus at the start: `-1223128da3_0_0_0`.
:::

## location

The location in the module where the suite was defined. Locations are collected only if [`includeTaskLocation`](/config/#includetasklocation) is enabled in the config. Note that this option is automatically enabled if `--reporter=html`, `--ui` or `--browser` flags are used.

The location of this suite will be equal to `{ line: 3, column: 1 }`:

```ts:line-numbers {3}
import { describe } from 'vitest'

describe('the validation works correctly', () => {
  // ...
})
```

## parent

Parent suite. If the suite was called directly inside the [module](/advanced/api/test-module), the parent will be the module itself.

## options

```ts
interface TaskOptions {
  readonly each: boolean | undefined
  readonly fails: boolean | undefined
  readonly concurrent: boolean | undefined
  readonly shuffle: boolean | undefined
  readonly retry: number | undefined
  readonly repeats: number | undefined
  readonly mode: 'run' | 'only' | 'skip' | 'todo'
}
```

The options that suite was collected with.

## children

This is a [collection](/advanced/api/test-collection) of all suites and tests inside the current suite.

```ts
for (const task of suite.children) {
  if (task.type === 'test') {
    console.log('test', task.fullName)
  }
  else {
    // task is TaskSuite
    console.log('suite', task.name)
  }
}
```

::: warning
Note that `suite.children` will only iterate the first level of nesting, it won't go deeper. If you need to iterate over all tests or suites, use [`children.allTests()`](/advanced/api/test-collection#alltests) or [`children.allSuites()`](/advanced/api/test-collection#allsuites). If you need to iterate over everything, use recursive function:

```ts
function visit(collection: TestCollection) {
  for (const task of collection) {
    if (task.type === 'suite') {
      // report a suite
      visit(task.children)
    }
    else {
      // report a test
    }
  }
}
```
:::

## ok

```ts
function ok(): boolean
```

Checks if the suite has any failed tests. This will also return `false` if suite failed during collection. In that case, check the [`errors()`](#errors) for thrown errors.

## state

```ts
function state(): TestSuiteState
```

Checks the running state of the suite. Possible return values:

- **pending**: the tests in this suite did not finish running yet.
- **failed**: this suite has failed tests or they couldn't be collected. If [`errors()`](#errors) is not empty, it means the suite failed to collect tests.
- **passed**: every test inside this suite has passed.
- **skipped**: this suite was skipped during collection.

::: warning
Note that [test module](/advanced/api/test-module) also has a `state` method that returns the same values, but it can also return an additional `queued` state if the module wasn't executed yet.
:::

## errors

```ts
function errors(): TestError[]
```

Errors that happened outside of the test run during collection, like syntax errors.

```ts {4}
import { describe } from 'vitest'

describe('collection failed', () => {
  throw new Error('a custom error')
})
```

::: warning
Note that errors are serialized into simple objects: `instanceof Error` will always return `false`.
:::

## meta <Version>3.1.0</Version> {#meta}

```ts
function meta(): TaskMeta
```

Custom [metadata](/advanced/metadata) that was attached to the suite during its execution or collection. The meta can be attached by assigning a property to the `task.meta` object during a test run:

```ts {5,10}
import { test } from 'vitest'

describe('the validation works correctly', (task) => {
  // assign "decorated" during collection
  task.meta.decorated = false

  test('some test', ({ task }) => {
    // assign "decorated" during test run, it will be available
    // only in onTestCaseReady hook
    task.suite.meta.decorated = false
  })
})
```

:::tip
If metadata was attached during collection (outside of the `test` function), then it will be available in [`onTestModuleCollected`](./reporters#ontestmodulecollected) hook in the custom reporter.
:::
````

## File: docs/advanced/api/vitest.md
````markdown
---
outline: deep
title: Vitest API
---

# Vitest

Vitest instance requires the current test mode. It can be either:

- `test` when running runtime tests
- `benchmark` when running benchmarks <Badge type="warning">experimental</Badge>

::: details New in Vitest 3
Vitest 3 is one step closer to stabilising the public API. To achieve that, we deprecated and removed some of the previously public methods on the `Vitest` class. These APIs were made private:

- `configOverride` (use [`setGlobalTestNamePattern`](#setglobaltestnamepattern) or [`enableSnapshotUpdate`](#enablesnapshotupdate))
- `coverageProvider`
- `filenamePattern`
- `runningPromise`
- `closingPromise`
- `isCancelling`
- `coreWorkspaceProject`
- `resolvedProjects`
- `_browserLastPort`
- `_options`
- `reporters`
- `vitenode`
- `runner`
- `pool`
- `setServer`
- `_initBrowserServers`
- `rerunTask`
- `changeProjectName`
- `changeNamePattern`
- `changeFilenamePattern`
- `rerunFailed`
- `_createRootProject` (renamed to `_ensureRootProject`, but still private)
- `filterTestsBySource` (this was moved to the new internal `vitest.specifications` instance)
- `runFiles` (use [`runTestSpecifications`](#runtestspecifications) instead)
- `onAfterSetServer`

These APIs were deprecated:
- `invalidates`
- `changedTests` (use [`onFilterWatchedSpecification`](#onfilterwatchedspecification) instead)
- `server` (use [`vite`](#vite) instead)
- `getProjectsByTestFile` (use [`getModuleSpecifications`](#getmodulespecifications) instead)
- `getFileWorkspaceSpecs` (use [`getModuleSpecifications`](#getmodulespecifications) instead)
- `getModuleProjects` (filter by [`this.projects`](#projects) yourself)
- `updateLastChanged` (renamed to [`invalidateFile`](#invalidatefile))
- `globTestSpecs` (use [`globTestSpecifications`](#globtestspecifications) instead)
- `globTestFiles` (use [`globTestSpecifications`](#globtestspecifications) instead)
- `listFile` (use [`getRelevantTestSpecifications`](#getrelevanttestspecifications) instead)
:::

## mode

### test

Test mode will only call functions inside `test` or `it`, and throws an error when `bench` is encountered. This mode uses `include` and `exclude` options in the config to find test files.

### benchmark <Badge type="warning">experimental</Badge>

Benchmark mode calls `bench` functions and throws an error, when it encounters `test` or `it`. This mode uses `benchmark.include` and `benchmark.exclude` options in the config to find benchmark files.

## config

The root (or global) config. If projects are defined, they will reference this as `globalConfig`.

::: warning
This is Vitest config, it doesn't extend _Vite_ config. It only has resolved values from the `test` property.
:::

## vite

This is a global [`ViteDevServer`](https://vite.dev/guide/api-javascript#vitedevserver).

## state <Badge type="warning">experimental</Badge>

::: warning
Public `state` is an experimental API (except `vitest.state.getReportedEntity`). Breaking changes might not follow SemVer, please pin Vitest's version when using it.
:::

Global state stores information about the current tests. It uses the same API from `@vitest/runner` by default, but we recommend using the [Reported Tasks API](/advanced/reporters#reported-tasks) instead by calling `state.getReportedEntity()` on the `@vitest/runner` API:

```ts
const task = vitest.state.idMap.get(taskId) // old API
const testCase = vitest.state.getReportedEntity(task) // new API
```

In the future, the old API won't be exposed anymore.

## snapshot

The global snapshot manager. Vitest keeps track of all snapshots using the `snapshot.add` method.

You can get the latest summary of snapshots via the `vitest.snapshot.summary` property.

## cache

Cache manager that stores information about latest test results and test file stats. In Vitest itself this is only used by the default sequencer to sort tests.

## projects

An array of [test projects](/advanced/api/test-project) that belong to user's projects. If the user did not specify a them, this array will only contain a [root project](#getrootproject).

Vitest will ensure that there is always at least one project in this array. If the user specifies a non-existent `--project` name, Vitest will throw an error before this array is defined.

## getRootProject

```ts
function getRootProject(): TestProject
```

This returns the root test project. The root project generally doesn't run any tests and is not included in `vitest.projects` unless the user explicitly includes the root config in their configuration, or projects are not defined at all.

The primary goal of the root project is to setup the global config. In fact, `rootProject.config` references `rootProject.globalConfig` and `vitest.config` directly:

```ts
rootProject.config === rootProject.globalConfig === rootProject.vitest.config
```

## provide

```ts
function provide<T extends keyof ProvidedContext & string>(
  key: T,
  value: ProvidedContext[T],
): void
```

Vitest exposes `provide` method which is a shorthand for `vitest.getRootProject().provide`. With this method you can pass down values from the main thread to tests. All values are checked with `structuredClone` before they are stored, but the values themselves are not cloned.

To receive the values in the test, you need to import `inject` method from `vitest` entrypoint:

```ts
import { inject } from 'vitest'
const port = inject('wsPort') // 3000
```

For better type safety, we encourage you to augment the type of `ProvidedContext`:

```ts
import { createVitest } from 'vitest/node'

const vitest = await createVitest('test', {
  watch: false,
})
vitest.provide('wsPort', 3000)

declare module 'vitest' {
  export interface ProvidedContext {
    wsPort: number
  }
}
```

::: warning
Technically, `provide` is a method of [`TestProject`](/advanced/api/test-project), so it is limited to the specific project. However, all projects inherit the values from the root project which makes `vitest.provide` universal way of passing down values to tests.
:::

## getProvidedContext

```ts
function getProvidedContext(): ProvidedContext
```

This returns the root context object. This is a shorthand for `vitest.getRootProject().getProvidedContext`.

## getProjectByName

```ts
function getProjectByName(name: string): TestProject
```

This method returns the project by its name. Similar to calling `vitest.projects.find`.

::: warning
In case the project doesn't exist, this method will return the root project - make sure to check the names again if the project you are looking for is the one returned.

If user didn't customize a name, the Vitest will assign an empty string as a name.
:::

## globTestSpecifications

```ts
function globTestSpecifications(
  filters?: string[],
): Promise<TestSpecification[]>
```

This method constructs new [test specifications](/advanced/api/test-specification) by collecting every test in all projects with [`project.globTestFiles`](/advanced/api/test-project#globtestfiles). It accepts string filters to match the test files - these are the same filters that [CLI supports](/guide/filtering#cli).

This method automatically caches all test specifications. When you call [`getModuleSpecifications`](#getmodulespecifications) next time, it will return the same specifications unless [`clearSpecificationsCache`](#clearspecificationscache) was called before that.

::: warning
As of Vitest 3, it's possible to have multiple test specifications with the same module ID (file path) if `poolMatchGlob` has several pools or if `typecheck` is enabled. This possibility will be removed in Vitest 4.
:::

```ts
const specifications = await vitest.globTestSpecifications(['my-filter'])
// [TestSpecification{ moduleId: '/tests/my-filter.test.ts' }]
console.log(specifications)
```

## getRelevantTestSpecifications

```ts
function getRelevantTestSpecifications(
  filters?: string[]
): Promise<TestSpecification[]>
```

This method resolves every test specification by calling [`project.globTestFiles`](/advanced/api/test-project#globtestfiles). It accepts string filters to match the test files - these are the same filters that [CLI supports](/guide/filtering#cli). If `--changed` flag was specified, the list will be filtered to include only files that changed. `getRelevantTestSpecifications` doesn't run any test files.

::: warning
This method can be slow because it needs to filter `--changed` flags. Do not use it if you just need a list of test files.

- If you need to get the list of specifications for known test files, use [`getModuleSpecifications`](#getmodulespecifications) instead.
- If you need to get the list of all possible test files, use [`globTestSpecifications`](#globtestspecifications).
:::

## mergeReports

```ts
function mergeReports(directory?: string): Promise<TestRunResult>
```

Merge reports from multiple runs located in the specified directory (value from `--merge-reports` if not specified). This value can also be set on `config.mergeReports` (by default, it will read `.vitest-reports` folder).

Note that the `directory` will always be resolved relative to the working directory.

This method is called automatically by [`startVitest`](/advanced/guide/tests) if `config.mergeReports` is set.

## collect

```ts
function collect(filters?: string[]): Promise<TestRunResult>
```

Execute test files without running test callbacks. `collect` returns unhandled errors and an array of [test modules](/advanced/api/test-module). It accepts string filters to match the test files - these are the same filters that [CLI supports](/guide/filtering#cli).

This method resolves tests specifications based on the config `include`, `exclude`, and `includeSource` values. Read more at [`project.globTestFiles`](/advanced/api/test-project#globtestfiles). If `--changed` flag was specified, the list will be filtered to include only files that changed.

::: warning
Note that Vitest doesn't use static analysis to collect tests. Vitest will run every test file in isolation, just like it runs regular tests.

This makes this method very slow, unless you disable isolation before collecting tests.
:::

## start

```ts
function start(filters?: string[]): Promise<TestRunResult>
```

Initialize reporters, the coverage provider, and run tests. This method accepts string filters to match the test files - these are the same filters that [CLI supports](/guide/filtering#cli).

::: warning
This method should not be called if [`vitest.init()`](#init) is also invoked. Use [`runTestSpecifications`](#runtestspecifications) or [`rerunTestSpecifications`](#reruntestspecifications) instead if you need to run tests after Vitest was inititalised.
:::

This method is called automatically by [`startVitest`](/advanced/guide/tests) if `config.mergeReports` and `config.standalone` are not set.

## init

```ts
function init(): Promise<void>
```

Initialize reporters and the coverage provider. This method doesn't run any tests. If the `--watch` flag is provided, Vitest will still run changed tests even if this method was not called.

Internally, this method is called only if [`--standalone`](/guide/cli#standalone) flag is enabled.

::: warning
This method should not be called if [`vitest.start()`](#start) is also invoked.
:::

This method is called automatically by [`startVitest`](/advanced/guide/tests) if `config.standalone` is set.

## getModuleSpecifications

```ts
function getModuleSpecifications(moduleId: string): TestSpecification[]
```

Returns a list of test specifications related to the module ID. The ID should already be resolved to an absolute file path. If ID doesn't match `include` or `includeSource` patterns, the returned array will be empty.

This method can return already cached specifications based on the `moduleId` and `pool`. But note that [`project.createSpecification`](/advanced/api/test-project#createspecification) always returns a new instance and it's not cached automatically. However, specifications are automatically cached when [`runTestSpecifications`](#runtestspecifications) is called.

::: warning
As of Vitest 3, this method uses a cache to check if the file is a test. To make sure that the cache is not empty, call [`globTestSpecifications`](#globtestspecifications) at least once.
:::

## clearSpecificationsCache

```ts
function clearSpecificationsCache(moduleId?: string): void
```

Vitest automatically caches test specifications for each file when [`globTestSpecifications`](#globtestspecifications) or [`runTestSpecifications`](#runtestspecifications) is called. This method clears the cache for the given file or the whole cache altogether depending on the first argument.

## runTestSpecifications

```ts
function runTestSpecifications(
  specifications: TestSpecification[],
  allTestsRun = false
): Promise<TestRunResult>
```

This method runs every test based on the received [specifications](/advanced/api/test-specification). The second argument, `allTestsRun`, is used by the coverage provider to determine if it needs to instrument coverage on _every_ file in the root (this only matters if coverage is enabled and `coverage.all` is set to `true`).

::: warning
This method doesn't trigger `onWatcherRerun`, `onWatcherStart` and `onTestsRerun` callbacks. If you are rerunning tests based on the file change, consider using [`rerunTestSpecifications`](#reruntestspecifications) instead.
:::

## rerunTestSpecifications

```ts
function rerunTestSpecifications(
  specifications: TestSpecification[],
  allTestsRun = false
): Promise<TestRunResult>
```

This method emits `reporter.onWatcherRerun` and `onTestsRerun` events, then it runs tests with [`runTestSpecifications`](#runtestspecifications). If there were no errors in the main process, it will emit `reporter.onWatcherStart` event.

## updateSnapshot

```ts
function updateSnapshot(files?: string[]): Promise<TestRunResult>
```

Update snapshots in specified files. If no files are provided, it will update files with failed tests and obsolete snapshots.

## collectTests

```ts
function collectTests(
  specifications: TestSpecification[]
): Promise<TestRunResult>
```

Execute test files without running test callbacks. `collectTests` returns unhandled errors and an array of [test modules](/advanced/api/test-module).

This method works exactly the same as [`collect`](#collect), but you need to provide test specifications yourself.

::: warning
Note that Vitest doesn't use static analysis to collect tests. Vitest will run every test file in isolation, just like it runs regular tests.

This makes this method very slow, unless you disable isolation before collecting tests.
:::

## cancelCurrentRun

```ts
function cancelCurrentRun(reason: CancelReason): Promise<void>
```

This method will gracefully cancel all ongoing tests. It will wait for started tests to finish running and will not run tests that were scheduled to run but haven't started yet.

## setGlobalTestNamePattern

```ts
function setGlobalTestNamePattern(pattern: string | RegExp): void
```

This methods overrides the global [test name pattern](/config/#testnamepattern).

::: warning
This method doesn't start running any tests. To run tests with updated pattern, call [`runTestSpecifications`](#runtestspecifications).
:::

## resetGlobalTestNamePattern

```ts
function resetGlobalTestNamePattern(): void
```

This methods resets the [test name pattern](/config/#testnamepattern). It means Vitest won't skip any tests now.

::: warning
This method doesn't start running any tests. To run tests without a pattern, call [`runTestSpecifications`](#runtestspecifications).
:::

## enableSnapshotUpdate

```ts
function enableSnapshotUpdate(): void
```

Enable the mode that allows updating snapshots when running tests. Every test that runs after this method is called will update snapshots. To disable the mode, call [`resetSnapshotUpdate`](#resetsnapshotupdate).

::: warning
This method doesn't start running any tests. To update snapshots, run tests with [`runTestSpecifications`](#runtestspecifications).
:::

## resetSnapshotUpdate

```ts
function resetSnapshotUpdate(): void
```

Disable the mode that allows updating snapshots when running tests. This method doesn't start running any tests.

## invalidateFile

```ts
function invalidateFile(filepath: string): void
```

This method invalidates the file in the cache of every project. It is mostly useful if you rely on your own watcher because Vite's cache persist in memory.

::: danger
If you disable Vitest's watcher but keep Vitest running, it is important to manually clear the cache with this method because there is no way to disable the cache. This method will also invalidate file's importers.
:::

## import

<!--@include: ./import-example.md-->

Import a file using Vite module runner. The file will be transformed by Vite with the global config and executed in a separate context. Note that `moduleId` will be relative to the `config.root`.

::: danger
`project.import` reuses Vite's module graph, so importing the same module using a regular import will return a different module:

```ts
import * as staticExample from './example.js'
const dynamicExample = await vitest.import('./example.js')

dynamicExample !== staticExample // ✅
```
:::

::: info
Internally, Vitest uses this method to import global setups, custom coverage providers, and custom reporters, meaning all of them share the same module graph as long as they belong to the same Vite server.
:::

## close

```ts
function close(): Promise<void>
```

Closes all projects and their associated resources. This can only be called once; the closing promise is cached until the server restarts.

## exit

```ts
function exit(force = false): Promise<void>
```

Closes all projects and exit the process. If `force` is set to `true`, the process will exit immediately after closing the projects.

This method will also forcefully call `process.exit()` if the process is still active after [`config.teardownTimeout`](/config/#teardowntimeout) milliseconds.

## shouldKeepServer

```ts
function shouldKeepServer(): boolean
```

This method will return `true` if the server should be kept running after the tests are done. This usually means that the `watch` mode was enabled.

## onServerRestart

```ts
function onServerRestart(fn: OnServerRestartHandler): void
```

Register a handler that will be called when the server is restarted due to a config change.

## onCancel

```ts
function onCancel(fn: (reason: CancelReason) => Awaitable<void>): void
```

Register a handler that will be called when the test run is cancelled with [`vitest.cancelCurrentRun`](#cancelcurrentrun).

## onClose

```ts
function onClose(fn: () => Awaitable<void>): void
```

Register a handler that will be called when the server is closed.

## onTestsRerun

```ts
function onTestsRerun(fn: OnTestsRerunHandler): void
```

Register a handler that will be called when the tests are rerunning. The tests can rerun when [`rerunTestSpecifications`](#reruntestspecifications) is called manually or when a file is changed and the built-in watcher schedules a rerun.

## onFilterWatchedSpecification

```ts
function onFilterWatchedSpecification(
  fn: (specification: TestSpecification) => boolean
): void
```
Register a handler that will be called when a file is changed. This callback should return `true` or `false`, indicating whether the test file needs to be rerun.

With this method, you can hook into the default watcher logic to delay or discard tests that the user doesn't want to keep track of at the moment:

```ts
const continuesTests: string[] = []

myCustomWrapper.onContinuesRunEnabled(testItem =>
  continuesTests.push(item.fsPath)
)

vitest.onFilterWatchedSpecification(specification =>
  continuesTests.includes(specification.moduleId)
)
```

Vitest can create different specifications for the same file depending on the `pool` or `locations` options, so do not rely on the reference. Vitest can also return cached specification from [`vitest.getModuleSpecifications`](#getmodulespecifications) - the cache is based on the `moduleId` and `pool`. Note that [`project.createSpecification`](/advanced/api/test-project#createspecification) always returns a new instance.

## matchesProjectFilter <Version>3.1.0</Version> {#matchesprojectfilter}

```ts
function matchesProjectFilter(name: string): boolean
```

Check if the name matches the current [project filter](/guide/cli#project). If there is no project filter, this will always return `true`.

It is not possible to programmatically change the `--project` CLI option.
````

## File: docs/advanced/guide/tests.md
````markdown
# Running Tests

::: warning
This guide explains how to use the advanced API to run tests via a Node.js script. If you just want to [run tests](/guide/), you probably don't need this. It is primarily used by library authors.

Breaking changes might not follow SemVer, please pin Vitest's version when using the experimental API.
:::

Vitest exposes two methods to initiate Vitest:

- `startVitest` initiates Vitest, validates the packages are installed and runs tests immediately
- `createVitest` only initiates Vitest and doesn't run any tests

## `startVitest`

```ts
import { startVitest } from 'vitest/node'

const vitest = await startVitest(
  'test',
  [], // CLI filters
  {}, // override test config
  {}, // override Vite config
  {}, // custom Vitest options
)
const testModules = vitest.state.getTestModules()
for (const testModule of testModules) {
  console.log(testModule.moduleId, testModule.ok() ? 'passed' : 'failed')
}
```

::: tip
[`TestModule`](/advanced/api/test-module), [`TestSuite`](/advanced/api/test-suite) and [`TestCase`](/advanced/api/test-case) APIs are not experimental and follow SemVer since Vitest 2.1.
:::

## `createVitest`

Creates a [Vitest](/advanced/api/vitest) instances without running tests.

`createVitest` method doesn't validate that required packages are installed. It also doesn't respect `config.standalone` or `config.mergeReports`. Vitest won't be closed automatically even if `watch` is disabled.

```ts
import { createVitest } from 'vitest/node'

const vitest = await createVitest(
  'test',
  {}, // override test config
  {}, // override Vite config
  {}, // custom Vitest options
)

// called when `vitest.cancelCurrentRun()` is invoked
vitest.onCancel(() => {})
// called during `vitest.close()` call
vitest.onClose(() => {})
// called when Vitest reruns test files
vitest.onTestsRerun((files) => {})

try {
  // this will set process.exitCode to 1 if tests failed,
  // and won't close the process automatically
  await vitest.start(['my-filter'])
}
catch (err) {
  // this can throw
  // "FilesNotFoundError" if no files were found
  // "GitNotFoundError" with `--changed` and repository is not initialized
}
finally {
  await vitest.close()
}
```

If you intend to keep the `Vitest` instance, make sure to at least call [`init`](/advanced/api/vitest#init). This will initialise reporters and the coverage provider, but won't run any tests. It is also recommended to enable the `watch` mode even if you don't intend to use the Vitest watcher, but want to keep the instance running. Vitest relies on this flag for some of its features to work correctly in a continuous process.

After reporters are initialised, use [`runTestSpecifications`](/advanced/api/vitest#runtestspecifications) or [`rerunTestSpecifications`](/advanced/api/vitest#reruntestspecifications) to run tests if manual run is required:

```ts
watcher.on('change', async (file) => {
  const specifications = vitest.getModuleSpecifications(file)
  if (specifications.length) {
    vitest.invalidateFile(file)
    // you can use runTestSpecifications if "reporter.onWatcher*" hooks
    // should not be invoked
    await vitest.rerunTestSpecifications(specifications)
  }
})
```

::: warning
The example above shows a potential use-case if you disable the default watcher behaviour. By default, Vitest already reruns tests if files change.

Also note that `getModuleSpecifications` will not resolve test files unless they were already processed by `globTestSpecifications`. If the file was just created, use `project.matchesGlobPattern` instead:

```ts
watcher.on('add', async (file) => {
  const specifications = []
  for (const project of vitest.projects) {
    if (project.matchesGlobPattern(file)) {
      specifications.push(project.createSpecification(file))
    }
  }

  if (specifications.length) {
    await vitest.rerunTestSpecifications(specifications)
  }
})
```
:::

In cases where you need to disable the watcher, you can pass down `server.watch: null` since Vite 5.3 or `server.watch: { ignored: ['*/*'] }` to a Vite config:

```ts
await createVitest(
  'test',
  {},
  {
    plugins: [
      {
        name: 'stop-watcher',
        async configureServer(server) {
          await server.watcher.close()
        }
      }
    ],
    server: {
      watch: null,
    },
  }
)
```
````

## File: docs/advanced/metadata.md
````markdown
# Task Metadata

::: warning
Vitest exposes experimental private API. Breaking changes might not follow SemVer, please pin Vitest's version when using it.
:::

If you are developing a custom reporter or using Vitest Node.js API, you might find it useful to pass data from tests that are being executed in various contexts to your reporter or custom Vitest handler.

To accomplish this, relying on the [test context](/guide/test-context) is not feasible since it cannot be serialized. However, with Vitest, you can utilize the `meta` property available on every task (suite or test) to share data between your tests and the Node.js process. It's important to note that this communication is one-way only, as the `meta` property can only be modified from within the test context. Any changes made within the Node.js context will not be visible in your tests.

You can populate `meta` property on test context or inside `beforeAll`/`afterAll` hooks for suite tasks.

```ts
afterAll((suite) => {
  suite.meta.done = true
})

test('custom', ({ task }) => {
  task.meta.custom = 'some-custom-handler'
})
```

Once a test is completed, Vitest will send a task including the result and `meta` to the Node.js process using RPC, and then report it in `onTestCaseResult` and other hooks that have access to tasks. To process this test case, you can utilize the `onTestCaseResult` method available in your reporter implementation:

```ts [custom-reporter.js]
import type { Reporter, TestCase, TestModule } from 'vitest/node'

export default {
  onTestCaseResult(testCase: TestCase) {
    // custom === 'some-custom-handler' ✅
    const { custom } = testCase.meta()
  },
  onTestRunEnd(testModule: TestModule) {
    testModule.meta().done === true
    testModule.children.at(0).meta().custom === 'some-custom-handler'
  }
} satisfies Reporter
```

::: danger BEWARE
Vitest uses different methods to communicate with the Node.js process.

- If Vitest runs tests inside worker threads, it will send data via [message port](https://developer.mozilla.org/en-US/docs/Web/API/MessagePort)
- If Vitest uses child process, the data will be send as a serialized Buffer via [`process.send`](https://nodejs.org/api/process.html#processsendmessage-sendhandle-options-callback) API
- If Vitest runs tests in the browser, the data will be stringified using [flatted](https://www.npmjs.com/package/flatted) package

This property is also present on every test in the `json` reporter, so make sure that data can be serialized into JSON.

Also, make sure you serialize [Error properties](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#error_types) before you set them.
:::

You can also get this information from Vitest state when tests finished running:

```ts
const vitest = await createVitest('test')
const { testModules } = await vitest.start()

const testModule = testModules[0]
testModule.meta().done === true
testModule.children.at(0).meta().custom === 'some-custom-handler'
```

It's also possible to extend type definitions when using TypeScript:

```ts
declare module 'vitest' {
  interface TaskMeta {
    done?: boolean
    custom?: string
  }
}
```
````

## File: docs/advanced/pool.md
````markdown
# Custom Pool

::: warning
This is an advanced and very low-level API. If you just want to [run tests](/guide/), you probably don't need this. It is primarily used by library authors.
:::

Vitest runs tests in pools. By default, there are several pools:

- `threads` to run tests using `node:worker_threads` (isolation is provided with a new worker context)
- `forks` to run tests using `node:child_process` (isolation is provided with a new `child_process.fork` process)
- `vmThreads` to run tests using `node:worker_threads` (but isolation is provided with `vm` module instead of a new worker context)
- `browser` to run tests using browser providers
- `typescript` to run typechecking on tests

You can provide your own pool by specifying a file path:

```ts [vitest.config.ts]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // will run every file with a custom pool by default
    pool: './my-custom-pool.ts',
    // you can provide options using `poolOptions` object
    poolOptions: {
      myCustomPool: {
        customProperty: true,
      },
    },
  },
})
```

If you need to run tests in different pools, use the [`projects`](/guide/projects) feature:

```ts [vitest.config.ts]
export default defineConfig({
  test: {
    projects: [
      {
        extends: true,
        test: {
          pool: 'threads',
        },
      },
    ],
  },
})
```

## API

The file specified in `pool` option should export a function (can be async) that accepts `Vitest` interface as its first option. This function needs to return an object matching `ProcessPool` interface:

```ts
import type { ProcessPool, TestSpecification } from 'vitest/node'

export interface ProcessPool {
  name: string
  runTests: (files: TestSpecification[], invalidates?: string[]) => Promise<void>
  collectTests: (files: TestSpecification[], invalidates?: string[]) => Promise<void>
  close?: () => Promise<void>
}
```

The function is called only once (unless the server config was updated), and it's generally a good idea to initialize everything you need for tests inside that function and reuse it when `runTests` is called.

Vitest calls `runTest` when new tests are scheduled to run. It will not call it if `files` is empty. The first argument is an array of [TestSpecifications](/advanced/api/test-specification). Files are sorted using [`sequencer`](/config/#sequence-sequencer) before `runTests` is called. It's possible (but unlikely) to have the same file twice, but it will always have a different project - this is implemented via [`projects`](/guide/projects) configuration.

Vitest will wait until `runTests` is executed before finishing a run (i.e., it will emit [`onFinished`](/advanced/reporters) only after `runTests` is resolved).

If you are using a custom pool, you will have to provide test files and their results yourself - you can reference [`vitest.state`](https://github.com/vitest-dev/vitest/blob/main/packages/vitest/src/node/state.ts) for that (most important are `collectFiles` and `updateTasks`). Vitest uses `startTests` function from `@vitest/runner` package to do that.

Vitest will call `collectTests` if `vitest.collect` is called or `vitest list` is invoked via a CLI command. It works the same way as `runTests`, but you don't have to run test callbacks, only report their tasks by calling `vitest.state.collectFiles(files)`.

To communicate between different processes, you can create methods object using `createMethodsRPC` from `vitest/node`, and use any form of communication that you prefer. For example, to use WebSockets with `birpc` you can write something like this:

```ts
import { createBirpc } from 'birpc'
import { parse, stringify } from 'flatted'
import { createMethodsRPC, TestProject } from 'vitest/node'

function createRpc(project: TestProject, wss: WebSocketServer) {
  return createBirpc(
    createMethodsRPC(project),
    {
      post: msg => wss.send(msg),
      on: fn => wss.on('message', fn),
      serialize: stringify,
      deserialize: parse,
    },
  )
}
```

You can see a simple example of a pool made from scratch that doesn't run tests but marks them as collected in [pool/custom-pool.ts](https://github.com/vitest-dev/vitest/blob/main/test/cli/fixtures/custom-pool/pool/custom-pool.ts).
````

## File: docs/advanced/reporters.md
````markdown
# Extending Reporters

::: warning
This is an advanced API. If you just want to configure built-in reporters, read the ["Reporters"](/guide/reporters) guide.
:::

You can import reporters from `vitest/reporters` and extend them to create your custom reporters.

## Extending Built-in Reporters

In general, you don't need to create your reporter from scratch. `vitest` comes with several default reporting programs that you can extend.

```ts
import { DefaultReporter } from 'vitest/reporters'

export default class MyDefaultReporter extends DefaultReporter {
  // do something
}
```

Of course, you can create your reporter from scratch. Just extend the `BaseReporter` class and implement the methods you need.

And here is an example of a custom reporter:

```ts [custom-reporter.js]
import { BaseReporter } from 'vitest/reporters'

export default class CustomReporter extends BaseReporter {
  onCollected() {
    const files = this.ctx.state.getFiles(this.watchFilters)
    this.reportTestSummary(files)
  }
}
```

Or implement the `Reporter` interface:

```ts [custom-reporter.js]
import type { Reporter } from 'vitest/node'

export default class CustomReporter implements Reporter {
  onCollected() {
    // print something
  }
}
```

Then you can use your custom reporter in the `vitest.config.ts` file:

```ts [vitest.config.ts]
import { defineConfig } from 'vitest/config'
import CustomReporter from './custom-reporter.js'

export default defineConfig({
  test: {
    reporters: [new CustomReporter()],
  },
})
```

## Reported Tasks

Instead of using the tasks that reporters receive, it is recommended to use the Reported Tasks API instead.

You can get access to this API by calling `vitest.state.getReportedEntity(runnerTask)`:

```ts twoslash
import type { Reporter, RunnerTestFile, TestModule, Vitest } from 'vitest/node'

class MyReporter implements Reporter {
  private vitest!: Vitest

  onInit(vitest: Vitest) {
    this.vitest = vitest
  }

  onFinished(files: RunnerTestFile[]) {
    for (const file of files) {
      // note that the old task implementation uses "file" instead of "module"
      const testModule = this.vitest.state.getReportedEntity(file) as TestModule
      for (const task of testModule.children) {
        //                          ^?
        console.log('finished', task.type, task.fullName)
      }
    }
  }
}
```

## Exported Reporters

`vitest` comes with a few [built-in reporters](/guide/reporters) that you can use out of the box.

### Built-in reporters:

1. `BasicReporter`
1. `DefaultReporter`
2. `DotReporter`
3. `JsonReporter`
4. `VerboseReporter`
5. `TapReporter`
6. `JUnitReporter`
7. `TapFlatReporter`
8. `HangingProcessReporter`

### Base Abstract reporters:

1. `BaseReporter`

### Interface reporters:

1. `Reporter`
````

## File: docs/advanced/runner.md
````markdown
# Runner API

::: warning
This is advanced API. If you just want to [run tests](/guide/), you probably don't need this. It is primarily used by library authors.
:::

You can specify a path to your test runner with the `runner` option in your configuration file. This file should have a default export with a class constructor implementing these methods:

```ts
export interface VitestRunner {
  /**
   * First thing that's getting called before actually collecting and running tests.
   */
  onBeforeCollect?: (paths: string[]) => unknown
  /**
   * Called after collecting tests and before "onBeforeRun".
   */
  onCollected?: (files: File[]) => unknown

  /**
   * Called when test runner should cancel next test runs.
   * Runner should listen for this method and mark tests and suites as skipped in
   * "onBeforeRunSuite" and "onBeforeRunTask" when called.
   */
  onCancel?: (reason: CancelReason) => unknown

  /**
   * Called before running a single test. Doesn't have "result" yet.
   */
  onBeforeRunTask?: (test: TaskPopulated) => unknown
  /**
   * Called before actually running the test function. Already has "result" with "state" and "startTime".
   */
  onBeforeTryTask?: (test: TaskPopulated, options: { retry: number; repeats: number }) => unknown
  /**
   * Called after result and state are set.
   */
  onAfterRunTask?: (test: TaskPopulated) => unknown
  /**
   * Called right after running the test function. Doesn't have new state yet. Will not be called, if the test function throws.
   */
  onAfterTryTask?: (test: TaskPopulated, options: { retry: number; repeats: number }) => unknown

  /**
   * Called before running a single suite. Doesn't have "result" yet.
   */
  onBeforeRunSuite?: (suite: Suite) => unknown
  /**
   * Called after running a single suite. Has state and result.
   */
  onAfterRunSuite?: (suite: Suite) => unknown

  /**
   * If defined, will be called instead of usual Vitest suite partition and handling.
   * "before" and "after" hooks will not be ignored.
   */
  runSuite?: (suite: Suite) => Promise<void>
  /**
   * If defined, will be called instead of usual Vitest handling. Useful, if you have your custom test function.
   * "before" and "after" hooks will not be ignored.
   */
  runTask?: (test: TaskPopulated) => Promise<void>

  /**
   * Called, when a task is updated. The same as "onTaskUpdate" in a reporter, but this is running in the same thread as tests.
   */
  onTaskUpdate?: (task: [string, TaskResult | undefined, TaskMeta | undefined][]) => Promise<void>

  /**
   * Called before running all tests in collected paths.
   */
  onBeforeRunFiles?: (files: File[]) => unknown
  /**
   * Called right after running all tests in collected paths.
   */
  onAfterRunFiles?: (files: File[]) => unknown
  /**
   * Called when new context for a test is defined. Useful, if you want to add custom properties to the context.
   * If you only want to define custom context with a runner, consider using "beforeAll" in "setupFiles" instead.
   */
  extendTaskContext?: (context: TestContext) => TestContext
  /**
   * Called when certain files are imported. Can be called in two situations: to collect tests and to import setup files.
   */
  importFile: (filepath: string, source: VitestRunnerImportSource) => unknown
  /**
   * Function that is called when the runner attempts to get the value when `test.extend` is used with `{ injected: true }`
   */
  injectValue?: (key: string) => unknown
  /**
   * Publicly available configuration.
   */
  config: VitestRunnerConfig
  /**
   * The name of the current pool. Can affect how stack trace is inferred on the server side.
   */
  pool?: string
}
```

When initiating this class, Vitest passes down Vitest config, - you should expose it as a `config` property:

```ts [runner.ts]
import type { RunnerTestFile } from 'vitest'
import type { VitestRunner, VitestRunnerConfig } from 'vitest/suite'
import { VitestTestRunner } from 'vitest/runners'

class CustomRunner extends VitestTestRunner implements VitestRunner {
  public config: VitestRunnerConfig

  constructor(config: VitestRunnerConfig) {
    this.config = config
  }

  onAfterRunFiles(files: RunnerTestFile[]) {
    console.log('finished running', files)
  }
}

export default CustomRunner
```

::: warning
Vitest also injects an instance of `ViteNodeRunner` as `__vitest_executor` property. You can use it to process files in `importFile` method (this is default behavior of `TestRunner` and `BenchmarkRunner`).

`ViteNodeRunner` exposes `executeId` method, which is used to import test files in a Vite-friendly environment. Meaning, it will resolve imports and transform file content at runtime so that Node can understand it:

```ts
export default class Runner {
  async importFile(filepath: string) {
    await this.__vitest_executor.executeId(filepath)
  }
}
```
:::

::: warning
If you don't have a custom runner or didn't define `runTest` method, Vitest will try to retrieve a task automatically. If you didn't add a function with `setFn`, it will fail.
:::

::: tip
Snapshot support and some other features depend on the runner. If you don't want to lose it, you can extend your runner from `VitestTestRunner` imported from `vitest/runners`. It also exposes `BenchmarkNodeRunner`, if you want to extend benchmark functionality.
:::

## Tasks

::: warning
The "Runner Tasks API" is experimental and should primarily be used only in the test runtime. Vitest also exposes the ["Reported Tasks API"](/advanced/api/test-module), which should be preferred when working in the main thread (inside the reporter, for example).

The team is currently discussing if "Runner Tasks" should be replaced by "Reported Tasks" in the future.
:::

Suites and tests are called `tasks` internally. Vitest runner initiates a `File` task before collecting any tests - this is a superset of `Suite` with a few additional properties. It is available on every task (including `File`) as a `file` property.

```ts
interface File extends Suite {
  /**
   * The name of the pool that the file belongs to.
   * @default 'forks'
   */
  pool?: string
  /**
   * The path to the file in UNIX format.
   */
  filepath: string
  /**
   * The name of the test project the file belongs to.
   */
  projectName: string | undefined
  /**
   * The time it took to collect all tests in the file.
   * This time also includes importing all the file dependencies.
   */
  collectDuration?: number
  /**
   * The time it took to import the setup file.
   */
  setupDuration?: number
}
```

Every suite has a `tasks` property that is populated during collection phase. It is useful to traverse the task tree from the top down.

```ts
interface Suite extends TaskBase {
  type: 'suite'
  /**
   * File task. It's the root task of the file.
   */
  file: File
  /**
   * An array of tasks that are part of the suite.
   */
  tasks: Task[]
}
```

Every task has a `suite` property that references a suite it is located in. If `test` or `describe` are initiated at the top level, they will not have a `suite` property (it will **not** be equal to `file`!). `File` also never has a `suite` property. It is useful to travers the tasks from the bottom up.

```ts
interface Test<ExtraContext = object> extends TaskBase {
  type: 'test'
  /**
   * Test context that will be passed to the test function.
   */
  context: TestContext & ExtraContext
  /**
   * File task. It's the root task of the file.
   */
  file: File
  /**
   * Whether the task was skipped by calling `context.skip()`.
   */
  pending?: boolean
  /**
   * Whether the task should succeed if it fails. If the task fails, it will be marked as passed.
   */
  fails?: boolean
  /**
   * Store promises (from async expects) to wait for them before finishing the test
   */
  promises?: Promise<any>[]
}
```

Every task can have a `result` field. Suites can only have this field if an error thrown within a suite callback or `beforeAll`/`afterAll` callbacks prevents them from collecting tests. Tests always have this field after their callbacks are called - the `state` and `errors` fields are present depending on the outcome. If an error was thrown in `beforeEach` or `afterEach` callbacks, the thrown error will be present in `task.result.errors`.

```ts
export interface TaskResult {
  /**
   * State of the task. Inherits the `task.mode` during collection.
   * When the task has finished, it will be changed to `pass` or `fail`.
   * - **pass**: task ran successfully
   * - **fail**: task failed
   */
  state: TaskState
  /**
   * Errors that occurred during the task execution. It is possible to have several errors
   * if `expect.soft()` failed multiple times.
   */
  errors?: ErrorWithDiff[]
  /**
   * How long in milliseconds the task took to run.
   */
  duration?: number
  /**
   * Time in milliseconds when the task started running.
   */
  startTime?: number
  /**
   * Heap size in bytes after the task finished.
   * Only available if `logHeapUsage` option is set and `process.memoryUsage` is defined.
   */
  heap?: number
  /**
   * State of related to this task hooks. Useful during reporting.
   */
  hooks?: Partial<Record<'afterAll' | 'beforeAll' | 'beforeEach' | 'afterEach', TaskState>>
  /**
   * The amount of times the task was retried. The task is retried only if it
   * failed and `retry` option is set.
   */
  retryCount?: number
  /**
   * The amount of times the task was repeated. The task is repeated only if
   * `repeats` option is set. This number also contains `retryCount`.
   */
  repeatCount?: number
}
```

## Your Task Function

Vitest exposes `createTaskCollector` utility to create your own `test` method. It behaves the same way as a test, but calls a custom method during collection.

A task is an object that is part of a suite. It is automatically added to the current suite with a `suite.task` method:

```js [custom.js]
import { createTaskCollector, getCurrentSuite } from 'vitest/suite'

export { afterAll, beforeAll, describe } from 'vitest'

// this function will be called during collection phase:
// don't call function handler here, add it to suite tasks
// with "getCurrentSuite().task()" method
// note: createTaskCollector provides support for "todo"/"each"/...
export const myCustomTask = createTaskCollector(
  function (name, fn, timeout) {
    getCurrentSuite().task(name, {
      ...this, // so "todo"/"skip"/... is tracked correctly
      meta: {
        customPropertyToDifferentiateTask: true
      },
      handler: fn,
      timeout,
    })
  }
)
```

```js [tasks.test.js]
import {
  afterAll,
  beforeAll,
  describe,
  myCustomTask
} from './custom.js'
import { gardener } from './gardener.js'

describe('take care of the garden', () => {
  beforeAll(() => {
    gardener.putWorkingClothes()
  })

  myCustomTask('weed the grass', () => {
    gardener.weedTheGrass()
  })
  myCustomTask.todo('mow the lawn', () => {
    gardener.mowerTheLawn()
  })
  myCustomTask('water flowers', () => {
    gardener.waterFlowers()
  })

  afterAll(() => {
    gardener.goHome()
  })
})
```

```bash
vitest ./garden/tasks.test.js
```
````

## File: docs/api/assert-type.md
````markdown
# assertType

::: warning
During runtime this function doesn't do anything. To [enable typechecking](/guide/testing-types#run-typechecking), don't forget to pass down `--typecheck` flag.
:::

- **Type:** `<T>(value: T): void`

You can use this function as an alternative for [`expectTypeOf`](/api/expect-typeof) to easily assert that the argument type is equal to the generic provided.

```ts
import { assertType } from 'vitest'

function concat(a: string, b: string): string
function concat(a: number, b: number): number
function concat(a: string | number, b: string | number): string | number

assertType<string>(concat('a', 'b'))
assertType<number>(concat(1, 2))
// @ts-expect-error wrong types
assertType(concat('a', 2))
```
````

## File: docs/api/assert.md
````markdown
# assert

Vitest reexports the `assert` method from [`chai`](https://www.chaijs.com/api/assert/) for verifying invariants.

## assert

- **Type:** `(expression: any, message?: string) => asserts expression`

Assert that the given `expression` is truthy, otherwise the assertion fails.

```ts
import { assert, test } from 'vitest'

test('assert', () => {
  assert('foo' !== 'bar', 'foo should not be equal to bar')
})
```

## fail

- **Type:**
  - `(message?: string) => never`
  - `<T>(actual: T, expected: T, message?: string, operator?: string) => never`

Force an assertion failure.

```ts
import { assert, test } from 'vitest'

test('assert.fail', () => {
  assert.fail('error message on failure')
  assert.fail('foo', 'bar', 'foo is not bar', '===')
})
```

## isOk

- **Type:** `<T>(value: T, message?: string) => void`
- **Alias** `ok`

Assert that the given `value` is truthy.

```ts
import { assert, test } from 'vitest'

test('assert.isOk', () => {
  assert.isOk('foo', 'every truthy is ok')
  assert.isOk(false, 'this will fail since false is not truthy')
})
```

## isNotOk

- **Type:** `<T>(value: T, message?: string) => void`
- **Alias** `notOk`

Assert that the given `value` is falsy.

```ts
import { assert, test } from 'vitest'

test('assert.isNotOk', () => {
  assert.isNotOk('foo', 'this will fail, every truthy is not ok')
  assert.isNotOk(false, 'this will pass since false is falsy')
})
```

## equal

- **Type:** `<T>(actual: T, expected: T, message?: string) => void`

Asserts non-strict equality (==) of `actual` and `expected`.

```ts
import { assert, test } from 'vitest'

test('assert.equal', () => {
  assert.equal(Math.sqrt(4), '2')
})
```

## notEqual

- **Type:** `<T>(actual: T, expected: T, message?: string) => void`

Asserts non-strict inequality (!=) of `actual` and `expected`.

```ts
import { assert, test } from 'vitest'

test('assert.equal', () => {
  assert.notEqual(Math.sqrt(4), 3)
})
```

## strictEqual

- **Type:** `<T>(actual: T, expected: T, message?: string) => void`

Asserts strict equality (===) of `actual` and `expected`.

```ts
import { assert, test } from 'vitest'

test('assert.strictEqual', () => {
  assert.strictEqual(Math.sqrt(4), 2)
})
```

## deepEqual

- **Type:** `<T>(actual: T, expected: T, message?: string) => void`

Asserts that `actual` is deeply equal to `expected`.

```ts
import { assert, test } from 'vitest'

test('assert.deepEqual', () => {
  assert.deepEqual({ color: 'green' }, { color: 'green' })
})
```

## notDeepEqual

- **Type:** `<T>(actual: T, expected: T, message?: string) => void`

Assert that `actual` is not deeply equal to `expected`.

```ts
import { assert, test } from 'vitest'

test('assert.notDeepEqual', () => {
  assert.notDeepEqual({ color: 'green' }, { color: 'red' })
})
```

## isAbove

- **Type:** `(valueToCheck: number, valueToBeAbove: number, message?: string) => void`

Assert that `valueToCheck` is strictly greater than (>) `valueToBeAbove`.

```ts
import { assert, test } from 'vitest'

test('assert.isAbove', () => {
  assert.isAbove(5, 2, '5 is strictly greater than 2')
})
```

## isAtLeast

- **Type:** `(valueToCheck: number, valueToBeAtLeast: number, message?: string) => void`

Assert that `valueToCheck` is greater than or equal to (>=) `valueToBeAtLeast`.

```ts
import { assert, test } from 'vitest'

test('assert.isAtLeast', () => {
  assert.isAtLeast(5, 2, '5 is greater or equal to 2')
  assert.isAtLeast(3, 3, '3 is greater or equal to 3')
})
```

## isBelow

- **Type:** `(valueToCheck: number, valueToBeBelow: number, message?: string) => void`

Asserts `valueToCheck` is strictly less than (<) `valueToBeBelow`.

```ts
import { assert, test } from 'vitest'

test('assert.isBelow', () => {
  assert.isBelow(3, 6, '3 is strictly less than 6')
})
```

## isAtMost

- **Type:** `(valueToCheck: number, valueToBeAtMost: number, message?: string) => void`

Asserts `valueToCheck` is less than or equal to (<=) `valueToBeAtMost`.

```ts
import { assert, test } from 'vitest'

test('assert.isAtMost', () => {
  assert.isAtMost(3, 6, '3 is less than or equal to 6')
  assert.isAtMost(4, 4, '4 is less than or equal to 4')
})
```

## isTrue

- **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is true.

```ts
import { assert, test } from 'vitest'

const testPassed = true

test('assert.isTrue', () => {
  assert.isTrue(testPassed)
})
```

## isNotTrue

- **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is not true.

```ts
import { assert, test } from 'vitest'

const testPassed = 'ok'

test('assert.isNotTrue', () => {
  assert.isNotTrue(testPassed)
})
```

## isFalse

- **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is false.

```ts
import { assert, test } from 'vitest'

const testPassed = false

test('assert.isFalse', () => {
  assert.isFalse(testPassed)
})
```

## isNotFalse

- **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is not false.

```ts
import { assert, test } from 'vitest'

const testPassed = 'no'

test('assert.isNotFalse', () => {
  assert.isNotFalse(testPassed)
})
```

## isNull

- **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is null.

```ts
import { assert, test } from 'vitest'

const error = null

test('assert.isNull', () => {
  assert.isNull(error, 'error is null')
})
```

## isNotNull

- **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is not null.

```ts
import { assert, test } from 'vitest'

const error = { message: 'error was occurred' }

test('assert.isNotNull', () => {
  assert.isNotNull(error, 'error is not null but object')
})
```

## isNaN

- **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is NaN.

```ts
import { assert, test } from 'vitest'

const calculation = 1 * 'vitest'

test('assert.isNaN', () => {
  assert.isNaN(calculation, '1 * "vitest" is NaN')
})
```

## isNotNaN

- **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is not NaN.

```ts
import { assert, test } from 'vitest'

const calculation = 1 * 2

test('assert.isNotNaN', () => {
  assert.isNotNaN(calculation, '1 * 2 is Not NaN but 2')
})
```

## exists

- **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is neither null nor undefined.

```ts
import { assert, test } from 'vitest'

const name = 'foo'

test('assert.exists', () => {
  assert.exists(name, 'foo is neither null nor undefined')
})
```

## notExists

- **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is either null nor undefined.

```ts
import { assert, test } from 'vitest'

const foo = null
const bar = undefined

test('assert.notExists', () => {
  assert.notExists(foo, 'foo is null so not exist')
  assert.notExists(bar, 'bar is undefined so not exist')
})
```

## isUndefined

- **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is undefined.

```ts
import { assert, test } from 'vitest'

const name = undefined

test('assert.isUndefined', () => {
  assert.isUndefined(name, 'name is undefined')
})
```

## isDefined

- **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is not undefined.

```ts
import { assert, test } from 'vitest'

const name = 'foo'

test('assert.isDefined', () => {
  assert.isDefined(name, 'name is not undefined')
})
```

## isFunction

- **Type:** `<T>(value: T, message?: string) => void`
- **Alias:** `isCallable`
Asserts that `value` is a function.

```ts
import { assert, test } from 'vitest'

function name() { return 'foo' };

test('assert.isFunction', () => {
  assert.isFunction(name, 'name is function')
})
```

## isNotFunction

- **Type:** `<T>(value: T, message?: string) => void`
- **Alias:** `isNotCallable`

Asserts that `value` is not a function.

```ts
import { assert, test } from 'vitest'

const name = 'foo'

test('assert.isNotFunction', () => {
  assert.isNotFunction(name, 'name is not function but string')
})
```

## isObject

- **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is an object of type Object (as revealed by Object.prototype.toString). The assertion does not match subclassed objects.

```ts
import { assert, test } from 'vitest'

const someThing = { color: 'red', shape: 'circle' }

test('assert.isObject', () => {
  assert.isObject(someThing, 'someThing is object')
})
```

## isNotObject

- **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is not an object of type Object (as revealed by Object.prototype.toString). The assertion does not match subclassed objects.

```ts
import { assert, test } from 'vitest'

const someThing = 'redCircle'

test('assert.isNotObject', () => {
  assert.isNotObject(someThing, 'someThing is not object but string')
})
```

## isArray

- **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is an array.

```ts
import { assert, test } from 'vitest'

const color = ['red', 'green', 'yellow']

test('assert.isArray', () => {
  assert.isArray(color, 'color is array')
})
```

## isNotArray

- **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is not an array.

```ts
import { assert, test } from 'vitest'

const color = 'red'

test('assert.isNotArray', () => {
  assert.isNotArray(color, 'color is not array but string')
})
```

## isString

- **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is a string.

```ts
import { assert, test } from 'vitest'

const color = 'red'

test('assert.isString', () => {
  assert.isString(color, 'color is string')
})
```

## isNotString

- **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is not a string.

```ts
import { assert, test } from 'vitest'

const color = ['red', 'green', 'yellow']

test('assert.isNotString', () => {
  assert.isNotString(color, 'color is not string but array')
})
```

## isNumber

- **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is a number.

```ts
import { assert, test } from 'vitest'

const colors = 3

test('assert.isNumber', () => {
  assert.isNumber(colors, 'colors is number')
})
```

## isNotNumber

- **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is not a number.

```ts
import { assert, test } from 'vitest'

const colors = '3 colors'

test('assert.isNotNumber', () => {
  assert.isNotNumber(colors, 'colors is not number but strings')
})
```

## isFinite

- **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is a finite number (not NaN, Infinity).

```ts
import { assert, test } from 'vitest'

const colors = 3

test('assert.isFinite', () => {
  assert.isFinite(colors, 'colors is number not NaN or Infinity')
})
```

## isBoolean

- **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is a boolean.

```ts
import { assert, test } from 'vitest'

const isReady = true

test('assert.isBoolean', () => {
  assert.isBoolean(isReady, 'isReady is a boolean')
})
```

## isNotBoolean

- **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is not a boolean.

```ts
import { assert, test } from 'vitest'

const isReady = 'sure'

test('assert.isBoolean', () => {
  assert.isBoolean(isReady, 'isReady is not a boolean but string')
})
```

## typeOf

- **Type:** `<T>(value: T, name: string, message?: string) => void`

Asserts that `value`’s type is `name`, as determined by Object.prototype.toString.

```ts
import { assert, test } from 'vitest'

test('assert.typeOf', () => {
  assert.typeOf({ color: 'red' }, 'object', 'we have an object')
  assert.typeOf(['red', 'green'], 'array', 'we have an array')
  assert.typeOf('red', 'string', 'we have a string')
  assert.typeOf(/red/, 'regexp', 'we have a regular expression')
  assert.typeOf(null, 'null', 'we have a null')
  assert.typeOf(undefined, 'undefined', 'we have an undefined')
})
```

## notTypeOf

- **Type:** `<T>(value: T, name: string, message?: string) => void`

Asserts that `value`’s type is not `name`, as determined by Object.prototype.toString.

```ts
import { assert, test } from 'vitest'

test('assert.notTypeOf', () => {
  assert.notTypeOf('red', 'number', '"red" is not a number')
})
```

## instanceOf

- **Type:** `<T>(value: T, constructor: Function, message?: string) => void`

Asserts that `value` is an instance of `constructor`.

```ts
import { assert, test } from 'vitest'

function Person(name) { this.name = name }
const foo = new Person('foo')

class Tea {
  constructor(name) {
    this.name = name
  }
}
const coffee = new Tea('coffee')

test('assert.instanceOf', () => {
  assert.instanceOf(foo, Person, 'foo is an instance of Person')
  assert.instanceOf(coffee, Tea, 'coffee is an instance of Tea')
})
```

## notInstanceOf

- **Type:** `<T>(value: T, constructor: Function, message?: string) => void`

Asserts that `value` is not an instance of `constructor`.

```ts
import { assert, test } from 'vitest'

function Person(name) { this.name = name }
const foo = new Person('foo')

class Tea {
  constructor(name) {
    this.name = name
  }
}
const coffee = new Tea('coffee')

test('assert.instanceOf', () => {
  assert.instanceOf(foo, Tea, 'foo is not an instance of Tea')
})
```

## include

- **Type:**
  - `(haystack: string, needle: string, message?: string) => void`
  - `<T>(haystack: readonly T[] | ReadonlySet<T> | ReadonlyMap<any, T>, needle: T, message?: string) => void`
  - `<T extends object>(haystack: WeakSet<T>, needle: T, message?: string) => void`
  - `<T>(haystack: T, needle: Partial<T>, message?: string) => void`

Asserts that `haystack` includes `needle`. Can be used to assert the inclusion of a value in an array, a substring in a string, or a subset of properties in an object.

```ts
import { assert, test } from 'vitest'

test('assert.include', () => {
  assert.include([1, 2, 3], 2, 'array contains value')
  assert.include('foobar', 'foo', 'string contains substring')
  assert.include({ foo: 'bar', hello: 'universe' }, { foo: 'bar' }, 'object contains property')
})
```

## notInclude

- **Type:**
  - `(haystack: string, needle: string, message?: string) => void`
  - `<T>(haystack: readonly T[] | ReadonlySet<T> | ReadonlyMap<any, T>, needle: T, message?: string) => void`
  - `<T extends object>(haystack: WeakSet<T>, needle: T, message?: string) => void`
  - `<T>(haystack: T, needle: Partial<T>, message?: string) => void`

Asserts that `haystack` does not include `needle`. It can be used to assert the absence of a value in an array, a substring in a string, or a subset of properties in an object.

```ts
import { assert, test } from 'vitest'

test('assert.notInclude', () => {
  assert.notInclude([1, 2, 3], 4, 'array doesn\'t contain 4')
  assert.notInclude('foobar', 'baz', 'foobar doesn\'t contain baz')
  assert.notInclude({ foo: 'bar', hello: 'universe' }, { foo: 'baz' }, 'object doesn\'t contain property')
})
```

## deepInclude

- **Type:**
- `(haystack: string, needle: string, message?: string) => void`
- `<T>(haystack: readonly T[] | ReadonlySet<T> | ReadonlyMap<any, T>, needle: T, message?: string) => void`
- `<T>(haystack: T, needle: T extends WeakSet<any> ? never : Partial<T>, message?: string) => void`

Asserts that `haystack` includes `needle`. Can be used to assert the inclusion of a value in an array or a subset of properties in an object. Deep equality is used.

```ts
import { assert, test } from 'vitest'

const obj1 = { a: 1 }
const obj2 = { b: 2 }

test('assert.deepInclude', () => {
  assert.deepInclude([obj1, obj2], { a: 1 })
  assert.deepInclude({ foo: obj1, bar: obj2 }, { foo: { a: 1 } })
})
```

## notDeepInclude

- **Type:**
  - `(haystack: string, needle: string, message?: string) => void`
  - `<T>(haystack: readonly T[] | ReadonlySet<T> | ReadonlyMap<any, T>, needle: T, message?: string) => void`
  - `<T>(haystack: T, needle: T extends WeakSet<any> ? never : Partial<T>, message?: string) => void`

Asserts that `haystack` does not include `needle`. It can be used to assert the absence of a value in an array or a subset of properties in an object. Deep equality is used.

```ts
import { assert, test } from 'vitest'

const obj1 = { a: 1 }
const obj2 = { b: 2 }

test('assert.notDeepInclude', () => {
  assert.notDeepInclude([obj1, obj2], { a: 10 })
  assert.notDeepInclude({ foo: obj1, bar: obj2 }, { foo: { a: 10 } })
})
```

## nestedInclude

- **Type:** `(haystack: any, needle: any, message?: string) => void`

Asserts that `haystack` includes `needle`. Can be used to assert the inclusion of a subset of properties in an object. Enables the use of dot- and bracket-notation for referencing nested properties. ‘[]’ and ‘.’ in property names can be escaped using double backslashes.

```ts
import { assert, test } from 'vitest'

test('assert.nestedInclude', () => {
  assert.nestedInclude({ '.a': { b: 'x' } }, { '\\.a.[b]': 'x' })
  assert.nestedInclude({ a: { '[b]': 'x' } }, { 'a.\\[b\\]': 'x' })
})
```

## notNestedInclude

- **Type:** `(haystack: any, needle: any, message?: string) => void`

Asserts that `haystack` does not include `needle`. Can be used to assert the inclusion of a subset of properties in an object. Enables the use of dot- and bracket-notation for referencing nested properties. ‘[]’ and ‘.’ in property names can be escaped using double backslashes.

```ts
import { assert, test } from 'vitest'

test('assert.nestedInclude', () => {
  assert.notNestedInclude({ '.a': { b: 'x' } }, { '\\.a.b': 'y' })
  assert.notNestedInclude({ a: { '[b]': 'x' } }, { 'a.\\[b\\]': 'y' })
})
```

## deepNestedInclude

- **Type:** `(haystack: any, needle: any, message?: string) => void`

Asserts that `haystack` includes `needle`. Can be used to assert the inclusion of a subset of properties in an object while checking for deep equality. Enables the use of dot- and bracket-notation for referencing nested properties. ‘[]’ and ‘.’ in property names can be escaped using double backslashes.

```ts
import { assert, test } from 'vitest'

test('assert.deepNestedInclude', () => {
  assert.deepNestedInclude({ a: { b: [{ x: 1 }] } }, { 'a.b[0]': { x: 1 } })
  assert.deepNestedInclude({ '.a': { '[b]': { x: 1 } } }, { '\\.a.\\[b\\]': { x: 1 } })
})
```

## notDeepNestedInclude

- **Type:** `(haystack: any, needle: any, message?: string) => void`

Asserts that `haystack` not includes `needle`. Can be used to assert the absence of a subset of properties in an object while checking for deep equality. Enables the use of dot- and bracket-notation for referencing nested properties. ‘[]’ and ‘.’ in property names can be escaped using double backslashes.

```ts
import { assert, test } from 'vitest'

test('assert.notDeepNestedInclude', () => {
  assert.notDeepNestedInclude({ a: { b: [{ x: 1 }] } }, { 'a.b[0]': { y: 1 } })
  assert.notDeepNestedInclude({ '.a': { '[b]': { x: 1 } } }, { '\\.a.\\[b\\]': { y: 2 } })
})
```

## ownInclude

- **Type:** `(haystack: any, needle: any, message?: string) => void`

Asserts that `haystack` includes `needle`. Can be used to assert the inclusion of a subset of properties in an object while ignoring inherited properties.

```ts
import { assert, test } from 'vitest'

test('assert.ownInclude', () => {
  assert.ownInclude({ a: 1 }, { a: 1 })
})
```

## notOwnInclude

- **Type:** `(haystack: any, needle: any, message?: string) => void`

Asserts that `haystack` includes `needle`. Can be used to assert the absence of a subset of properties in an object while ignoring inherited properties.

```ts
import { assert, test } from 'vitest'

const obj1 = {
  b: 2
}

const obj2 = object.create(obj1)
obj2.a = 1

test('assert.notOwnInclude', () => {
  assert.notOwnInclude(obj2, { b: 2 })
})
```

## deepOwnInclude

- **Type:** `(haystack: any, needle: any, message?: string) => void`

Asserts that `haystack` includes `needle`. Can be used to assert the inclusion of a subset of properties in an object while ignoring inherited properties and checking for deep equality.

```ts
import { assert, test } from 'vitest'

test('assert.deepOwnInclude', () => {
  assert.deepOwnInclude({ a: { b: 2 } }, { a: { b: 2 } })
})
```

## notDeepOwnInclude

- **Type:** `(haystack: any, needle: any, message?: string) => void`

Asserts that `haystack` not includes `needle`. Can be used to assert the absence of a subset of properties in an object while ignoring inherited properties and checking for deep equality.

```ts
import { assert, test } from 'vitest'

test('assert.notDeepOwnInclude', () => {
  assert.notDeepOwnInclude({ a: { b: 2 } }, { a: { c: 3 } })
})
```

## match

- **Type:** `(value: string, regexp: RegExp, message?: string) => void`

Asserts that `value` matches the regular expression `regexp`.

```ts
import { assert, test } from 'vitest'

test('assert.match', () => {
  assert.match('foobar', /^foo/, 'regexp matches')
})
```

## notMatch

- **Type:** `(value: string, regexp: RegExp, message?: string) => void`

Asserts that `value` does not matches the regular expression `regexp`.

```ts
import { assert, test } from 'vitest'

test('assert.notMatch', () => {
  assert.notMatch('foobar', /^foo/, 'regexp does not match')
})
```

## property

- **Type:** `<T>(object: T, property: string, message?: string) => void`

Asserts that `object` has a direct or inherited property named by `property`

```ts
import { assert, test } from 'vitest'

test('assert.property', () => {
  assert.property({ tea: { green: 'matcha' } }, 'tea')
  assert.property({ tea: { green: 'matcha' } }, 'toString')
})
```

## notProperty

- **Type:** `<T>(object: T, property: string, message?: string) => void`

Asserts that `object` does not have a direct or inherited property named by `property`

```ts
import { assert, test } from 'vitest'

test('assert.notProperty', () => {
  assert.notProperty({ tea: { green: 'matcha' } }, 'coffee')
})
```

## propertyVal

- **Type:** `<T, V>(object: T, property: string, value: V, message?: string) => void`

Asserts that `object` has a direct or inherited property named by `property` with a value given by `value`. Uses a strict equality check (===).

```ts
import { assert, test } from 'vitest'

test('assert.notPropertyVal', () => {
  assert.propertyVal({ tea: 'is good' }, 'tea', 'is good')
})
```

## notPropertyVal

- **Type:** `<T, V>(object: T, property: string, value: V, message?: string) => void`

Asserts that `object` does not have a direct or inherited property named by `property` with a value given by `value`. Uses a strict equality check (===).

```ts
import { assert, test } from 'vitest'

test('assert.notPropertyVal', () => {
  assert.notPropertyVal({ tea: 'is good' }, 'tea', 'is bad')
  assert.notPropertyVal({ tea: 'is good' }, 'coffee', 'is good')
})
```

## deepPropertyVal

- **Type:** `<T, V>(object: T, property: string, value: V, message?: string) => void`

Asserts that `object` has a direct or inherited property named by `property` with a value given by `value`. Uses a deep equality check.

```ts
import { assert, test } from 'vitest'

test('assert.deepPropertyVal', () => {
  assert.deepPropertyVal({ tea: { green: 'matcha' } }, 'tea', { green: 'matcha' })
})
```

## notDeepPropertyVal

- **Type:** `<T, V>(object: T, property: string, value: V, message?: string) => void`

Asserts that `object` does not have a direct or inherited property named by `property` with a value given by `value`. Uses a deep equality check.

```ts
import { assert, test } from 'vitest'

test('assert.deepPropertyVal', () => {
  assert.notDeepPropertyVal({ tea: { green: 'matcha' } }, 'tea', { black: 'matcha' })
  assert.notDeepPropertyVal({ tea: { green: 'matcha' } }, 'tea', { green: 'oolong' })
  assert.notDeepPropertyVal({ tea: { green: 'matcha' } }, 'coffee', { green: 'matcha' })
})
```

## nestedProperty

- **Type:** `<T>(object: T, property: string, message?: string) => void`

Asserts that `object` has a direct or inherited property named by `property`, which can be a string using dot- and bracket-notation for nested reference.

```ts
import { assert, test } from 'vitest'

test('assert.deepPropertyVal', () => {
  assert.nestedProperty({ tea: { green: 'matcha' } }, 'tea.green')
})
```

## notNestedProperty

- **Type:** `<T>(object: T, property: string, message?: string) => void`

Asserts that `object` does not have a direct or inherited property named by `property`, which can be a string using dot- and bracket-notation for nested reference.

```ts
import { assert, test } from 'vitest'

test('assert.deepPropertyVal', () => {
  assert.notNestedProperty({ tea: { green: 'matcha' } }, 'tea.oolong')
})
```

## nestedPropertyVal

- **Type:** `<T>(object: T, property: string, value: any, message?: string) => void`

Asserts that `object` has a property named by `property` with value given by `value`. `property` can use dot- and bracket-notation for nested reference. Uses a strict equality check (===).

```ts
import { assert, test } from 'vitest'

test('assert.nestedPropertyVal', () => {
  assert.nestedPropertyVal({ tea: { green: 'matcha' } }, 'tea.green', 'matcha')
})
```

## notNestedPropertyVal

- **Type:** `<T>(object: T, property: string, value: any, message?: string) => void`

Asserts that `object` does not have a property named by `property` with value given by `value`. `property` can use dot- and bracket-notation for nested reference. Uses a strict equality check (===).

```ts
import { assert, test } from 'vitest'

test('assert.notNestedPropertyVal', () => {
  assert.notNestedPropertyVal({ tea: { green: 'matcha' } }, 'tea.green', 'konacha')
  assert.notNestedPropertyVal({ tea: { green: 'matcha' } }, 'coffee.green', 'matcha')
})
```

## deepNestedPropertyVal

- **Type:** `<T>(object: T, property: string, value: any, message?: string) => void`

Asserts that `object` has a property named by `property` with a value given by `value`. `property` can use dot- and bracket-notation for nested reference. Uses a deep equality check (===).

```ts
import { assert, test } from 'vitest'

test('assert.notNestedPropertyVal', () => {
  assert.notNestedPropertyVal({ tea: { green: 'matcha' } }, 'tea.green', 'konacha')
  assert.notNestedPropertyVal({ tea: { green: 'matcha' } }, 'coffee.green', 'matcha')
})
```

## notDeepNestedPropertyVal

- **Type:** `<T>(object: T, property: string, value: any, message?: string) => void`

Asserts that `object` does not have a property named by `property` with value given by `value`. `property` can use dot- and bracket-notation for nested reference. Uses a deep equality check.

```ts
import { assert, test } from 'vitest'

test('assert.notDeepNestedPropertyVal', () => {
  assert.notDeepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.green', { oolong: 'yum' })
  assert.notDeepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.green', { matcha: 'yuck' })
  assert.notDeepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.black', { matcha: 'yum' })
})
```

## lengthOf

- **Type:** `<T extends { readonly length?: number | undefined } | { readonly size?: number | undefined }>(object: T, length: number, message?: string) => void`

Asserts that `object` has a `length` or `size` with the expected value.

```ts
import { assert, test } from 'vitest'

test('assert.lengthOf', () => {
  assert.lengthOf([1, 2, 3], 3, 'array has length of 3')
  assert.lengthOf('foobar', 6, 'string has length of 6')
  assert.lengthOf(new Set([1, 2, 3]), 3, 'set has size of 3')
  assert.lengthOf(new Map([['a', 1], ['b', 2], ['c', 3]]), 3, 'map has size of 3')
})
```

## hasAnyKeys

- **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` has at least one of the `keys` provided. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

```ts
import { assert, test } from 'vitest'

test('assert.hasAnyKeys', () => {
  assert.hasAnyKeys({ foo: 1, bar: 2, baz: 3 }, ['foo', 'iDontExist', 'baz'])
  assert.hasAnyKeys({ foo: 1, bar: 2, baz: 3 }, { foo: 30, iDontExist: 99, baz: 1337 })
  assert.hasAnyKeys(new Map([[{ foo: 1 }, 'bar'], ['key', 'value']]), [{ foo: 1 }, 'key'])
  assert.hasAnyKeys(new Set([{ foo: 'bar' }, 'anotherKey']), [{ foo: 'bar' }, 'anotherKey'])
})
```

## hasAllKeys

- **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` has all and only all of the `keys` provided. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

```ts
import { assert, test } from 'vitest'

test('assert.hasAllKeys', () => {
  assert.hasAllKeys({ foo: 1, bar: 2, baz: 3 }, ['foo', 'bar', 'baz'])
  assert.hasAllKeys({ foo: 1, bar: 2, baz: 3 }, { foo: 30, bar: 99, baz: 1337 })
  assert.hasAllKeys(new Map([[{ foo: 1 }, 'bar'], ['key', 'value']]), [{ foo: 1 }, 'key'])
  assert.hasAllKeys(new Set([{ foo: 'bar' }, 'anotherKey'], [{ foo: 'bar' }, 'anotherKey']))
})
```

## containsAllKeys

- **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` has all of the `keys` provided but may have more keys not listed. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

```ts
import { assert, test } from 'vitest'

test('assert.containsAllKeys', () => {
  assert.containsAllKeys({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz'])
  assert.containsAllKeys({ foo: 1, bar: 2, baz: 3 }, ['foo', 'bar', 'baz'])
  assert.containsAllKeys({ foo: 1, bar: 2, baz: 3 }, { foo: 30, baz: 1337 })
  assert.containsAllKeys({ foo: 1, bar: 2, baz: 3 }, { foo: 30, bar: 99, baz: 1337 })
  assert.containsAllKeys(new Map([[{ foo: 1 }, 'bar'], ['key', 'value']]), [{ foo: 1 }])
  assert.containsAllKeys(new Map([[{ foo: 1 }, 'bar'], ['key', 'value']]), [{ foo: 1 }, 'key'])
  assert.containsAllKeys(new Set([{ foo: 'bar' }, 'anotherKey'], [{ foo: 'bar' }]))
  assert.containsAllKeys(new Set([{ foo: 'bar' }, 'anotherKey'], [{ foo: 'bar' }, 'anotherKey']))
})
```

## doesNotHaveAnyKeys

- **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` has none of the `keys` provided. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

```ts
import { assert, test } from 'vitest'

test('assert.doesNotHaveAnyKeys', () => {
  assert.doesNotHaveAnyKeys({ foo: 1, bar: 2, baz: 3 }, ['one', 'two', 'example'])
  assert.doesNotHaveAnyKeys({ foo: 1, bar: 2, baz: 3 }, { one: 1, two: 2, example: 'foo' })
  assert.doesNotHaveAnyKeys(new Map([[{ foo: 1 }, 'bar'], ['key', 'value']]), [{ one: 'two' }, 'example'])
  assert.doesNotHaveAnyKeys(new Set([{ foo: 'bar' }, 'anotherKey'], [{ one: 'two' }, 'example']))
})
```

## doesNotHaveAllKeys

- **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` does not have at least one of the `keys` provided. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

```ts
import { assert, test } from 'vitest'

test('assert.hasAnyKeys', () => {
  assert.doesNotHaveAnyKeys({ foo: 1, bar: 2, baz: 3 }, ['one', 'two', 'example'])
  assert.doesNotHaveAnyKeys({ foo: 1, bar: 2, baz: 3 }, { one: 1, two: 2, example: 'foo' })
  assert.doesNotHaveAnyKeys(new Map([[{ foo: 1 }, 'bar'], ['key', 'value']]), [{ one: 'two' }, 'example'])
  assert.doesNotHaveAnyKeys(new Set([{ foo: 'bar' }, 'anotherKey']), [{ one: 'two' }, 'example'])
})
```

## hasAnyDeepKeys

- **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` has at least one of the `keys` provided. Since Sets and Maps can have objects as keys you can use this assertion to perform a deep comparison. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

```ts
import { assert, test } from 'vitest'

test('assert.hasAnyDeepKeys', () => {
  assert.hasAnyDeepKeys(new Map([[{ one: 'one' }, 'valueOne'], [1, 2]]), { one: 'one' })
  assert.hasAnyDeepKeys(new Map([[{ one: 'one' }, 'valueOne'], [1, 2]]), [{ one: 'one' }, { two: 'two' }])
  assert.hasAnyDeepKeys(new Map([[{ one: 'one' }, 'valueOne'], [{ two: 'two' }, 'valueTwo']]), [{ one: 'one' }, { two: 'two' }])
  assert.hasAnyDeepKeys(new Set([{ one: 'one' }, { two: 'two' }]), { one: 'one' })
  assert.hasAnyDeepKeys(new Set([{ one: 'one' }, { two: 'two' }]), [{ one: 'one' }, { three: 'three' }])
  assert.hasAnyDeepKeys(new Set([{ one: 'one' }, { two: 'two' }]), [{ one: 'one' }, { two: 'two' }])
})
```

## hasAllDeepKeys

- **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` has all and only all of the `keys` provided. Since Sets and Maps can have objects as keys you can use this assertion to perform a deep comparison. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

```ts
import { assert, test } from 'vitest'

test('assert.hasAnyDeepKeys', () => {
  assert.hasAllDeepKeys(new Map([[{ one: 'one' }, 'valueOne']]), { one: 'one' })
  assert.hasAllDeepKeys(new Map([[{ one: 'one' }, 'valueOne'], [{ two: 'two' }, 'valueTwo']]), [{ one: 'one' }, { two: 'two' }])
  assert.hasAllDeepKeys(new Set([{ one: 'one' }]), { one: 'one' })
  assert.hasAllDeepKeys(new Set([{ one: 'one' }, { two: 'two' }]), [{ one: 'one' }, { two: 'two' }])
})
```

## containsAllDeepKeys

- **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` contains all of the `keys` provided. Since Sets and Maps can have objects as keys you can use this assertion to perform a deep comparison. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

```ts
import { assert, test } from 'vitest'

test('assert.containsAllDeepKeys', () => {
  assert.containsAllDeepKeys(new Map([[{ one: 'one' }, 'valueOne'], [1, 2]]), { one: 'one' })
  assert.containsAllDeepKeys(new Map([[{ one: 'one' }, 'valueOne'], [{ two: 'two' }, 'valueTwo']]), [{ one: 'one' }, { two: 'two' }])
  assert.containsAllDeepKeys(new Set([{ one: 'one' }, { two: 'two' }]), { one: 'one' })
  assert.containsAllDeepKeys(new Set([{ one: 'one' }, { two: 'two' }]), [{ one: 'one' }, { two: 'two' }])
})
```

## doesNotHaveAnyDeepKeys

- **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` has none of the `keys` provided. Since Sets and Maps can have objects as keys you can use this assertion to perform a deep comparison. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

```ts
import { assert, test } from 'vitest'

test('assert.doesNotHaveAnyDeepKeys', () => {
  assert.doesNotHaveAnyDeepKeys(new Map([[{ one: 'one' }, 'valueOne'], [1, 2]]), { thisDoesNot: 'exist' })
  assert.doesNotHaveAnyDeepKeys(new Map([[{ one: 'one' }, 'valueOne'], [{ two: 'two' }, 'valueTwo']]), [{ twenty: 'twenty' }, { fifty: 'fifty' }])
  assert.doesNotHaveAnyDeepKeys(new Set([{ one: 'one' }, { two: 'two' }]), { twenty: 'twenty' })
  assert.doesNotHaveAnyDeepKeys(new Set([{ one: 'one' }, { two: 'two' }]), [{ twenty: 'twenty' }, { fifty: 'fifty' }])
})
```

## doesNotHaveAllDeepKeys

- **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` does not have at least one of the `keys` provided. Since Sets and Maps can have objects as keys you can use this assertion to perform a deep comparison. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

```ts
import { assert, test } from 'vitest'

test('assert.doesNotHaveAllDeepKeys', () => {
  assert.doesNotHaveAllDeepKeys(new Map([[{ one: 'one' }, 'valueOne'], [1, 2]]), { thisDoesNot: 'exist' })
  assert.doesNotHaveAllDeepKeys(new Map([[{ one: 'one' }, 'valueOne'], [{ two: 'two' }, 'valueTwo']]), [{ twenty: 'twenty' }, { one: 'one' }])
  assert.doesNotHaveAllDeepKeys(new Set([{ one: 'one' }, { two: 'two' }]), { twenty: 'twenty' })
  assert.doesNotHaveAllDeepKeys(new Set([{ one: 'one' }, { two: 'two' }]), [{ one: 'one' }, { fifty: 'fifty' }])
})
```

## throws

- **Type:**
  - `(fn: () => void, errMsgMatcher?: RegExp | string, ignored?: any, message?: string) => void`
  - `(fn: () => void, errorLike?: ErrorConstructor | Error | null, errMsgMatcher?: RegExp | string | null, message?: string) => void`
- **Alias:**
  - `throw`
  - `Throw`

If `errorLike` is an Error constructor, asserts that `fn` will throw an error that is an instance of `errorLike`. If errorLike is an Error instance, asserts that the error thrown is the same instance as `errorLike`. If `errMsgMatcher` is provided, it also asserts that the error thrown will have a message matching `errMsgMatcher`.

```ts
import { assert, test } from 'vitest'

test('assert.throws', () => {
  assert.throws(fn, 'Error thrown must have this msg')
  assert.throws(fn, /Error thrown must have a msg that matches this/)
  assert.throws(fn, ReferenceError)
  assert.throws(fn, errorInstance)
  assert.throws(fn, ReferenceError, 'Error thrown must be a ReferenceError and have this msg')
  assert.throws(fn, errorInstance, 'Error thrown must be the same errorInstance and have this msg')
  assert.throws(fn, ReferenceError, /Error thrown must be a ReferenceError and match this/)
  assert.throws(fn, errorInstance, /Error thrown must be the same errorInstance and match this/)
})
```

## doesNotThrow

- **Type:** `(fn: () => void, errMsgMatcher?: RegExp | string, ignored?: any, message?: string) => void`
- **Type:** `(fn: () => void, errorLike?: ErrorConstructor | Error | null, errMsgMatcher?: RegExp | string | null, message?: string) => void`

If `errorLike` is an Error constructor, asserts that `fn` will not throw an error that is an instance of `errorLike`. If errorLike is an Error instance, asserts that the error thrown is not the same instance as `errorLike`. If `errMsgMatcher` is provided, it also asserts that the error thrown will not have a message matching `errMsgMatcher`.

```ts
import { assert, test } from 'vitest'

test('assert.doesNotThrow', () => {
  assert.doesNotThrow(fn, 'Any Error thrown must not have this message')
  assert.doesNotThrow(fn, /Any Error thrown must not match this/)
  assert.doesNotThrow(fn, Error)
  assert.doesNotThrow(fn, errorInstance)
  assert.doesNotThrow(fn, Error, 'Error must not have this message')
  assert.doesNotThrow(fn, errorInstance, 'Error must not have this message')
  assert.doesNotThrow(fn, Error, /Error must not match this/)
  assert.doesNotThrow(fn, errorInstance, /Error must not match this/)
})
```

## operator

- **Type:** `(val1: OperatorComparable, operator: Operator, val2: OperatorComparable, message?: string) => void`

Compare `val1` and `val2` using `operator`.

```ts
import { assert, test } from 'vitest'

test('assert.operator', () => {
  assert.operator(1, '<', 2, 'everything is ok')
})
```

## closeTo

- **Type:** `(actual: number, expected: number, delta: number, message?: string) => void`
- **Alias:** `approximately`

Asserts that the `actual` is equal `expected`, to within a +/- `delta` range.

```ts
import { assert, test } from 'vitest'

test('assert.closeTo', () => {
  assert.closeTo(1.5, 1, 0.5, 'numbers are close')
})
```

## sameMembers

- **Type:** `<T>(set1: T[], set2: T[], message?: string) => void`

Asserts that `set1` and `set2` have the same members in any order. Uses a strict equality check (===).

```ts
import { assert, test } from 'vitest'

test('assert.sameMembers', () => {
  assert.sameMembers([1, 2, 3], [2, 1, 3], 'same members')
})
```

## notSameMembers

- **Type:** `<T>(set1: T[], set2: T[], message?: string) => void`

Asserts that `set1` and `set2` don't have the same members in any order. Uses a strict equality check (===).

```ts
import { assert, test } from 'vitest'

test('assert.sameMembers', () => {
  assert.notSameMembers([1, 2, 3], [5, 1, 3], 'not same members')
})
```

## sameDeepMembers

- **Type:** `<T>(set1: T[], set2: T[], message?: string) => void`

Asserts that `set1` and `set2` have the same members in any order. Uses a deep equality check.

```ts
import { assert, test } from 'vitest'

test('assert.sameDeepMembers', () => {
  assert.sameDeepMembers([{ a: 1 }, { b: 2 }, { c: 3 }], [{ b: 2 }, { a: 1 }, { c: 3 }], 'same deep members')
})
```

## notSameDeepMembers

- **Type:** `<T>(set1: T[], set2: T[], message?: string) => void`

Asserts that `set1` and `set2` don’t have the same members in any order. Uses a deep equality check.

```ts
import { assert, test } from 'vitest'

test('assert.sameDeepMembers', () => {
  assert.sameDeepMembers([{ a: 1 }, { b: 2 }, { c: 3 }], [{ b: 2 }, { a: 1 }, { c: 3 }], 'same deep members')
})
```

## sameOrderedMembers

- **Type:** `<T>(set1: T[], set2: T[], message?: string) => void`

Asserts that `set1` and `set2` have the same members in the same order. Uses a strict equality check (===).

```ts
import { assert, test } from 'vitest'

test('assert.sameOrderedMembers', () => {
  assert.sameOrderedMembers([1, 2, 3], [1, 2, 3], 'same ordered members')
})
```

## notSameOrderedMembers

- **Type:** `<T>(set1: T[], set2: T[], message?: string) => void`

Asserts that `set1` and `set2` have the same members in the same order. Uses a strict equality check (===).

```ts
import { assert, test } from 'vitest'

test('assert.notSameOrderedMembers', () => {
  assert.notSameOrderedMembers([1, 2, 3], [2, 1, 3], 'not same ordered members')
})
```

## sameDeepOrderedMembers

- **Type:** `<T>(set1: T[], set2: T[], message?: string) => void`

Asserts that `set1` and `set2` have the same members in the same order. Uses a deep equality check.

```ts
import { assert, test } from 'vitest'

test('assert.sameDeepOrderedMembers', () => {
  assert.sameDeepOrderedMembers([{ a: 1 }, { b: 2 }, { c: 3 }], [{ a: 1 }, { b: 2 }, { c: 3 }], 'same deep ordered members')
})
```

## notSameDeepOrderedMembers

- **Type:** `<T>(set1: T[], set2: T[], message?: string) => void`

Asserts that `set1` and `set2` don’t have the same members in the same order. Uses a deep equality check.

```ts
import { assert, test } from 'vitest'

test('assert.notSameDeepOrderedMembers', () => {
  assert.notSameDeepOrderedMembers([{ a: 1 }, { b: 2 }, { c: 3 }], [{ a: 1 }, { b: 2 }, { z: 5 }], 'not same deep ordered members')
  assert.notSameDeepOrderedMembers([{ a: 1 }, { b: 2 }, { c: 3 }], [{ b: 2 }, { a: 1 }, { c: 3 }], 'not same deep ordered members')
})
```

## includeMembers

- **Type:** `<T>(superset: T[], subset: T[], message?: string) => void`

Asserts that `subset` is included in `superset` in any order. Uses a strict equality check (===). Duplicates are ignored.

```ts
import { assert, test } from 'vitest'

test('assert.includeMembers', () => {
  assert.includeMembers([1, 2, 3], [2, 1, 2], 'include members')
})
```

## notIncludeMembers

- **Type:** `<T>(superset: T[], subset: T[], message?: string) => void`

Asserts that `subset` isn't included in `superset` in any order. Uses a strict equality check (===). Duplicates are ignored.

```ts
import { assert, test } from 'vitest'

test('assert.notIncludeMembers', () => {
  assert.notIncludeMembers([1, 2, 3], [5, 1], 'not include members')
})
```

## includeDeepMembers

- **Type:** `<T>(superset: T[], subset: T[], message?: string) => void`

Asserts that `subset` is included in `superset` in any order. Uses a deep equality check. Duplicates are ignored.

```ts
import { assert, test } from 'vitest'

test('assert.includeDeepMembers', () => {
  assert.includeDeepMembers([{ a: 1 }, { b: 2 }, { c: 3 }], [{ b: 2 }, { a: 1 }, { b: 2 }], 'include deep members')
})
```

## notIncludeDeepMembers

- **Type:** `<T>(superset: T[], subset: T[], message?: string) => void`

Asserts that `subset` isn’t included in `superset` in any order. Uses a deep equality check. Duplicates are ignored.

```ts
import { assert, test } from 'vitest'

test('assert.notIncludeDeepMembers', () => {
  assert.notIncludeDeepMembers([{ a: 1 }, { b: 2 }, { c: 3 }], [{ b: 2 }, { f: 5 }], 'not include deep members')
})
```

## includeOrderedMembers

- **Type:** `<T>(superset: T[], subset: T[], message?: string) => void`

Asserts that `subset` is included in `superset` in the same order beginning with the first element in `superset`. Uses a strict equality check (===).

```ts
import { assert, test } from 'vitest'

test('assert.includeOrderedMembers', () => {
  assert.includeOrderedMembers([1, 2, 3], [1, 2], 'include ordered members')
})
```

## notIncludeOrderedMembers

- **Type:** `<T>(superset: T[], subset: T[], message?: string) => void`

Asserts that `subset` isn't included in `superset` in the same order beginning with the first element in `superset`. Uses a strict equality check (===).

```ts
import { assert, test } from 'vitest'

test('assert.notIncludeOrderedMembers', () => {
  assert.notIncludeOrderedMembers([1, 2, 3], [2, 1], 'not include ordered members')
  assert.notIncludeOrderedMembers([1, 2, 3], [2, 3], 'not include ordered members')
})
```

## includeDeepOrderedMembers

- **Type:** `<T>(superset: T[], subset: T[], message?: string) => void`

Asserts that `subset` is included in `superset` in the same order beginning with the first element in `superset`. Uses a deep equality check.

```ts
import { assert, test } from 'vitest'

test('assert.includeDeepOrderedMembers', () => {
  assert.includeDeepOrderedMembers([{ a: 1 }, { b: 2 }, { c: 3 }], [{ a: 1 }, { b: 2 }], 'include deep ordered members')
})
```

## notIncludeDeepOrderedMembers

- **Type:** `<T>(superset: T[], subset: T[], message?: string) => void`

Asserts that `subset` isn’t included in `superset` in the same order beginning with the first element in superset. Uses a deep equality check.

```ts
import { assert, test } from 'vitest'

test('assert.includeDeepOrderedMembers', () => {
  assert.notIncludeDeepOrderedMembers([{ a: 1 }, { b: 2 }, { c: 3 }], [{ a: 1 }, { f: 5 }], 'not include deep ordered members')
  assert.notIncludeDeepOrderedMembers([{ a: 1 }, { b: 2 }, { c: 3 }], [{ b: 2 }, { a: 1 }], 'not include deep ordered members')
  assert.notIncludeDeepOrderedMembers([{ a: 1 }, { b: 2 }, { c: 3 }], [{ b: 2 }, { c: 3 }], 'not include deep ordered members')
})
```

## oneOf

- **Type:** `<T>(inList: T, list: T[], message?: string) => void`

Asserts that non-object, non-array value `inList` appears in the flat array `list`.

```ts
import { assert, test } from 'vitest'

test('assert.oneOf', () => {
  assert.oneOf(1, [2, 1], 'Not found in list')
})
```

## changes

- **Type:** `<T>(modifier: Function, object: T, property: string, message?: string) => void`

Asserts that a `modifier` changes the `object` of a `property`.

```ts
import { assert, test } from 'vitest'

test('assert.changes', () => {
  const obj = { val: 10 }
  function fn() { obj.val = 22 };
  assert.changes(fn, obj, 'val')
})
```

## changesBy

- **Type:** `<T>(modifier: Function, object: T, property: string, change: number, message?: string) => void`

Asserts that a `modifier` changes the `object` of a `property` by a `change`.

```ts
import { assert, test } from 'vitest'

test('assert.changesBy', () => {
  const obj = { val: 10 }
  function fn() { obj.val += 2 };
  assert.changesBy(fn, obj, 'val', 2)
})
```

## doesNotChange

- **Type:** `<T>(modifier: Function, object: T, property: string, message?: string) => void`

Asserts that a `modifier` does not changes the `object` of a `property`.

```ts
import { assert, test } from 'vitest'

test('assert.doesNotChange', () => {
  const obj = { val: 10 }
  function fn() { obj.val += 2 };
  assert.doesNotChange(fn, obj, 'val', 2)
})
```

## changesButNotBy

- **Type:** `<T>(modifier: Function, object: T, property: string, change:number, message?: string) => void`

Asserts that a `modifier` does not change the `object` of a `property` or of a `modifier` return value by a `change`.

```ts
import { assert, test } from 'vitest'

test('assert.changesButNotBy', () => {
  const obj = { val: 10 }
  function fn() { obj.val += 10 };
  assert.changesButNotBy(fn, obj, 'val', 5)
})
```

## increases

- **Type:** `<T>(modifier: Function, object: T, property: string, message?: string) => void`

Asserts that a `modifier` increases a numeric `object`'s `property`.

```ts
import { assert, test } from 'vitest'

test('assert.increases', () => {
  const obj = { val: 10 }
  function fn() { obj.val = 13 };
  assert.increases(fn, obj, 'val')
})
```

## increasesBy

- **Type:** `<T>(modifier: Function, object: T, property: string, change: number, message?: string) => void`

Asserts that a `modifier` increases a numeric `object`'s `property` or a `modifier` return value by an `change`.

```ts
import { assert, test } from 'vitest'

test('assert.increasesBy', () => {
  const obj = { val: 10 }
  function fn() { obj.val += 10 };
  assert.increasesBy(fn, obj, 'val', 10)
})
```

## doesNotIncrease

- **Type:** `<T>(modifier: Function, object: T, property: string, message?: string) => void`

Asserts that a `modifier` does not increases a numeric `object`'s `property`.

```ts
import { assert, test } from 'vitest'

test('assert.doesNotIncrease', () => {
  const obj = { val: 10 }
  function fn() { obj.val = 8 }
  assert.doesNotIncrease(fn, obj, 'val')
})
```

## increasesButNotBy

- **Type:** `<T>(modifier: Function, object: T, property: string, change: number, message?: string) => void`

Asserts that a `modifier` does not increases a numeric `object`'s `property` or a `modifier` return value by an `change`.

```ts
import { assert, test } from 'vitest'

test('assert.increasesButNotBy', () => {
  const obj = { val: 10 }
  function fn() { obj.val += 15 };
  assert.increasesButNotBy(fn, obj, 'val', 10)
})
```

## decreases

- **Type:** `<T>(modifier: Function, object: T, property: string, message?: string) => void`

Asserts that a `modifier` decreases a numeric `object`'s `property`.

```ts
import { assert, test } from 'vitest'

test('assert.decreases', () => {
  const obj = { val: 10 }
  function fn() { obj.val = 5 };
  assert.decreases(fn, obj, 'val')
})
```

## decreasesBy

- **Type:** `<T>(modifier: Function, object: T, property: string, change: number, message?: string) => void`

Asserts that a `modifier` decreases a numeric `object`'s `property` or a `modifier` return value by a `change`.

```ts
import { assert, test } from 'vitest'

test('assert.decreasesBy', () => {
  const obj = { val: 10 }
  function fn() { obj.val -= 5 };
  assert.decreasesBy(fn, obj, 'val', 5)
})
```

## doesNotDecrease

- **Type:** `<T>(modifier: Function, object: T, property: string, message?: string) => void`

Asserts that a `modifier` dose not decrease a numeric `object`'s `property`.

```ts
import { assert, test } from 'vitest'

test('assert.doesNotDecrease', () => {
  const obj = { val: 10 }
  function fn() { obj.val = 15 }
  assert.doesNotDecrease(fn, obj, 'val')
})
```

## doesNotDecreaseBy

- **Type:** `<T>(modifier: Function, object: T, property: string, change: number, message?: string) => void`

Asserts that a `modifier` does not decrease a numeric `object`'s `property` or a `modifier` return value by a `change`.

```ts
import { assert, test } from 'vitest'

test('assert.doesNotDecreaseBy', () => {
  const obj = { val: 10 }
  function fn() { obj.val = 5 };
  assert.doesNotDecreaseBy(fn, obj, 'val', 1)
})
```

## decreasesButNotBy

- **Type:** `<T>(modifier: Function, object: T, property: string, change: number, message?: string) => void`

Asserts that a `modifier` does not decrease a numeric `object`'s `property` or a `modifier` return value by a `change`.

```ts
import { assert, test } from 'vitest'

test('assert.decreasesButNotBy', () => {
  const obj = { val: 10 }
  function fn() { obj.val = 5 };
  assert.decreasesButNotBy(fn, obj, 'val', 1)
})
```

## ifError

- **Type:** `<T>(object: T, message?: string) => void`

Asserts if `object` is not a false value, and throws if it is a true value. This is added to allow for chai to be a drop-in replacement for Node’s assert class.

```ts
import { assert, test } from 'vitest'

test('assert.ifError', () => {
  const err = new Error('I am a custom error')
  assert.ifError(err) // Rethrows err!
})
```

## isExtensible

- **Type:** `<T>(object: T, message?: string) => void`
- **Alias:** `extensible`

Asserts that `object` is extensible (can have new properties added to it).

```ts
import { assert, test } from 'vitest'

test('assert.isExtensible', () => {
  assert.isExtensible({})
})
```

## isNotExtensible

- **Type:** `<T>(object: T, message?: string) => void`
- **Alias:** `notExtensible`

Asserts that `object` is not extensible (can not have new properties added to it).

```ts
import { assert, test } from 'vitest'

test('assert.isNotExtensible', () => {
  const nonExtensibleObject = Object.preventExtensions({})
  const sealedObject = Object.seal({})
  const frozenObject = Object.freeze({})

  assert.isNotExtensible(nonExtensibleObject)
  assert.isNotExtensible(sealedObject)
  assert.isNotExtensible(frozenObject)
})
```

## isSealed

- **Type:** `<T>(object: T, message?: string) => void`
- **Alias:** `sealed`

Asserts that `object` is sealed (cannot have new properties added to it and its existing properties cannot be removed).

```ts
import { assert, test } from 'vitest'

test('assert.isSealed', () => {
  const sealedObject = Object.seal({})
  const frozenObject = Object.seal({})

  assert.isSealed(sealedObject)
  assert.isSealed(frozenObject)
})
```

## isNotSealed

- **Type:** `<T>(object: T, message?: string) => void`
- **Alias:** `notSealed`

Asserts that `object` is not sealed (can have new properties added to it and its existing properties can be removed).

```ts
import { assert, test } from 'vitest'

test('assert.isNotSealed', () => {
  assert.isNotSealed({})
})
```

## isFrozen

- **Type:** `<T>(object: T, message?: string) => void`
- **Alias:** `frozen`

Asserts that object is frozen (cannot have new properties added to it and its existing properties cannot be modified).

```ts
import { assert, test } from 'vitest'

test('assert.isFrozen', () => {
  const frozenObject = Object.freeze({})
  assert.frozen(frozenObject)
})
```

## isNotFrozen

- **Type:** `<T>(object: T, message?: string) => void`
- **Alias:** `notFrozen`

Asserts that `object` is not frozen (can have new properties added to it and its existing properties can be modified).

```ts
import { assert, test } from 'vitest'

test('assert.isNotFrozen', () => {
  assert.isNotFrozen({})
})
```

## isEmpty

- **Type:** `<T>(target: T, message?: string) => void`
- **Alias:** `empty`

Asserts that the `target` does not contain any values. For arrays and strings, it checks the length property. For Map and Set instances, it checks the size property. For non-function objects, it gets the count of its own enumerable string keys.

```ts
import { assert, test } from 'vitest'

test('assert.isEmpty', () => {
  assert.isEmpty([])
  assert.isEmpty('')
  assert.isEmpty(new Map())
  assert.isEmpty({})
})
```

## isNotEmpty

- **Type:** `<T>(object: T, message?: string) => void`
- **Alias:** `notEmpty`

Asserts that the `target` contains values. For arrays and strings, it checks the length property. For Map and Set instances, it checks the size property. For non-function objects, it gets the count of its own enumerable string keys.

```ts
import { assert, test } from 'vitest'

test('assert.isNotEmpty', () => {
  assert.isNotEmpty([1, 2])
  assert.isNotEmpty('34')
  assert.isNotEmpty(new Set([5, 6]))
  assert.isNotEmpty({ key: 7 })
})
```
````

## File: docs/api/expect-typeof.md
````markdown
# expectTypeOf

::: warning
During runtime this function doesn't do anything. To [enable typechecking](/guide/testing-types#run-typechecking), don't forget to pass down `--typecheck` flag.
:::

- **Type:** `<T>(a: unknown) => ExpectTypeOf`

## not

- **Type:** `ExpectTypeOf`

You can negate all assertions, using `.not` property.

## toEqualTypeOf

- **Type:** `<T>(expected: T) => void`

This matcher will check if the types are fully equal to each other. This matcher will not fail if two objects have different values, but the same type. It will fail however if an object is missing a property.

```ts
import { expectTypeOf } from 'vitest'

expectTypeOf({ a: 1 }).toEqualTypeOf<{ a: number }>()
expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 1 })
expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 2 })
expectTypeOf({ a: 1, b: 1 }).not.toEqualTypeOf<{ a: number }>()
```

## toMatchTypeOf

- **Type:** `<T>(expected: T) => void`

This matcher checks if expect type extends provided type. It is different from `toEqual` and is more similar to [expect's](/api/expect) `toMatchObject()`. With this matcher, you can check if an object “matches” a type.

```ts
import { expectTypeOf } from 'vitest'

expectTypeOf({ a: 1, b: 1 }).toMatchTypeOf({ a: 1 })
expectTypeOf<number>().toMatchTypeOf<string | number>()
expectTypeOf<string | number>().not.toMatchTypeOf<number>()
```

## extract

- **Type:** `ExpectTypeOf<ExtractedUnion>`

You can use `.extract` to narrow down types for further testing.

```ts
import { expectTypeOf } from 'vitest'

type ResponsiveProp<T> = T | T[] | { xs?: T; sm?: T; md?: T }

interface CSSProperties { margin?: string; padding?: string }

function getResponsiveProp<T>(_props: T): ResponsiveProp<T> {
  return {}
}

const cssProperties: CSSProperties = { margin: '1px', padding: '2px' }

expectTypeOf(getResponsiveProp(cssProperties))
  .extract<{ xs?: any }>() // extracts the last type from a union
  .toEqualTypeOf<{ xs?: CSSProperties; sm?: CSSProperties; md?: CSSProperties }>()

expectTypeOf(getResponsiveProp(cssProperties))
  .extract<unknown[]>() // extracts an array from a union
  .toEqualTypeOf<CSSProperties[]>()
```

::: warning
If no type is found in the union, `.extract` will return `never`.
:::

## exclude

- **Type:** `ExpectTypeOf<NonExcludedUnion>`

You can use `.exclude` to remove types from a union for further testing.

```ts
import { expectTypeOf } from 'vitest'

type ResponsiveProp<T> = T | T[] | { xs?: T; sm?: T; md?: T }

interface CSSProperties { margin?: string; padding?: string }

function getResponsiveProp<T>(_props: T): ResponsiveProp<T> {
  return {}
}

const cssProperties: CSSProperties = { margin: '1px', padding: '2px' }

expectTypeOf(getResponsiveProp(cssProperties))
  .exclude<unknown[]>()
  .exclude<{ xs?: unknown }>() // or just .exclude<unknown[] | { xs?: unknown }>()
  .toEqualTypeOf<CSSProperties>()
```

::: warning
If no type is found in the union, `.exclude` will return `never`.
:::

## returns

- **Type:** `ExpectTypeOf<ReturnValue>`

You can use `.returns` to extract return value of a function type.

```ts
import { expectTypeOf } from 'vitest'

expectTypeOf(() => {}).returns.toBeVoid()
expectTypeOf((a: number) => [a, a]).returns.toEqualTypeOf([1, 2])
```

::: warning
If used on a non-function type, it will return `never`, so you won't be able to chain it with other matchers.
:::

## parameters

- **Type:** `ExpectTypeOf<Parameters>`

You can extract function arguments with `.parameters` to perform assertions on its value. Parameters are returned as an array.

```ts
import { expectTypeOf } from 'vitest'

type NoParam = () => void
type HasParam = (s: string) => void

expectTypeOf<NoParam>().parameters.toEqualTypeOf<[]>()
expectTypeOf<HasParam>().parameters.toEqualTypeOf<[string]>()
```

::: warning
If used on a non-function type, it will return `never`, so you won't be able to chain it with other matchers.
:::

::: tip
You can also use [`.toBeCallableWith`](#tobecallablewith) matcher as a more expressive assertion.
:::

## parameter

- **Type:** `(nth: number) => ExpectTypeOf`

You can extract a certain function argument with `.parameter(number)` call to perform other assertions on it.

```ts
import { expectTypeOf } from 'vitest'

function foo(a: number, b: string) {
  return [a, b]
}

expectTypeOf(foo).parameter(0).toBeNumber()
expectTypeOf(foo).parameter(1).toBeString()
```

::: warning
If used on a non-function type, it will return `never`, so you won't be able to chain it with other matchers.
:::

## constructorParameters

- **Type:** `ExpectTypeOf<ConstructorParameters>`

You can extract constructor parameters as an array of values and perform assertions on them with this method.

```ts
import { expectTypeOf } from 'vitest'

expectTypeOf(Date).constructorParameters.toEqualTypeOf<[] | [string | number | Date]>()
```

::: warning
If used on a non-function type, it will return `never`, so you won't be able to chain it with other matchers.
:::

::: tip
You can also use [`.toBeConstructibleWith`](#tobeconstructiblewith) matcher as a more expressive assertion.
:::

## instance

- **Type:** `ExpectTypeOf<ConstructableInstance>`

This property gives access to matchers that can be performed on an instance of the provided class.

```ts
import { expectTypeOf } from 'vitest'

expectTypeOf(Date).instance.toHaveProperty('toISOString')
```

::: warning
If used on a non-function type, it will return `never`, so you won't be able to chain it with other matchers.
:::

## items

- **Type:** `ExpectTypeOf<T>`

You can get array item type with `.items` to perform further assertions.

```ts
import { expectTypeOf } from 'vitest'

expectTypeOf([1, 2, 3]).items.toEqualTypeOf<number>()
expectTypeOf([1, 2, 3]).items.not.toEqualTypeOf<string>()
```

## resolves

- **Type:** `ExpectTypeOf<ResolvedPromise>`

This matcher extracts resolved value of a `Promise`, so you can perform other assertions on it.

```ts
import { expectTypeOf } from 'vitest'

async function asyncFunc() {
  return 123
}

expectTypeOf(asyncFunc).returns.resolves.toBeNumber()
expectTypeOf(Promise.resolve('string')).resolves.toBeString()
```

::: warning
If used on a non-promise type, it will return `never`, so you won't be able to chain it with other matchers.
:::

## guards

- **Type:** `ExpectTypeOf<Guard>`

This matcher extracts guard value (e.g., `v is number`), so you can perform assertions on it.

```ts
import { expectTypeOf } from 'vitest'

function isString(v: any): v is string {
  return typeof v === 'string'
}
expectTypeOf(isString).guards.toBeString()
```

::: warning
Returns `never`, if the value is not a guard function, so you won't be able to chain it with other matchers.
:::

## asserts

- **Type:** `ExpectTypeOf<Assert>`

This matcher extracts assert value (e.g., `assert v is number`), so you can perform assertions on it.

```ts
import { expectTypeOf } from 'vitest'

function assertNumber(v: any): asserts v is number {
  if (typeof v !== 'number') {
    throw new TypeError('Nope !')
  }
}

expectTypeOf(assertNumber).asserts.toBeNumber()
```

::: warning
Returns `never`, if the value is not an assert function, so you won't be able to chain it with other matchers.
:::

## toBeAny

- **Type:** `() => void`

With this matcher you can check, if provided type is `any` type. If the type is too specific, the test will fail.

```ts
import { expectTypeOf } from 'vitest'

expectTypeOf<any>().toBeAny()
expectTypeOf({} as any).toBeAny()
expectTypeOf('string').not.toBeAny()
```

## toBeUnknown

- **Type:** `() => void`

This matcher checks, if provided type is `unknown` type.

```ts
import { expectTypeOf } from 'vitest'

expectTypeOf().toBeUnknown()
expectTypeOf({} as unknown).toBeUnknown()
expectTypeOf('string').not.toBeUnknown()
```

## toBeNever

- **Type:** `() => void`

This matcher checks, if provided type is a `never` type.

```ts
import { expectTypeOf } from 'vitest'

expectTypeOf<never>().toBeNever()
expectTypeOf((): never => {}).returns.toBeNever()
```

## toBeFunction

- **Type:** `() => void`

This matcher checks, if provided type is a `function`.

```ts
import { expectTypeOf } from 'vitest'

expectTypeOf(42).not.toBeFunction()
expectTypeOf((): never => {}).toBeFunction()
```

## toBeObject

- **Type:** `() => void`

This matcher checks, if provided type is an `object`.

```ts
import { expectTypeOf } from 'vitest'

expectTypeOf(42).not.toBeObject()
expectTypeOf({}).toBeObject()
```

## toBeArray

- **Type:** `() => void`

This matcher checks, if provided type is `Array<T>`.

```ts
import { expectTypeOf } from 'vitest'

expectTypeOf(42).not.toBeArray()
expectTypeOf([]).toBeArray()
expectTypeOf([1, 2]).toBeArray()
expectTypeOf([{}, 42]).toBeArray()
```

## toBeString

- **Type:** `() => void`

This matcher checks, if provided type is a `string`.

```ts
import { expectTypeOf } from 'vitest'

expectTypeOf(42).not.toBeString()
expectTypeOf('').toBeString()
expectTypeOf('a').toBeString()
```

## toBeBoolean

- **Type:** `() => void`

This matcher checks, if provided type is `boolean`.

```ts
import { expectTypeOf } from 'vitest'

expectTypeOf(42).not.toBeBoolean()
expectTypeOf(true).toBeBoolean()
expectTypeOf<boolean>().toBeBoolean()
```

## toBeVoid

- **Type:** `() => void`

This matcher checks, if provided type is `void`.

```ts
import { expectTypeOf } from 'vitest'

expectTypeOf(() => {}).returns.toBeVoid()
expectTypeOf<void>().toBeVoid()
```

## toBeSymbol

- **Type:** `() => void`

This matcher checks, if provided type is a `symbol`.

```ts
import { expectTypeOf } from 'vitest'

expectTypeOf(Symbol(1)).toBeSymbol()
expectTypeOf<symbol>().toBeSymbol()
```

## toBeNull

- **Type:** `() => void`

This matcher checks, if provided type is `null`.

```ts
import { expectTypeOf } from 'vitest'

expectTypeOf(null).toBeNull()
expectTypeOf<null>().toBeNull()
expectTypeOf(undefined).not.toBeNull()
```

## toBeUndefined

- **Type:** `() => void`

This matcher checks, if provided type is `undefined`.

```ts
import { expectTypeOf } from 'vitest'

expectTypeOf(undefined).toBeUndefined()
expectTypeOf<undefined>().toBeUndefined()
expectTypeOf(null).not.toBeUndefined()
```

## toBeNullable

- **Type:** `() => void`

This matcher checks, if you can use `null` or `undefined` with provided type.

```ts
import { expectTypeOf } from 'vitest'

expectTypeOf<undefined | 1>().toBeNullable()
expectTypeOf<null | 1>().toBeNullable()
expectTypeOf<undefined | null | 1>().toBeNullable()
```

## toBeCallableWith

- **Type:** `() => void`

This matcher ensures you can call provided function with a set of parameters.

```ts
import { expectTypeOf } from 'vitest'

type NoParam = () => void
type HasParam = (s: string) => void

expectTypeOf<NoParam>().toBeCallableWith()
expectTypeOf<HasParam>().toBeCallableWith('some string')
```

::: warning
If used on a non-function type, it will return `never`, so you won't be able to chain it with other matchers.
:::

## toBeConstructibleWith

- **Type:** `() => void`

This matcher ensures you can create a new instance with a set of constructor parameters.

```ts
import { expectTypeOf } from 'vitest'

expectTypeOf(Date).toBeConstructibleWith(new Date())
expectTypeOf(Date).toBeConstructibleWith('01-01-2000')
```

::: warning
If used on a non-function type, it will return `never`, so you won't be able to chain it with other matchers.
:::

## toHaveProperty

- **Type:** `<K extends keyof T>(property: K) => ExpectTypeOf<T[K>`

This matcher checks if a property exists on the provided object. If it exists, it also returns the same set of matchers for the type of this property, so you can chain assertions one after another.

```ts
import { expectTypeOf } from 'vitest'

const obj = { a: 1, b: '' }

expectTypeOf(obj).toHaveProperty('a')
expectTypeOf(obj).not.toHaveProperty('c')

expectTypeOf(obj).toHaveProperty('a').toBeNumber()
expectTypeOf(obj).toHaveProperty('b').toBeString()
expectTypeOf(obj).toHaveProperty('a').not.toBeString()
```
````

## File: docs/api/expect.md
````markdown
# expect

The following types are used in the type signatures below

```ts
type Awaitable<T> = T | PromiseLike<T>
```

`expect` is used to create assertions. In this context `assertions` are functions that can be called to assert a statement. Vitest provides `chai` assertions by default and also `Jest` compatible assertions built on top of `chai`. Unlike `Jest`, Vitest supports a message as the second argument - if the assertion fails, the error message will be equal to it.

```ts
export interface ExpectStatic extends Chai.ExpectStatic, AsymmetricMatchersContaining {
  <T>(actual: T, message?: string): Assertion<T>
  extend: (expects: MatchersObject) => void
  anything: () => any
  any: (constructor: unknown) => any
  getState: () => MatcherState
  setState: (state: Partial<MatcherState>) => void
  not: AsymmetricMatchersContaining
}
```

For example, this code asserts that an `input` value is equal to `2`. If it's not, the assertion will throw an error, and the test will fail.

```ts twoslash
import { expect } from 'vitest'

const input = Math.sqrt(4)

expect(input).to.equal(2) // chai API
expect(input).toBe(2) // jest API
```

Technically this example doesn't use [`test`](/api/#test) function, so in the console you will see Node.js error instead of Vitest output. To learn more about `test`, please read [Test API Reference](/api/).

Also, `expect` can be used statically to access matcher functions, described later, and more.

::: warning
`expect` has no effect on testing types, if the expression doesn't have a type error. If you want to use Vitest as [type checker](/guide/testing-types), use [`expectTypeOf`](/api/expect-typeof) or [`assertType`](/api/assert-type).
:::

## soft

- **Type:** `ExpectStatic & (actual: any) => Assertions`

`expect.soft` functions similarly to `expect`, but instead of terminating the test execution upon a failed assertion, it continues running and marks the failure as a test failure. All errors encountered during the test will be displayed until the test is completed.

```ts
import { expect, test } from 'vitest'

test('expect.soft test', () => {
  expect.soft(1 + 1).toBe(3) // mark the test as fail and continue
  expect.soft(1 + 2).toBe(4) // mark the test as fail and continue
})
// reporter will report both errors at the end of the run
```

It can also be used with `expect`. if `expect` assertion fails, the test will be terminated and all errors will be displayed.

```ts
import { expect, test } from 'vitest'

test('expect.soft test', () => {
  expect.soft(1 + 1).toBe(3) // mark the test as fail and continue
  expect(1 + 2).toBe(4) // failed and terminate the test, all previous errors will be output
  expect.soft(1 + 3).toBe(5) // do not run
})
```

::: warning
`expect.soft` can only be used inside the [`test`](/api/#test) function.
:::

## poll

```ts
interface ExpectPoll extends ExpectStatic {
  (actual: () => T, options: { interval; timeout; message }): Promise<Assertions<T>>
}
```

`expect.poll` reruns the _assertion_ until it is succeeded. You can configure how many times Vitest should rerun the `expect.poll` callback by setting `interval` and `timeout` options.

If an error is thrown inside the `expect.poll` callback, Vitest will retry again until the timeout runs out.

```ts
import { expect, test } from 'vitest'

test('element exists', async () => {
  asyncInjectElement()

  await expect.poll(() => document.querySelector('.element')).toBeTruthy()
})
```

::: warning
`expect.poll` makes every assertion asynchronous, so you need to await it. Since Vitest 3, if you forget to await it, the test will fail with a warning to do so.

`expect.poll` doesn't work with several matchers:

- Snapshot matchers are not supported because they will always succeed. If your condition is flaky, consider using [`vi.waitFor`](/api/vi#vi-waitfor) instead to resolve it first:

```ts
import { expect, vi } from 'vitest'

const flakyValue = await vi.waitFor(() => getFlakyValue())
expect(flakyValue).toMatchSnapshot()
```

- `.resolves` and `.rejects` are not supported. `expect.poll` already awaits the condition if it's asynchronous.
- `toThrow` and its aliases are not supported because the `expect.poll` condition is always resolved before the matcher gets the value
:::

## not

Using `not` will negate the assertion. For example, this code asserts that an `input` value is not equal to `2`. If it's equal, the assertion will throw an error, and the test will fail.

```ts
import { expect, test } from 'vitest'

const input = Math.sqrt(16)

expect(input).not.to.equal(2) // chai API
expect(input).not.toBe(2) // jest API
```

## toBe

- **Type:** `(value: any) => Awaitable<void>`

`toBe` can be used to assert if primitives are equal or that objects share the same reference. It is equivalent of calling `expect(Object.is(3, 3)).toBe(true)`. If the objects are not the same, but you want to check if their structures are identical, you can use [`toEqual`](#toequal).

For example, the code below checks if the trader has 13 apples.

```ts
import { expect, test } from 'vitest'

const stock = {
  type: 'apples',
  count: 13,
}

test('stock has 13 apples', () => {
  expect(stock.type).toBe('apples')
  expect(stock.count).toBe(13)
})

test('stocks are the same', () => {
  const refStock = stock // same reference

  expect(stock).toBe(refStock)
})
```

Try not to use `toBe` with floating-point numbers. Since JavaScript rounds them, `0.1 + 0.2` is not strictly `0.3`. To reliably assert floating-point numbers, use [`toBeCloseTo`](#tobecloseto) assertion.

## toBeCloseTo

- **Type:** `(value: number, numDigits?: number) => Awaitable<void>`

Use `toBeCloseTo` to compare floating-point numbers. The optional `numDigits` argument limits the number of digits to check _after_ the decimal point. For example:

```ts
import { expect, test } from 'vitest'

test.fails('decimals are not equal in javascript', () => {
  expect(0.2 + 0.1).toBe(0.3) // 0.2 + 0.1 is 0.30000000000000004
})

test('decimals are rounded to 5 after the point', () => {
  // 0.2 + 0.1 is 0.30000 | "000000000004" removed
  expect(0.2 + 0.1).toBeCloseTo(0.3, 5)
  // nothing from 0.30000000000000004 is removed
  expect(0.2 + 0.1).not.toBeCloseTo(0.3, 50)
})
```

## toBeDefined

- **Type:** `() => Awaitable<void>`

`toBeDefined` asserts that the value is not equal to `undefined`. Useful use case would be to check if function _returned_ anything.

```ts
import { expect, test } from 'vitest'

function getApples() {
  return 3
}

test('function returned something', () => {
  expect(getApples()).toBeDefined()
})
```

## toBeUndefined

- **Type:** `() => Awaitable<void>`

Opposite of `toBeDefined`, `toBeUndefined` asserts that the value _is_ equal to `undefined`. Useful use case would be to check if function hasn't _returned_ anything.

```ts
import { expect, test } from 'vitest'

function getApplesFromStock(stock: string) {
  if (stock === 'Bill') {
    return 13
  }
}

test('mary doesn\'t have a stock', () => {
  expect(getApplesFromStock('Mary')).toBeUndefined()
})
```

## toBeTruthy

- **Type:** `() => Awaitable<void>`

`toBeTruthy` asserts that the value is true when converted to boolean. Useful if you don't care for the value, but just want to know it can be converted to `true`.

For example, having this code you don't care for the return value of `stocks.getInfo` - it maybe a complex object, a string, or anything else. The code will still work.

```ts
import { Stocks } from './stocks.js'

const stocks = new Stocks()
stocks.sync('Bill')
if (stocks.getInfo('Bill')) {
  stocks.sell('apples', 'Bill')
}
```

So if you want to test that `stocks.getInfo` will be truthy, you could write:

```ts
import { expect, test } from 'vitest'
import { Stocks } from './stocks.js'

const stocks = new Stocks()

test('if we know Bill stock, sell apples to him', () => {
  stocks.sync('Bill')
  expect(stocks.getInfo('Bill')).toBeTruthy()
})
```

Everything in JavaScript is truthy, except `false`, `null`, `undefined`, `NaN`, `0`, `-0`, `0n`, `""` and `document.all`.

## toBeFalsy

- **Type:** `() => Awaitable<void>`

`toBeFalsy` asserts that the value is false when converted to boolean. Useful if you don't care for the value, but just want to know if it can be converted to `false`.

For example, having this code you don't care for the return value of `stocks.stockFailed` - it may return any falsy value, but the code will still work.

```ts
import { Stocks } from './stocks.js'

const stocks = new Stocks()
stocks.sync('Bill')
if (!stocks.stockFailed('Bill')) {
  stocks.sell('apples', 'Bill')
}
```

So if you want to test that `stocks.stockFailed` will be falsy, you could write:

```ts
import { expect, test } from 'vitest'
import { Stocks } from './stocks.js'

const stocks = new Stocks()

test('if Bill stock hasn\'t failed, sell apples to him', () => {
  stocks.syncStocks('Bill')
  expect(stocks.stockFailed('Bill')).toBeFalsy()
})
```

Everything in JavaScript is truthy, except `false`, `null`, `undefined`, `NaN`, `0`, `-0`, `0n`, `""` and `document.all`.

## toBeNull

- **Type:** `() => Awaitable<void>`

`toBeNull` simply asserts if something is `null`. Alias for `.toBe(null)`.

```ts
import { expect, test } from 'vitest'

function apples() {
  return null
}

test('we don\'t have apples', () => {
  expect(apples()).toBeNull()
})
```

## toBeNaN

- **Type:** `() => Awaitable<void>`

`toBeNaN` simply asserts if something is `NaN`. Alias for `.toBe(NaN)`.

```ts
import { expect, test } from 'vitest'

let i = 0

function getApplesCount() {
  i++
  return i > 1 ? Number.NaN : i
}

test('getApplesCount has some unusual side effects...', () => {
  expect(getApplesCount()).not.toBeNaN()
  expect(getApplesCount()).toBeNaN()
})
```

## toBeOneOf

- **Type:** `(sample: Array<any>) => any`

`toBeOneOf` asserts if a value matches any of the values in the provided array.

```ts
import { expect, test } from 'vitest'

test('fruit is one of the allowed values', () => {
  expect(fruit).toBeOneOf(['apple', 'banana', 'orange'])
})
```

The asymmetric matcher is particularly useful when testing optional properties that could be either `null` or `undefined`:

```ts
test('optional properties can be null or undefined', () => {
  const user = {
    firstName: 'John',
    middleName: undefined,
    lastName: 'Doe'
  }

  expect(user).toEqual({
    firstName: expect.any(String),
    middleName: expect.toBeOneOf([expect.any(String), undefined]),
    lastName: expect.any(String),
  })
})
```

:::tip
You can use `expect.not` with this matcher to ensure a value does NOT match any of the provided options.
:::

## toBeTypeOf

- **Type:** `(c: 'bigint' | 'boolean' | 'function' | 'number' | 'object' | 'string' | 'symbol' | 'undefined') => Awaitable<void>`

`toBeTypeOf` asserts if an actual value is of type of received type.

```ts
import { expect, test } from 'vitest'

const actual = 'stock'

test('stock is type of string', () => {
  expect(actual).toBeTypeOf('string')
})
```

## toBeInstanceOf

- **Type:** `(c: any) => Awaitable<void>`

`toBeInstanceOf` asserts if an actual value is instance of received class.

```ts
import { expect, test } from 'vitest'
import { Stocks } from './stocks.js'

const stocks = new Stocks()

test('stocks are instance of Stocks', () => {
  expect(stocks).toBeInstanceOf(Stocks)
})
```

## toBeGreaterThan

- **Type:** `(n: number | bigint) => Awaitable<void>`

`toBeGreaterThan` asserts if actual value is greater than received one. Equal values will fail the test.

```ts
import { expect, test } from 'vitest'
import { getApples } from './stocks.js'

test('have more then 10 apples', () => {
  expect(getApples()).toBeGreaterThan(10)
})
```

## toBeGreaterThanOrEqual

- **Type:** `(n: number | bigint) => Awaitable<void>`

`toBeGreaterThanOrEqual` asserts if actual value is greater than received one or equal to it.

```ts
import { expect, test } from 'vitest'
import { getApples } from './stocks.js'

test('have 11 apples or more', () => {
  expect(getApples()).toBeGreaterThanOrEqual(11)
})
```

## toBeLessThan

- **Type:** `(n: number | bigint) => Awaitable<void>`

`toBeLessThan` asserts if actual value is less than received one. Equal values will fail the test.

```ts
import { expect, test } from 'vitest'
import { getApples } from './stocks.js'

test('have less then 20 apples', () => {
  expect(getApples()).toBeLessThan(20)
})
```

## toBeLessThanOrEqual

- **Type:** `(n: number | bigint) => Awaitable<void>`

`toBeLessThanOrEqual` asserts if actual value is less than received one or equal to it.

```ts
import { expect, test } from 'vitest'
import { getApples } from './stocks.js'

test('have 11 apples or less', () => {
  expect(getApples()).toBeLessThanOrEqual(11)
})
```

## toEqual

- **Type:** `(received: any) => Awaitable<void>`

`toEqual` asserts if actual value is equal to received one or has the same structure, if it is an object (compares them recursively). You can see the difference between `toEqual` and [`toBe`](#tobe) in this example:

```ts
import { expect, test } from 'vitest'

const stockBill = {
  type: 'apples',
  count: 13,
}

const stockMary = {
  type: 'apples',
  count: 13,
}

test('stocks have the same properties', () => {
  expect(stockBill).toEqual(stockMary)
})

test('stocks are not the same', () => {
  expect(stockBill).not.toBe(stockMary)
})
```

:::warning
For `Error` objects, non-enumerable properties such as `name`, `message`, `cause` and `AggregateError.errors` are also compared. For `Error.cause`, the comparison is done asymmetrically:

```ts
// success
expect(new Error('hi', { cause: 'x' })).toEqual(new Error('hi'))

// fail
expect(new Error('hi')).toEqual(new Error('hi', { cause: 'x' }))
```

To test if something was thrown, use [`toThrowError`](#tothrowerror) assertion.
:::

## toStrictEqual

- **Type:** `(received: any) => Awaitable<void>`

`toStrictEqual` asserts if the actual value is equal to the received one or has the same structure if it is an object (compares them recursively), and of the same type.

Differences from [`.toEqual`](#toequal):

-  Keys with `undefined` properties are checked. e.g. `{a: undefined, b: 2}` does not match `{b: 2}` when using `.toStrictEqual`.
-  Array sparseness is checked. e.g. `[, 1]` does not match `[undefined, 1]` when using `.toStrictEqual`.
-  Object types are checked to be equal. e.g. A class instance with fields `a` and` b` will not equal a literal object with fields `a` and `b`.

```ts
import { expect, test } from 'vitest'

class Stock {
  constructor(type) {
    this.type = type
  }
}

test('structurally the same, but semantically different', () => {
  expect(new Stock('apples')).toEqual({ type: 'apples' })
  expect(new Stock('apples')).not.toStrictEqual({ type: 'apples' })
})
```

## toContain

- **Type:** `(received: string) => Awaitable<void>`

`toContain` asserts if the actual value is in an array. `toContain` can also check whether a string is a substring of another string. If you are running tests in a browser-like environment, this assertion can also check if class is contained in a `classList`, or an element is inside another one.

```ts
import { expect, test } from 'vitest'
import { getAllFruits } from './stocks.js'

test('the fruit list contains orange', () => {
  expect(getAllFruits()).toContain('orange')

  const element = document.querySelector('#el')
  // element has a class
  expect(element.classList).toContain('flex')
  // element is inside another one
  expect(document.querySelector('#wrapper')).toContain(element)
})
```

## toContainEqual

- **Type:** `(received: any) => Awaitable<void>`

`toContainEqual` asserts if an item with a specific structure and values is contained in an array.
It works like [`toEqual`](#toequal) inside for each element.

```ts
import { expect, test } from 'vitest'
import { getFruitStock } from './stocks.js'

test('apple available', () => {
  expect(getFruitStock()).toContainEqual({ fruit: 'apple', count: 5 })
})
```

## toHaveLength

- **Type:** `(received: number) => Awaitable<void>`

`toHaveLength` asserts if an object has a `.length` property and it is set to a certain numeric value.

```ts
import { expect, test } from 'vitest'

test('toHaveLength', () => {
  expect('abc').toHaveLength(3)
  expect([1, 2, 3]).toHaveLength(3)

  expect('').not.toHaveLength(3) // doesn't have .length of 3
  expect({ length: 3 }).toHaveLength(3)
})
```

## toHaveProperty

- **Type:** `(key: any, received?: any) => Awaitable<void>`

`toHaveProperty` asserts if a property at provided reference `key` exists for an object.

You can provide an optional value argument also known as deep equality, like the `toEqual` matcher to compare the received property value.

```ts
import { expect, test } from 'vitest'

const invoice = {
  'isActive': true,
  'P.O': '12345',
  'customer': {
    first_name: 'John',
    last_name: 'Doe',
    location: 'China',
  },
  'total_amount': 5000,
  'items': [
    {
      type: 'apples',
      quantity: 10,
    },
    {
      type: 'oranges',
      quantity: 5,
    },
  ],
}

test('John Doe Invoice', () => {
  expect(invoice).toHaveProperty('isActive') // assert that the key exists
  expect(invoice).toHaveProperty('total_amount', 5000) // assert that the key exists and the value is equal

  expect(invoice).not.toHaveProperty('account') // assert that this key does not exist

  // Deep referencing using dot notation
  expect(invoice).toHaveProperty('customer.first_name')
  expect(invoice).toHaveProperty('customer.last_name', 'Doe')
  expect(invoice).not.toHaveProperty('customer.location', 'India')

  // Deep referencing using an array containing the key
  expect(invoice).toHaveProperty('items[0].type', 'apples')
  expect(invoice).toHaveProperty('items.0.type', 'apples') // dot notation also works

  // Deep referencing using an array containing the keyPath
  expect(invoice).toHaveProperty(['items', 0, 'type'], 'apples')
  expect(invoice).toHaveProperty(['items', '0', 'type'], 'apples') // string notation also works

  // Wrap your key in an array to avoid the key from being parsed as a deep reference
  expect(invoice).toHaveProperty(['P.O'], '12345')
})
```

## toMatch

- **Type:** `(received: string | regexp) => Awaitable<void>`

`toMatch` asserts if a string matches a regular expression or a string.

```ts
import { expect, test } from 'vitest'

test('top fruits', () => {
  expect('top fruits include apple, orange and grape').toMatch(/apple/)
  expect('applefruits').toMatch('fruit') // toMatch also accepts a string
})
```

## toMatchObject

- **Type:** `(received: object | array) => Awaitable<void>`

`toMatchObject` asserts if an object matches a subset of the properties of an object.

You can also pass an array of objects. This is useful if you want to check that two arrays match in their number of elements, as opposed to `arrayContaining`, which allows for extra elements in the received array.

```ts
import { expect, test } from 'vitest'

const johnInvoice = {
  isActive: true,
  customer: {
    first_name: 'John',
    last_name: 'Doe',
    location: 'China',
  },
  total_amount: 5000,
  items: [
    {
      type: 'apples',
      quantity: 10,
    },
    {
      type: 'oranges',
      quantity: 5,
    },
  ],
}

const johnDetails = {
  customer: {
    first_name: 'John',
    last_name: 'Doe',
    location: 'China',
  },
}

test('invoice has john personal details', () => {
  expect(johnInvoice).toMatchObject(johnDetails)
})

test('the number of elements must match exactly', () => {
  // Assert that an array of object matches
  expect([{ foo: 'bar' }, { baz: 1 }]).toMatchObject([
    { foo: 'bar' },
    { baz: 1 },
  ])
})
```

## toThrowError

- **Type:** `(received: any) => Awaitable<void>`

- **Alias:** `toThrow`

`toThrowError` asserts if a function throws an error when it is called.

You can provide an optional argument to test that a specific error is thrown:

- `RegExp`: error message matches the pattern
- `string`: error message includes the substring
- `Error`, `AsymmetricMatcher`: compare with a received object similar to `toEqual(received)`

:::tip
You must wrap the code in a function, otherwise the error will not be caught, and test will fail.

This does not apply for async calls as [rejects](#rejects) correctly unwraps the promise:
```ts
test('expect rejects toThrow', async ({ expect }) => {
  const promise = Promise.reject(new Error('Test'))
  await expect(promise).rejects.toThrowError()
})
```
:::

For example, if we want to test that `getFruitStock('pineapples')` throws, we could write:

```ts
import { expect, test } from 'vitest'

function getFruitStock(type: string) {
  if (type === 'pineapples') {
    throw new Error('Pineapples are not in stock')
  }

  // Do some other stuff
}

test('throws on pineapples', () => {
  // Test that the error message says "stock" somewhere: these are equivalent
  expect(() => getFruitStock('pineapples')).toThrowError(/stock/)
  expect(() => getFruitStock('pineapples')).toThrowError('stock')

  // Test the exact error message
  expect(() => getFruitStock('pineapples')).toThrowError(
    /^Pineapples are not in stock$/,
  )

  expect(() => getFruitStock('pineapples')).toThrowError(
    new Error('Pineapples are not in stock'),
  )
  expect(() => getFruitStock('pineapples')).toThrowError(expect.objectContaining({
    message: 'Pineapples are not in stock',
  }))
})
```

:::tip
To test async functions, use in combination with [rejects](#rejects).

```js
function getAsyncFruitStock() {
  return Promise.reject(new Error('empty'))
}

test('throws on pineapples', async () => {
  await expect(() => getAsyncFruitStock()).rejects.toThrowError('empty')
})
```
:::

## toMatchSnapshot

- **Type:** `<T>(shape?: Partial<T> | string, hint?: string) => void`

This ensures that a value matches the most recent snapshot.

You can provide an optional `hint` string argument that is appended to the test name. Although Vitest always appends a number at the end of a snapshot name, short descriptive hints might be more useful than numbers to differentiate multiple snapshots in a single it or test block. Vitest sorts snapshots by name in the corresponding `.snap` file.

:::tip
  When a snapshot mismatches and causes the test to fail, if the mismatch is expected, you can press `u` key to update the snapshot once. Or you can pass `-u` or `--update` CLI options to make Vitest always update the tests.
:::

```ts
import { expect, test } from 'vitest'

test('matches snapshot', () => {
  const data = { foo: new Set(['bar', 'snapshot']) }
  expect(data).toMatchSnapshot()
})
```

You can also provide a shape of an object, if you are testing just a shape of an object, and don't need it to be 100% compatible:

```ts
import { expect, test } from 'vitest'

test('matches snapshot', () => {
  const data = { foo: new Set(['bar', 'snapshot']) }
  expect(data).toMatchSnapshot({ foo: expect.any(Set) })
})
```

## toMatchInlineSnapshot

- **Type:** `<T>(shape?: Partial<T> | string, snapshot?: string, hint?: string) => void`

This ensures that a value matches the most recent snapshot.

Vitest adds and updates the inlineSnapshot string argument to the matcher in the test file (instead of an external `.snap` file).

```ts
import { expect, test } from 'vitest'

test('matches inline snapshot', () => {
  const data = { foo: new Set(['bar', 'snapshot']) }
  // Vitest will update following content when updating the snapshot
  expect(data).toMatchInlineSnapshot(`
    {
      "foo": Set {
        "bar",
        "snapshot",
      },
    }
  `)
})
```

You can also provide a shape of an object, if you are testing just a shape of an object, and don't need it to be 100% compatible:

```ts
import { expect, test } from 'vitest'

test('matches snapshot', () => {
  const data = { foo: new Set(['bar', 'snapshot']) }
  expect(data).toMatchInlineSnapshot(
    { foo: expect.any(Set) },
    `
    {
      "foo": Any<Set>,
    }
  `
  )
})
```

## toMatchFileSnapshot {#tomatchfilesnapshot}

- **Type:** `<T>(filepath: string, hint?: string) => Promise<void>`

Compare or update the snapshot with the content of a file explicitly specified (instead of the `.snap` file).

```ts
import { expect, it } from 'vitest'

it('render basic', async () => {
  const result = renderHTML(h('div', { class: 'foo' }))
  await expect(result).toMatchFileSnapshot('./test/basic.output.html')
})
```

Note that since file system operation is async, you need to use `await` with `toMatchFileSnapshot()`. If `await` is not used, Vitest treats it like `expect.soft`, meaning the code after the statement will continue to run even if the snapshot mismatches. After the test finishes, Vitest will check the snapshot and fail if there is a mismatch.

## toThrowErrorMatchingSnapshot

- **Type:** `(hint?: string) => void`

The same as [`toMatchSnapshot`](#tomatchsnapshot), but expects the same value as [`toThrowError`](#tothrowerror).

## toThrowErrorMatchingInlineSnapshot

- **Type:** `(snapshot?: string, hint?: string) => void`

The same as [`toMatchInlineSnapshot`](#tomatchinlinesnapshot), but expects the same value as [`toThrowError`](#tothrowerror).

## toHaveBeenCalled

- **Type:** `() => Awaitable<void>`

This assertion is useful for testing that a function has been called. Requires a spy function to be passed to `expect`.

```ts
import { expect, test, vi } from 'vitest'

const market = {
  buy(subject: string, amount: number) {
    // ...
  },
}

test('spy function', () => {
  const buySpy = vi.spyOn(market, 'buy')

  expect(buySpy).not.toHaveBeenCalled()

  market.buy('apples', 10)

  expect(buySpy).toHaveBeenCalled()
})
```

## toHaveBeenCalledTimes

- **Type**: `(amount: number) => Awaitable<void>`

This assertion checks if a function was called a certain amount of times. Requires a spy function to be passed to `expect`.

```ts
import { expect, test, vi } from 'vitest'

const market = {
  buy(subject: string, amount: number) {
    // ...
  },
}

test('spy function called two times', () => {
  const buySpy = vi.spyOn(market, 'buy')

  market.buy('apples', 10)
  market.buy('apples', 20)

  expect(buySpy).toHaveBeenCalledTimes(2)
})
```

## toHaveBeenCalledWith

- **Type**: `(...args: any[]) => Awaitable<void>`

This assertion checks if a function was called at least once with certain parameters. Requires a spy function to be passed to `expect`.

```ts
import { expect, test, vi } from 'vitest'

const market = {
  buy(subject: string, amount: number) {
    // ...
  },
}

test('spy function', () => {
  const buySpy = vi.spyOn(market, 'buy')

  market.buy('apples', 10)
  market.buy('apples', 20)

  expect(buySpy).toHaveBeenCalledWith('apples', 10)
  expect(buySpy).toHaveBeenCalledWith('apples', 20)
})
```

## toHaveBeenCalledBefore <Version>3.0.0</Version> {#tohavebeencalledbefore}

- **Type**: `(mock: MockInstance, failIfNoFirstInvocation?: boolean) => Awaitable<void>`

This assertion checks if a `Mock` was called before another `Mock`.

```ts
test('calls mock1 before mock2', () => {
  const mock1 = vi.fn()
  const mock2 = vi.fn()

  mock1()
  mock2()
  mock1()

  expect(mock1).toHaveBeenCalledBefore(mock2)
})
```

## toHaveBeenCalledAfter <Version>3.0.0</Version> {#tohavebeencalledafter}

- **Type**: `(mock: MockInstance, failIfNoFirstInvocation?: boolean) => Awaitable<void>`

This assertion checks if a `Mock` was called after another `Mock`.

```ts
test('calls mock1 after mock2', () => {
  const mock1 = vi.fn()
  const mock2 = vi.fn()

  mock2()
  mock1()
  mock2()

  expect(mock1).toHaveBeenCalledAfter(mock2)
})
```

## toHaveBeenCalledExactlyOnceWith <Version>3.0.0</Version> {#tohavebeencalledexactlyoncewith}

- **Type**: `(...args: any[]) => Awaitable<void>`

This assertion checks if a function was called exactly once and with certain parameters. Requires a spy function to be passed to `expect`.

```ts
import { expect, test, vi } from 'vitest'

const market = {
  buy(subject: string, amount: number) {
    // ...
  },
}

test('spy function', () => {
  const buySpy = vi.spyOn(market, 'buy')

  market.buy('apples', 10)

  expect(buySpy).toHaveBeenCalledExactlyOnceWith('apples', 10)
})
```

## toHaveBeenLastCalledWith

- **Type**: `(...args: any[]) => Awaitable<void>`

This assertion checks if a function was called with certain parameters at its last invocation. Requires a spy function to be passed to `expect`.

```ts
import { expect, test, vi } from 'vitest'

const market = {
  buy(subject: string, amount: number) {
    // ...
  },
}

test('spy function', () => {
  const buySpy = vi.spyOn(market, 'buy')

  market.buy('apples', 10)
  market.buy('apples', 20)

  expect(buySpy).not.toHaveBeenLastCalledWith('apples', 10)
  expect(buySpy).toHaveBeenLastCalledWith('apples', 20)
})
```

## toHaveBeenNthCalledWith

- **Type**: `(time: number, ...args: any[]) => Awaitable<void>`

This assertion checks if a function was called with certain parameters at the certain time. The count starts at 1. So, to check the second entry, you would write `.toHaveBeenNthCalledWith(2, ...)`.

Requires a spy function to be passed to `expect`.

```ts
import { expect, test, vi } from 'vitest'

const market = {
  buy(subject: string, amount: number) {
    // ...
  },
}

test('first call of spy function called with right params', () => {
  const buySpy = vi.spyOn(market, 'buy')

  market.buy('apples', 10)
  market.buy('apples', 20)

  expect(buySpy).toHaveBeenNthCalledWith(1, 'apples', 10)
})
```

## toHaveReturned

- **Type**: `() => Awaitable<void>`

This assertion checks if a function has successfully returned a value at least once (i.e., did not throw an error). Requires a spy function to be passed to `expect`.

```ts
import { expect, test, vi } from 'vitest'

function getApplesPrice(amount: number) {
  const PRICE = 10
  return amount * PRICE
}

test('spy function returned a value', () => {
  const getPriceSpy = vi.fn(getApplesPrice)

  const price = getPriceSpy(10)

  expect(price).toBe(100)
  expect(getPriceSpy).toHaveReturned()
})
```

## toHaveReturnedTimes

- **Type**: `(amount: number) => Awaitable<void>`

This assertion checks if a function has successfully returned a value an exact amount of times (i.e., did not throw an error). Requires a spy function to be passed to `expect`.

```ts
import { expect, test, vi } from 'vitest'

test('spy function returns a value two times', () => {
  const sell = vi.fn((product: string) => ({ product }))

  sell('apples')
  sell('bananas')

  expect(sell).toHaveReturnedTimes(2)
})
```

## toHaveReturnedWith

- **Type**: `(returnValue: any) => Awaitable<void>`

You can call this assertion to check if a function has successfully returned a value with certain parameters at least once. Requires a spy function to be passed to `expect`.

```ts
import { expect, test, vi } from 'vitest'

test('spy function returns a product', () => {
  const sell = vi.fn((product: string) => ({ product }))

  sell('apples')

  expect(sell).toHaveReturnedWith({ product: 'apples' })
})
```

## toHaveLastReturnedWith

- **Type**: `(returnValue: any) => Awaitable<void>`

You can call this assertion to check if a function has successfully returned a certain value when it was last invoked. Requires a spy function to be passed to `expect`.

```ts
import { expect, test, vi } from 'vitest'

test('spy function returns bananas on a last call', () => {
  const sell = vi.fn((product: string) => ({ product }))

  sell('apples')
  sell('bananas')

  expect(sell).toHaveLastReturnedWith({ product: 'bananas' })
})
```

## toHaveNthReturnedWith

- **Type**: `(time: number, returnValue: any) => Awaitable<void>`

You can call this assertion to check if a function has successfully returned a value with certain parameters on a certain call. Requires a spy function to be passed to `expect`.

```ts
import { expect, test, vi } from 'vitest'

test('spy function returns bananas on second call', () => {
  const sell = vi.fn((product: string) => ({ product }))

  sell('apples')
  sell('bananas')

  expect(sell).toHaveNthReturnedWith(2, { product: 'bananas' })
})
```

## toHaveResolved

- **Type**: `() => Awaitable<void>`

This assertion checks if a function has successfully resolved a value at least once (i.e., did not reject). Requires a spy function to be passed to `expect`.

If the function returned a promise, but it was not resolved yet, this will fail.

```ts
import { expect, test, vi } from 'vitest'
import db from './db/apples.js'

async function getApplesPrice(amount: number) {
  return amount * await db.get('price')
}

test('spy function resolved a value', async () => {
  const getPriceSpy = vi.fn(getApplesPrice)

  const price = await getPriceSpy(10)

  expect(price).toBe(100)
  expect(getPriceSpy).toHaveResolved()
})
```

## toHaveResolvedTimes

- **Type**: `(amount: number) => Awaitable<void>`

This assertion checks if a function has successfully resolved a value an exact amount of times (i.e., did not reject). Requires a spy function to be passed to `expect`.

This will only count resolved promises. If the function returned a promise, but it was not resolved yet, it will not be counted.

```ts
import { expect, test, vi } from 'vitest'

test('spy function resolved a value two times', async () => {
  const sell = vi.fn((product: string) => Promise.resolve({ product }))

  await sell('apples')
  await sell('bananas')

  expect(sell).toHaveResolvedTimes(2)
})
```

## toHaveResolvedWith

- **Type**: `(returnValue: any) => Awaitable<void>`

You can call this assertion to check if a function has successfully resolved a certain value at least once. Requires a spy function to be passed to `expect`.

If the function returned a promise, but it was not resolved yet, this will fail.

```ts
import { expect, test, vi } from 'vitest'

test('spy function resolved a product', async () => {
  const sell = vi.fn((product: string) => Promise.resolve({ product }))

  await sell('apples')

  expect(sell).toHaveResolvedWith({ product: 'apples' })
})
```

## toHaveLastResolvedWith

- **Type**: `(returnValue: any) => Awaitable<void>`

You can call this assertion to check if a function has successfully resolved a certain value when it was last invoked. Requires a spy function to be passed to `expect`.

If the function returned a promise, but it was not resolved yet, this will fail.

```ts
import { expect, test, vi } from 'vitest'

test('spy function resolves bananas on a last call', async () => {
  const sell = vi.fn((product: string) => Promise.resolve({ product }))

  await sell('apples')
  await sell('bananas')

  expect(sell).toHaveLastResolvedWith({ product: 'bananas' })
})
```

## toHaveNthResolvedWith

- **Type**: `(time: number, returnValue: any) => Awaitable<void>`

You can call this assertion to check if a function has successfully resolved a certain value on a specific invocation. Requires a spy function to be passed to `expect`.

If the function returned a promise, but it was not resolved yet, this will fail.

```ts
import { expect, test, vi } from 'vitest'

test('spy function returns bananas on second call', async () => {
  const sell = vi.fn((product: string) => Promise.resolve({ product }))

  await sell('apples')
  await sell('bananas')

  expect(sell).toHaveNthResolvedWith(2, { product: 'bananas' })
})
```

## toSatisfy

- **Type:** `(predicate: (value: any) => boolean) => Awaitable<void>`

This assertion checks if a value satisfies a certain predicate.

```ts
import { describe, expect, it } from 'vitest'

const isOdd = (value: number) => value % 2 !== 0

describe('toSatisfy()', () => {
  it('pass with 0', () => {
    expect(1).toSatisfy(isOdd)
  })

  it('pass with negation', () => {
    expect(2).not.toSatisfy(isOdd)
  })
})
```

## resolves

- **Type:** `Promisify<Assertions>`

`resolves` is intended to remove boilerplate when asserting asynchronous code. Use it to unwrap value from the pending promise and assert its value with usual assertions. If the promise rejects, the assertion will fail.

It returns the same `Assertions` object, but all matchers now return `Promise`, so you would need to `await` it. Also works with `chai` assertions.

For example, if you have a function, that makes an API call and returns some data, you may use this code to assert its return value:

```ts
import { expect, test } from 'vitest'

async function buyApples() {
  return fetch('/buy/apples').then(r => r.json())
}

test('buyApples returns new stock id', async () => {
  // toEqual returns a promise now, so you HAVE to await it
  await expect(buyApples()).resolves.toEqual({ id: 1 }) // jest API
  await expect(buyApples()).resolves.to.equal({ id: 1 }) // chai API
})
```

:::warning
If the assertion is not awaited, then you will have a false-positive test that will pass every time. To make sure that assertions are actually called, you may use [`expect.assertions(number)`](#expect-assertions).

Since Vitest 3, if a method is not awaited, Vitest will show a warning at the end of the test. In Vitest 4, the test will be marked as "failed" if the assertion is not awaited.
:::

## rejects

- **Type:** `Promisify<Assertions>`

`rejects` is intended to remove boilerplate when asserting asynchronous code. Use it to unwrap reason why the promise was rejected, and assert its value with usual assertions. If the promise successfully resolves, the assertion will fail.

It returns the same `Assertions` object, but all matchers now return `Promise`, so you would need to `await` it. Also works with `chai` assertions.

For example, if you have a function that fails when you call it, you may use this code to assert the reason:

```ts
import { expect, test } from 'vitest'

async function buyApples(id) {
  if (!id) {
    throw new Error('no id')
  }
}

test('buyApples throws an error when no id provided', async () => {
  // toThrow returns a promise now, so you HAVE to await it
  await expect(buyApples()).rejects.toThrow('no id')
})
```

:::warning
If the assertion is not awaited, then you will have a false-positive test that will pass every time. To make sure that assertions were actually called, you can use [`expect.assertions(number)`](#expect-assertions).

Since Vitest 3, if a method is not awaited, Vitest will show a warning at the end of the test. In Vitest 4, the test will be marked as "failed" if the assertion is not awaited.
:::

## expect.assertions

- **Type:** `(count: number) => void`

After the test has passed or failed verify that a certain number of assertions was called during a test. A useful case would be to check if an asynchronous code was called.

For example, if we have a function that asynchronously calls two matchers, we can assert that they were actually called.

```ts
import { expect, test } from 'vitest'

async function doAsync(...cbs) {
  await Promise.all(
    cbs.map((cb, index) => cb({ index })),
  )
}

test('all assertions are called', async () => {
  expect.assertions(2)
  function callback1(data) {
    expect(data).toBeTruthy()
  }
  function callback2(data) {
    expect(data).toBeTruthy()
  }

  await doAsync(callback1, callback2)
})
```
::: warning
When using `assertions` with async concurrent tests, `expect` from the local [Test Context](/guide/test-context) must be used to ensure the right test is detected.
:::

## expect.hasAssertions

- **Type:** `() => void`

After the test has passed or failed verify that at least one assertion was called during a test. A useful case would be to check if an asynchronous code was called.

For example, if you have a code that calls a callback, we can make an assertion inside a callback, but the test will always pass if we don't check if an assertion was called.

```ts
import { expect, test } from 'vitest'
import { db } from './db.js'

const cbs = []

function onSelect(cb) {
  cbs.push(cb)
}

// after selecting from db, we call all callbacks
function select(id) {
  return db.select({ id }).then((data) => {
    return Promise.all(
      cbs.map(cb => cb(data)),
    )
  })
}

test('callback was called', async () => {
  expect.hasAssertions()
  onSelect((data) => {
    // should be called on select
    expect(data).toBeTruthy()
  })
  // if not awaited, test will fail
  // if you don't have expect.hasAssertions(), test will pass
  await select(3)
})
```

## expect.unreachable

- **Type:** `(message?: string) => never`

This method is used to assert that a line should never be reached.

For example, if we want to test that `build()` throws due to receiving directories having no `src` folder, and also handle each error separately, we could do this:

```ts
import { expect, test } from 'vitest'

async function build(dir) {
  if (dir.includes('no-src')) {
    throw new Error(`${dir}/src does not exist`)
  }
}

const errorDirs = [
  'no-src-folder',
  // ...
]

test.each(errorDirs)('build fails with "%s"', async (dir) => {
  try {
    await build(dir)
    expect.unreachable('Should not pass build')
  }
  catch (err: any) {
    expect(err).toBeInstanceOf(Error)
    expect(err.stack).toContain('build')

    switch (dir) {
      case 'no-src-folder':
        expect(err.message).toBe(`${dir}/src does not exist`)
        break
      default:
        // to exhaust all error tests
        expect.unreachable('All error test must be handled')
        break
    }
  }
})
```

## expect.anything

- **Type:** `() => any`

This asymmetric matcher, when used with equality check, will always return `true`. Useful, if you just want to be sure that the property exist.

```ts
import { expect, test } from 'vitest'

test('object has "apples" key', () => {
  expect({ apples: 22 }).toEqual({ apples: expect.anything() })
})
```

## expect.any

- **Type:** `(constructor: unknown) => any`

This asymmetric matcher, when used with an equality check, will return `true` only if the value is an instance of a specified constructor. Useful, if you have a value that is generated each time, and you only want to know that it exists with a proper type.

```ts
import { expect, test } from 'vitest'
import { generateId } from './generators.js'

test('"id" is a number', () => {
  expect({ id: generateId() }).toEqual({ id: expect.any(Number) })
})
```

## expect.closeTo {#expect-closeto}

- **Type:** `(expected: any, precision?: number) => any`

`expect.closeTo` is useful when comparing floating point numbers in object properties or array item. If you need to compare a number, please use `.toBeCloseTo` instead.

The optional `precision` argument limits the number of digits to check **after** the decimal point. For the default value `2`, the test criterion is `Math.abs(expected - received) < 0.005 (that is, 10 ** -2 / 2)`.

For example, this test passes with a precision of 5 digits:

```js
test('compare float in object properties', () => {
  expect({
    title: '0.1 + 0.2',
    sum: 0.1 + 0.2,
  }).toEqual({
    title: '0.1 + 0.2',
    sum: expect.closeTo(0.3, 5),
  })
})
```

## expect.arrayContaining

- **Type:** `<T>(expected: T[]) => any`

When used with an equality check, this asymmetric matcher will return `true` if the value is an array and contains specified items.

```ts
import { expect, test } from 'vitest'

test('basket includes fuji', () => {
  const basket = {
    varieties: [
      'Empire',
      'Fuji',
      'Gala',
    ],
    count: 3
  }
  expect(basket).toEqual({
    count: 3,
    varieties: expect.arrayContaining(['Fuji'])
  })
})
```

:::tip
You can use `expect.not` with this matcher to negate the expected value.
:::

## expect.objectContaining

- **Type:** `(expected: any) => any`

When used with an equality check, this asymmetric matcher will return `true` if the value has a similar shape.

```ts
import { expect, test } from 'vitest'

test('basket has empire apples', () => {
  const basket = {
    varieties: [
      {
        name: 'Empire',
        count: 1,
      }
    ],
  }
  expect(basket).toEqual({
    varieties: [
      expect.objectContaining({ name: 'Empire' }),
    ]
  })
})
```

:::tip
You can use `expect.not` with this matcher to negate the expected value.
:::

## expect.stringContaining

- **Type:** `(expected: any) => any`

When used with an equality check, this asymmetric matcher will return `true` if the value is a string and contains a specified substring.

```ts
import { expect, test } from 'vitest'

test('variety has "Emp" in its name', () => {
  const variety = {
    name: 'Empire',
    count: 1,
  }
  expect(variety).toEqual({
    name: expect.stringContaining('Emp'),
    count: 1,
  })
})
```

:::tip
You can use `expect.not` with this matcher to negate the expected value.
:::

## expect.stringMatching

- **Type:** `(expected: any) => any`

When used with an equality check, this asymmetric matcher will return `true` if the value is a string and contains a specified substring or if the string matches a regular expression.

```ts
import { expect, test } from 'vitest'

test('variety ends with "re"', () => {
  const variety = {
    name: 'Empire',
    count: 1,
  }
  expect(variety).toEqual({
    name: expect.stringMatching(/re$/),
    count: 1,
  })
})
```

:::tip
You can use `expect.not` with this matcher to negate the expected value.
:::

## expect.addSnapshotSerializer

- **Type:** `(plugin: PrettyFormatPlugin) => void`

This method adds custom serializers that are called when creating a snapshot. This is an advanced feature - if you want to know more, please read a [guide on custom serializers](/guide/snapshot#custom-serializer).

If you are adding custom serializers, you should call this method inside [`setupFiles`](/config/#setupfiles). This will affect every snapshot.

:::tip
If you previously used Vue CLI with Jest, you might want to install [jest-serializer-vue](https://www.npmjs.com/package/jest-serializer-vue). Otherwise, your snapshots will be wrapped in a string, which cases `"` to be escaped.
:::

## expect.extend

- **Type:** `(matchers: MatchersObject) => void`

You can extend default matchers with your own. This function is used to extend the matchers object with custom matchers.

When you define matchers that way, you also create asymmetric matchers that can be used like `expect.stringContaining`.

```ts
import { expect, test } from 'vitest'

test('custom matchers', () => {
  expect.extend({
    toBeFoo: (received, expected) => {
      if (received !== 'foo') {
        return {
          message: () => `expected ${received} to be foo`,
          pass: false,
        }
      }
    },
  })

  expect('foo').toBeFoo()
  expect({ foo: 'foo' }).toEqual({ foo: expect.toBeFoo() })
})
```

::: tip
If you want your matchers to appear in every test, you should call this method inside [`setupFiles`](/config/#setupfiles).
:::

This function is compatible with Jest's `expect.extend`, so any library that uses it to create custom matchers will work with Vitest.

If you are using TypeScript, since Vitest 0.31.0 you can extend default `Assertion` interface in an ambient declaration file (e.g: `vitest.d.ts`) with the code below:

```ts
interface CustomMatchers<R = unknown> {
  toBeFoo: () => R
}

declare module 'vitest' {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
```

::: warning
Don't forget to include the ambient declaration file in your `tsconfig.json`.
:::

:::tip
If you want to know more, checkout [guide on extending matchers](/guide/extending-matchers).
:::

## expect.addEqualityTesters {#expect-addequalitytesters}

- **Type:** `(tester: Array<Tester>) => void`

You can use this method to define custom testers, which are methods used by matchers, to test if two objects are equal. It is compatible with Jest's `expect.addEqualityTesters`.

```ts
import { expect, test } from 'vitest'

class AnagramComparator {
  public word: string

  constructor(word: string) {
    this.word = word
  }

  equals(other: AnagramComparator): boolean {
    const cleanStr1 = this.word.replace(/ /g, '').toLowerCase()
    const cleanStr2 = other.word.replace(/ /g, '').toLowerCase()

    const sortedStr1 = cleanStr1.split('').sort().join('')
    const sortedStr2 = cleanStr2.split('').sort().join('')

    return sortedStr1 === sortedStr2
  }
}

function isAnagramComparator(a: unknown): a is AnagramComparator {
  return a instanceof AnagramComparator
}

function areAnagramsEqual(a: unknown, b: unknown): boolean | undefined {
  const isAAnagramComparator = isAnagramComparator(a)
  const isBAnagramComparator = isAnagramComparator(b)

  if (isAAnagramComparator && isBAnagramComparator) {
    return a.equals(b)
  }
  else if (isAAnagramComparator === isBAnagramComparator) {
    return undefined
  }
  else {
    return false
  }
}

expect.addEqualityTesters([areAnagramsEqual])

test('custom equality tester', () => {
  expect(new AnagramComparator('listen')).toEqual(new AnagramComparator('silent'))
})
```
````

## File: docs/api/index.md
````markdown
---
outline: deep
---

# Test API Reference

The following types are used in the type signatures below

```ts
type Awaitable<T> = T | PromiseLike<T>
type TestFunction = () => Awaitable<void>

interface TestOptions {
  /**
   * Will fail the test if it takes too long to execute
   */
  timeout?: number
  /**
   * Will retry the test specific number of times if it fails
   *
   * @default 0
   */
  retry?: number
  /**
   * Will repeat the same test several times even if it fails each time
   * If you have "retry" option and it fails, it will use every retry in each cycle
   * Useful for debugging random failings
   *
   * @default 0
   */
  repeats?: number
}
```

When a test function returns a promise, the runner will wait until it is resolved to collect async expectations. If the promise is rejected, the test will fail.

::: tip
In Jest, `TestFunction` can also be of type `(done: DoneCallback) => void`. If this form is used, the test will not be concluded until `done` is called. You can achieve the same using an `async` function, see the [Migration guide Done Callback section](/guide/migration#done-callback).
:::

You can define options by chaining properties on a function:

```ts
import { test } from 'vitest'

test.skip('skipped test', () => {
  // some logic that fails right now
})

test.concurrent.skip('skipped concurrent test', () => {
  // some logic that fails right now
})
```

But you can also provide an object as a second argument instead:

```ts
import { test } from 'vitest'

test('skipped test', { skip: true }, () => {
  // some logic that fails right now
})

test('skipped concurrent test', { skip: true, concurrent: true }, () => {
  // some logic that fails right now
})
```

They both work in exactly the same way. To use either one is purely a stylistic choice.

Note that if you are providing timeout as the last argument, you cannot use options anymore:

```ts
import { test } from 'vitest'

// ✅ this works
test.skip('heavy test', () => {
  // ...
}, 10_000)

// ❌ this doesn't work
test('heavy test', { skip: true }, () => {
  // ...
}, 10_000)
```

However, you can provide a timeout inside the object:

```ts
import { test } from 'vitest'

// ✅ this works
test('heavy test', { skip: true, timeout: 10_000 }, () => {
  // ...
})
```

## test

- **Alias:** `it`

`test` defines a set of related expectations. It receives the test name and a function that holds the expectations to test.

Optionally, you can provide a timeout (in milliseconds) for specifying how long to wait before terminating. The default is 5 seconds, and can be configured globally with [testTimeout](/config/#testtimeout)

```ts
import { expect, test } from 'vitest'

test('should work as expected', () => {
  expect(Math.sqrt(4)).toBe(2)
})
```

### test.extend {#test-extended}

- **Alias:** `it.extend`

Use `test.extend` to extend the test context with custom fixtures. This will return a new `test` and it's also extendable, so you can compose more fixtures or override existing ones by extending it as you need. See [Extend Test Context](/guide/test-context.html#test-extend) for more information.

```ts
import { expect, test } from 'vitest'

const todos = []
const archive = []

const myTest = test.extend({
  todos: async ({ task }, use) => {
    todos.push(1, 2, 3)
    await use(todos)
    todos.length = 0
  },
  archive
})

myTest('add item', ({ todos }) => {
  expect(todos.length).toBe(3)

  todos.push(4)
  expect(todos.length).toBe(4)
})
```

### test.skip

- **Alias:** `it.skip`

If you want to skip running certain tests, but you don't want to delete the code due to any reason, you can use `test.skip` to avoid running them.

```ts
import { assert, test } from 'vitest'

test.skip('skipped test', () => {
  // Test skipped, no error
  assert.equal(Math.sqrt(4), 3)
})
```

You can also skip test by calling `skip` on its [context](/guide/test-context) dynamically:

```ts
import { assert, test } from 'vitest'

test('skipped test', (context) => {
  context.skip()
  // Test skipped, no error
  assert.equal(Math.sqrt(4), 3)
})
```

Since Vitest 3.1, if the condition is unknown, you can provide it to the `skip` method as the first arguments:

```ts
import { assert, test } from 'vitest'

test('skipped test', (context) => {
  context.skip(Math.random() < 0.5, 'optional message')
  // Test skipped, no error
  assert.equal(Math.sqrt(4), 3)
})
```

### test.skipIf

- **Alias:** `it.skipIf`

In some cases you might run tests multiple times with different environments, and some of the tests might be environment-specific. Instead of wrapping the test code with `if`, you can use `test.skipIf` to skip the test whenever the condition is truthy.

```ts
import { assert, test } from 'vitest'

const isDev = process.env.NODE_ENV === 'development'

test.skipIf(isDev)('prod only test', () => {
  // this test only runs in production
})
```

::: warning
You cannot use this syntax when using Vitest as [type checker](/guide/testing-types).
:::

### test.runIf

- **Alias:** `it.runIf`

Opposite of [test.skipIf](#test-skipif).

```ts
import { assert, test } from 'vitest'

const isDev = process.env.NODE_ENV === 'development'

test.runIf(isDev)('dev only test', () => {
  // this test only runs in development
})
```

::: warning
You cannot use this syntax when using Vitest as [type checker](/guide/testing-types).
:::

### test.only

- **Alias:** `it.only`

Use `test.only` to only run certain tests in a given suite. This is useful when debugging.

Optionally, you can provide a timeout (in milliseconds) for specifying how long to wait before terminating. The default is 5 seconds, and can be configured globally with [testTimeout](/config/#testtimeout).

```ts
import { assert, test } from 'vitest'

test.only('test', () => {
  // Only this test (and others marked with only) are run
  assert.equal(Math.sqrt(4), 2)
})
```

Sometimes it is very useful to run `only` tests in a certain file, ignoring all other tests from the whole test suite, which pollute the output.

In order to do that run `vitest` with specific file containing the tests in question.
```
# vitest interesting.test.ts
```

### test.concurrent

- **Alias:** `it.concurrent`

`test.concurrent` marks consecutive tests to be run in parallel. It receives the test name, an async function with the tests to collect, and an optional timeout (in milliseconds).

```ts
import { describe, test } from 'vitest'

// The two tests marked with concurrent will be run in parallel
describe('suite', () => {
  test('serial test', async () => { /* ... */ })
  test.concurrent('concurrent test 1', async () => { /* ... */ })
  test.concurrent('concurrent test 2', async () => { /* ... */ })
})
```

`test.skip`, `test.only`, and `test.todo` works with concurrent tests. All the following combinations are valid:

```ts
test.concurrent(/* ... */)
test.skip.concurrent(/* ... */) // or test.concurrent.skip(/* ... */)
test.only.concurrent(/* ... */) // or test.concurrent.only(/* ... */)
test.todo.concurrent(/* ... */) // or test.concurrent.todo(/* ... */)
```

When running concurrent tests, Snapshots and Assertions must use `expect` from the local [Test Context](/guide/test-context.md) to ensure the right test is detected.

```ts
test.concurrent('test 1', async ({ expect }) => {
  expect(foo).toMatchSnapshot()
})
test.concurrent('test 2', async ({ expect }) => {
  expect(foo).toMatchSnapshot()
})
```

::: warning
You cannot use this syntax when using Vitest as [type checker](/guide/testing-types).
:::

### test.sequential

- **Alias:** `it.sequential`

`test.sequential` marks a test as sequential. This is useful if you want to run tests in sequence within `describe.concurrent` or with the `--sequence.concurrent` command option.

```ts
import { describe, test } from 'vitest'

// with config option { sequence: { concurrent: true } }
test('concurrent test 1', async () => { /* ... */ })
test('concurrent test 2', async () => { /* ... */ })

test.sequential('sequential test 1', async () => { /* ... */ })
test.sequential('sequential test 2', async () => { /* ... */ })

// within concurrent suite
describe.concurrent('suite', () => {
  test('concurrent test 1', async () => { /* ... */ })
  test('concurrent test 2', async () => { /* ... */ })

  test.sequential('sequential test 1', async () => { /* ... */ })
  test.sequential('sequential test 2', async () => { /* ... */ })
})
```

### test.todo

- **Alias:** `it.todo`

Use `test.todo` to stub tests to be implemented later. An entry will be shown in the report for the tests so you know how many tests you still need to implement.

```ts
// An entry will be shown in the report for this test
test.todo('unimplemented test')
```

### test.fails

- **Alias:** `it.fails`

Use `test.fails` to indicate that an assertion will fail explicitly.

```ts
import { expect, test } from 'vitest'

function myAsyncFunc() {
  return new Promise(resolve => resolve(1))
}
test.fails('fail test', async () => {
  await expect(myAsyncFunc()).rejects.toBe(1)
})
```

::: warning
You cannot use this syntax when using Vitest as [type checker](/guide/testing-types).
:::

### test.each

- **Alias:** `it.each`

::: tip
While `test.each` is provided for Jest compatibility,
Vitest also has [`test.for`](#test-for) with an additional feature to integrate [`TestContext`](/guide/test-context).
:::

Use `test.each` when you need to run the same test with different variables.
You can inject parameters with [printf formatting](https://nodejs.org/api/util.html#util_util_format_format_args) in the test name in the order of the test function parameters.

- `%s`: string
- `%d`: number
- `%i`: integer
- `%f`: floating point value
- `%j`: json
- `%o`: object
- `%#`: 0-based index of the test case
- `%$`: 1-based index of the test case
- `%%`: single percent sign ('%')

```ts
import { expect, test } from 'vitest'

test.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('add(%i, %i) -> %i', (a, b, expected) => {
  expect(a + b).toBe(expected)
})

// this will return
// ✓ add(1, 1) -> 2
// ✓ add(1, 2) -> 3
// ✓ add(2, 1) -> 3
```

You can also access object properties and array elements with `$` prefix:

```ts
test.each([
  { a: 1, b: 1, expected: 2 },
  { a: 1, b: 2, expected: 3 },
  { a: 2, b: 1, expected: 3 },
])('add($a, $b) -> $expected', ({ a, b, expected }) => {
  expect(a + b).toBe(expected)
})

// this will return
// ✓ add(1, 1) -> 2
// ✓ add(1, 2) -> 3
// ✓ add(2, 1) -> 3

test.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('add($0, $1) -> $2', (a, b, expected) => {
  expect(a + b).toBe(expected)
})

// this will return
// ✓ add(1, 1) -> 2
// ✓ add(1, 2) -> 3
// ✓ add(2, 1) -> 3
```

You can also access Object attributes with `.`, if you are using objects as arguments:

  ```ts
  test.each`
  a               | b      | expected
  ${{ val: 1 }}   | ${'b'} | ${'1b'}
  ${{ val: 2 }}   | ${'b'} | ${'2b'}
  ${{ val: 3 }}   | ${'b'} | ${'3b'}
  `('add($a.val, $b) -> $expected', ({ a, b, expected }) => {
    expect(a.val + b).toBe(expected)
  })

  // this will return
  // ✓ add(1, b) -> 1b
  // ✓ add(2, b) -> 2b
  // ✓ add(3, b) -> 3b
  ```

Starting from Vitest 0.25.3, you can also use template string table.

* First row should be column names, separated by `|`;
* One or more subsequent rows of data supplied as template literal expressions using `${value}` syntax.

```ts
import { expect, test } from 'vitest'

test.each`
  a               | b      | expected
  ${1}            | ${1}   | ${2}
  ${'a'}          | ${'b'} | ${'ab'}
  ${[]}           | ${'b'} | ${'b'}
  ${{}}           | ${'b'} | ${'[object Object]b'}
  ${{ asd: 1 }}   | ${'b'} | ${'[object Object]b'}
`('returns $expected when $a is added $b', ({ a, b, expected }) => {
  expect(a + b).toBe(expected)
})
```

::: tip
Vitest processes `$values` with Chai `format` method. If the value is too truncated, you can increase [chaiConfig.truncateThreshold](/config/#chaiconfig-truncatethreshold) in your config file.
:::

::: warning
You cannot use this syntax when using Vitest as [type checker](/guide/testing-types).
:::

### test.for

- **Alias:** `it.for`

Alternative to `test.each` to provide [`TestContext`](/guide/test-context).

The difference from `test.each` lies in how arrays are provided in the arguments.
Non-array arguments to `test.for` (including template string usage) work exactly the same as for `test.each`.

```ts
// `each` spreads arrays
test.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('add(%i, %i) -> %i', (a, b, expected) => { // [!code --]
  expect(a + b).toBe(expected)
})

// `for` doesn't spread arrays (notice the square brackets around the arguments)
test.for([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('add(%i, %i) -> %i', ([a, b, expected]) => { // [!code ++]
  expect(a + b).toBe(expected)
})
```

The 2nd argument is [`TestContext`](/guide/test-context) and can be used for concurrent snapshots, for example:

```ts
test.concurrent.for([
  [1, 1],
  [1, 2],
  [2, 1],
])('add(%i, %i)', ([a, b], { expect }) => {
  expect(a + b).matchSnapshot()
})
```

## bench

- **Type:** `(name: string | Function, fn: BenchFunction, options?: BenchOptions) => void`

`bench` defines a benchmark. In Vitest terms, benchmark is a function that defines a series of operations. Vitest runs this function multiple times to display different performance results.

Vitest uses the [`tinybench`](https://github.com/tinylibs/tinybench) library under the hood, inheriting all its options that can be used as a third argument.

```ts
import { bench } from 'vitest'

bench('normal sorting', () => {
  const x = [1, 5, 4, 2, 3]
  x.sort((a, b) => {
    return a - b
  })
}, { time: 1000 })
```

```ts
export interface Options {
  /**
   * time needed for running a benchmark task (milliseconds)
   * @default 500
   */
  time?: number

  /**
   * number of times that a task should run if even the time option is finished
   * @default 10
   */
  iterations?: number

  /**
   * function to get the current timestamp in milliseconds
   */
  now?: () => number

  /**
   * An AbortSignal for aborting the benchmark
   */
  signal?: AbortSignal

  /**
   * Throw if a task fails (events will not work if true)
   */
  throws?: boolean

  /**
   * warmup time (milliseconds)
   * @default 100ms
   */
  warmupTime?: number

  /**
   * warmup iterations
   * @default 5
   */
  warmupIterations?: number

  /**
   * setup function to run before each benchmark task (cycle)
   */
  setup?: Hook

  /**
   * teardown function to run after each benchmark task (cycle)
   */
  teardown?: Hook
}
```
After the test case is run, the output structure information is as follows:

```
  name                      hz     min     max    mean     p75     p99    p995    p999     rme  samples
· normal sorting  6,526,368.12  0.0001  0.3638  0.0002  0.0002  0.0002  0.0002  0.0004  ±1.41%   652638
```
```ts
export interface TaskResult {
  /*
   * the last error that was thrown while running the task
   */
  error?: unknown

  /**
   * The amount of time in milliseconds to run the benchmark task (cycle).
   */
  totalTime: number

  /**
   * the minimum value in the samples
   */
  min: number
  /**
   * the maximum value in the samples
   */
  max: number

  /**
   * the number of operations per second
   */
  hz: number

  /**
   * how long each operation takes (ms)
   */
  period: number

  /**
   * task samples of each task iteration time (ms)
   */
  samples: number[]

  /**
   * samples mean/average (estimate of the population mean)
   */
  mean: number

  /**
   * samples variance (estimate of the population variance)
   */
  variance: number

  /**
   * samples standard deviation (estimate of the population standard deviation)
   */
  sd: number

  /**
   * standard error of the mean (a.k.a. the standard deviation of the sampling distribution of the sample mean)
   */
  sem: number

  /**
   * degrees of freedom
   */
  df: number

  /**
   * critical value of the samples
   */
  critical: number

  /**
   * margin of error
   */
  moe: number

  /**
   * relative margin of error
   */
  rme: number

  /**
   * median absolute deviation
   */
  mad: number

  /**
   * p50/median percentile
   */
  p50: number

  /**
   * p75 percentile
   */
  p75: number

  /**
   * p99 percentile
   */
  p99: number

  /**
   * p995 percentile
   */
  p995: number

  /**
   * p999 percentile
   */
  p999: number
}
```

### bench.skip

- **Type:** `(name: string | Function, fn: BenchFunction, options?: BenchOptions) => void`

You can use `bench.skip` syntax to skip running certain benchmarks.

```ts
import { bench } from 'vitest'

bench.skip('normal sorting', () => {
  const x = [1, 5, 4, 2, 3]
  x.sort((a, b) => {
    return a - b
  })
})
```

### bench.only

- **Type:** `(name: string | Function, fn: BenchFunction, options?: BenchOptions) => void`

Use `bench.only` to only run certain benchmarks in a given suite. This is useful when debugging.

```ts
import { bench } from 'vitest'

bench.only('normal sorting', () => {
  const x = [1, 5, 4, 2, 3]
  x.sort((a, b) => {
    return a - b
  })
})
```

### bench.todo

- **Type:** `(name: string | Function) => void`

Use `bench.todo` to stub benchmarks to be implemented later.

```ts
import { bench } from 'vitest'

bench.todo('unimplemented test')
```

## describe

When you use `test` or `bench` in the top level of file, they are collected as part of the implicit suite for it. Using `describe` you can define a new suite in the current context, as a set of related tests or benchmarks and other nested suites. A suite lets you organize your tests and benchmarks so reports are more clear.

```ts
// basic.spec.ts
// organizing tests

import { describe, expect, test } from 'vitest'

const person = {
  isActive: true,
  age: 32,
}

describe('person', () => {
  test('person is defined', () => {
    expect(person).toBeDefined()
  })

  test('is active', () => {
    expect(person.isActive).toBeTruthy()
  })

  test('age limit', () => {
    expect(person.age).toBeLessThanOrEqual(32)
  })
})
```

```ts
// basic.bench.ts
// organizing benchmarks

import { bench, describe } from 'vitest'

describe('sort', () => {
  bench('normal', () => {
    const x = [1, 5, 4, 2, 3]
    x.sort((a, b) => {
      return a - b
    })
  })

  bench('reverse', () => {
    const x = [1, 5, 4, 2, 3]
    x.reverse().sort((a, b) => {
      return a - b
    })
  })
})
```

You can also nest describe blocks if you have a hierarchy of tests or benchmarks:

```ts
import { describe, expect, test } from 'vitest'

function numberToCurrency(value: number | string) {
  if (typeof value !== 'number') {
    throw new TypeError('Value must be a number')
  }

  return value.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

describe('numberToCurrency', () => {
  describe('given an invalid number', () => {
    test('composed of non-numbers to throw error', () => {
      expect(() => numberToCurrency('abc')).toThrowError()
    })
  })

  describe('given a valid number', () => {
    test('returns the correct currency format', () => {
      expect(numberToCurrency(10000)).toBe('10,000.00')
    })
  })
})
```

### describe.skip

- **Alias:** `suite.skip`

Use `describe.skip` in a suite to avoid running a particular describe block.

```ts
import { assert, describe, test } from 'vitest'

describe.skip('skipped suite', () => {
  test('sqrt', () => {
    // Suite skipped, no error
    assert.equal(Math.sqrt(4), 3)
  })
})
```

### describe.skipIf

- **Alias:** `suite.skipIf`

In some cases, you might run suites multiple times with different environments, and some of the suites might be environment-specific. Instead of wrapping the suite with `if`, you can use `describe.skipIf` to skip the suite whenever the condition is truthy.

```ts
import { describe, test } from 'vitest'

const isDev = process.env.NODE_ENV === 'development'

describe.skipIf(isDev)('prod only test suite', () => {
  // this test suite only runs in production
})
```

::: warning
You cannot use this syntax when using Vitest as [type checker](/guide/testing-types).
:::

### describe.runIf

- **Alias:** `suite.runIf`

Opposite of [describe.skipIf](#describe-skipif).

```ts
import { assert, describe, test } from 'vitest'

const isDev = process.env.NODE_ENV === 'development'

describe.runIf(isDev)('dev only test suite', () => {
  // this test suite only runs in development
})
```

::: warning
You cannot use this syntax when using Vitest as [type checker](/guide/testing-types).
:::

### describe.only

- **Type:** `(name: string | Function, fn: TestFunction, options?: number | TestOptions) => void`

Use `describe.only` to only run certain suites

```ts
import { assert, describe, test } from 'vitest'

// Only this suite (and others marked with only) are run
describe.only('suite', () => {
  test('sqrt', () => {
    assert.equal(Math.sqrt(4), 3)
  })
})

describe('other suite', () => {
  // ... will be skipped
})
```

Sometimes it is very useful to run `only` tests in a certain file, ignoring all other tests from the whole test suite, which pollute the output.

In order to do that run `vitest` with specific file containing the tests in question.
```
# vitest interesting.test.ts
```

### describe.concurrent

- **Alias:** `suite.concurrent`

`describe.concurrent` runs all inner suites and tests in parallel

```ts
import { describe, test } from 'vitest'

// All suites and tests within this suite will be run in parallel
describe.concurrent('suite', () => {
  test('concurrent test 1', async () => { /* ... */ })
  describe('concurrent suite 2', async () => {
    test('concurrent test inner 1', async () => { /* ... */ })
    test('concurrent test inner 2', async () => { /* ... */ })
  })
  test.concurrent('concurrent test 3', async () => { /* ... */ })
})
```

`.skip`, `.only`, and `.todo` works with concurrent suites. All the following combinations are valid:

```ts
describe.concurrent(/* ... */)
describe.skip.concurrent(/* ... */) // or describe.concurrent.skip(/* ... */)
describe.only.concurrent(/* ... */) // or describe.concurrent.only(/* ... */)
describe.todo.concurrent(/* ... */) // or describe.concurrent.todo(/* ... */)
```

When running concurrent tests, Snapshots and Assertions must use `expect` from the local [Test Context](/guide/test-context) to ensure the right test is detected.

```ts
describe.concurrent('suite', () => {
  test('concurrent test 1', async ({ expect }) => {
    expect(foo).toMatchSnapshot()
  })
  test('concurrent test 2', async ({ expect }) => {
    expect(foo).toMatchSnapshot()
  })
})
```

::: warning
You cannot use this syntax when using Vitest as [type checker](/guide/testing-types).
:::

### describe.sequential

- **Alias:** `suite.sequential`

`describe.sequential` in a suite marks every test as sequential. This is useful if you want to run tests in sequence within `describe.concurrent` or with the `--sequence.concurrent` command option.

```ts
import { describe, test } from 'vitest'

describe.concurrent('suite', () => {
  test('concurrent test 1', async () => { /* ... */ })
  test('concurrent test 2', async () => { /* ... */ })

  describe.sequential('', () => {
    test('sequential test 1', async () => { /* ... */ })
    test('sequential test 2', async () => { /* ... */ })
  })
})
```

### describe.shuffle

- **Alias:** `suite.shuffle`

Vitest provides a way to run all tests in random order via CLI flag [`--sequence.shuffle`](/guide/cli) or config option [`sequence.shuffle`](/config/#sequence-shuffle), but if you want to have only part of your test suite to run tests in random order, you can mark it with this flag.

```ts
import { describe, test } from 'vitest'

// or describe('suite', { shuffle: true }, ...)
describe.shuffle('suite', () => {
  test('random test 1', async () => { /* ... */ })
  test('random test 2', async () => { /* ... */ })
  test('random test 3', async () => { /* ... */ })

  // `shuffle` is inherited
  describe('still random', () => {
    test('random 4.1', async () => { /* ... */ })
    test('random 4.2', async () => { /* ... */ })
  })

  // disable shuffle inside
  describe('not random', { shuffle: false }, () => {
    test('in order 5.1', async () => { /* ... */ })
    test('in order 5.2', async () => { /* ... */ })
  })
})
// order depends on sequence.seed option in config (Date.now() by default)
```

`.skip`, `.only`, and `.todo` works with random suites.

::: warning
You cannot use this syntax when using Vitest as [type checker](/guide/testing-types).
:::

### describe.todo

- **Alias:** `suite.todo`

Use `describe.todo` to stub suites to be implemented later. An entry will be shown in the report for the tests so you know how many tests you still need to implement.

```ts
// An entry will be shown in the report for this suite
describe.todo('unimplemented suite')
```

### describe.each

- **Alias:** `suite.each`

::: tip
While `describe.each` is provided for Jest compatibility,
Vitest also has [`describe.for`](#describe-for) which simplifies argument types and aligns with [`test.for`](#test-for).
:::

Use `describe.each` if you have more than one test that depends on the same data.

```ts
import { describe, expect, test } from 'vitest'

describe.each([
  { a: 1, b: 1, expected: 2 },
  { a: 1, b: 2, expected: 3 },
  { a: 2, b: 1, expected: 3 },
])('describe object add($a, $b)', ({ a, b, expected }) => {
  test(`returns ${expected}`, () => {
    expect(a + b).toBe(expected)
  })

  test(`returned value not be greater than ${expected}`, () => {
    expect(a + b).not.toBeGreaterThan(expected)
  })

  test(`returned value not be less than ${expected}`, () => {
    expect(a + b).not.toBeLessThan(expected)
  })
})
```

Starting from Vitest 0.25.3, you can also use template string table.

* First row should be column names, separated by `|`;
* One or more subsequent rows of data supplied as template literal expressions using `${value}` syntax.

```ts
import { describe, expect, test } from 'vitest'

describe.each`
  a               | b      | expected
  ${1}            | ${1}   | ${2}
  ${'a'}          | ${'b'} | ${'ab'}
  ${[]}           | ${'b'} | ${'b'}
  ${{}}           | ${'b'} | ${'[object Object]b'}
  ${{ asd: 1 }}   | ${'b'} | ${'[object Object]b'}
`('describe template string add($a, $b)', ({ a, b, expected }) => {
  test(`returns ${expected}`, () => {
    expect(a + b).toBe(expected)
  })
})
```

::: warning
You cannot use this syntax when using Vitest as [type checker](/guide/testing-types).
:::

### describe.for

- **Alias:** `suite.for`

The difference from `describe.each` is how array case is provided in the arguments.
Other non array case (including template string usage) works exactly same.

```ts
// `each` spreads array case
describe.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('add(%i, %i) -> %i', (a, b, expected) => { // [!code --]
  test('test', () => {
    expect(a + b).toBe(expected)
  })
})

// `for` doesn't spread array case
describe.for([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('add(%i, %i) -> %i', ([a, b, expected]) => { // [!code ++]
  test('test', () => {
    expect(a + b).toBe(expected)
  })
})
```

## Setup and Teardown

These functions allow you to hook into the life cycle of tests to avoid repeating setup and teardown code. They apply to the current context: the file if they are used at the top-level or the current suite if they are inside a `describe` block. These hooks are not called, when you are running Vitest as a type checker.

### beforeEach

- **Type:** `beforeEach(fn: () => Awaitable<void>, timeout?: number)`

Register a callback to be called before each of the tests in the current context runs.
If the function returns a promise, Vitest waits until the promise resolve before running the test.

Optionally, you can pass a timeout (in milliseconds) defining how long to wait before terminating. The default is 5 seconds.

```ts
import { beforeEach } from 'vitest'

beforeEach(async () => {
  // Clear mocks and add some testing data before each test run
  await stopMocking()
  await addUser({ name: 'John' })
})
```

Here, the `beforeEach` ensures that user is added for each test.

`beforeEach` also accepts an optional cleanup function (equivalent to `afterEach`).

```ts
import { beforeEach } from 'vitest'

beforeEach(async () => {
  // called once before each test run
  await prepareSomething()

  // clean up function, called once after each test run
  return async () => {
    await resetSomething()
  }
})
```

### afterEach

- **Type:** `afterEach(fn: () => Awaitable<void>, timeout?: number)`

Register a callback to be called after each one of the tests in the current context completes.
If the function returns a promise, Vitest waits until the promise resolve before continuing.

Optionally, you can provide a timeout (in milliseconds) for specifying how long to wait before terminating. The default is 5 seconds.

```ts
import { afterEach } from 'vitest'

afterEach(async () => {
  await clearTestingData() // clear testing data after each test run
})
```

Here, the `afterEach` ensures that testing data is cleared after each test runs.

::: tip
Vitest 1.3.0 added [`onTestFinished`](#ontestfinished) hook. You can call it during the test execution to cleanup any state after the test has finished running.
:::

### beforeAll

- **Type:** `beforeAll(fn: () => Awaitable<void>, timeout?: number)`

Register a callback to be called once before starting to run all tests in the current context.
If the function returns a promise, Vitest waits until the promise resolve before running tests.

Optionally, you can provide a timeout (in milliseconds) for specifying how long to wait before terminating. The default is 5 seconds.

```ts
import { beforeAll } from 'vitest'

beforeAll(async () => {
  await startMocking() // called once before all tests run
})
```

Here the `beforeAll` ensures that the mock data is set up before tests run.

`beforeAll` also accepts an optional cleanup function (equivalent to `afterAll`).

```ts
import { beforeAll } from 'vitest'

beforeAll(async () => {
  // called once before all tests run
  await startMocking()

  // clean up function, called once after all tests run
  return async () => {
    await stopMocking()
  }
})
```

### afterAll

- **Type:** `afterAll(fn: () => Awaitable<void>, timeout?: number)`

Register a callback to be called once after all tests have run in the current context.
If the function returns a promise, Vitest waits until the promise resolve before continuing.

Optionally, you can provide a timeout (in milliseconds) for specifying how long to wait before terminating. The default is 5 seconds.

```ts
import { afterAll } from 'vitest'

afterAll(async () => {
  await stopMocking() // this method is called after all tests run
})
```

Here the `afterAll` ensures that `stopMocking` method is called after all tests run.

## Test Hooks

Vitest provides a few hooks that you can call _during_ the test execution to cleanup the state when the test has finished running.

::: warning
These hooks will throw an error if they are called outside of the test body.
:::

### onTestFinished {#ontestfinished}

This hook is always called after the test has finished running. It is called after `afterEach` hooks since they can influence the test result. It receives an `ExtendedContext` object like `beforeEach` and `afterEach`.

```ts {1,5}
import { onTestFinished, test } from 'vitest'

test('performs a query', () => {
  const db = connectDb()
  onTestFinished(() => db.close())
  db.query('SELECT * FROM users')
})
```

::: warning
If you are running tests concurrently, you should always use `onTestFinished` hook from the test context since Vitest doesn't track concurrent tests in global hooks:

```ts {3,5}
import { test } from 'vitest'

test.concurrent('performs a query', ({ onTestFinished }) => {
  const db = connectDb()
  onTestFinished(() => db.close())
  db.query('SELECT * FROM users')
})
```
:::

This hook is particularly useful when creating reusable logic:

```ts
// this can be in a separate file
function getTestDb() {
  const db = connectMockedDb()
  onTestFinished(() => db.close())
  return db
}

test('performs a user query', async () => {
  const db = getTestDb()
  expect(
    await db.query('SELECT * from users').perform()
  ).toEqual([])
})

test('performs an organization query', async () => {
  const db = getTestDb()
  expect(
    await db.query('SELECT * from organizations').perform()
  ).toEqual([])
})
```

::: tip
This hook is always called in reverse order and is not affected by [`sequence.hooks`](/config/#sequence-hooks) option.
:::

### onTestFailed

This hook is called only after the test has failed. It is called after `afterEach` hooks since they can influence the test result. It receives an `ExtendedContext` object like `beforeEach` and `afterEach`. This hook is useful for debugging.

```ts {1,5-7}
import { onTestFailed, test } from 'vitest'

test('performs a query', () => {
  const db = connectDb()
  onTestFailed(({ task }) => {
    console.log(task.result.errors)
  })
  db.query('SELECT * FROM users')
})
```

::: warning
If you are running tests concurrently, you should always use `onTestFailed` hook from the test context since Vitest doesn't track concurrent tests in global hooks:

```ts {3,5-7}
import { test } from 'vitest'

test.concurrent('performs a query', ({ onTestFailed }) => {
  const db = connectDb()
  onTestFailed(({ task }) => {
    console.log(task.result.errors)
  })
  db.query('SELECT * FROM users')
})
```
:::
````

## File: docs/api/mock.md
````markdown
# Mock Functions

You can create a mock function to track its execution with `vi.fn` method. If you want to track a method on an already created object, you can use `vi.spyOn` method:

```js
import { vi } from 'vitest'

const fn = vi.fn()
fn('hello world')
fn.mock.calls[0] === ['hello world']

const market = {
  getApples: () => 100
}

const getApplesSpy = vi.spyOn(market, 'getApples')
market.getApples()
getApplesSpy.mock.calls.length === 1
```

You should use mock assertions (e.g., [`toHaveBeenCalled`](/api/expect#tohavebeencalled)) on [`expect`](/api/expect) to assert mock result. This API reference describes available properties and methods to manipulate mock behavior.

::: tip
The custom function implementation in the types below is marked with a generic `<T>`.
:::

## getMockImplementation

```ts
function getMockImplementation(): T | undefined
```

Returns current mock implementation if there is one.

If the mock was created with [`vi.fn`](/api/vi#vi-fn), it will use the provided method as the mock implementation.

If the mock was created with [`vi.spyOn`](/api/vi#vi-spyon), it will return `undefined` unless a custom implementation is provided.

## getMockName

```ts
function getMockName(): string
```

Use it to return the name assigned to the mock with the `.mockName(name)` method. By default, it will return `vi.fn()`.

## mockClear

```ts
function mockClear(): MockInstance<T>
```

Clears all information about every call. After calling it, all properties on `.mock` will return to their initial state. This method does not reset implementations. It is useful for cleaning up mocks between different assertions.

```ts
const person = {
  greet: (name: string) => `Hello ${name}`,
}
const spy = vi.spyOn(person, 'greet').mockImplementation(() => 'mocked')
expect(person.greet('Alice')).toBe('mocked')
expect(spy.mock.calls).toEqual([['Alice']])

// clear call history but keep mock implementation
spy.mockClear()
expect(spy.mock.calls).toEqual([])
expect(person.greet('Bob')).toBe('mocked')
expect(spy.mock.calls).toEqual([['Bob']])
```

To automatically call this method before each test, enable the [`clearMocks`](/config/#clearmocks) setting in the configuration.

## mockName

```ts
function mockName(name: string): MockInstance<T>
```

Sets the internal mock name. This is useful for identifying the mock when an assertion fails.

## mockImplementation

```ts
function mockImplementation(fn: T): MockInstance<T>
```

Accepts a function to be used as the mock implementation. TypeScript expects the arguments and return type to match those of the original function.

```ts
const mockFn = vi.fn().mockImplementation((apples: number) => apples + 1)
// or: vi.fn(apples => apples + 1);

const NelliesBucket = mockFn(0)
const BobsBucket = mockFn(1)

NelliesBucket === 1 // true
BobsBucket === 2 // true

mockFn.mock.calls[0][0] === 0 // true
mockFn.mock.calls[1][0] === 1 // true
```

## mockImplementationOnce

```ts
function mockImplementationOnce(fn: T): MockInstance<T>
```

Accepts a function to be used as the mock implementation. TypeScript expects the arguments and return type to match those of the original function. This method can be chained to produce different results for multiple function calls.

```ts
const myMockFn = vi
  .fn()
  .mockImplementationOnce(() => true) // 1st call
  .mockImplementationOnce(() => false) // 2nd call

myMockFn() // 1st call: true
myMockFn() // 2nd call: false
```

When the mocked function runs out of implementations, it will invoke the default implementation set with `vi.fn(() => defaultValue)` or `.mockImplementation(() => defaultValue)` if they were called:

```ts
const myMockFn = vi
  .fn(() => 'default')
  .mockImplementationOnce(() => 'first call')
  .mockImplementationOnce(() => 'second call')

// 'first call', 'second call', 'default', 'default'
console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn())
```

## withImplementation

```ts
function withImplementation(
  fn: T,
  cb: () => void
): MockInstance<T>
function withImplementation(
  fn: T,
  cb: () => Promise<void>
): Promise<MockInstance<T>>
```

Overrides the original mock implementation temporarily while the callback is being executed.

```js
const myMockFn = vi.fn(() => 'original')

myMockFn.withImplementation(() => 'temp', () => {
  myMockFn() // 'temp'
})

myMockFn() // 'original'
```

Can be used with an asynchronous callback. The method has to be awaited to use the original implementation afterward.

```ts
test('async callback', () => {
  const myMockFn = vi.fn(() => 'original')

  // We await this call since the callback is async
  await myMockFn.withImplementation(
    () => 'temp',
    async () => {
      myMockFn() // 'temp'
    },
  )

  myMockFn() // 'original'
})
```

Note that this method takes precedence over the [`mockImplementationOnce`](#mockimplementationonce).

## mockRejectedValue

```ts
function mockRejectedValue(value: unknown): MockInstance<T>
```

Accepts an error that will be rejected when async function is called.

```ts
const asyncMock = vi.fn().mockRejectedValue(new Error('Async error'))

await asyncMock() // throws Error<'Async error'>
```

## mockRejectedValueOnce

```ts
function mockRejectedValueOnce(value: unknown): MockInstance<T>
```

Accepts a value that will be rejected during the next function call. If chained, each consecutive call will reject the specified value.

```ts
const asyncMock = vi
  .fn()
  .mockResolvedValueOnce('first call')
  .mockRejectedValueOnce(new Error('Async error'))

await asyncMock() // 'first call'
await asyncMock() // throws Error<'Async error'>
```

## mockReset

```ts
function mockReset(): MockInstance<T>
```

Does what [`mockClear`](#mockClear) does and resets inner implementation to the original function.
This also resets all "once" implementations.

Note that resetting a mock from `vi.fn()` will set implementation to an empty function that returns `undefined`.
resetting a mock from `vi.fn(impl)` will restore implementation to `impl`.

This is useful when you want to reset a mock to its original state.

```ts
const person = {
  greet: (name: string) => `Hello ${name}`,
}
const spy = vi.spyOn(person, 'greet').mockImplementation(() => 'mocked')
expect(person.greet('Alice')).toBe('mocked')
expect(spy.mock.calls).toEqual([['Alice']])

// clear call history and reset implementation, but method is still spied
spy.mockReset()
expect(spy.mock.calls).toEqual([])
expect(person.greet).toBe(spy)
expect(person.greet('Bob')).toBe('Hello Bob')
expect(spy.mock.calls).toEqual([['Bob']])
```

To automatically call this method before each test, enable the [`mockReset`](/config/#mockreset) setting in the configuration.

## mockRestore

```ts
function mockRestore(): MockInstance<T>
```

Does what [`mockReset`](#mockReset) does and restores original descriptors of spied-on objects.

Note that restoring a mock from `vi.fn()` will set implementation to an empty function that returns `undefined`.
Restoring a mock from `vi.fn(impl)` will restore implementation to `impl`.

```ts
const person = {
  greet: (name: string) => `Hello ${name}`,
}
const spy = vi.spyOn(person, 'greet').mockImplementation(() => 'mocked')
expect(person.greet('Alice')).toBe('mocked')
expect(spy.mock.calls).toEqual([['Alice']])

// clear call history and restore spied object method
spy.mockRestore()
expect(spy.mock.calls).toEqual([])
expect(person.greet).not.toBe(spy)
expect(person.greet('Bob')).toBe('Hello Bob')
expect(spy.mock.calls).toEqual([])
```

To automatically call this method before each test, enable the [`restoreMocks`](/config/#restoremocks) setting in the configuration.

## mockResolvedValue

```ts
function mockResolvedValue(value: Awaited<ReturnType<T>>): MockInstance<T>
```

Accepts a value that will be resolved when the async function is called. TypeScript will only accept values that match the return type of the original function.

```ts
const asyncMock = vi.fn().mockResolvedValue(42)

await asyncMock() // 42
```

## mockResolvedValueOnce

```ts
function mockResolvedValueOnce(value: Awaited<ReturnType<T>>): MockInstance<T>
```

Accepts a value that will be resolved during the next function call. TypeScript will only accept values that match the return type of the original function. If chained, each consecutive call will resolve the specified value.

```ts
const asyncMock = vi
  .fn()
  .mockResolvedValue('default')
  .mockResolvedValueOnce('first call')
  .mockResolvedValueOnce('second call')

await asyncMock() // first call
await asyncMock() // second call
await asyncMock() // default
await asyncMock() // default
```

## mockReturnThis

```ts
function mockReturnThis(): MockInstance<T>
```

Use this if you need to return the `this` context from the method without invoking the actual implementation. This is a shorthand for:

```ts
spy.mockImplementation(function () {
  return this
})
```

## mockReturnValue

```ts
function mockReturnValue(value: ReturnType<T>): MockInstance<T>
```

Accepts a value that will be returned whenever the mock function is called. TypeScript will only accept values that match the return type of the original function.

```ts
const mock = vi.fn()
mock.mockReturnValue(42)
mock() // 42
mock.mockReturnValue(43)
mock() // 43
```

## mockReturnValueOnce

```ts
function mockReturnValueOnce(value: ReturnType<T>): MockInstance<T>
```

Accepts a value that will be returned whenever the mock function is called. TypeScript will only accept values that match the return type of the original function.

When the mocked function runs out of implementations, it will invoke the default implementation set with `vi.fn(() => defaultValue)` or `.mockImplementation(() => defaultValue)` if they were called:

```ts
const myMockFn = vi
  .fn()
  .mockReturnValue('default')
  .mockReturnValueOnce('first call')
  .mockReturnValueOnce('second call')

// 'first call', 'second call', 'default', 'default'
console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn())
```

## mock.calls

```ts
const calls: Parameters<T>[]
```

This is an array containing all arguments for each call. One item of the array is the arguments of that call.

```js
const fn = vi.fn()

fn('arg1', 'arg2')
fn('arg3')

fn.mock.calls === [
  ['arg1', 'arg2'], // first call
  ['arg3'], // second call
]
```

## mock.lastCall

```ts
const lastCall: Parameters<T> | undefined
```

This contains the arguments of the last call. If mock wasn't called, it will return `undefined`.

## mock.results

```ts
interface MockResultReturn<T> {
  type: 'return'
  /**
   * The value that was returned from the function.
   * If function returned a Promise, then this will be a resolved value.
   */
  value: T
}

interface MockResultIncomplete {
  type: 'incomplete'
  value: undefined
}

interface MockResultThrow {
  type: 'throw'
  /**
   * An error that was thrown during function execution.
   */
  value: any
}

type MockResult<T> =
  | MockResultReturn<T>
  | MockResultThrow
  | MockResultIncomplete

const results: MockResult<ReturnType<T>>[]
```

This is an array containing all values that were `returned` from the function. One item of the array is an object with properties `type` and `value`. Available types are:

- `'return'` - function returned without throwing.
- `'throw'` - function threw a value.

The `value` property contains the returned value or thrown error. If the function returned a `Promise`, then `result` will always be `'return'` even if the promise was rejected.

```js
const fn = vi.fn()
  .mockReturnValueOnce('result')
  .mockImplementationOnce(() => { throw new Error('thrown error') })

const result = fn() // returned 'result'

try {
  fn() // threw Error
}
catch {}

fn.mock.results === [
  // first result
  {
    type: 'return',
    value: 'result',
  },
  // last result
  {
    type: 'throw',
    value: Error,
  },
]
```

## mock.settledResults

```ts
interface MockSettledResultFulfilled<T> {
  type: 'fulfilled'
  value: T
}

interface MockSettledResultRejected {
  type: 'rejected'
  value: any
}

export type MockSettledResult<T> =
  | MockSettledResultFulfilled<T>
  | MockSettledResultRejected

const settledResults: MockSettledResult<Awaited<ReturnType<T>>>[]
```

An array containing all values that were `resolved` or `rejected` from the function.

This array will be empty if the function was never resolved or rejected.

```js
const fn = vi.fn().mockResolvedValueOnce('result')

const result = fn()

fn.mock.settledResults === []

await result

fn.mock.settledResults === [
  {
    type: 'fulfilled',
    value: 'result',
  },
]
```

## mock.invocationCallOrder

```ts
const invocationCallOrder: number[]
```

This property returns the order of the mock function's execution. It is an array of numbers that are shared between all defined mocks.

```js
const fn1 = vi.fn()
const fn2 = vi.fn()

fn1()
fn2()
fn1()

fn1.mock.invocationCallOrder === [1, 3]
fn2.mock.invocationCallOrder === [2]
```

## mock.contexts

```ts
const contexts: ThisParameterType<T>[]
```

This property is an array of `this` values used during each call to the mock function.

```js
const fn = vi.fn()
const context = {}

fn.apply(context)
fn.call(context)

fn.mock.contexts[0] === context
fn.mock.contexts[1] === context
```

## mock.instances

```ts
const instances: ReturnType<T>[]
```

This property is an array containing all instances that were created when the mock was called with the `new` keyword. Note that this is an actual context (`this`) of the function, not a return value.

::: warning
If mock was instantiated with `new MyClass()`, then `mock.instances` will be an array with one value:

```js
const MyClass = vi.fn()
const a = new MyClass()

MyClass.mock.instances[0] === a
```

If you return a value from constructor, it will not be in `instances` array, but instead inside `results`:

```js
const Spy = vi.fn(() => ({ method: vi.fn() }))
const a = new Spy()

Spy.mock.instances[0] !== a
Spy.mock.results[0] === a
```
:::
````

## File: docs/api/vi.md
````markdown
---
outline: deep
---

# Vi

Vitest provides utility functions to help you out through its `vi` helper. You can access it globally (when [globals configuration](/config/#globals) is enabled), or import it from `vitest` directly:

```js
import { vi } from 'vitest'
```

## Mock Modules

This section describes the API that you can use when [mocking a module](/guide/mocking#modules). Beware that Vitest doesn't support mocking modules imported using `require()`.

### vi.mock

- **Type**: `(path: string, factory?: MockOptions | ((importOriginal: () => unknown) => unknown)) => void`
- **Type**: `<T>(path: Promise<T>, factory?: MockOptions | ((importOriginal: () => T) => T | Promise<T>)) => void`

Substitutes all imported modules from provided `path` with another module. You can use configured Vite aliases inside a path. The call to `vi.mock` is hoisted, so it doesn't matter where you call it. It will always be executed before all imports. If you need to reference some variables outside of its scope, you can define them inside [`vi.hoisted`](#vi-hoisted) and reference them inside `vi.mock`.

::: warning
`vi.mock` works only for modules that were imported with the `import` keyword. It doesn't work with `require`.

In order to hoist `vi.mock`, Vitest statically analyzes your files. It indicates that `vi` that was not directly imported from the `vitest` package (for example, from some utility file) cannot be used. Use `vi.mock` with `vi` imported from `vitest`, or enable [`globals`](/config/#globals) config option.

Vitest will not mock modules that were imported inside a [setup file](/config/#setupfiles) because they are cached by the time a test file is running. You can call [`vi.resetModules()`](#vi-resetmodules) inside [`vi.hoisted`](#vi-hoisted) to clear all module caches before running a test file.
:::

If the `factory` function is defined, all imports will return its result. Vitest calls factory only once and caches results for all subsequent imports until [`vi.unmock`](#vi-unmock) or [`vi.doUnmock`](#vi-dounmock) is called.

Unlike in `jest`, the factory can be asynchronous. You can use [`vi.importActual`](#vi-importactual) or a helper with the factory passed in as the first argument, and get the original module inside.

You can also provide an object with a `spy` property instead of a factory function. If `spy` is `true`, then Vitest will automock the module as usual, but it won't override the implementation of exports. This is useful if you just want to assert that the exported method was called correctly by another method.

```ts
import { calculator } from './src/calculator.ts'

vi.mock('./src/calculator.ts', { spy: true })

// calls the original implementation,
// but allows asserting the behaviour later
const result = calculator(1, 2)

expect(result).toBe(3)
expect(calculator).toHaveBeenCalledWith(1, 2)
expect(calculator).toHaveReturned(3)
```

Vitest also supports a module promise instead of a string in the `vi.mock` and `vi.doMock` methods for better IDE support. When the file is moved, the path will be updated, and `importOriginal` inherits the type automatically. Using this signature will also enforce factory return type to be compatible with the original module (keeping exports optional).

```ts twoslash
// @filename: ./path/to/module.js
export declare function total(...numbers: number[]): number
// @filename: test.js
import { vi } from 'vitest'
// ---cut---
vi.mock(import('./path/to/module.js'), async (importOriginal) => {
  const mod = await importOriginal() // type is inferred
  //    ^?
  return {
    ...mod,
    // replace some exports
    total: vi.fn(),
  }
})
```

Under the hood, Vitest still operates on a string and not a module object.

If you are using TypeScript with `paths` aliases configured in `tsconfig.json` however, the compiler won't be able to correctly resolve import types.
In order to make it work, make sure to replace all aliased imports, with their corresponding relative paths.
Eg. use `import('./path/to/module.js')` instead of `import('@/module')`.

::: warning
`vi.mock` is hoisted (in other words, _moved_) to **top of the file**. It means that whenever you write it (be it inside `beforeEach` or `test`), it will actually be called before that.

This also means that you cannot use any variables inside the factory that are defined outside the factory.

If you need to use variables inside the factory, try [`vi.doMock`](#vi-domock). It works the same way but isn't hoisted. Beware that it only mocks subsequent imports.

You can also reference variables defined by `vi.hoisted` method if it was declared before `vi.mock`:

```ts
import { namedExport } from './path/to/module.js'

const mocks = vi.hoisted(() => {
  return {
    namedExport: vi.fn(),
  }
})

vi.mock('./path/to/module.js', () => {
  return {
    namedExport: mocks.namedExport,
  }
})

vi.mocked(namedExport).mockReturnValue(100)

expect(namedExport()).toBe(100)
expect(namedExport).toBe(mocks.namedExport)
```
:::

::: warning
If you are mocking a module with default export, you will need to provide a `default` key within the returned factory function object. This is an ES module-specific caveat; therefore, `jest` documentation may differ as `jest` uses CommonJS modules. For example,

```ts
vi.mock('./path/to/module.js', () => {
  return {
    default: { myDefaultKey: vi.fn() },
    namedExport: vi.fn(),
    // etc...
  }
})
```
:::

If there is a `__mocks__` folder alongside a file that you are mocking, and the factory is not provided, Vitest will try to find a file with the same name in the `__mocks__` subfolder and use it as an actual module. If you are mocking a dependency, Vitest will try to find a `__mocks__` folder in the [root](/config/#root) of the project (default is `process.cwd()`). You can tell Vitest where the dependencies are located through the [`deps.moduleDirectories`](/config/#deps-moduledirectories) config option.

For example, you have this file structure:

```
- __mocks__
  - axios.js
- src
  __mocks__
    - increment.js
  - increment.js
- tests
  - increment.test.js
```

If you call `vi.mock` in a test file without a factory or options provided, it will find a file in the `__mocks__` folder to use as a module:

```ts [increment.test.js]
import { vi } from 'vitest'

// axios is a default export from `__mocks__/axios.js`
import axios from 'axios'

// increment is a named export from `src/__mocks__/increment.js`
import { increment } from '../increment.js'

vi.mock('axios')
vi.mock('../increment.js')

axios.get(`/apples/${increment(1)}`)
```

::: warning
Beware that if you don't call `vi.mock`, modules **are not** mocked automatically. To replicate Jest's automocking behaviour, you can call `vi.mock` for each required module inside [`setupFiles`](/config/#setupfiles).
:::

If there is no `__mocks__` folder or a factory provided, Vitest will import the original module and auto-mock all its exports. For the rules applied, see [algorithm](/guide/mocking#automocking-algorithm).

### vi.doMock

- **Type**: `(path: string, factory?: MockOptions | ((importOriginal: () => unknown) => unknown)) => void`
- **Type**: `<T>(path: Promise<T>, factory?: MockOptions | ((importOriginal: () => T) => T | Promise<T>)) => void`

The same as [`vi.mock`](#vi-mock), but it's not hoisted to the top of the file, so you can reference variables in the global file scope. The next [dynamic import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) of the module will be mocked.

::: warning
This will not mock modules that were imported before this was called. Don't forget that all static imports in ESM are always [hoisted](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#hoisting), so putting this before static import will not force it to be called before the import:

```ts
vi.doMock('./increment.js') // this will be called _after_ the import statement

import { increment } from './increment.js'
```
:::

```ts [increment.js]
export function increment(number) {
  return number + 1
}
```

```ts [increment.test.js]
import { beforeEach, test } from 'vitest'
import { increment } from './increment.js'

// the module is not mocked, because vi.doMock is not called yet
increment(1) === 2

let mockedIncrement = 100

beforeEach(() => {
  // you can access variables inside a factory
  vi.doMock('./increment.js', () => ({ increment: () => ++mockedIncrement }))
})

test('importing the next module imports mocked one', async () => {
  // original import WAS NOT MOCKED, because vi.doMock is evaluated AFTER imports
  expect(increment(1)).toBe(2)
  const { increment: mockedIncrement } = await import('./increment.js')
  // new dynamic import returns mocked module
  expect(mockedIncrement(1)).toBe(101)
  expect(mockedIncrement(1)).toBe(102)
  expect(mockedIncrement(1)).toBe(103)
})
```

### vi.mocked

- **Type**: `<T>(obj: T, deep?: boolean) => MaybeMockedDeep<T>`
- **Type**: `<T>(obj: T, options?: { partial?: boolean; deep?: boolean }) => MaybePartiallyMockedDeep<T>`

Type helper for TypeScript. Just returns the object that was passed.

When `partial` is `true` it will expect a `Partial<T>` as a return value. By default, this will only make TypeScript believe that the first level values are mocked. You can pass down `{ deep: true }` as a second argument to tell TypeScript that the whole object is mocked, if it actually is.

```ts [example.ts]
export function add(x: number, y: number): number {
  return x + y
}

export function fetchSomething(): Promise<Response> {
  return fetch('https://vitest.dev/')
}
```

```ts [example.test.ts]
import * as example from './example'

vi.mock('./example')

test('1 + 1 equals 10', async () => {
  vi.mocked(example.add).mockReturnValue(10)
  expect(example.add(1, 1)).toBe(10)
})

test('mock return value with only partially correct typing', async () => {
  vi.mocked(example.fetchSomething).mockResolvedValue(new Response('hello'))
  vi.mocked(example.fetchSomething, { partial: true }).mockResolvedValue({ ok: false })
  // vi.mocked(example.someFn).mockResolvedValue({ ok: false }) // this is a type error
})
```

### vi.importActual

- **Type**: `<T>(path: string) => Promise<T>`

Imports module, bypassing all checks if it should be mocked. Can be useful if you want to mock module partially.

```ts
vi.mock('./example.js', async () => {
  const originalModule = await vi.importActual('./example.js')

  return { ...originalModule, get: vi.fn() }
})
```

### vi.importMock

- **Type**: `<T>(path: string) => Promise<MaybeMockedDeep<T>>`

Imports a module with all of its properties (including nested properties) mocked. Follows the same rules that [`vi.mock`](#vi-mock) does. For the rules applied, see [algorithm](/guide/mocking#automocking-algorithm).

### vi.unmock

- **Type**: `(path: string | Promise<Module>) => void`

Removes module from the mocked registry. All calls to import will return the original module even if it was mocked before. This call is hoisted to the top of the file, so it will only unmock modules that were defined in `setupFiles`, for example.

### vi.doUnmock

- **Type**: `(path: string | Promise<Module>) => void`

The same as [`vi.unmock`](#vi-unmock), but is not hoisted to the top of the file. The next import of the module will import the original module instead of the mock. This will not unmock previously imported modules.

```ts [increment.js]
export function increment(number) {
  return number + 1
}
```

```ts [increment.test.js]
import { increment } from './increment.js'

// increment is already mocked, because vi.mock is hoisted
increment(1) === 100

// this is hoisted, and factory is called before the import on line 1
vi.mock('./increment.js', () => ({ increment: () => 100 }))

// all calls are mocked, and `increment` always returns 100
increment(1) === 100
increment(30) === 100

// this is not hoisted, so other import will return unmocked module
vi.doUnmock('./increment.js')

// this STILL returns 100, because `vi.doUnmock` doesn't reevaluate a module
increment(1) === 100
increment(30) === 100

// the next import is unmocked, now `increment` is the original function that returns count + 1
const { increment: unmockedIncrement } = await import('./increment.js')

unmockedIncrement(1) === 2
unmockedIncrement(30) === 31
```

### vi.resetModules

- **Type**: `() => Vitest`

Resets modules registry by clearing the cache of all modules. This allows modules to be reevaluated when reimported. Top-level imports cannot be re-evaluated. Might be useful to isolate modules where local state conflicts between tests.

```ts
import { vi } from 'vitest'

import { data } from './data.js' // Will not get reevaluated beforeEach test

beforeEach(() => {
  vi.resetModules()
})

test('change state', async () => {
  const mod = await import('./some/path.js') // Will get reevaluated
  mod.changeLocalState('new value')
  expect(mod.getLocalState()).toBe('new value')
})

test('module has old state', async () => {
  const mod = await import('./some/path.js') // Will get reevaluated
  expect(mod.getLocalState()).toBe('old value')
})
```

::: warning
Does not reset mocks registry. To clear mocks registry, use [`vi.unmock`](#vi-unmock) or [`vi.doUnmock`](#vi-dounmock).
:::

### vi.dynamicImportSettled

Wait for all imports to load. Useful, if you have a synchronous call that starts importing a module that you cannot wait otherwise.

```ts
import { expect, test } from 'vitest'

// cannot track import because Promise is not returned
function renderComponent() {
  import('./component.js').then(({ render }) => {
    render()
  })
}

test('operations are resolved', async () => {
  renderComponent()
  await vi.dynamicImportSettled()
  expect(document.querySelector('.component')).not.toBeNull()
})
```

::: tip
If during a dynamic import another dynamic import is initiated, this method will wait until all of them are resolved.

This method will also wait for the next `setTimeout` tick after the import is resolved so all synchronous operations should be completed by the time it's resolved.
:::

## Mocking Functions and Objects

This section describes how to work with [method mocks](/api/mock) and replace environmental and global variables.

### vi.fn

- **Type:** `(fn?: Function) => Mock`

Creates a spy on a function, though can be initiated without one. Every time a function is invoked, it stores its call arguments, returns, and instances. Also, you can manipulate its behavior with [methods](/api/mock).
If no function is given, mock will return `undefined`, when invoked.

```ts
const getApples = vi.fn(() => 0)

getApples()

expect(getApples).toHaveBeenCalled()
expect(getApples).toHaveReturnedWith(0)

getApples.mockReturnValueOnce(5)

const res = getApples()
expect(res).toBe(5)
expect(getApples).toHaveNthReturnedWith(2, 5)
```

### vi.mockObject <Version>3.2.0</Version>

- **Type:** `<T>(value: T) => MaybeMockedDeep<T>`

Deeply mocks properties and methods of a given object in the same way as `vi.mock()` mocks module exports. See [automocking](/guide/mocking.html#automocking-algorithm) for the detail.

```ts
const original = {
  simple: () => 'value',
  nested: {
    method: () => 'real'
  },
  prop: 'foo',
}

const mocked = vi.mockObject(original)
expect(mocked.simple()).toBe(undefined)
expect(mocked.nested.method()).toBe(undefined)
expect(mocked.prop).toBe('foo')

mocked.simple.mockReturnValue('mocked')
mocked.nested.method.mockReturnValue('mocked nested')

expect(mocked.simple()).toBe('mocked')
expect(mocked.nested.method()).toBe('mocked nested')
```

### vi.isMockFunction

- **Type:** `(fn: Function) => boolean`

Checks that a given parameter is a mock function. If you are using TypeScript, it will also narrow down its type.

### vi.clearAllMocks

Calls [`.mockClear()`](/api/mock#mockclear) on all spies.
This will clear mock history without affecting mock implementations.

### vi.resetAllMocks

Calls [`.mockReset()`](/api/mock#mockreset) on all spies.
This will clear mock history and reset each mock's implementation to its original.

### vi.restoreAllMocks

Calls [`.mockRestore()`](/api/mock#mockrestore) on all spies.
This will clear mock history, restore all original mock implementations, and restore original descriptors of spied-on objects.

### vi.spyOn

- **Type:** `<T, K extends keyof T>(object: T, method: K, accessType?: 'get' | 'set') => MockInstance`

Creates a spy on a method or getter/setter of an object similar to [`vi.fn()`](#vi-fn). It returns a [mock function](/api/mock).

```ts
let apples = 0
const cart = {
  getApples: () => 42,
}

const spy = vi.spyOn(cart, 'getApples').mockImplementation(() => apples)
apples = 1

expect(cart.getApples()).toBe(1)

expect(spy).toHaveBeenCalled()
expect(spy).toHaveReturnedWith(1)
```

::: tip
In environments that support [Explicit Resource Management](https://github.com/tc39/proposal-explicit-resource-management), you can use `using` instead of `const` to automatically call `mockRestore` on any mocked function when the containing block is exited. This is especially useful for spied methods:

```ts
it('calls console.log', () => {
  using spy = vi.spyOn(console, 'log').mockImplementation(() => {})
  debug('message')
  expect(spy).toHaveBeenCalled()
})
// console.log is restored here
```
:::

::: tip
You can call [`vi.restoreAllMocks`](#vi-restoreallmocks) inside [`afterEach`](/api/#aftereach) (or enable [`test.restoreMocks`](/config/#restoreMocks)) to restore all methods to their original implementations. This will restore the original [object descriptor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), so you won't be able to change method's implementation:

```ts
const cart = {
  getApples: () => 42,
}

const spy = vi.spyOn(cart, 'getApples').mockReturnValue(10)

console.log(cart.getApples()) // 10
vi.restoreAllMocks()
console.log(cart.getApples()) // 42
spy.mockReturnValue(10)
console.log(cart.getApples()) // still 42!
```
:::

::: tip
It is not possible to spy on exported methods in [Browser Mode](/guide/browser/). Instead, you can spy on every exported method by calling `vi.mock("./file-path.js", { spy: true })`. This will mock every export but keep its implementation intact, allowing you to assert if the method was called correctly.

```ts
import { calculator } from './src/calculator.ts'

vi.mock('./src/calculator.ts', { spy: true })

calculator(1, 2)

expect(calculator).toHaveBeenCalledWith(1, 2)
expect(calculator).toHaveReturned(3)
```

And while it is possible to spy on exports in `jsdom` or other Node.js environments, this might change in the future.
:::

### vi.stubEnv {#vi-stubenv}

- **Type:** `<T extends string>(name: T, value: T extends "PROD" | "DEV" | "SSR" ? boolean : string | undefined) => Vitest`

Changes the value of environmental variable on `process.env` and `import.meta.env`. You can restore its value by calling `vi.unstubAllEnvs`.

```ts
import { vi } from 'vitest'

// `process.env.NODE_ENV` and `import.meta.env.NODE_ENV`
// are "development" before calling "vi.stubEnv"

vi.stubEnv('NODE_ENV', 'production')

process.env.NODE_ENV === 'production'
import.meta.env.NODE_ENV === 'production'

vi.stubEnv('NODE_ENV', undefined)

process.env.NODE_ENV === undefined
import.meta.env.NODE_ENV === undefined

// doesn't change other envs
import.meta.env.MODE === 'development'
```

:::tip
You can also change the value by simply assigning it, but you won't be able to use `vi.unstubAllEnvs` to restore previous value:

```ts
import.meta.env.MODE = 'test'
```
:::

### vi.unstubAllEnvs {#vi-unstuballenvs}

- **Type:** `() => Vitest`

Restores all `import.meta.env` and `process.env` values that were changed with `vi.stubEnv`. When it's called for the first time, Vitest remembers the original value and will store it, until `unstubAllEnvs` is called again.

```ts
import { vi } from 'vitest'

// `process.env.NODE_ENV` and `import.meta.env.NODE_ENV`
// are "development" before calling stubEnv

vi.stubEnv('NODE_ENV', 'production')

process.env.NODE_ENV === 'production'
import.meta.env.NODE_ENV === 'production'

vi.stubEnv('NODE_ENV', 'staging')

process.env.NODE_ENV === 'staging'
import.meta.env.NODE_ENV === 'staging'

vi.unstubAllEnvs()

// restores to the value that were stored before the first "stubEnv" call
process.env.NODE_ENV === 'development'
import.meta.env.NODE_ENV === 'development'
```

### vi.stubGlobal

- **Type:** `(name: string | number | symbol, value: unknown) => Vitest`

Changes the value of global variable. You can restore its original value by calling `vi.unstubAllGlobals`.

```ts
import { vi } from 'vitest'

// `innerWidth` is "0" before calling stubGlobal

vi.stubGlobal('innerWidth', 100)

innerWidth === 100
globalThis.innerWidth === 100
// if you are using jsdom or happy-dom
window.innerWidth === 100
```

:::tip
You can also change the value by simply assigning it to `globalThis` or `window` (if you are using `jsdom` or `happy-dom` environment), but you won't be able to use `vi.unstubAllGlobals` to restore original value:

```ts
globalThis.innerWidth = 100
// if you are using jsdom or happy-dom
window.innerWidth = 100
```
:::

### vi.unstubAllGlobals {#vi-unstuballglobals}

- **Type:** `() => Vitest`

Restores all global values on `globalThis`/`global` (and `window`/`top`/`self`/`parent`, if you are using `jsdom` or `happy-dom` environment) that were changed with `vi.stubGlobal`. When it's called for the first time, Vitest remembers the original value and will store it, until `unstubAllGlobals` is called again.

```ts
import { vi } from 'vitest'

const Mock = vi.fn()

// IntersectionObserver is "undefined" before calling "stubGlobal"

vi.stubGlobal('IntersectionObserver', Mock)

IntersectionObserver === Mock
global.IntersectionObserver === Mock
globalThis.IntersectionObserver === Mock
// if you are using jsdom or happy-dom
window.IntersectionObserver === Mock

vi.unstubAllGlobals()

globalThis.IntersectionObserver === undefined
'IntersectionObserver' in globalThis === false
// throws ReferenceError, because it's not defined
IntersectionObserver === undefined
```

## Fake Timers

This sections describes how to work with [fake timers](/guide/mocking#timers).

### vi.advanceTimersByTime

- **Type:** `(ms: number) => Vitest`

This method will invoke every initiated timer until the specified number of milliseconds is passed or the queue is empty - whatever comes first.

```ts
let i = 0
setInterval(() => console.log(++i), 50)

vi.advanceTimersByTime(150)

// log: 1
// log: 2
// log: 3
```

### vi.advanceTimersByTimeAsync

- **Type:** `(ms: number) => Promise<Vitest>`

This method will invoke every initiated timer until the specified number of milliseconds is passed or the queue is empty - whatever comes first. This will include asynchronously set timers.

```ts
let i = 0
setInterval(() => Promise.resolve().then(() => console.log(++i)), 50)

await vi.advanceTimersByTimeAsync(150)

// log: 1
// log: 2
// log: 3
```

### vi.advanceTimersToNextTimer

- **Type:** `() => Vitest`

Will call next available timer. Useful to make assertions between each timer call. You can chain call it to manage timers by yourself.

```ts
let i = 0
setInterval(() => console.log(++i), 50)

vi.advanceTimersToNextTimer() // log: 1
  .advanceTimersToNextTimer() // log: 2
  .advanceTimersToNextTimer() // log: 3
```

### vi.advanceTimersToNextTimerAsync

- **Type:** `() => Promise<Vitest>`

Will call next available timer and wait until it's resolved if it was set asynchronously. Useful to make assertions between each timer call.

```ts
let i = 0
setInterval(() => Promise.resolve().then(() => console.log(++i)), 50)

await vi.advanceTimersToNextTimerAsync() // log: 1
expect(console.log).toHaveBeenCalledWith(1)

await vi.advanceTimersToNextTimerAsync() // log: 2
await vi.advanceTimersToNextTimerAsync() // log: 3
```

### vi.advanceTimersToNextFrame <Version>2.1.0</Version> {#vi-advancetimerstonextframe}

- **Type:** `() => Vitest`

Similar to [`vi.advanceTimersByTime`](https://vitest.dev/api/vi#vi-advancetimersbytime), but will advance timers by the milliseconds needed to execute callbacks currently scheduled with `requestAnimationFrame`.

```ts
let frameRendered = false

requestAnimationFrame(() => {
  frameRendered = true
})

vi.advanceTimersToNextFrame()

expect(frameRendered).toBe(true)
```

### vi.getTimerCount

- **Type:** `() => number`

Get the number of waiting timers.

### vi.clearAllTimers

Removes all timers that are scheduled to run. These timers will never run in the future.

### vi.getMockedSystemTime

- **Type**: `() => Date | null`

Returns mocked current date. If date is not mocked the method will return `null`.

### vi.getRealSystemTime

- **Type**: `() => number`

When using `vi.useFakeTimers`, `Date.now` calls are mocked. If you need to get real time in milliseconds, you can call this function.

### vi.runAllTicks

- **Type:** `() => Vitest`

Calls every microtask that was queued by `process.nextTick`. This will also run all microtasks scheduled by themselves.

### vi.runAllTimers

- **Type:** `() => Vitest`

This method will invoke every initiated timer until the timer queue is empty. It means that every timer called during `runAllTimers` will be fired. If you have an infinite interval, it will throw after 10 000 tries (can be configured with [`fakeTimers.loopLimit`](/config/#faketimers-looplimit)).

```ts
let i = 0
setTimeout(() => console.log(++i))
const interval = setInterval(() => {
  console.log(++i)
  if (i === 3) {
    clearInterval(interval)
  }
}, 50)

vi.runAllTimers()

// log: 1
// log: 2
// log: 3
```

### vi.runAllTimersAsync

- **Type:** `() => Promise<Vitest>`

This method will asynchronously invoke every initiated timer until the timer queue is empty. It means that every timer called during `runAllTimersAsync` will be fired even asynchronous timers. If you have an infinite interval,
it will throw after 10 000 tries (can be configured with [`fakeTimers.loopLimit`](/config/#faketimers-looplimit)).

```ts
setTimeout(async () => {
  console.log(await Promise.resolve('result'))
}, 100)

await vi.runAllTimersAsync()

// log: result
```

### vi.runOnlyPendingTimers

- **Type:** `() => Vitest`

This method will call every timer that was initiated after [`vi.useFakeTimers`](#vi-usefaketimers) call. It will not fire any timer that was initiated during its call.

```ts
let i = 0
setInterval(() => console.log(++i), 50)

vi.runOnlyPendingTimers()

// log: 1
```

### vi.runOnlyPendingTimersAsync

- **Type:** `() => Promise<Vitest>`

This method will asynchronously call every timer that was initiated after [`vi.useFakeTimers`](#vi-usefaketimers) call, even asynchronous ones. It will not fire any timer that was initiated during its call.

```ts
setTimeout(() => {
  console.log(1)
}, 100)
setTimeout(() => {
  Promise.resolve().then(() => {
    console.log(2)
    setInterval(() => {
      console.log(3)
    }, 40)
  })
}, 10)

await vi.runOnlyPendingTimersAsync()

// log: 2
// log: 3
// log: 3
// log: 1
```

### vi.setSystemTime

- **Type**: `(date: string | number | Date) => void`

If fake timers are enabled, this method simulates a user changing the system clock (will affect date related API like `hrtime`, `performance.now` or `new Date()`) - however, it will not fire any timers. If fake timers are not enabled, this method will only mock `Date.*` calls.

Useful if you need to test anything that depends on the current date - for example [Luxon](https://github.com/moment/luxon/) calls inside your code.

Accepts the same string and number arguments as the `Date`.

```ts
const date = new Date(1998, 11, 19)

vi.useFakeTimers()
vi.setSystemTime(date)

expect(Date.now()).toBe(date.valueOf())

vi.useRealTimers()
```

### vi.useFakeTimers

- **Type:** `(config?: FakeTimerInstallOpts) => Vitest`

To enable mocking timers, you need to call this method. It will wrap all further calls to timers (such as `setTimeout`, `setInterval`, `clearTimeout`, `clearInterval`, `setImmediate`, `clearImmediate`, and `Date`) until [`vi.useRealTimers()`](#vi-userealtimers) is called.

Mocking `nextTick` is not supported when running Vitest inside `node:child_process` by using `--pool=forks`. NodeJS uses `process.nextTick` internally in `node:child_process` and hangs when it is mocked. Mocking `nextTick` is supported when running Vitest with `--pool=threads`.

The implementation is based internally on [`@sinonjs/fake-timers`](https://github.com/sinonjs/fake-timers).

::: tip
`vi.useFakeTimers()` does not automatically mock `process.nextTick` and `queueMicrotask`.
But you can enable it by specifying the option in `toFake` argument: `vi.useFakeTimers({ toFake: ['nextTick', 'queueMicrotask'] })`.
:::

### vi.isFakeTimers {#vi-isfaketimers}

- **Type:** `() => boolean`

Returns `true` if fake timers are enabled.

### vi.useRealTimers

- **Type:** `() => Vitest`

When timers have run out, you may call this method to return mocked timers to its original implementations. All timers that were scheduled before will be discarded.

## Miscellaneous

A set of useful helper functions that Vitest provides.

### vi.waitFor {#vi-waitfor}

- **Type:** `<T>(callback: WaitForCallback<T>, options?: number | WaitForOptions) => Promise<T>`

Wait for the callback to execute successfully. If the callback throws an error or returns a rejected promise it will continue to wait until it succeeds or times out.

If options is set to a number, the effect is equivalent to setting `{ timeout: options }`.

This is very useful when you need to wait for some asynchronous action to complete, for example, when you start a server and need to wait for it to start.

```ts
import { expect, test, vi } from 'vitest'
import { createServer } from './server.js'

test('Server started successfully', async () => {
  const server = createServer()

  await vi.waitFor(
    () => {
      if (!server.isReady) {
        throw new Error('Server not started')
      }

      console.log('Server started')
    },
    {
      timeout: 500, // default is 1000
      interval: 20, // default is 50
    }
  )
  expect(server.isReady).toBe(true)
})
```

It also works for asynchronous callbacks

```ts
// @vitest-environment jsdom

import { expect, test, vi } from 'vitest'
import { getDOMElementAsync, populateDOMAsync } from './dom.js'

test('Element exists in a DOM', async () => {
  // start populating DOM
  populateDOMAsync()

  const element = await vi.waitFor(async () => {
    // try to get the element until it exists
    const element = await getDOMElementAsync() as HTMLElement | null
    expect(element).toBeTruthy()
    expect(element.dataset.initialized).toBeTruthy()
    return element
  }, {
    timeout: 500, // default is 1000
    interval: 20, // default is 50
  })
  expect(element).toBeInstanceOf(HTMLElement)
})
```

If `vi.useFakeTimers` is used, `vi.waitFor` automatically calls `vi.advanceTimersByTime(interval)` in every check callback.

### vi.waitUntil {#vi-waituntil}

- **Type:** `<T>(callback: WaitUntilCallback<T>, options?: number | WaitUntilOptions) => Promise<T>`

This is similar to `vi.waitFor`, but if the callback throws any errors, execution is immediately interrupted and an error message is received. If the callback returns falsy value, the next check will continue until truthy value is returned. This is useful when you need to wait for something to exist before taking the next step.

Look at the example below. We can use `vi.waitUntil` to wait for the element to appear on the page, and then we can do something with the element.

```ts
import { expect, test, vi } from 'vitest'

test('Element render correctly', async () => {
  const element = await vi.waitUntil(
    () => document.querySelector('.element'),
    {
      timeout: 500, // default is 1000
      interval: 20, // default is 50
    }
  )

  // do something with the element
  expect(element.querySelector('.element-child')).toBeTruthy()
})
```

### vi.hoisted {#vi-hoisted}

- **Type**: `<T>(factory: () => T) => T`

All static `import` statements in ES modules are hoisted to the top of the file, so any code that is defined before the imports will actually be executed after imports are evaluated.

However, it can be useful to invoke some side effects like mocking dates before importing a module.

To bypass this limitation, you can rewrite static imports into dynamic ones like this:

```diff
callFunctionWithSideEffect()
- import { value } from './some/module.js'
+ const { value } = await import('./some/module.js')
```

When running `vitest`, you can do this automatically by using `vi.hoisted` method. Under the hood, Vitest will convert static imports into dynamic ones with preserved live-bindings.

```diff
- callFunctionWithSideEffect()
import { value } from './some/module.js'
+ vi.hoisted(() => callFunctionWithSideEffect())
```

::: warning IMPORTS ARE NOT AVAILABLE
Running code before the imports means that you cannot access imported variables because they are not defined yet:

```ts
import { value } from './some/module.js'

vi.hoisted(() => { value }) // throws an error // [!code warning]
```

This code will produce an error:

```
Cannot access '__vi_import_0__' before initialization
```

If you need to access a variable from another module inside of `vi.hoisted`, use dynamic import:

```ts
await vi.hoisted(async () => {
  const { value } = await import('./some/module.js')
})
```

However, it is discourage to import anything inside of `vi.hoisted` because imports are already hoisted - if you need to execute something before the tests are running, just execute it in the imported module itself.
:::

This method returns the value that was returned from the factory. You can use that value in your `vi.mock` factories if you need easy access to locally defined variables:

```ts
import { expect, vi } from 'vitest'
import { originalMethod } from './path/to/module.js'

const { mockedMethod } = vi.hoisted(() => {
  return { mockedMethod: vi.fn() }
})

vi.mock('./path/to/module.js', () => {
  return { originalMethod: mockedMethod }
})

mockedMethod.mockReturnValue(100)
expect(originalMethod()).toBe(100)
```

Note that this method can also be called asynchronously even if your environment doesn't support top-level await:

```ts
const json = await vi.hoisted(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  return response.json()
})
```

### vi.setConfig

- **Type**: `RuntimeConfig`

Updates config for the current test file. This method supports only config options that will affect the current test file:

```ts
vi.setConfig({
  allowOnly: true,
  testTimeout: 10_000,
  hookTimeout: 10_000,
  clearMocks: true,
  restoreMocks: true,
  fakeTimers: {
    now: new Date(2021, 11, 19),
    // supports the whole object
  },
  maxConcurrency: 10,
  sequence: {
    hooks: 'stack'
    // supports only "sequence.hooks"
  }
})
```

### vi.resetConfig

- **Type**: `RuntimeConfig`

If [`vi.setConfig`](#vi-setconfig) was called before, this will reset config to the original state.
````

## File: docs/blog/vitest-3-2.md
````markdown
---
title: Vitest 3.2 is out!
author:
  name: The Vitest Team
date: 2025-06-02
sidebar: false
head:
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: Announcing Vitest 3.2
  - - meta
    - property: og:image
      content: https://vitest.dev/og-vitest-3-2.png
  - - meta
    - property: og:url
      content: https://vitest.dev/blog/vitest-3-2
  - - meta
    - property: og:description
      content: Vitest 3.2 Release Announcement
  - - meta
    - name: twitter:card
      content: summary_large_image
---

# Vitest 3.2 is out!

_June 2, 2025_

![Vitest 3.2 Announcement Cover Image](/og-vitest-3-2.png)

Vitest 3.2 focuses on improvements to Browser Mode and TypeScript support. This release also includes some new useful methods, config options and deprecates the `workspace` config in favour of `projects`.

## `workspace` is Deprecated

In an effort to simplify the configuration, the team decided to deprecate the separate `vitest.workspace` file and recommend using only the `projects` option in the root config. This also simplifies how the global options are configured (because you don't need to guess how to add reporters when you have no root config).

We also decided to deprecate the `workspace` name because it clashes with other tools like PNPM that provide monorepo support via this option. Vitest doesn't run these projects with separate `CWD` and treats them more like sub-Vitests. It also gives us more space to come up with a better solution for monorepos without breaking others.

This option will be removed completely in a future major, replaced by `projects`. Until then, Vitest will print a warning if workspace feature is used.

<!--@include: ../guide/examples/projects-workspace.md-->

## Annotation API

The new [annotation API](/guide/test-annotations) allows you to annotate any test with a custom message and attachment. These annotations are visible in the UI, HTML, junit, tap and GitHub Actions reporters. Vitest will also print related annotation in the CLI if the test fails.

<img src="/annotation-api-cute-puppy-example.png" />

## Scoped Fixtures

The `test.extend` fixtures can now specify the `scope` option: either `file` or `worker`.

```ts
const test = baseTest.extend({
  db: [
    async ({}, use) => {
      // ...setup
      await use(db)
      await db.close()
    },
    { scope: 'worker' },
  ],
})
```

The file fixture is similar to using `beforeAll` and `afterAll` at the top level of the file, but it won't be called if the fixture is not used in any test.

The `worker` fixture is initiated once per worker, but note that by default Vitest creates one worker for every test, so you need to disable [isolation](/config/#isolate) to benefit from it.

## Custom Project Name Colors

You can now set a custom [color](/config/#name) when using `projects`:

::: details Config Example
```ts{6-9,14-17}
export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: {
            label: 'unit',
            color: 'red',
          },
        },
      },
      {
        test: {
          name: {
            label: 'browser',
            color: 'green',
          },
          browser: {
            enabled: true,
            provider: 'playwright',
            instances: [{ browser: 'chromium' }],
          },
        },
      },
    ],
  },
})
```
:::

<img src="/v3-2-custom-colors.png" />

## Custom Browser Locators API

Built-in locators might not be enough to express your application’s needs. Instead of falling back to CSS and losing the retry-ability protection that Vitest provides through its locator API, we now recommend extending locators using the new [`locators.extend` API](/guide/browser/locators#custom-locators).

```ts
import { locators } from '@vitest/browser/context'

locators.extend({
  getByCommentsCount(count: number) {
    return `.comments :text("${count} comments")`
  },
})
```

Return a Playwright [locator string](https://playwright.dev/docs/other-locators) to construct a new locator. Note that string returned from this method will be scoped to the parent locator, if there is one.

Now you can call `getByCommentsCount` on the `page` or any other locator directly:

```ts
await expect.element(page.getByCommentsCount(1)).toBeVisible()
await expect.element(
  page.getByRole('article', { name: 'Hello World' })
    .getByCommentsCount(1)
).toBeVisible()
```

If this method returns a string, then the return value will be converted into a locator, so you can keep chaining it:

```ts
page.getByRole('article', { name: 'Hello World' })
  .getByCommentsCount(1)
  .getByText('comments')
```

This method has access to the current locator context, if there is one (if method is called on the `page`, then context will refer to `page`), so you can chain all locator methods inside:

```ts
import { locators } from '@vitest/browser/context'
import type { Locator } from '@vitest/browser/context'

locators.extend({
  getByCommentsCount(this: Locator, count: number) {
    return this.getByRole('comment')
      .and(this.getByText(`${count} comments`))
  },
})
```

Having access to context also allows you to call regular methods of the locator to define a custom user event:

```ts
import { locators, page } from '@vitest/browser/context'
import type { Locator } from '@vitest/browser/context'

locators.extend({
  clickAndFill(this: Locator, text: string) {
    await this.click()
    await this.fill(text)
  },
})

await page.getByRole('textbox').clickAndFill('Hello World')
```

Please, refer to the [`locators.extend` API](/guide/browser/locators#custom-locators) for more information.

## Explicit Resource Management in `vi.spyOn` and `vi.fn`

In environments that support [Explicit Resource Management](https://github.com/tc39/proposal-explicit-resource-management), you can use `using` instead of `const` to automatically call `mockRestore` on any mocked function when the containing block is exited. This is especially useful for spied methods:

```ts
it('calls console.log', () => {
  using spy = vi.spyOn(console, 'log').mockImplementation(() => {})
  debug('message')
  expect(spy).toHaveBeenCalled()
})

// console.log is restored here
```

## Test `signal` API

Vitest now provides an [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) object to the test body. You can use it to stop any resource that supports this Web API.

The signal is aborted when test times out, another test fails and [`--bail` flag](/config/#bail) is set to a non-zero value, or the user presses Ctrl+C in the terminal.

For example, you can stop a `fetch` request when tests are interrupted:

```ts
it('stop request when test times out', async ({ signal }) => {
  await fetch('/heavy-resource', { signal })
}, 2000)
```

## Coverage V8 AST-aware remapping

Vitest now uses `ast-v8-to-istanbul` package developed by one of the Vitest maintainers, [AriPerkkio](https://github.com/AriPerkkio). This brings v8 coverage report in line with istanbul, but has a better performance! Enable this feature by setting [`coverage.experimentalAstAwareRemapping`](/config/#coverage-experimentalastawareremapping) to `true`.

We are planning to make this the default remapping mode in the next major. The old `v8-to-istanbul` will be removed completely. Feel free to join discussion at https://github.com/vitest-dev/vitest/issues/7928.

## `watchTriggerPatterns` Option

When you edit a file, Vitest is smart enough to rerun only tests that import this file. Unfortunately, Vitest static analysis respects only static and dynamic `import` statement. If you are reading a file or starting a separate process, Vitest will ignore changes to related files.

With `watchTriggerPatterns` option you can configure which tests to rerun depending on the file that was changed. For example, to always rerun `mailers` tests when a template is changed, add a trigger pattern:

```ts
export default defineConfig({
  test: {
    watchTriggerPatterns: [
      {
        pattern: /^src\/templates\/(.*)\.(ts|html|txt)$/,
        testsToRun: (file, match) => {
          return `api/tests/mailers/${match[2]}.test.ts`
        },
      },
    ],
  },
})
```

## The New Multi-Purpose `Matchers` Type

Vitest now has a `Matchers` type that you can extend to add type support for all your custom matchers in one place. This type affects all these use cases:

- `expect().to*`
- `expect.to*`
- `expect.extend({ to* })`

For example, to have a type-safe `toBeFoo` matcher, you can write something like this:

```ts twoslash
import { expect } from 'vitest'

interface CustomMatchers<R = unknown> {
  toBeFoo: (arg: string) => R
}

declare module 'vitest' {
  interface Matchers<T = any> extends CustomMatchers<T> {}
}

expect.extend({
  toBeFoo(actual, arg) {
    //            ^?
    // ... implementation
    return {
      pass: true,
      message: () => '',
    }
  }
})

expect('foo').toBeFoo('foo')
expect.toBeFoo('foo')
```

## `sequence.groupOrder`

The new [`sequence.groupOrder`](/config/#grouporder) option controls the order in which the project runs its tests when using multiple [projects](/guide/projects).

- Projects with the same group order number will run together, and groups are run from lowest to highest.
- If you don’t set this option, all projects run in parallel.
- If several projects use the same group order, they will run at the same time.

::: details Example
Consider this example:

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: 'slow',
          sequence: {
            groupOrder: 0,
          },
        },
      },
      {
        test: {
          name: 'fast',
          sequence: {
            groupOrder: 0,
          },
        },
      },
      {
        test: {
          name: 'flaky',
          sequence: {
            groupOrder: 1,
          },
        },
      },
    ],
  },
})
```

Tests in these projects will run in this order:

```
 0. slow  |
          |> running together
 0. fast  |

 1. flaky |> runs after slow and fast alone
```
:::

----

The complete list of changes is at the [Vitest 3.2 Changelog](https://github.com/vitest-dev/vitest/releases/tag/v3.2.0).
````

## File: docs/blog/vitest-3.md
````markdown
---
title: Vitest 3.0 is out!
author:
  name: The Vitest Team
date: 2025-01-17
sidebar: false
head:
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: Announcing Vitest 3.0
  - - meta
    - property: og:image
      content: https://vitest.dev/og-vitest-3.jpg
  - - meta
    - property: og:url
      content: https://vitest.dev/blog/vitest-3
  - - meta
    - property: og:description
      content: Vitest 3.0 Release Announcement
  - - meta
    - name: twitter:card
      content: summary_large_image
---

# Vitest 3.0 is out!

_January 17, 2025_

![Vitest 3 Announcement Cover Image](/og-vitest-3.jpg)

We released Vitest 2 half a year ago. We have seen huge adoption, from 4,8M to 7,7M weekly npm downloads. Our ecosystem is growing rapidly too. Among others, [Storybook new testing capabilities powered by our vscode extension and browser mode](https://storybook.js.org/docs/writing-tests/test-addon) and Matt Pocock is building [Evalite](https://www.evalite.dev/), a tool for evaluating AI-powered apps, on top of Vitest.

## The next Vitest major is here

Today, we are thrilled to announce Vitest 3! This is a big one!

Quick links:

- [Docs](/)
- Translations: [简体中文](https://cn.vitest.dev/)
- [Migration Guide](/guide/migration)
- [GitHub Changelog](https://github.com/vitest-dev/vitest/releases/tag/v3.0.0)

If you've not used Vitest before, we suggest reading the [Getting Started](/guide/) and [Features](/guide/features) guides first.

We extend our gratitude to the over [550 contributors to Vitest Core](https://github.com/vitest-dev/vitest/graphs/contributors) and to the maintainers and contributors of Vitest integrations, tools, and translations who have helped us develop this new major release. We encourage you to get involved and help us improve Vitest for the entire ecosystem. Learn more at our [Contributing Guide](https://github.com/vitest-dev/vitest/blob/main/CONTRIBUTING.md).

To get started, we suggest helping [triage issues](https://github.com/vitest-dev/vitest/issues), [review PRs](https://github.com/vitest-dev/vitest/pulls), send failing tests PRs based on open issues, and support others in [Discussions](https://github.com/vitest-dev/vitest/discussions) and Vitest Land's [help forum](https://discord.com/channels/917386801235247114/1057959614160851024). If you'd like to talk to us, join our [Discord community](http://chat.vitest.dev/) and say hi on the [#contributing channel](https://discord.com/channels/917386801235247114/1057959614160851024).

For the latest news about the Vitest ecosystem and Vitest core, follow us on [Bluesky](https://bsky.app/profile/vitest.dev) or [Mastodon](https://webtoo.ls/@vitest).

## Reporter Updates

[@AriPerkkio](https://github.com/ariperkkio) rewrote how Vitest reports the test run. You should see less flicker and more stable output!

<div class="flex align-center justify-center">
  <video controls>
    <source src="/new-reporter.webm" type="video/webm">
  </video>
</div>

Alongside this change, we also redesign the public reporter API (the `reporters` field) making the [lifecycle](/advanced/api/reporters) easier to understand.

You can follow the design process in [#7069](https://github.com/vitest-dev/vitest/pull/7069) PR. It was a hard fight trying to reverse-engineer the previous `onTaskUpdate` API to make this new elegant lifecycle possible.

<div class="flex align-center justify-center">
  <img src="/on-task-update.gif" />
</div>

## Inline Workspace

Rejoice! No more separate files to define your [workspace](/guide/projects) - specify an array of projects using the `workspace` field in your `vitest.config` file:

```jsx
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    workspace: ['packages/*'],
  },
})
```

## Multi-Browser Configuration

Vitest 3 introduces a more performant way to run your browser tests in different browsers or setups. Instead of using the workspace, you can define an array of [`instances`](/guide/browser/multiple-setups) to run your browser tests in different setups:

```jsx
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    browser: {
      provider: 'playwright',
      instances: [
        {
          browser: 'chromium',
          launch: { devtools: true },
        },
        {
          browser: 'firefox',
          setupFiles: ['./setup.firefox.ts'],
          provide: {
            secret: 'my-secret',
          },
        },
      ],
    }
  }
})
```

The main advantage of `instances` over `workspace` is a better caching strategy - Vitest creates only a single Vite server to serve files, which are processed only once, independent of how many browsers you test.

This release also improves the documentation of Browser Mode features and introduces separate guides for [Playwright](/guide/browser/playwright) and [WebdriverIO](/guide/browser/webdriverio) hopefully making it easier to configure.

## Filtering by Location

In Vitest 3 you can now filter tests by line number.

```
$ vitest basic/foo.js:10
$ vitest ./basic/foo.js:10
```

A big shutout to [@mzhubail](https://github.com/mzhubail) for implementing this feature.

## Public API

We have redesigned the public API available from `vitest/node` and are planning to remove the experimental tag in the next minor version. This release also includes brand new documentation covering all exposed methods.

<img alt="Vitest API documentation" img-light src="/docs-api-light.png">
<img alt="Vitest API documentation" img-dark src="/docs-api-dark.png">

## Breaking changes

Vitest 3 has a few small breaking changes that should not affect most users, but we advise reviewing the detailed [Migration Guide](/guide/migration.html#vitest-3) before upgrading.

The complete list of changes is at the [Vitest 3 Changelog](https://github.com/vitest-dev/vitest/releases/tag/v3.0.0).

## Acknowledgments

Vitest 3 is the result of countless hours by the [Vitest team](/team) and our contributors. We appreciate the individuals and companies sponsoring Vitest development. [Vladimir](https://github.com/sheremet-va) and [Hiroshi](https://github.com/hi-ogawa) joined [VoidZero](https://voidzero.dev) to work on Vite and Vitest full-time, and [StackBlitz](https://stackblitz.com/) hired [Ari](https://github.com/ariperkkio) to invest more time in Vitest development. A shout-out to [NuxtLabs](https://nuxtlabs.com), [Zammad](https://zammad.com), and sponsors on [Vitest's GitHub Sponsors](https://github.com/sponsors/vitest-dev) and [Vitest's Open Collective](https://opencollective.com/vitest).
````

## File: docs/config/index.md
````markdown
---
outline: deep
---

# Configuring Vitest

If you are using Vite and have a `vite.config` file, Vitest will read it to match with the plugins and setup as your Vite app. If you want to have a different configuration for testing or your main app doesn't rely on Vite specifically, you could either:

- Create `vitest.config.ts`, which will have the higher priority and will **override** the configuration from `vite.config.ts` (Vitest supports all conventional JS and TS extensions, but doesn't support `json`) - it means all options in your `vite.config` will be **ignored**
- Pass `--config` option to CLI, e.g. `vitest --config ./path/to/vitest.config.ts`
- Use `process.env.VITEST` or `mode` property on `defineConfig` (will be set to `test`/`benchmark` if not overridden with `--mode`) to conditionally apply different configuration in `vite.config.ts`

To configure `vitest` itself, add `test` property in your Vite config. You'll also need to add a reference to Vitest types using a [triple slash command](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-) at the top of your config file, if you are importing `defineConfig` from `vite` itself.

::: details Open Config Examples
Using `defineConfig` from `vite` you should follow this:

```ts [vite.config.js]
/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    // ... Specify options here.
  },
})
```

The `<reference types="vitest" />` will stop working in Vitest 4, but you can already start migrating to `vitest/config`:

```ts [vite.config.js]
/// <reference types="vitest/config" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    // ... Specify options here.
  },
})
```

Using `defineConfig` from `vitest/config` you should follow this:

```ts [vitest.config.js]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // ... Specify options here.
  },
})
```

You can retrieve Vitest's default options to expand them if needed:

```ts [vitest.config.js]
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, 'packages/template/*'],
  },
})
```

When using a separate `vitest.config.js`, you can also extend Vite's options from another config file if needed:

```ts [vitest.config.js]
import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, defineConfig({
  test: {
    exclude: ['packages/template/*'],
  },
}))
```

If your Vite config is defined as a function, you can define the config like this:

```ts [vitest.config.js]
import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default defineConfig(configEnv => mergeConfig(
  viteConfig(configEnv),
  defineConfig({
    test: {
      exclude: ['packages/template/*'],
    },
  })
))
```
:::

::: warning
_All listed options_ on this page are located within a `test` property inside the configuration:

```ts [vitest.config.js]
export default defineConfig({
  test: {
    exclude: [],
  },
})
```

Since Vitest uses Vite config, you can also use any configuration option from [Vite](https://vitejs.dev/config/). For example, `define` to define global variables, or `resolve.alias` to define aliases - these options should be defined on the top level, _not_ within a `test` property.

Configuration options that are not supported inside a [project](/guide/projects) config have <NonProjectOption /> sign next to them. This means they can only be set in the root Vitest config.
:::

### include

- **Type:** `string[]`
- **Default:** `['**/*.{test,spec}.?(c|m)[jt]s?(x)']`
- **CLI:** `vitest [...include]`, `vitest **/*.test.js`

A list of glob patterns that match your test files.

::: tip NOTE
When using coverage, Vitest automatically adds test files `include` patterns to coverage's default `exclude` patterns. See [`coverage.exclude`](#coverage-exclude).
:::

### exclude

- **Type:** `string[]`
- **Default:** `['**/node_modules/**', '**/dist/**', '**/cypress/**', '**/.{idea,git,cache,output,temp}/**', '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*']`
- **CLI:** `vitest --exclude "**/excluded-file"`

A list of glob patterns that should be excluded from your test files.

::: warning
This option does not affect coverage. If you need to remove certain files from the coverage report, use [`coverage.exclude`](#coverage-exclude).

This is the only option that doesn't override your configuration if you provide it with a CLI flag. All glob patterns added via `--exclude` flag will be added to the config's `exclude`.
:::

### includeSource

- **Type:** `string[]`
- **Default:** `[]`

Include globs for in-source test files.

When defined, Vitest will run all matched files with `import.meta.vitest` inside.

### name

- **Type:** `string | { label: string, color?: LabelColor }`

Assign a custom name to the test project or Vitest process. The name will be visible in the CLI and UI, and available in the Node.js API via [`project.name`](/advanced/api/test-project#name).

Color used by CLI and UI can be changed by providing an object with `color` property.

### server {#server}

- **Type:** `{ sourcemap?, deps?, ... }`

Vite-Node server options.

#### server.sourcemap

- **Type:** `'inline' | boolean`
- **Default:** `'inline'`

Inject inline source map to modules.

#### server.debug

- **Type:** `{ dumpModules?, loadDumppedModules? }`

Vite-Node debugger options.

#### server.debug.dumpModules

- **Type:** `boolean | string`

Dump the transformed module to filesystem. Passing a string will dump to the specified path.

#### server.debug.loadDumppedModules

- **Type:** `boolean`

Read dumped module from filesystem whenever exists. Useful for debugging by modifying the dump result from the filesystem.

#### server.deps

- **Type:** `{ external?, inline?, ... }`

Handling for dependencies resolution.

#### server.deps.external

- **Type:** `(string | RegExp)[]`
- **Default:** `[/\/node_modules\//]`

Externalize means that Vite will bypass the package to the native Node. Externalized dependencies will not be applied to Vite's transformers and resolvers, so they do not support HMR on reload. By default, all packages inside `node_modules` are externalized.

These options support package names as they are written in `node_modules` or specified inside [`deps.moduleDirectories`](#deps-moduledirectories). For example, package `@company/some-name` located inside `packages/some-name` should be specified as `some-name`, and `packages` should be included in `deps.moduleDirectories`. Basically, Vitest always checks the file path, not the actual package name.

If regexp is used, Vitest calls it on the _file path_, not the package name.

#### server.deps.inline

- **Type:** `(string | RegExp)[] | true`
- **Default:** `[]`

Vite will process inlined modules. This could be helpful to handle packages that ship `.js` in ESM format (that Node can't handle).

If `true`, every dependency will be inlined. All dependencies, specified in [`ssr.noExternal`](https://vitejs.dev/guide/ssr.html#ssr-externals) will be inlined by default.

#### server.deps.fallbackCJS

- **Type** `boolean`
- **Default:** `false`

When a dependency is a valid ESM package, try to guess the cjs version based on the path. This might be helpful, if a dependency has the wrong ESM file.

This might potentially cause some misalignment if a package has different logic in ESM and CJS mode.

#### server.deps.cacheDir

- **Type** `string`
- **Default**: `'node_modules/.vite'`

Directory to save cache files.

### deps

- **Type:** `{ optimizer?, ... }`

Handling for dependencies resolution.

#### deps.optimizer {#deps-optimizer}

- **Type:** `{ ssr?, web? }`
- **See also:** [Dep Optimization Options](https://vitejs.dev/config/dep-optimization-options.html)

Enable dependency optimization. If you have a lot of tests, this might improve their performance.

When Vitest encounters the external library listed in `include`, it will be bundled into a single file using esbuild and imported as a whole module. This is good for several reasons:

- Importing packages with a lot of imports is expensive. By bundling them into one file we can save a lot of time
- Importing UI libraries is expensive because they are not meant to run inside Node.js
- Your `alias` configuration is now respected inside bundled packages
- Code in your tests is running closer to how it's running in the browser

Be aware that only packages in `deps.optimizer?.[mode].include` option are bundled (some plugins populate this automatically, like Svelte). You can read more about available options in [Vite](https://vitejs.dev/config/dep-optimization-options.html) docs (Vitest doesn't support `disable` and `noDiscovery` options). By default, Vitest uses `optimizer.web` for `jsdom` and `happy-dom` environments, and `optimizer.ssr` for `node` and `edge` environments, but it is configurable by [`transformMode`](#testtransformmode).

This options also inherits your `optimizeDeps` configuration (for web Vitest will extend `optimizeDeps`, for ssr - `ssr.optimizeDeps`). If you redefine `include`/`exclude` option in `deps.optimizer` it will extend your `optimizeDeps` when running tests. Vitest automatically removes the same options from `include`, if they are listed in `exclude`.

::: tip
You will not be able to edit your `node_modules` code for debugging, since the code is actually located in your `cacheDir` or `test.cache.dir` directory. If you want to debug with `console.log` statements, edit it directly or force rebundling with `deps.optimizer?.[mode].force` option.
:::

#### deps.optimizer.{mode}.enabled

- **Type:** `boolean`
- **Default:** `false`

Enable dependency optimization.

#### deps.web  {#deps-web}

- **Type:** `{ transformAssets?, ... }`

Options that are applied to external files when transform mode is set to `web`. By default, `jsdom` and `happy-dom` use `web` mode, while `node` and `edge` environments use `ssr` transform mode, so these options will have no affect on files inside those environments.

Usually, files inside `node_modules` are externalized, but these options also affect files in [`server.deps.external`](#server-deps-external).

#### deps.web.transformAssets

- **Type:** `boolean`
- **Default:** `true`

Should Vitest process assets (.png, .svg, .jpg, etc) files and resolve them like Vite does in the browser.

This module will have a default export equal to the path to the asset, if no query is specified.

::: warning
At the moment, this option only works with [`vmThreads`](#vmthreads) and [`vmForks`](#vmforks) pools.
:::

#### deps.web.transformCss

- **Type:** `boolean`
- **Default:** `true`

Should Vitest process CSS (.css, .scss, .sass, etc) files and resolve them like Vite does in the browser.

If CSS files are disabled with [`css`](#css) options, this option will just silence `ERR_UNKNOWN_FILE_EXTENSION` errors.

::: warning
At the moment, this option only works with [`vmThreads`](#vmthreads) and [`vmForks`](#vmforks) pools.
:::

#### deps.web.transformGlobPattern

- **Type:** `RegExp | RegExp[]`
- **Default:** `[]`

Regexp pattern to match external files that should be transformed.

By default, files inside `node_modules` are externalized and not transformed, unless it's CSS or an asset, and corresponding option is not disabled.

::: warning
At the moment, this option only works with [`vmThreads`](#vmthreads) and [`vmForks`](#vmforks) pools.
:::

#### deps.interopDefault

- **Type:** `boolean`
- **Default:** `true`

Interpret CJS module's default as named exports. Some dependencies only bundle CJS modules and don't use named exports that Node.js can statically analyze when a package is imported using `import` syntax instead of `require`. When importing such dependencies in Node environment using named exports, you will see this error:

```
import { read } from 'fs-jetpack';
         ^^^^
SyntaxError: Named export 'read' not found. The requested module 'fs-jetpack' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export.
```

Vitest doesn't do static analysis, and cannot fail before your running code, so you will most likely see this error when running tests, if this feature is disabled:

```
TypeError: createAsyncThunk is not a function
TypeError: default is not a function
```

By default, Vitest assumes you are using a bundler to bypass this and will not fail, but you can disable this behaviour manually, if you code is not processed.

#### deps.moduleDirectories

- **Type:** `string[]`
- **Default**: `['node_modules']`

A list of directories that should be treated as module directories. This config option affects the behavior of [`vi.mock`](/api/vi#vi-mock): when no factory is provided and the path of what you are mocking matches one of the `moduleDirectories` values, Vitest will try to resolve the mock by looking for a `__mocks__` folder in the [root](#root) of the project.

This option will also affect if a file should be treated as a module when externalizing dependencies. By default, Vitest imports external modules with native Node.js bypassing Vite transformation step.

Setting this option will _override_ the default, if you wish to still search `node_modules` for packages include it along with any other options:

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    deps: {
      moduleDirectories: ['node_modules', path.resolve('../../packages')],
    }
  },
})
```

### runner

- **Type**: `VitestRunnerConstructor`
- **Default**: `node`, when running tests, or `benchmark`, when running benchmarks

Path to a custom test runner. This is an advanced feature and should be used with custom library runners. You can read more about it in [the documentation](/advanced/runner).

### benchmark

- **Type:** `{ include?, exclude?, ... }`

Options used when running `vitest bench`.

#### benchmark.include

- **Type:** `string[]`
- **Default:** `['**/*.{bench,benchmark}.?(c|m)[jt]s?(x)']`

Include globs for benchmark test files

#### benchmark.exclude

- **Type:** `string[]`
- **Default:** `['node_modules', 'dist', '.idea', '.git', '.cache']`

Exclude globs for benchmark test files

#### benchmark.includeSource

- **Type:** `string[]`
- **Default:** `[]`

Include globs for in-source benchmark test files. This option is similar to [`includeSource`](#includesource).

When defined, Vitest will run all matched files with `import.meta.vitest` inside.

#### benchmark.reporters

- **Type:** `Arrayable<BenchmarkBuiltinReporters | Reporter>`
- **Default:** `'default'`

Custom reporter for output. Can contain one or more built-in report names, reporter instances, and/or paths to custom reporters.

#### benchmark.outputFile

Deprecated in favor of `benchmark.outputJson`.

#### benchmark.outputJson {#benchmark-outputJson}

- **Type:** `string | undefined`
- **Default:** `undefined`

A file path to store the benchmark result, which can be used for `--compare` option later.

For example:

```sh
# save main branch's result
git checkout main
vitest bench --outputJson main.json

# change a branch and compare against main
git checkout feature
vitest bench --compare main.json
```

#### benchmark.compare {#benchmark-compare}

- **Type:** `string | undefined`
- **Default:** `undefined`

A file path to a previous benchmark result to compare against current runs.

### alias

- **Type:** `Record<string, string> | Array<{ find: string | RegExp, replacement: string, customResolver?: ResolverFunction | ResolverObject }>`

Define custom aliases when running inside tests. They will be merged with aliases from `resolve.alias`.

::: warning
Vitest uses Vite SSR primitives to run tests which has [certain pitfalls](https://vitejs.dev/guide/ssr.html#ssr-externals).

1. Aliases affect only modules imported directly with an `import` keyword by an [inlined](#server-deps-inline) module (all source code is inlined by default).
2. Vitest does not support aliasing `require` calls.
3. If you are aliasing an external dependency (e.g., `react` -> `preact`), you may want to alias the actual `node_modules` packages instead to make it work for externalized dependencies. Both [Yarn](https://classic.yarnpkg.com/en/docs/cli/add/#toc-yarn-add-alias) and [pnpm](https://pnpm.io/aliases/) support aliasing via the `npm:` prefix.
:::

### globals

- **Type:** `boolean`
- **Default:** `false`
- **CLI:** `--globals`, `--globals=false`

By default, `vitest` does not provide global APIs for explicitness. If you prefer to use the APIs globally like Jest, you can pass the `--globals` option to CLI or add `globals: true` in the config.

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
  },
})
```

To get TypeScript working with the global APIs, add `vitest/globals` to the `types` field in your `tsconfig.json`

```json [tsconfig.json]
{
  "compilerOptions": {
    "types": ["vitest/globals"]
  }
}
```

If you have redefined your [`typeRoots`](https://www.typescriptlang.org/tsconfig/#typeRoots) to include more types in your compilation, you will have to add back the `node_modules` to make `vitest/globals` discoverable.

```json [tsconfig.json]
{
  "compilerOptions": {
    "typeRoots": ["./types", "./node_modules/@types", "./node_modules"],
    "types": ["vitest/globals"]
  }
}
```

If you are already using [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) in your project, you can also use it directly for auto importing those APIs.

```ts [vitest.config.js]
import { defineConfig } from 'vitest/config'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    AutoImport({
      imports: ['vitest'],
      dts: true, // generate TypeScript declaration
    }),
  ],
})
```

### environment

- **Type:** `'node' | 'jsdom' | 'happy-dom' | 'edge-runtime' | string`
- **Default:** `'node'`
- **CLI:** `--environment=<env>`

The environment that will be used for testing. The default environment in Vitest
is a Node.js environment. If you are building a web application, you can use
browser-like environment through either [`jsdom`](https://github.com/jsdom/jsdom)
or [`happy-dom`](https://github.com/capricorn86/happy-dom) instead.
If you are building edge functions, you can use [`edge-runtime`](https://edge-runtime.vercel.app/packages/vm) environment

::: tip
You can also use [Browser Mode](/guide/browser/) to run integration or unit tests in the browser without mocking the environment.
:::

By adding a `@vitest-environment` docblock or comment at the top of the file,
you can specify another environment to be used for all tests in that file:

Docblock style:

```js
/**
 * @vitest-environment jsdom
 */

test('use jsdom in this test file', () => {
  const element = document.createElement('div')
  expect(element).not.toBeNull()
})
```

Comment style:

```js
// @vitest-environment happy-dom

test('use happy-dom in this test file', () => {
  const element = document.createElement('div')
  expect(element).not.toBeNull()
})
```

For compatibility with Jest, there is also a `@jest-environment`:

```js
/**
 * @jest-environment jsdom
 */

test('use jsdom in this test file', () => {
  const element = document.createElement('div')
  expect(element).not.toBeNull()
})
```

If you are running Vitest with [`--isolate=false`](#isolate) flag, your tests will be run in this order: `node`, `jsdom`, `happy-dom`, `edge-runtime`, `custom environments`. Meaning, that every test with the same environment is grouped, but is still running sequentially.

Starting from 0.23.0, you can also define custom environment. When non-builtin environment is used, Vitest will try to load package `vitest-environment-${name}`. That package should export an object with the shape of `Environment`:

```ts [environment.js]
import type { Environment } from 'vitest'

export default <Environment>{
  name: 'custom',
  transformMode: 'ssr',
  setup() {
    // custom setup
    return {
      teardown() {
        // called after all tests with this env have been run
      }
    }
  }
}
```

Vitest also exposes `builtinEnvironments` through `vitest/environments` entry, in case you just want to extend it. You can read more about extending environments in [our guide](/guide/environment).

::: tip
jsdom environment exposes `jsdom` global variable equal to the current [JSDOM](https://github.com/jsdom/jsdom) instance. If you want TypeScript to recognize it, you can add `vitest/jsdom` to your `tsconfig.json` when you use this environment:

```json [tsconfig.json]
{
  "compilerOptions": {
    "types": ["vitest/jsdom"]
  }
}
```
:::

### environmentOptions

- **Type:** `Record<'jsdom' | string, unknown>`
- **Default:** `{}`

These options are passed down to `setup` method of current [`environment`](#environment). By default, you can configure only JSDOM options, if you are using it as your test environment.

### environmentMatchGlobs

- **Type:** `[string, EnvironmentName][]`
- **Default:** `[]`

::: danger DEPRECATED
This API was deprecated in Vitest 3. Use [projects](/guide/projects) to define different configurations instead.

```ts
export default defineConfig({
  test: {
    environmentMatchGlobs: [ // [!code --]
      ['./*.jsdom.test.ts', 'jsdom'], // [!code --]
    ], // [!code --]
    projects: [ // [!code ++]
      { // [!code ++]
        extends: true, // [!code ++]
        test: { // [!code ++]
          environment: 'jsdom', // [!code ++]
        }, // [!code ++]
      }, // [!code ++]
    ], // [!code ++]
  },
})
```
:::

Automatically assign environment based on globs. The first match will be used.

For example:

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environmentMatchGlobs: [
      // all tests in tests/dom will run in jsdom
      ['tests/dom/**', 'jsdom'],
      // all tests in tests/ with .edge.test.ts will run in edge-runtime
      ['**\/*.edge.test.ts', 'edge-runtime'],
      // ...
    ]
  }
})
```

### poolMatchGlobs {#poolmatchglobs}

- **Type:** `[string, 'threads' | 'forks' | 'vmThreads' | 'vmForks' | 'typescript'][]`
- **Default:** `[]`

::: danger DEPRECATED
This API was deprecated in Vitest 3. Use [projects](/guide/projects) to define different configurations instead:

```ts
export default defineConfig({
  test: {
    poolMatchGlobs: [ // [!code --]
      ['./*.threads.test.ts', 'threads'], // [!code --]
    ], // [!code --]
    projects: [ // [!code ++]
      { // [!code ++]
        test: { // [!code ++]
          extends: true, // [!code ++]
          pool: 'threads', // [!code ++]
        }, // [!code ++]
      }, // [!code ++]
    ], // [!code ++]
  },
})
```
:::

Automatically assign pool in which tests will run based on globs. The first match will be used.

For example:

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    poolMatchGlobs: [
      // all tests in "worker-specific" directory will run inside a worker as if you enabled `--pool=threads` for them,
      ['**/tests/worker-specific/**', 'threads'],
      // run all tests in "browser" directory in an actual browser
      ['**/tests/browser/**', 'browser'],
      // all other tests will run based on "browser.enabled" and "threads" options, if you didn't specify other globs
      // ...
    ]
  }
})
```

### update<NonProjectOption />

- **Type:** `boolean`
- **Default:** `false`
- **CLI:** `-u`, `--update`, `--update=false`

Update snapshot files. This will update all changed snapshots and delete obsolete ones.

### watch<NonProjectOption />

- **Type:** `boolean`
- **Default:** `!process.env.CI && process.stdin.isTTY`
- **CLI:** `-w`, `--watch`, `--watch=false`

Enable watch mode

In interactive environments, this is the default, unless `--run` is specified explicitly.

In CI, or when run from a non-interactive shell, "watch" mode is not the default, but can be enabled explicitly with this flag.

### watchTriggerPatterns <Version>3.2.0</Version><NonProjectOption /> {#watchtriggerpatterns}

- **Type:** `WatcherTriggerPattern[]`

Vitest reruns tests based on the module graph which is populated by static and dynamic `import` statements. However, if you are reading from the file system or fetching from a proxy, then Vitest cannot detect those dependencies.

To correctly rerun those tests, you can define a regex pattern and a function that retuns a list of test files to run.

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    watchTriggerPatterns: [
      {
        pattern: /^src\/(mailers|templates)\/(.*)\.(ts|html|txt)$/,
        testToRun: (id, match) => {
          // relative to the root value
          return `./api/tests/mailers/${match[2]}.test.ts`
        },
      },
    ],
  },
})
```

::: warning
Returned files should be either absolute or relative to the root. Note that this is a global option, and it cannot be used inside of [project](/guide/projects) configs.
:::

### root

- **Type:** `string`
- **CLI:** `-r <path>`, `--root=<path>`

Project root

### dir

- **Type:** `string`
- **CLI:** `--dir=<path>`
- **Default:** same as `root`

Base directory to scan for the test files. You can specify this option to speed up test discovery if your root covers the whole project

### reporters<NonProjectOption />

- **Type:** `Reporter | Reporter[]`
- **Default:** `'default'`
- **CLI:** `--reporter=<name>`, `--reporter=<name1> --reporter=<name2>`

Custom [reporters](/guide/reporters) for output. Reporters can be [a Reporter instance](https://github.com/vitest-dev/vitest/blob/main/packages/vitest/src/node/types/reporter.ts), a string to select built-in reporters, or a path to a custom implementation (e.g. `'./path/to/reporter.ts'`, `'@scope/reporter'`).

### outputFile<NonProjectOption />

- **Type:** `string | Record<string, string>`
- **CLI:** `--outputFile=<path>`, `--outputFile.json=./path`

Write test results to a file when the `--reporter=json`, `--reporter=html` or `--reporter=junit` option is also specified.
By providing an object instead of a string you can define individual outputs when using multiple reporters.

### pool<NonProjectOption /> {#pool}

- **Type:** `'threads' | 'forks' | 'vmThreads' | 'vmForks'`
- **Default:** `'forks'`
- **CLI:** `--pool=threads`

Pool used to run tests in.

#### threads<NonProjectOption />

Enable multi-threading using [tinypool](https://github.com/tinylibs/tinypool) (a lightweight fork of [Piscina](https://github.com/piscinajs/piscina)). When using threads you are unable to use process related APIs such as `process.chdir()`. Some libraries written in native languages, such as Prisma, `bcrypt` and `canvas`, have problems when running in multiple threads and run into segfaults. In these cases it is advised to use `forks` pool instead.

#### forks<NonProjectOption />

Similar as `threads` pool but uses `child_process` instead of `worker_threads` via [tinypool](https://github.com/tinylibs/tinypool). Communication between tests and main process is not as fast as with `threads` pool. Process related APIs such as `process.chdir()` are available in `forks` pool.

#### vmThreads<NonProjectOption />

Run tests using [VM context](https://nodejs.org/api/vm.html) (inside a sandboxed environment) in a `threads` pool.

This makes tests run faster, but the VM module is unstable when running [ESM code](https://github.com/nodejs/node/issues/37648). Your tests will [leak memory](https://github.com/nodejs/node/issues/33439) - to battle that, consider manually editing [`poolOptions.vmThreads.memoryLimit`](#pooloptions-vmthreads-memorylimit) value.

::: warning
Running code in a sandbox has some advantages (faster tests), but also comes with a number of disadvantages.

- The globals within native modules, such as (`fs`, `path`, etc), differ from the globals present in your test environment. As a result, any error thrown by these native modules will reference a different Error constructor compared to the one used in your code:

```ts
try {
  fs.writeFileSync('/doesnt exist')
}
catch (err) {
  console.log(err instanceof Error) // false
}
```

- Importing ES modules caches them indefinitely which introduces memory leaks if you have a lot of contexts (test files). There is no API in Node.js that clears that cache.
- Accessing globals [takes longer](https://github.com/nodejs/node/issues/31658) in a sandbox environment.

Please, be aware of these issues when using this option. Vitest team cannot fix any of the issues on our side.
:::

#### vmForks<NonProjectOption />

Similar as `vmThreads` pool but uses `child_process` instead of `worker_threads` via [tinypool](https://github.com/tinylibs/tinypool). Communication between tests and the main process is not as fast as with `vmThreads` pool. Process related APIs such as `process.chdir()` are available in `vmForks` pool. Please be aware that this pool has the same pitfalls listed in `vmThreads`.

### poolOptions<NonProjectOption /> {#pooloptions}

- **Type:** `Record<'threads' | 'forks' | 'vmThreads' | 'vmForks', {}>`
- **Default:** `{}`

#### poolOptions.threads

Options for `threads` pool.

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    poolOptions: {
      threads: {
        // Threads related options here
      }
    }
  }
})
```

##### poolOptions.threads.maxThreads<NonProjectOption />

- **Type:** `number | string`
- **Default:** _available CPUs_

Maximum number or percentage of threads. You can also use `VITEST_MAX_THREADS` environment variable.

##### poolOptions.threads.minThreads<NonProjectOption />

- **Type:** `number | string`
- **Default:** _available CPUs_

Minimum number or percentage of threads. You can also use `VITEST_MIN_THREADS` environment variable.

##### poolOptions.threads.singleThread

- **Type:** `boolean`
- **Default:** `false`

Run all tests with the same environment inside a single worker thread. This will disable built-in module isolation (your source code or [inlined](#server-deps-inline) code will still be reevaluated for each test), but can improve test performance.

:::warning
Even though this option will force tests to run one after another, this option is different from Jest's `--runInBand`. Vitest uses workers not only for running tests in parallel, but also to provide isolation. By disabling this option, your tests will run sequentially, but in the same global context, so you must provide isolation yourself.

This might cause all sorts of issues, if you are relying on global state (frontend frameworks usually do) or your code relies on environment to be defined separately for each test. But can be a speed boost for your tests (up to 3 times faster), that don't necessarily rely on global state or can easily bypass that.
:::

##### poolOptions.threads.useAtomics<NonProjectOption />

- **Type:** `boolean`
- **Default:** `false`

Use Atomics to synchronize threads.

This can improve performance in some cases, but might cause segfault in older Node versions.

##### poolOptions.threads.isolate

- **Type:** `boolean`
- **Default:** `true`

Isolate environment for each test file.

##### poolOptions.threads.execArgv<NonProjectOption />

- **Type:** `string[]`
- **Default:** `[]`

Pass additional arguments to `node` in the threads. See [Command-line API | Node.js](https://nodejs.org/docs/latest/api/cli.html) for more information.

:::warning
Be careful when using, it as some options may crash worker, e.g. --prof, --title. See https://github.com/nodejs/node/issues/41103.
:::

#### poolOptions.forks

Options for `forks` pool.

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    poolOptions: {
      forks: {
        // Forks related options here
      }
    }
  }
})
```

##### poolOptions.forks.maxForks<NonProjectOption />

- **Type:** `number | string`
- **Default:** _available CPUs_

Maximum number or percentage of forks. You can also use `VITEST_MAX_FORKS` environment variable.

##### poolOptions.forks.minForks<NonProjectOption />

- **Type:** `number | string`
- **Default:** _available CPUs_

Minimum number or percentage of forks. You can also use `VITEST_MIN_FORKS` environment variable.

##### poolOptions.forks.isolate

- **Type:** `boolean`
- **Default:** `true`

Isolate environment for each test file.

##### poolOptions.forks.singleFork

- **Type:** `boolean`
- **Default:** `false`

Run all tests with the same environment inside a single child process. This will disable built-in module isolation (your source code or [inlined](#server-deps-inline) code will still be reevaluated for each test), but can improve test performance.

:::warning
Even though this option will force tests to run one after another, this option is different from Jest's `--runInBand`. Vitest uses child processes not only for running tests in parallel, but also to provide isolation. By disabling this option, your tests will run sequentially, but in the same global context, so you must provide isolation yourself.

This might cause all sorts of issues, if you are relying on global state (frontend frameworks usually do) or your code relies on environment to be defined separately for each test. But can be a speed boost for your tests (up to 3 times faster), that don't necessarily rely on global state or can easily bypass that.
:::

##### poolOptions.forks.execArgv<NonProjectOption />

- **Type:** `string[]`
- **Default:** `[]`

Pass additional arguments to `node` process in the child processes. See [Command-line API | Node.js](https://nodejs.org/docs/latest/api/cli.html) for more information.

:::warning
Be careful when using, it as some options may crash worker, e.g. --prof, --title. See https://github.com/nodejs/node/issues/41103.
:::

#### poolOptions.vmThreads

Options for `vmThreads` pool.

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    poolOptions: {
      vmThreads: {
        // VM threads related options here
      }
    }
  }
})
```

##### poolOptions.vmThreads.maxThreads<NonProjectOption />

- **Type:** `number | string`
- **Default:** _available CPUs_

Maximum number or percentage of threads. You can also use `VITEST_MAX_THREADS` environment variable.

##### poolOptions.vmThreads.minThreads<NonProjectOption />

- **Type:** `number | string`
- **Default:** _available CPUs_

Minimum number or percentage of threads. You can also use `VITEST_MIN_THREADS` environment variable.

##### poolOptions.vmThreads.memoryLimit<NonProjectOption />

- **Type:** `string | number`
- **Default:** `1 / CPU Cores`

Specifies the memory limit for workers before they are recycled. This value heavily depends on your environment, so it's better to specify it manually instead of relying on the default.

::: tip
The implementation is based on Jest's [`workerIdleMemoryLimit`](https://jestjs.io/docs/configuration#workeridlememorylimit-numberstring).

The limit can be specified in a number of different ways and whatever the result is `Math.floor` is used to turn it into an integer value:

- `<= 1` - The value is assumed to be a percentage of system memory. So 0.5 sets the memory limit of the worker to half of the total system memory
- `\> 1` - Assumed to be a fixed byte value. Because of the previous rule if you wanted a value of 1 byte (I don't know why) you could use 1.1.
- With units
  - `50%` - As above, a percentage of total system memory
  - `100KB`, `65MB`, etc - With units to denote a fixed memory limit.
    - `K` / `KB` - Kilobytes (x1000)
    - `KiB` - Kibibytes (x1024)
    - `M` / `MB` - Megabytes
    - `MiB` - Mebibytes
    - `G` / `GB` - Gigabytes
    - `GiB` - Gibibytes
:::

::: warning
Percentage based memory limit [does not work on Linux CircleCI](https://github.com/jestjs/jest/issues/11956#issuecomment-1212925677) workers due to incorrect system memory being reported.
:::

##### poolOptions.vmThreads.useAtomics<NonProjectOption />

- **Type:** `boolean`
- **Default:** `false`

Use Atomics to synchronize threads.

This can improve performance in some cases, but might cause segfault in older Node versions.

##### poolOptions.vmThreads.execArgv<NonProjectOption />

- **Type:** `string[]`
- **Default:** `[]`

Pass additional arguments to `node` process in the VM context. See [Command-line API | Node.js](https://nodejs.org/docs/latest/api/cli.html) for more information.

:::warning
Be careful when using, it as some options may crash worker, e.g. --prof, --title. See https://github.com/nodejs/node/issues/41103.
:::

#### poolOptions.vmForks<NonProjectOption />

Options for `vmForks` pool.

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    poolOptions: {
      vmForks: {
        // VM forks related options here
      }
    }
  }
})
```

##### poolOptions.vmForks.maxForks<NonProjectOption />

- **Type:** `number | string`
- **Default:** _available CPUs_

Maximum number or percentage of forks. You can also use `VITEST_MAX_FORKS` environment variable.

##### poolOptions.vmForks.minForks<NonProjectOption />

- **Type:** `number | string`
- **Default:** _available CPUs_

Minimum number or percentage of forks. You can also use `VITEST_MIN_FORKS` environment variable.

##### poolOptions.vmForks.memoryLimit<NonProjectOption />

- **Type:** `string | number`
- **Default:** `1 / CPU Cores`

Specifies the memory limit for workers before they are recycled. This value heavily depends on your environment, so it's better to specify it manually instead of relying on the default. How the value is calculated is described in [`poolOptions.vmThreads.memoryLimit`](#pooloptions-vmthreads-memorylimit)

##### poolOptions.vmForks.execArgv<NonProjectOption />

- **Type:** `string[]`
- **Default:** `[]`

Pass additional arguments to `node` process in the VM context. See [Command-line API | Node.js](https://nodejs.org/docs/latest/api/cli.html) for more information.

:::warning
Be careful when using, it as some options may crash worker, e.g. --prof, --title. See https://github.com/nodejs/node/issues/41103.
:::

### fileParallelism<NonProjectOption /> {#fileparallelism}

- **Type:** `boolean`
- **Default:** `true`
- **CLI:** `--no-file-parallelism`, `--fileParallelism=false`

Should all test files run in parallel. Setting this to `false` will override `maxWorkers` and `minWorkers` options to `1`.

::: tip
This option doesn't affect tests running in the same file. If you want to run those in parallel, use `concurrent` option on [describe](/api/#describe-concurrent) or via [a config](#sequence-concurrent).
:::

### maxWorkers<NonProjectOption /> {#maxworkers}

- **Type:** `number | string`

Maximum number or percentage of workers to run tests in. `poolOptions.{threads,vmThreads}.maxThreads`/`poolOptions.forks.maxForks` has higher priority.

### minWorkers<NonProjectOption /> {#minworkers}

- **Type:** `number | string`

Minimum number or percentage of workers to run tests in. `poolOptions.{threads,vmThreads}.minThreads`/`poolOptions.forks.minForks` has higher priority.

### testTimeout

- **Type:** `number`
- **Default:** `5_000` in Node.js, `15_000` if `browser.enabled` is `true`
- **CLI:** `--test-timeout=5000`, `--testTimeout=5000`

Default timeout of a test in milliseconds. Use `0` to disable timeout completely.

### hookTimeout

- **Type:** `number`
- **Default:** `10_000` in Node.js, `30_000` if `browser.enabled` is `true`
- **CLI:** `--hook-timeout=10000`, `--hookTimeout=10000`

Default timeout of a hook in milliseconds. Use `0` to disable timeout completely.

### teardownTimeout<NonProjectOption />

- **Type:** `number`
- **Default:** `10000`
- **CLI:** `--teardown-timeout=5000`, `--teardownTimeout=5000`

Default timeout to wait for close when Vitest shuts down, in milliseconds

### silent<NonProjectOption />

- **Type:** `boolean | 'passed-only'`
- **Default:** `false`
- **CLI:** `--silent`, `--silent=false`

Silent console output from tests.

Use `'passed-only'` to see logs from failing tests only. Logs from failing tests are printed after a test has finished.

### setupFiles

- **Type:** `string | string[]`

Path to setup files. They will be run before each test file.

:::info
Editing a setup file will automatically trigger a rerun of all tests.
:::

You can use `process.env.VITEST_POOL_ID` (integer-like string) inside to distinguish between threads.

:::tip
Note, that if you are running [`--isolate=false`](#isolate), this setup file will be run in the same global scope multiple times. Meaning, that you are accessing the same global object before each test, so make sure you are not doing the same thing more than you need.
:::

For example, you may rely on a global variable:

```ts
import { config } from '@some-testing-lib'

if (!globalThis.defined) {
  config.plugins = [myCoolPlugin]
  computeHeavyThing()
  globalThis.defined = true
}

// hooks are reset before each suite
afterEach(() => {
  cleanup()
})

globalThis.resetBeforeEachTest = true
```

### provide <Version>2.1.0</Version> {#provide}

- **Type:** `Partial<ProvidedContext>`

Define values that can be accessed inside your tests using `inject` method.

:::code-group
```ts [vitest.config.js]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    provide: {
      API_KEY: '123',
    },
  },
})
```
```ts [api.test.js]
import { expect, inject, test } from 'vitest'

test('api key is defined', () => {
  expect(inject('API_KEY')).toBe('123')
})
```
:::

::: warning
Properties have to be strings and values need to be [serializable](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) because this object will be transferred between different processes.
:::

::: tip
If you are using TypeScript, you will need to augment `ProvidedContext` type for type safe access:

```ts [vitest.shims.d.ts]
declare module 'vitest' {
  export interface ProvidedContext {
    API_KEY: string
  }
}

// mark this file as a module so augmentation works correctly
export {}
```
:::

### globalSetup

- **Type:** `string | string[]`

Path to global setup files, relative to project root.

A global setup file can either export named functions `setup` and `teardown` or a `default` function that returns a teardown function ([example](https://github.com/vitest-dev/vitest/blob/main/test/global-setup/vitest.config.ts)).

::: info
Multiple globalSetup files are possible. setup and teardown are executed sequentially with teardown in reverse order.
:::

::: warning
Global setup runs only if there is at least one running test. This means that global setup might start running during watch mode after test file is changed (the test file will wait for global setup to finish before running).

Beware that the global setup is running in a different global scope, so your tests don't have access to variables defined here. However, you can pass down serializable data to tests via [`provide`](#provide) method:

:::code-group
```ts [example.test.js]
import { inject } from 'vitest'

inject('wsPort') === 3000
```
```ts [globalSetup.ts <Version>3.0.0</Version>]
import type { TestProject } from 'vitest/node'

export default function setup(project: TestProject) {
  project.provide('wsPort', 3000)
}

declare module 'vitest' {
  export interface ProvidedContext {
    wsPort: number
  }
}
```
```ts [globalSetup.ts <Version>2.0.0</Version>]
import type { GlobalSetupContext } from 'vitest/node'

export default function setup({ provide }: GlobalSetupContext) {
  provide('wsPort', 3000)
}

declare module 'vitest' {
  export interface ProvidedContext {
    wsPort: number
  }
}
```
:::

Since Vitest 3, you can define a custom callback function to be called when Vitest reruns tests. If the function is asynchronous, the runner will wait for it to complete before executing tests. Note that you cannot destruct the `project` like `{ onTestsRerun }` because it relies on the context.

```ts [globalSetup.ts]
import type { TestProject } from 'vitest/node'

export default function setup(project: TestProject) {
  project.onTestsRerun(async () => {
    await restartDb()
  })
}
```

### forceRerunTriggers<NonProjectOption />

- **Type**: `string[]`
- **Default:** `['**/package.json/**', '**/vitest.config.*/**', '**/vite.config.*/**']`

Glob pattern of file paths that will trigger the whole suite rerun. When paired with the `--changed` argument will run the whole test suite if the trigger is found in the git diff.

Useful if you are testing calling CLI commands, because Vite cannot construct a module graph:

```ts
test('execute a script', async () => {
  // Vitest cannot rerun this test, if content of `dist/index.js` changes
  await execa('node', ['dist/index.js'])
})
```

::: tip
Make sure that your files are not excluded by [`server.watch.ignored`](https://vitejs.dev/config/server-options.html#server-watch).
:::

### coverage<NonProjectOption />

You can use [`v8`](https://v8.dev/blog/javascript-code-coverage), [`istanbul`](https://istanbul.js.org/) or [a custom coverage solution](/guide/coverage#custom-coverage-provider) for coverage collection.

You can provide coverage options to CLI with dot notation:

```sh
npx vitest --coverage.enabled --coverage.provider=istanbul --coverage.all
```

::: warning
If you are using coverage options with dot notation, don't forget to specify `--coverage.enabled`. Do not provide a single `--coverage` option in that case.
:::

#### coverage.provider

- **Type:** `'v8' | 'istanbul' | 'custom'`
- **Default:** `'v8'`
- **CLI:** `--coverage.provider=<provider>`

Use `provider` to select the tool for coverage collection.

#### coverage.enabled

- **Type:** `boolean`
- **Default:** `false`
- **Available for providers:** `'v8' | 'istanbul'`
- **CLI:** `--coverage.enabled`, `--coverage.enabled=false`

Enables coverage collection. Can be overridden using `--coverage` CLI option.

#### coverage.include

- **Type:** `string[]`
- **Default:** `['**']`
- **Available for providers:** `'v8' | 'istanbul'`
- **CLI:** `--coverage.include=<path>`, `--coverage.include=<path1> --coverage.include=<path2>`

List of files included in coverage as glob patterns

#### coverage.extension

- **Type:** `string | string[]`
- **Default:** `['.js', '.cjs', '.mjs', '.ts', '.mts', '.tsx', '.jsx', '.vue', '.svelte', '.marko', '.astro']`
- **Available for providers:** `'v8' | 'istanbul'`
- **CLI:** `--coverage.extension=<extension>`, `--coverage.extension=<extension1> --coverage.extension=<extension2>`

#### coverage.exclude

- **Type:** `string[]`
- **Default:**
```js
[
  'coverage/**',
  'dist/**',
  '**/node_modules/**',
  '**/[.]**',
  'packages/*/test?(s)/**',
  '**/*.d.ts',
  '**/virtual:*',
  '**/__x00__*',
  '**/\x00*',
  'cypress/**',
  'test?(s)/**',
  'test?(-*).?(c|m)[jt]s?(x)',
  '**/*{.,-}{test,spec,bench,benchmark}?(-d).?(c|m)[jt]s?(x)',
  '**/__tests__/**',
  '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*',
  '**/vitest.{workspace,projects}.[jt]s?(on)',
  '**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}',
]
```
- **Available for providers:** `'v8' | 'istanbul'`
- **CLI:** `--coverage.exclude=<path>`, `--coverage.exclude=<path1> --coverage.exclude=<path2>`

List of files excluded from coverage as glob patterns.

This option overrides all default options. Extend the default options when adding new patterns to ignore:

```ts
import { coverageConfigDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      exclude: ['**/custom-pattern/**', ...coverageConfigDefaults.exclude]
    },
  },
})
```

::: tip NOTE
Vitest automatically adds test files `include` patterns to the `coverage.exclude`.
It's not possible to show coverage of test files.
:::

#### coverage.all

- **Type:** `boolean`
- **Default:** `true`
- **Available for providers:** `'v8' | 'istanbul'`
- **CLI:** `--coverage.all`, `--coverage.all=false`

Whether to include all files, including the untested ones into report.

#### coverage.clean

- **Type:** `boolean`
- **Default:** `true`
- **Available for providers:** `'v8' | 'istanbul'`
- **CLI:** `--coverage.clean`, `--coverage.clean=false`

Clean coverage results before running tests

#### coverage.cleanOnRerun

- **Type:** `boolean`
- **Default:** `true`
- **Available for providers:** `'v8' | 'istanbul'`
- **CLI:** `--coverage.cleanOnRerun`, `--coverage.cleanOnRerun=false`

Clean coverage report on watch rerun. Set to `false` to preserve coverage results from previous run in watch mode.

#### coverage.reportsDirectory

- **Type:** `string`
- **Default:** `'./coverage'`
- **Available for providers:** `'v8' | 'istanbul'`
- **CLI:** `--coverage.reportsDirectory=<path>`

::: warning
Vitest will delete this directory before running tests if `coverage.clean` is enabled (default value).
:::

Directory to write coverage report to.

To preview the coverage report in the output of [HTML reporter](/guide/reporters.html#html-reporter), this option must be set as a sub-directory of the html report directory (for example `./html/coverage`).

#### coverage.reporter

- **Type:** `string | string[] | [string, {}][]`
- **Default:** `['text', 'html', 'clover', 'json']`
- **Available for providers:** `'v8' | 'istanbul'`
- **CLI:** `--coverage.reporter=<reporter>`, `--coverage.reporter=<reporter1> --coverage.reporter=<reporter2>`

Coverage reporters to use. See [istanbul documentation](https://istanbul.js.org/docs/advanced/alternative-reporters/) for detailed list of all reporters. See [`@types/istanbul-reporter`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/276d95e4304b3670eaf6e8e5a7ea9e265a14e338/types/istanbul-reports/index.d.ts) for details about reporter specific options.

The reporter has three different types:

- A single reporter: `{ reporter: 'html' }`
- Multiple reporters without options: `{ reporter: ['html', 'json'] }`
- A single or multiple reporters with reporter options:
  <!-- eslint-skip -->
  ```ts
  {
    reporter: [
      ['lcov', { 'projectRoot': './src' }],
      ['json', { 'file': 'coverage.json' }],
      ['text']
    ]
  }
  ```

You can also pass custom coverage reporters. See [Guide - Custom Coverage Reporter](/guide/coverage#custom-coverage-reporter) for more information.

<!-- eslint-skip -->
```ts
  {
    reporter: [
      // Specify reporter using name of the NPM package
      '@vitest/custom-coverage-reporter',
      ['@vitest/custom-coverage-reporter', { someOption: true }],

      // Specify reporter using local path
      '/absolute/path/to/custom-reporter.cjs',
      ['/absolute/path/to/custom-reporter.cjs', { someOption: true }],
    ]
  }
```

You can check your coverage report in Vitest UI: check [Vitest UI Coverage](/guide/coverage#vitest-ui) for more details.

#### coverage.reportOnFailure {#coverage-reportonfailure}

- **Type:** `boolean`
- **Default:** `false`
- **Available for providers:** `'v8' | 'istanbul'`
- **CLI:** `--coverage.reportOnFailure`, `--coverage.reportOnFailure=false`

Generate coverage report even when tests fail.

#### coverage.allowExternal

- **Type:** `boolean`
- **Default:** `false`
- **Available for providers:** `'v8' | 'istanbul'`
- **CLI:** `--coverage.allowExternal`, `--coverage.allowExternal=false`

Collect coverage of files outside the [project `root`](#root).

#### coverage.excludeAfterRemap <Version>2.1.0</Version> {#coverage-exclude-after-remap}

- **Type:** `boolean`
- **Default:** `false`
- **Available for providers:** `'v8' | 'istanbul'`
- **CLI:** `--coverage.excludeAfterRemap`, `--coverage.excludeAfterRemap=false`

Apply exclusions again after coverage has been remapped to original sources.
This is useful when your source files are transpiled and may contain source maps of non-source files.

Use this option when you are seeing files that show up in report even if they match your `coverage.exclude` patterns.

#### coverage.skipFull

- **Type:** `boolean`
- **Default:** `false`
- **Available for providers:** `'v8' | 'istanbul'`
- **CLI:** `--coverage.skipFull`, `--coverage.skipFull=false`

Do not show files with 100% statement, branch, and function coverage.

#### coverage.thresholds

Options for coverage thresholds.

If a threshold is set to a positive number, it will be interpreted as the minimum percentage of coverage required. For example, setting the lines threshold to `90` means that 90% of lines must be covered.

If a threshold is set to a negative number, it will be treated as the maximum number of uncovered items allowed. For example, setting the lines threshold to `-10` means that no more than 10 lines may be uncovered.

<!-- eslint-skip -->
```ts
{
  coverage: {
    thresholds: {
      // Requires 90% function coverage
      functions: 90,

      // Require that no more than 10 lines are uncovered
      lines: -10,
    }
  }
}
```

##### coverage.thresholds.lines

- **Type:** `number`
- **Available for providers:** `'v8' | 'istanbul'`
- **CLI:** `--coverage.thresholds.lines=<number>`

Global threshold for lines.

##### coverage.thresholds.functions

- **Type:** `number`
- **Available for providers:** `'v8' | 'istanbul'`
- **CLI:** `--coverage.thresholds.functions=<number>`

Global threshold for functions.

##### coverage.thresholds.branches

- **Type:** `number`
- **Available for providers:** `'v8' | 'istanbul'`
- **CLI:** `--coverage.thresholds.branches=<number>`

Global threshold for branches.

##### coverage.thresholds.statements

- **Type:** `number`
- **Available for providers:** `'v8' | 'istanbul'`
- **CLI:** `--coverage.thresholds.statements=<number>`

Global threshold for statements.

##### coverage.thresholds.perFile

- **Type:** `boolean`
- **Default:** `false`
- **Available for providers:** `'v8' | 'istanbul'`
- **CLI:** `--coverage.thresholds.perFile`, `--coverage.thresholds.perFile=false`

Check thresholds per file.

##### coverage.thresholds.autoUpdate

- **Type:** `boolean`
- **Default:** `false`
- **Available for providers:** `'v8' | 'istanbul'`
- **CLI:** `--coverage.thresholds.autoUpdate=<boolean>`

Update all threshold values `lines`, `functions`, `branches` and `statements` to configuration file when current coverage is better than the configured thresholds.
This option helps to maintain thresholds when coverage is improved.

##### coverage.thresholds.100

- **Type:** `boolean`
- **Default:** `false`
- **Available for providers:** `'v8' | 'istanbul'`
- **CLI:** `--coverage.thresholds.100`, `--coverage.thresholds.100=false`

Sets global thresholds to 100.
Shortcut for `--coverage.thresholds.lines 100 --coverage.thresholds.functions 100 --coverage.thresholds.branches 100 --coverage.thresholds.statements 100`.

##### coverage.thresholds[glob-pattern]

- **Type:** `{ statements?: number functions?: number branches?: number lines?: number }`
- **Default:** `undefined`
- **Available for providers:** `'v8' | 'istanbul'`

Sets thresholds for files matching the glob pattern.

::: tip NOTE
Vitest counts all files, including those covered by glob-patterns, into the global coverage thresholds.
This is different from Jest behavior.
:::

<!-- eslint-skip -->
```ts
{
  coverage: {
    thresholds: {
      // Thresholds for all files
      functions: 95,
      branches: 70,

      // Thresholds for matching glob pattern
      'src/utils/**.ts': {
        statements: 95,
        functions: 90,
        branches: 85,
        lines: 80,
      },

      // Files matching this pattern will only have lines thresholds set.
      // Global thresholds are not inherited.
      '**/math.ts': {
        lines: 100,
      }
    }
  }
}
```

##### coverage.thresholds[glob-pattern].100 <Version>2.1.0</Version> {#coverage-thresholds-glob-pattern-100}

- **Type:** `boolean`
- **Default:** `false`
- **Available for providers:** `'v8' | 'istanbul'`

Sets thresholds to 100 for files matching the glob pattern.

<!-- eslint-skip -->
```ts
{
  coverage: {
    thresholds: {
      // Thresholds for all files
      functions: 95,
      branches: 70,

      // Thresholds for matching glob pattern
      'src/utils/**.ts': { 100: true },
      '**/math.ts': { 100: true }
    }
  }
}
```

#### coverage.ignoreEmptyLines

- **Type:** `boolean`
- **Default:** `true` (`false` in v1)
- **Available for providers:** `'v8'`
- **CLI:** `--coverage.ignoreEmptyLines=<boolean>`

Ignore empty lines, comments and other non-runtime code, e.g. Typescript types. Requires `experimentalAstAwareRemapping: false`.

This option works only if the used compiler removes comments and other non-runtime code from the transpiled code.
By default Vite uses ESBuild which removes comments and Typescript types from `.ts`, `.tsx` and `.jsx` files.

If you want to apply ESBuild to other files as well, define them in [`esbuild` options](https://vitejs.dev/config/shared-options.html#esbuild):

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  esbuild: {
    // Transpile all files with ESBuild to remove comments from code coverage.
    // Required for `test.coverage.ignoreEmptyLines` to work:
    include: ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.ts', '**/*.tsx'],
  },
  test: {
    coverage: {
      provider: 'v8',
      ignoreEmptyLines: true,
    },
  },
})
```
#### coverage.experimentalAstAwareRemapping

- **Type:** `boolean`
- **Default:** `false`
- **Available for providers:** `'v8'`
- **CLI:** `--coverage.experimentalAstAwareRemapping=<boolean>`

Remap coverage with experimental AST based analysis. Provides more accurate results compared to default mode.

#### coverage.ignoreClassMethods

- **Type:** `string[]`
- **Default:** `[]`
- **Available for providers:** `'istanbul'`
- **CLI:** `--coverage.ignoreClassMethods=<method>`

Set to array of class method names to ignore for coverage.
See [istanbul documentation](https://github.com/istanbuljs/nyc#ignoring-methods) for more information.

#### coverage.watermarks

- **Type:**
<!-- eslint-skip -->
```ts
{
  statements?: [number, number],
  functions?: [number, number],
  branches?: [number, number],
  lines?: [number, number]
}
```

- **Default:**
<!-- eslint-skip -->
```ts
{
  statements: [50, 80],
  functions: [50, 80],
  branches: [50, 80],
  lines: [50, 80]
}
```

- **Available for providers:** `'v8' | 'istanbul'`
- **CLI:** `--coverage.watermarks.statements=50,80`, `--coverage.watermarks.branches=50,80`

Watermarks for statements, lines, branches and functions. See [istanbul documentation](https://github.com/istanbuljs/nyc#high-and-low-watermarks) for more information.

#### coverage.processingConcurrency

- **Type:** `boolean`
- **Default:** `Math.min(20, os.availableParallelism?.() ?? os.cpus().length)`
- **Available for providers:** `'v8' | 'istanbul'`
- **CLI:** `--coverage.processingConcurrency=<number>`

Concurrency limit used when processing the coverage results.

#### coverage.customProviderModule

- **Type:** `string`
- **Available for providers:** `'custom'`
- **CLI:** `--coverage.customProviderModule=<path or module name>`

Specifies the module name or path for the custom coverage provider module. See [Guide - Custom Coverage Provider](/guide/coverage#custom-coverage-provider) for more information.

### testNamePattern<NonProjectOption />

- **Type** `string | RegExp`
- **CLI:** `-t <pattern>`, `--testNamePattern=<pattern>`, `--test-name-pattern=<pattern>`

Run tests with full names matching the pattern.
If you add `OnlyRunThis` to this property, tests not containing the word `OnlyRunThis` in the test name will be skipped.

```js
import { expect, test } from 'vitest'

// run
test('OnlyRunThis', () => {
  expect(true).toBe(true)
})

// skipped
test('doNotRun', () => {
  expect(true).toBe(true)
})
```

### open<NonProjectOption />

- **Type:** `boolean`
- **Default:** `!process.env.CI`
- **CLI:** `--open`, `--open=false`

Open Vitest UI (WIP)

### api

- **Type:** `boolean | number`
- **Default:** `false`
- **CLI:** `--api`, `--api.port`, `--api.host`, `--api.strictPort`

Listen to port and serve API. When set to true, the default port is 51204

### browser <Badge type="warning">experimental</Badge> {#browser}

- **Default:** `{ enabled: false }`
- **CLI:** `--browser=<name>`, `--browser.name=chrome --browser.headless`

Configuration for running browser tests. Please, refer to the ["Browser Config Reference"](/guide/browser/config) article.

::: warning
This is an experimental feature. Breaking changes might not follow SemVer, please pin Vitest's version when using it.
:::

### clearMocks

- **Type:** `boolean`
- **Default:** `false`

Will call [`.mockClear()`](/api/mock#mockclear) on all spies before each test.
This will clear mock history without affecting mock implementations.

### mockReset

- **Type:** `boolean`
- **Default:** `false`

Will call [`.mockReset()`](/api/mock#mockreset) on all spies before each test.
This will clear mock history and reset each implementation to its original.

### restoreMocks

- **Type:** `boolean`
- **Default:** `false`

Will call [`.mockRestore()`](/api/mock#mockrestore) on all spies before each test.
This will clear mock history, restore each implementation to its original, and restore original descriptors of spied-on objects..

### unstubEnvs {#unstubenvs}

- **Type:** `boolean`
- **Default:** `false`

Will call [`vi.unstubAllEnvs`](/api/vi#vi-unstuballenvs) before each test.

### unstubGlobals {#unstubglobals}

- **Type:** `boolean`
- **Default:** `false`

Will call [`vi.unstubAllGlobals`](/api/vi#vi-unstuballglobals) before each test.

### testTransformMode {#testtransformmode}

 - **Type:** `{ web?, ssr? }`

 Determine the transform method for all modules imported inside a test that matches the glob pattern. By default, relies on the environment. For example, tests with JSDOM environment will process all files with `ssr: false` flag and tests with Node environment process all modules with `ssr: true`.

 #### testTransformMode.ssr

 - **Type:** `string[]`
 - **Default:** `[]`

 Use SSR transform pipeline for all modules inside specified tests.<br>
 Vite plugins will receive `ssr: true` flag when processing those files.

 #### testTransformMode&#46;web

 - **Type:** `string[]`
 - **Default:** `[]`

 First do a normal transform pipeline (targeting browser), then do a SSR rewrite to run the code in Node.<br>
 Vite plugins will receive `ssr: false` flag when processing those files.

### snapshotFormat<NonProjectOption />

- **Type:** `PrettyFormatOptions`

Format options for snapshot testing. These options are passed down to [`pretty-format`](https://www.npmjs.com/package/pretty-format).

::: tip
Beware that `plugins` field on this object will be ignored.

If you need to extend snapshot serializer via pretty-format plugins, please, use [`expect.addSnapshotSerializer`](/api/expect#expect-addsnapshotserializer) API or [snapshotSerializers](#snapshotserializers) option.
:::

### snapshotSerializers<NonProjectOption /> {#snapshotserializers}

- **Type:** `string[]`
- **Default:** `[]`

A list of paths to snapshot serializer modules for snapshot testing, useful if you want add custom snapshot serializers. See [Custom Serializer](/guide/snapshot#custom-serializer) for more information.

### resolveSnapshotPath<NonProjectOption />

- **Type**: `(testPath: string, snapExtension: string, context: { config: SerializedConfig }) => string`
- **Default**: stores snapshot files in `__snapshots__` directory

Overrides default snapshot path. For example, to store snapshots next to test files:

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    resolveSnapshotPath: (testPath, snapExtension) => testPath + snapExtension,
  },
})
```

### allowOnly

- **Type**: `boolean`
- **Default**: `!process.env.CI`
- **CLI:** `--allowOnly`, `--allowOnly=false`

Allow tests and suites that are marked as only.

### dangerouslyIgnoreUnhandledErrors<NonProjectOption />

- **Type**: `boolean`
- **Default**: `false`
- **CLI:** `--dangerouslyIgnoreUnhandledErrors` `--dangerouslyIgnoreUnhandledErrors=false`

Ignore any unhandled errors that occur.

### passWithNoTests<NonProjectOption />

- **Type**: `boolean`
- **Default**: `false`
- **CLI:** `--passWithNoTests`, `--passWithNoTests=false`

Vitest will not fail, if no tests will be found.

### logHeapUsage

- **Type**: `boolean`
- **Default**: `false`
- **CLI:** `--logHeapUsage`, `--logHeapUsage=false`

Show heap usage after each test. Useful for debugging memory leaks.

### css

- **Type**: `boolean | { include?, exclude?, modules? }`

Configure if CSS should be processed. When excluded, CSS files will be replaced with empty strings to bypass the subsequent processing. CSS Modules will return a proxy to not affect runtime.

#### css.include

- **Type**: `RegExp | RegExp[]`
- **Default**: `[]`

RegExp pattern for files that should return actual CSS and will be processed by Vite pipeline.

:::tip
To process all CSS files, use `/.+/`.
:::

#### css.exclude

- **Type**: `RegExp | RegExp[]`
- **Default**: `[]`

RegExp pattern for files that will return an empty CSS file.

#### css.modules

- **Type**: `{ classNameStrategy? }`
- **Default**: `{}`

#### css.modules.classNameStrategy

- **Type**: `'stable' | 'scoped' | 'non-scoped'`
- **Default**: `'stable'`

If you decide to process CSS files, you can configure if class names inside CSS modules should be scoped. You can choose one of the options:

- `stable`: class names will be generated as `_${name}_${hashedFilename}`, which means that generated class will stay the same, if CSS content is changed, but will change, if the name of the file is modified, or file is moved to another folder. This setting is useful, if you use snapshot feature.
- `scoped`: class names will be generated as usual, respecting `css.modules.generateScopedName` method, if you have one and CSS processing is enabled. By default, filename will be generated as `_${name}_${hash}`, where hash includes filename and content of the file.
- `non-scoped`: class names will not be hashed.

::: warning
By default, Vitest exports a proxy, bypassing CSS Modules processing. If you rely on CSS properties on your classes, you have to enable CSS processing using `include` option.
:::

### maxConcurrency

- **Type**: `number`
- **Default**: `5`
- **CLI**: `--max-concurrency=10`, `--maxConcurrency=10`

A number of tests that are allowed to run at the same time marked with `test.concurrent`.

Test above this limit will be queued to run when available slot appears.

### cache<NonProjectOption />

- **Type**: `false`
- **CLI**: `--no-cache`, `--cache=false`

Use this option if you want to disable the cache feature. At the moment Vitest stores cache for test results to run the longer and failed tests first.

The cache directory is controlled by the Vite's [`cacheDir`](https://vitejs.dev/config/shared-options.html#cachedir) option:

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  cacheDir: 'custom-folder/.vitest'
})
```

You can limit the directory only for Vitest by using `process.env.VITEST`:

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  cacheDir: process.env.VITEST ? 'custom-folder/.vitest' : undefined
})
```

### sequence

- **Type**: `{ sequencer?, shuffle?, seed?, hooks?, setupFiles?, groupOrder }`

Options for how tests should be sorted.

You can provide sequence options to CLI with dot notation:

```sh
npx vitest --sequence.shuffle --sequence.seed=1000
```

#### sequence.sequencer<NonProjectOption />

- **Type**: `TestSequencerConstructor`
- **Default**: `BaseSequencer`

A custom class that defines methods for sharding and sorting. You can extend `BaseSequencer` from `vitest/node`, if you only need to redefine one of the `sort` and `shard` methods, but both should exist.

Sharding is happening before sorting, and only if `--shard` option is provided.

If [`sequencer.groupOrder`](#grouporder) is specified, the sequencer will be called once for each group and pool.

#### groupOrder <Version>3.2.0</Version> {#grouporder}

- **Type:** `number`
- **Default:** `0`

Controls the order in which this project runs its tests when using multiple [projects](/guide/projects).

- Projects with the same group order number will run together, and groups are run from lowest to highest.
- If you don’t set this option, all projects run in parallel.
- If several projects use the same group order, they will run at the same time.

This setting only affects the order in which projects run, not the order of tests within a project.
To control test isolation or the order of tests inside a project, use the [`isolate`](#isolate) and [`sequence.sequencer`](#sequence-sequencer) options.

::: details Example
Consider this example:

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: 'slow',
          sequence: {
            groupOrder: 0,
          },
        },
      },
      {
        test: {
          name: 'fast',
          sequence: {
            groupOrder: 0,
          },
        },
      },
      {
        test: {
          name: 'flaky',
          sequence: {
            groupOrder: 1,
          },
        },
      },
    ],
  },
})
```

Tests in these projects will run in this order:

```
 0. slow  |
          |> running together
 0. fast  |

 1. flaky |> runs after slow and fast alone
```
:::

#### sequence.shuffle

- **Type**: `boolean | { files?, tests? }`
- **Default**: `false`
- **CLI**: `--sequence.shuffle`, `--sequence.shuffle=false`

If you want files and tests to run randomly, you can enable it with this option, or CLI argument [`--sequence.shuffle`](/guide/cli).

Vitest usually uses cache to sort tests, so long running tests start earlier - this makes tests run faster. If your files and tests will run in random order you will lose this performance improvement, but it may be useful to track tests that accidentally depend on another run previously.

#### sequence.shuffle.files {#sequence-shuffle-files}

- **Type**: `boolean`
- **Default**: `false`
- **CLI**: `--sequence.shuffle.files`, `--sequence.shuffle.files=false`

Whether to randomize files, be aware that long running tests will not start earlier if you enable this option.

#### sequence.shuffle.tests {#sequence-shuffle-tests}

- **Type**: `boolean`
- **Default**: `false`
- **CLI**: `--sequence.shuffle.tests`, `--sequence.shuffle.tests=false`

Whether to randomize tests.

#### sequence.concurrent {#sequence-concurrent}

- **Type**: `boolean`
- **Default**: `false`
- **CLI**: `--sequence.concurrent`, `--sequence.concurrent=false`

If you want tests to run in parallel, you can enable it with this option, or CLI argument [`--sequence.concurrent`](/guide/cli).

#### sequence.seed<NonProjectOption />

- **Type**: `number`
- **Default**: `Date.now()`
- **CLI**: `--sequence.seed=1000`

Sets the randomization seed, if tests are running in random order.

#### sequence.hooks

- **Type**: `'stack' | 'list' | 'parallel'`
- **Default**: `'stack'`
- **CLI**: `--sequence.hooks=<value>`

Changes the order in which hooks are executed.

- `stack` will order "after" hooks in reverse order, "before" hooks will run in the order they were defined
- `list` will order all hooks in the order they are defined
- `parallel` will run hooks in a single group in parallel (hooks in parent suites will still run before the current suite's hooks)

::: tip
This option doesn't affect [`onTestFinished`](/api/#ontestfinished). It is always called in reverse order.
:::

#### sequence.setupFiles {#sequence-setupfiles}

- **Type**: `'list' | 'parallel'`
- **Default**: `'parallel'`
- **CLI**: `--sequence.setupFiles=<value>`

Changes the order in which setup files are executed.

- `list` will run setup files in the order they are defined
- `parallel` will run setup files in parallel

### typecheck

Options for configuring [typechecking](/guide/testing-types) test environment.

#### typecheck.enabled {#typecheck-enabled}

- **Type**: `boolean`
- **Default**: `false`
- **CLI**: `--typecheck`, `--typecheck.enabled`

Enable typechecking alongside your regular tests.

#### typecheck.only {#typecheck-only}

- **Type**: `boolean`
- **Default**: `false`
- **CLI**: `--typecheck.only`

Run only typecheck tests, when typechecking is enabled. When using CLI, this option will automatically enable typechecking.

#### typecheck.checker

- **Type**: `'tsc' | 'vue-tsc' | string`
- **Default**: `tsc`

What tools to use for type checking. Vitest will spawn a process with certain parameters for easier parsing, depending on the type. Checker should implement the same output format as `tsc`.

You need to have a package installed to use typechecker:

- `tsc` requires `typescript` package
- `vue-tsc` requires `vue-tsc` package

You can also pass down a path to custom binary or command name that produces the same output as `tsc --noEmit --pretty false`.

#### typecheck.include

- **Type**: `string[]`
- **Default**: `['**/*.{test,spec}-d.?(c|m)[jt]s?(x)']`

Glob pattern for files that should be treated as test files

#### typecheck.exclude

- **Type**: `string[]`
- **Default**: `['**/node_modules/**', '**/dist/**', '**/cypress/**', '**/.{idea,git,cache,output,temp}/**']`

Glob pattern for files that should not be treated as test files

#### typecheck.allowJs

- **Type**: `boolean`
- **Default**: `false`

Check JS files that have `@ts-check` comment. If you have it enabled in tsconfig, this will not overwrite it.

#### typecheck.ignoreSourceErrors

- **Type**: `boolean`
- **Default**: `false`

Do not fail, if Vitest found errors outside the test files. This will not show you non-test errors at all.

By default, if Vitest finds source error, it will fail test suite.

#### typecheck.tsconfig

- **Type**: `string`
- **Default**: _tries to find closest tsconfig.json_

Path to custom tsconfig, relative to the project root.

#### typecheck.spawnTimeout

- **Type**: `number`
- **Default**: `10_000`

Minimum time in milliseconds it takes to spawn the typechecker.

### slowTestThreshold<NonProjectOption />

- **Type**: `number`
- **Default**: `300`
- **CLI**: `--slow-test-threshold=<number>`, `--slowTestThreshold=<number>`

The number of milliseconds after which a test or suite is considered slow and reported as such in the results.

### chaiConfig {#chaiconfig}

- **Type:** `{ includeStack?, showDiff?, truncateThreshold? }`
- **Default:** `{ includeStack: false, showDiff: true, truncateThreshold: 40 }`

Equivalent to [Chai config](https://github.com/chaijs/chai/blob/4.x.x/lib/chai/config.js).

#### chaiConfig.includeStack

- **Type:** `boolean`
- **Default:** `false`

Influences whether stack trace is included in Assertion error message. Default of false suppresses stack trace in the error message.

#### chaiConfig.showDiff

- **Type:** `boolean`
- **Default:** `true`

Influences whether or not the `showDiff` flag should be included in the thrown AssertionErrors. `false` will always be `false`; `true` will be true when the assertion has requested a diff to be shown.

#### chaiConfig.truncateThreshold

- **Type:** `number`
- **Default:** `40`

Sets length threshold for actual and expected values in assertion errors. If this threshold is exceeded, for example for large data structures, the value is replaced with something like `[ Array(3) ]` or `{ Object (prop1, prop2) }`. Set it to `0` if you want to disable truncating altogether.

This config option affects truncating values in `test.each` titles and inside the assertion error message.

### bail {#bail}

- **Type:** `number`
- **Default:** `0`
- **CLI**: `--bail=<value>`

Stop test execution when given number of tests have failed.

By default Vitest will run all of your test cases even if some of them fail. This may not be desired for CI builds where you are only interested in 100% successful builds and would like to stop test execution as early as possible when test failures occur. The `bail` option can be used to speed up CI runs by preventing it from running more tests when failures have occurred.

### retry {#retry}

- **Type:** `number`
- **Default:** `0`
- **CLI:** `--retry=<value>`

Retry the test specific number of times if it fails.

### onConsoleLog<NonProjectOption />

- **Type**: `(log: string, type: 'stdout' | 'stderr') => boolean | void`

Custom handler for `console.log` in tests. If you return `false`, Vitest will not print the log to the console.

Can be useful for filtering out logs from third-party libraries.

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    onConsoleLog(log: string, type: 'stdout' | 'stderr'): boolean | void {
      return !(log === 'message from third party library' && type === 'stdout')
    },
  },
})
```

### onStackTrace<NonProjectOption /> {#onstacktrace}

- **Type**: `(error: Error, frame: ParsedStack) => boolean | void`

Apply a filtering function to each frame of each stack trace when handling errors. The first argument, `error`, is an object with the same properties as a standard `Error`, but it is not an actual instance.

Can be useful for filtering out stack trace frames from third-party libraries.

```ts
import type { ParsedStack } from 'vitest'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    onStackTrace(error: Error, { file }: ParsedStack): boolean | void {
      // If we've encountered a ReferenceError, show the whole stack.
      if (error.name === 'ReferenceError') {
        return
      }

      // Reject all frames from third party libraries.
      if (file.includes('node_modules')) {
        return false
      }
    },
  },
})
```

### diff

- **Type:** `string`
- **CLI:** `--diff=<path>`

`DiffOptions` object or a path to a module which exports `DiffOptions`. Useful if you want to customize diff display.

For example, as a config object:

```ts
import { defineConfig } from 'vitest/config'
import c from 'picocolors'

export default defineConfig({
  test: {
    diff: {
      aIndicator: c.bold('--'),
      bIndicator: c.bold('++'),
      omitAnnotationLines: true,
    },
  },
})
```

Or as a module:

:::code-group
```ts [vitest.config.js]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    diff: './vitest.diff.ts',
  },
})
```

```ts [vitest.diff.ts]
import type { DiffOptions } from 'vitest'
import c from 'picocolors'

export default {
  aIndicator: c.bold('--'),
  bIndicator: c.bold('++'),
  omitAnnotationLines: true,
} satisfies DiffOptions
```
:::

#### diff.expand

- **Type**: `boolean`
- **Default**: `true`
- **CLI:** `--diff.expand=false`

Expand all common lines.

#### diff.truncateThreshold

- **Type**: `number`
- **Default**: `0`
- **CLI:** `--diff.truncateThreshold=<path>`

The maximum length of diff result to be displayed. Diffs above this threshold will be truncated.
Truncation won't take effect with default value 0.

#### diff.truncateAnnotation

- **Type**: `string`
- **Default**: `'... Diff result is truncated'`
- **CLI:** `--diff.truncateAnnotation=<annotation>`

Annotation that is output at the end of diff result if it's truncated.

#### diff.truncateAnnotationColor

- **Type**: `DiffOptionsColor = (arg: string) => string`
- **Default**: `noColor = (string: string): string => string`

Color of truncate annotation, default is output with no color.

#### diff.printBasicPrototype

- **Type**: `boolean`
- **Default**: `false`

Print basic prototype `Object` and `Array` in diff output

#### diff.maxDepth

- **Type**: `number`
- **Default**: `20` (or `8` when comparing different types)

Limit the depth to recurse when printing nested objects

### fakeTimers

- **Type:** `FakeTimerInstallOpts`

Options that Vitest will pass down to [`@sinon/fake-timers`](https://www.npmjs.com/package/@sinonjs/fake-timers) when using [`vi.useFakeTimers()`](/api/vi#vi-usefaketimers).

#### fakeTimers.now

- **Type:** `number | Date`
- **Default:** `Date.now()`

Installs fake timers with the specified Unix epoch.

#### fakeTimers.toFake

- **Type:** `('setTimeout' | 'clearTimeout' | 'setImmediate' | 'clearImmediate' | 'setInterval' | 'clearInterval' | 'Date' | 'nextTick' | 'hrtime' | 'requestAnimationFrame' | 'cancelAnimationFrame' | 'requestIdleCallback' | 'cancelIdleCallback' | 'performance' | 'queueMicrotask')[]`
- **Default:** everything available globally except `nextTick` and `queueMicrotask`

An array with names of global methods and APIs to fake.

To only mock `setTimeout()` and `nextTick()`, specify this property as `['setTimeout', 'nextTick']`.

Mocking `nextTick` is not supported when running Vitest inside `node:child_process` by using `--pool=forks`. NodeJS uses `process.nextTick` internally in `node:child_process` and hangs when it is mocked. Mocking `nextTick` is supported when running Vitest with `--pool=threads`.

#### fakeTimers.loopLimit

- **Type:** `number`
- **Default:** `10_000`

The maximum number of timers that will be run when calling [`vi.runAllTimers()`](/api/vi#vi-runalltimers).

#### fakeTimers.shouldAdvanceTime

- **Type:** `boolean`
- **Default:** `false`

Tells @sinonjs/fake-timers to increment mocked time automatically based on the real system time shift (e.g. the mocked time will be incremented by 20ms for every 20ms change in the real system time).

#### fakeTimers.advanceTimeDelta

- **Type:** `number`
- **Default:** `20`

Relevant only when using with `shouldAdvanceTime: true`. increment mocked time by advanceTimeDelta ms every advanceTimeDelta ms change in the real system time.

#### fakeTimers.shouldClearNativeTimers

- **Type:** `boolean`
- **Default:** `true`

Tells fake timers to clear "native" (i.e. not fake) timers by delegating to their respective handlers. When disabled, it can lead to potentially unexpected behavior if timers existed prior to starting fake timers session.

### workspace<NonProjectOption /> {#workspace}

::: danger DEPRECATED
This options is deprecated and will be removed in the next major. Please, use [`projects`](#projects) instead.
:::

- **Type:** `string | TestProjectConfiguration[]`
- **CLI:** `--workspace=./file.js`
- **Default:** `vitest.{workspace,projects}.{js,ts,json}` close to the config file or root

Path to a [workspace](/guide/projects) config file relative to [root](#root).

Since Vitest 3, you can also define the workspace array in the root config. If the `workspace` is defined in the config manually, Vitest will ignore the `vitest.workspace` file in the root.

### projects<NonProjectOption /> {#projects}

- **Type:** `TestProjectConfiguration[]`
- **Default:** `[]`

An array of [projects](/guide/projects).

### isolate

- **Type:** `boolean`
- **Default:** `true`
- **CLI:** `--no-isolate`, `--isolate=false`

Run tests in an isolated environment. This option has no effect on `vmThreads` and `vmForks` pools.

Disabling this option might [improve performance](/guide/improving-performance) if your code doesn't rely on side effects (which is usually true for projects with `node` environment).

::: tip
You can disable isolation for specific pools by using [`poolOptions`](#pooloptions) property.
:::

### includeTaskLocation {#includeTaskLocation}

- **Type:** `boolean`
- **Default:** `false`

Should `location` property be included when Vitest API receives tasks in [reporters](#reporters). If you have a lot of tests, this might cause a small performance regression.

The `location` property has `column` and `line` values that correspond to the `test` or `describe` position in the original file.

This option will be auto-enabled if you don't disable it explicitly, and you are running Vitest with:
- [Vitest UI](/guide/ui)
- or using the [Browser Mode](/guide/browser/) without [headless](/guide/browser/#headless) mode
- or using [HTML Reporter](/guide/reporters#html-reporter)

::: tip
This option has no effect if you do not use custom code that relies on this.
:::

### snapshotEnvironment {#snapshotEnvironment}

- **Type:** `string`

Path to a custom snapshot environment implementation. This is useful if you are running your tests in an environment that doesn't support Node.js APIs. This option doesn't have any effect on a browser runner.

This object should have the shape of `SnapshotEnvironment` and is used to resolve and read/write snapshot files:

```ts
export interface SnapshotEnvironment {
  getVersion: () => string
  getHeader: () => string
  resolvePath: (filepath: string) => Promise<string>
  resolveRawPath: (testPath: string, rawPath: string) => Promise<string>
  saveSnapshotFile: (filepath: string, snapshot: string) => Promise<void>
  readSnapshotFile: (filepath: string) => Promise<string | null>
  removeSnapshotFile: (filepath: string) => Promise<void>
}
```

You can extend default `VitestSnapshotEnvironment` from `vitest/snapshot` entry point if you need to overwrite only a part of the API.

::: warning
This is a low-level option and should be used only for advanced cases where you don't have access to default Node.js APIs.

If you just need to configure snapshots feature, use [`snapshotFormat`](#snapshotformat) or [`resolveSnapshotPath`](#resolvesnapshotpath) options.
:::

### env {#env}

- **Type:** `Partial<NodeJS.ProcessEnv>`

Environment variables available on `process.env` and `import.meta.env` during tests. These variables will not be available in the main process (in `globalSetup`, for example).

### expect

- **Type:** `ExpectOptions`

#### expect.requireAssertions

- **Type:** `boolean`
- **Default:** `false`

The same as calling [`expect.hasAssertions()`](/api/expect#expect-hasassertions) at the start of every test. This makes sure that no test will pass accidentally.

::: tip
This only works with Vitest's `expect`. If you use `assert` or `.should` assertions, they will not count, and your test will fail due to the lack of expect assertions.

You can change the value of this by calling `vi.setConfig({ expect: { requireAssertions: false } })`. The config will be applied to every subsequent `expect` call until the `vi.resetConfig` is called manually.
:::

#### expect.poll

Global configuration options for [`expect.poll`](/api/expect#poll). These are the same options you can pass down to `expect.poll(condition, options)`.

##### expect.poll.interval

- **Type:** `number`
- **Default:** `50`

Polling interval in milliseconds

##### expect.poll.timeout

- **Type:** `number`
- **Default:** `1000`

Polling timeout in milliseconds

### printConsoleTrace

- **Type:** `boolean`
- **Default:** `false`

Always print console traces when calling any `console` method. This is useful for debugging.

### attachmentsDir <Version>3.2.0</Version>

- **Type:** `string`
- **Default:** `'.vitest-attachments'`

Directory path for storing attachments created by [`context.annotate`](/guide/test-context#annotate) relative to the project root.
````

## File: docs/guide/browser/assertion-api.md
````markdown
---
title: Assertion API | Browser Mode
---

# Assertion API

Vitest provides a wide range of DOM assertions out of the box forked from [`@testing-library/jest-dom`](https://github.com/testing-library/jest-dom) library with the added support for locators and built-in retry-ability.

::: tip TypeScript Support
If you are using [TypeScript](/guide/browser/#typescript) or want to have correct type hints in `expect`, make sure you have `@vitest/browser/context` referenced somewhere. If you never imported from there, you can add a `reference` comment in any file that's covered by your `tsconfig.json`:

```ts
/// <reference types="@vitest/browser/context" />
```
:::

Tests in the browser might fail inconsistently due to their asynchronous nature. Because of this, it is important to have a way to guarantee that assertions succeed even if the condition is delayed (by a timeout, network request, or animation, for example). For this purpose, Vitest provides retriable assertions out of the box via the [`expect.poll`](/api/expect#poll) and `expect.element` APIs:

```ts
import { expect, test } from 'vitest'
import { page } from '@vitest/browser/context'

test('error banner is rendered', async () => {
  triggerError()

  // This creates a locator that will try to find the element
  // when any of its methods are called.
  // This call by itself doesn't check the existence of the element.
  const banner = page.getByRole('alert', {
    name: /error/i,
  })

  // Vitest provides `expect.element` with built-in retry-ability
  // It will repeatedly check that the element exists in the DOM and that
  // the content of `element.textContent` is equal to "Error!"
  // until all the conditions are met
  await expect.element(banner).toHaveTextContent('Error!')
})
```

We recommend to always use `expect.element` when working with `page.getBy*` locators to reduce test flakiness. Note that `expect.element` accepts a second option:

```ts
interface ExpectPollOptions {
  // The interval to retry the assertion for in milliseconds
  // Defaults to "expect.poll.interval" config option
  interval?: number
  // Time to retry the assertion for in milliseconds
  // Defaults to "expect.poll.timeout" config option
  timeout?: number
  // The message printed when the assertion fails
  message?: string
}
```

::: tip
`expect.element` is a shorthand for `expect.poll(() => element)` and works in exactly the same way.

`toHaveTextContent` and all other assertions are still available on a regular `expect` without a built-in retry-ability mechanism:

```ts
// will fail immediately if .textContent is not `'Error!'`
expect(banner).toHaveTextContent('Error!')
```
:::

## toBeDisabled

```ts
function toBeDisabled(): Promise<void>
```

Allows you to check whether an element is disabled from the user's perspective.

Matches if the element is a form control and the `disabled` attribute is specified on this element or the
element is a descendant of a form element with a `disabled` attribute.

Note that only native control elements such as HTML `button`, `input`, `select`, `textarea`, `option`, `optgroup`
can be disabled by setting "disabled" attribute. "disabled" attribute on other elements is ignored, unless it's a custom element.

```html
<button
  data-testid="button"
  type="submit"
  disabled
>
  submit
</button>
```

```ts
await expect.element(getByTestId('button')).toBeDisabled() // ✅
await expect.element(getByTestId('button')).not.toBeDisabled() // ❌
```

## toBeEnabled

```ts
function toBeEnabled(): Promise<void>
```

Allows you to check whether an element is not disabled from the user's perspective.

Works like [`not.toBeDisabled()`](#tobedisabled). Use this matcher to avoid double negation in your tests.

```html
<button
  data-testid="button"
  type="submit"
  disabled
>
  submit
</button>
```

```ts
await expect.element(getByTestId('button')).toBeEnabled() // ✅
await expect.element(getByTestId('button')).not.toBeEnabled() // ❌
```

## toBeEmptyDOMElement

```ts
function toBeEmptyDOMElement(): Promise<void>
```

This allows you to assert whether an element has no visible content for the user. It ignores comments but will fail if the element contains white-space.

```html
<span data-testid="not-empty"><span data-testid="empty"></span></span>
<span data-testid="with-whitespace"> </span>
<span data-testid="with-comment"><!-- comment --></span>
```

```ts
await expect.element(getByTestId('empty')).toBeEmptyDOMElement()
await expect.element(getByTestId('not-empty')).not.toBeEmptyDOMElement()
await expect.element(
  getByTestId('with-whitespace')
).not.toBeEmptyDOMElement()
```

## toBeInTheDocument

```ts
function toBeInTheDocument(): Promise<void>
```

Assert whether an element is present in the document or not.

```html
<svg data-testid="svg-element"></svg>
```

```ts
await expect.element(getByTestId('svg-element')).toBeInTheDocument()
await expect.element(getByTestId('does-not-exist')).not.toBeInTheDocument()
```

::: warning
This matcher does not find detached elements. The element must be added to the document to be found by `toBeInTheDocument`. If you desire to search in a detached element, please use: [`toContainElement`](#tocontainelement).
:::

## toBeInvalid

```ts
function toBeInvalid(): Promise<void>
```

This allows you to check if an element, is currently invalid.

An element is invalid if it has an [`aria-invalid` attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) with no value or a value of `"true"`, or if the result of [`checkValidity()`](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation) is `false`.

```html
<input data-testid="no-aria-invalid" />
<input data-testid="aria-invalid" aria-invalid />
<input data-testid="aria-invalid-value" aria-invalid="true" />
<input data-testid="aria-invalid-false" aria-invalid="false" />

<form data-testid="valid-form">
  <input />
</form>

<form data-testid="invalid-form">
  <input required />
</form>
```

```ts
await expect.element(getByTestId('no-aria-invalid')).not.toBeInvalid()
await expect.element(getByTestId('aria-invalid')).toBeInvalid()
await expect.element(getByTestId('aria-invalid-value')).toBeInvalid()
await expect.element(getByTestId('aria-invalid-false')).not.toBeInvalid()

await expect.element(getByTestId('valid-form')).not.toBeInvalid()
await expect.element(getByTestId('invalid-form')).toBeInvalid()
```

## toBeRequired

```ts
function toBeRequired(): Promise<void>
```

This allows you to check if a form element is currently required.

An element is required if it is having a `required` or `aria-required="true"` attribute.

```html
<input data-testid="required-input" required />
<input data-testid="aria-required-input" aria-required="true" />
<input data-testid="conflicted-input" required aria-required="false" />
<input data-testid="aria-not-required-input" aria-required="false" />
<input data-testid="optional-input" />
<input data-testid="unsupported-type" type="image" required />
<select data-testid="select" required></select>
<textarea data-testid="textarea" required></textarea>
<div data-testid="supported-role" role="tree" required></div>
<div data-testid="supported-role-aria" role="tree" aria-required="true"></div>
```

```ts
await expect.element(getByTestId('required-input')).toBeRequired()
await expect.element(getByTestId('aria-required-input')).toBeRequired()
await expect.element(getByTestId('conflicted-input')).toBeRequired()
await expect.element(getByTestId('aria-not-required-input')).not.toBeRequired()
await expect.element(getByTestId('optional-input')).not.toBeRequired()
await expect.element(getByTestId('unsupported-type')).not.toBeRequired()
await expect.element(getByTestId('select')).toBeRequired()
await expect.element(getByTestId('textarea')).toBeRequired()
await expect.element(getByTestId('supported-role')).not.toBeRequired()
await expect.element(getByTestId('supported-role-aria')).toBeRequired()
```

## toBeValid

```ts
function toBeValid(): Promise<void>
```

This allows you to check if the value of an element, is currently valid.

An element is valid if it has no [`aria-invalid` attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) or an attribute value of "false". The result of [`checkValidity()`](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation) must also be `true` if it's a form element.

```html
<input data-testid="no-aria-invalid" />
<input data-testid="aria-invalid" aria-invalid />
<input data-testid="aria-invalid-value" aria-invalid="true" />
<input data-testid="aria-invalid-false" aria-invalid="false" />

<form data-testid="valid-form">
  <input />
</form>

<form data-testid="invalid-form">
  <input required />
</form>
```

```ts
await expect.element(getByTestId('no-aria-invalid')).toBeValid()
await expect.element(getByTestId('aria-invalid')).not.toBeValid()
await expect.element(getByTestId('aria-invalid-value')).not.toBeValid()
await expect.element(getByTestId('aria-invalid-false')).toBeValid()

await expect.element(getByTestId('valid-form')).toBeValid()
await expect.element(getByTestId('invalid-form')).not.toBeValid()
```

## toBeVisible

```ts
function toBeVisible(): Promise<void>
```

This allows you to check if an element is currently visible to the user.

Element is considered visible when it has non-empty bounding box and does not have `visibility:hidden` computed style.

Note that according to this definition:

- Elements of zero size **are not** considered visible.
- Elements with `display:none` **are not** considered visible.
- Elements with `opacity:0` **are** considered visible.

To check that at least one element from the list is visible, use `locator.first()`.

```ts
// A specific element is visible.
await expect.element(page.getByText('Welcome')).toBeVisible()

// At least one item in the list is visible.
await expect.element(page.getByTestId('todo-item').first()).toBeVisible()

// At least one of the two elements is visible, possibly both.
await expect.element(
  page.getByRole('button', { name: 'Sign in' })
    .or(page.getByRole('button', { name: 'Sign up' }))
    .first()
).toBeVisible()
```

## toContainElement

```ts
function toContainElement(element: HTMLElement | SVGElement | null): Promise<void>
```

This allows you to assert whether an element contains another element as a descendant or not.

```html
<span data-testid="ancestor"><span data-testid="descendant"></span></span>
```

```ts
const ancestor = getByTestId('ancestor')
const descendant = getByTestId('descendant')
const nonExistantElement = getByTestId('does-not-exist')

await expect.element(ancestor).toContainElement(descendant)
await expect.element(descendant).not.toContainElement(ancestor)
await expect.element(ancestor).not.toContainElement(nonExistantElement)
```

## toContainHTML

```ts
function toContainHTML(htmlText: string): Promise<void>
```

Assert whether a string representing a HTML element is contained in another element. The string should contain valid html, and not any incomplete html.

```html
<span data-testid="parent"><span data-testid="child"></span></span>
```

```ts
// These are valid usages
await expect.element(getByTestId('parent')).toContainHTML('<span data-testid="child"></span>')
await expect.element(getByTestId('parent')).toContainHTML('<span data-testid="child" />')
await expect.element(getByTestId('parent')).not.toContainHTML('<br />')

// These won't work
await expect.element(getByTestId('parent')).toContainHTML('data-testid="child"')
await expect.element(getByTestId('parent')).toContainHTML('data-testid')
await expect.element(getByTestId('parent')).toContainHTML('</span>')
```

::: warning
Chances are you probably do not need to use this matcher. We encourage testing from the perspective of how the user perceives the app in a browser. That's why testing against a specific DOM structure is not advised.

It could be useful in situations where the code being tested renders html that was obtained from an external source, and you want to validate that that html code was used as intended.

It should not be used to check DOM structure that you control. Please, use [`toContainElement`](#tocontainelement) instead.
:::

## toHaveAccessibleDescription

```ts
function toHaveAccessibleDescription(description?: string | RegExp): Promise<void>
```

This allows you to assert that an element has the expected
[accessible description](https://w3c.github.io/accname/).

You can pass the exact string of the expected accessible description, or you can
make a partial match passing a regular expression, or by using
[`expect.stringContaining`](/api/expect#expect-stringcontaining) or [`expect.stringMatching`](/api/expect#expect-stringmatching).

```html
<a
  data-testid="link"
  href="/"
  aria-label="Home page"
  title="A link to start over"
  >Start</a
>
<a data-testid="extra-link" href="/about" aria-label="About page">About</a>
<img src="avatar.jpg" data-testid="avatar" alt="User profile pic" />
<img
  src="logo.jpg"
  data-testid="logo"
  alt="Company logo"
  aria-describedby="t1"
/>
<span id="t1" role="presentation">The logo of Our Company</span>
<img
  src="logo.jpg"
  data-testid="logo2"
  alt="Company logo"
  aria-description="The logo of Our Company"
/>
```

```ts
await expect.element(getByTestId('link')).toHaveAccessibleDescription()
await expect.element(getByTestId('link')).toHaveAccessibleDescription('A link to start over')
await expect.element(getByTestId('link')).not.toHaveAccessibleDescription('Home page')
await expect.element(getByTestId('extra-link')).not.toHaveAccessibleDescription()
await expect.element(getByTestId('avatar')).not.toHaveAccessibleDescription()
await expect.element(getByTestId('logo')).not.toHaveAccessibleDescription('Company logo')
await expect.element(getByTestId('logo')).toHaveAccessibleDescription(
  'The logo of Our Company',
)
await expect.element(getByTestId('logo2')).toHaveAccessibleDescription(
  'The logo of Our Company',
)
```

## toHaveAccessibleErrorMessage

```ts
function toHaveAccessibleErrorMessage(message?: string | RegExp): Promise<void>
```

This allows you to assert that an element has the expected
[accessible error message](https://w3c.github.io/aria/#aria-errormessage).

You can pass the exact string of the expected accessible error message.
Alternatively, you can perform a partial match by passing a regular expression
or by using
[`expect.stringContaining`](/api/expect#expect-stringcontaining) or [`expect.stringMatching`](/api/expect#expect-stringmatching).

```html
<input
  aria-label="Has Error"
  aria-invalid="true"
  aria-errormessage="error-message"
/>
<div id="error-message" role="alert">This field is invalid</div>

<input aria-label="No Error Attributes" />
<input
  aria-label="Not Invalid"
  aria-invalid="false"
  aria-errormessage="error-message"
/>
```

```ts
// Inputs with Valid Error Messages
await expect.element(getByRole('textbox', { name: 'Has Error' })).toHaveAccessibleErrorMessage()
await expect.element(getByRole('textbox', { name: 'Has Error' })).toHaveAccessibleErrorMessage(
  'This field is invalid',
)
await expect.element(getByRole('textbox', { name: 'Has Error' })).toHaveAccessibleErrorMessage(
  /invalid/i,
)
await expect.element(
  getByRole('textbox', { name: 'Has Error' }),
).not.toHaveAccessibleErrorMessage('This field is absolutely correct!')

// Inputs without Valid Error Messages
await expect.element(
  getByRole('textbox', { name: 'No Error Attributes' }),
).not.toHaveAccessibleErrorMessage()

await expect.element(
  getByRole('textbox', { name: 'Not Invalid' }),
).not.toHaveAccessibleErrorMessage()
```

## toHaveAccessibleName

```ts
function toHaveAccessibleName(name?: string | RegExp): Promise<void>
```

This allows you to assert that an element has the expected
[accessible name](https://w3c.github.io/accname/). It is useful, for instance,
to assert that form elements and buttons are properly labelled.

You can pass the exact string of the expected accessible name, or you can make a
partial match passing a regular expression, or by using
[`expect.stringContaining`](/api/expect#expect-stringcontaining) or [`expect.stringMatching`](/api/expect#expect-stringmatching).

```html
<img data-testid="img-alt" src="" alt="Test alt" />
<img data-testid="img-empty-alt" src="" alt="" />
<svg data-testid="svg-title"><title>Test title</title></svg>
<button data-testid="button-img-alt"><img src="" alt="Test" /></button>
<p><img data-testid="img-paragraph" src="" alt="" /> Test content</p>
<button data-testid="svg-button"><svg><title>Test</title></svg></p>
<div><svg data-testid="svg-without-title"></svg></div>
<input data-testid="input-title" title="test" />
```

```javascript
await expect.element(getByTestId('img-alt')).toHaveAccessibleName('Test alt')
await expect.element(getByTestId('img-empty-alt')).not.toHaveAccessibleName()
await expect.element(getByTestId('svg-title')).toHaveAccessibleName('Test title')
await expect.element(getByTestId('button-img-alt')).toHaveAccessibleName()
await expect.element(getByTestId('img-paragraph')).not.toHaveAccessibleName()
await expect.element(getByTestId('svg-button')).toHaveAccessibleName()
await expect.element(getByTestId('svg-without-title')).not.toHaveAccessibleName()
await expect.element(getByTestId('input-title')).toHaveAccessibleName()
```

## toHaveAttribute

```ts
function toHaveAttribute(attribute: string, value?: unknown): Promise<void>
```

This allows you to check whether the given element has an attribute or not. You
can also optionally check that the attribute has a specific expected value or
partial match using [`expect.stringContaining`](/api/expect#expect-stringcontaining) or [`expect.stringMatching`](/api/expect#expect-stringmatching).

```html
<button data-testid="ok-button" type="submit" disabled>ok</button>
```

```ts
const button = getByTestId('ok-button')

await expect.element(button).toHaveAttribute('disabled')
await expect.element(button).toHaveAttribute('type', 'submit')
await expect.element(button).not.toHaveAttribute('type', 'button')

await expect.element(button).toHaveAttribute(
  'type',
  expect.stringContaining('sub')
)
await expect.element(button).toHaveAttribute(
  'type',
  expect.not.stringContaining('but')
)
```

## toHaveClass

```ts
function toHaveClass(...classNames: string[], options?: { exact: boolean }): Promise<void>
function toHaveClass(...classNames: (string | RegExp)[]): Promise<void>
```

This allows you to check whether the given element has certain classes within
its `class` attribute. You must provide at least one class, unless you are
asserting that an element does not have any classes.

The list of class names may include strings and regular expressions. Regular
expressions are matched against each individual class in the target element, and
it is NOT matched against its full `class` attribute value as whole.

::: warning
Note that you cannot use `exact: true` option when only regular expressions are provided.
:::

```html
<button data-testid="delete-button" class="btn extra btn-danger">
  Delete item
</button>
<button data-testid="no-classes">No Classes</button>
```

```ts
const deleteButton = getByTestId('delete-button')
const noClasses = getByTestId('no-classes')

await expect.element(deleteButton).toHaveClass('extra')
await expect.element(deleteButton).toHaveClass('btn-danger btn')
await expect.element(deleteButton).toHaveClass(/danger/, 'btn')
await expect.element(deleteButton).toHaveClass('btn-danger', 'btn')
await expect.element(deleteButton).not.toHaveClass('btn-link')
await expect.element(deleteButton).not.toHaveClass(/link/)

// ⚠️ regexp matches against individual classes, not the whole classList
await expect.element(deleteButton).not.toHaveClass(/btn extra/)

// the element has EXACTLY a set of classes (in any order)
await expect.element(deleteButton).toHaveClass('btn-danger extra btn', {
  exact: true
})
// if it has more than expected it is going to fail
await expect.element(deleteButton).not.toHaveClass('btn-danger extra', {
  exact: true
})

await expect.element(noClasses).not.toHaveClass()
```

## toHaveFocus

```ts
function toHaveFocus(): Promise<void>
```

This allows you to assert whether an element has focus or not.

```html
<div><input type="text" data-testid="element-to-focus" /></div>
```

```ts
const input = page.getByTestId('element-to-focus')
input.element().focus()
await expect.element(input).toHaveFocus()
input.element().blur()
await expect.element(input).not.toHaveFocus()
```

## toHaveFormValues

```ts
function toHaveFormValues(expectedValues: Record<string, unknown>): Promise<void>
```

This allows you to check if a form or fieldset contains form controls for each given name, and having the specified value.

::: tip
It is important to stress that this matcher can only be invoked on a [form](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement) or a [fieldset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFieldSetElement) element.

This allows it to take advantage of the [`.elements`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements) property in `form` and `fieldset` to reliably fetch all form controls within them.

This also avoids the possibility that users provide a container that contains more than one `form`, thereby intermixing form controls that are not related, and could even conflict with one another.
:::

This matcher abstracts away the particularities with which a form control value
is obtained depending on the type of form control. For instance, `<input>`
elements have a `value` attribute, but `<select>` elements do not. Here's a list
of all cases covered:

- `<input type="number">` elements return the value as a **number**, instead of
  a string.
- `<input type="checkbox">` elements:
  - if there's a single one with the given `name` attribute, it is treated as a
    **boolean**, returning `true` if the checkbox is checked, `false` if
    unchecked.
  - if there's more than one checkbox with the same `name` attribute, they are
    all treated collectively as a single form control, which returns the value
    as an **array** containing all the values of the selected checkboxes in the
    collection.
- `<input type="radio">` elements are all grouped by the `name` attribute, and
  such a group treated as a single form control. This form control returns the
  value as a **string** corresponding to the `value` attribute of the selected
  radio button within the group.
- `<input type="text">` elements return the value as a **string**. This also
  applies to `<input>` elements having any other possible `type` attribute
  that's not explicitly covered in different rules above (e.g. `search`,
  `email`, `date`, `password`, `hidden`, etc.)
- `<select>` elements without the `multiple` attribute return the value as a
  **string** corresponding to the `value` attribute of the selected `option`, or
  `undefined` if there's no selected option.
- `<select multiple>` elements return the value as an **array** containing all
  the values of the [selected options](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedOptions).
- `<textarea>` elements return their value as a **string**. The value
  corresponds to their node content.

The above rules make it easy, for instance, to switch from using a single select
control to using a group of radio buttons. Or to switch from a multi select
control, to using a group of checkboxes. The resulting set of form values used
by this matcher to compare against would be the same.

```html
<form data-testid="login-form">
  <input type="text" name="username" value="jane.doe" />
  <input type="password" name="password" value="12345678" />
  <input type="checkbox" name="rememberMe" checked />
  <button type="submit">Sign in</button>
</form>
```

```ts
await expect.element(getByTestId('login-form')).toHaveFormValues({
  username: 'jane.doe',
  rememberMe: true,
})
```

## toHaveStyle

```ts
function toHaveStyle(css: string | Partial<CSSStyleDeclaration>): Promise<void>
```

This allows you to check if a certain element has some specific css properties
with specific values applied. It matches only if the element has _all_ the
expected properties applied, not just some of them.

```html
<button
  data-testid="delete-button"
  style="display: none; background-color: red"
>
  Delete item
</button>
```

```ts
const button = getByTestId('delete-button')

await expect.element(button).toHaveStyle('display: none')
await expect.element(button).toHaveStyle({ display: 'none' })
await expect.element(button).toHaveStyle(`
  background-color: red;
  display: none;
`)
await expect.element(button).toHaveStyle({
  backgroundColor: 'red',
  display: 'none',
})
await expect.element(button).not.toHaveStyle(`
  background-color: blue;
  display: none;
`)
await expect.element(button).not.toHaveStyle({
  backgroundColor: 'blue',
  display: 'none',
})
```

This also works with rules that are applied to the element via a class name for
which some rules are defined in a stylesheet currently active in the document.
The usual rules of css precedence apply.

## toHaveTextContent

```ts
function toHaveTextContent(
  text: string | RegExp,
  options?: { normalizeWhitespace: boolean }
): Promise<void>
```

This allows you to check whether the given node has a text content or not. This
supports elements, but also text nodes and fragments.

When a `string` argument is passed through, it will perform a partial
case-sensitive match to the node content.

To perform a case-insensitive match, you can use a `RegExp` with the `/i`
modifier.

If you want to match the whole content, you can use a `RegExp` to do it.

```html
<span data-testid="text-content">Text Content</span>
```

```ts
const element = getByTestId('text-content')

await expect.element(element).toHaveTextContent('Content')
// to match the whole content
await expect.element(element).toHaveTextContent(/^Text Content$/)
// to use case-insensitive match
await expect.element(element).toHaveTextContent(/content$/i)
await expect.element(element).not.toHaveTextContent('content')
```

## toHaveValue

```ts
function toHaveValue(value: string | string[] | number | null): Promise<void>
```

This allows you to check whether the given form element has the specified value.
It accepts `<input>`, `<select>` and `<textarea>` elements with the exception of
`<input type="checkbox">` and `<input type="radio">`, which can be meaningfully
matched only using [`toBeChecked`](#tobechecked) or
[`toHaveFormValues`](#tohaveformvalues).

It also accepts elements with roles `meter`, `progressbar`, `slider` or
`spinbutton` and checks their `aria-valuenow` attribute (as a number).

For all other form elements, the value is matched using the same algorithm as in
[`toHaveFormValues`](#tohaveformvalues) does.

```html
<input type="text" value="text" data-testid="input-text" />
<input type="number" value="5" data-testid="input-number" />
<input type="text" data-testid="input-empty" />
<select multiple data-testid="select-number">
  <option value="first">First Value</option>
  <option value="second" selected>Second Value</option>
  <option value="third" selected>Third Value</option>
</select>
```

```ts
const textInput = getByTestId('input-text')
const numberInput = getByTestId('input-number')
const emptyInput = getByTestId('input-empty')
const selectInput = getByTestId('select-number')

await expect.element(textInput).toHaveValue('text')
await expect.element(numberInput).toHaveValue(5)
await expect.element(emptyInput).not.toHaveValue()
await expect.element(selectInput).toHaveValue(['second', 'third'])
```

## toHaveDisplayValue

```typescript
function toHaveDisplayValue(
  value: string | RegExp | (string | RegExp)[]
): Promise<void>
```

This allows you to check whether the given form element has the specified
displayed value (the one the end user will see). It accepts `<input>`,
`<select>` and `<textarea>` elements with the exception of
`<input type="checkbox">` and `<input type="radio">`, which can be meaningfully
matched only using [`toBeChecked`](#tobechecked) or
[`toHaveFormValues`](#tohaveformvalues).

```html
<label for="input-example">First name</label>
<input type="text" id="input-example" value="Luca" />

<label for="textarea-example">Description</label>
<textarea id="textarea-example">An example description here.</textarea>

<label for="single-select-example">Fruit</label>
<select id="single-select-example">
  <option value="">Select a fruit...</option>
  <option value="banana">Banana</option>
  <option value="ananas">Ananas</option>
  <option value="avocado">Avocado</option>
</select>

<label for="multiple-select-example">Fruits</label>
<select id="multiple-select-example" multiple>
  <option value="">Select a fruit...</option>
  <option value="banana" selected>Banana</option>
  <option value="ananas">Ananas</option>
  <option value="avocado" selected>Avocado</option>
</select>
```

```ts
const input = page.getByLabelText('First name')
const textarea = page.getByLabelText('Description')
const selectSingle = page.getByLabelText('Fruit')
const selectMultiple = page.getByLabelText('Fruits')

await expect.element(input).toHaveDisplayValue('Luca')
await expect.element(input).toHaveDisplayValue(/Luc/)
await expect.element(textarea).toHaveDisplayValue('An example description here.')
await expect.element(textarea).toHaveDisplayValue(/example/)
await expect.element(selectSingle).toHaveDisplayValue('Select a fruit...')
await expect.element(selectSingle).toHaveDisplayValue(/Select/)
await expect.element(selectMultiple).toHaveDisplayValue([/Avocado/, 'Banana'])
```

## toBeChecked

```ts
function toBeChecked(): Promise<void>
```

This allows you to check whether the given element is checked. It accepts an
`input` of type `checkbox` or `radio` and elements with a `role` of `checkbox`,
`radio` or `switch` with a valid `aria-checked` attribute of `"true"` or
`"false"`.

```html
<input type="checkbox" checked data-testid="input-checkbox-checked" />
<input type="checkbox" data-testid="input-checkbox-unchecked" />
<div role="checkbox" aria-checked="true" data-testid="aria-checkbox-checked" />
<div
  role="checkbox"
  aria-checked="false"
  data-testid="aria-checkbox-unchecked"
/>

<input type="radio" checked value="foo" data-testid="input-radio-checked" />
<input type="radio" value="foo" data-testid="input-radio-unchecked" />
<div role="radio" aria-checked="true" data-testid="aria-radio-checked" />
<div role="radio" aria-checked="false" data-testid="aria-radio-unchecked" />
<div role="switch" aria-checked="true" data-testid="aria-switch-checked" />
<div role="switch" aria-checked="false" data-testid="aria-switch-unchecked" />
```

```ts
const inputCheckboxChecked = getByTestId('input-checkbox-checked')
const inputCheckboxUnchecked = getByTestId('input-checkbox-unchecked')
const ariaCheckboxChecked = getByTestId('aria-checkbox-checked')
const ariaCheckboxUnchecked = getByTestId('aria-checkbox-unchecked')
await expect.element(inputCheckboxChecked).toBeChecked()
await expect.element(inputCheckboxUnchecked).not.toBeChecked()
await expect.element(ariaCheckboxChecked).toBeChecked()
await expect.element(ariaCheckboxUnchecked).not.toBeChecked()

const inputRadioChecked = getByTestId('input-radio-checked')
const inputRadioUnchecked = getByTestId('input-radio-unchecked')
const ariaRadioChecked = getByTestId('aria-radio-checked')
const ariaRadioUnchecked = getByTestId('aria-radio-unchecked')
await expect.element(inputRadioChecked).toBeChecked()
await expect.element(inputRadioUnchecked).not.toBeChecked()
await expect.element(ariaRadioChecked).toBeChecked()
await expect.element(ariaRadioUnchecked).not.toBeChecked()

const ariaSwitchChecked = getByTestId('aria-switch-checked')
const ariaSwitchUnchecked = getByTestId('aria-switch-unchecked')
await expect.element(ariaSwitchChecked).toBeChecked()
await expect.element(ariaSwitchUnchecked).not.toBeChecked()
```

## toBePartiallyChecked

```typescript
function toBePartiallyChecked(): Promise<void>
```

This allows you to check whether the given element is partially checked. It
accepts an `input` of type `checkbox` and elements with a `role` of `checkbox`
with a `aria-checked="mixed"`, or `input` of type `checkbox` with
`indeterminate` set to `true`

```html
<input type="checkbox" aria-checked="mixed" data-testid="aria-checkbox-mixed" />
<input type="checkbox" checked data-testid="input-checkbox-checked" />
<input type="checkbox" data-testid="input-checkbox-unchecked" />
<div role="checkbox" aria-checked="true" data-testid="aria-checkbox-checked" />
<div
  role="checkbox"
  aria-checked="false"
  data-testid="aria-checkbox-unchecked"
/>
<input type="checkbox" data-testid="input-checkbox-indeterminate" />
```

```ts
const ariaCheckboxMixed = getByTestId('aria-checkbox-mixed')
const inputCheckboxChecked = getByTestId('input-checkbox-checked')
const inputCheckboxUnchecked = getByTestId('input-checkbox-unchecked')
const ariaCheckboxChecked = getByTestId('aria-checkbox-checked')
const ariaCheckboxUnchecked = getByTestId('aria-checkbox-unchecked')
const inputCheckboxIndeterminate = getByTestId('input-checkbox-indeterminate')

await expect.element(ariaCheckboxMixed).toBePartiallyChecked()
await expect.element(inputCheckboxChecked).not.toBePartiallyChecked()
await expect.element(inputCheckboxUnchecked).not.toBePartiallyChecked()
await expect.element(ariaCheckboxChecked).not.toBePartiallyChecked()
await expect.element(ariaCheckboxUnchecked).not.toBePartiallyChecked()

inputCheckboxIndeterminate.element().indeterminate = true
await expect.element(inputCheckboxIndeterminate).toBePartiallyChecked()
```

## toHaveRole

```ts
function toHaveRole(role: ARIARole): Promise<void>
```

This allows you to assert that an element has the expected [role](https://www.w3.org/TR/html-aria/#docconformance).

This is useful in cases where you already have access to an element via some query other than the role itself, and want to make additional assertions regarding its accessibility.

The role can match either an explicit role (via the `role` attribute), or an implicit one via the [implicit ARIA semantics](https://www.w3.org/TR/html-aria/#docconformance).

```html
<button data-testid="button">Continue</button>
<div role="button" data-testid="button-explicit">Continue</button>
<button role="switch button" data-testid="button-explicit-multiple">Continue</button>
<a href="/about" data-testid="link">About</a>
<a data-testid="link-invalid">Invalid link<a/>
```

```ts
await expect.element(getByTestId('button')).toHaveRole('button')
await expect.element(getByTestId('button-explicit')).toHaveRole('button')
await expect.element(getByTestId('button-explicit-multiple')).toHaveRole('button')
await expect.element(getByTestId('button-explicit-multiple')).toHaveRole('switch')
await expect.element(getByTestId('link')).toHaveRole('link')
await expect.element(getByTestId('link-invalid')).not.toHaveRole('link')
await expect.element(getByTestId('link-invalid')).toHaveRole('generic')
```

::: warning
Roles are matched literally by string equality, without inheriting from the ARIA role hierarchy. As a result, querying a superclass role like `checkbox` will not include elements with a subclass role like `switch`.

Also note that unlike `testing-library`, Vitest ignores all custom roles except the first valid one, following Playwright's behaviour:

```jsx
<div data-testid="switch" role="switch alert"></div>

await expect.element(getByTestId('switch')).toHaveRole('switch') // ✅
await expect.element(getByTestId('switch')).toHaveRole('alert') // ❌
```
:::

## toHaveSelection

```ts
function toHaveSelection(selection?: string): Promise<void>
```

This allows to assert that an element has a
[text selection](https://developer.mozilla.org/en-US/docs/Web/API/Selection).

This is useful to check if text or part of the text is selected within an
element. The element can be either an input of type text, a textarea, or any
other element that contains text, such as a paragraph, span, div etc.

::: warning
The expected selection is a string, it does not allow to check for
selection range indeces.
:::

```html
<div>
  <input type="text" value="text selected text" data-testid="text" />
  <textarea data-testid="textarea">text selected text</textarea>
  <p data-testid="prev">prev</p>
  <p data-testid="parent">
    text <span data-testid="child">selected</span> text
  </p>
  <p data-testid="next">next</p>
</div>
```

```ts
getByTestId('text').element().setSelectionRange(5, 13)
await expect.element(getByTestId('text')).toHaveSelection('selected')

getByTestId('textarea').element().setSelectionRange(0, 5)
await expect.element('textarea').toHaveSelection('text ')

const selection = document.getSelection()
const range = document.createRange()
selection.removeAllRanges()
selection.empty()
selection.addRange(range)

// selection of child applies to the parent as well
range.selectNodeContents(getByTestId('child').element())
await expect.element(getByTestId('child')).toHaveSelection('selected')
await expect.element(getByTestId('parent')).toHaveSelection('selected')

// selection that applies from prev all, parent text before child, and part child.
range.setStart(getByTestId('prev').element(), 0)
range.setEnd(getByTestId('child').element().childNodes[0], 3)
await expect.element(queryByTestId('prev')).toHaveSelection('prev')
await expect.element(queryByTestId('child')).toHaveSelection('sel')
await expect.element(queryByTestId('parent')).toHaveSelection('text sel')
await expect.element(queryByTestId('next')).not.toHaveSelection()

// selection that applies from part child, parent text after child and part next.
range.setStart(getByTestId('child').element().childNodes[0], 3)
range.setEnd(getByTestId('next').element().childNodes[0], 2)
await expect.element(queryByTestId('child')).toHaveSelection('ected')
await expect.element(queryByTestId('parent')).toHaveSelection('ected text')
await expect.element(queryByTestId('prev')).not.toHaveSelection()
await expect.element(queryByTestId('next')).toHaveSelection('ne')
```
````

## File: docs/guide/browser/commands.md
````markdown
---
title: Commands | Browser Mode
outline: deep
---

# Commands

Command is a function that invokes another function on the server and passes down the result back to the browser. Vitest exposes several built-in commands you can use in your browser tests.

## Built-in Commands

### Files Handling

You can use the `readFile`, `writeFile`, and `removeFile` APIs to handle files in your browser tests. Since Vitest 3.2, all paths are resolved relative to the [project](/guide/projects) root (which is `process.cwd()`, unless overriden manually). Previously, paths were resolved relative to the test file.

By default, Vitest uses `utf-8` encoding but you can override it with options.

::: tip
This API follows [`server.fs`](https://vitejs.dev/config/server-options.html#server-fs-allow) limitations for security reasons.
:::

```ts
import { server } from '@vitest/browser/context'

const { readFile, writeFile, removeFile } = server.commands

it('handles files', async () => {
  const file = './test.txt'

  await writeFile(file, 'hello world')
  const content = await readFile(file)

  expect(content).toBe('hello world')

  await removeFile(file)
})
```

## CDP Session

Vitest exposes access to raw Chrome Devtools Protocol via the `cdp` method exported from `@vitest/browser/context`. It is mostly useful to library authors to build tools on top of it.

```ts
import { cdp } from '@vitest/browser/context'

const input = document.createElement('input')
document.body.appendChild(input)
input.focus()

await cdp().send('Input.dispatchKeyEvent', {
  type: 'keyDown',
  text: 'a',
})

expect(input).toHaveValue('a')
```

::: warning
CDP session works only with `playwright` provider and only when using `chromium` browser. You can read more about it in playwright's [`CDPSession`](https://playwright.dev/docs/api/class-cdpsession) documentation.
:::

## Custom Commands

You can also add your own commands via [`browser.commands`](/guide/browser/config#browser-commands) config option. If you develop a library, you can provide them via a `config` hook inside a plugin:

```ts
import type { Plugin } from 'vitest/config'
import type { BrowserCommand } from 'vitest/node'

const myCustomCommand: BrowserCommand<[arg1: string, arg2: string]> = ({
  testPath,
  provider
}, arg1, arg2) => {
  if (provider.name === 'playwright') {
    console.log(testPath, arg1, arg2)
    return { someValue: true }
  }

  throw new Error(`provider ${provider.name} is not supported`)
}

export default function BrowserCommands(): Plugin {
  return {
    name: 'vitest:custom-commands',
    config() {
      return {
        test: {
          browser: {
            commands: {
              myCustomCommand,
            }
          }
        }
      }
    }
  }
}
```

Then you can call it inside your test by importing it from `@vitest/browser/context`:

```ts
import { commands } from '@vitest/browser/context'
import { expect, test } from 'vitest'

test('custom command works correctly', async () => {
  const result = await commands.myCustomCommand('test1', 'test2')
  expect(result).toEqual({ someValue: true })
})

// if you are using TypeScript, you can augment the module
declare module '@vitest/browser/context' {
  interface BrowserCommands {
    myCustomCommand: (arg1: string, arg2: string) => Promise<{
      someValue: true
    }>
  }
}
```

::: warning
Custom functions will override built-in ones if they have the same name.
:::

### Custom `playwright` commands

Vitest exposes several `playwright` specific properties on the command context.

- `page` references the full page that contains the test iframe. This is the orchestrator HTML and you most likely shouldn't touch it to not break things.
- `frame` is an async method that will resolve tester [`Frame`](https://playwright.dev/docs/api/class-frame). It has a similar API to the `page`, but it doesn't support certain methods. If you need to query an element, you should prefer using `context.iframe` instead because it is more stable and faster.
- `iframe` is a [`FrameLocator`](https://playwright.dev/docs/api/class-framelocator) that should be used to query other elements on the page.
- `context` refers to the unique [BrowserContext](https://playwright.dev/docs/api/class-browsercontext).

```ts
import { BrowserCommand } from 'vitest/node'

export const myCommand: BrowserCommand<[string, number]> = async (
  ctx,
  arg1: string,
  arg2: number
) => {
  if (ctx.provider.name === 'playwright') {
    const element = await ctx.iframe.findByRole('alert')
    const screenshot = await element.screenshot()
    // do something with the screenshot
    return difference
  }
}
```

::: tip
If you are using TypeScript, don't forget to reference `@vitest/browser/providers/playwright` in your [setup file](/config/#setupfile) or a [config file](/config/) to get autocompletion in the config and in `userEvent` and `page` options:

```ts
/// <reference types="@vitest/browser/providers/playwright" />
```
:::

### Custom `webdriverio` commands

Vitest exposes some `webdriverio` specific properties on the context object.

- `browser` is the `WebdriverIO.Browser` API.

Vitest automatically switches the `webdriver` context to the test iframe by calling `browser.switchToFrame` before the command is called, so `$` and `$$` methods refer to the elements inside the iframe, not in the orchestrator, but non-webdriver APIs will still refer to the parent frame context.

::: tip
If you are using TypeScript, don't forget to reference `@vitest/browser/providers/webdriverio` in your [setup file](/config/#setupfile) or a [config file](/config/) to get autocompletion:

```ts
/// <reference types="@vitest/browser/providers/webdriverio" />
```
:::
````

## File: docs/guide/browser/config.md
````markdown
# Browser Config Reference

You can change the browser configuration by updating the `test.browser` field in your [config file](/config/). An example of a simple config file:

```ts [vitest.config.ts]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    browser: {
      enabled: true,
      provider: 'playwright',
      instances: [
        {
          browser: 'chromium',
          setupFile: './chromium-setup.js',
        },
      ],
    },
  },
})
```

Please, refer to the ["Config Reference"](/config/) article for different config examples.

::: warning
_All listed options_ on this page are located within a `test` property inside the configuration:

```ts [vitest.config.js]
export default defineConfig({
  test: {
    browser: {},
  },
})
```
:::

## browser.enabled

- **Type:** `boolean`
- **Default:** `false`
- **CLI:** `--browser`, `--browser.enabled=false`

Run all tests inside a browser by default. Note that `--browser` only works if you have at least one [`browser.instances`](#browser-instances) item.

## browser.instances

- **Type:** `BrowserConfig`
- **Default:** `[{ browser: name }]`

Defines multiple browser setups. Every config has to have at least a `browser` field. The config supports your providers configurations:

- [Configuring Playwright](/guide/browser/playwright)
- [Configuring WebdriverIO](/guide/browser/webdriverio)

::: tip
To have a better type safety when using built-in providers, you should reference one of these types (for provider that you are using) in your [config file](/config/):

```ts
/// <reference types="@vitest/browser/providers/playwright" />
/// <reference types="@vitest/browser/providers/webdriverio" />
```
:::

In addition to that, you can also specify most of the [project options](/config/) (not marked with a <NonProjectOption /> icon) and some of the `browser` options like `browser.testerHtmlPath`.

::: warning
Every browser config inherits options from the root config:

```ts{3,9} [vitest.config.ts]
export default defineConfig({
  test: {
    setupFile: ['./root-setup-file.js'],
    browser: {
      enabled: true,
      testerHtmlPath: './custom-path.html',
      instances: [
        {
          // will have both setup files: "root" and "browser"
          setupFile: ['./browser-setup-file.js'],
          // implicitly has "testerHtmlPath" from the root config // [!code warning]
          // testerHtmlPath: './custom-path.html', // [!code warning]
        },
      ],
    },
  },
})
```

During development, Vitest supports only one [non-headless](#browser-headless) configuration. You can limit the headed project yourself by specifying `headless: false` in the config, or by providing the `--browser.headless=false` flag, or by filtering projects with `--project=chromium` flag.

For more examples, refer to the ["Multiple Setups" guide](/guide/browser/multiple-setups).
:::

List of available `browser` options:

- [`browser.headless`](#browser-headless)
- [`browser.locators`](#browser-locators)
- [`browser.viewport`](#browser-viewport)
- [`browser.testerHtmlPath`](#browser-testerhtmlpath)
- [`browser.screenshotDirectory`](#browser-screenshotdirectory)
- [`browser.screenshotFailures`](#browser-screenshotfailures)

By default, Vitest creates an array with a single element which uses the [`browser.name`](#browser-name) field as a `browser`. Note that this behaviour will be removed with Vitest 4.

Under the hood, Vitest transforms these instances into separate [test projects](/advanced/api/test-project) sharing a single Vite server for better caching performance.

## browser&#46;name <Badge type="danger">deprecated</Badge> {#browser-name}

- **Type:** `string`
- **CLI:** `--browser=safari`

::: danger DEPRECATED
This API is deprecated an will be removed in Vitest 4. Please, use [`browser.instances`](#browser-instances) option instead.
:::

Run all tests in a specific browser. Possible options in different providers:

- `webdriverio`: `firefox`, `chrome`, `edge`, `safari`
- `playwright`: `firefox`, `webkit`, `chromium`
- custom: any string that will be passed to the provider

## browser.headless

- **Type:** `boolean`
- **Default:** `process.env.CI`
- **CLI:** `--browser.headless`, `--browser.headless=false`

Run the browser in a `headless` mode. If you are running Vitest in CI, it will be enabled by default.

## browser.isolate

- **Type:** `boolean`
- **Default:** `true`
- **CLI:** `--browser.isolate`, `--browser.isolate=false`

Run every test in a separate iframe.

## browser.testerHtmlPath

- **Type:** `string`

A path to the HTML entry point. Can be relative to the root of the project. This file will be processed with [`transformIndexHtml`](https://vite.dev/guide/api-plugin#transformindexhtml) hook.

## browser.api

- **Type:** `number | { port?, strictPort?, host? }`
- **Default:** `63315`
- **CLI:** `--browser.api=63315`, `--browser.api.port=1234, --browser.api.host=example.com`

Configure options for Vite server that serves code in the browser. Does not affect [`test.api`](#api) option. By default, Vitest assigns port `63315` to avoid conflicts with the development server, allowing you to run both in parallel.

## browser.provider {#browser-provider}

- **Type:** `'webdriverio' | 'playwright' | 'preview' | string`
- **Default:** `'preview'`
- **CLI:** `--browser.provider=playwright`

Path to a provider that will be used when running browser tests. Vitest provides three providers which are `preview` (default), `webdriverio` and `playwright`. Custom providers should be exported using `default` export and have this shape:

```ts
export interface BrowserProvider {
  name: string
  supportsParallelism: boolean
  getSupportedBrowsers: () => readonly string[]
  beforeCommand?: (command: string, args: unknown[]) => Awaitable<void>
  afterCommand?: (command: string, args: unknown[]) => Awaitable<void>
  getCommandsContext: (sessionId: string) => Record<string, unknown>
  openPage: (sessionId: string, url: string, beforeNavigate?: () => Promise<void>) => Promise<void>
  getCDPSession?: (sessionId: string) => Promise<CDPSession>
  close: () => Awaitable<void>
  initialize(
    ctx: TestProject,
    options: BrowserProviderInitializationOptions
  ): Awaitable<void>
}
```

::: danger ADVANCED API
The custom provider API is highly experimental and can change between patches. If you just need to run tests in a browser, use the [`browser.instances`](#browser-instances) option instead.
:::

## browser.providerOptions <Badge type="danger">deprecated</Badge> {#browser-provideroptions}

- **Type:** `BrowserProviderOptions`

::: danger DEPRECATED
This API is deprecated an will be removed in Vitest 4. Please, use [`browser.instances`](#browser-instances) option instead.
:::

Options that will be passed down to provider when calling `provider.initialize`.

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    browser: {
      providerOptions: {
        launch: {
          devtools: true,
        },
      },
    },
  },
})
```

::: tip
To have a better type safety when using built-in providers, you should reference one of these types (for provider that you are using) in your [config file](/config/):

```ts
/// <reference types="@vitest/browser/providers/playwright" />
/// <reference types="@vitest/browser/providers/webdriverio" />
```
:::

## browser.ui

- **Type:** `boolean`
- **Default:** `!isCI`
- **CLI:** `--browser.ui=false`

Should Vitest UI be injected into the page. By default, injects UI iframe during development.

## browser.viewport

- **Type:** `{ width, height }`
- **Default:** `414x896`

Default iframe's viewport.

## browser.locators

Options for built-in [browser locators](/guide/browser/locators).

### browser.locators.testIdAttribute

- **Type:** `string`
- **Default:** `data-testid`

Attribute used to find elements with `getByTestId` locator.

## browser.screenshotDirectory

- **Type:** `string`
- **Default:** `__screenshots__` in the test file directory

Path to the screenshots directory relative to the `root`.

## browser.screenshotFailures

- **Type:** `boolean`
- **Default:** `!browser.ui`

Should Vitest take screenshots if the test fails.

## browser.orchestratorScripts

- **Type:** `BrowserScript[]`
- **Default:** `[]`

Custom scripts that should be injected into the orchestrator HTML before test iframes are initiated. This HTML document only sets up iframes and doesn't actually import your code.

The script `src` and `content` will be processed by Vite plugins. Script should be provided in the following shape:

```ts
export interface BrowserScript {
  /**
   * If "content" is provided and type is "module", this will be its identifier.
   *
   * If you are using TypeScript, you can add `.ts` extension here for example.
   * @default `injected-${index}.js`
   */
  id?: string
  /**
   * JavaScript content to be injected. This string is processed by Vite plugins if type is "module".
   *
   * You can use `id` to give Vite a hint about the file extension.
   */
  content?: string
  /**
   * Path to the script. This value is resolved by Vite so it can be a node module or a file path.
   */
  src?: string
  /**
   * If the script should be loaded asynchronously.
   */
  async?: boolean
  /**
   * Script type.
   * @default 'module'
   */
  type?: string
}
```

## browser.testerScripts

- **Type:** `BrowserScript[]`
- **Default:** `[]`

::: danger DEPRECATED
This API is deprecated an will be removed in Vitest 4. Please, use [`browser.testerHtmlPath`](#browser-testerhtmlpath) field instead.
:::

Custom scripts that should be injected into the tester HTML before the tests environment is initiated. This is useful to inject polyfills required for Vitest browser implementation. It is recommended to use [`setupFiles`](#setupfiles) in almost all cases instead of this.

The script `src` and `content` will be processed by Vite plugins.

## browser.commands

- **Type:** `Record<string, BrowserCommand>`
- **Default:** `{ readFile, writeFile, ... }`

Custom [commands](/guide/browser/commands) that can be imported during browser tests from `@vitest/browser/commands`.

## browser.connectTimeout

- **Type:** `number`
- **Default:** `60_000`

The timeout in milliseconds. If connection to the browser takes longer, the test suite will fail.

::: info
This is the time it should take for the browser to establish the WebSocket connection with the Vitest server. In normal circumstances, this timeout should never be reached.
:::
````

## File: docs/guide/browser/context.md
````markdown
---
title: Context API | Browser Mode
---

# Context API

Vitest exposes a context module via `@vitest/browser/context` entry point. As of 2.0, it exposes a small set of utilities that might be useful to you in tests.

## `userEvent`

::: tip
The `userEvent` API is explained in detail at [Interactivity API](/guide/browser/interactivity-api).
:::

```ts
/**
 * Handler for user interactions. The support is implemented by the browser provider (`playwright` or `webdriverio`).
 * If used with `preview` provider, fallbacks to simulated events via `@testing-library/user-event`.
 * @experimental
 */
export const userEvent: {
  setup: () => UserEvent
  cleanup: () => Promise<void>
  click: (element: Element, options?: UserEventClickOptions) => Promise<void>
  dblClick: (element: Element, options?: UserEventDoubleClickOptions) => Promise<void>
  tripleClick: (element: Element, options?: UserEventTripleClickOptions) => Promise<void>
  selectOptions: (
    element: Element,
    values: HTMLElement | HTMLElement[] | string | string[],
    options?: UserEventSelectOptions,
  ) => Promise<void>
  keyboard: (text: string) => Promise<void>
  type: (element: Element, text: string, options?: UserEventTypeOptions) => Promise<void>
  clear: (element: Element) => Promise<void>
  tab: (options?: UserEventTabOptions) => Promise<void>
  hover: (element: Element, options?: UserEventHoverOptions) => Promise<void>
  unhover: (element: Element, options?: UserEventHoverOptions) => Promise<void>
  fill: (element: Element, text: string, options?: UserEventFillOptions) => Promise<void>
  dragAndDrop: (source: Element, target: Element, options?: UserEventDragAndDropOptions) => Promise<void>
}
```

## `commands`

::: tip
This API is explained in detail at [Commands API](/guide/browser/commands).
:::

```ts
/**
 * Available commands for the browser.
 * A shortcut to `server.commands`.
 */
export const commands: BrowserCommands
```

## `page`

The `page` export provides utilities to interact with the current `page`.

::: warning
While it exposes some utilities from Playwright's `page`, it is not the same object. Since the browser context is evaluated in the browser, your tests don't have access to Playwright's `page` because it runs on the server.

Use [Commands API](/guide/browser/commands) if you need to have access to Playwright's `page` object.
:::

```ts
export const page: {
  /**
   * Change the size of iframe's viewport.
   */
  viewport(width: number, height: number): Promise<void>
  /**
   * Make a screenshot of the test iframe or a specific element.
   * @returns Path to the screenshot file or path and base64.
   */
  screenshot(options: Omit<ScreenshotOptions, 'base64'> & { base64: true }): Promise<{
    path: string
    base64: string
  }>
  screenshot(options?: ScreenshotOptions): Promise<string>
  /**
   * Extend default `page` object with custom methods.
   */
  extend(methods: Partial<BrowserPage>): BrowserPage
  /**
   * Wrap an HTML element in a `Locator`. When querying for elements, the search will always return this element.
   */
  elementLocator(element: Element): Locator

  /**
   * Locator APIs. See its documentation for more details.
   */
  getByRole(role: ARIARole | string, options?: LocatorByRoleOptions): Locator
  getByLabelText(text: string | RegExp, options?: LocatorOptions): Locator
  getByTestId(text: string | RegExp): Locator
  getByAltText(text: string | RegExp, options?: LocatorOptions): Locator
  getByPlaceholder(text: string | RegExp, options?: LocatorOptions): Locator
  getByText(text: string | RegExp, options?: LocatorOptions): Locator
  getByTitle(text: string | RegExp, options?: LocatorOptions): Locator
}
```

::: tip
The `getBy*` API is explained at [Locators API](/guide/browser/locators).
:::

::: warning WARNING <Version>3.2.0</Version>
Note that `screenshot` will always return a base64 string if `save` is set to `false`.
The `path` is also ignored in that case.
:::

## `cdp`

The `cdp` export returns the current Chrome DevTools Protocol session. It is mostly useful to library authors to build tools on top of it.

::: warning
CDP session works only with `playwright` provider and only when using `chromium` browser. You can read more about it in playwright's [`CDPSession`](https://playwright.dev/docs/api/class-cdpsession) documentation.
:::

```ts
export const cdp: () => CDPSession
```

## `server`

The `server` export represents the Node.js environment where the Vitest server is running. It is mostly useful for debugging or limiting your tests based on the environment.

```ts
export const server: {
  /**
   * Platform the Vitest server is running on.
   * The same as calling `process.platform` on the server.
   */
  platform: Platform
  /**
   * Runtime version of the Vitest server.
   * The same as calling `process.version` on the server.
   */
  version: string
  /**
   * Name of the browser provider.
   */
  provider: string
  /**
   * Name of the current browser.
   */
  browser: string
  /**
   * Available commands for the browser.
   */
  commands: BrowserCommands
  /**
   * Serialized test config.
   */
  config: SerializedConfig
}
```
````

## File: docs/guide/browser/index.md
````markdown
---
title: Browser Mode | Guide
outline: deep
---

# Browser Mode <Badge type="warning">Experimental</Badge> {#browser-mode}

This page provides information about the experimental browser mode feature in the Vitest API, which allows you to run your tests in the browser natively, providing access to browser globals like window and document. This feature is currently under development, and APIs may change in the future.

::: tip
If you are looking for documentation for `expect`, `vi` or any general API like test projects or type testing, refer to the ["Getting Started" guide](/guide/).
:::

<img alt="Vitest UI" img-light src="/ui-browser-1-light.png">
<img alt="Vitest UI" img-dark src="/ui-browser-1-dark.png">

## Installation

For easier setup, you can use `vitest init browser` command to install required dependencies and create browser configuration.

::: code-group
```bash [npm]
npx vitest init browser
```
```bash [yarn]
yarn exec vitest init browser
```
```bash [pnpm]
pnpx vitest init browser
```
```bash [bun]
bunx vitest init browser
```
:::

### Manual Installation

You can also install packages manually. By default, Browser Mode doesn't require any additional E2E provider to run tests locally because it reuses your existing browser.

::: code-group
```bash [npm]
npm install -D vitest @vitest/browser
```
```bash [yarn]
yarn add -D vitest @vitest/browser
```
```bash [pnpm]
pnpm add -D vitest @vitest/browser
```
```bash [bun]
bun add -D vitest @vitest/browser
```
:::

::: warning
However, to run tests in CI you need to install either [`playwright`](https://npmjs.com/package/playwright) or [`webdriverio`](https://www.npmjs.com/package/webdriverio). We also recommend switching to either one of them for testing locally instead of using the default `preview` provider since it relies on simulating events instead of using Chrome DevTools Protocol.

If you don't already use one of these tools, we recommend starting with Playwright because it supports parallel execution, which makes your tests run faster. Additionally, Playwright uses [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/) which is generally faster than WebDriver.

::: tabs key:provider
== Playwright
[Playwright](https://npmjs.com/package/playwright) is a framework for Web Testing and Automation.

::: code-group
```bash [npm]
npm install -D vitest @vitest/browser playwright
```
```bash [yarn]
yarn add -D vitest @vitest/browser playwright
```
```bash [pnpm]
pnpm add -D vitest @vitest/browser playwright
```
```bash [bun]
bun add -D vitest @vitest/browser playwright
```
== WebdriverIO

[WebdriverIO](https://www.npmjs.com/package/webdriverio) allows you to run tests locally using the WebDriver protocol.

::: code-group
```bash [npm]
npm install -D vitest @vitest/browser webdriverio
```
```bash [yarn]
yarn add -D vitest @vitest/browser webdriverio
```
```bash [pnpm]
pnpm add -D vitest @vitest/browser webdriverio
```
```bash [bun]
bun add -D vitest @vitest/browser webdriverio
```
:::

## Configuration

To activate browser mode in your Vitest configuration, set the `browser.enabled` field to `true` in your Vitest configuration file. Here is an example configuration using the browser field:

```ts [vitest.config.ts]
import { defineConfig } from 'vitest/config'
export default defineConfig({
  test: {
    browser: {
      provider: 'playwright', // or 'webdriverio'
      enabled: true,
      // at least one instance is required
      instances: [
        { browser: 'chromium' },
      ],
    },
  }
})
```

::: info
Vitest assigns port `63315` to avoid conflicts with the development server, allowing you to run both in parallel. You can change that with the [`browser.api`](/config/#browser-api) option.

Since Vitest 2.1.5, the CLI no longer prints the Vite URL automatically. You can press "b" to print the URL when running in watch mode.
:::

If you have not used Vite before, make sure you have your framework's plugin installed and specified in the config. Some frameworks might require extra configuration to work - check their Vite related documentation to be sure.

::: code-group
```ts [react]
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    browser: {
      enabled: true,
      provider: 'playwright',
      instances: [
        { browser: 'chromium' },
      ],
    }
  }
})
```
```ts [vue]
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    browser: {
      enabled: true,
      provider: 'playwright',
      instances: [
        { browser: 'chromium' },
      ],
    }
  }
})
```
```ts [svelte]
import { defineConfig } from 'vitest/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  test: {
    browser: {
      enabled: true,
      provider: 'playwright',
      instances: [
        { browser: 'chromium' },
      ],
    }
  }
})
```
```ts [solid]
import { defineConfig } from 'vitest/config'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin()],
  test: {
    browser: {
      enabled: true,
      provider: 'playwright',
      instances: [
        { browser: 'chromium' },
      ],
    }
  }
})
```
```ts [marko]
import { defineConfig } from 'vitest/config'
import marko from '@marko/vite'

export default defineConfig({
  plugins: [marko()],
  test: {
    browser: {
      enabled: true,
      provider: 'playwright',
      instances: [
        { browser: 'chromium' },
      ],
    }
  }
})
```
:::

If you need to run some tests using Node-based runner, you can define a [`projects`](/guide/projects) option with separate configurations for different testing strategies:

{#projects-config}

```ts [vitest.config.ts]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          // an example of file based convention,
          // you don't have to follow it
          include: [
            'tests/unit/**/*.{test,spec}.ts',
            'tests/**/*.unit.{test,spec}.ts',
          ],
          name: 'unit',
          environment: 'node',
        },
      },
      {
        test: {
          // an example of file based convention,
          // you don't have to follow it
          include: [
            'tests/browser/**/*.{test,spec}.ts',
            'tests/**/*.browser.{test,spec}.ts',
          ],
          name: 'browser',
          browser: {
            enabled: true,
            instances: [
              { browser: 'chromium' },
            ],
          },
        },
      },
    ],
  },
})
```

## Browser Option Types

The browser option in Vitest depends on the provider. Vitest will fail, if you pass `--browser` and don't specify its name in the config file. Available options:

- `webdriverio` supports these browsers:
  - `firefox`
  - `chrome`
  - `edge`
  - `safari`
- `playwright` supports these browsers:
  - `firefox`
  - `webkit`
  - `chromium`

## TypeScript

By default, TypeScript doesn't recognize providers options and extra `expect` properties. If you don't use any providers, make sure the `@vitest/browser/matchers` is referenced somewhere in your tests, [setup file](/config/#setupfiles) or a [config file](/config/) to pick up the extra `expect` definitions. If you are using custom providers, make sure to add `@vitest/browser/providers/playwright` or `@vitest/browser/providers/webdriverio` to the same file so TypeScript can pick up definitions for custom options:

::: code-group
```ts [default]
/// <reference types="@vitest/browser/matchers" />
```
```ts [playwright]
/// <reference types="@vitest/browser/providers/playwright" />
```
```ts [webdriverio]
/// <reference types="@vitest/browser/providers/webdriverio" />
```
:::

Alternatively, you can also add them to `compilerOptions.types` field in your `tsconfig.json` file. Note that specifying anything in this field will disable [auto loading](https://www.typescriptlang.org/tsconfig/#types) of `@types/*` packages.

::: code-group
```json [default]
{
  "compilerOptions": {
    "types": ["@vitest/browser/matchers"]
  }
}
```
```json [playwright]
{
  "compilerOptions": {
    "types": ["@vitest/browser/providers/playwright"]
  }
}
```
```json [webdriverio]
{
  "compilerOptions": {
    "types": ["@vitest/browser/providers/webdriverio"]
  }
}
```
:::

## Browser Compatibility

Vitest uses [Vite dev server](https://vitejs.dev/guide/#browser-support) to run your tests, so we only support features specified in the [`esbuild.target`](https://vitejs.dev/config/shared-options.html#esbuild) option (`esnext` by default).

By default, Vite targets browsers which support the native [ES Modules](https://caniuse.com/es6-module), native [ESM dynamic import](https://caniuse.com/es6-module-dynamic-import), and [`import.meta`](https://caniuse.com/mdn-javascript_operators_import_meta). On top of that, we utilize [`BroadcastChannel`](https://caniuse.com/?search=BroadcastChannel) to communicate between iframes:

- Chrome >=87
- Firefox >=78
- Safari >=15.4
- Edge >=88

## Running Tests

When you specify a browser name in the browser option, Vitest will try to run the specified browser using `preview` by default, and then run the tests there. If you don't want to use `preview`, you can configure the custom browser provider by using `browser.provider` option.

To specify a browser using the CLI, use the `--browser` flag followed by the browser name, like this:

```sh
npx vitest --browser=chromium
```

Or you can provide browser options to CLI with dot notation:

```sh
npx vitest --browser.headless
```

::: warning
Since Vitest 3.2, if you don't have the `browser` option in your config but specify the `--browser` flag, Vitest will fail because it can't assume that config is meant for the browser and not Node.js tests.
:::

By default, Vitest will automatically open the browser UI for development. Your tests will run inside an iframe in the center. You can configure the viewport by selecting the preferred dimensions, calling `page.viewport` inside the test, or setting default values in [the config](/config/#browser-viewport).

## Headless

Headless mode is another option available in the browser mode. In headless mode, the browser runs in the background without a user interface, which makes it useful for running automated tests. The headless option in Vitest can be set to a boolean value to enable or disable headless mode.

When using headless mode, Vitest won't open the UI automatically. If you want to continue using the UI but have tests run headlessly, you can install the [`@vitest/ui`](/guide/ui) package and pass the `--ui` flag when running Vitest.

Here's an example configuration enabling headless mode:

```ts [vitest.config.ts]
import { defineConfig } from 'vitest/config'
export default defineConfig({
  test: {
    browser: {
      provider: 'playwright',
      enabled: true,
      headless: true,
    },
  }
})
```

You can also set headless mode using the `--browser.headless` flag in the CLI, like this:

```sh
npx vitest --browser.headless
```

In this case, Vitest will run in headless mode using the Chrome browser.

::: warning
Headless mode is not available by default. You need to use either [`playwright`](https://npmjs.com/package/playwright) or [`webdriverio`](https://www.npmjs.com/package/webdriverio) providers to enable this feature.
:::

## Examples

By default, you don't need any external packages to work with the Browser Mode:

```js [example.test.js]
import { expect, test } from 'vitest'
import { page } from '@vitest/browser/context'
import { render } from './my-render-function.js'

test('properly handles form inputs', async () => {
  render() // mount DOM elements

  // Asserts initial state.
  await expect.element(page.getByText('Hi, my name is Alice')).toBeInTheDocument()

  // Get the input DOM node by querying the associated label.
  const usernameInput = page.getByLabelText(/username/i)

  // Type the name into the input. This already validates that the input
  // is filled correctly, no need to check the value manually.
  await usernameInput.fill('Bob')

  await expect.element(page.getByText('Hi, my name is Bob')).toBeInTheDocument()
})
```

However, Vitest also provides packages to render components for several popular frameworks out of the box:

- [`vitest-browser-vue`](https://github.com/vitest-dev/vitest-browser-vue) to render [vue](https://vuejs.org) components
- [`vitest-browser-svelte`](https://github.com/vitest-dev/vitest-browser-svelte) to render [svelte](https://svelte.dev) components
- [`vitest-browser-react`](https://github.com/vitest-dev/vitest-browser-react) to render [react](https://react.dev) components

Community packages are available for other frameworks:

- [`vitest-browser-lit`](https://github.com/EskiMojo14/vitest-browser-lit) to render [lit](https://lit.dev) components
- [`vitest-browser-preact`](https://github.com/JoviDeCroock/vitest-browser-preact) to render [preact](https://preactjs.com) components

If your framework is not represented, feel free to create your own package - it is a simple wrapper around the framework renderer and `page.elementLocator` API. We will add a link to it on this page. Make sure it has a name starting with `vitest-browser-`.

Besides rendering components and locating elements, you will also need to make assertions. Vitest forks the [`@testing-library/jest-dom`](https://github.com/testing-library/jest-dom) library to provide a wide range of DOM assertions out of the box. Read more at the [Assertions API](/guide/browser/assertion-api).

```ts
import { expect } from 'vitest'
import { page } from '@vitest/browser/context'
// element is rendered correctly
await expect.element(page.getByText('Hello World')).toBeInTheDocument()
```

Vitest exposes a [Context API](/guide/browser/context) with a small set of utilities that might be useful to you in tests. For example, if you need to make an interaction, like clicking an element or typing text into an input, you can use `userEvent` from `@vitest/browser/context`. Read more at the [Interactivity API](/guide/browser/interactivity-api).

```ts
import { page, userEvent } from '@vitest/browser/context'
await userEvent.fill(page.getByLabelText(/username/i), 'Alice')
// or just locator.fill
await page.getByLabelText(/username/i).fill('Alice')
```

::: code-group
```ts [vue]
import { render } from 'vitest-browser-vue'
import Component from './Component.vue'

test('properly handles v-model', async () => {
  const screen = render(Component)

  // Asserts initial state.
  await expect.element(screen.getByText('Hi, my name is Alice')).toBeInTheDocument()

  // Get the input DOM node by querying the associated label.
  const usernameInput = screen.getByLabelText(/username/i)

  // Type the name into the input. This already validates that the input
  // is filled correctly, no need to check the value manually.
  await usernameInput.fill('Bob')

  await expect.element(screen.getByText('Hi, my name is Bob')).toBeInTheDocument()
})
```
```ts [svelte]
import { render } from 'vitest-browser-svelte'
import { expect, test } from 'vitest'

import Greeter from './greeter.svelte'

test('greeting appears on click', async () => {
  const screen = render(Greeter, { name: 'World' })

  const button = screen.getByRole('button')
  await button.click()
  const greeting = screen.getByText(/hello world/iu)

  await expect.element(greeting).toBeInTheDocument()
})
```
```tsx [react]
import { render } from 'vitest-browser-react'
import Fetch from './fetch'

test('loads and displays greeting', async () => {
  // Render a React element into the DOM
  const screen = render(<Fetch url="/greeting" />)

  await screen.getByText('Load Greeting').click()
  // wait before throwing an error if it cannot find an element
  const heading = screen.getByRole('heading')

  // assert that the alert message is correct
  await expect.element(heading).toHaveTextContent('hello there')
  await expect.element(screen.getByRole('button')).toBeDisabled()
})
```
```ts [lit]
import { render } from 'vitest-browser-lit'
import { html } from 'lit'
import './greeter-button'

test('greeting appears on click', async () => {
  const screen = render(html`<greeter-button name="World"></greeter-button>`)

  const button = screen.getByRole('button')
  await button.click()
  const greeting = screen.getByText(/hello world/iu)

  await expect.element(greeting).toBeInTheDocument()
})
```
```tsx [preact]
import { render } from 'vitest-browser-preact'
import { createElement } from 'preact'
import Greeting from '.Greeting'

test('greeting appears on click', async () => {
  const screen = render(<Greeting />)

  const button = screen.getByRole('button')
  await button.click()
  const greeting = screen.getByText(/hello world/iu)

  await expect.element(greeting).toBeInTheDocument()
})
```
:::

Vitest doesn't support all frameworks out of the box, but you can use external tools to run tests with these frameworks. We also encourage the community to create their own `vitest-browser` wrappers - if you have one, feel free to add it to the examples above.

For unsupported frameworks, we recommend using `testing-library` packages:

- [`@solidjs/testing-library`](https://testing-library.com/docs/solid-testing-library/intro) to render [solid](https://www.solidjs.com) components
- [`@marko/testing-library`](https://testing-library.com/docs/marko-testing-library/intro) to render [marko](https://markojs.com) components

You can also see more examples in [`browser-examples`](https://github.com/vitest-tests/browser-examples) repository.

::: warning
`testing-library` provides a package `@testing-library/user-event`. We do not recommend using it directly because it simulates events instead of actually triggering them - instead, use [`userEvent`](/guide/browser/interactivity-api) imported from `@vitest/browser/context` that uses Chrome DevTools Protocol or Webdriver (depending on the provider) under the hood.
:::

::: code-group
```tsx [solid]
// based on @testing-library/solid API
// https://testing-library.com/docs/solid-testing-library/api

import { render } from '@testing-library/solid'

it('uses params', async () => {
  const App = () => (
    <>
      <Route
        path="/ids/:id"
        component={() => (
          <p>
            Id:
            {useParams()?.id}
          </p>
        )}
      />
      <Route path="/" component={() => <p>Start</p>} />
    </>
  )
  const { baseElement } = render(() => <App />, { location: 'ids/1234' })
  const screen = page.elementLocator(baseElement)

  await expect.screen(screen.getByText('Id: 1234')).toBeInTheDocument()
})
```
```ts [marko]
// based on @testing-library/marko API
// https://testing-library.com/docs/marko-testing-library/api

import { render, screen } from '@marko/testing-library'
import Greeting from './greeting.marko'

test('renders a message', async () => {
  const { baseElement } = await render(Greeting, { name: 'Marko' })
  const screen = page.elementLocator(baseElement)
  await expect.element(screen.getByText(/Marko/)).toBeInTheDocument()
  expect(container.firstChild).toMatchInlineSnapshot(`
    <h1>Hello, Marko!</h1>
  `)
})
```
:::

## Limitations

### Thread Blocking Dialogs

When using Vitest Browser, it's important to note that thread blocking dialogs like `alert` or `confirm` cannot be used natively. This is because they block the web page, which means Vitest cannot continue communicating with the page, causing the execution to hang.

In such situations, Vitest provides default mocks with default returned values for these APIs. This ensures that if the user accidentally uses synchronous popup web APIs, the execution would not hang. However, it's still recommended for the user to mock these web APIs for better experience. Read more in [Mocking](/guide/mocking).
````

## File: docs/guide/browser/interactivity-api.md
````markdown
---
title: Interactivity API | Browser Mode
---

# Interactivity API

Vitest implements a subset of [`@testing-library/user-event`](https://testing-library.com/docs/user-event/intro) APIs using [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/) or [webdriver](https://www.w3.org/TR/webdriver/) instead of faking events which makes the browser behaviour more reliable and consistent with how users interact with a page.

```ts
import { userEvent } from '@vitest/browser/context'

await userEvent.click(document.querySelector('.button'))
```

Almost every `userEvent` method inherits its provider options. To see all available options in your IDE, add `webdriver` or `playwright` types (depending on your provider) to your [setup file](/config/#setupfile) or a [config file](/config/) (depending on what is in `included` in your `tsconfig.json`):

::: code-group
```ts [playwright]
/// <reference types="@vitest/browser/providers/playwright" />
```
```ts [webdriverio]
/// <reference types="@vitest/browser/providers/webdriverio" />
```
:::

## userEvent.setup

```ts
function setup(): UserEvent
```

Creates a new user event instance. This is useful if you need to keep the state of keyboard to press and release buttons correctly.

::: warning
Unlike `@testing-library/user-event`, the default `userEvent` instance from `@vitest/browser/context` is created once, not every time its methods are called! You can see the difference in how it works in this snippet:

```ts
import { userEvent as vitestUserEvent } from '@vitest/browser/context'
import { userEvent as originalUserEvent } from '@testing-library/user-event'

await vitestUserEvent.keyboard('{Shift}') // press shift without releasing
await vitestUserEvent.keyboard('{/Shift}') // releases shift

await originalUserEvent.keyboard('{Shift}') // press shift without releasing
await originalUserEvent.keyboard('{/Shift}') // DID NOT release shift because the state is different
```

This behaviour is more useful because we do not emulate the keyboard, we actually press the Shift, so keeping the original behaviour would cause unexpected issues when typing in the field.
:::

## userEvent.click

```ts
function click(
  element: Element | Locator,
  options?: UserEventClickOptions,
): Promise<void>
```

Click on an element. Inherits provider's options. Please refer to your provider's documentation for detailed explanation about how this method works.

```ts
import { page, userEvent } from '@vitest/browser/context'

test('clicks on an element', async () => {
  const logo = page.getByRole('img', { name: /logo/ })

  await userEvent.click(logo)
  // or you can access it directly on the locator
  await logo.click()
})
```

References:

- [Playwright `locator.click` API](https://playwright.dev/docs/api/class-locator#locator-click)
- [WebdriverIO `element.click` API](https://webdriver.io/docs/api/element/click/)
- [testing-library `click` API](https://testing-library.com/docs/user-event/convenience/#click)

## userEvent.dblClick

```ts
function dblClick(
  element: Element | Locator,
  options?: UserEventDoubleClickOptions,
): Promise<void>
```

Triggers a double click event on an element.

Please refer to your provider's documentation for detailed explanation about how this method works.

```ts
import { page, userEvent } from '@vitest/browser/context'

test('triggers a double click on an element', async () => {
  const logo = page.getByRole('img', { name: /logo/ })

  await userEvent.dblClick(logo)
  // or you can access it directly on the locator
  await logo.dblClick()
})
```

References:

- [Playwright `locator.dblclick` API](https://playwright.dev/docs/api/class-locator#locator-dblclick)
- [WebdriverIO `element.doubleClick` API](https://webdriver.io/docs/api/element/doubleClick/)
- [testing-library `dblClick` API](https://testing-library.com/docs/user-event/convenience/#dblClick)

## userEvent.tripleClick

```ts
function tripleClick(
  element: Element | Locator,
  options?: UserEventTripleClickOptions,
): Promise<void>
```

Triggers a triple click event on an element. Since there is no `tripleclick` in browser api, this method will fire three click events in a row, and so you must check [click event detail](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event#usage_notes) to filter the event: `evt.detail === 3`.

Please refer to your provider's documentation for detailed explanation about how this method works.

```ts
import { page, userEvent } from '@vitest/browser/context'

test('triggers a triple click on an element', async () => {
  const logo = page.getByRole('img', { name: /logo/ })
  let tripleClickFired = false
  logo.addEventListener('click', (evt) => {
    if (evt.detail === 3) {
      tripleClickFired = true
    }
  })

  await userEvent.tripleClick(logo)
  // or you can access it directly on the locator
  await logo.tripleClick()

  expect(tripleClickFired).toBe(true)
})
```

References:

- [Playwright `locator.click` API](https://playwright.dev/docs/api/class-locator#locator-click): implemented via `click` with `clickCount: 3` .
- [WebdriverIO `browser.action` API](https://webdriver.io/docs/api/browser/action/): implemented via actions api with `move` plus three `down + up + pause` events in a row
- [testing-library `tripleClick` API](https://testing-library.com/docs/user-event/convenience/#tripleClick)

## userEvent.fill

```ts
function fill(
  element: Element | Locator,
  text: string,
): Promise<void>
```

Set a value to the `input`/`textarea`/`contenteditable` field. This will remove any existing text in the input before setting the new value.

```ts
import { page, userEvent } from '@vitest/browser/context'

test('update input', async () => {
  const input = page.getByRole('input')

  await userEvent.fill(input, 'foo') // input.value == foo
  await userEvent.fill(input, '{{a[[') // input.value == {{a[[
  await userEvent.fill(input, '{Shift}') // input.value == {Shift}

  // or you can access it directly on the locator
  await input.fill('foo') // input.value == foo
})
```

This methods focuses the element, fills it and triggers an `input` event after filling. You can use an empty string to clear the field.

::: tip
This API is faster than using [`userEvent.type`](#userevent-type) or [`userEvent.keyboard`](#userevent-keyboard), but it **doesn't support** [user-event `keyboard` syntax](https://testing-library.com/docs/user-event/keyboard) (e.g., `{Shift}{selectall}`).

We recommend using this API over [`userEvent.type`](#userevent-type) in situations when you don't need to enter special characters or have granular control over keypress events.
:::

References:

- [Playwright `locator.fill` API](https://playwright.dev/docs/api/class-locator#locator-fill)
- [WebdriverIO `element.setValue` API](https://webdriver.io/docs/api/element/setValue)
- [testing-library `type` API](https://testing-library.com/docs/user-event/utility/#type)

## userEvent.keyboard

```ts
function keyboard(text: string): Promise<void>
```

The `userEvent.keyboard` allows you to trigger keyboard strokes. If any input has a focus, it will type characters into that input. Otherwise, it will trigger keyboard events on the currently focused element (`document.body` if there are no focused elements).

This API supports [user-event `keyboard` syntax](https://testing-library.com/docs/user-event/keyboard).

```ts
import { userEvent } from '@vitest/browser/context'

test('trigger keystrokes', async () => {
  await userEvent.keyboard('foo') // translates to: f, o, o
  await userEvent.keyboard('{{a[[') // translates to: {, a, [
  await userEvent.keyboard('{Shift}{f}{o}{o}') // translates to: Shift, f, o, o
  await userEvent.keyboard('{a>5}') // press a without releasing it and trigger 5 keydown
  await userEvent.keyboard('{a>5/}') // press a for 5 keydown and then release it
})
```

References:

- [Playwright `Keyboard` API](https://playwright.dev/docs/api/class-keyboard)
- [WebdriverIO `action('key')` API](https://webdriver.io/docs/api/browser/action#key-input-source)
- [testing-library `type` API](https://testing-library.com/docs/user-event/utility/#type)

## userEvent.tab

```ts
function tab(options?: UserEventTabOptions): Promise<void>
```

Sends a `Tab` key event. This is a shorthand for `userEvent.keyboard('{tab}')`.

```ts
import { page, userEvent } from '@vitest/browser/context'

test('tab works', async () => {
  const [input1, input2] = page.getByRole('input').elements()

  expect(input1).toHaveFocus()

  await userEvent.tab()

  expect(input2).toHaveFocus()

  await userEvent.tab({ shift: true })

  expect(input1).toHaveFocus()
})
```

References:

- [Playwright `Keyboard` API](https://playwright.dev/docs/api/class-keyboard)
- [WebdriverIO `action('key')` API](https://webdriver.io/docs/api/browser/action#key-input-source)
- [testing-library `tab` API](https://testing-library.com/docs/user-event/convenience/#tab)

## userEvent.type

```ts
function type(
  element: Element | Locator,
  text: string,
  options?: UserEventTypeOptions,
): Promise<void>
```

::: warning
If you don't rely on [special characters](https://testing-library.com/docs/user-event/keyboard) (e.g., `{shift}` or `{selectall}`), it is recommended to use [`userEvent.fill`](#userevent-fill) instead for better performance.
:::

The `type` method implements `@testing-library/user-event`'s [`type`](https://testing-library.com/docs/user-event/utility/#type) utility built on top of [`keyboard`](https://testing-library.com/docs/user-event/keyboard) API.

This function allows you to type characters into an `input`/`textarea`/`contenteditable` element. It supports [user-event `keyboard` syntax](https://testing-library.com/docs/user-event/keyboard).

If you just need to press characters without an input, use [`userEvent.keyboard`](#userevent-keyboard) API.

```ts
import { page, userEvent } from '@vitest/browser/context'

test('update input', async () => {
  const input = page.getByRole('input')

  await userEvent.type(input, 'foo') // input.value == foo
  await userEvent.type(input, '{{a[[') // input.value == foo{a[
  await userEvent.type(input, '{Shift}') // input.value == foo{a[
})
```

::: info
Vitest doesn't expose `.type` method on the locator like `input.type` because it exists only for compatibility with the `userEvent` library. Consider using `.fill` instead as it is faster.
:::

References:

- [Playwright `locator.press` API](https://playwright.dev/docs/api/class-locator#locator-press)
- [WebdriverIO `action('key')` API](https://webdriver.io/docs/api/browser/action#key-input-source)
- [testing-library `type` API](https://testing-library.com/docs/user-event/utility/#type)

## userEvent.clear

```ts
function clear(element: Element | Locator, options?: UserEventClearOptions): Promise<void>
```

This method clears the input element content.

```ts
import { page, userEvent } from '@vitest/browser/context'

test('clears input', async () => {
  const input = page.getByRole('input')

  await userEvent.fill(input, 'foo')
  expect(input).toHaveValue('foo')

  await userEvent.clear(input)
  // or you can access it directly on the locator
  await input.clear()

  expect(input).toHaveValue('')
})
```

References:

- [Playwright `locator.clear` API](https://playwright.dev/docs/api/class-locator#locator-clear)
- [WebdriverIO `element.clearValue` API](https://webdriver.io/docs/api/element/clearValue)
- [testing-library `clear` API](https://testing-library.com/docs/user-event/utility/#clear)

## userEvent.selectOptions

```ts
function selectOptions(
  element: Element | Locator,
  values:
    | HTMLElement
    | HTMLElement[]
    | Locator
    | Locator[]
    | string
    | string[],
  options?: UserEventSelectOptions,
): Promise<void>
```

The `userEvent.selectOptions` allows selecting a value in a `<select>` element.

::: warning
If select element doesn't have [`multiple`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-multiple) attribute, Vitest will select only the first element in the array.

Unlike `@testing-library`, Vitest doesn't support [listbox](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role) at the moment, but we plan to add support for it in the future.
:::

```ts
import { page, userEvent } from '@vitest/browser/context'

test('clears input', async () => {
  const select = page.getByRole('select')

  await userEvent.selectOptions(select, 'Option 1')
  // or you can access it directly on the locator
  await select.selectOptions('Option 1')

  expect(select).toHaveValue('option-1')

  await userEvent.selectOptions(select, 'option-1')
  expect(select).toHaveValue('option-1')

  await userEvent.selectOptions(select, [
    page.getByRole('option', { name: 'Option 1' }),
    page.getByRole('option', { name: 'Option 2' }),
  ])
  expect(select).toHaveValue(['option-1', 'option-2'])
})
```

::: warning
`webdriverio` provider doesn't support selecting multiple elements because it doesn't provide API to do so.
:::

References:

- [Playwright `locator.selectOption` API](https://playwright.dev/docs/api/class-locator#locator-select-option)
- [WebdriverIO `element.selectByIndex` API](https://webdriver.io/docs/api/element/selectByIndex)
- [testing-library `selectOptions` API](https://testing-library.com/docs/user-event/utility/#-selectoptions-deselectoptions)

## userEvent.hover

```ts
function hover(
  element: Element | Locator,
  options?: UserEventHoverOptions,
): Promise<void>
```

This method moves the cursor position to the selected element. Please refer to your provider's documentation for detailed explanation about how this method works.

::: warning
If you are using `webdriverio` provider, the cursor will move to the center of the element by default.

If you are using `playwright` provider, the cursor moves to "some" visible point of the element.
:::

```ts
import { page, userEvent } from '@vitest/browser/context'

test('hovers logo element', async () => {
  const logo = page.getByRole('img', { name: /logo/ })

  await userEvent.hover(logo)
  // or you can access it directly on the locator
  await logo.hover()
})
```

References:

- [Playwright `locator.hover` API](https://playwright.dev/docs/api/class-locator#locator-hover)
- [WebdriverIO `element.moveTo` API](https://webdriver.io/docs/api/element/moveTo/)
- [testing-library `hover` API](https://testing-library.com/docs/user-event/convenience/#hover)

## userEvent.unhover

```ts
function unhover(
  element: Element | Locator,
  options?: UserEventHoverOptions,
): Promise<void>
```

This works the same as [`userEvent.hover`](#userevent-hover), but moves the cursor to the `document.body` element instead.

::: warning
By default, the cursor position is in "some" visible place (in `playwright` provider) or in the center (in `webdriverio` provider) of the body element, so if the currently hovered element is already in the same position, this method will have no effect.
:::

```ts
import { page, userEvent } from '@vitest/browser/context'

test('unhover logo element', async () => {
  const logo = page.getByRole('img', { name: /logo/ })

  await userEvent.unhover(logo)
  // or you can access it directly on the locator
  await logo.unhover()
})
```

References:

- [Playwright `locator.hover` API](https://playwright.dev/docs/api/class-locator#locator-hover)
- [WebdriverIO `element.moveTo` API](https://webdriver.io/docs/api/element/moveTo/)
- [testing-library `hover` API](https://testing-library.com/docs/user-event/convenience/#hover)

## userEvent.upload

```ts
function upload(
  element: Element | Locator,
  files: string[] | string | File[] | File,
  options?: UserEventUploadOptions,
): Promise<void>
```

Change a file input element to have the specified files.

```ts
import { page, userEvent } from '@vitest/browser/context'

test('can upload a file', async () => {
  const input = page.getByRole('button', { name: /Upload files/ })

  const file = new File(['file'], 'file.png', { type: 'image/png' })

  await userEvent.upload(input, file)
  // or you can access it directly on the locator
  await input.upload(file)

  // you can also use file paths relative to the root of the project
  await userEvent.upload(input, './fixtures/file.png')
})
```

::: warning
`webdriverio` provider supports this command only in `chrome` and `edge` browsers. It also only supports string types at the moment.
:::

References:

- [Playwright `locator.setInputFiles` API](https://playwright.dev/docs/api/class-locator#locator-set-input-files)
- [WebdriverIO `browser.uploadFile` API](https://webdriver.io/docs/api/browser/uploadFile)
- [testing-library `upload` API](https://testing-library.com/docs/user-event/utility/#upload)

## userEvent.dragAndDrop

```ts
function dragAndDrop(
  source: Element | Locator,
  target: Element | Locator,
  options?: UserEventDragAndDropOptions,
): Promise<void>
```

Drags the source element on top of the target element. Don't forget that the `source` element has to have the `draggable` attribute set to `true`.

```ts
import { page, userEvent } from '@vitest/browser/context'

test('drag and drop works', async () => {
  const source = page.getByRole('img', { name: /logo/ })
  const target = page.getByTestId('logo-target')

  await userEvent.dragAndDrop(source, target)
  // or you can access it directly on the locator
  await source.dropTo(target)

  await expect.element(target).toHaveTextContent('Logo is processed')
})
```

::: warning
This API is not supported by the default `preview` provider.
:::

References:

- [Playwright `frame.dragAndDrop` API](https://playwright.dev/docs/api/class-frame#frame-drag-and-drop)
- [WebdriverIO `element.dragAndDrop` API](https://webdriver.io/docs/api/element/dragAndDrop/)

## userEvent.copy

```ts
function copy(): Promise<void>
```

Copy the selected text to the clipboard.

```js
import { page, userEvent } from '@vitest/browser/context'

test('copy and paste', async () => {
  // write to 'source'
  await userEvent.click(page.getByPlaceholder('source'))
  await userEvent.keyboard('hello')

  // select and copy 'source'
  await userEvent.dblClick(page.getByPlaceholder('source'))
  await userEvent.copy()

  // paste to 'target'
  await userEvent.click(page.getByPlaceholder('target'))
  await userEvent.paste()

  await expect.element(page.getByPlaceholder('source')).toHaveTextContent('hello')
  await expect.element(page.getByPlaceholder('target')).toHaveTextContent('hello')
})
```

References:

- [testing-library `copy` API](https://testing-library.com/docs/user-event/convenience/#copy)

## userEvent.cut

```ts
function cut(): Promise<void>
```

Cut the selected text to the clipboard.

```js
import { page, userEvent } from '@vitest/browser/context'

test('copy and paste', async () => {
  // write to 'source'
  await userEvent.click(page.getByPlaceholder('source'))
  await userEvent.keyboard('hello')

  // select and cut 'source'
  await userEvent.dblClick(page.getByPlaceholder('source'))
  await userEvent.cut()

  // paste to 'target'
  await userEvent.click(page.getByPlaceholder('target'))
  await userEvent.paste()

  await expect.element(page.getByPlaceholder('source')).toHaveTextContent('')
  await expect.element(page.getByPlaceholder('target')).toHaveTextContent('hello')
})
```

References:

- [testing-library `cut` API](https://testing-library.com/docs/user-event/clipboard#cut)

## userEvent.paste

```ts
function paste(): Promise<void>
```

Paste the text from the clipboard. See [`userEvent.copy`](#userevent-copy) and [`userEvent.cut`](#userevent-cut) for usage examples.

References:

- [testing-library `paste` API](https://testing-library.com/docs/user-event/clipboard#paste)
````

## File: docs/guide/browser/locators.md
````markdown
---
title: Locators | Browser Mode
outline: [2, 3]
---

# Locators

A locator is a representation of an element or a number of elements. Every locator is defined by a string called a selector. Vitest abstracts this selector by providing convenient methods that generate them behind the scenes.

The locator API uses a fork of [Playwright's locators](https://playwright.dev/docs/api/class-locator) called [Ivya](https://npmjs.com/ivya). However, Vitest provides this API to every [provider](/guide/browser/config.html#browser-provider), not just playwright.

::: tip
This page covers API usage. To better understand locators and their usage, read [Playwright's "Locators" documentation](https://playwright.dev/docs/locators).
:::

## getByRole

```ts
function getByRole(
  role: ARIARole | string,
  options?: LocatorByRoleOptions,
): Locator
```

Creates a way to locate an element by its [ARIA role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles), [ARIA attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes) and [accessible name](https://developer.mozilla.org/en-US/docs/Glossary/Accessible_name).

::: tip
If you only query for a single element with `getByText('The name')` it's oftentimes better to use `getByRole(expectedRole, { name: 'The name' })`. The accessible name query does not replace other queries such as `*ByAltText` or `*ByTitle`. While the accessible name can be equal to these attributes, it does not replace the functionality of these attributes.
:::

Consider the following DOM structure.

```html
<h3>Sign up</h3>
<label>
  Login
  <input type="text" />
</label>
<label>
  Password
  <input type="password" />
</label>
<br/>
<button>Submit</button>
```

You can locate each element by its implicit role:

```ts
await expect.element(
  page.getByRole('heading', { name: 'Sign up' })
).toBeVisible()

await page.getByRole('textbox', { name: 'Login' }).fill('admin')
await page.getByRole('textbox', { name: 'Password' }).fill('admin')

await page.getByRole('button', { name: /submit/i }).click()
```

::: warning
Roles are matched by string equality, without inheriting from the ARIA role hierarchy. As a result, querying a superclass role like `checkbox` will not include elements with a subclass role like `switch`.

By default, many semantic elements in HTML have a role; for example, `<input type="radio">` has the "radio" role. Non-semantic elements in HTML do not have a role; `<div>` and `<span>` without added semantics return `null`. The `role` attribute can provide semantics.

Providing roles via `role` or `aria-*` attributes to built-in elements that already have an implicit role is **highly discouraged** by ARIA guidelines.
:::

##### Options

- `exact: boolean`

  Whether the `name` is matched exactly: case-sensitive and whole-string. Disabled by default. This option is ignored if `name` is a regular expression. Note that exact match still trims whitespace.

  ```tsx
  <button>Hello World</button>

  page.getByRole('button', { name: 'hello world' }) // ✅
  page.getByRole('button', { name: 'hello world', exact: true }) // ❌
  page.getByRole('button', { name: 'Hello World', exact: true }) // ✅
  ```

- `checked: boolean`

  Should checked elements (set by `aria-checked` or `<input type="checkbox"/>`) be included or not. By default, the filter is not applied.

  See [`aria-checked`](https://www.w3.org/TR/wai-aria-1.2/#aria-checked) for more information

  ```tsx
  <>
    <button role="checkbox" aria-checked="true" />
    <input type="checkbox" checked />
  </>

  page.getByRole('checkbox', { checked: true }) // ✅
  page.getByRole('checkbox', { checked: false }) // ❌
  ```

- `disabled: boolean`

  Should disabled elements be included or not. By default, the filter is not applied. Note that unlike other attributes, `disable` state is inherited.

  See [`aria-disabled`](https://www.w3.org/TR/wai-aria-1.2/#aria-disabled) for more information

  ```tsx
  <input type="text" disabled />

  page.getByRole('textbox', { disabled: true }) // ✅
  page.getByRole('textbox', { disabled: false }) // ❌
  ```

- `expanded: boolean`

  Should expanded elements be included or not. By default, the filter is not applied.

  See [`aria-expanded`](https://www.w3.org/TR/wai-aria-1.2/#aria-expanded) for more information

  ```tsx
  <a aria-expanded="true" href="example.com">Link</a>

  page.getByRole('link', { expanded: true }) // ✅
  page.getByRole('link', { expanded: false }) // ❌
  ```

- `includeHidden: boolean`

  Should elements that are [normally excluded](https://www.w3.org/TR/wai-aria-1.2/#tree_exclusion) from the accessibility tree be queried. By default, only non-hidden elements are matched by role selector.

  Note that roles `none` and `presentation` are always included.

  ```tsx
  <button style="display: none" />

  page.getByRole('button') // ❌
  page.getByRole('button', { includeHidden: false }) // ❌
  page.getByRole('button', { includeHidden: true }) // ✅
  ```

- `level: number`

  A number attribute that is usually present for `heading`, `listitem`, `row`, `treeitem` roles with default values for `<h1>-<h6>` elements. By default, the filter is not applied.

  See [`aria-level`](https://www.w3.org/TR/wai-aria-1.2/#aria-level) for more information

  ```tsx
  <>
    <h1>Heading Level One</h1>
    <div role="heading" aria-level="1">Second Heading Level One</div>
  </>

  page.getByRole('heading', { level: 1 }) // ✅
  page.getByRole('heading', { level: 2 }) // ❌
  ```

- `name: string | RegExp`

  [An accessible name](https://developer.mozilla.org/en-US/docs/Glossary/Accessible_name). By default, matching is case-insensitive and searches for a substring. Use `exact` option to control this behavior.

  ```tsx
  <button>Click Me!</button>

  page.getByRole('button', { name: 'Click Me!' }) // ✅
  page.getByRole('button', { name: 'click me!' }) // ✅
  page.getByRole('button', { name: 'Click Me?' }) // ❌
  ```

- `pressed: boolean`

  Should pressed elements be included or not. By default, the filter is not applied.

  See [`aria-pressed`](https://www.w3.org/TR/wai-aria-1.2/#aria-pressed) for more information

  ```tsx
  <button aria-pressed="true">👍</button>

  page.getByRole('button', { pressed: true }) // ✅
  page.getByRole('button', { pressed: false }) // ❌
  ```

- `selected: boolean`

  Should selected elements be included or not. By default, the filter is not applied.

  See [`aria-selected`](https://www.w3.org/TR/wai-aria-1.2/#aria-selected) for more information

  ```tsx
  <button role="tab" aria-selected="true">Vue</button>

  page.getByRole('button', { selected: true }) // ✅
  page.getByRole('button', { selected: false }) // ❌
  ```

##### See also

- [List of ARIA roles at MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
- [List of ARIA roles at w3.org](https://www.w3.org/TR/wai-aria-1.2/#role_definitions)
- [testing-library's `ByRole`](https://testing-library.com/docs/queries/byrole/)

## getByAltText

```ts
function getByAltText(
  text: string | RegExp,
  options?: LocatorOptions,
): Locator
```

Creates a locator capable of finding an element with an `alt` attribute that matches the text. Unlike testing-library's implementation, Vitest will match any element that has a matching `alt` attribute.

```tsx
<img alt="Incredibles 2 Poster" src="/incredibles-2.png" />

page.getByAltText(/incredibles.*? poster/i) // ✅
page.getByAltText('non existing alt text') // ❌
```

#### Options

- `exact: boolean`

  Whether the `text` is matched exactly: case-sensitive and whole-string. Disabled by default. This option is ignored if `text` is a regular expression. Note that exact match still trims whitespace.

#### See also

- [testing-library's `ByAltText`](https://testing-library.com/docs/queries/byalttext/)

## getByLabelText

```ts
function getByLabelText(
  text: string | RegExp,
  options?: LocatorOptions,
): Locator
```

Creates a locator capable of finding an element that has an associated label.

The `page.getByLabelText('Username')` locator will find every input in the example bellow:

```html
// for/htmlFor relationship between label and form element id
<label for="username-input">Username</label>
<input id="username-input" />

// The aria-labelledby attribute with form elements
<label id="username-label">Username</label>
<input aria-labelledby="username-label" />

// Wrapper labels
<label>Username <input /></label>

// Wrapper labels where the label text is in another child element
<label>
  <span>Username</span>
  <input />
</label>

// aria-label attributes
// Take care because this is not a label that users can see on the page,
// so the purpose of your input must be obvious to visual users.
<input aria-label="Username" />
```

#### Options

- `exact: boolean`

  Whether the `text` is matched exactly: case-sensitive and whole-string. Disabled by default. This option is ignored if `text` is a regular expression. Note that exact match still trims whitespace.

#### See also

- [testing-library's `ByLabelText`](https://testing-library.com/docs/queries/bylabeltext/)

## getByPlaceholder

```ts
function getByPlaceholder(
  text: string | RegExp,
  options?: LocatorOptions,
): Locator
```

Creates a locator capable of finding an element that has the specified `placeholder` attribute. Vitest will match any element that has a matching `placeholder` attribute, not just `input`.

```tsx
<input placeholder="Username" />

page.getByPlaceholder('Username') // ✅
page.getByPlaceholder('not found') // ❌
```

::: warning
It is generally better to rely on a label using [`getByLabelText`](#getbylabeltext) than a placeholder.
:::

#### Options

- `exact: boolean`

  Whether the `text` is matched exactly: case-sensitive and whole-string. Disabled by default. This option is ignored if `text` is a regular expression. Note that exact match still trims whitespace.

#### See also

- [testing-library's `ByPlaceholderText`](https://testing-library.com/docs/queries/byplaceholdertext/)

## getByText

```ts
function getByText(
  text: string | RegExp,
  options?: LocatorOptions,
): Locator
```

Creates a locator capable of finding an element that contains the specified text. The text will be matched against TextNode's [`nodeValue`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeValue) or input's value if the type is `button` or `reset`. Matching by text always normalizes whitespace, even with exact match. For example, it turns multiple spaces into one, turns line breaks into spaces and ignores leading and trailing whitespace.

```tsx
<a href="/about">About ℹ️</a>

page.getByText(/about/i) // ✅
page.getByText('about', { exact: true }) // ❌
```

::: tip
This locator is useful for locating non-interactive elements. If you need to locate an interactive element, like a button or an input, prefer [`getByRole`](#getbyrole).
:::

#### Options

- `exact: boolean`

  Whether the `text` is matched exactly: case-sensitive and whole-string. Disabled by default. This option is ignored if `text` is a regular expression. Note that exact match still trims whitespace.

#### See also

- [testing-library's `ByText`](https://testing-library.com/docs/queries/bytext/)

## getByTitle

```ts
function getByTitle(
  text: string | RegExp,
  options?: LocatorOptions,
): Locator
```

Creates a locator capable of finding an element that has the specified `title` attribute. Unlike testing-library's `getByTitle`, Vitest cannot find `title` elements within an SVG.

```tsx
<span title="Delete" id="2"></span>

page.getByTitle('Delete') // ✅
page.getByTitle('Create') // ❌
```

#### Options

- `exact: boolean`

  Whether the `text` is matched exactly: case-sensitive and whole-string. Disabled by default. This option is ignored if `text` is a regular expression. Note that exact match still trims whitespace.

#### See also

- [testing-library's `ByTitle`](https://testing-library.com/docs/queries/bytitle/)

## getByTestId

```ts
function getByTestId(text: string | RegExp): Locator
```

Creates a locator capable of finding an element that matches the specified test id attribute. You can configure the attribute name with [`browser.locators.testIdAttribute`](/guide/browser/config#browser-locators-testidattribute).

```tsx
<div data-testid="custom-element" />

page.getByTestId('custom-element') // ✅
page.getByTestId('non-existing-element') // ❌
```

::: warning
It is recommended to use this only after the other locators don't work for your use case. Using `data-testid` attributes does not resemble how your software is used and should be avoided if possible.
:::

#### Options

- `exact: boolean`

  Whether the `text` is matched exactly: case-sensitive and whole-string. Disabled by default. This option is ignored if `text` is a regular expression. Note that exact match still trims whitespace.

#### See also

- [testing-library's `ByTestId`](https://testing-library.com/docs/queries/bytestid/)

## nth

```ts
function nth(index: number): Locator
```

This method returns a new locator that matches only a specific index within a multi-element query result. It's zero based, `nth(0)` selects the first element. Unlike `elements()[n]`, the `nth` locator will be retried until the element is present.

```html
<div aria-label="one"><input/><input/><input/></div>
<div aria-label="two"><input/></div>
```

```tsx
page.getByRole('textbox').nth(0) // ✅
page.getByRole('textbox').nth(4) // ❌
```

::: tip
Before resorting to `nth`, you may find it useful to use chained locators to narrow down your search.
Sometimes there is no better way to distinguish than by element position; although this can lead to flake, it's better than nothing.
:::

```tsx
page.getByLabel('two').getByRole('input') // ✅ better alternative to page.getByRole('textbox').nth(3)
page.getByLabel('one').getByRole('input') // ❌ too ambiguous
page.getByLabel('one').getByRole('input').nth(1) // ✅ pragmatic compromise
```

## first

```ts
function first(): Locator
```

This method returns a new locator that matches only the first index of a multi-element query result.
It is sugar for `nth(0)`.

```html
<input/> <input/> <input/>
```

```tsx
page.getByRole('textbox').first() // ✅
```

## last

```ts
function last(): Locator
```

This method returns a new locator that matches only the last index of a multi-element query result.
It is sugar for `nth(-1)`.

```html
<input/> <input/> <input/>
```

```tsx
page.getByRole('textbox').last() // ✅
```

## and

```ts
function and(locator: Locator): Locator
```

This method creates a new locator that matches both the parent and provided locator. The following example finds a button with a specific title:

```ts
page.getByRole('button').and(page.getByTitle('Subscribe'))
```

## or

```ts
function or(locator: Locator): Locator
```

This method creates a new locator that matches either one or both locators.

::: warning
Note that if locator matches more than a single element, calling another method might throw an error if it expects a single element:

```tsx
<>
  <button>Click me</button>
  <a href="https://vitest.dev">Error happened!</a>
</>

page.getByRole('button')
  .or(page.getByRole('link'))
  .click() // ❌ matches multiple elements
```
:::

## filter

```ts
function filter(options: LocatorOptions): Locator
```

This methods narrows down the locator according to the options, such as filtering by text. It can be chained to apply multiple filters.

### has

- **Type:** `Locator`

This options narrows down the selector to match elements that contain other elements matching provided locator. For example, with this HTML:

```html{1,3}
<article>
  <div>Vitest</div>
</article>
<article>
  <div>Rolldown</div>
</article>
```

We can narrow down the locator to only find the `article` with `Vitest` text inside:

```ts
page.getByRole('article').filter({ has: page.getByText('Vitest') }) // ✅
```

::: warning
Provided locator (`page.getByText('Vitest')` in the example) must be relative to the parent locator (`page.getByRole('article')` in the example). It will be queried starting with the parent locator, not the document root.

Meaning, you cannot pass down a locator that queries the element outside of the parent locator:

```ts
page.getByText('Vitest').filter({ has: page.getByRole('article') }) // ❌
```

This example will fail because the `article` element is outside the element with `Vitest` text.
:::

::: tip
This method can be chained to narrow down the element even further:

```ts
page.getByRole('article')
  .filter({ has: page.getByRole('button', { name: 'delete row' }) })
  .filter({ has: page.getByText('Vitest') })
```
:::

### hasNot

- **Type:** `Locator`

This option narrows down the selector to match elements that do not contain other elements matching provided locator. For example, with this HTML:

```html{1,3}
<article>
  <div>Vitest</div>
</article>
<article>
  <div>Rolldown</div>
</article>
```

We can narrow down the locator to only find the `article` that doesn't have `Rolldown` inside.

```ts
page.getByRole('article')
  .filter({ hasNot: page.getByText('Rolldown') }) // ✅
page.getByRole('article')
  .filter({ hasNot: page.getByText('Vitest') }) // ❌
```

::: warning
Note that provided locator is queried against the parent, not the document root, just like [`has`](#has) option.
:::

### hasText

- **Type:** `string | RegExp`

This options narrows down the selector to only match elements that contain provided text somewhere inside. When the `string` is passed, matching is case-insensitive and searches for a substring.

```html{1,3}
<article>
  <div>Vitest</div>
</article>
<article>
  <div>Rolldown</div>
</article>
```

Both locators will find the same element because the search is case-insensitive:

```ts
page.getByRole('article').filter({ hasText: 'Vitest' }) // ✅
page.getByRole('article').filter({ hasText: 'Vite' }) // ✅
```

### hasNotText

- **Type:** `string | RegExp`

This options narrows down the selector to only match elements that do not contain provided text somewhere inside. When the `string` is passed, matching is case-insensitive and searches for a substring.

## Methods

All methods are asynchronous and must be awaited. Since Vitest 3, tests will fail if a method is not awaited.

### click

```ts
function click(options?: UserEventClickOptions): Promise<void>
```

Click on an element. You can use the options to set the cursor position.

```ts
import { page } from '@vitest/browser/context'

await page.getByRole('img', { name: 'Rose' }).click()
```

- [See more at `userEvent.click`](/guide/browser/interactivity-api#userevent-click)

### dblClick

```ts
function dblClick(options?: UserEventDoubleClickOptions): Promise<void>
```

Triggers a double click event on an element. You can use the options to set the cursor position.

```ts
import { page } from '@vitest/browser/context'

await page.getByRole('img', { name: 'Rose' }).dblClick()
```

- [See more at `userEvent.dblClick`](/guide/browser/interactivity-api#userevent-dblclick)

### tripleClick

```ts
function tripleClick(options?: UserEventTripleClickOptions): Promise<void>
```

Triggers a triple click event on an element. Since there is no `tripleclick` in browser api, this method will fire three click events in a row.

```ts
import { page } from '@vitest/browser/context'

await page.getByRole('img', { name: 'Rose' }).tripleClick()
```

- [See more at `userEvent.tripleClick`](/guide/browser/interactivity-api#userevent-tripleclick)

### clear

```ts
function clear(options?: UserEventClearOptions): Promise<void>
```

Clears the input element content.

```ts
import { page } from '@vitest/browser/context'

await page.getByRole('textbox', { name: 'Full Name' }).clear()
```

- [See more at `userEvent.clear`](/guide/browser/interactivity-api#userevent-clear)

### hover

```ts
function hover(options?: UserEventHoverOptions): Promise<void>
```

Moves the cursor position to the selected element.

```ts
import { page } from '@vitest/browser/context'

await page.getByRole('img', { name: 'Rose' }).hover()
```

- [See more at `userEvent.hover`](/guide/browser/interactivity-api#userevent-hover)

### unhover

```ts
function unhover(options?: UserEventHoverOptions): Promise<void>
```

This works the same as [`locator.hover`](#hover), but moves the cursor to the `document.body` element instead.

```ts
import { page } from '@vitest/browser/context'

await page.getByRole('img', { name: 'Rose' }).unhover()
```

- [See more at `userEvent.unhover`](/guide/browser/interactivity-api#userevent-unhover)

### fill

```ts
function fill(text: string, options?: UserEventFillOptions): Promise<void>
```

Sets the value of the current `input`, `textarea` or `contenteditable` element.

```ts
import { page } from '@vitest/browser/context'

await page.getByRole('input', { name: 'Full Name' }).fill('Mr. Bean')
```

- [See more at `userEvent.fill`](/guide/browser/interactivity-api#userevent-fill)

### dropTo

```ts
function dropTo(
  target: Locator,
  options?: UserEventDragAndDropOptions,
): Promise<void>
```

Drags the current element to the target location.

```ts
import { page } from '@vitest/browser/context'

const paris = page.getByText('Paris')
const france = page.getByText('France')

await paris.dropTo(france)
```

- [See more at `userEvent.dragAndDrop`](/guide/browser/interactivity-api#userevent-draganddrop)

### selectOptions

```ts
function selectOptions(
  values:
    | HTMLElement
    | HTMLElement[]
    | Locator
    | Locator[]
    | string
    | string[],
  options?: UserEventSelectOptions,
): Promise<void>
```

Choose one or more values from a `<select>` element.

```ts
import { page } from '@vitest/browser/context'

const languages = page.getByRole('select', { name: 'Languages' })

await languages.selectOptions('EN')
await languages.selectOptions(['ES', 'FR'])
await languages.selectOptions([
  languages.getByRole('option', { name: 'Spanish' }),
  languages.getByRole('option', { name: 'French' }),
])
```

- [See more at `userEvent.selectOptions`](/guide/browser/interactivity-api#userevent-selectoptions)

### screenshot

```ts
function screenshot(options: LocatorScreenshotOptions & { save: false }): Promise<string>
function screenshot(options: LocatorScreenshotOptions & { base64: true }): Promise<{
  path: string
  base64: string
}>
function screenshot(options?: LocatorScreenshotOptions & { base64?: false }): Promise<string>
```

Creates a screenshot of the element matching the locator's selector.

You can specify the save location for the screenshot using the `path` option, which is relative to the current test file. If the `path` option is not set, Vitest will default to using [`browser.screenshotDirectory`](/guide/browser/config#browser-screenshotdirectory) (`__screenshot__` by default), along with the names of the file and the test to determine the screenshot's filepath.

If you also need the content of the screenshot, you can specify `base64: true` to return it alongside the filepath where the screenshot is saved.

```ts
import { page } from '@vitest/browser/context'

const button = page.getByRole('button', { name: 'Click Me!' })

const path = await button.screenshot()

const { path, base64 } = await button.screenshot({
  path: './button-click-me.png',
  base64: true, // also return base64 string
})
// path - fullpath to the screenshot
// bas64 - base64 encoded string of the screenshot
```

::: warning WARNING <Version>3.2.0</Version>
Note that `screenshot` will always return a base64 string if `save` is set to `false`.
The `path` is also ignored in that case.
:::

### query

```ts
function query(): Element | null
```

This method returns a single element matching the locator's selector or `null` if no element is found.

If multiple elements match the selector, this method will throw an error.  Use [`.elements()`](#elements) when you need all matching DOM Elements or [`.all()`](#all) if you need an array of locators matching the selector.

Consider the following DOM structure:

```html
<div>Hello <span>World</span></div>
<div>Hello</div>
```

These locators will not throw an error:

```ts
page.getByText('Hello World').query() // ✅ HTMLDivElement
page.getByText('Hello Germany').query() // ✅ null
page.getByText('World').query() // ✅ HTMLSpanElement
page.getByText('Hello', { exact: true }).query() // ✅ HTMLSpanElement
```

These locators will throw an error:

```ts
// returns multiple elements
page.getByText('Hello').query() // ❌
page.getByText(/^Hello/).query() // ❌
```

### element

```ts
function element(): Element
```

This method returns a single element matching the locator's selector.

If _no element_ matches the selector, an error is thrown. Consider using [`.query()`](#query) when you just need to check if the element exists.

If _multiple elements_ match the selector, an error is thrown. Use [`.elements()`](#elements) when you need all matching DOM Elements or [`.all()`](#all) if you need an array of locators matching the selector.

::: tip
This method can be useful if you need to pass it down to an external library. It is called automatically when locator is used with `expect.element` every time the assertion is [retried](/guide/browser/assertion-api):

```ts
await expect.element(page.getByRole('button')).toBeDisabled()
```
:::

Consider the following DOM structure:

```html
<div>Hello <span>World</span></div>
<div>Hello Germany</div>
<div>Hello</div>
```

These locators will not throw an error:

```ts
page.getByText('Hello World').element() // ✅
page.getByText('Hello Germany').element() // ✅
page.getByText('World').element() // ✅
page.getByText('Hello', { exact: true }).element() // ✅
```

These locators will throw an error:

```ts
// returns multiple elements
page.getByText('Hello').element() // ❌
page.getByText(/^Hello/).element() // ❌

// returns no elements
page.getByText('Hello USA').element() // ❌
```

### elements

```ts
function elements(): Element[]
```

This method returns an array of elements matching the locator's selector.

This function never throws an error. If there are no elements matching the selector, this method will return an empty array.

Consider the following DOM structure:

```html
<div>Hello <span>World</span></div>
<div>Hello</div>
```

These locators will always succeed:

```ts
page.getByText('Hello World').elements() // ✅ [HTMLElement]
page.getByText('World').elements() // ✅ [HTMLElement]
page.getByText('Hello', { exact: true }).elements() // ✅ [HTMLElement]
page.getByText('Hello').element() // ✅ [HTMLElement, HTMLElement]
page.getByText('Hello USA').elements() // ✅ []
```

### all

```ts
function all(): Locator[]
```

This method returns an array of new locators that match the selector.

Internally, this method calls `.elements` and wraps every element using [`page.elementLocator`](/guide/browser/context#page).

- [See `locator.elements()`](#elements)

## Properties

### selector

The `selector` is a string that will be used to locate the element by the browser provider. Playwright will use a `playwright` locator syntax while `preview` and `webdriverio` will use CSS.

::: danger
You should not use this string in your test code. The `selector` string should only be used when working with the Commands API:

```ts [commands.ts]
import type { BrowserCommand } from 'vitest/node'

const test: BrowserCommand<string> = function test(context, selector) {
  // playwright
  await context.iframe.locator(selector).click()
  // webdriverio
  await context.browser.$(selector).click()
}
```

```ts [example.test.ts]
import { test } from 'vitest'
import { commands, page } from '@vitest/browser/context'

test('works correctly', async () => {
  await commands.test(page.getByText('Hello').selector) // ✅
  // vitest will automatically unwrap it to a string
  await commands.test(page.getByText('Hello')) // ✅
})
```
:::

## Custom Locators <Version>3.2.0</Version> <Badge type="danger">advanced</Badge> {#custom-locators}

You can extend built-in locators API by defining an object of locator factories. These methods will exist as methods on the `page` object and any created locator.

These locators can be useful if built-in locators are not enough. For example, when you use a custom framework for your UI.

The locator factory needs to return a selector string or a locator itself.

::: tip
The selector syntax is identical to Playwright locators. Please, read [their guide](https://playwright.dev/docs/other-locators) to better understand how to work with them.
:::

```ts
import { locators } from '@vitest/browser/context'

locators.extend({
  getByArticleTitle(title) {
    return `[data-title="${title}"]`
  },
  getByArticleCommentsCount(count) {
    return `.comments :text("${count} comments")`
  },
  async previewComments() {
    // you have access to the current locator via "this"
    // beware that if the method was called on `page`, `this` will be `page`,
    // not the locator!
    if (this !== page) {
      await this.click()
    }
    // ...
  }
})

// if you are using typescript, you can extend LocatorSelectors interface
// to have the autocompletion in locators.extend, page.* and locator.* methods
declare module '@vitest/browser/context' {
  interface LocatorSelectors {
    // if the custom method returns a string, it will be converted into a locator
    // if it returns anything else, then it will be returned as usual
    getByArticleTitle(title: string): Locator
    getByArticleCommentsCount(count: number): Locator

    // Vitest will return a promise and won't try to convert it into a locator
    previewComments(this: Locator): Promise<void>
  }
}
```

If the method is called on the global `page` object, then selector will be applied to the whole page. In the example bellow, `getByArticleTitle` will find all elements with an attribute `data-title` with the value of `title`. However, if the method is called on the locator, then it will be scoped to that locator.

```html
<article data-title="Hello, World!">
  Hello, World!
  <button id="comments">2 comments</button>
</article>

<article data-title="Hello, Vitest!">
  Hello, Vitest!
  <button id="comments">0 comments</button>
</article>
```

```ts
const articles = page.getByRole('article')
const worldArticle = page.getByArticleTitle('Hello, World!') // ✅
const commentsElement = worldArticle.getByArticleCommentsCount(2) // ✅
const wrongCommentsElement = worldArticle.getByArticleCommentsCount(0) // ❌
const wrongElement = page.getByArticleTitle('No Article!') // ❌

await commentsElement.previewComments() // ✅
await wrongCommentsElement.previewComments() // ❌
```
````

## File: docs/guide/browser/multiple-setups.md
````markdown
# Multiple Setups

Since Vitest 3, you can specify several different browser setups using the new [`browser.instances`](/guide/browser/config#browser-instances) option.

The main advantage of using the `browser.instances` over the [test projects](/guide/projects) is improved caching. Every project will use the same Vite server meaning the file transform and [dependency pre-bundling](https://vite.dev/guide/dep-pre-bundling.html) has to happen only once.

## Several Browsers

You can use the `browser.instances` field to specify options for different browsers. For example, if you want to run the same tests in different browsers, the minimal configuration will look like this:

```ts [vitest.config.ts]
import { defineConfig } from 'vitest/config'
export default defineConfig({
  test: {
    browser: {
      enabled: true,
      provider: 'playwright',
      headless: true,
      instances: [
        { browser: 'chromium' },
        { browser: 'firefox' },
        { browser: 'webkit' },
      ],
    },
  },
})
```

## Different Setups

You can also specify different config options independently from the browser (although, the instances _can_ also have `browser` fields):

::: code-group
```ts [vitest.config.ts]
import { defineConfig } from 'vitest/config'
export default defineConfig({
  test: {
    browser: {
      enabled: true,
      provider: 'playwright',
      headless: true,
      instances: [
        {
          browser: 'chromium',
          name: 'chromium-1',
          setupFiles: ['./ratio-setup.ts'],
          provide: {
            ratio: 1,
          }
        },
        {
          browser: 'chromium',
          name: 'chromium-2',
          provide: {
            ratio: 2,
          }
        },
      ],
    },
  },
})
```
```ts [example.test.ts]
import { expect, inject, test } from 'vitest'
import { globalSetupModifier } from './example.js'

test('ratio works', () => {
  expect(inject('ratio') * globalSetupModifier).toBe(14)
})
```
:::

In this example Vitest will run all tests in `chromium` browser, but execute a `'./ratio-setup.ts'` file only in the first configuration and inject a different `ratio` value depending on the [`provide` field](/config/#provide).

::: warning
Note that you need to define the custom `name` value if you are using the same browser name because Vitest will assign the `browser` as the project name otherwise.
:::

## Filtering

You can filter what projects to run with the [`--project` flag](/guide/cli#project). Vitest will automatically assign the browser name as a project name if it is not assigned manually. If the root config already has a name, Vitest will merge them: `custom` -> `custom (browser)`.

```shell
$ vitest --project=chromium
```

::: code-group
```ts{6,8} [default]
export default defineConfig({
  test: {
    browser: {
      instances: [
        // name: chromium
        { browser: 'chromium' },
        // name: custom
        { browser: 'firefox', name: 'custom' },
      ]
    }
  }
})
```
```ts{3,7,9} [custom]
export default defineConfig({
  test: {
    name: 'custom',
    browser: {
      instances: [
        // name: custom (chromium)
        { browser: 'chromium' },
        // name: manual
        { browser: 'firefox', name: 'manual' },
      ]
    }
  }
})
```
:::

::: warning
Vitest cannot run multiple instances that have `headless` mode set to `false` (the default behaviour). During development, you can select what project to run in your terminal:

```shell
? Found multiple projects that run browser tests in headed mode: "chromium", "firefox".
Vitest cannot run multiple headed browsers at the same time. Select a single project
to run or cancel and run tests with "headless: true" option. Note that you can also
start tests with --browser=name or --project=name flag. › - Use arrow-keys. Return to submit.
❯   chromium
    firefox
```

If you have several non-headless projects in CI (i.e. the `headless: false` is set manually in the config and not overridden in  CI env), Vitest will fail the run and won't start any tests.

The ability to run tests in headless mode is not affected by this. You can still run all instances in parallel as long as they don't have `headless: false`.
:::
````

## File: docs/guide/browser/playwright.md
````markdown
# Configuring Playwright

By default, TypeScript doesn't recognize providers options and extra `expect` properties. Make sure to reference `@vitest/browser/providers/playwright` so TypeScript can pick up definitions for custom options:

```ts [vitest.shims.d.ts]
/// <reference types="@vitest/browser/providers/playwright" />
```

Alternatively, you can also add it to `compilerOptions.types` field in your `tsconfig.json` file. Note that specifying anything in this field will disable [auto loading](https://www.typescriptlang.org/tsconfig/#types) of `@types/*` packages.

```json [tsconfig.json]
{
  "compilerOptions": {
    "types": ["@vitest/browser/providers/playwright"]
  }
}
```

Vitest opens a single page to run all tests in the same file. You can configure the `launch`, `connect` and `context` properties in `instances`:

```ts{9-11} [vitest.config.ts]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    browser: {
      instances: [
        {
          browser: 'firefox',
          launch: {},
          connect: {},
          context: {},
        },
      ],
    },
  },
})
```

::: warning
Before Vitest 3, these options were located on `test.browser.providerOptions` property:

```ts [vitest.config.ts]
export default defineConfig({
  test: {
    browser: {
      providerOptions: {
        launch: {},
        context: {},
      },
    },
  },
})
```

`providerOptions` is deprecated in favour of `instances`.
:::

## launch

These options are directly passed down to `playwright[browser].launch` command. You can read more about the command and available arguments in the [Playwright documentation](https://playwright.dev/docs/api/class-browsertype#browser-type-launch).

::: warning
Vitest will ignore `launch.headless` option. Instead, use [`test.browser.headless`](/guide/browser/config#browser-headless).

Note that Vitest will push debugging flags to `launch.args` if [`--inspect`](/guide/cli#inspect) is enabled.
:::

## connect <Version>3.2.0</Version> {#connect}

These options are directly passed down to `playwright[browser].connect` command. You can read more about the command and available arguments in the [Playwright documentation](https://playwright.dev/docs/api/class-browsertype#browser-type-connect).

::: warning
Since this command connects to an existing Playwright server, any `launch` options will be ignored.
:::

## context

Vitest creates a new context for every test file by calling [`browser.newContext()`](https://playwright.dev/docs/api/class-browsercontext). You can configure this behaviour by specifying [custom arguments](https://playwright.dev/docs/api/class-apirequest#api-request-new-context).

::: tip
Note that the context is created for every _test file_, not every _test_ like in playwright test runner.
:::

::: warning
Vitest always sets `ignoreHTTPSErrors` to `true` in case your server is served via HTTPS and `serviceWorkers` to `'allow'` to support module mocking via [MSW](https://mswjs.io).

It is also recommended to use [`test.browser.viewport`](/guide/browser/config#browser-headless) instead of specifying it here as it will be lost when tests are running in headless mode.
:::

## `actionTimeout` <Version>3.0.0</Version>

- **Default:** no timeout, 1 second before 3.0.0

This value configures the default timeout it takes for Playwright to wait until all accessibility checks pass and [the action](/guide/browser/interactivity-api) is actually done.

You can also configure the action timeout per-action:

```ts
import { page, userEvent } from '@vitest/browser/context'

await userEvent.click(page.getByRole('button'), {
  timeout: 1_000,
})
```
````

## File: docs/guide/browser/webdriverio.md
````markdown
# Configuring WebdriverIO

::: info Playwright vs WebdriverIO
If you do not already use WebdriverIO in your project, we recommend starting with [Playwright](/guide/browser/playwright) as it is easier to configure and has more flexible API.
:::

By default, TypeScript doesn't recognize providers options and extra `expect` properties. Make sure to reference `@vitest/browser/providers/webdriverio` so TypeScript can pick up definitions for custom options:

```ts [vitest.shims.d.ts]
/// <reference types="@vitest/browser/providers/webdriverio" />
```

Alternatively, you can also add it to `compilerOptions.types` field in your `tsconfig.json` file. Note that specifying anything in this field will disable [auto loading](https://www.typescriptlang.org/tsconfig/#types) of `@types/*` packages.

```json [tsconfig.json]
{
  "compilerOptions": {
    "types": ["@vitest/browser/providers/webdriverio"]
  }
}
```

Vitest opens a single page to run all tests in the same file. You can configure any property specified in `RemoteOptions` in `instances`:

```ts{9-12} [vitest.config.ts]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    browser: {
      instances: [
        {
          browser: 'chrome',
          capabilities: {
            browserVersion: 86,
            platformName: 'Windows 10',
          },
        },
      ],
    },
  },
})
```

::: warning
Before Vitest 3, these options were located on `test.browser.providerOptions` property:

```ts [vitest.config.ts]
export default defineConfig({
  test: {
    browser: {
      providerOptions: {
        capabilities: {},
      },
    },
  },
})
```

`providerOptions` is deprecated in favour of `instances`.
:::

You can find most available options in the [WebdriverIO documentation](https://webdriver.io/docs/configuration/). Note that Vitest will ignore all test runner options because we only use `webdriverio`'s browser capabilities.

::: tip
Most useful options are located on `capabilities` object. WebdriverIO allows nested capabilities, but Vitest will ignore those options because we rely on a different mechanism to spawn several browsers.

Note that Vitest will ignore `capabilities.browserName`. Use [`test.browser.instances.name`](/guide/browser/config#browser-capabilities-name) instead.
:::
````

## File: docs/guide/browser/why.md
````markdown
---
title: Why Browser Mode | Browser Mode
outline: deep
---

# Why Browser Mode

## Motivation

We developed the Vitest browser mode feature to help improve testing workflows and achieve more accurate and reliable test results. This experimental addition to our testing API allows developers to run tests in a native browser environment. In this section, we'll explore the motivations behind this feature and its benefits for testing.

### Different Ways of Testing

There are different ways to test JavaScript code. Some testing frameworks simulate browser environments in Node.js, while others run tests in real browsers. In this context, [jsdom](https://www.npmjs.com/package/jsdom) is an example of a spec implementation that simulates a browser environment by being used with a test runner like Jest or Vitest, while other testing tools such as [WebdriverIO](https://webdriver.io/) or [Cypress](https://www.cypress.io/) allow developers to test their applications in a real browser or in case of [Playwright](https://playwright.dev/) provide you a browser engine.

### The Simulation Caveat

Testing JavaScript programs in simulated environments such as jsdom or happy-dom has simplified the test setup and provided an easy-to-use API, making them suitable for many projects and increasing confidence in test results. However, it is crucial to keep in mind that these tools only simulate a browser environment and not an actual browser, which may result in some discrepancies between the simulated environment and the real environment. Therefore, false positives or negatives in test results may occur.

To achieve the highest level of confidence in our tests, it's crucial to test in a real browser environment. This is why we developed the browser mode feature in Vitest, allowing developers to run tests natively in a browser and gain more accurate and reliable test results. With browser-level testing, developers can be more confident that their application will work as intended in a real-world scenario.

## Drawbacks

When using Vitest browser, it is important to consider the following drawbacks:

### Early Development

The browser mode feature of Vitest is still in its early stages of development. As such, it may not yet be fully optimized, and there may be some bugs or issues that have not yet been ironed out. It is recommended that users augment their Vitest browser experience with a standalone browser-side test runner like WebdriverIO, Cypress or Playwright.

### Longer Initialization

Vitest browser requires spinning up the provider and the browser during the initialization process, which can take some time. This can result in longer initialization times compared to other testing patterns.
````

## File: docs/guide/examples/projects-workspace.md
````markdown
```ts
import { defineConfig } from "vitest/config";
export default defineConfig({
  test: {
    // "test.workspace" is now "test.projects"
    workspace: [ // [!code --]
    projects: [ // [!code ++]
      { test: { name: "Unit" } },
      { test: { name: "Integration" } },
    ],
  },
});
```
````

## File: docs/guide/examples/promise-done.md
````markdown
```js
it('should work', (done) => {  // [!code --]
it('should work', () => new Promise(done => { // [!code ++]
  // ...
  done()
}) // [!code --]
})) // [!code ++]
```
````

## File: docs/guide/cli-generated.md
````markdown
### root

- **CLI:** `-r, --root <path>`
- **Config:** [root](/config/#root)

Root path

### config

- **CLI:** `-c, --config <path>`

Path to config file

### update

- **CLI:** `-u, --update`
- **Config:** [update](/config/#update)

Update snapshot

### watch

- **CLI:** `-w, --watch`
- **Config:** [watch](/config/#watch)

Enable watch mode

### testNamePattern

- **CLI:** `-t, --testNamePattern <pattern>`
- **Config:** [testNamePattern](/config/#testnamepattern)

Run tests with full names matching the specified regexp pattern

### dir

- **CLI:** `--dir <path>`
- **Config:** [dir](/config/#dir)

Base directory to scan for the test files

### ui

- **CLI:** `--ui`
- **Config:** [ui](/config/#ui)

Enable UI

### open

- **CLI:** `--open`
- **Config:** [open](/config/#open)

Open UI automatically (default: `!process.env.CI`)

### api.port

- **CLI:** `--api.port [port]`

Specify server port. Note if the port is already being used, Vite will automatically try the next available port so this may not be the actual port the server ends up listening on. If true will be set to `51204`

### api.host

- **CLI:** `--api.host [host]`

Specify which IP addresses the server should listen on. Set this to `0.0.0.0` or `true` to listen on all addresses, including LAN and public addresses

### api.strictPort

- **CLI:** `--api.strictPort`

Set to true to exit if port is already in use, instead of automatically trying the next available port

### silent

- **CLI:** `--silent [value]`
- **Config:** [silent](/config/#silent)

Silent console output from tests. Use `'passed-only'` to see logs from failing tests only.

### hideSkippedTests

- **CLI:** `--hideSkippedTests`

Hide logs for skipped tests

### reporters

- **CLI:** `--reporter <name>`
- **Config:** [reporters](/config/#reporters)

Specify reporters (default, basic, blob, verbose, dot, json, tap, tap-flat, junit, hanging-process, github-actions)

### outputFile

- **CLI:** `--outputFile <filename/-s>`
- **Config:** [outputFile](/config/#outputfile)

Write test results to a file when supporter reporter is also specified, use cac's dot notation for individual outputs of multiple reporters (example: `--outputFile.tap=./tap.txt`)

### coverage.all

- **CLI:** `--coverage.all`
- **Config:** [coverage.all](/config/#coverage-all)

Whether to include all files, including the untested ones into report

### coverage.provider

- **CLI:** `--coverage.provider <name>`
- **Config:** [coverage.provider](/config/#coverage-provider)

Select the tool for coverage collection, available values are: "v8", "istanbul" and "custom"

### coverage.enabled

- **CLI:** `--coverage.enabled`
- **Config:** [coverage.enabled](/config/#coverage-enabled)

Enables coverage collection. Can be overridden using the `--coverage` CLI option (default: `false`)

### coverage.include

- **CLI:** `--coverage.include <pattern>`
- **Config:** [coverage.include](/config/#coverage-include)

Files included in coverage as glob patterns. May be specified more than once when using multiple patterns (default: `**`)

### coverage.exclude

- **CLI:** `--coverage.exclude <pattern>`
- **Config:** [coverage.exclude](/config/#coverage-exclude)

Files to be excluded in coverage. May be specified more than once when using multiple extensions (default: Visit [`coverage.exclude`](https://vitest.dev/config/#coverage-exclude))

### coverage.extension

- **CLI:** `--coverage.extension <extension>`
- **Config:** [coverage.extension](/config/#coverage-extension)

Extension to be included in coverage. May be specified more than once when using multiple extensions (default: `[".js", ".cjs", ".mjs", ".ts", ".mts", ".tsx", ".jsx", ".vue", ".svelte"]`)

### coverage.clean

- **CLI:** `--coverage.clean`
- **Config:** [coverage.clean](/config/#coverage-clean)

Clean coverage results before running tests (default: true)

### coverage.cleanOnRerun

- **CLI:** `--coverage.cleanOnRerun`
- **Config:** [coverage.cleanOnRerun](/config/#coverage-cleanonrerun)

Clean coverage report on watch rerun (default: true)

### coverage.reportsDirectory

- **CLI:** `--coverage.reportsDirectory <path>`
- **Config:** [coverage.reportsDirectory](/config/#coverage-reportsdirectory)

Directory to write coverage report to (default: ./coverage)

### coverage.reporter

- **CLI:** `--coverage.reporter <name>`
- **Config:** [coverage.reporter](/config/#coverage-reporter)

Coverage reporters to use. Visit [`coverage.reporter`](https://vitest.dev/config/#coverage-reporter) for more information (default: `["text", "html", "clover", "json"]`)

### coverage.reportOnFailure

- **CLI:** `--coverage.reportOnFailure`
- **Config:** [coverage.reportOnFailure](/config/#coverage-reportonfailure)

Generate coverage report even when tests fail (default: `false`)

### coverage.allowExternal

- **CLI:** `--coverage.allowExternal`
- **Config:** [coverage.allowExternal](/config/#coverage-allowexternal)

Collect coverage of files outside the project root (default: `false`)

### coverage.skipFull

- **CLI:** `--coverage.skipFull`
- **Config:** [coverage.skipFull](/config/#coverage-skipfull)

Do not show files with 100% statement, branch, and function coverage (default: `false`)

### coverage.thresholds.100

- **CLI:** `--coverage.thresholds.100`
- **Config:** [coverage.thresholds.100](/config/#coverage-thresholds-100)

Shortcut to set all coverage thresholds to 100 (default: `false`)

### coverage.thresholds.perFile

- **CLI:** `--coverage.thresholds.perFile`
- **Config:** [coverage.thresholds.perFile](/config/#coverage-thresholds-perfile)

Check thresholds per file. See `--coverage.thresholds.lines`, `--coverage.thresholds.functions`, `--coverage.thresholds.branches` and `--coverage.thresholds.statements` for the actual thresholds (default: `false`)

### coverage.thresholds.autoUpdate

- **CLI:** `--coverage.thresholds.autoUpdate`
- **Config:** [coverage.thresholds.autoUpdate](/config/#coverage-thresholds-autoupdate)

Update threshold values: "lines", "functions", "branches" and "statements" to configuration file when current coverage is above the configured thresholds (default: `false`)

### coverage.thresholds.lines

- **CLI:** `--coverage.thresholds.lines <number>`

Threshold for lines. Visit [istanbuljs](https://github.com/istanbuljs/nyc#coverage-thresholds) for more information. This option is not available for custom providers

### coverage.thresholds.functions

- **CLI:** `--coverage.thresholds.functions <number>`

Threshold for functions. Visit [istanbuljs](https://github.com/istanbuljs/nyc#coverage-thresholds) for more information. This option is not available for custom providers

### coverage.thresholds.branches

- **CLI:** `--coverage.thresholds.branches <number>`

Threshold for branches. Visit [istanbuljs](https://github.com/istanbuljs/nyc#coverage-thresholds) for more information. This option is not available for custom providers

### coverage.thresholds.statements

- **CLI:** `--coverage.thresholds.statements <number>`

Threshold for statements. Visit [istanbuljs](https://github.com/istanbuljs/nyc#coverage-thresholds) for more information. This option is not available for custom providers

### coverage.ignoreClassMethods

- **CLI:** `--coverage.ignoreClassMethods <name>`
- **Config:** [coverage.ignoreClassMethods](/config/#coverage-ignoreclassmethods)

Array of class method names to ignore for coverage. Visit [istanbuljs](https://github.com/istanbuljs/nyc#ignoring-methods) for more information. This option is only available for the istanbul providers (default: `[]`)

### coverage.processingConcurrency

- **CLI:** `--coverage.processingConcurrency <number>`
- **Config:** [coverage.processingConcurrency](/config/#coverage-processingconcurrency)

Concurrency limit used when processing the coverage results. (default min between 20 and the number of CPUs)

### coverage.customProviderModule

- **CLI:** `--coverage.customProviderModule <path>`
- **Config:** [coverage.customProviderModule](/config/#coverage-customprovidermodule)

Specifies the module name or path for the custom coverage provider module. Visit [Custom Coverage Provider](https://vitest.dev/guide/coverage#custom-coverage-provider) for more information. This option is only available for custom providers

### coverage.watermarks.statements

- **CLI:** `--coverage.watermarks.statements <watermarks>`

High and low watermarks for statements in the format of `<high>,<low>`

### coverage.watermarks.lines

- **CLI:** `--coverage.watermarks.lines <watermarks>`

High and low watermarks for lines in the format of `<high>,<low>`

### coverage.watermarks.branches

- **CLI:** `--coverage.watermarks.branches <watermarks>`

High and low watermarks for branches in the format of `<high>,<low>`

### coverage.watermarks.functions

- **CLI:** `--coverage.watermarks.functions <watermarks>`

High and low watermarks for functions in the format of `<high>,<low>`

### mode

- **CLI:** `--mode <name>`
- **Config:** [mode](/config/#mode)

Override Vite mode (default: `test` or `benchmark`)

### workspace

- **CLI:** `--workspace <path>`
- **Config:** [workspace](/config/#workspace)

[deprecated] Path to a workspace configuration file

### isolate

- **CLI:** `--isolate`
- **Config:** [isolate](/config/#isolate)

Run every test file in isolation. To disable isolation, use `--no-isolate` (default: `true`)

### globals

- **CLI:** `--globals`
- **Config:** [globals](/config/#globals)

Inject apis globally

### dom

- **CLI:** `--dom`

Mock browser API with happy-dom

### browser.enabled

- **CLI:** `--browser.enabled`
- **Config:** [browser.enabled](/guide/browser/config#browser-enabled)

Run tests in the browser. Equivalent to `--browser.enabled` (default: `false`)

### browser.name

- **CLI:** `--browser.name <name>`
- **Config:** [browser.name](/guide/browser/config#browser-name)

Run all tests in a specific browser. Some browsers are only available for specific providers (see `--browser.provider`). Visit [`browser.name`](https://vitest.dev/guide/browser/config/#browser-name) for more information

### browser.headless

- **CLI:** `--browser.headless`
- **Config:** [browser.headless](/guide/browser/config#browser-headless)

Run the browser in headless mode (i.e. without opening the GUI (Graphical User Interface)). If you are running Vitest in CI, it will be enabled by default (default: `process.env.CI`)

### browser.api.port

- **CLI:** `--browser.api.port [port]`
- **Config:** [browser.api.port](/guide/browser/config#browser-api-port)

Specify server port. Note if the port is already being used, Vite will automatically try the next available port so this may not be the actual port the server ends up listening on. If true will be set to `63315`

### browser.api.host

- **CLI:** `--browser.api.host [host]`
- **Config:** [browser.api.host](/guide/browser/config#browser-api-host)

Specify which IP addresses the server should listen on. Set this to `0.0.0.0` or `true` to listen on all addresses, including LAN and public addresses

### browser.api.strictPort

- **CLI:** `--browser.api.strictPort`
- **Config:** [browser.api.strictPort](/guide/browser/config#browser-api-strictport)

Set to true to exit if port is already in use, instead of automatically trying the next available port

### browser.provider

- **CLI:** `--browser.provider <name>`
- **Config:** [browser.provider](/guide/browser/config#browser-provider)

Provider used to run browser tests. Some browsers are only available for specific providers. Can be "webdriverio", "playwright", "preview", or the path to a custom provider. Visit [`browser.provider`](https://vitest.dev/guide/browser/config.html#browser-provider) for more information (default: `"preview"`)

### browser.providerOptions

- **CLI:** `--browser.providerOptions <options>`
- **Config:** [browser.providerOptions](/guide/browser/config#browser-provideroptions)

Options that are passed down to a browser provider. Visit [`browser.providerOptions`](https://vitest.dev/config/#browser-provideroptions) for more information

### browser.isolate

- **CLI:** `--browser.isolate`
- **Config:** [browser.isolate](/guide/browser/config#browser-isolate)

Run every browser test file in isolation. To disable isolation, use `--browser.isolate=false` (default: `true`)

### browser.ui

- **CLI:** `--browser.ui`
- **Config:** [browser.ui](/guide/browser/config#browser-ui)

Show Vitest UI when running tests (default: `!process.env.CI`)

### browser.fileParallelism

- **CLI:** `--browser.fileParallelism`
- **Config:** [browser.fileParallelism](/guide/browser/config#browser-fileparallelism)

Should browser test files run in parallel. Use `--browser.fileParallelism=false` to disable (default: `true`)

### browser.connectTimeout

- **CLI:** `--browser.connectTimeout <timeout>`
- **Config:** [browser.connectTimeout](/guide/browser/config#browser-connecttimeout)

If connection to the browser takes longer, the test suite will fail (default: `60_000`)

### pool

- **CLI:** `--pool <pool>`
- **Config:** [pool](/config/#pool)

Specify pool, if not running in the browser (default: `forks`)

### poolOptions.threads.isolate

- **CLI:** `--poolOptions.threads.isolate`
- **Config:** [poolOptions.threads.isolate](/config/#pooloptions-threads-isolate)

Isolate tests in threads pool (default: `true`)

### poolOptions.threads.singleThread

- **CLI:** `--poolOptions.threads.singleThread`
- **Config:** [poolOptions.threads.singleThread](/config/#pooloptions-threads-singlethread)

Run tests inside a single thread (default: `false`)

### poolOptions.threads.maxThreads

- **CLI:** `--poolOptions.threads.maxThreads <workers>`
- **Config:** [poolOptions.threads.maxThreads](/config/#pooloptions-threads-maxthreads)

Maximum number or percentage of threads to run tests in

### poolOptions.threads.minThreads

- **CLI:** `--poolOptions.threads.minThreads <workers>`
- **Config:** [poolOptions.threads.minThreads](/config/#pooloptions-threads-minthreads)

Minimum number or percentage of threads to run tests in

### poolOptions.threads.useAtomics

- **CLI:** `--poolOptions.threads.useAtomics`
- **Config:** [poolOptions.threads.useAtomics](/config/#pooloptions-threads-useatomics)

Use Atomics to synchronize threads. This can improve performance in some cases, but might cause segfault in older Node versions (default: `false`)

### poolOptions.vmThreads.isolate

- **CLI:** `--poolOptions.vmThreads.isolate`
- **Config:** [poolOptions.vmThreads.isolate](/config/#pooloptions-vmthreads-isolate)

Isolate tests in threads pool (default: `true`)

### poolOptions.vmThreads.singleThread

- **CLI:** `--poolOptions.vmThreads.singleThread`
- **Config:** [poolOptions.vmThreads.singleThread](/config/#pooloptions-vmthreads-singlethread)

Run tests inside a single thread (default: `false`)

### poolOptions.vmThreads.maxThreads

- **CLI:** `--poolOptions.vmThreads.maxThreads <workers>`
- **Config:** [poolOptions.vmThreads.maxThreads](/config/#pooloptions-vmthreads-maxthreads)

Maximum number or percentage of threads to run tests in

### poolOptions.vmThreads.minThreads

- **CLI:** `--poolOptions.vmThreads.minThreads <workers>`
- **Config:** [poolOptions.vmThreads.minThreads](/config/#pooloptions-vmthreads-minthreads)

Minimum number or percentage of threads to run tests in

### poolOptions.vmThreads.useAtomics

- **CLI:** `--poolOptions.vmThreads.useAtomics`
- **Config:** [poolOptions.vmThreads.useAtomics](/config/#pooloptions-vmthreads-useatomics)

Use Atomics to synchronize threads. This can improve performance in some cases, but might cause segfault in older Node versions (default: `false`)

### poolOptions.vmThreads.memoryLimit

- **CLI:** `--poolOptions.vmThreads.memoryLimit <limit>`
- **Config:** [poolOptions.vmThreads.memoryLimit](/config/#pooloptions-vmthreads-memorylimit)

Memory limit for VM threads pool. If you see memory leaks, try to tinker this value.

### poolOptions.forks.isolate

- **CLI:** `--poolOptions.forks.isolate`
- **Config:** [poolOptions.forks.isolate](/config/#pooloptions-forks-isolate)

Isolate tests in forks pool (default: `true`)

### poolOptions.forks.singleFork

- **CLI:** `--poolOptions.forks.singleFork`
- **Config:** [poolOptions.forks.singleFork](/config/#pooloptions-forks-singlefork)

Run tests inside a single child_process (default: `false`)

### poolOptions.forks.maxForks

- **CLI:** `--poolOptions.forks.maxForks <workers>`
- **Config:** [poolOptions.forks.maxForks](/config/#pooloptions-forks-maxforks)

Maximum number or percentage of processes to run tests in

### poolOptions.forks.minForks

- **CLI:** `--poolOptions.forks.minForks <workers>`
- **Config:** [poolOptions.forks.minForks](/config/#pooloptions-forks-minforks)

Minimum number or percentage of processes to run tests in

### poolOptions.vmForks.isolate

- **CLI:** `--poolOptions.vmForks.isolate`
- **Config:** [poolOptions.vmForks.isolate](/config/#pooloptions-vmforks-isolate)

Isolate tests in forks pool (default: `true`)

### poolOptions.vmForks.singleFork

- **CLI:** `--poolOptions.vmForks.singleFork`
- **Config:** [poolOptions.vmForks.singleFork](/config/#pooloptions-vmforks-singlefork)

Run tests inside a single child_process (default: `false`)

### poolOptions.vmForks.maxForks

- **CLI:** `--poolOptions.vmForks.maxForks <workers>`
- **Config:** [poolOptions.vmForks.maxForks](/config/#pooloptions-vmforks-maxforks)

Maximum number or percentage of processes to run tests in

### poolOptions.vmForks.minForks

- **CLI:** `--poolOptions.vmForks.minForks <workers>`
- **Config:** [poolOptions.vmForks.minForks](/config/#pooloptions-vmforks-minforks)

Minimum number or percentage of processes to run tests in

### poolOptions.vmForks.memoryLimit

- **CLI:** `--poolOptions.vmForks.memoryLimit <limit>`
- **Config:** [poolOptions.vmForks.memoryLimit](/config/#pooloptions-vmforks-memorylimit)

Memory limit for VM forks pool. If you see memory leaks, try to tinker this value.

### fileParallelism

- **CLI:** `--fileParallelism`
- **Config:** [fileParallelism](/config/#fileparallelism)

Should all test files run in parallel. Use `--no-file-parallelism` to disable (default: `true`)

### maxWorkers

- **CLI:** `--maxWorkers <workers>`
- **Config:** [maxWorkers](/config/#maxworkers)

Maximum number or percentage of workers to run tests in

### minWorkers

- **CLI:** `--minWorkers <workers>`
- **Config:** [minWorkers](/config/#minworkers)

Minimum number or percentage of workers to run tests in

### environment

- **CLI:** `--environment <name>`
- **Config:** [environment](/config/#environment)

Specify runner environment, if not running in the browser (default: `node`)

### passWithNoTests

- **CLI:** `--passWithNoTests`
- **Config:** [passWithNoTests](/config/#passwithnotests)

Pass when no tests are found

### logHeapUsage

- **CLI:** `--logHeapUsage`
- **Config:** [logHeapUsage](/config/#logheapusage)

Show the size of heap for each test when running in node

### allowOnly

- **CLI:** `--allowOnly`
- **Config:** [allowOnly](/config/#allowonly)

Allow tests and suites that are marked as only (default: `!process.env.CI`)

### dangerouslyIgnoreUnhandledErrors

- **CLI:** `--dangerouslyIgnoreUnhandledErrors`
- **Config:** [dangerouslyIgnoreUnhandledErrors](/config/#dangerouslyignoreunhandlederrors)

Ignore any unhandled errors that occur

### sequence.shuffle.files

- **CLI:** `--sequence.shuffle.files`
- **Config:** [sequence.shuffle.files](/config/#sequence-shuffle-files)

Run files in a random order. Long running tests will not start earlier if you enable this option. (default: `false`)

### sequence.shuffle.tests

- **CLI:** `--sequence.shuffle.tests`
- **Config:** [sequence.shuffle.tests](/config/#sequence-shuffle-tests)

Run tests in a random order (default: `false`)

### sequence.concurrent

- **CLI:** `--sequence.concurrent`
- **Config:** [sequence.concurrent](/config/#sequence-concurrent)

Make tests run in parallel (default: `false`)

### sequence.seed

- **CLI:** `--sequence.seed <seed>`
- **Config:** [sequence.seed](/config/#sequence-seed)

Set the randomization seed. This option will have no effect if `--sequence.shuffle` is falsy. Visit ["Random Seed" page](https://en.wikipedia.org/wiki/Random_seed) for more information

### sequence.hooks

- **CLI:** `--sequence.hooks <order>`
- **Config:** [sequence.hooks](/config/#sequence-hooks)

Changes the order in which hooks are executed. Accepted values are: "stack", "list" and "parallel". Visit [`sequence.hooks`](https://vitest.dev/config/#sequence-hooks) for more information (default: `"parallel"`)

### sequence.setupFiles

- **CLI:** `--sequence.setupFiles <order>`
- **Config:** [sequence.setupFiles](/config/#sequence-setupfiles)

Changes the order in which setup files are executed. Accepted values are: "list" and "parallel". If set to "list", will run setup files in the order they are defined. If set to "parallel", will run setup files in parallel (default: `"parallel"`)

### inspect

- **CLI:** `--inspect [[host:]port]`
- **Config:** [inspect](/config/#inspect)

Enable Node.js inspector (default: `127.0.0.1:9229`)

### inspectBrk

- **CLI:** `--inspectBrk [[host:]port]`
- **Config:** [inspectBrk](/config/#inspectbrk)

Enable Node.js inspector and break before the test starts

### testTimeout

- **CLI:** `--testTimeout <timeout>`
- **Config:** [testTimeout](/config/#testtimeout)

Default timeout of a test in milliseconds (default: `5000`). Use `0` to disable timeout completely.

### hookTimeout

- **CLI:** `--hookTimeout <timeout>`
- **Config:** [hookTimeout](/config/#hooktimeout)

Default hook timeout in milliseconds (default: `10000`). Use `0` to disable timeout completely.

### bail

- **CLI:** `--bail <number>`
- **Config:** [bail](/config/#bail)

Stop test execution when given number of tests have failed (default: `0`)

### retry

- **CLI:** `--retry <times>`
- **Config:** [retry](/config/#retry)

Retry the test specific number of times if it fails (default: `0`)

### diff.aAnnotation

- **CLI:** `--diff.aAnnotation <annotation>`
- **Config:** [diff.aAnnotation](/config/#diff-aannotation)

Annotation for expected lines (default: `Expected`)

### diff.aIndicator

- **CLI:** `--diff.aIndicator <indicator>`
- **Config:** [diff.aIndicator](/config/#diff-aindicator)

Indicator for expected lines (default: `-`)

### diff.bAnnotation

- **CLI:** `--diff.bAnnotation <annotation>`
- **Config:** [diff.bAnnotation](/config/#diff-bannotation)

Annotation for received lines (default: `Received`)

### diff.bIndicator

- **CLI:** `--diff.bIndicator <indicator>`
- **Config:** [diff.bIndicator](/config/#diff-bindicator)

Indicator for received lines (default: `+`)

### diff.commonIndicator

- **CLI:** `--diff.commonIndicator <indicator>`
- **Config:** [diff.commonIndicator](/config/#diff-commonindicator)

Indicator for common lines (default: ` `)

### diff.contextLines

- **CLI:** `--diff.contextLines <lines>`
- **Config:** [diff.contextLines](/config/#diff-contextlines)

Number of lines of context to show around each change (default: `5`)

### diff.emptyFirstOrLastLinePlaceholder

- **CLI:** `--diff.emptyFirstOrLastLinePlaceholder <placeholder>`
- **Config:** [diff.emptyFirstOrLastLinePlaceholder](/config/#diff-emptyfirstorlastlineplaceholder)

Placeholder for an empty first or last line (default: `""`)

### diff.expand

- **CLI:** `--diff.expand`
- **Config:** [diff.expand](/config/#diff-expand)

Expand all common lines (default: `true`)

### diff.includeChangeCounts

- **CLI:** `--diff.includeChangeCounts`
- **Config:** [diff.includeChangeCounts](/config/#diff-includechangecounts)

Include comparison counts in diff output (default: `false`)

### diff.omitAnnotationLines

- **CLI:** `--diff.omitAnnotationLines`
- **Config:** [diff.omitAnnotationLines](/config/#diff-omitannotationlines)

Omit annotation lines from the output (default: `false`)

### diff.printBasicPrototype

- **CLI:** `--diff.printBasicPrototype`
- **Config:** [diff.printBasicPrototype](/config/#diff-printbasicprototype)

Print basic prototype Object and Array (default: `true`)

### diff.maxDepth

- **CLI:** `--diff.maxDepth <maxDepth>`
- **Config:** [diff.maxDepth](/config/#diff-maxdepth)

Limit the depth to recurse when printing nested objects (default: `20`)

### diff.truncateThreshold

- **CLI:** `--diff.truncateThreshold <threshold>`
- **Config:** [diff.truncateThreshold](/config/#diff-truncatethreshold)

Number of lines to show before and after each change (default: `0`)

### diff.truncateAnnotation

- **CLI:** `--diff.truncateAnnotation <annotation>`
- **Config:** [diff.truncateAnnotation](/config/#diff-truncateannotation)

Annotation for truncated lines (default: `... Diff result is truncated`)

### exclude

- **CLI:** `--exclude <glob>`
- **Config:** [exclude](/config/#exclude)

Additional file globs to be excluded from test

### expandSnapshotDiff

- **CLI:** `--expandSnapshotDiff`
- **Config:** [expandSnapshotDiff](/config/#expandsnapshotdiff)

Show full diff when snapshot fails

### disableConsoleIntercept

- **CLI:** `--disableConsoleIntercept`
- **Config:** [disableConsoleIntercept](/config/#disableconsoleintercept)

Disable automatic interception of console logging (default: `false`)

### typecheck.enabled

- **CLI:** `--typecheck.enabled`
- **Config:** [typecheck.enabled](/config/#typecheck-enabled)

Enable typechecking alongside tests (default: `false`)

### typecheck.only

- **CLI:** `--typecheck.only`
- **Config:** [typecheck.only](/config/#typecheck-only)

Run only typecheck tests. This automatically enables typecheck (default: `false`)

### typecheck.checker

- **CLI:** `--typecheck.checker <name>`
- **Config:** [typecheck.checker](/config/#typecheck-checker)

Specify the typechecker to use. Available values are: "tsc" and "vue-tsc" and a path to an executable (default: `"tsc"`)

### typecheck.allowJs

- **CLI:** `--typecheck.allowJs`
- **Config:** [typecheck.allowJs](/config/#typecheck-allowjs)

Allow JavaScript files to be typechecked. By default takes the value from tsconfig.json

### typecheck.ignoreSourceErrors

- **CLI:** `--typecheck.ignoreSourceErrors`
- **Config:** [typecheck.ignoreSourceErrors](/config/#typecheck-ignoresourceerrors)

Ignore type errors from source files

### typecheck.tsconfig

- **CLI:** `--typecheck.tsconfig <path>`
- **Config:** [typecheck.tsconfig](/config/#typecheck-tsconfig)

Path to a custom tsconfig file

### typecheck.spawnTimeout

- **CLI:** `--typecheck.spawnTimeout <time>`
- **Config:** [typecheck.spawnTimeout](/config/#typecheck-spawntimeout)

Minimum time in milliseconds it takes to spawn the typechecker

### project

- **CLI:** `--project <name>`
- **Config:** [project](/config/#project)

The name of the project to run if you are using Vitest workspace feature. This can be repeated for multiple projects: `--project=1 --project=2`. You can also filter projects using wildcards like `--project=packages*`, and exclude projects with `--project=!pattern`.

### slowTestThreshold

- **CLI:** `--slowTestThreshold <threshold>`
- **Config:** [slowTestThreshold](/config/#slowtestthreshold)

Threshold in milliseconds for a test or suite to be considered slow (default: `300`)

### teardownTimeout

- **CLI:** `--teardownTimeout <timeout>`
- **Config:** [teardownTimeout](/config/#teardowntimeout)

Default timeout of a teardown function in milliseconds (default: `10000`)

### maxConcurrency

- **CLI:** `--maxConcurrency <number>`
- **Config:** [maxConcurrency](/config/#maxconcurrency)

Maximum number of concurrent tests in a suite (default: `5`)

### expect.requireAssertions

- **CLI:** `--expect.requireAssertions`
- **Config:** [expect.requireAssertions](/config/#expect-requireassertions)

Require that all tests have at least one assertion

### expect.poll.interval

- **CLI:** `--expect.poll.interval <interval>`
- **Config:** [expect.poll.interval](/config/#expect-poll-interval)

Poll interval in milliseconds for `expect.poll()` assertions (default: `50`)

### expect.poll.timeout

- **CLI:** `--expect.poll.timeout <timeout>`
- **Config:** [expect.poll.timeout](/config/#expect-poll-timeout)

Poll timeout in milliseconds for `expect.poll()` assertions (default: `1000`)

### printConsoleTrace

- **CLI:** `--printConsoleTrace`
- **Config:** [printConsoleTrace](/config/#printconsoletrace)

Always print console stack traces

### includeTaskLocation

- **CLI:** `--includeTaskLocation`
- **Config:** [includeTaskLocation](/config/#includetasklocation)

Collect test and suite locations in the `location` property

### attachmentsDir

- **CLI:** `--attachmentsDir <dir>`
- **Config:** [attachmentsDir](/config/#attachmentsdir)

The directory where attachments from `context.annotate` are stored in (default: `.vitest-attachments`)

### run

- **CLI:** `--run`

Disable watch mode

### color

- **CLI:** `--no-color`

Removes colors from the console output

### clearScreen

- **CLI:** `--clearScreen`

Clear terminal screen when re-running tests during watch mode (default: `true`)

### configLoader

- **CLI:** `--configLoader <loader>`

Use `bundle` to bundle the config with esbuild or `runner` (experimental) to process it on the fly. This is only available in vite version 6.1.0 and above. (default: `bundle`)

### standalone

- **CLI:** `--standalone`

Start Vitest without running tests. File filters will be ignored, tests will be running only on change (default: `false`)
````

## File: docs/guide/cli.md
````markdown
---
title: Command Line Interface | Guide
outline: deep
---

# Command Line Interface

## Commands

### `vitest`

Start Vitest in the current directory. Will enter the watch mode in development environment and run mode in CI (or non-interactive terminal) automatically.

You can pass an additional argument as the filter of the test files to run. For example:

```bash
vitest foobar
```

Will run only the test file that contains `foobar` in their paths. This filter only checks inclusion and doesn't support regexp or glob patterns (unless your terminal processes it before Vitest receives the filter).

Since Vitest 3, you can also specify the test by filename and line number:

```bash
$ vitest basic/foo.test.ts:10
```

::: warning
Note that Vitest requires the full filename for this feature to work. It can be relative to the current working directory or an absolute file path.

```bash
$ vitest basic/foo.js:10 # ✅
$ vitest ./basic/foo.js:10 # ✅
$ vitest /users/project/basic/foo.js:10 # ✅
$ vitest foo:10 # ❌
$ vitest ./basic/foo:10 # ❌
```

At the moment Vitest also doesn't support ranges:

```bash
$ vitest basic/foo.test.ts:10, basic/foo.test.ts:25 # ✅
$ vitest basic/foo.test.ts:10-25 # ❌
```
:::

### `vitest run`

Perform a single run without watch mode.

### `vitest watch`

Run all test suites but watch for changes and rerun tests when they change. Same as calling `vitest` without an argument. Will fallback to `vitest run` in CI or when stdin is not a TTY (non-interactive environment).

### `vitest dev`

Alias to `vitest watch`.

### `vitest related`

Run only tests that cover a list of source files. Works with static imports (e.g., `import('./index.js')` or `import index from './index.js`), but not the dynamic ones (e.g., `import(filepath)`). All files should be relative to root folder.

Useful to run with [`lint-staged`](https://github.com/okonet/lint-staged) or with your CI setup.

```bash
vitest related /src/index.ts /src/hello-world.js
```

::: tip
Don't forget that Vitest runs with enabled watch mode by default. If you are using tools like `lint-staged`, you  should also pass `--run` option, so that command can exit normally.

```js [.lintstagedrc.js]
export default {
  '*.{js,ts}': 'vitest related --run',
}
```
:::

### `vitest bench`

Run only [benchmark](/guide/features.html#benchmarking) tests, which compare performance results.

### `vitest init`

`vitest init <name>` can be used to setup project configuration. At the moment, it only supports [`browser`](/guide/browser/) value:

```bash
vitest init browser
```

### `vitest list`

`vitest list` command inherits all `vitest` options to print the list of all matching tests. This command ignores `reporters` option. By default, it will print the names of all tests that matched the file filter and name pattern:

```shell
vitest list filename.spec.ts -t="some-test"
```

```txt
describe > some-test
describe > some-test > test 1
describe > some-test > test 2
```

You can pass down `--json` flag to print tests in JSON format or save it in a separate file:

```bash
vitest list filename.spec.ts -t="some-test" --json=./file.json
```

If `--json` flag doesn't receive a value, it will output the JSON into stdout.

You also can pass down `--filesOnly` flag to print the test files only:

```bash
vitest list --filesOnly
```

```txt
tests/test1.test.ts
tests/test2.test.ts
```

## Options

::: tip
Vitest supports both camel case and kebab case for CLI arguments. For example, `--passWithNoTests` and `--pass-with-no-tests` will both work (`--no-color` and `--inspect-brk` are the exceptions).

Vitest also supports different ways of specifying the value: `--reporter dot` and `--reporter=dot` are both valid.

If option supports an array of values, you need to pass the option multiple times:

```
vitest --reporter=dot --reporter=default
```

Boolean options can be negated with `no-` prefix. Specifying the value as `false` also works:

```
vitest --no-api
vitest --api=false
```
:::

<!--@include: ./cli-generated.md-->

### changed

- **Type**: `boolean | string`
- **Default**: false

Run tests only against changed files. If no value is provided, it will run tests against uncommitted changes (including staged and unstaged).

To run tests against changes made in the last commit, you can use `--changed HEAD~1`. You can also pass commit hash (e.g. `--changed 09a9920`) or branch name (e.g. `--changed origin/develop`).

When used with code coverage the report will contain only the files that were related to the changes.

If paired with the [`forceRerunTriggers`](/config/#forcereruntriggers) config option it will run the whole test suite if at least one of the files listed in the `forceRerunTriggers` list changes. By default, changes to the Vitest config file and `package.json` will always rerun the whole suite.

### shard

- **Type**: `string`
- **Default**: disabled

Test suite shard to execute in a format of `<index>`/`<count>`, where

- `count` is a positive integer, count of divided parts
- `index` is a positive integer, index of divided part

This command will divide all tests into `count` equal parts, and will run only those that happen to be in an `index` part. For example, to split your tests suite into three parts, use this:

```sh
vitest run --shard=1/3
vitest run --shard=2/3
vitest run --shard=3/3
```

:::warning
You cannot use this option with `--watch` enabled (enabled in dev by default).
:::

::: tip
If `--reporter=blob` is used without an output file, the default path will include the current shard config to avoid collisions with other Vitest processes.
:::

### merge-reports

- **Type:** `boolean | string`

Merges every blob report located in the specified folder (`.vitest-reports` by default). You can use any reporters with this command (except [`blob`](/guide/reporters#blob-reporter)):

```sh
vitest --merge-reports --reporter=junit
```

[cac's dot notation]: https://github.com/cacjs/cac#dot-nested-options
````

## File: docs/guide/common-errors.md
````markdown
---
title: Common Errors | Guide
---

# Common Errors

## Cannot find module './relative-path'

If you receive an error that module cannot be found, it might mean several different things:

- 1. You misspelled the path. Make sure the path is correct.

- 2. It's possible that you rely on `baseUrl` in your `tsconfig.json`. Vite doesn't take into account `tsconfig.json` by default, so you might need to install [`vite-tsconfig-paths`](https://www.npmjs.com/package/vite-tsconfig-paths) yourself, if you rely on this behaviour.

```ts
import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()]
})
```

Or rewrite your path to not be relative to root:

```diff
- import helpers from 'src/helpers'
+ import helpers from '../src/helpers'
```

- 3. Make sure you don't have relative [aliases](/config/#alias). Vite treats them as relative to the file where the import is instead of the root.

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    alias: {
      '@/': './src/', // [!code --]
      '@/': new URL('./src/', import.meta.url).pathname, // [!code ++]
    }
  }
})
```

## Failed to terminate worker

This error can happen when NodeJS's `fetch` is used with default [`pool: 'threads'`](/config/#threads). This issue is tracked on issue [Timeout abort can leave process(es) running in the background #3077](https://github.com/vitest-dev/vitest/issues/3077).

As work-around you can switch to [`pool: 'forks'`](/config/#forks) or [`pool: 'vmForks'`](/config/#vmforks).

::: code-group
```ts [vitest.config.js]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    pool: 'forks',
  },
})
```
```bash [CLI]
vitest --pool=forks
```
:::

## Segfaults and native code errors

Running [native NodeJS modules](https://nodejs.org/api/addons.html) in `pool: 'threads'` can run into cryptic errors coming from the native code.

- `Segmentation fault (core dumped)`
- `thread '<unnamed>' panicked at 'assertion failed`
- `Abort trap: 6`
- `internal error: entered unreachable code`

In these cases the native module is likely not built to be multi-thread safe. As work-around, you can switch to `pool: 'forks'` which runs the test cases in multiple `node:child_process` instead of multiple `node:worker_threads`.

::: code-group
```ts [vitest.config.js]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    pool: 'forks',
  },
})
```
```bash [CLI]
vitest --pool=forks
```
:::
````

## File: docs/guide/comparisons.md
````markdown
---
title: Comparisons with Other Test Runners | Guide
---

# Comparisons with Other Test Runners

## Jest

[Jest](https://jestjs.io/) took over the Testing Framework space by providing out-of-the-box support for most JavaScript projects, a comfortable API (`it` and `expect`), and the full pack of testing features that most setups would require (snapshots, mocks, coverage). We are thankful to the Jest team and community for creating a delightful testing API and pushing forward a lot of the testing patterns that are now a standard in the web ecosystem.

It is possible to use Jest in Vite setups. [@sodatea](https://bsky.app/profile/haoqun.dev) built [vite-jest](https://github.com/sodatea/vite-jest#readme), which aims to provide first-class Vite integration for [Jest](https://jestjs.io/). The last [blockers in Jest](https://github.com/sodatea/vite-jest/blob/main/packages/vite-jest/README.md#vite-jest) have been solved, so this is a valid option for your unit tests.

However, in a world where we have [Vite](https://vitejs.dev) providing support for the most common web tooling (TypeScript, JSX, most popular UI Frameworks), Jest represents a duplication of complexity. If your app is powered by Vite, having two different pipelines to configure and maintain is not justifiable. With Vitest you get to define the configuration for your dev, build and test environments as a single pipeline, sharing the same plugins and the same vite.config.js.

Even if your library is not using Vite (for example, if it is built with esbuild or Rollup), Vitest is an interesting option as it gives you a faster run for your unit tests and a jump in DX thanks to the default watch mode using Vite instant Hot Module Reload (HMR). Vitest offers compatibility with most of the Jest API and ecosystem libraries, so in most projects, it should be a drop-in replacement for Jest.

## Cypress

[Cypress](https://www.cypress.io/) is a browser-based test runner and a complementary tool to Vitest. If you'd like to use Cypress, we suggest using Vitest for all headless logic in your application and Cypress for all browser-based logic.

Cypress is known as an end-to-end testing tool, but their [new component test runner](https://on.cypress.io/component) has great support for testing Vite components and is an ideal choice to test anything that renders in a browser.

Browser-based runners, like Cypress, WebdriverIO and Web Test Runner, will catch issues that Vitest cannot because they use the real browser and real browser APIs.

Cypress's test driver is focused on determining if elements are visible, accessible, and interactive. Cypress is purpose-built for UI development and testing and its DX is centered around test driving your visual components. You see your component rendered alongside the test reporter. Once the test is complete, the component remains interactive and you can debug any failures that occur using your browser devtools.

In contrast, Vitest is focused on delivering the best DX possible for lightning fast, *headless* testing. Node-based runners like Vitest support various partially-implemented browser environments, like `jsdom`, which implement enough for you to quickly unit test any code that references browser APIs. The tradeoff is that these browser environments have limitations in what they can implement. For example, [jsdom is missing a number of features](https://github.com/jsdom/jsdom/issues?q=is%3Aissue+is%3Aopen+sort%3Acomments-desc) like `window.navigation` or a layout engine (`offsetTop`, etc).

Lastly, in contrast to the Web Test Runner, the Cypress test runner is more like an IDE than a test runner because you also see the real rendered component in the browser, along with its test results and logs.

Cypress has also been [integrating Vite in their products](https://www.youtube.com/watch?v=7S5cbY8iYLk): re-building their App's UI using [Vitesse](https://github.com/antfu/vitesse) and using Vite to test drive their project's development.

We believe that Cypress isn't a good option for unit testing headless code, but that using Cypress (for E2E and Component Testing) and Vitest (for unit tests) would cover your app's testing needs.

## WebdriverIO

[WebdriverIO](https://webdriver.io/) is, similar to Cypress, a browser-based alternative test runner and a complementary tool to Vitest. It can be used as an end-to-end testing tool as well as for testing [web components](https://webdriver.io/docs/component-testing). It even uses components of Vitest under the hood, e.g. for [mocking and stubbing](https://webdriver.io/docs/mocksandspies/) within component tests.

WebdriverIO comes with the same advantages as Cypress allowing you to test your logic in real browser. However, it uses actual [web standards](https://w3c.github.io/webdriver/) for automation, which overcomes some of the tradeoffs and limitation when running tests in Cypress. Furthermore, it allows you to run tests on mobile as well, giving you access to test your application in even more environments.

## Web Test Runner

[@web/test-runner](https://modern-web.dev/docs/test-runner/overview/) runs tests inside a headless browser, providing the same execution environment as your web application without the need for mocking out browser APIs or the DOM. This also makes it possible to debug inside a real browser using the devtools, although there is no UI shown for stepping through the test, as there is in Cypress tests.

To use @web/test-runner with a Vite project, use [@remcovaes/web-test-runner-vite-plugin](https://github.com/remcovaes/web-test-runner-vite-plugin). @web/test-runner does not include assertion or mocking libraries, so it is up to you to add them.

## uvu

[uvu](https://github.com/lukeed/uvu) is a test runner for Node.js and the browser. It runs tests in a single thread, so tests are not isolated and can leak across files. Vitest, however, uses worker threads to isolate tests and run them in parallel.

For transforming your code, uvu relies on require and loader hooks. Vitest uses [Vite](https://vitejs.dev), so files are transformed with the full power of Vite's plugin system. In a world where we have Vite providing support for the most common web tooling (TypeScript, JSX, most popular UI Frameworks), uvu represents a duplication of complexity. If your app is powered by Vite, having two different pipelines to configure and maintain is not justifiable. With Vitest you get to define the configuration for your dev, build and test environments as a single pipeline, sharing the same plugins and the same configuration.

uvu does not provide an intelligent watch mode to rerun the changed tests, while Vitest gives you amazing DX thanks to the default watch mode using Vite instant Hot Module Reload (HMR).

uvu is a fast option for running simple tests, but Vitest can be faster and more reliable for more complex tests and projects.
````

## File: docs/guide/coverage.md
````markdown
---
title: Coverage | Guide
---

# Coverage

Vitest supports Native code coverage via [`v8`](https://v8.dev/blog/javascript-code-coverage) and instrumented code coverage via [`istanbul`](https://istanbul.js.org/).

## Coverage Providers

Both `v8` and `istanbul` support are optional. By default, `v8` will be used.

You can select the coverage tool by setting `test.coverage.provider` to `v8` or `istanbul`:

```ts [vitest.config.ts]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'istanbul' // or 'v8'
    },
  },
})
```

When you start the Vitest process, it will prompt you to install the corresponding support package automatically.

Or if you prefer to install them manually:

::: code-group
```bash [v8]
npm i -D @vitest/coverage-v8
```
```bash [istanbul]
npm i -D @vitest/coverage-istanbul
```
:::

## V8 provider

::: info
The description of V8 coverage below is Vitest specific and does not apply to other test runners.
Since `v3.2.0` Vitest has used [AST based coverage remapping](/blog/vitest-3-2#coverage-v8-ast-aware-remapping) for V8 coverage, which produces identical coverage reports to Istanbul.

This allows users to have the speed of V8 coverage with accuracy of Istanbul coverage.
:::

By default Vitest uses `'v8'` coverage provider.
This provider requires Javascript runtime that's implemented on top of [V8 engine](https://v8.dev/), such as NodeJS, Deno or any Chromium based browsers such as Google Chrome.

Coverage collection is performed during runtime by instructing V8 using [`node:inspector`](https://nodejs.org/api/inspector.html) and [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/tot/Profiler/) in browsers. User's source files can be executed as-is without any pre-instrumentation steps.

- ✅ Recommended option to use
- ✅ No pre-transpile step. Test files can be executed as-is.
- ✅ Faster execute times than Istanbul.
- ✅ Lower memory usagethan Istanbul.
- ✅ Coverage report accuracy is as good as with Istanbul ([since Vitest `v3.2.0`](/blog/vitest-3-2#coverage-v8-ast-aware-remapping)).
- ⚠️ In some cases can be slower than Istanbul, e.g. when loading lots of different modules. V8 does not support limiting coverage collection to specific modules.
- ⚠️ There are some minor limitations set by V8 engine. See [`ast-v8-to-istanbl` | Limitations](https://github.com/AriPerkkio/ast-v8-to-istanbul?tab=readme-ov-file#limitations).
- ❌ Does not work on environments that don't use V8, such as Firefox or Bun. Or on environments that don't expose V8 coverage via profiler, such as Cloudflare Workers.

<div style="display: flex; flex-direction: column; align-items: center; padding: 2rem 0; max-width: 20rem;">
  <Box>Test file</Box>
  <ArrowDown />
  <Box>Enable V8 runtime coverage collection</Box>
  <ArrowDown />
  <Box>Run file</Box>
  <ArrowDown />
  <Box>Collect coverage results from V8</Box>
  <ArrowDown />
  <Box>Remap coverage results to source files</Box>
  <ArrowDown />
  <Box>Coverage report</Box>
</div>

## Istanbul provider

[Istanbul code coverage tooling](https://istanbul.js.org/) has existed since 2012 and is very well battle-tested.
This provider works on any Javascript runtime as coverage tracking is done by instrumenting user's source files.

In practice, instrumenting source files means adding additional Javascript in user's files:

```js
// Simplified example of branch and function coverage counters
const coverage = { // [!code ++]
  branches: { 1: [0, 0] }, // [!code ++]
  functions: { 1: 0 }, // [!code ++]
} // [!code ++]

export function getUsername(id) {
  // Function coverage increased when this is invoked  // [!code ++]
  coverage.functions['1']++ // [!code ++]

  if (id == null) {
    // Branch coverage increased when this is invoked  // [!code ++]
    coverage.branches['1'][0]++ // [!code ++]

    throw new Error('User ID is required')
  }
  // Implicit else coverage increased when if-statement condition not met  // [!code ++]
  coverage.branches['1'][1]++ // [!code ++]

  return database.getUser(id)
}

globalThis.__VITEST_COVERAGE__ ||= {} // [!code ++]
globalThis.__VITEST_COVERAGE__[filename] = coverage // [!code ++]
```

- ✅ Works on any Javascript runtime
- ✅ Widely used and battle-tested for over 13 years.
- ✅ In some cases faster than V8. Coverage instrumentation can be limited to specific files, as opposed to V8 where all modules are instrumented.
- ❌ Requires pre-instrumentation step
- ❌ Execution speed is slower than V8 due to instrumentation overhead
- ❌ Instrumentation increases file sizes
- ❌ Memory usage is higher than V8

<div style="display: flex; flex-direction: column; align-items: center; padding: 2rem 0; max-width: 20rem;">
  <Box>Test file</Box>
  <ArrowDown />
  <Box>Pre‑instrumentation with Babel</Box>
  <ArrowDown />
  <Box>Run file</Box>
  <ArrowDown />
  <Box>Collect coverage results from Javascript scope</Box>
  <ArrowDown />
  <Box>Remap coverage results to source files</Box>
  <ArrowDown />
  <Box>Coverage report</Box>
</div>

## Coverage Setup

:::tip
It's recommended to always define [`coverage.include`](https://vitest.dev/config/#coverage-include) in your configuration file.
This helps Vitest to reduce the amount of files picked by [`coverage.all`](https://vitest.dev/config/#coverage-all).
:::

To test with coverage enabled, you can pass the `--coverage` flag in CLI.
By default, reporter `['text', 'html', 'clover', 'json']` will be used.

```json [package.json]
{
  "scripts": {
    "test": "vitest",
    "coverage": "vitest run --coverage"
  }
}
```

To configure it, set `test.coverage` options in your config file:

```ts [vitest.config.ts]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
})
```

## Custom Coverage Reporter

You can use custom coverage reporters by passing either the name of the package or absolute path in `test.coverage.reporter`:

```ts [vitest.config.ts]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      reporter: [
        // Specify reporter using name of the NPM package
        ['@vitest/custom-coverage-reporter', { someOption: true }],

        // Specify reporter using local path
        '/absolute/path/to/custom-reporter.cjs',
      ],
    },
  },
})
```

Custom reporters are loaded by Istanbul and must match its reporter interface. See [built-in reporters' implementation](https://github.com/istanbuljs/istanbuljs/tree/master/packages/istanbul-reports/lib) for reference.

```js [custom-reporter.cjs]
const { ReportBase } = require('istanbul-lib-report')

module.exports = class CustomReporter extends ReportBase {
  constructor(opts) {
    super()

    // Options passed from configuration are available here
    this.file = opts.file
  }

  onStart(root, context) {
    this.contentWriter = context.writer.writeFile(this.file)
    this.contentWriter.println('Start of custom coverage report')
  }

  onEnd() {
    this.contentWriter.println('End of custom coverage report')
    this.contentWriter.close()
  }
}
```

## Custom Coverage Provider

It's also possible to provide your custom coverage provider by passing `'custom'` in `test.coverage.provider`:

```ts [vitest.config.ts]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'custom',
      customProviderModule: 'my-custom-coverage-provider'
    },
  },
})
```

The custom providers require a `customProviderModule` option which is a module name or path where to load the `CoverageProviderModule` from. It must export an object that implements `CoverageProviderModule` as default export:

```ts [my-custom-coverage-provider.ts]
import type {
  CoverageProvider,
  CoverageProviderModule,
  ResolvedCoverageOptions,
  Vitest
} from 'vitest'

const CustomCoverageProviderModule: CoverageProviderModule = {
  getProvider(): CoverageProvider {
    return new CustomCoverageProvider()
  },

  // Implements rest of the CoverageProviderModule ...
}

class CustomCoverageProvider implements CoverageProvider {
  name = 'custom-coverage-provider'
  options!: ResolvedCoverageOptions

  initialize(ctx: Vitest) {
    this.options = ctx.config.coverage
  }

  // Implements rest of the CoverageProvider ...
}

export default CustomCoverageProviderModule
```

Please refer to the type definition for more details.

## Changing the Default Coverage Folder Location

When running a coverage report, a `coverage` folder is created in the root directory of your project. If you want to move it to a different directory, use the `test.coverage.reportsDirectory` property in the `vitest.config.js` file.

```js [vitest.config.js]
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    coverage: {
      reportsDirectory: './tests/unit/coverage'
    }
  }
})
```

## Ignoring Code

Both coverage providers have their own ways how to ignore code from coverage reports:

- [`v8`](https://github.com/istanbuljs/v8-to-istanbul#ignoring-uncovered-lines)
- [`ìstanbul`](https://github.com/istanbuljs/nyc#parsing-hints-ignoring-lines)
- `v8` with [`experimentalAstAwareRemapping: true`](https://vitest.dev/config/#coverage-experimentalAstAwareRemapping) see [ast-v8-to-istanbul | Ignoring code](https://github.com/AriPerkkio/ast-v8-to-istanbul?tab=readme-ov-file#ignoring-code)

When using TypeScript the source codes are transpiled using `esbuild`, which strips all comments from the source codes ([esbuild#516](https://github.com/evanw/esbuild/issues/516)).
Comments which are considered as [legal comments](https://esbuild.github.io/api/#legal-comments) are preserved.

You can include a `@preserve` keyword in the ignore hint.
Beware that these ignore hints may now be included in final production build as well.

```diff
-/* istanbul ignore if */
+/* istanbul ignore if -- @preserve */
if (condition) {

-/* v8 ignore if */
+/* v8 ignore if -- @preserve */
if (condition) {
```

## Other Options

To see all configurable options for coverage, see the [coverage Config Reference](https://vitest.dev/config/#coverage).

## Coverage performance

If code coverage generation is slow on your project, see [Profiling Test Performance | Code coverage](/guide/profiling-test-performance.html#code-coverage).

## Vitest UI

You can check your coverage report in [Vitest UI](/guide/ui).

Vitest UI will enable coverage report when it is enabled explicitly and the html coverage reporter is present, otherwise it will not be available:
- enable `coverage.enabled=true` in your configuration file or run Vitest with `--coverage.enabled=true` flag
- add `html` to the `coverage.reporter` list: you can also enable `subdir` option to put coverage report in a subdirectory

<img alt="html coverage activation in Vitest UI" img-light src="/vitest-ui-show-coverage-light.png">
<img alt="html coverage activation in Vitest UI" img-dark src="/vitest-ui-show-coverage-dark.png">

<img alt="html coverage in Vitest UI" img-light src="/ui-coverage-1-light.png">
<img alt="html coverage in Vitest UI" img-dark src="/ui-coverage-1-dark.png">
````

## File: docs/guide/debugging.md
````markdown
---
title: Debugging | Guide
---

# Debugging

:::tip
When debugging tests you might want to use following options:

- [`--test-timeout=0`](/guide/cli#testtimeout) to prevent tests from timing out when stopping at breakpoints
- [`--no-file-parallelism`](/guide/cli#fileparallelism) to prevent test files from running parallel

:::

## VS Code

Quick way to debug tests in VS Code is via `JavaScript Debug Terminal`. Open a new `JavaScript Debug Terminal` and run `npm run test` or `vitest` directly. *this works with any code run in Node, so will work with most JS testing frameworks*

![image](https://user-images.githubusercontent.com/5594348/212169143-72bf39ce-f763-48f5-822a-0c8b2e6a8484.png)

You can also add a dedicated launch configuration to debug a test file in VS Code:

```json
{
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Current Test File",
      "autoAttachChildProcesses": true,
      "skipFiles": ["<node_internals>/**", "**/node_modules/**"],
      "program": "${workspaceRoot}/node_modules/vitest/vitest.mjs",
      "args": ["run", "${relativeFile}"],
      "smartStep": true,
      "console": "integratedTerminal"
    }
  ]
}
```

Then in the debug tab, ensure 'Debug Current Test File' is selected. You can then open the test file you want to debug and press F5 to start debugging.

### Browser mode

To debug [Vitest Browser Mode](/guide/browser/index.md), pass `--inspect` or `--inspect-brk` in CLI or define it in your Vitest configuration:

::: code-group
```bash [CLI]
vitest --inspect-brk --browser --no-file-parallelism
```
```ts [vitest.config.js]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    inspectBrk: true,
    fileParallelism: false,
    browser: {
      provider: 'playwright',
      instances: [{ browser: 'chromium' }]
    },
  },
})
```
:::

By default Vitest will use port `9229` as debugging port. You can overwrite it with by passing value in `--inspect-brk`:

```bash
vitest --inspect-brk=127.0.0.1:3000 --browser --no-file-parallelism
```

Use following [VSCode Compound configuration](https://code.visualstudio.com/docs/editor/debugging#_compound-launch-configurations) for launching Vitest and attaching debugger in the browser:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Run Vitest Browser",
      "program": "${workspaceRoot}/node_modules/vitest/vitest.mjs",
      "console": "integratedTerminal",
      "args": ["--inspect-brk", "--browser", "--no-file-parallelism"]
    },
    {
      "type": "chrome",
      "request": "attach",
      "name": "Attach to Vitest Browser",
      "port": 9229
    }
  ],
  "compounds": [
    {
      "name": "Debug Vitest Browser",
      "configurations": ["Attach to Vitest Browser", "Run Vitest Browser"],
      "stopAll": true
    }
  ]
}
```

## IntelliJ IDEA

Create a [vitest](https://www.jetbrains.com/help/idea/vitest.html#createRunConfigVitest) run configuration. Use the following settings to run all tests in debug mode:

Setting | Value
 --- | ---
Working directory | `/path/to/your-project-root`

Then run this configuration in debug mode. The IDE will stop at JS/TS breakpoints set in the editor.

## Node Inspector, e.g. Chrome DevTools

Vitest also supports debugging tests without IDEs. However this requires that tests are not run parallel. Use one of the following commands to launch Vitest.

```sh
# To run in a single worker
vitest --inspect-brk --pool threads --poolOptions.threads.singleThread

# To run in a single child process
vitest --inspect-brk --pool forks --poolOptions.forks.singleFork

# To run in browser mode
vitest --inspect-brk --browser --no-file-parallelism
```

If you are using Vitest 1.1 or higher, you can also just provide `--no-file-parallelism` flag:

```sh
# If pool is unknown
vitest --inspect-brk --no-file-parallelism
```

Once Vitest starts it will stop execution and wait for you to open developer tools that can connect to [Node.js inspector](https://nodejs.org/en/docs/guides/debugging-getting-started/). You can use Chrome DevTools for this by opening `chrome://inspect` on browser.

In watch mode you can keep the debugger open during test re-runs by using the `--poolOptions.threads.isolate false` options.
````

## File: docs/guide/environment.md
````markdown
---
title: Test Environment | Guide
---

# Test Environment

Vitest provides [`environment`](/config/#environment) option to run code inside a specific environment. You can modify how environment behaves with [`environmentOptions`](/config/#environmentoptions) option.

By default, you can use these environments:

- `node` is default environment
- `jsdom` emulates browser environment by providing Browser API, uses [`jsdom`](https://github.com/jsdom/jsdom) package
- `happy-dom` emulates browser environment by providing Browser API, and considered to be faster than jsdom, but lacks some API, uses [`happy-dom`](https://github.com/capricorn86/happy-dom) package
- `edge-runtime` emulates Vercel's [edge-runtime](https://edge-runtime.vercel.app/), uses [`@edge-runtime/vm`](https://www.npmjs.com/package/@edge-runtime/vm) package

::: info
When using `jsdom` or `happy-dom` environments, Vitest follows the same rules that Vite does when importing [CSS](https://vitejs.dev/guide/features.html#css) and [assets](https://vitejs.dev/guide/features.html#static-assets). If importing external dependency fails with `unknown extension .css` error, you need to inline the whole import chain manually by adding all packages to [`server.deps.external`](/config/#server-deps-external). For example, if the error happens in `package-3` in this import chain: `source code -> package-1 -> package-2 -> package-3`, you need to add all three packages to `server.deps.external`.

The `require` of CSS and assets inside the external dependencies are resolved automatically.
:::

::: warning
"Environments" exist only when running tests in Node.js.

`browser` is not considered an environment in Vitest. If you wish to run part of your tests using [Browser Mode](/guide/browser/), you can create a [test project](/guide/browser/#projects-config).
:::

## Environments for Specific Files

When setting `environment` option in your config, it will apply to all the test files in your project. To have more fine-grained control, you can use control comments to specify environment for specific files. Control comments are comments that start with `@vitest-environment` and are followed by the environment name:

```ts
// @vitest-environment jsdom

import { expect, test } from 'vitest'

test('test', () => {
  expect(typeof window).not.toBe('undefined')
})
```

Or you can also set [`environmentMatchGlobs`](https://vitest.dev/config/#environmentmatchglobs) option specifying the environment based on the glob patterns.

## Custom Environment

You can create your own package to extend Vitest environment. To do so, create package with the name `vitest-environment-${name}` or specify a path to a valid JS/TS file. That package should export an object with the shape of `Environment`:

```ts
import type { Environment } from 'vitest/environments'

export default <Environment>{
  name: 'custom',
  transformMode: 'ssr',
  // optional - only if you support "experimental-vm" pool
  async setupVM() {
    const vm = await import('node:vm')
    const context = vm.createContext()
    return {
      getVmContext() {
        return context
      },
      teardown() {
        // called after all tests with this env have been run
      }
    }
  },
  setup() {
    // custom setup
    return {
      teardown() {
        // called after all tests with this env have been run
      }
    }
  }
}
```

::: warning
Vitest requires `transformMode` option on environment object. It should be equal to `ssr` or `web`. This value determines how plugins will transform source code. If it's set to `ssr`, plugin hooks will receive `ssr: true` when transforming or resolving files. Otherwise, `ssr` is set to `false`.
:::

You also have access to default Vitest environments through `vitest/environments` entry:

```ts
import { builtinEnvironments, populateGlobal } from 'vitest/environments'

console.log(builtinEnvironments) // { jsdom, happy-dom, node, edge-runtime }
```

Vitest also provides `populateGlobal` utility function, which can be used to move properties from object into the global namespace:

```ts
interface PopulateOptions {
  // should non-class functions be bind to the global namespace
  bindFunctions?: boolean
}

interface PopulateResult {
  // a list of all keys that were copied, even if value doesn't exist on original object
  keys: Set<string>
  // a map of original object that might have been overridden with keys
  // you can return these values inside `teardown` function
  originals: Map<string | symbol, any>
}

export function populateGlobal(global: any, original: any, options: PopulateOptions): PopulateResult
```
````

## File: docs/guide/extending-matchers.md
````markdown
---
title: Extending Matchers | Guide
---

# Extending Matchers

Since Vitest is compatible with both Chai and Jest, you can use either the `chai.use` API or `expect.extend`, whichever you prefer.

This guide will explore extending matchers with `expect.extend`. If you are interested in Chai's API, check [their guide](https://www.chaijs.com/guide/plugins/).

To extend default matchers, call `expect.extend` with an object containing your matchers.

```ts
expect.extend({
  toBeFoo(received, expected) {
    const { isNot } = this
    return {
      // do not alter your "pass" based on isNot. Vitest does it for you
      pass: received === 'foo',
      message: () => `${received} is${isNot ? ' not' : ''} foo`
    }
  }
})
```

If you are using TypeScript, you can extend default `Assertion` interface in an ambient declaration file (e.g: `vitest.d.ts`) with the code below:

::: code-group
```ts [<Version>3.2.0</Version>]
import 'vitest'

interface CustomMatchers<R = unknown> {
  toBeFoo: () => R
}

declare module 'vitest' {
  interface Matchers<T = any> extends CustomMatchers<T> {}
}
```
```ts [<Version>3.0.0</Version>]
import 'vitest'

interface CustomMatchers<R = unknown> {
  toBeFoo: () => R
}

declare module 'vitest' {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
```
:::

::: tip
Since Vitest 3.2, you can extend the `Matchers` interface to have type-safe assertions in `expect.extend`, `expect().*`, and `expect.*` methods at the same time. Previously, you had to define separate interfaces for each of them.
:::

::: warning
Don't forget to include the ambient declaration file in your `tsconfig.json`.
:::

The return value of a matcher should be compatible with the following interface:

```ts
interface ExpectationResult {
  pass: boolean
  message: () => string
  // If you pass these, they will automatically appear inside a diff when
  // the matcher does not pass, so you don't need to print the diff yourself
  actual?: unknown
  expected?: unknown
}
```

::: warning
If you create an asynchronous matcher, don't forget to `await` the result (`await expect('foo').toBeFoo()`) in the test itself::

```ts
expect.extend({
  async toBeAsyncAssertion() {
    // ...
  }
})

await expect().toBeAsyncAssertion()
```
:::

The first argument inside a matcher's function is the received value (the one inside `expect(received)`). The rest are arguments passed directly to the matcher.

Matcher function has access to `this` context with the following properties:

### `isNot`

Returns true, if matcher was called on `not` (`expect(received).not.toBeFoo()`).

### `promise`

If matcher was called on `resolved/rejected`, this value will contain the name of modifier. Otherwise, it will be an empty string.

### `equals`

This is a utility function that allows you to compare two values. It will return `true` if values are equal, `false` otherwise. This function is used internally for almost every matcher. It supports objects with asymmetric matchers by default.

### `utils`

This contains a set of utility functions that you can use to display messages.

`this` context also contains information about the current test. You can also get it by calling `expect.getState()`. The most useful properties are:

### `currentTestName`

Full name of the current test (including describe block).

### `testPath`

Path to the current test.
````

## File: docs/guide/features.md
````markdown
---
title: Features | Guide
outline: deep
---

# Features

<FeaturesList class="!gap-1 text-lg" />

<div h-2 />
<CourseLink href="https://vueschool.io/lessons/your-first-test?friend=vueuse">Learn how to write your first test by Video</CourseLink>

## Shared Config between Test, Dev and Build

Vite's config, transformers, resolvers, and plugins. Use the same setup from your app to run the tests.

Learn more at [Configuring Vitest](/guide/#configuring-vitest).

## Watch Mode

```bash
$ vitest
```

When you modify your source code or the test files, Vitest smartly searches the module graph and only reruns the related tests, just like how HMR works in Vite!

`vitest` starts in `watch mode` **by default in development environment** and `run mode` in CI environment (when `process.env.CI` presents) smartly. You can use `vitest watch` or `vitest run` to explicitly specify the desired mode.

Start Vitest with the `--standalone` flag to keep it running in the background. It won't run any tests until they change. Vitest will not run tests if the source code is changed until the test that imports the source has been run

## Common Web Idioms Out-Of-The-Box

Out-of-the-box ES Module / TypeScript / JSX support / PostCSS

## Threads

By default Vitest runs test files in [multiple processes](/guide/parallelism) using [`node:child_process`](https://nodejs.org/api/child_process.html) via [Tinypool](https://github.com/tinylibs/tinypool) (a lightweight fork of [Piscina](https://github.com/piscinajs/piscina)), allowing tests to run simultaneously. If you want to speed up your test suite even further, consider enabling `--pool=threads` to run tests using [`node:worker_threads`](https://nodejs.org/api/worker_threads.html) (beware that some packages might not work with this setup).

To run tests in a single thread or process, see [`poolOptions`](/config/#pooloptions).

Vitest also isolates each file's environment so env mutations in one file don't affect others. Isolation can be disabled by passing `--no-isolate` to the CLI (trading correctness for run performance).

## Test Filtering

Vitest provides many ways to narrow down the tests to run in order to speed up testing so you can focus on development.

Learn more about [Test Filtering](/guide/filtering).

## Running Tests Concurrently

Use `.concurrent` in consecutive tests to start them in parallel.

```ts
import { describe, it } from 'vitest'

// The two tests marked with concurrent will be started in parallel
describe('suite', () => {
  it('serial test', async () => { /* ... */ })
  it.concurrent('concurrent test 1', async ({ expect }) => { /* ... */ })
  it.concurrent('concurrent test 2', async ({ expect }) => { /* ... */ })
})
```

If you use `.concurrent` on a suite, every test in it will be started in parallel.

```ts
import { describe, it } from 'vitest'

// All tests within this suite will be started in parallel
describe.concurrent('suite', () => {
  it('concurrent test 1', async ({ expect }) => { /* ... */ })
  it('concurrent test 2', async ({ expect }) => { /* ... */ })
  it.concurrent('concurrent test 3', async ({ expect }) => { /* ... */ })
})
```

You can also use `.skip`, `.only`, and `.todo` with concurrent suites and tests. Read more in the [API Reference](/api/#test-concurrent).

::: warning
When running concurrent tests, Snapshots and Assertions must use `expect` from the local [Test Context](/guide/test-context) to ensure the right test is detected.
:::

## Snapshot

[Jest-compatible](https://jestjs.io/docs/snapshot-testing) snapshot support.

```ts
import { expect, it } from 'vitest'

it('renders correctly', () => {
  const result = render()
  expect(result).toMatchSnapshot()
})
```

Learn more at [Snapshot](/guide/snapshot).

## Chai and Jest `expect` Compatibility

[Chai](https://www.chaijs.com/) is built-in for assertions with [Jest `expect`](https://jestjs.io/docs/expect)-compatible APIs.

Notice that if you are using third-party libraries that add matchers, setting [`test.globals`](/config/#globals) to `true` will provide better compatibility.

## Mocking

[Tinyspy](https://github.com/tinylibs/tinyspy) is built-in for mocking with `jest`-compatible APIs on `vi` object.

```ts
import { expect, vi } from 'vitest'

const fn = vi.fn()

fn('hello', 1)

expect(vi.isMockFunction(fn)).toBe(true)
expect(fn.mock.calls[0]).toEqual(['hello', 1])

fn.mockImplementation((arg: string) => arg)

fn('world', 2)

expect(fn.mock.results[1].value).toBe('world')
```

Vitest supports both [happy-dom](https://github.com/capricorn86/happy-dom) or [jsdom](https://github.com/jsdom/jsdom) for mocking DOM and browser APIs. They don't come with Vitest, you will need to install them separately:

::: code-group
```bash [happy-dom]
$ npm i -D happy-dom
```
```bash [jsdom]
$ npm i -D jsdom
```
:::

After that, change the `environment` option in your config file:

```ts [vitest.config.ts]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'happy-dom', // or 'jsdom', 'node'
  },
})
```

Learn more at [Mocking](/guide/mocking).

## Coverage

Vitest supports Native code coverage via [`v8`](https://v8.dev/blog/javascript-code-coverage) and instrumented code coverage via [`istanbul`](https://istanbul.js.org/).

```json [package.json]
{
  "scripts": {
    "test": "vitest",
    "coverage": "vitest run --coverage"
  }
}
```

Learn more at [Coverage](/guide/coverage).

## In-Source Testing

Vitest also provides a way to run tests within your source code along with the implementation, similar to [Rust's module tests](https://doc.rust-lang.org/book/ch11-03-test-organization.html#the-tests-module-and-cfgtest).

This makes the tests share the same closure as the implementations and able to test against private states without exporting. Meanwhile, it also brings the feedback loop closer for development.

```ts [src/index.ts]
// the implementation
export function add(...args: number[]): number {
  return args.reduce((a, b) => a + b, 0)
}

// in-source test suites
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('add', () => {
    expect(add()).toBe(0)
    expect(add(1)).toBe(1)
    expect(add(1, 2, 3)).toBe(6)
  })
}
```

Learn more at [In-source testing](/guide/in-source).

## Benchmarking <Badge type="warning">Experimental</Badge> {#benchmarking}

You can run benchmark tests with [`bench`](/api/#bench) function via [Tinybench](https://github.com/tinylibs/tinybench) to compare performance results.

```ts [sort.bench.ts]
import { bench, describe } from 'vitest'

describe('sort', () => {
  bench('normal', () => {
    const x = [1, 5, 4, 2, 3]
    x.sort((a, b) => {
      return a - b
    })
  })

  bench('reverse', () => {
    const x = [1, 5, 4, 2, 3]
    x.reverse().sort((a, b) => {
      return a - b
    })
  })
})
```

<img alt="Benchmark report" img-dark src="https://github.com/vitest-dev/vitest/assets/4232207/6f0383ea-38ba-4f14-8a05-ab243afea01d">
<img alt="Benchmark report" img-light src="https://github.com/vitest-dev/vitest/assets/4232207/efbcb427-ecf1-4882-88de-210cd73415f6">

## Type Testing <Badge type="warning">Experimental</Badge> {#type-testing}

You can [write tests](/guide/testing-types) to catch type regressions. Vitest comes with [`expect-type`](https://github.com/mmkal/expect-type) package to provide you with a similar and easy to understand API.

```ts [types.test-d.ts]
import { assertType, expectTypeOf, test } from 'vitest'
import { mount } from './mount.js'

test('my types work properly', () => {
  expectTypeOf(mount).toBeFunction()
  expectTypeOf(mount).parameter(0).toMatchTypeOf<{ name: string }>()

  // @ts-expect-error name is a string
  assertType(mount({ name: 42 }))
})
```

## Sharding

Run tests on different machines using [`--shard`](/guide/cli#shard) and [`--reporter=blob`](/guide/reporters#blob-reporter) flags.
All test and coverage results can be merged at the end of your CI pipeline using `--merge-reports` command:

```bash
vitest --shard=1/2 --reporter=blob --coverage
vitest --shard=2/2 --reporter=blob --coverage
vitest --merge-reports --reporter=junit --coverage
```

See [`Improving Performance | Sharding`](/guide/improving-performance#sharding) for more information.

## Environment Variables

Vitest exclusively autoloads environment variables prefixed with `VITE_` from `.env` files to maintain compatibility with frontend-related tests, adhering to [Vite's established convention](https://vitejs.dev/guide/env-and-mode.html#env-files). To load every environmental variable from `.env` files anyway, you can use `loadEnv` method imported from `vite`:

```ts [vitest.config.ts]
import { loadEnv } from 'vite'
import { defineConfig } from 'vitest/config'

export default defineConfig(({ mode }) => ({
  test: {
    // mode defines what ".env.{mode}" file to choose if exists
    env: loadEnv(mode, process.cwd(), ''),
  },
}))
```

## Unhandled Errors

By default, Vitest catches and reports all [unhandled rejections](https://developer.mozilla.org/en-US/docs/Web/API/Window/unhandledrejection_event), [uncaught exceptions](https://nodejs.org/api/process.html#event-uncaughtexception) (in Node.js) and [error](https://developer.mozilla.org/en-US/docs/Web/API/Window/error_event) events (in the [browser](/guide/browser/)).

You can disable this behaviour by catching them manually. Vitest assumes the callback is handled by you and won't report the error.

::: code-group
```ts [setup.node.js]
// in Node.js
process.on('unhandledRejection', () => {
  // your own handler
})

process.on('uncaughtException', () => {
  // your own handler
})
```
```ts [setup.browser.js]
// in the browser
window.addEventListener('error', () => {
  // your own handler
})

window.addEventListener('unhandledrejection', () => {
  // your own handler
})
```
:::

Alternatively, you can also ignore reported errors with a [`dangerouslyIgnoreUnhandledErrors`](/config/#dangerouslyignoreunhandlederrors) option. Vitest will still report them, but they won't affect the test result (exit code won't be changed).

If you need to test that error was not caught, you can create a test that looks like this:

```ts
test('my function throws uncaught error', async ({ onTestFinished }) => {
  onTestFinished(() => {
    // if the event was never called during the test,
    // make sure it's removed before the next test starts
    process.removeAllListeners('unhandledrejection')
  })

  return new Promise((resolve, reject) => {
    process.once('unhandledrejection', (error) => {
      try {
        expect(error.message).toBe('my error')
        resolve()
      }
      catch (error) {
        reject(error)
      }
    })

    callMyFunctionThatRejectsError()
  })
})
```
````

## File: docs/guide/filtering.md
````markdown
---
title: Test Filtering | Guide
---

# Test Filtering

Filtering, timeouts, concurrent for suite and tests

## CLI

You can use CLI to filter test files by name:

```bash
$ vitest basic
```

Will only execute test files that contain `basic`, e.g.

```
basic.test.ts
basic-foo.test.ts
basic/foo.test.ts
```

You can also use the `-t, --testNamePattern <pattern>` option to filter tests by full name. This can be helpful when you want to filter by the name defined within a file rather than the filename itself.

Since Vitest 3, you can also specify the test by filename and line number:

```bash
$ vitest basic/foo.test.ts:10
```

::: warning
Note that Vitest requires the full filename for this feature to work. It can be relative to the current working directory or an absolute file path.

```bash
$ vitest basic/foo.js:10 # ✅
$ vitest ./basic/foo.js:10 # ✅
$ vitest /users/project/basic/foo.js:10 # ✅
$ vitest foo:10 # ❌
$ vitest ./basic/foo:10 # ❌
```

At the moment Vitest also doesn't support ranges:

```bash
$ vitest basic/foo.test.ts:10, basic/foo.test.ts:25 # ✅
$ vitest basic/foo.test.ts:10-25 # ❌
```
:::

## Specifying a Timeout

You can optionally pass a timeout in milliseconds as a third argument to tests. The default is [5 seconds](/config/#testtimeout).

```ts
import { test } from 'vitest'

test('name', async () => { /* ... */ }, 1000)
```

Hooks also can receive a timeout, with the same 5 seconds default.

```ts
import { beforeAll } from 'vitest'

beforeAll(async () => { /* ... */ }, 1000)
```

## Skipping Suites and Tests

Use `.skip` to avoid running certain suites or tests

```ts
import { assert, describe, it } from 'vitest'

describe.skip('skipped suite', () => {
  it('test', () => {
    // Suite skipped, no error
    assert.equal(Math.sqrt(4), 3)
  })
})

describe('suite', () => {
  it.skip('skipped test', () => {
    // Test skipped, no error
    assert.equal(Math.sqrt(4), 3)
  })
})
```

## Selecting Suites and Tests to Run

Use `.only` to only run certain suites or tests

```ts
import { assert, describe, it } from 'vitest'

// Only this suite (and others marked with only) are run
describe.only('suite', () => {
  it('test', () => {
    assert.equal(Math.sqrt(4), 3)
  })
})

describe('another suite', () => {
  it('skipped test', () => {
    // Test skipped, as tests are running in Only mode
    assert.equal(Math.sqrt(4), 3)
  })

  it.only('test', () => {
    // Only this test (and others marked with only) are run
    assert.equal(Math.sqrt(4), 2)
  })
})
```

## Unimplemented Suites and Tests

Use `.todo` to stub suites and tests that should be implemented

```ts
import { describe, it } from 'vitest'

// An entry will be shown in the report for this suite
describe.todo('unimplemented suite')

// An entry will be shown in the report for this test
describe('suite', () => {
  it.todo('unimplemented test')
})
```
````

## File: docs/guide/ide.md
````markdown
---
title: IDE Integrations | Guide
---

# IDE Integrations

## VS Code <Badge>Official</Badge> {#vs-code}

<p text-center>
<img src="https://raw.githubusercontent.com/vitest-dev/vscode/main/img/cover.png" w-60>
</p>

[GitHub](https://github.com/vitest-dev/vscode) | [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)

![](https://i.ibb.co/bJCbCf2/202203292020.gif)

## JetBrains IDE

WebStorm, PhpStorm, IntelliJ IDEA Ultimate, and other JetBrains IDEs come with built-in support for Vitest.

<p text-center>
<img src="https://raw.githubusercontent.com/kricact/WS-info/main/banners/vitest-jb.png" w-60>
</p>

[WebStorm Help](https://www.jetbrains.com/help/webstorm/vitest.html) | [IntelliJ IDEA Ultimate Help](https://www.jetbrains.com/help/idea/vitest.html) | [PhpStorm Help](https://www.jetbrains.com/help/phpstorm/vitest.html)

![Vitest WebStorm Demo](https://raw.githubusercontent.com/kricact/WS-info/main/gifs/vitest-run-all.gif)

## Wallaby.js <Badge>Paid (free for OSS)</Badge>

Created by [The Wallaby Team](https://wallabyjs.com)

[Wallaby.js](https://wallabyjs.com) runs your Vitest tests immediately as you type, highlighting results in your IDE right next to your code.

<p text-left>
<img src="https://wallabyjs.com/assets/img/vitest_cover.png" w-142 />
</p>

[VS Code](https://marketplace.visualstudio.com/items?itemName=WallabyJs.wallaby-vscode) | [JetBrains](https://plugins.jetbrains.com/plugin/15742-wallaby) |
[Visual Studio](https://marketplace.visualstudio.com/items?itemName=vs-publisher-999439.WallabyjsforVisualStudio2022) | [Sublime Text](https://packagecontrol.io/packages/Wallaby)

![Wallaby VS Code Demo](https://wallabyjs.com/assets/img/vitest_demo.gif)
````

## File: docs/guide/improving-performance.md
````markdown
# Improving Performance

## Test isolation

By default Vitest runs every test file in an isolated environment based on the [pool](/config/#pool):

- `threads` pool runs every test file in a separate [`Worker`](https://nodejs.org/api/worker_threads.html#class-worker)
- `forks` pool runs every test file in a separate [forked child process](https://nodejs.org/api/child_process.html#child_processforkmodulepath-args-options)
- `vmThreads` pool runs every test file in a separate [VM context](https://nodejs.org/api/vm.html#vmcreatecontextcontextobject-options), but it uses workers for parallelism

This greatly increases test times, which might not be desirable for projects that don't rely on side effects and properly cleanup their state (which is usually true for projects with `node` environment). In this case disabling isolation will improve the speed of your tests. To do that, you can provide `--no-isolate` flag to the CLI or set [`test.isolate`](/config/#isolate) property in the config to `false`.

::: code-group
```bash [CLI]
vitest --no-isolate
```
```ts [vitest.config.js]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    isolate: false,
    // you can also disable isolation only for specific pools
    poolOptions: {
      forks: {
        isolate: false,
      },
    },
  },
})
```
:::

:::tip
If you are using `vmThreads` pool, you cannot disable isolation. Use `threads` pool instead to improve your tests performance.
:::

For some projects, it might also be desirable to disable parallelism to improve startup time. To do that, provide `--no-file-parallelism` flag to the CLI or set [`test.fileParallelism`](/config/#fileparallelism) property in the config to `false`.

::: code-group
```bash [CLI]
vitest --no-file-parallelism
```
```ts [vitest.config.js]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    fileParallelism: false,
  },
})
```
:::

## Pool

By default Vitest runs tests in `pool: 'forks'`. While `'forks'` pool is better for compatibility issues ([hanging process](/guide/common-errors.html#failed-to-terminate-worker) and [segfaults](/guide/common-errors.html#segfaults-and-native-code-errors)), it may be slightly slower than `pool: 'threads'` in larger projects.

You can try to improve test run time by switching `pool` option in configuration:

::: code-group
```bash [CLI]
vitest --pool=threads
```
```ts [vitest.config.js]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    pool: 'threads',
  },
})
```
:::

## Sharding

Test sharding is a process of splitting your test suite into groups, or shards. This can be useful when you have a large test suite and multiple matchines that could run subsets of that suite simultaneously.

To split Vitest tests on multiple different runs, use [`--shard`](/guide/cli#shard) option with [`--reporter=blob`](/guide/reporters#blob-reporter) option:

```sh
vitest run --reporter=blob --shard=1/3 # 1st machine
vitest run --reporter=blob --shard=2/3 # 2nd machine
vitest run --reporter=blob --shard=3/3 # 3rd machine
```

> Vitest splits your _test files_, not your test cases, into shards. If you've got 1000 test files, the `--shard=1/4` option will run 250 test files, no matter how many test cases individual files have.

Collect the results stored in `.vitest-reports` directory from each machine and merge them with [`--merge-reports`](/guide/cli#merge-reports) option:

```sh
vitest run --merge-reports
```

::: details Github action example
This setup is also used at https://github.com/vitest-tests/test-sharding.

```yaml
# Inspired from https://playwright.dev/docs/test-sharding
name: Tests
on:
  push:
    branches:
      - main
jobs:
  tests:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        shardIndex: [1, 2, 3, 4]
        shardTotal: [4]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install pnpm
        uses: pnpm/action-setup@a7487c7e89a18df4991f7f222e4898a00d66ddda # v4.1.0

      - name: Install dependencies
        run: pnpm i

      - name: Run tests
        run: pnpm run test --reporter=blob --shard=${{ matrix.shardIndex }}/${{ matrix.shardTotal }}

      - name: Upload blob report to GitHub Actions Artifacts
        if: ${{ !cancelled() }}
        uses: actions/upload-artifact@v4
        with:
          name: blob-report-${{ matrix.shardIndex }}
          path: .vitest-reports/*
          include-hidden-files: true
          retention-days: 1

  merge-reports:
    if: ${{ !cancelled() }}
    needs: [tests]

    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install pnpm
        uses: pnpm/action-setup@a7487c7e89a18df4991f7f222e4898a00d66ddda # v4.1.0

      - name: Install dependencies
        run: pnpm i

      - name: Download blob reports from GitHub Actions Artifacts
        uses: actions/download-artifact@v4
        with:
          path: .vitest-reports
          pattern: blob-report-*
          merge-multiple: true

      - name: Merge reports
        run: npx vitest --merge-reports
```

:::

:::tip
Test sharding can also become useful on high CPU-count machines.

Vitest will run only a single Vite server in its main thread. Rest of the threads are used to run test files.
In a high CPU-count machine the main thread can become a bottleneck as it cannot handle all the requests coming from the threads. For example in 32 CPU machine the main thread is responsible to handle load coming from 31 test threads.

To reduce the load from main thread's Vite server you can use test sharding. The load can be balanced on multiple Vite server.

```sh
# Example for splitting tests on 32 CPU to 4 shards.
# As each process needs 1 main thread, there's 7 threads for test runners (1+7)*4 = 32
# Use VITEST_MAX_THREADS or VITEST_MAX_FORKS depending on the pool:
VITEST_MAX_THREADS=7 vitest run --reporter=blob --shard=1/4 & \
VITEST_MAX_THREADS=7 vitest run --reporter=blob --shard=2/4 & \
VITEST_MAX_THREADS=7 vitest run --reporter=blob --shard=3/4 & \
VITEST_MAX_THREADS=7 vitest run --reporter=blob --shard=4/4 & \
wait # https://man7.org/linux/man-pages/man2/waitpid.2.html

vitest run --merge-reports
```

:::
````

## File: docs/guide/in-source.md
````markdown
---
title: In-Source Testing | Guide
---

# In-Source Testing

Vitest provides a way to run tests within your source code along side the implementation, similar to [Rust's module tests](https://doc.rust-lang.org/book/ch11-03-test-organization.html#the-tests-module-and-cfgtest).

This makes the tests share the same closure as the implementations and able to test against private states without exporting. Meanwhile, it also brings a closer feedback loop for development.

::: warning
This guide explains how to write tests inside your source code. If you need to write tests in separate test files, follow the ["Writing Tests" guide](/guide/#writing-tests).
:::

## Setup

To get started, put a `if (import.meta.vitest)` block at the end of your source file and write some tests inside it. For example:

```ts [src/index.ts]
// the implementation
export function add(...args: number[]) {
  return args.reduce((a, b) => a + b, 0)
}

// in-source test suites
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('add', () => {
    expect(add()).toBe(0)
    expect(add(1)).toBe(1)
    expect(add(1, 2, 3)).toBe(6)
  })
}
```

Update the `includeSource` config for Vitest to grab the files under `src/`:

```ts [vitest.config.ts]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    includeSource: ['src/**/*.{js,ts}'], // [!code ++]
  },
})
```

Then you can start to test!

```bash
$ npx vitest
```

## Production Build

For the production build, you will need to set the `define` options in your config file, letting the bundler do the dead code elimination. For example, in Vite

```ts [vite.config.ts]
/// <reference types="vitest/config" />

import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    includeSource: ['src/**/*.{js,ts}'],
  },
  define: { // [!code ++]
    'import.meta.vitest': 'undefined', // [!code ++]
  }, // [!code ++]
})
```

### Other Bundlers

::: details unbuild
```ts [build.config.ts]
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  replace: { // [!code ++]
    'import.meta.vitest': 'undefined', // [!code ++]
  }, // [!code ++]
  // other options
})
```

Learn more: [unbuild](https://github.com/unjs/unbuild)
:::

::: details Rollup
```ts [rollup.config.js]
import replace from '@rollup/plugin-replace' // [!code ++]

export default {
  plugins: [
    replace({ // [!code ++]
      'import.meta.vitest': 'undefined', // [!code ++]
    }) // [!code ++]
  ],
  // other options
}
```

Learn more: [Rollup](https://rollupjs.org/)
:::

## TypeScript

To get TypeScript support for `import.meta.vitest`, add `vitest/importMeta` to your `tsconfig.json`:

```json [tsconfig.json]
{
  "compilerOptions": {
    "types": [
      "vitest/importMeta" // [!code ++]
    ]
  }
}
```

Reference to [`examples/in-source-test`](https://github.com/vitest-dev/vitest/tree/main/examples/in-source-test) for the full example.

## Notes

This feature could be useful for:

- Unit testing for small-scoped functions or utilities
- Prototyping
- Inline Assertion

It's recommended to **use separate test files instead** for more complex tests like components or E2E testing.
````

## File: docs/guide/index.md
````markdown
---
title: Getting Started | Guide
---

# Getting Started

## Overview

Vitest (pronounced as _"veetest"_) is a next generation testing framework
powered by
Vite.

You can learn more about the rationale behind the project in the [Why Vitest](/guide/why) section.

## Trying Vitest Online

You can try Vitest online on [StackBlitz](https://vitest.new). It runs Vitest directly in the browser, and it is almost identical to the local setup but doesn't require installing anything on your machine.

## Adding Vitest to Your Project

<CourseLink href="https://vueschool.io/lessons/how-to-install-vitest?friend=vueuse">Learn how to install by Video</CourseLink>

::: code-group
```bash [npm]
npm install -D vitest
```
```bash [yarn]
yarn add -D vitest
```
```bash [pnpm]
pnpm add -D vitest
```
```bash [bun]
bun add -D vitest
```
:::

:::tip
Vitest requires Vite >=v5.0.0 and Node >=v18.0.0
:::

It is recommended that you install a copy of `vitest` in your `package.json`, using one of the methods listed above. However, if you would prefer to run `vitest` directly, you can use `npx vitest` (the `npx` tool comes with npm and Node.js).

The `npx` tool will execute the specified command. By default, `npx` will first check if the command exists in the local project's binaries. If it is not found there, `npx` will look in the system's `$PATH` and execute it if found. If the command is not found in either location, `npx` will install it in a temporary location prior to execution.

## Writing Tests

As an example, we will write a simple test that verifies the output of a function that adds two numbers.

``` js [sum.js]
export function sum(a, b) {
  return a + b
}
```

``` js [sum.test.js]
import { expect, test } from 'vitest'
import { sum } from './sum.js'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
```

::: tip
By default, tests must contain `.test.` or `.spec.` in their file name.
:::

Next, in order to execute the test, add the following section to your `package.json`:

```json [package.json]
{
  "scripts": {
    "test": "vitest"
  }
}
```

Finally, run `npm run test`, `yarn test` or `pnpm test`, depending on your package manager, and Vitest will print this message:

```txt
✓ sum.test.js (1)
  ✓ adds 1 + 2 to equal 3

Test Files  1 passed (1)
     Tests  1 passed (1)
  Start at  02:15:44
  Duration  311ms
```

::: warning
If you are using Bun as your package manager, make sure to use `bun run test` command instead of `bun test`, otherwise Bun will run its own test runner.
:::

Learn more about the usage of Vitest, see the [API](https://vitest.dev/api/) section.

## Configuring Vitest

One of the main advantages of Vitest is its unified configuration with Vite. If present, `vitest` will read your root `vite.config.ts` to match with the plugins and setup as your Vite app. For example, your Vite [resolve.alias](https://vitejs.dev/config/shared-options.html#resolve-alias) and [plugins](https://vitejs.dev/guide/using-plugins.html) configuration will work out-of-the-box. If you want a different configuration during testing, you can:

- Create `vitest.config.ts`, which will have the higher priority
- Pass `--config` option to CLI, e.g. `vitest --config ./path/to/vitest.config.ts`
- Use `process.env.VITEST` or `mode` property on `defineConfig` (will be set to `test` if not overridden) to conditionally apply different configuration in `vite.config.ts`

Vitest supports the same extensions for your configuration file as Vite does: `.js`, `.mjs`, `.cjs`, `.ts`, `.cts`, `.mts`. Vitest does not support `.json` extension.

If you are not using Vite as your build tool, you can configure Vitest using the `test` property in your config file:

```ts [vitest.config.ts]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // ...
  },
})
```

::: tip
Even if you do not use Vite yourself, Vitest relies heavily on it for its transformation pipeline. For that reason, you can also configure any property described in [Vite documentation](https://vitejs.dev/config/).
:::

If you are already using Vite, add `test` property in your Vite config. You'll also need to add a reference to Vitest types using a [triple slash directive](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-) at the top of your config file.

```ts [vite.config.ts]
/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    // ...
  },
})
```

The `<reference types="vitest" />` will stop working in the next major update, but you can start migrating to `vitest/config` in Vitest 2.1:

```ts [vite.config.ts]
/// <reference types="vitest/config" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    // ... Specify options here.
  },
})
```

See the list of config options in the [Config Reference](../config/)

::: warning
If you decide to have two separate config files for Vite and Vitest, make sure to define the same Vite options in your Vitest config file since it will override your Vite file, not extend it. You can also use `mergeConfig` method from `vite` or `vitest/config` entries to merge Vite config with Vitest config:

:::code-group
```ts [vitest.config.mjs]
import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.mjs'

export default mergeConfig(viteConfig, defineConfig({
  test: {
    // ...
  },
}))
```

```ts [vite.config.mjs]
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [Vue()],
})
```

However, we recommend using the same file for both Vite and Vitest, instead of creating two separate files.
:::

## Projects Support

Run different project configurations inside the same project with [Test Projects](/guide/projects). You can define a list of files and folders that define your projects in `vitest.config` file.

```ts [vitest.config.ts]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      // you can use a list of glob patterns to define your projects
      // Vitest expects a list of config files
      // or directories where there is a config file
      'packages/*',
      'tests/*/vitest.config.{e2e,unit}.ts',
      // you can even run the same tests,
      // but with different configs in the same "vitest" process
      {
        test: {
          name: 'happy-dom',
          root: './shared_tests',
          environment: 'happy-dom',
          setupFiles: ['./setup.happy-dom.ts'],
        },
      },
      {
        test: {
          name: 'node',
          root: './shared_tests',
          environment: 'node',
          setupFiles: ['./setup.node.ts'],
        },
      },
    ],
  },
})
```

## Command Line Interface

In a project where Vitest is installed, you can use the `vitest` binary in your npm scripts, or run it directly with `npx vitest`. Here are the default npm scripts in a scaffolded Vitest project:

<!-- prettier-ignore -->
```json [package.json]
{
  "scripts": {
    "test": "vitest",
    "coverage": "vitest run --coverage"
  }
}
```

To run tests once without watching for file changes, use `vitest run`.
You can specify additional CLI options like `--port` or `--https`. For a full list of CLI options, run `npx vitest --help` in your project.

Learn more about the [Command Line Interface](/guide/cli)

## Automatic Dependency Installation

Vitest will prompt you to install certain dependencies if they are not already installed. You can disable this behavior by setting the `VITEST_SKIP_INSTALL_CHECKS=1` environment variable.

## IDE Integrations

We also provided an official extension for Visual Studio Code to enhance your testing experience with Vitest.

[Install from VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)

Learn more about [IDE Integrations](/guide/ide)

## Examples

| Example | Source | Playground |
|---|---|---|
| `basic` | [GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/basic) | [Play Online](https://stackblitz.com/fork/github/vitest-dev/vitest/tree/main/examples/basic?initialPath=__vitest__/) |
| `fastify` | [GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/fastify) | [Play Online](https://stackblitz.com/fork/github/vitest-dev/vitest/tree/main/examples/fastify?initialPath=__vitest__/) |
| `in-source-test` | [GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/in-source-test) | [Play Online](https://stackblitz.com/fork/github/vitest-dev/vitest/tree/main/examples/in-source-test?initialPath=__vitest__/) |
| `lit` | [GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/lit) | [Play Online](https://stackblitz.com/fork/github/vitest-dev/vitest/tree/main/examples/lit?initialPath=__vitest__/) |
| `vue` | [GitHub](https://github.com/vitest-tests/browser-examples/tree/main/examples/vue) | [Play Online](https://stackblitz.com/fork/github/vitest-tests/browser-examples/tree/main/examples/vue?initialPath=__vitest__/) |
| `marko` | [GitHub](https://github.com/marko-js/examples/tree/master/examples/library-ts) | [Play Online](https://stackblitz.com/fork/github/marko-js/examples/tree/master/examples/library-ts/) |
| `preact` | [GitHub](https://github.com/vitest-tests/browser-examples/tree/main/examples/preact) | [Play Online](https://stackblitz.com/fork/github/vitest-tests/browser-examples/tree/main/examples/preact?initialPath=__vitest__/) |
| `react` | [GitHub](https://github.com/vitest-tests/browser-examples/tree/main/examples/react) | [Play Online](https://stackblitz.com/fork/github/vitest-tests/browser-examples/tree/main/examples/react?initialPath=__vitest__/) |
| `solid` | [GitHub](https://github.com/vitest-tests/browser-examples/tree/main/examples/solid) | [Play Online](https://stackblitz.com/fork/github/vitest-tests/browser-examples/tree/main/examples/solid?initialPath=__vitest__/) |
| `svelte` | [GitHub](https://github.com/vitest-tests/browser-examples/tree/main/examples/svelte) | [Play Online](https://stackblitz.com/fork/github/vitest-tests/browser-examples/tree/main/examples/svelte?initialPath=__vitest__/) |
| `sveltekit` | [GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/sveltekit) | [Play Online](https://stackblitz.com/fork/github/vitest-dev/vitest/tree/main/examples/sveltekit?initialPath=__vitest__/) |
| `profiling` | [GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/profiling) | Not Available |
| `typecheck` | [GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/typecheck) | [Play Online](https://stackblitz.com/fork/github/vitest-dev/vitest/tree/main/examples/typecheck?initialPath=__vitest__/) |
| `projects` | [GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/projects) | [Play Online](https://stackblitz.com/fork/github/vitest-dev/vitest/tree/main/examples/projects?initialPath=__vitest__/) |

## Projects using Vitest

- [unocss](https://github.com/unocss/unocss)
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- [vue](https://github.com/vuejs/core)
- [vite](https://github.com/vitejs/vite)
- [vitesse](https://github.com/antfu/vitesse)
- [vitesse-lite](https://github.com/antfu/vitesse-lite)
- [fluent-vue](https://github.com/demivan/fluent-vue)
- [vueuse](https://github.com/vueuse/vueuse)
- [milkdown](https://github.com/Saul-Mirone/milkdown)
- [gridjs-svelte](https://github.com/iamyuu/gridjs-svelte)
- [spring-easing](https://github.com/okikio/spring-easing)
- [bytemd](https://github.com/bytedance/bytemd)
- [faker](https://github.com/faker-js/faker)
- [million](https://github.com/aidenybai/million)
- [Vitamin](https://github.com/wtchnm/Vitamin)
- [neodrag](https://github.com/PuruVJ/neodrag)
- [svelte-multiselect](https://github.com/janosh/svelte-multiselect)
- [iconify](https://github.com/iconify/iconify)
- [tdesign-vue-next](https://github.com/Tencent/tdesign-vue-next)
- [cz-git](https://github.com/Zhengqbbb/cz-git)

<!--
For contributors:
We no longer accept new entries to this list a this moment.
Thanks for choosing Vitest!
-->

## Using Unreleased Commits

Each commit on main branch and a PR with a `cr-tracked` label are published to [pkg.pr.new](https://github.com/stackblitz-labs/pkg.pr.new). You can install it by `npm i https://pkg.pr.new/vitest@{commit}`.

If you want to test your own modification locally, you can build and link it yourself ([pnpm](https://pnpm.io/) is required):

```bash
git clone https://github.com/vitest-dev/vitest.git
cd vitest
pnpm install
cd packages/vitest
pnpm run build
pnpm link --global # you can use your preferred package manager for this step
```

Then go to the project where you are using Vitest and run `pnpm link --global vitest` (or the package manager that you used to link `vitest` globally).

## Community

If you have questions or need help, reach out to the community at [Discord](https://chat.vitest.dev) and [GitHub Discussions](https://github.com/vitest-dev/vitest/discussions).
````

## File: docs/guide/migration.md
````markdown
---
title: Migration Guide | Guide
outline: deep
---

# Migration Guide

## Migrating to Vitest 3.0 {#vitest-3}

### Test Options as a Third Argument

Vitest 3.0 prints a warning if you pass down an object as a third argument to `test` or `describe` functions:

```ts
test('validation works', () => {
  // ...
}, { retry: 3 }) // [!code --]

test('validation works', { retry: 3 }, () => { // [!code ++]
  // ...
})
```

The next major version will throw an error if the third argument is an object. Note that the timeout number is not deprecated:

```ts
test('validation works', () => {
  // ...
}, 1000) // Ok ✅
```

### `browser.name` and `browser.providerOptions` are Deprecated

Both [`browser.name`](/guide/browser/config#browser-name) and [`browser.providerOptions`](/guide/browser/config#browser-provideroptions) will be removed in Vitest 4. Instead of them, use the new [`browser.instances`](/guide/browser/config#browser-instances) option:

```ts
export default defineConfig({
  test: {
    browser: {
      name: 'chromium', // [!code --]
      providerOptions: { // [!code --]
        launch: { devtools: true }, // [!code --]
      }, // [!code --]
      instances: [ // [!code ++]
        { // [!code ++]
          browser: 'chromium', // [!code ++]
          launch: { devtools: true }, // [!code ++]
        }, // [!code ++]
      ], // [!code ++]
    },
  },
})
```

With the new `browser.instances` field you can also specify multiple browser configurations.

### `spy.mockReset` Now Restores the Original Implementation

There was no good way to reset the spy to the original implementation without reaplying the spy. Now, `spy.mockReset` will reset the implementation function to the original one instead of a fake noop.

```ts
const foo = {
  bar: () => 'Hello, world!'
}

vi.spyOn(foo, 'bar').mockImplementation(() => 'Hello, mock!')

foo.bar() // 'Hello, mock!'

foo.bar.mockReset()

foo.bar() // undefined [!code --]
foo.bar() // 'Hello, world!' [!code ++]
```

### `vi.spyOn` Reuses Mock if Method is Already Mocked

Previously, Vitest would always assign a new spy when spying on an object. This caused errors with `mockRestore` because it would restore the spy to the previous spy instead of the original function:

```ts
vi.spyOn(fooService, 'foo').mockImplementation(() => 'bar')
vi.spyOn(fooService, 'foo').mockImplementation(() => 'bar')
vi.restoreAllMocks()
vi.isMockFunction(fooService.foo) // true [!code --]
vi.isMockFunction(fooService.foo) // false [!code ++]
```

### Fake Timers Defaults

Vitest no longer provides default `fakeTimers.toFake` options. Now, Vitest will mock any timer-related API if it is available (except `nextTick`). Namely, `performance.now()` is now mocked when `vi.useFakeTimers` is called.

```ts
vi.useFakeTimers()

performance.now() // original [!code --]
performance.now() // fake [!code ++]
```

You can revert to the previous behaviour by specifying timers when calling `vi.useFakeTimers` or globally in the config:

```ts
export default defineConfig({
  test: {
    fakeTimers: {
      toFake: [ // [!code ++]
        'setTimeout', // [!code ++]
        'clearTimeout', // [!code ++]
        'setInterval', // [!code ++]
        'clearInterval', // [!code ++]
        'setImmediate', // [!code ++]
        'clearImmediate', // [!code ++]
        'Date', // [!code ++]
      ] // [!code ++]
    },
  },
})
```

### More Strict Error Equality

Vitest now checks more properties when comparing errors via `toEqual` or `toThrowError`. Vitest now compares `name`, `message`, `cause` and `AggregateError.errors`. For `Error.cause`, the comparison is done asymmetrically:

```ts
expect(new Error('hi', { cause: 'x' })).toEqual(new Error('hi')) // ✅
expect(new Error('hi')).toEqual(new Error('hi', { cause: 'x' })) // ❌
```

In addition to more properties check, Vitest now compares error prototypes. For example, if `TypeError` was thrown, the equality check should reference `TypeError`, not `Error`:

```ts
expect(() => {
  throw new TypeError('type error')
})
  .toThrowError(new Error('type error')) // [!code --]
  .toThrowError(new TypeError('type error')) // [!code ++]
```

See PR for more details: [#5876](https://github.com/vitest-dev/vitest/pull/5876).

### `module` condition export is not resolved by default on Vite 6

Vite 6 allows more flexible [`resolve.conditions`](https://vite.dev/config/shared-options#resolve-conditions) options and Vitest configures it to exclude `module` conditional export by default.
See also [Vite 6 migration guide](https://v6.vite.dev/guide/migration.html#default-value-for-resolve-conditions) for the detail of Vite side changes.

### `Custom` Type is Deprecated <Badge type="danger">API</Badge> {#custom-type-is-deprecated}

The `Custom` type is now an alias for the `Test` type. Note that Vitest updated the public types in 2.1 and changed exported names to `RunnerCustomCase` and `RunnerTestCase`:

```ts
import {
  RunnerCustomCase, // [!code --]
  RunnerTestCase, // [!code ++]
} from 'vitest'
```

If you are using `getCurrentSuite().custom()`, the `type` of the returned task is now is equal to `'test'`. The `Custom` type will be removed in Vitest 4.

### The `WorkspaceSpec` Type is No Longer Used <Badge type="danger">API</Badge> {#the-workspacespec-type-is-no-longer-used}

In the public API this type was used in custom [sequencers](/config/#sequence-sequencer) before. Please, migrate to [`TestSpecification`](/advanced/api/test-specification) instead.

### `onTestFinished` and `onTestFailed` Now Receive a Context

The [`onTestFinished`](/api/#ontestfinished) and [`onTestFailed`](/api/#ontestfailed) hooks previously received a test result as the first argument. Now, they receive a test context, like `beforeEach` and `afterEach`.

### Changes to the Snapshot API <Badge type="danger">API</Badge> {#changes-to-the-snapshot-api}

The public Snapshot API in `@vitest/snapshot` was changed to support multiple states within a single run. See PR for more details: [#6817](https://github.com/vitest-dev/vitest/pull/6817)

Note that this changes only affect developers using the Snapshot API directly. There were no changes to `.toMatchSnapshot` API.

### Changes to `resolveConfig` Type Signature <Badge type="danger">API</Badge> {#changes-to-resolveconfig-type-signature}

The [`resolveConfig`](/advanced/api/#resolveconfig) is now more useful. Instead of accepting already resolved Vite config, it now accepts a user config and returns resolved config.

This function is not used internally and exposed exclusively as a public API.

### Cleaned up `vitest/reporters` types <Badge type="danger">API</Badge> {#cleaned-up-vitest-reporters-types}

The `vitest/reporters` entrypoint now only exports reporters implementations and options types. If you need access to `TestCase`/`TestSuite` and other task related types, import them additionally from `vitest/node`.

### Coverage ignores test files even when `coverage.excludes` is overwritten.

It is no longer possible to include test files in coverage report by overwriting `coverage.excludes`. Test files are now always excluded.

## Migrating to Vitest 2.0 {#vitest-2}

### Default Pool is `forks`

Vitest 2.0 changes the default configuration for `pool` to `'forks'` for better stability. You can read the full motivation in [PR](https://github.com/vitest-dev/vitest/pull/5047).

If you've used `poolOptions` without specifying a `pool`, you might need to update the configuration:

```ts
export default defineConfig({
  test: {
    poolOptions: {
      threads: { // [!code --]
        singleThread: true, // [!code --]
      }, // [!code --]
      forks: { // [!code ++]
        singleFork: true, // [!code ++]
      }, // [!code ++]
    }
  }
})
```

### Hooks are Running in a Stack

Before Vitest 2.0, all hooks ran in parallel. In 2.0, all hooks run serially. Additionally, `afterAll`/`afterEach` hooks run in reverse order.

To revert to the parallel execution of hooks, change [`sequence.hooks`](/config/#sequence-hooks) to `'parallel'`:

```ts
export default defineConfig({
  test: {
    sequence: { // [!code ++]
      hooks: 'parallel', // [!code ++]
    }, // [!code ++]
  },
})
```

### `suite.concurrent` Runs All Tests Concurrently

Previously, specifying `concurrent` on a suite would group concurrent tests by suites, running them sequentially. Now, following Jest's behavior, all tests run concurrently (subject to [`maxConcurrency`](/config/#maxconcurrency) limits).

### V8 Coverage's `coverage.ignoreEmptyLines` is Enabled by Default

The default value of `coverage.ignoreEmptyLines` is now true. This significant change may affect code coverage reports, requiring adjustments to coverage thresholds for some projects. This adjustment only affects the default setting when `coverage.provider` is `'v8'`.

### Removal of the `watchExclude` Option

Vitest uses Vite's watcher. Exclude files or directories by adding them to `server.watch.ignored`:

```ts
export default defineConfig({
  server: { // [!code ++]
    watch: { // [!code ++]
      ignored: ['!node_modules/examplejs'] // [!code ++]
    } // [!code ++]
  } // [!code ++]
})
```

### `--segfault-retry` Removed

With the changes to default pool, this option is no longer needed. If you experience segfault errors, try switching to `'forks'` pool. If the problem persists, please open a new issue with a reproduction.

### Empty Task In Suite Tasks Removed

This is the change to the advanced [task API](/advanced/runner#your-task-function). Previously, traversing `.suite` would eventually lead to the empty internal suite that was used instead of a file task.

This makes `.suite` optional; if the task is defined at the top level, it will not have a suite. You can fallback to the `.file` property that is now present on all tasks (including the file task itself, so be careful not to fall into the endless recursion).

This change also removes the file from `expect.getState().currentTestName` and makes `expect.getState().testPath` required.

### `task.meta` is Added to the JSON Reporter

JSON reporter now prints `task.meta` for every assertion result.

### Simplified Generic Types of Mock Functions (e.g. `vi.fn<T>`, `Mock<T>`)

Previously `vi.fn<TArgs, TReturn>` accepted two generic types separately for arguments and return value. This is changed to directly accept a function type `vi.fn<T>` to simplify the usage.

```ts
import { vi } from 'vitest'
import type { Mock } from 'vitest'

const add = (x: number, y: number): number => x + y

// using vi.fn<T>
const mockAdd = vi.fn<Parameters<typeof add>, ReturnType<typeof add>>() // [!code --]
const mockAdd = vi.fn<typeof add>() // [!code ++]

// using Mock<T>
const mockAdd: Mock<Parameters<typeof add>, ReturnType<typeof add>> = vi.fn() // [!code --]
const mockAdd: Mock<typeof add> = vi.fn() // [!code ++]
```

### Accessing Resolved `mock.results`

Previously Vitest resolved `mock.results` values if the function returned a Promise. Now there is a separate [`mock.settledResults`](/api/mock#mock-settledresults) property that populates only when the returned Promise is resolved or rejected.

```ts
const fn = vi.fn().mockResolvedValueOnce('result')
await fn()

const result = fn.mock.results[0] // 'result' [!code --]
const result = fn.mock.results[0] // 'Promise<result>' [!code ++]

const settledResult = fn.mock.settledResults[0] // 'result'
```

With this change, we also introduce new [`toHaveResolved*`](/api/expect#tohaveresolved) matchers similar to `toHaveReturned` to make migration easier if you used `toHaveReturned` before:

```ts
const fn = vi.fn().mockResolvedValueOnce('result')
await fn()

expect(fn).toHaveReturned('result') // [!code --]
expect(fn).toHaveResolved('result') // [!code ++]
```

### Browser Mode

Vitest Browser Mode had a lot of changes during the beta cycle. You can read about our philosophy on the Browser Mode in the [GitHub discussion page](https://github.com/vitest-dev/vitest/discussions/5828).

Most of the changes were additive, but there were some small breaking changes:

- `none` provider was renamed to `preview` [#5842](https://github.com/vitest-dev/vitest/pull/5826)
- `preview` provider is now a default [#5842](https://github.com/vitest-dev/vitest/pull/5826)
- `indexScripts` is renamed to `orchestratorScripts` [#5842](https://github.com/vitest-dev/vitest/pull/5842)

### Deprecated Options Removed

Some deprecated options were removed:

- `vitest typecheck` command - use `vitest --typecheck` instead
- `VITEST_JUNIT_CLASSNAME` and `VITEST_JUNIT_SUITE_NAME` env variables (use reporter options instead)
- check for `c8` coverage (use coverage-v8 instead)
- export of `SnapshotEnvironment` from `vitest` - import it from `vitest/snapshot` instead
- `SpyInstance` is removed in favor of `MockInstance`

## Migrating to Vitest 1.0

### Minimum Requirements

Vitest 1.0 requires Vite 5.0 and Node.js 18 or higher.

All `@vitest/*` sub packages require Vitest version 1.0.

### Snapshots Update [#3961](https://github.com/vitest-dev/vitest/pull/3961)

Quotes in snapshots are no longer escaped, and all snapshots use backtick quotes (`) even if the string is just a single line.

1. Quotes are no longer escaped:

```diff
expect({ foo: 'bar' }).toMatchInlineSnapshot(`
  Object {
-    \\"foo\\": \\"bar\\",
+    "foo": "bar",
  }
`)
```

2. One-line snapshots now use "`" quotes instead of ':

```diff
- expect('some string').toMatchInlineSnapshot('"some string"')
+ expect('some string').toMatchInlineSnapshot(`"some string"`)
```

There were also [changes](https://github.com/vitest-dev/vitest/pull/4076) to `@vitest/snapshot` package. If you are not using it directly, you don't need to change anything.

- You no longer need to extend `SnapshotClient` just to override `equalityCheck` method: just pass it down as `isEqual` when initiating an instance
- `client.setTest` was renamed to `client.startCurrentRun`
- `client.resetCurrent` was renamed to `client.finishCurrentRun`

### Pools are Standardized [#4172](https://github.com/vitest-dev/vitest/pull/4172)

We removed a lot of configuration options to make it easier to configure the runner to your needs. Please, have a look at migration examples if you rely on `--threads` or other related flags.

- `--threads` is now `--pool=threads`
- `--no-threads` is now `--pool=forks`
- `--single-thread` is now `--poolOptions.threads.singleThread`
- `--experimental-vm-threads` is now `--pool=vmThreads`
- `--experimental-vm-worker-memory-limit` is now `--poolOptions.vmThreads.memoryLimit`
- `--isolate` is now `--poolOptions.<pool-name>.isolate` and `browser.isolate`
- `test.maxThreads` is now `test.poolOptions.<pool-name>.maxThreads`
- `test.minThreads` is now `test.poolOptions.<pool-name>.minThreads`
- `test.useAtomics` is now `test.poolOptions.<pool-name>.useAtomics`
- `test.poolMatchGlobs.child_process` is now `test.poolMatchGlobs.forks`
- `test.poolMatchGlobs.experimentalVmThreads` is now `test.poolMatchGlobs.vmThreads`

```diff
{
  scripts: {
-    "test": "vitest --no-threads"
     // For identical behaviour:
+    "test": "vitest --pool forks --poolOptions.forks.singleFork"
     // Or multi parallel forks:
+    "test": "vitest --pool forks"

  }
}
```

```diff
{
  scripts: {
-    "test": "vitest --experimental-vm-threads"
+    "test": "vitest --pool vmThreads"
  }
}
```

```diff
{
  scripts: {
-    "test": "vitest --isolate false"
+    "test": "vitest --poolOptions.threads.isolate false"
  }
}
```

```diff
{
  scripts: {
-    "test": "vitest --no-threads --isolate false"
+    "test": "vitest --pool forks --poolOptions.forks.isolate false"
  }
}
```

### Changes to Coverage [#4265](https://github.com/vitest-dev/vitest/pull/4265), [#4442](https://github.com/vitest-dev/vitest/pull/4442)

Option `coverage.all` is now enabled by default. This means that all project files matching `coverage.include` pattern will be processed even if they are not executed.

Coverage thresholds API's shape was changed, and it now supports specifying thresholds for specific files using glob patterns:

```diff
export default defineConfig({
  test: {
    coverage: {
-      perFile: true,
-      thresholdAutoUpdate: true,
-      100: true,
-      lines: 100,
-      functions: 100,
-      branches: 100,
-      statements: 100,
+      thresholds: {
+        perFile: true,
+        autoUpdate: true,
+        100: true,
+        lines: 100,
+        functions: 100,
+        branches: 100,
+        statements: 100,
+      }
    }
  }
})
```

### Mock Types [#4400](https://github.com/vitest-dev/vitest/pull/4400)

A few types were removed in favor of Jest-style "Mock" naming.

```diff
- import { EnhancedSpy, SpyInstance } from 'vitest'
+ import { MockInstance } from 'vitest'
```

::: warning
`SpyInstance` is deprecated in favor of `MockInstance` and will be removed in the next major release.
:::

### Timer mocks [#3925](https://github.com/vitest-dev/vitest/pull/3925)

`vi.useFakeTimers()` no longer automatically mocks [`process.nextTick`](https://nodejs.org/api/process.html#processnexttickcallback-args).
It is still possible to mock `process.nextTick` by explicitly specifying it by using `vi.useFakeTimers({ toFake: ['nextTick'] })`.

However, mocking `process.nextTick` is not possible when using `--pool=forks`. Use a different `--pool` option if you need `process.nextTick` mocking.

## Migrating from Jest {#jest}

Vitest has been designed with a Jest compatible API, in order to make the migration from Jest as simple as possible. Despite those efforts, you may still run into the following differences:

### Globals as a Default

Jest has their [globals API](https://jestjs.io/docs/api) enabled by default. Vitest does not. You can either enable globals via [the `globals` configuration setting](/config/#globals) or update your code to use imports from the `vitest` module instead.

If you decide to keep globals disabled, be aware that common libraries like [`testing-library`](https://testing-library.com/) will not run auto DOM [cleanup](https://testing-library.com/docs/svelte-testing-library/api/#cleanup).

### `spy.mockReset`

Jest's [`mockReset`](https://jestjs.io/docs/mock-function-api#mockfnmockreset) replaces the mock implementation with an
empty function that returns `undefined`.

Vitest's [`mockReset`](/api/mock#mockreset) resets the mock implementation to its original.
That is, resetting a mock created by `vi.fn(impl)` will reset the mock implementation to `impl`.

### Module Mocks

When mocking a module in Jest, the factory argument's return value is the default export. In Vitest, the factory argument has to return an object with each export explicitly defined. For example, the following `jest.mock` would have to be updated as follows:

```ts
jest.mock('./some-path', () => 'hello') // [!code --]
vi.mock('./some-path', () => ({ // [!code ++]
  default: 'hello', // [!code ++]
})) // [!code ++]
```

For more details please refer to the [`vi.mock` api section](/api/vi#vi-mock).

### Auto-Mocking Behaviour

Unlike Jest, mocked modules in `<root>/__mocks__` are not loaded unless `vi.mock()` is called. If you need them to be mocked in every test, like in Jest, you can mock them inside [`setupFiles`](/config/#setupfiles).

### Importing the Original of a Mocked Package

If you are only partially mocking a package, you might have previously used Jest's function `requireActual`. In Vitest, you should replace these calls with `vi.importActual`.

```ts
const { cloneDeep } = jest.requireActual('lodash/cloneDeep') // [!code --]
const { cloneDeep } = await vi.importActual('lodash/cloneDeep') // [!code ++]
```

### Extends mocking to external libraries

Where Jest does it by default, when mocking a module and wanting this mocking to be extended to other external libraries that use the same module, you should explicitly tell which 3rd-party library you want to be mocked, so the external library would be part of your source code, by using [server.deps.inline](https://vitest.dev/config/#server-deps-inline).

```
server.deps.inline: ["lib-name"]
```

### expect.getState().currentTestName

Vitest's `test` names are joined with a `>` symbol to make it easier to distinguish tests from suites, while Jest uses an empty space (` `).

```diff
- `${describeTitle} ${testTitle}`
+ `${describeTitle} > ${testTitle}`
```

### Envs

Just like Jest, Vitest sets `NODE_ENV` to `test`, if it wasn't set before. Vitest also has a counterpart for `JEST_WORKER_ID` called `VITEST_POOL_ID` (always less than or equal to `maxThreads`), so if you rely on it, don't forget to rename it. Vitest also exposes `VITEST_WORKER_ID` which is a unique ID of a running worker - this number is not affected by `maxThreads`, and will increase with each created worker.

### Replace property

If you want to modify the object, you will use [replaceProperty API](https://jestjs.io/docs/jest-object#jestreplacepropertyobject-propertykey-value) in Jest, you can use [`vi.stubEnv`](/api/#vi-stubenv) or [`vi.spyOn`](/api/vi#vi-spyon) to do the same also in Vitest.

### Done Callback

From Vitest v0.10.0, the callback style of declaring tests is deprecated. You can rewrite them to use `async`/`await` functions, or use Promise to mimic the callback style.

<!--@include: ./examples/promise-done.md-->

### Hooks

`beforeAll`/`beforeEach` hooks may return [teardown function](/api/#setup-and-teardown) in Vitest. Because of that you may need to rewrite your hooks declarations, if they return something other than `undefined` or `null`:

```ts
beforeEach(() => setActivePinia(createTestingPinia())) // [!code --]
beforeEach(() => { setActivePinia(createTestingPinia()) }) // [!code ++]
```

In Jest hooks are called sequentially (one after another). By default, Vitest runs hooks in parallel. To use Jest's behavior, update [`sequence.hooks`](/config/#sequence-hooks) option:

```ts
export default defineConfig({
  test: {
    sequence: { // [!code ++]
      hooks: 'list', // [!code ++]
    } // [!code ++]
  }
})
```

### Types

Vitest doesn't have an equivalent to `jest` namespace, so you will need to import types directly from `vitest`:

```ts
let fn: jest.Mock<(name: string) => number> // [!code --]
import type { Mock } from 'vitest' // [!code ++]
let fn: Mock<(name: string) => number> // [!code ++]
```

### Timers

Vitest doesn't support Jest's legacy timers.

### Timeout

If you used `jest.setTimeout`, you would need to migrate to `vi.setConfig`:

```ts
jest.setTimeout(5_000) // [!code --]
vi.setConfig({ testTimeout: 5_000 }) // [!code ++]
```

### Vue Snapshots

This is not a Jest-specific feature, but if you previously were using Jest with vue-cli preset, you will need to install [`jest-serializer-vue`](https://github.com/eddyerburgh/jest-serializer-vue) package, and use it inside [setupFiles](/config/#setupfiles):

:::code-group
```js [vite.config.js]
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    setupFiles: ['./tests/unit/setup.js']
  }
})
```
```js [tests/unit/setup.js]
import vueSnapshotSerializer from 'jest-serializer-vue'

expect.addSnapshotSerializer(vueSnapshotSerializer)
```
:::

Otherwise your snapshots will have a lot of escaped `"` characters.
````

## File: docs/guide/mocking.md
````markdown
---
title: Mocking | Guide
---

# Mocking

When writing tests it's only a matter of time before you need to create a "fake" version of an internal — or external — service. This is commonly referred to as **mocking**. Vitest provides utility functions to help you out through its `vi` helper. You can import it from `vitest` or access it globally if [`global` configuration](/config/#globals) is enabled.

::: warning
Always remember to clear or restore mocks before or after each test run to undo mock state changes between runs! See [`mockReset`](/api/mock#mockreset) docs for more info.
:::

If you are not familiar with `vi.fn`, `vi.mock` or `vi.spyOn` methods, check the [API section](/api/vi) first.

## Dates

Sometimes you need to be in control of the date to ensure consistency when testing. Vitest uses [`@sinonjs/fake-timers`](https://github.com/sinonjs/fake-timers) package for manipulating timers, as well as system date. You can find more about the specific API in detail [here](/api/vi#vi-setsystemtime).

### Example

```js
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const businessHours = [9, 17]

function purchase() {
  const currentHour = new Date().getHours()
  const [open, close] = businessHours

  if (currentHour > open && currentHour < close) {
    return { message: 'Success' }
  }

  return { message: 'Error' }
}

describe('purchasing flow', () => {
  beforeEach(() => {
    // tell vitest we use mocked time
    vi.useFakeTimers()
  })

  afterEach(() => {
    // restoring date after each test run
    vi.useRealTimers()
  })

  it('allows purchases within business hours', () => {
    // set hour within business hours
    const date = new Date(2000, 1, 1, 13)
    vi.setSystemTime(date)

    // access Date.now() will result in the date set above
    expect(purchase()).toEqual({ message: 'Success' })
  })

  it('disallows purchases outside of business hours', () => {
    // set hour outside business hours
    const date = new Date(2000, 1, 1, 19)
    vi.setSystemTime(date)

    // access Date.now() will result in the date set above
    expect(purchase()).toEqual({ message: 'Error' })
  })
})
```

## Functions

Mocking functions can be split up into two different categories; *spying & mocking*.

Sometimes all you need is to validate whether or not a specific function has been called (and possibly which arguments were passed). In these cases a spy would be all we need which you can use directly with `vi.spyOn()` ([read more here](/api/vi#vi-spyon)).

However spies can only help you **spy** on functions, they are not able to alter the implementation of those functions. In the case where we do need to create a fake (or mocked) version of a function we can  use `vi.fn()` ([read more here](/api/vi#vi-fn)).

We use [Tinyspy](https://github.com/tinylibs/tinyspy) as a base for mocking functions, but we have our own wrapper to make it `jest` compatible. Both `vi.fn()` and `vi.spyOn()` share the same methods, however only the return result of `vi.fn()` is callable.

### Example

```js
import { afterEach, describe, expect, it, vi } from 'vitest'

const messages = {
  items: [
    { message: 'Simple test message', from: 'Testman' },
    // ...
  ],
  getLatest, // can also be a `getter or setter if supported`
}

function getLatest(index = messages.items.length - 1) {
  return messages.items[index]
}

describe('reading messages', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should get the latest message with a spy', () => {
    const spy = vi.spyOn(messages, 'getLatest')
    expect(spy.getMockName()).toEqual('getLatest')

    expect(messages.getLatest()).toEqual(
      messages.items[messages.items.length - 1],
    )

    expect(spy).toHaveBeenCalledTimes(1)

    spy.mockImplementationOnce(() => 'access-restricted')
    expect(messages.getLatest()).toEqual('access-restricted')

    expect(spy).toHaveBeenCalledTimes(2)
  })

  it('should get with a mock', () => {
    const mock = vi.fn().mockImplementation(getLatest)

    expect(mock()).toEqual(messages.items[messages.items.length - 1])
    expect(mock).toHaveBeenCalledTimes(1)

    mock.mockImplementationOnce(() => 'access-restricted')
    expect(mock()).toEqual('access-restricted')

    expect(mock).toHaveBeenCalledTimes(2)

    expect(mock()).toEqual(messages.items[messages.items.length - 1])
    expect(mock).toHaveBeenCalledTimes(3)
  })
})
```

### More

- [Jest's Mock Functions](https://jestjs.io/docs/mock-function-api)

## Globals

You can mock global variables that are not present with `jsdom` or `node` by using [`vi.stubGlobal`](/api/vi#vi-stubglobal) helper. It will put the value of the global variable into a `globalThis` object.

```ts
import { vi } from 'vitest'

const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}))

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)

// now you can access it as `IntersectionObserver` or `window.IntersectionObserver`
```

## Modules

Mock modules observe third-party-libraries, that are invoked in some other code, allowing you to test arguments, output or even redeclare its implementation.

See the [`vi.mock()` API section](/api/vi#vi-mock) for a more in-depth detailed API description.

### Automocking Algorithm

If your code is importing a mocked module, without any associated `__mocks__` file or `factory` for this module, Vitest will mock the module itself by invoking it and mocking every export.

The following principles apply
* All arrays will be emptied
* All primitives and collections will stay the same
* All objects will be deeply cloned
* All instances of classes and their prototypes will be deeply cloned

### Virtual Modules

Vitest supports mocking Vite [virtual modules](https://vitejs.dev/guide/api-plugin.html#virtual-modules-convention). It works differently from how virtual modules are treated in Jest. Instead of passing down `virtual: true` to a `vi.mock` function, you need to tell Vite that module exists otherwise it will fail during parsing. You can do that in several ways:

1. Provide an alias

```ts [vitest.config.js]
import { defineConfig } from 'vitest/config'
import { resolve } from 'node:path'
export default defineConfig({
  test: {
    alias: {
      '$app/forms': resolve('./mocks/forms.js'),
    },
  },
})
```

2. Provide a plugin that resolves a virtual module

```ts [vitest.config.js]
import { defineConfig } from 'vitest/config'
export default defineConfig({
  plugins: [
    {
      name: 'virtual-modules',
      resolveId(id) {
        if (id === '$app/forms') {
          return 'virtual:$app/forms'
        }
      },
    },
  ],
})
```

The benefit of the second approach is that you can dynamically create different virtual entrypoints. If you redirect several virtual modules into a single file, then all of them will be affected by `vi.mock`, so make sure to use unique identifiers.

### Mocking Pitfalls

Beware that it is not possible to mock calls to methods that are called inside other methods of the same file. For example, in this code:

```ts [foobar.js]
export function foo() {
  return 'foo'
}

export function foobar() {
  return `${foo()}bar`
}
```

It is not possible to mock the `foo` method from the outside because it is referenced directly. So this code will have no effect on the `foo` call inside `foobar` (but it will affect the `foo` call in other modules):

```ts [foobar.test.ts]
import { vi } from 'vitest'
import * as mod from './foobar.js'

// this will only affect "foo" outside of the original module
vi.spyOn(mod, 'foo')
vi.mock('./foobar.js', async (importOriginal) => {
  return {
    ...await importOriginal<typeof import('./foobar.js')>(),
    // this will only affect "foo" outside of the original module
    foo: () => 'mocked'
  }
})
```

You can confirm this behaviour by providing the implementation to the `foobar` method directly:

```ts [foobar.test.js]
import * as mod from './foobar.js'

vi.spyOn(mod, 'foo')

// exported foo references mocked method
mod.foobar(mod.foo)
```

```ts [foobar.js]
export function foo() {
  return 'foo'
}

export function foobar(injectedFoo) {
  return injectedFoo === foo // false
}
```

This is the intended behaviour. It is usually a sign of bad code when mocking is involved in such a manner. Consider refactoring your code into multiple files or improving your application architecture by using techniques such as [dependency injection](https://en.wikipedia.org/wiki/Dependency_injection).

### Example

```js
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Client } from 'pg'
import { failure, success } from './handlers.js'

// get todos
export async function getTodos(event, context) {
  const client = new Client({
    // ...clientOptions
  })

  await client.connect()

  try {
    const result = await client.query('SELECT * FROM todos;')

    client.end()

    return success({
      message: `${result.rowCount} item(s) returned`,
      data: result.rows,
      status: true,
    })
  }
  catch (e) {
    console.error(e.stack)

    client.end()

    return failure({ message: e, status: false })
  }
}

vi.mock('pg', () => {
  const Client = vi.fn()
  Client.prototype.connect = vi.fn()
  Client.prototype.query = vi.fn()
  Client.prototype.end = vi.fn()

  return { Client }
})

vi.mock('./handlers.js', () => {
  return {
    success: vi.fn(),
    failure: vi.fn(),
  }
})

describe('get a list of todo items', () => {
  let client

  beforeEach(() => {
    client = new Client()
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should return items successfully', async () => {
    client.query.mockResolvedValueOnce({ rows: [], rowCount: 0 })

    await getTodos()

    expect(client.connect).toBeCalledTimes(1)
    expect(client.query).toBeCalledWith('SELECT * FROM todos;')
    expect(client.end).toBeCalledTimes(1)

    expect(success).toBeCalledWith({
      message: '0 item(s) returned',
      data: [],
      status: true,
    })
  })

  it('should throw an error', async () => {
    const mError = new Error('Unable to retrieve rows')
    client.query.mockRejectedValueOnce(mError)

    await getTodos()

    expect(client.connect).toBeCalledTimes(1)
    expect(client.query).toBeCalledWith('SELECT * FROM todos;')
    expect(client.end).toBeCalledTimes(1)
    expect(failure).toBeCalledWith({ message: mError, status: false })
  })
})
```

## File System

Mocking the file system ensures that the tests do not depend on the actual file system, making the tests more reliable and predictable. This isolation helps in avoiding side effects from previous tests. It allows for testing error conditions and edge cases that might be difficult or impossible to replicate with an actual file system, such as permission issues, disk full scenarios, or read/write errors.

Vitest doesn't provide any file system mocking API out of the box. You can use `vi.mock` to mock the `fs` module manually, but it's hard to maintain. Instead, we recommend using [`memfs`](https://www.npmjs.com/package/memfs) to do that for you. `memfs` creates an in-memory file system, which simulates file system operations without touching the actual disk. This approach is fast and safe, avoiding any potential side effects on the real file system.

### Example

To automatically redirect every `fs` call to `memfs`, you can create `__mocks__/fs.cjs` and `__mocks__/fs/promises.cjs` files at the root of your project:

::: code-group
```ts [__mocks__/fs.cjs]
// we can also use `import`, but then
// every export should be explicitly defined

const { fs } = require('memfs')
module.exports = fs
```

```ts [__mocks__/fs/promises.cjs]
// we can also use `import`, but then
// every export should be explicitly defined

const { fs } = require('memfs')
module.exports = fs.promises
```
:::

```ts [read-hello-world.js]
import { readFileSync } from 'node:fs'

export function readHelloWorld(path) {
  return readFileSync(path, 'utf-8')
}
```

```ts [hello-world.test.js]
import { beforeEach, expect, it, vi } from 'vitest'
import { fs, vol } from 'memfs'
import { readHelloWorld } from './read-hello-world.js'

// tell vitest to use fs mock from __mocks__ folder
// this can be done in a setup file if fs should always be mocked
vi.mock('node:fs')
vi.mock('node:fs/promises')

beforeEach(() => {
  // reset the state of in-memory fs
  vol.reset()
})

it('should return correct text', () => {
  const path = '/hello-world.txt'
  fs.writeFileSync(path, 'hello world')

  const text = readHelloWorld(path)
  expect(text).toBe('hello world')
})

it('can return a value multiple times', () => {
  // you can use vol.fromJSON to define several files
  vol.fromJSON(
    {
      './dir1/hw.txt': 'hello dir1',
      './dir2/hw.txt': 'hello dir2',
    },
    // default cwd
    '/tmp',
  )

  expect(readHelloWorld('/tmp/dir1/hw.txt')).toBe('hello dir1')
  expect(readHelloWorld('/tmp/dir2/hw.txt')).toBe('hello dir2')
})
```

## Requests

Because Vitest runs in Node, mocking network requests is tricky; web APIs are not available, so we need something that will mimic network behavior for us. We recommend [Mock Service Worker](https://mswjs.io/) to accomplish this. It allows you to mock `http`, `WebSocket` and `GraphQL` network requests, and is framework agnostic.

Mock Service Worker (MSW) works by intercepting the requests your tests make, allowing you to use it without changing any of your application code. In-browser, this uses the [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API). In Node.js, and for Vitest, it uses the [`@mswjs/interceptors`](https://github.com/mswjs/interceptors) library. To learn more about MSW, read their [introduction](https://mswjs.io/docs/)

### Configuration

You can use it like below in your [setup file](/config/#setupfiles)

::: code-group

```js [HTTP Setup]
import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'

const posts = [
  {
    userId: 1,
    id: 1,
    title: 'first post title',
    body: 'first post body',
  },
  // ...
]

export const restHandlers = [
  http.get('https://rest-endpoint.example/path/to/posts', () => {
    return HttpResponse.json(posts)
  }),
]

const server = setupServer(...restHandlers)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

// Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test for test isolation
afterEach(() => server.resetHandlers())
```

```js [GraphQL Setup]
import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { graphql, HttpResponse } from 'msw'

const posts = [
  {
    userId: 1,
    id: 1,
    title: 'first post title',
    body: 'first post body',
  },
  // ...
]

const graphqlHandlers = [
  graphql.query('ListPosts', () => {
    return HttpResponse.json({
      data: { posts },
    })
  }),
]

const server = setupServer(...graphqlHandlers)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

// Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test for test isolation
afterEach(() => server.resetHandlers())
```

```js [WebSocket Setup]
import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { ws } from 'msw'

const chat = ws.link('wss://chat.example.com')

const wsHandlers = [
  chat.addEventListener('connection', ({ client }) => {
    client.addEventListener('message', (event) => {
      console.log('Received message from client:', event.data)
      // Echo the received message back to the client
      client.send(`Server received: ${event.data}`)
    })
  }),
]

const server = setupServer(...wsHandlers)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

// Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test for test isolation
afterEach(() => server.resetHandlers())
```
:::

> Configuring the server with `onUnhandledRequest: 'error'` ensures that an error is thrown whenever there is a request that does not have a corresponding request handler.

### More
There is much more to MSW. You can access cookies and query parameters, define mock error responses, and much more! To see all you can do with MSW, read [their documentation](https://mswjs.io/docs).

## Timers

When we test code that involves timeouts or intervals, instead of having our tests wait it out or timeout, we can speed up our tests by using "fake" timers that mock calls to `setTimeout` and `setInterval`.

See the [`vi.useFakeTimers` API section](/api/vi#vi-usefaketimers) for a more in depth detailed API description.

### Example

```js
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

function executeAfterTwoHours(func) {
  setTimeout(func, 1000 * 60 * 60 * 2) // 2 hours
}

function executeEveryMinute(func) {
  setInterval(func, 1000 * 60) // 1 minute
}

const mock = vi.fn(() => console.log('executed'))

describe('delayed execution', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.restoreAllMocks()
  })
  it('should execute the function', () => {
    executeAfterTwoHours(mock)
    vi.runAllTimers()
    expect(mock).toHaveBeenCalledTimes(1)
  })
  it('should not execute the function', () => {
    executeAfterTwoHours(mock)
    // advancing by 2ms won't trigger the func
    vi.advanceTimersByTime(2)
    expect(mock).not.toHaveBeenCalled()
  })
  it('should execute every minute', () => {
    executeEveryMinute(mock)
    vi.advanceTimersToNextTimer()
    expect(mock).toHaveBeenCalledTimes(1)
    vi.advanceTimersToNextTimer()
    expect(mock).toHaveBeenCalledTimes(2)
  })
})
```

## Classes

You can mock an entire class with a single `vi.fn` call - since all classes are also functions, this works out of the box. Beware that currently Vitest doesn't respect the `new` keyword so the `new.target` is always `undefined` in the body of a function.

```ts
class Dog {
  name: string

  constructor(name: string) {
    this.name = name
  }

  static getType(): string {
    return 'animal'
  }

  greet = (): string => {
    return `Hi! My name is ${this.name}!`
  }

  speak(): string {
    return 'bark!'
  }

  isHungry() {}
  feed() {}
}
```

We can re-create this class with ES5 functions:

```ts
const Dog = vi.fn(function (name) {
  this.name = name
  // mock instance methods in the constructor, each instance will have its own spy
  this.greet = vi.fn(() => `Hi! My name is ${this.name}!`)
})

// notice that static methods are mocked directly on the function,
// not on the instance of the class
Dog.getType = vi.fn(() => 'mocked animal')

// mock the "speak" and "feed" methods on every instance of a class
// all `new Dog()` instances will inherit and share these spies
Dog.prototype.speak = vi.fn(() => 'loud bark!')
Dog.prototype.feed = vi.fn()
```

::: warning
If a non-primitive is returned from the constructor function, that value will become the result of the new expression. In this case the `[[Prototype]]` may not be correctly bound:

```ts
const CorrectDogClass = vi.fn(function (name) {
  this.name = name
})

const IncorrectDogClass = vi.fn(name => ({
  name
}))

const Marti = new CorrectDogClass('Marti')
const Newt = new IncorrectDogClass('Newt')

Marti instanceof CorrectDogClass // ✅ true
Newt instanceof IncorrectDogClass // ❌ false!
```
:::

::: tip WHEN TO USE?
Generally speaking, you would re-create a class like this inside the module factory if the class is re-exported from another module:

```ts
import { Dog } from './dog.js'

vi.mock(import('./dog.js'), () => {
  const Dog = vi.fn()
  Dog.prototype.feed = vi.fn()
  // ... other mocks
  return { Dog }
})
```

This method can also be used to pass an instance of a class to a function that accepts the same interface:

```ts [src/feed.ts]
function feed(dog: Dog) {
  // ...
}
```
```ts [tests/dog.test.ts]
import { expect, test, vi } from 'vitest'
import { feed } from '../src/feed.js'

const Dog = vi.fn()
Dog.prototype.feed = vi.fn()

test('can feed dogs', () => {
  const dogMax = new Dog('Max')

  feed(dogMax)

  expect(dogMax.feed).toHaveBeenCalled()
  expect(dogMax.isHungry()).toBe(false)
})
```
:::

Now, when we create a new instance of the `Dog` class its `speak` method (alongside `feed` and `greet`) is already mocked:

```ts
const Cooper = new Dog('Cooper')
Cooper.speak() // loud bark!
Cooper.greet() // Hi! My name is Cooper!

// you can use built-in assertions to check the validity of the call
expect(Cooper.speak).toHaveBeenCalled()
expect(Cooper.greet).toHaveBeenCalled()

const Max = new Dog('Max')

// methods assigned to the prototype are shared between instances
expect(Max.speak).toHaveBeenCalled()
expect(Max.greet).not.toHaveBeenCalled()
```

We can reassign the return value for a specific instance:

```ts
const dog = new Dog('Cooper')

// "vi.mocked" is a type helper, since
// TypeScript doesn't know that Dog is a mocked class,
// it wraps any function in a MockInstance<T> type
// without validating if the function is a mock
vi.mocked(dog.speak).mockReturnValue('woof woof')

dog.speak() // woof woof
```

To mock the property, we can use the `vi.spyOn(dog, 'name', 'get')` method. This makes it possible to use spy assertions on the mocked property:

```ts
const dog = new Dog('Cooper')

const nameSpy = vi.spyOn(dog, 'name', 'get').mockReturnValue('Max')

expect(dog.name).toBe('Max')
expect(nameSpy).toHaveBeenCalledTimes(1)
```

::: tip
You can also spy on getters and setters using the same method.
:::

## Cheat Sheet

:::info
`vi` in the examples below is imported directly from `vitest`. You can also use it globally, if you set `globals` to `true` in your [config](/config/).
:::

I want to…

### Mock exported variables
```js [example.js]
export const getter = 'variable'
```
```ts [example.test.ts]
import * as exports from './example.js'

vi.spyOn(exports, 'getter', 'get').mockReturnValue('mocked')
```

### Mock an exported function

1. Example with `vi.mock`:

::: warning
Don't forget that a `vi.mock` call is hoisted to top of the file. It will always be executed before all imports.
:::

```ts [example.js]
export function method() {}
```
```ts
import { method } from './example.js'

vi.mock('./example.js', () => ({
  method: vi.fn()
}))
```

2. Example with `vi.spyOn`:
```ts
import * as exports from './example.js'

vi.spyOn(exports, 'method').mockImplementation(() => {})
```

### Mock an exported class implementation

1. Example with `vi.mock` and `.prototype`:
```ts [example.js]
export class SomeClass {}
```
```ts
import { SomeClass } from './example.js'

vi.mock(import('./example.js'), () => {
  const SomeClass = vi.fn()
  SomeClass.prototype.someMethod = vi.fn()
  return { SomeClass }
})
// SomeClass.mock.instances will have SomeClass
```

2. Example with `vi.spyOn`:

```ts
import * as mod from './example.js'

const SomeClass = vi.fn()
SomeClass.prototype.someMethod = vi.fn()

vi.spyOn(mod, 'SomeClass').mockImplementation(SomeClass)
```

### Spy on an object returned from a function

1. Example using cache:

```ts [example.js]
export function useObject() {
  return { method: () => true }
}
```

```ts [useObject.js]
import { useObject } from './example.js'

const obj = useObject()
obj.method()
```

```ts [useObject.test.js]
import { useObject } from './example.js'

vi.mock(import('./example.js'), () => {
  let _cache
  const useObject = () => {
    if (!_cache) {
      _cache = {
        method: vi.fn(),
      }
    }
    // now every time that useObject() is called it will
    // return the same object reference
    return _cache
  }
  return { useObject }
})

const obj = useObject()
// obj.method was called inside some-path
expect(obj.method).toHaveBeenCalled()
```

### Mock part of a module

```ts
import { mocked, original } from './some-path.js'

vi.mock(import('./some-path.js'), async (importOriginal) => {
  const mod = await importOriginal()
  return {
    ...mod,
    mocked: vi.fn()
  }
})
original() // has original behaviour
mocked() // is a spy function
```

::: warning
Don't forget that this only [mocks _external_ access](#mocking-pitfalls). In this example, if `original` calls `mocked` internally, it will always call the function defined in the module, not in the mock factory.
:::

### Mock the current date

To mock `Date`'s time, you can use `vi.setSystemTime` helper function. This value will **not** automatically reset between different tests.

Beware that using `vi.useFakeTimers` also changes the `Date`'s time.

```ts
const mockDate = new Date(2022, 0, 1)
vi.setSystemTime(mockDate)
const now = new Date()
expect(now.valueOf()).toBe(mockDate.valueOf())
// reset mocked time
vi.useRealTimers()
```

### Mock a global variable

You can set global variable by assigning a value to `globalThis` or using [`vi.stubGlobal`](/api/vi#vi-stubglobal) helper. When using `vi.stubGlobal`, it will **not** automatically reset between different tests, unless you enable [`unstubGlobals`](/config/#unstubglobals) config option or call [`vi.unstubAllGlobals`](/api/vi#vi-unstuballglobals).

```ts
vi.stubGlobal('__VERSION__', '1.0.0')
expect(__VERSION__).toBe('1.0.0')
```

### Mock `import.meta.env`

1. To change environmental variable, you can just assign a new value to it.

::: warning
The environmental variable value will **_not_** automatically reset between different tests.
:::

```ts
import { beforeEach, expect, it } from 'vitest'

// you can reset it in beforeEach hook manually
const originalViteEnv = import.meta.env.VITE_ENV

beforeEach(() => {
  import.meta.env.VITE_ENV = originalViteEnv
})

it('changes value', () => {
  import.meta.env.VITE_ENV = 'staging'
  expect(import.meta.env.VITE_ENV).toBe('staging')
})
```

2. If you want to automatically reset the value(s), you can use the `vi.stubEnv` helper with the [`unstubEnvs`](/config/#unstubenvs) config option enabled (or call [`vi.unstubAllEnvs`](/api/vi#vi-unstuballenvs) manually in a `beforeEach` hook):

```ts
import { expect, it, vi } from 'vitest'

// before running tests "VITE_ENV" is "test"
import.meta.env.VITE_ENV === 'test'

it('changes value', () => {
  vi.stubEnv('VITE_ENV', 'staging')
  expect(import.meta.env.VITE_ENV).toBe('staging')
})

it('the value is restored before running an other test', () => {
  expect(import.meta.env.VITE_ENV).toBe('test')
})
```

```ts [vitest.config.ts]
export default defineConfig({
  test: {
    unstubEnvs: true,
  },
})
```
````

## File: docs/guide/parallelism.md
````markdown
---
title: Parallelism | Guide
outline: deep
---

# Parallelism

## File Parallelism

By default, Vitest runs _test files_ in parallel. Depending on the specified `pool`, Vitest uses a different mechanism to parallelize test files:

- `forks` (the default) and `vmForks` run tests in different [child processes](https://nodejs.org/api/child_process.html)
- `threads` and `vmThreads` run tests in different [worker threads](https://nodejs.org/api/worker_threads.html)

Both "child processes" and "worker threads" are refered to as "workers". You can configure the number of running workers with [`minWorkers`](/config/#minworkers) and [`maxWorkers`](/config/#maxworkers) options. Or more granually with [`poolOptions`](/config/#pooloptions) configuration.

If you have a lot of tests, it is usually faster to run them in parallel, but it also depends on the project, the environment and [isolation](/config/#isolate) state. To disable file parallelisation, you can set [`fileParallelism`](/config/#fileparallelism) to `false`. To learn more about possible performance improvements, read the [Performance Guide](/guide/improving-performance).

## Test Parallelism

Unlike _test files_, Vitest runs _tests_ in sequence. This means that tests inside a single test file will run in the order they are defined.

Vitest supports the [`concurrent`](/api/#test-concurrent) option to run tests together. If this option is set, Vitest will group concurrent tests in the same _file_ (the number of simultaneously running tests depends on the [`maxConcurrency`](/config/#maxconcurrency) option) and run them with [`Promise.all`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).

Vitest doesn't perform any smart analysis and doesn't create additional workers to run these tests. This means that the performance of your tests will improve only if you rely heavily on asynchronous operations. For example, these tests will still run one after another even though the `concurrent` option is specified. This is because they are synchronous:

```ts
test.concurrent('the first test', () => {
  expect(1).toBe(1)
})

test.concurrent('the second test', () => {
  expect(2).toBe(2)
})
```

If you wish to run all tests concurrently, you can set the [`sequence.concurrent`](/config/#sequence-concurrent) option to `true`.
````

## File: docs/guide/profiling-test-performance.md
````markdown
# Profiling Test Performance

When you run Vitest it reports multiple time metrics of your tests:

> ```bash
> RUN  v2.1.1 /x/vitest/examples/profiling
>
> ✓ test/prime-number.test.ts (1) 4517ms
>   ✓ generate prime number 4517ms
>
> Test Files  1 passed (1)
>      Tests  1 passed (1)
>   Start at  09:32:53
>   Duration  4.80s (transform 44ms, setup 0ms, collect 35ms, tests 4.52s, environment 0ms, prepare 81ms)
>   # Time metrics ^^
> ```

- Transform: How much time was spent transforming the files. See [File Transform](#file-transform).
- Setup: Time spent for running the [`setupFiles`](/config/#setupfiles) files.
- Collect: Time spent for collecting all tests in the test files. This includes the time it took to import all file dependencies.
- Tests: Time spent for actually running the test cases.
- Environment: Time spent for setting up the test [`environment`](/config/#environment), for example JSDOM.
- Prepare: Time Vitest uses to prepare the test runner.

## Test runner

In cases where your test execution time is high, you can generate a profile of the test runner. See NodeJS documentation for following options:

- [`--cpu-prof`](https://nodejs.org/api/cli.html#--cpu-prof)
- [`--heap-prof`](https://nodejs.org/api/cli.html#--heap-prof)
- [`--prof`](https://nodejs.org/api/cli.html#--prof)

:::warning
The `--prof` option does not work with `pool: 'threads'` due to `node:worker_threads` limitations.
:::

To pass these options to Vitest's test runner, define `poolOptions.<pool>.execArgv` in your Vitest configuration:

::: code-group
```ts [Forks]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    pool: 'forks',
    poolOptions: {
      forks: {
        execArgv: [
          '--cpu-prof',
          '--cpu-prof-dir=test-runner-profile',
          '--heap-prof',
          '--heap-prof-dir=test-runner-profile'
        ],

        // To generate a single profile
        singleFork: true,
      },
    },
  },
})
```
```ts [Threads]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    pool: 'threads',
    poolOptions: {
      threads: {
        execArgv: [
          '--cpu-prof',
          '--cpu-prof-dir=test-runner-profile',
          '--heap-prof',
          '--heap-prof-dir=test-runner-profile'
        ],

        // To generate a single profile
        singleThread: true,
      },
    },
  },
})
```
:::

After the tests have run there should be a `test-runner-profile/*.cpuprofile` and `test-runner-profile/*.heapprofile` files generated. See [Inspecting profiling records](#inspecting-profiling-records) for instructions how to analyze these files.

See [Profiling | Examples](https://github.com/vitest-dev/vitest/tree/main/examples/profiling) for example.

## Main thread

Profiling main thread is useful for debugging Vitest's Vite usage and [`globalSetup`](/config/#globalsetup) files.
This is also where your Vite plugins are running.

:::tip
See [Performance | Vite](https://vitejs.dev/guide/performance.html) for more tips about Vite specific profiling.

We recommend [`vite-plugin-inspect`](https://github.com/antfu-collective/vite-plugin-inspect) for profiling your Vite plugin performance.
:::

To do this you'll need to pass arguments to the Node process that runs Vitest.

```bash
$ node --cpu-prof --cpu-prof-dir=main-profile ./node_modules/vitest/vitest.mjs --run
#      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                  ^^^^^
#               NodeJS arguments                                           Vitest arguments
```

After the tests have run there should be a `main-profile/*.cpuprofile` file generated. See [Inspecting profiling records](#inspecting-profiling-records) for instructions how to analyze these files.

## File transform

In cases where your test transform and collection time is high, you can use `DEBUG=vite-node:*` environment variable to see which files are being transformed and executed by `vite-node`.

```bash
$ DEBUG=vite-node:* vitest --run

 RUN  v2.1.1 /x/vitest/examples/profiling

  vite-node:server:request /x/vitest/examples/profiling/global-setup.ts +0ms
  vite-node:client:execute /x/vitest/examples/profiling/global-setup.ts +0ms
  vite-node:server:request /x/vitest/examples/profiling/test/prime-number.test.ts +45ms
  vite-node:client:execute /x/vitest/examples/profiling/test/prime-number.test.ts +26ms
  vite-node:server:request /src/prime-number.ts +9ms
  vite-node:client:execute /x/vitest/examples/profiling/src/prime-number.ts +9ms
  vite-node:server:request /src/unnecessary-file.ts +6ms
  vite-node:client:execute /x/vitest/examples/profiling/src/unnecessary-file.ts +4ms
...
```

This profiling strategy is a good way to identify unnecessary transforms caused by [barrel files](https://vitejs.dev/guide/performance.html#avoid-barrel-files).
If these logs contain files that should not be loaded when your test is run, you might have barrel files that are importing files unnecessarily.

You can also use [Vitest UI](/guide/ui) to debug slowness caused by barrel file.
The example below shows how importing files without barrel file reduces amount of transformed files by ~85%.

::: code-group
``` [File tree]
├── src
│   └── utils
│       ├── currency.ts
│       ├── formatters.ts  <-- File to test
│       ├── index.ts
│       ├── location.ts
│       ├── math.ts
│       ├── time.ts
│       └── users.ts
├── test
│   └── formatters.test.ts
└── vitest.config.ts
```
```ts [example.test.ts]
import { expect, test } from 'vitest'
import { formatter } from '../src/utils' // [!code --]
import { formatter } from '../src/utils/formatters' // [!code ++]

test('formatter works', () => {
  expect(formatter).not.toThrow()
})
```
:::

<img src="/module-graph-barrel-file.png" alt="Vitest UI demonstrating barrel file issues" />

To see how files are transformed, you can use `VITE_NODE_DEBUG_DUMP` environment variable to write transformed files in the file system:

```bash
$ VITE_NODE_DEBUG_DUMP=true vitest --run

[vite-node] [debug] dump modules to /x/examples/profiling/.vite-node/dump

 RUN  v2.1.1 /x/vitest/examples/profiling
...

$ ls .vite-node/dump/
_x_examples_profiling_global-setup_ts-1292904907.js
_x_examples_profiling_test_prime-number_test_ts-1413378098.js
_src_prime-number_ts-525172412.js
```

## Code coverage

If code coverage generation is slow on your project you can use `DEBUG=vitest:coverage` environment variable to enable performance logging.

```bash
$ DEBUG=vitest:coverage vitest --run --coverage

 RUN  v3.1.1 /x/vitest-example

  vitest:coverage Reading coverage results 2/2
  vitest:coverage Converting 1/2
  vitest:coverage 4 ms /x/src/multiply.ts
  vitest:coverage Converting 2/2
  vitest:coverage 552 ms /x/src/add.ts
  vitest:coverage Uncovered files 1/2
  vitest:coverage File "/x/src/large-file.ts" is taking longer than 3s # [!code error]
  vitest:coverage 3027 ms /x/src/large-file.ts
  vitest:coverage Uncovered files 2/2
  vitest:coverage 4 ms /x/src/untested-file.ts
  vitest:coverage Generate coverage total time 3521 ms
```

This profiling approach is great for detecting large files that are accidentally picked by coverage providers.
For example if your configuration is accidentally including large built minified Javascript files in code coverage, they should appear in logs.
In these cases you might want to adjust your [`coverage.include`](/config/#coverage-include) and [`coverage.exclude`](/config/#coverage-exclude) options.

## Inspecting profiling records

You can inspect the contents of `*.cpuprofile` and `*.heapprofile` with various tools. See list below for examples.

- [Speedscope](https://www.speedscope.app/)
- [Performance Profiling JavaScript in Visual Studio Code](https://code.visualstudio.com/docs/nodejs/profiling#_analyzing-a-profile)
- [Profile Node.js performance with the Performance panel | developer.chrome.com](https://developer.chrome.com/docs/devtools/performance/nodejs#analyze)
- [Memory panel overview | developer.chrome.com](https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots#view_snapshots)
````

## File: docs/guide/projects.md
````markdown
---
title: Test Projects | Guide
---

# Test Projects

::: tip Sample Project

[GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/projects) - [Play Online](https://stackblitz.com/fork/github/vitest-dev/vitest/tree/main/examples/projects?initialPath=__vitest__/)

:::

::: warning
This feature is also known as a `workspace`. The `workspace` is deprecated since 3.2 and replaced with the `projects` configuration. They are functionally the same.
:::

Vitest provides a way to define multiple project configurations within a single Vitest process. This feature is particularly useful for monorepo setups but can also be used to run tests with different configurations, such as `resolve.alias`, `plugins`, or `test.browser` and more.

## Defining Projects

You can define projects in your root [config](/config/):

```ts [vitest.config.ts]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: ['packages/*'],
  },
})
```

Project configurations are inlined configs, files, or glob patterns referencing your projects. For example, if you have a folder named `packages` that contains your projects, you can define an array in your root Vitest config:

```ts [vitest.config.ts]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: ['packages/*'],
  },
})
```

Vitest will treat every folder in `packages` as a separate project even if it doesn't have a config file inside. If this glob pattern matches _any file_, it will be considered a Vitest config even if it doesn't have a `vitest` in its name or has an obscure file extension.

::: warning
Vitest does not treat the root `vitest.config` file as a project unless it is explicitly specified in the configuration. Consequently, the root configuration will only influence global options such as `reporters` and `coverage`. Note that Vitest will always run certain plugin hooks, like `apply`, `config`, `configResolved` or `configureServer`, specified in the root config file. Vitest also uses the same plugins to execute global setups and custom coverage provider.
:::

You can also reference projects with their config files:

```ts [vitest.config.ts]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: ['packages/*/vitest.config.{e2e,unit}.ts'],
  },
})
```

This pattern will only include projects with a `vitest.config` file that contains `e2e` or `unit` before the extension.

You can also define projects using inline configuration. The configuration supports both syntaxes simultaneously.

```ts [vitest.config.ts]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      // matches every folder and file inside the `packages` folder
      'packages/*',
      {
        // add "extends: true" to inherit the options from the root config
        extends: true,
        test: {
          include: ['tests/**/*.{browser}.test.{ts,js}'],
          // it is recommended to define a name when using inline configs
          name: 'happy-dom',
          environment: 'happy-dom',
        }
      },
      {
        test: {
          include: ['tests/**/*.{node}.test.{ts,js}'],
          // color of the name label can be changed
          name: { label: 'node', color: 'green' },
          environment: 'node',
        }
      }
    ]
  }
})
```

::: warning
All projects must have unique names; otherwise, Vitest will throw an error. If a name is not provided in the inline configuration, Vitest will assign a number. For project configurations defined with glob syntax, Vitest will default to using the "name" property in the nearest `package.json` file or, if none exists, the folder name.
:::

Projects do not support all configuration properties. For better type safety, use the `defineProject` method instead of `defineConfig` within project configuration files:

```ts twoslash [packages/a/vitest.config.ts]
// @errors: 2769
import { defineProject } from 'vitest/config'

export default defineProject({
  test: {
    environment: 'jsdom',
    // "reporters" is not supported in a project config,
    // so it will show an error
    reporters: ['json']
  }
})
```

## Running tests

To run tests, define a script in your root `package.json`:

```json [package.json]
{
  "scripts": {
    "test": "vitest"
  }
}
```

Now tests can be run using your package manager:

::: code-group
```bash [npm]
npm run test
```
```bash [yarn]
yarn test
```
```bash [pnpm]
pnpm run test
```
```bash [bun]
bun run test
```
:::

If you need to run tests only inside a single project, use the `--project` CLI option:

::: code-group
```bash [npm]
npm run test --project e2e
```
```bash [yarn]
yarn test --project e2e
```
```bash [pnpm]
pnpm run test --project e2e
```
```bash [bun]
bun run test --project e2e
```
:::

::: tip
CLI option `--project` can be used multiple times to filter out several projects:

::: code-group
```bash [npm]
npm run test --project e2e --project unit
```
```bash [yarn]
yarn test --project e2e --project unit
```
```bash [pnpm]
pnpm run test --project e2e --project unit
```
```bash [bun]
bun run test --project e2e --project unit
```
:::

## Configuration

None of the configuration options are inherited from the root-level config file. You can create a shared config file and merge it with the project config yourself:

```ts [packages/a/vitest.config.ts]
import { defineProject, mergeConfig } from 'vitest/config'
import configShared from '../vitest.shared.js'

export default mergeConfig(
  configShared,
  defineProject({
    test: {
      environment: 'jsdom',
    }
  })
)
```

Additionally, you can use the `extends` option to inherit from your root-level configuration. All options will be merged.

```ts [vitest.config.ts]
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    pool: 'threads',
    projects: [
      {
        // will inherit options from this config like plugins and pool
        extends: true,
        test: {
          name: 'unit',
          include: ['**/*.unit.test.ts'],
        },
      },
      {
        // won't inherit any options from this config
        // this is the default behaviour
        extends: false,
        test: {
          name: 'integration',
          include: ['**/*.integration.test.ts'],
        },
      },
    ],
  },
})
```

::: danger Unsupported Options
Some of the configuration options are not allowed in a project config. Most notably:

- `coverage`: coverage is done for the whole process
- `reporters`: only root-level reporters can be supported
- `resolveSnapshotPath`: only root-level resolver is respected
- all other options that don't affect test runners

All configuration options that are not supported inside a project configuration are marked with a <NonProjectOption /> sign in the ["Config"](/config/) guide. They have to be defined once in the root config file.
:::
````

## File: docs/guide/reporters.md
````markdown
---
title: Reporters | Guide
outline: deep
---

# Reporters

Vitest provides several built-in reporters to display test output in different formats, as well as the ability to use custom reporters. You can select different reporters either by using the `--reporter` command line option, or by including a `reporters` property in your [configuration file](/config/#reporters). If no reporter is specified, Vitest will use the `default` reporter as described below.

Using reporters via command line:

```bash
npx vitest --reporter=verbose
```

Using reporters via [`vitest.config.ts`](/config/):

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    reporters: ['verbose']
  },
})
```

Some reporters can be customized by passing additional options to them. Reporter specific options are described in sections below.

```ts
export default defineConfig({
  test: {
    reporters: [
      'default',
      ['junit', { suiteName: 'UI tests' }]
    ],
  },
})
```

## Reporter Output

By default, Vitest's reporters will print their output to the terminal. When using the `json`, `html` or `junit` reporters, you can instead write your tests' output to a file by including an `outputFile` [configuration option](/config/#outputfile) either in your Vite configuration file or via CLI.

:::code-group
```bash [CLI]
npx vitest --reporter=json --outputFile=./test-output.json
```

```ts [vitest.config.ts]
export default defineConfig({
  test: {
    reporters: ['json'],
    outputFile: './test-output.json'
  },
})
```
:::

## Combining Reporters

You can use multiple reporters simultaneously to print your test results in different formats. For example:

```bash
npx vitest --reporter=json --reporter=default
```

```ts
export default defineConfig({
  test: {
    reporters: ['json', 'default'],
    outputFile: './test-output.json'
  },
})
```

The above example will both print the test results to the terminal in the default style and write them as JSON to the designated output file.

When using multiple reporters, it's also possible to designate multiple output files, as follows:

```ts
export default defineConfig({
  test: {
    reporters: ['junit', 'json', 'verbose'],
    outputFile: {
      junit: './junit-report.xml',
      json: './json-report.json',
    },
  },
})
```

This example will write separate JSON and XML reports as well as printing a verbose report to the terminal.

## Built-in Reporters

### Default Reporter

By default (i.e. if no reporter is specified), Vitest will display summary of running tests and their status at the bottom. Once a suite passes, its status will be reported on top of the summary.

You can disable the summary by configuring the reporter:

:::code-group
```ts [vitest.config.ts]
export default defineConfig({
  test: {
    reporters: [
      ['default', { summary: false }]
    ]
  },
})
```
:::

Example output for tests in progress:

```bash
 ✓ test/example-1.test.ts (5 tests | 1 skipped) 306ms
 ✓ test/example-2.test.ts (5 tests | 1 skipped) 307ms

 ❯ test/example-3.test.ts 3/5
 ❯ test/example-4.test.ts 1/5

 Test Files 2 passed (4)
      Tests 10 passed | 3 skipped (65)
   Start at 11:01:36
   Duration 2.00s
```

Final output after tests have finished:

```bash
 ✓ test/example-1.test.ts (5 tests | 1 skipped) 306ms
 ✓ test/example-2.test.ts (5 tests | 1 skipped) 307ms
 ✓ test/example-3.test.ts (5 tests | 1 skipped) 307ms
 ✓ test/example-4.test.ts (5 tests | 1 skipped) 307ms

 Test Files  4 passed (4)
      Tests  16 passed | 4 skipped (20)
   Start at  12:34:32
   Duration  1.26s (transform 35ms, setup 1ms, collect 90ms, tests 1.47s, environment 0ms, prepare 267ms)
```

### Basic Reporter

The `basic` reporter is equivalent to `default` reporter without `summary`.

:::code-group
```bash [CLI]
npx vitest --reporter=basic
```

```ts [vitest.config.ts]
export default defineConfig({
  test: {
    reporters: ['basic']
  },
})
```
:::

Example output using basic reporter:
```bash
✓ __tests__/file1.test.ts (2) 725ms
✓ __tests__/file2.test.ts (2) 746ms

 Test Files  2 passed (2)
      Tests  4 passed (4)
   Start at  12:34:32
   Duration  1.26s (transform 35ms, setup 1ms, collect 90ms, tests 1.47s, environment 0ms, prepare 267ms)
```

### Verbose Reporter

Verbose reporter is same as `default` reporter, but it also displays each individual test after the suite has finished. It also displays currently running tests that are taking longer than [`slowTestThreshold`](/config/#slowtestthreshold). Similar to `default` reporter, you can disable the summary by configuring the reporter.

:::code-group
```bash [CLI]
npx vitest --reporter=verbose
```

```ts [vitest.config.ts]
export default defineConfig({
  test: {
    reporters: [
      ['verbose', { summary: false }]
    ]
  },
})
```
:::

Example output for tests in progress with default `slowTestThreshold: 300`:

```bash
 ✓ __tests__/example-1.test.ts (2) 725ms
   ✓ first test file (2) 725ms
     ✓ 2 + 2 should equal 4
     ✓ 4 - 2 should equal 2

 ❯ test/example-2.test.ts 3/5
   ↳ should run longer than three seconds 1.57s
 ❯ test/example-3.test.ts 1/5

 Test Files 2 passed (4)
      Tests 10 passed | 3 skipped (65)
   Start at 11:01:36
   Duration 2.00s
```

Example of final terminal output for a passing test suite:

```bash
✓ __tests__/file1.test.ts (2) 725ms
   ✓ first test file (2) 725ms
     ✓ 2 + 2 should equal 4
     ✓ 4 - 2 should equal 2
✓ __tests__/file2.test.ts (2) 746ms
  ✓ second test file (2) 746ms
    ✓ 1 + 1 should equal 2
    ✓ 2 - 1 should equal 1

 Test Files  2 passed (2)
      Tests  4 passed (4)
   Start at  12:34:32
   Duration  1.26s (transform 35ms, setup 1ms, collect 90ms, tests 1.47s, environment 0ms, prepare 267ms)
```

### Dot Reporter

Prints a single dot for each completed test to provide minimal output while still showing all tests that have run. Details are only provided for failed tests, along with the `basic` reporter summary for the suite.

:::code-group
```bash [CLI]
npx vitest --reporter=dot
```

```ts [vitest.config.ts]
export default defineConfig({
  test: {
    reporters: ['dot']
  },
})
```
:::

Example terminal output for a passing test suite:

```bash
....

 Test Files  2 passed (2)
      Tests  4 passed (4)
   Start at  12:34:32
   Duration  1.26s (transform 35ms, setup 1ms, collect 90ms, tests 1.47s, environment 0ms, prepare 267ms)
```

### JUnit Reporter

Outputs a report of the test results in JUnit XML format. Can either be printed to the terminal or written to an XML file using the [`outputFile`](/config/#outputfile) configuration option.

:::code-group
```bash [CLI]
npx vitest --reporter=junit
```

```ts [vitest.config.ts]
export default defineConfig({
  test: {
    reporters: ['junit']
  },
})
```
:::

Example of a JUnit XML report:
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<testsuites name="vitest tests" tests="2" failures="1" errors="0" time="0.503">
    <testsuite name="__tests__/test-file-1.test.ts" timestamp="2023-10-19T17:41:58.580Z" hostname="My-Computer.local" tests="2" failures="1" errors="0" skipped="0" time="0.013">
        <testcase classname="__tests__/test-file-1.test.ts" name="first test file &gt; 2 + 2 should equal 4" time="0.01">
            <failure message="expected 5 to be 4 // Object.is equality" type="AssertionError">
AssertionError: expected 5 to be 4 // Object.is equality
 ❯ __tests__/test-file-1.test.ts:20:28
            </failure>
        </testcase>
        <testcase classname="__tests__/test-file-1.test.ts" name="first test file &gt; 4 - 2 should equal 2" time="0">
        </testcase>
    </testsuite>
</testsuites>
```

The outputted XML contains nested `testsuites` and `testcase` tags. These can also be customized via reporter options `suiteName` and `classnameTemplate`. `classnameTemplate` can either be a template string or a function.

The supported placeholders for the `classnameTemplate` option are:
- filename
- filepath

```ts
export default defineConfig({
  test: {
    reporters: [
      ['junit', { suiteName: 'custom suite name', classnameTemplate: 'filename:{filename} - filepath:{filepath}' }]
    ]
  },
})
```

### JSON Reporter

Generates a report of the test results in a JSON format compatible with Jest's `--json` option. Can either be printed to the terminal or written to a file using the [`outputFile`](/config/#outputfile) configuration option.

:::code-group
```bash [CLI]
npx vitest --reporter=json
```

```ts [vitest.config.ts]
export default defineConfig({
  test: {
    reporters: ['json']
  },
})
```
:::

Example of a JSON report:

```json
{
  "numTotalTestSuites": 4,
  "numPassedTestSuites": 2,
  "numFailedTestSuites": 1,
  "numPendingTestSuites": 1,
  "numTotalTests": 4,
  "numPassedTests": 1,
  "numFailedTests": 1,
  "numPendingTests": 1,
  "numTodoTests": 1,
  "startTime": 1697737019307,
  "success": false,
  "testResults": [
    {
      "assertionResults": [
        {
          "ancestorTitles": [
            "",
            "first test file"
          ],
          "fullName": " first test file 2 + 2 should equal 4",
          "status": "failed",
          "title": "2 + 2 should equal 4",
          "duration": 9,
          "failureMessages": [
            "expected 5 to be 4 // Object.is equality"
          ],
          "location": {
            "line": 20,
            "column": 28
          },
          "meta": {}
        }
      ],
      "startTime": 1697737019787,
      "endTime": 1697737019797,
      "status": "failed",
      "message": "",
      "name": "/root-directory/__tests__/test-file-1.test.ts"
    }
  ],
  "coverageMap": {}
}
```

::: info
Since Vitest 3, the JSON reporter includes coverage information in `coverageMap` if coverage is enabled.
:::

### HTML Reporter

Generates an HTML file to view test results through an interactive [GUI](/guide/ui). After the file has been generated, Vitest will keep a local development server running and provide a link to view the report in a browser.

Output file can be specified using the [`outputFile`](/config/#outputfile) configuration option. If no `outputFile` option is provided, a new HTML file will be created.

:::code-group
```bash [CLI]
npx vitest --reporter=html
```

```ts [vitest.config.ts]
export default defineConfig({
  test: {
    reporters: ['html']
  },
})
```
:::

::: tip
This reporter requires installed [`@vitest/ui`](/guide/ui) package.
:::

### TAP Reporter

Outputs a report following [Test Anything Protocol](https://testanything.org/) (TAP).

:::code-group
```bash [CLI]
npx vitest --reporter=tap
```

```ts [vitest.config.ts]
export default defineConfig({
  test: {
    reporters: ['tap']
  },
})
```
:::

Example of a TAP report:
```bash
TAP version 13
1..1
not ok 1 - __tests__/test-file-1.test.ts # time=14.00ms {
    1..1
    not ok 1 - first test file # time=13.00ms {
        1..2
        not ok 1 - 2 + 2 should equal 4 # time=11.00ms
            ---
            error:
                name: "AssertionError"
                message: "expected 5 to be 4 // Object.is equality"
            at: "/root-directory/__tests__/test-file-1.test.ts:20:28"
            actual: "5"
            expected: "4"
            ...
        ok 2 - 4 - 2 should equal 2 # time=1.00ms
    }
}
```

### TAP Flat Reporter

Outputs a TAP flat report. Like the `tap` reporter, test results are formatted to follow TAP standards, but test suites are formatted as a flat list rather than a nested hierarchy.

:::code-group
```bash [CLI]
npx vitest --reporter=tap-flat
```

```ts [vitest.config.ts]
export default defineConfig({
  test: {
    reporters: ['tap-flat']
  },
})
```
:::

Example of a TAP flat report:
```bash
TAP version 13
1..2
not ok 1 - __tests__/test-file-1.test.ts > first test file > 2 + 2 should equal 4 # time=11.00ms
    ---
    error:
        name: "AssertionError"
        message: "expected 5 to be 4 // Object.is equality"
    at: "/root-directory/__tests__/test-file-1.test.ts:20:28"
    actual: "5"
    expected: "4"
    ...
ok 2 - __tests__/test-file-1.test.ts > first test file > 4 - 2 should equal 2 # time=0.00ms
```

### Hanging Process Reporter

Displays a list of hanging processes, if any are preventing Vitest from exiting safely. The `hanging-process` reporter does not itself display test results, but can be used in conjunction with another reporter to monitor processes while tests run. Using this reporter can be resource-intensive, so should generally be reserved for debugging purposes in situations where Vitest consistently cannot exit the process.

:::code-group
```bash [CLI]
npx vitest --reporter=hanging-process
```

```ts [vitest.config.ts]
export default defineConfig({
  test: {
    reporters: ['hanging-process']
  },
})
```
:::

### Github Actions Reporter {#github-actions-reporter}

Output [workflow commands](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-error-message)
to provide annotations for test failures. This reporter is automatically enabled with a [`default`](#default-reporter) reporter when `process.env.GITHUB_ACTIONS === 'true'`.

<img alt="Github Actions" img-dark src="https://github.com/vitest-dev/vitest/assets/4232207/336cddc2-df6b-4b8a-8e72-4d00010e37f5">
<img alt="Github Actions" img-light src="https://github.com/vitest-dev/vitest/assets/4232207/ce8447c1-0eab-4fe1-abef-d0d322290dca">

If you configure non-default reporters, you need to explicitly add `github-actions`.

```ts
export default defineConfig({
  test: {
    reporters: process.env.GITHUB_ACTIONS ? ['dot', 'github-actions'] : ['dot'],
  },
})
```

You can customize the file paths that are printed in [GitHub's annotation command format](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/workflow-commands-for-github-actions) by using the `onWritePath` option. This is useful when running Vitest in a containerized environment, such as Docker, where the file paths may not match the paths in the GitHub Actions environment.

```ts
export default defineConfig({
  test: {
    reporters: process.env.GITHUB_ACTIONS
      ? [
          'default',
          ['github-actions', { onWritePath(path) {
            return path.replace(/^\/app\//, `${process.env.GITHUB_WORKSPACE}/`)
          } }],
        ]
      : ['default'],
  },
})
```

### Blob Reporter

Stores test results on the machine so they can be later merged using [`--merge-reports`](/guide/cli#merge-reports) command.
By default, stores all results in `.vitest-reports` folder, but can be overridden with `--outputFile` or `--outputFile.blob` flags.

```bash
npx vitest --reporter=blob --outputFile=reports/blob-1.json
```

We recommend using this reporter if you are running Vitest on different machines with the [`--shard`](/guide/cli#shard) flag.
All blob reports can be merged into any report by using `--merge-reports` command at the end of your CI pipeline:

```bash
npx vitest --merge-reports=reports --reporter=json --reporter=default
```

::: tip
Both `--reporter=blob` and `--merge-reports` do not work in watch mode.
:::

## Custom Reporters

You can use third-party custom reporters installed from NPM by specifying their package name in the reporters' option:

:::code-group
```bash [CLI]
npx vitest --reporter=some-published-vitest-reporter
```

```ts [vitest.config.ts]
export default defineConfig({
  test: {
    reporters: ['some-published-vitest-reporter']
  },
})
```
:::

Additionally, you can define your own [custom reporters](/advanced/reporters) and use them by specifying their file path:

```bash
npx vitest --reporter=./path/to/reporter.ts
```

Custom reporters should implement the [Reporter interface](https://github.com/vitest-dev/vitest/blob/main/packages/vitest/src/node/types/reporter.ts).
````

## File: docs/guide/snapshot.md
````markdown
---
title: Snapshot | Guide
---

# Snapshot

<CourseLink href="https://vueschool.io/lessons/snapshots-in-vitest?friend=vueuse">Learn Snapshot by video from Vue School</CourseLink>

Snapshot tests are a very useful tool whenever you want to make sure the output of your functions does not change unexpectedly.

When using snapshot, Vitest will take a snapshot of the given value, then compare it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the result.

## Use Snapshots

To snapshot a value, you can use the [`toMatchSnapshot()`](/api/expect#tomatchsnapshot) from `expect()` API:

```ts
import { expect, it } from 'vitest'

it('toUpperCase', () => {
  const result = toUpperCase('foobar')
  expect(result).toMatchSnapshot()
})
```

The first time this test is run, Vitest creates a snapshot file that looks like this:

```js
// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports['toUpperCase 1'] = '"FOOBAR"'
```

The snapshot artifact should be committed alongside code changes, and reviewed as part of your code review process. On subsequent test runs, Vitest will compare the rendered output with the previous snapshot. If they match, the test will pass. If they don't match, either the test runner found a bug in your code that should be fixed, or the implementation has changed and the snapshot needs to be updated.

::: warning
When using Snapshots with async concurrent tests, `expect` from the local [Test Context](/guide/test-context) must be used to ensure the right test is detected.
:::

## Inline Snapshots

Similarly, you can use the [`toMatchInlineSnapshot()`](/api/expect#tomatchinlinesnapshot) to store the snapshot inline within the test file.

```ts
import { expect, it } from 'vitest'

it('toUpperCase', () => {
  const result = toUpperCase('foobar')
  expect(result).toMatchInlineSnapshot()
})
```

Instead of creating a snapshot file, Vitest will modify the test file directly to update the snapshot as a string:

```ts
import { expect, it } from 'vitest'

it('toUpperCase', () => {
  const result = toUpperCase('foobar')
  expect(result).toMatchInlineSnapshot('"FOOBAR"')
})
```

This allows you to see the expected output directly without jumping across different files.

::: warning
When using Snapshots with async concurrent tests, `expect` from the local [Test Context](/guide/test-context) must be used to ensure the right test is detected.
:::

## Updating Snapshots

When the received value doesn't match the snapshot, the test fails and shows you the difference between them. When the snapshot change is expected, you may want to update the snapshot from the current state.

In watch mode, you can press the `u` key in the terminal to update the failed snapshot directly.

Or you can use the `--update` or `-u` flag in the CLI to make Vitest update snapshots.

```bash
vitest -u
```

## File Snapshots

When calling `toMatchSnapshot()`, we store all snapshots in a formatted snap file. That means we need to escape some characters (namely the double-quote `"` and backtick `` ` ``) in the snapshot string. Meanwhile, you might lose the syntax highlighting for the snapshot content (if they are in some language).

In light of this, we introduced [`toMatchFileSnapshot()`](/api/expect#tomatchfilesnapshot) to explicitly match against a file. This allows you to assign any file extension to the snapshot file, and makes them more readable.

```ts
import { expect, it } from 'vitest'

it('render basic', async () => {
  const result = renderHTML(h('div', { class: 'foo' }))
  await expect(result).toMatchFileSnapshot('./test/basic.output.html')
})
```

It will compare with the content of `./test/basic.output.html`. And can be written back with the `--update` flag.

## Image Snapshots

It's also possible to snapshot images using [`jest-image-snapshot`](https://github.com/americanexpress/jest-image-snapshot).

```bash
npm i -D jest-image-snapshot
```

```ts
test('image snapshot', () => {
  expect(readFileSync('./test/stubs/input-image.png'))
    .toMatchImageSnapshot()
})
```

## Custom Serializer

You can add your own logic to alter how your snapshots are serialized. Like Jest, Vitest has default serializers for built-in JavaScript types, HTML elements, ImmutableJS and for React elements.

You can explicitly add custom serializer by using [`expect.addSnapshotSerializer`](/api/expect#expect-addsnapshotserializer) API.

```ts
expect.addSnapshotSerializer({
  serialize(val, config, indentation, depth, refs, printer) {
    // `printer` is a function that serializes a value using existing plugins.
    return `Pretty foo: ${printer(
      val.foo,
      config,
      indentation,
      depth,
      refs,
    )}`
  },
  test(val) {
    return val && Object.prototype.hasOwnProperty.call(val, 'foo')
  },
})
```

We also support [snapshotSerializers](/config/#snapshotserializers) option to implicitly add custom serializers.

```ts [path/to/custom-serializer.ts]
import { SnapshotSerializer } from 'vitest'

export default {
  serialize(val, config, indentation, depth, refs, printer) {
    // `printer` is a function that serializes a value using existing plugins.
    return `Pretty foo: ${printer(
      val.foo,
      config,
      indentation,
      depth,
      refs,
    )}`
  },
  test(val) {
    return val && Object.prototype.hasOwnProperty.call(val, 'foo')
  },
} satisfies SnapshotSerializer
```

```ts [vitest.config.ts]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    snapshotSerializers: ['path/to/custom-serializer.ts'],
  },
})
```

After adding a test like this:

```ts
test('foo snapshot test', () => {
  const bar = {
    foo: {
      x: 1,
      y: 2,
    },
  }

  expect(bar).toMatchSnapshot()
})
```

You will get the following snapshot:

```
Pretty foo: Object {
  "x": 1,
  "y": 2,
}
```

We are using Jest's `pretty-format` for serializing snapshots. You can read more about it here: [pretty-format](https://github.com/facebook/jest/blob/main/packages/pretty-format/README.md#serialize).

## Difference from Jest

Vitest provides an almost compatible Snapshot feature with [Jest's](https://jestjs.io/docs/snapshot-testing) with a few exceptions:

#### 1. Comment header in the snapshot file is different

```diff
- // Jest Snapshot v1, https://goo.gl/fbAQLP
+ // Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html
```

This does not really affect the functionality but might affect your commit diff when migrating from Jest.

#### 2. `printBasicPrototype` is default to `false`

Both Jest and Vitest's snapshots are powered by [`pretty-format`](https://github.com/facebook/jest/blob/main/packages/pretty-format). In Vitest we set `printBasicPrototype` default to `false` to provide a cleaner snapshot output, while in Jest <29.0.0 it's `true` by default.

```ts
import { expect, test } from 'vitest'

test('snapshot', () => {
  const bar = [
    {
      foo: 'bar',
    },
  ]

  // in Jest
  expect(bar).toMatchInlineSnapshot(`
    Array [
      Object {
        "foo": "bar",
      },
    ]
  `)

  // in Vitest
  expect(bar).toMatchInlineSnapshot(`
    [
      {
        "foo": "bar",
      },
    ]
  `)
})
```

We believe this is a more reasonable default for readability and overall DX. If you still prefer Jest's behavior, you can change your config:

```ts [vitest.config.ts]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    snapshotFormat: {
      printBasicPrototype: true,
    },
  },
})
```

#### 3. Chevron `>` is used as a separator instead of colon `:` for custom messages

Vitest uses chevron `>` as a separator instead of colon `:` for readability, when a custom message is passed during creation of a snapshot file.

For the following example test code:
```js
test('toThrowErrorMatchingSnapshot', () => {
  expect(() => {
    throw new Error('error')
  }).toThrowErrorMatchingSnapshot('hint')
})
```

In Jest, the snapshot will be:
```console
exports[`toThrowErrorMatchingSnapshot: hint 1`] = `"error"`;
```

In Vitest, the equivalent snapshot will be:
```console
exports[`toThrowErrorMatchingSnapshot > hint 1`] = `[Error: error]`;
```

#### 4. default `Error` snapshot is different for `toThrowErrorMatchingSnapshot` and `toThrowErrorMatchingInlineSnapshot`

```js
import { expect, test } from 'vitest'

test('snapshot', () => {
  // in Jest and Vitest
  expect(new Error('error')).toMatchInlineSnapshot(`[Error: error]`)

  // Jest snapshots `Error.message` for `Error` instance
  // Vitest prints the same value as toMatchInlineSnapshot
  expect(() => {
    throw new Error('error')
  }).toThrowErrorMatchingInlineSnapshot(`"error"`) // [!code --]
  }).toThrowErrorMatchingInlineSnapshot(`[Error: error]`) // [!code ++]
})
```
````

## File: docs/guide/test-annotations.md
````markdown
---
title: Test Annotations | Guide
outline: deep
---

# Test Annotations

Vitest supports annotating your tests with custom messages and files via the [`context.annotate`](/guide/test-context#annotate) API. These annotations will be attached to the test case and passed down to reporters in the [`onTestAnnotate`](/advanced/api/reporters#ontestannotate) hook.

```ts
test('hello world', async ({ annotate }) => {
  await annotate('this is my test')

  if (condition) {
    await annotate('this should\'ve errored', 'error')
  }

  const file = createTestSpecificFile()
  await annotate('creates a file', { body: file })
})
```

::: warning
The `annotate` function returns a Promise, so it needs to be awaited if you rely on it somehow. However, Vitest will also automatically await any non-awaited annotation before the test finishes.
:::

Depending on your reporter, you will see these annotations differently.

## Built-in Reporters
### default

The `default` reporter prints annotations only if the test has failed:

```
  ⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯

  FAIL  example.test.js > an example of a test with annotation
Error: thrown error
  ❯ example.test.js:11:21
      9 |    await annotate('annotation 1')
      10|    await annotate('annotation 2', 'warning')
      11|    throw new Error('thrown error')
        |          ^
      12|  })

  ❯ example.test.js:9:15 notice
    ↳ annotation 1
  ❯ example.test.js:10:15 warning
    ↳ annotation 2

  ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
```

### verbose

In a TTY terminal, the `verbose` reporter works similarly to the `default` reporter. However, in a non-TTY environment, the `verbose` reporter will also print annotations after every test.

```
✓ example.test.js > an example of a test with annotation

  ❯ example.test.js:9:15 notice
    ↳ annotation 1
  ❯ example.test.js:10:15 warning
    ↳ annotation 2

```

### html

The HTML reporter shows annotations the same way the UI does. You can see the annotation on the line where it was called. At the moment, if the annotation wasn't called in a test file, you cannot see it in the UI. We are planning to support a separate test summary view where it will be visible.

<img alt="Vitest UI" img-light src="/annotations-html-light.png">
<img alt="Vitest UI" img-dark src="/annotations-html-dark.png">

### junit

The `junit` reporter lists annotations inside the testcase's `properties` tag. The JUnit reporter will ignore all attachments and will print only the type and the message.

```xml
<testcase classname="basic/example.test.js" name="an example of a test with annotation" time="0.14315">
    <properties>
        <property name="notice" value="the message of the annotation">
        </property>
    </properties>
</testcase>
```

### github-actions

The `github-actions` reporter will print the annotation as a [notice message](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/workflow-commands-for-github-actions#setting-a-notice-message) by default. You can configure the `type` by passing down the second argument as `notice`, `warning` or `error`. If type is none of these, Vitest will show the message as a notice.

<img alt="GitHub Actions" img-light src="/annotations-gha-light.png">
<img alt="GitHub Actions" img-dark src="/annotations-gha-dark.png">

### tap

The `tap` and `tap-flat` reporters print annotations as diagnostic messages on a new line starting with a `#` symbol. They will ignore all attachments and will print only the type and message:

```
ok 1 - an example of a test with annotation # time=143.15ms
    # notice: the message of the annotation
```
````

## File: docs/guide/test-context.md
````markdown
---
title: Test Context | Guide
outline: deep
---

# Test Context

Inspired by [Playwright Fixtures](https://playwright.dev/docs/test-fixtures), Vitest's test context allows you to define utils, states, and fixtures that can be used in your tests.

## Usage

The first argument for each test callback is a test context.

```ts
import { it } from 'vitest'

it('should work', ({ task }) => {
  // prints name of the test
  console.log(task.name)
})
```

## Built-in Test Context

#### `task`

A readonly object containing metadata about the test.

#### `expect`

The `expect` API bound to the current test:

```ts
import { it } from 'vitest'

it('math is easy', ({ expect }) => {
  expect(2 + 2).toBe(4)
})
```

This API is useful for running snapshot tests concurrently because global expect cannot track them:

```ts
import { it } from 'vitest'

it.concurrent('math is easy', ({ expect }) => {
  expect(2 + 2).toMatchInlineSnapshot()
})

it.concurrent('math is hard', ({ expect }) => {
  expect(2 * 2).toMatchInlineSnapshot()
})
```

#### `skip`

```ts
function skip(note?: string): never
function skip(condition: boolean, note?: string): void
```

Skips subsequent test execution and marks test as skipped:

```ts
import { expect, it } from 'vitest'

it('math is hard', ({ skip }) => {
  skip()
  expect(2 + 2).toBe(5)
})
```

Since Vitest 3.1, it accepts a boolean parameter to skip the test conditionally:

```ts
it('math is hard', ({ skip, mind }) => {
  skip(mind === 'foggy')
  expect(2 + 2).toBe(5)
})
```

#### `annotate` <Version>3.2.0</Version> {#annotate}

```ts
function annotate(
  message: string,
  attachment?: TestAttachment,
): Promise<TestAnnotation>

function annotate(
  message: string,
  type?: string,
  attachment?: TestAttachment,
): Promise<TestAnnotation>
```

Add a [test annotation](/guide/test-annotations) that will be displayed by your [reporter](/config/#reporter).

```ts
test('annotations API', async ({ annotate }) => {
  await annotate('https://github.com/vitest-dev/vitest/pull/7953', 'issues')
})
```

#### `signal` <Version>3.2.0</Version> {#signal}

An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) that can be aborted by Vitest. The signal is aborted in these situations:

- Test times out
- User manually cancelled the test run with Ctrl+C
- [`vitest.cancelCurrentRun`](/advanced/api/vitest#cancelcurrentrun) was called programmatically
- Another test failed in parallel and the [`bail`](/config/#bail) flag is set

```ts
it('stop request when test times out', async ({ signal }) => {
  await fetch('/resource', { signal })
}, 2000)
```

#### `onTestFailed`

The [`onTestFailed`](/api/#ontestfailed) hook bound to the current test. This API is useful if you are running tests concurrently and need to have a special handling only for this specific test.

#### `onTestFinished`

The [`onTestFinished`](/api/#ontestfailed) hook bound to the current test. This API is useful if you are running tests concurrently and need to have a special handling only for this specific test.

## Extend Test Context

Vitest provides two different ways to help you extend the test context.

### `test.extend`

Like [Playwright](https://playwright.dev/docs/api/class-test#test-extend), you can use this method to define your own `test` API with custom fixtures and reuse it anywhere.

For example, we first create the `test` collector with two fixtures: `todos` and `archive`.

```ts [my-test.ts]
import { test as baseTest } from 'vitest'

const todos = []
const archive = []

export const test = baseTest.extend({
  todos: async ({}, use) => {
    // setup the fixture before each test function
    todos.push(1, 2, 3)

    // use the fixture value
    await use(todos)

    // cleanup the fixture after each test function
    todos.length = 0
  },
  archive
})
```

Then we can import and use it.

```ts [my-test.test.ts]
import { expect } from 'vitest'
import { test } from './my-test.js'

test('add items to todos', ({ todos }) => {
  expect(todos.length).toBe(3)

  todos.push(4)
  expect(todos.length).toBe(4)
})

test('move items from todos to archive', ({ todos, archive }) => {
  expect(todos.length).toBe(3)
  expect(archive.length).toBe(0)

  archive.push(todos.pop())
  expect(todos.length).toBe(2)
  expect(archive.length).toBe(1)
})
```

We can also add more fixtures or override existing fixtures by extending our `test`.

```ts
import { test as todosTest } from './my-test.js'

export const test = todosTest.extend({
  settings: {
    // ...
  }
})
```

#### Fixture initialization

Vitest runner will smartly initialize your fixtures and inject them into the test context based on usage.

```ts
import { test as baseTest } from 'vitest'

const test = baseTest.extend<{
  todos: number[]
  archive: number[]
}>({
  todos: async ({ task }, use) => {
    await use([1, 2, 3])
  },
  archive: []
})

// todos will not run
test('skip', () => {})
test('skip', ({ archive }) => {})

// todos will run
test('run', ({ todos }) => {})
```

::: warning
When using `test.extend()` with fixtures, you should always use the object destructuring pattern `{ todos }` to access context both in fixture function and test function.

```ts
test('context must be destructured', (context) => { // [!code --]
  expect(context.todos.length).toBe(2)
})

test('context must be destructured', ({ todos }) => { // [!code ++]
  expect(todos.length).toBe(2)
})
```

:::

#### Automatic fixture

Vitest also supports the tuple syntax for fixtures, allowing you to pass options for each fixture. For example, you can use it to explicitly initialize a fixture, even if it's not being used in tests.

```ts
import { test as base } from 'vitest'

const test = base.extend({
  fixture: [
    async ({}, use) => {
      // this function will run
      setup()
      await use()
      teardown()
    },
    { auto: true } // Mark as an automatic fixture
  ],
})

test('works correctly')
```

#### Default fixture

Since Vitest 3, you can provide different values in different [projects](/guide/projects). To enable this feature, pass down `{ injected: true }` to the options. If the key is not specified in the [project configuration](/config/#provide), then the default value will be used.

:::code-group
```ts [fixtures.test.ts]
import { test as base } from 'vitest'

const test = base.extend({
  url: [
    // default value if "url" is not defined in the config
    '/default',
    // mark the fixture as "injected" to allow the override
    { injected: true },
  ],
})

test('works correctly', ({ url }) => {
  // url is "/default" in "project-new"
  // url is "/full" in "project-full"
  // url is "/empty" in "project-empty"
})
```
```ts [vitest.config.ts]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: 'project-new',
        },
      },
      {
        test: {
          name: 'project-full',
          provide: {
            url: '/full',
          },
        },
      },
      {
        test: {
          name: 'project-empty',
          provide: {
            url: '/empty',
          },
        },
      },
    ],
  },
})
```
:::

#### Scoping Values to Suite <Version>3.1.0</Version> {#scoping-values-to-suite}

Since Vitest 3.1, you can override context values per suite and its children by using the `test.scoped` API:

```ts
import { test as baseTest, describe, expect } from 'vitest'

const test = baseTest.extend({
  dependency: 'default',
  dependant: ({ dependency }, use) => use({ dependency })
})

describe('use scoped values', () => {
  test.scoped({ dependency: 'new' })

  test('uses scoped value', ({ dependant }) => {
    // `dependant` uses the new overriden value that is scoped
    // to all tests in this suite
    expect(dependant).toEqual({ dependency: 'new' })
  })

  describe('keeps using scoped value', () => {
    test('uses scoped value', ({ dependant }) => {
      // nested suite inherited the value
      expect(dependant).toEqual({ dependency: 'new' })
    })
  })
})

test('keep using the default values', ({ dependant }) => {
  // the `dependency` is using the default
  // value outside of the suite with .scoped
  expect(dependant).toEqual({ dependency: 'default' })
})
```

This API is particularly useful if you have a context value that relies on a dynamic variable like a database connection:

```ts
const test = baseTest.extend<{
  db: Database
  schema: string
}>({
  db: async ({ schema }, use) => {
    const db = await createDb({ schema })
    await use(db)
    await cleanup(db)
  },
  schema: '',
})

describe('one type of schema', () => {
  test.scoped({ schema: 'schema-1' })

  // ... tests
})

describe('another type of schema', () => {
  test.scoped({ schema: 'schema-2' })

  // ... tests
})
```

#### Per-Scope Context <Version>3.2.0</Version>

You can define context that will be initiated once per file or a worker. It is initiated the same way as a regular fixture with an objects parameter:

```ts
import { test as baseTest } from 'vitest'

export const test = baseTest.extend({
  perFile: [
    ({}, { use }) => use([]),
    { scope: 'file' },
  ],
  perWorker: [
    ({}, { use }) => use([]),
    { scope: 'worker' },
  ],
})
```

The value is initialised the first time any test has accessed it, unless the fixture options have `auto: true` - in this case the value is initialised before any test has run.

```ts
const test = baseTest.extend({
  perFile: [
    ({}, { use }) => use([]),
    {
      scope: 'file',
      // always run this hook before any test
      auto: true
    },
  ],
})
```

The `worker` scope will run the fixture once per worker. The number of running workers depends on various factors. By default, every file runs in a separate worker, so `file` and `worker` scopes work the same way.

However, if you disable [isolation](/config/#isolate), then the number of workers is limited by the [`maxWorkers`](/config/#maxworkers) or [`poolOptions`](/config/#pooloptions) configuration.

Note that specifying `scope: 'worker'` when running tests in `vmThreads` or `vmForks` will work the same way as `scope: 'file'`. This limitation exists because every test file has its own VM context, so if Vitest were to initiate it once, one context could leak to another and create many reference inconsistencies (instances of the same class would reference different constructors, for example).

#### TypeScript

To provide fixture types for all your custom contexts, you can pass the fixtures type as a generic.

```ts
interface MyFixtures {
  todos: number[]
  archive: number[]
}

const test = baseTest.extend<MyFixtures>({
  todos: [],
  archive: []
})

test('types are defined correctly', ({ todos, archive }) => {
  expectTypeOf(todos).toEqualTypeOf<number[]>()
  expectTypeOf(archive).toEqualTypeOf<number[]>()
})
```

::: info Type Infering
Note that Vitest doesn't support infering the types when the `use` function is called. It is always preferable to pass down the whole context type as the generic type when `test.extend` is called:

```ts
import { test as baseTest } from 'vitest'

const test = baseTest.extend<{
  todos: number[]
  schema: string
}>({
  todos: ({ schema }, use) => use([]),
  schema: 'test'
})

test('types are correct', ({
  todos, // number[]
  schema, // string
}) => {
  // ...
})
```
:::

### `beforeEach` and `afterEach`

::: danger Deprecated
This is an outdated way of extending context and it will not work when the `test` is extended with `test.extend`.
:::

The contexts are different for each test. You can access and extend them within the `beforeEach` and `afterEach` hooks.

```ts
import { beforeEach, it } from 'vitest'

beforeEach(async (context) => {
  // extend context
  context.foo = 'bar'
})

it('should work', ({ foo }) => {
  console.log(foo) // 'bar'
})
```

#### TypeScript

To provide property types for all your custom contexts, you can augment the `TestContext` type by adding

```ts
declare module 'vitest' {
  export interface TestContext {
    foo?: string
  }
}
```

If you want to provide property types only for specific `beforeEach`, `afterEach`, `it` and `test` hooks, you can pass the type as a generic.

```ts
interface LocalTestContext {
  foo: string
}

beforeEach<LocalTestContext>(async (context) => {
  // typeof context is 'TestContext & LocalTestContext'
  context.foo = 'bar'
})

it<LocalTestContext>('should work', ({ foo }) => {
  // typeof foo is 'string'
  console.log(foo) // 'bar'
})
```
````

## File: docs/guide/testing-types.md
````markdown
---
title: Testing Types | Guide
---

# Testing Types

::: tip Sample Project

[GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/typecheck) - [Play Online](https://stackblitz.com/fork/github/vitest-dev/vitest/tree/main/examples/typecheck?initialPath=__vitest__/)

:::

Vitest allows you to write tests for your types, using `expectTypeOf` or `assertType` syntaxes. By default all tests inside `*.test-d.ts` files are considered type tests, but you can change it with [`typecheck.include`](/config/#typecheck-include) config option.

Under the hood Vitest calls `tsc` or `vue-tsc`, depending on your config, and parses results. Vitest will also print out type errors in your source code, if it finds any. You can disable it with [`typecheck.ignoreSourceErrors`](/config/#typecheck-ignoresourceerrors) config option.

Keep in mind that Vitest doesn't run these files, they are only statically analyzed by the compiler. Meaning, that if you use a dynamic name or `test.each` or `test.for`, the test name will not be evaluated - it will be displayed as is.

::: warning
Before Vitest 2.1, your `typecheck.include` overrode the `include` pattern, so your runtime tests did not actually run; they were only type-checked.

Since Vitest 2.1, if your `include` and `typecheck.include` overlap, Vitest will report type tests and runtime tests as separate entries.
:::

Using CLI flags, like `--allowOnly` and `-t` are also supported for type checking.

```ts [mount.test-d.ts]
import { assertType, expectTypeOf } from 'vitest'
import { mount } from './mount.js'

test('my types work properly', () => {
  expectTypeOf(mount).toBeFunction()
  expectTypeOf(mount).parameter(0).toMatchTypeOf<{ name: string }>()

  // @ts-expect-error name is a string
  assertType(mount({ name: 42 }))
})
```

Any type error triggered inside a test file will be treated as a test error, so you can use any type trick you want to test types of your project.

You can see a list of possible matchers in [API section](/api/expect-typeof).

## Reading Errors

If you are using `expectTypeOf` API, refer to the [expect-type documentation on its error messages](https://github.com/mmkal/expect-type#error-messages).

When types don't match, `.toEqualTypeOf` and `.toMatchTypeOf` use a special helper type to produce error messages that are as actionable as possible. But there's a bit of an nuance to understanding them. Since the assertions are written "fluently", the failure should be on the "expected" type, not the "actual" type (`expect<Actual>().toEqualTypeOf<Expected>()`). This means that type errors can be a little confusing - so this library produces a `MismatchInfo` type to try to make explicit what the expectation is. For example:

```ts
expectTypeOf({ a: 1 }).toEqualTypeOf<{ a: string }>()
```

Is an assertion that will fail, since `{a: 1}` has type `{a: number}` and not `{a: string}`.  The error message in this case will read something like this:

```
test/test.ts:999:999 - error TS2344: Type '{ a: string; }' does not satisfy the constraint '{ a: \\"Expected: string, Actual: number\\"; }'.
  Types of property 'a' are incompatible.
    Type 'string' is not assignable to type '\\"Expected: string, Actual: number\\"'.

999 expectTypeOf({a: 1}).toEqualTypeOf<{a: string}>()
```

Note that the type constraint reported is a human-readable messaging specifying both the "expected" and "actual" types. Rather than taking the sentence `Types of property 'a' are incompatible // Type 'string' is not assignable to type "Expected: string, Actual: number"` literally - just look at the property name (`'a'`) and the message: `Expected: string, Actual: number`. This will tell you what's wrong, in most cases. Extremely complex types will of course be more effort to debug, and may require some experimentation. Please [raise an issue](https://github.com/mmkal/expect-type) if the error messages are actually misleading.

The `toBe...` methods (like `toBeString`, `toBeNumber`, `toBeVoid` etc.) fail by resolving to a non-callable type when the `Actual` type under test doesn't match up. For example, the failure for an assertion like `expectTypeOf(1).toBeString()` will look something like this:

```
test/test.ts:999:999 - error TS2349: This expression is not callable.
  Type 'ExpectString<number>' has no call signatures.

999 expectTypeOf(1).toBeString()
                    ~~~~~~~~~~
```

The `This expression is not callable` part isn't all that helpful - the meaningful error is the next line, `Type 'ExpectString<number> has no call signatures`. This essentially means you passed a number but asserted it should be a string.

If TypeScript added support for ["throw" types](https://github.com/microsoft/TypeScript/pull/40468) these error messages could be improved significantly. Until then they will take a certain amount of squinting.

#### Concrete "expected" objects vs typeargs

Error messages for an assertion like this:

```ts
expectTypeOf({ a: 1 }).toEqualTypeOf({ a: '' })
```

Will be less helpful than for an assertion like this:

```ts
expectTypeOf({ a: 1 }).toEqualTypeOf<{ a: string }>()
```

This is because the TypeScript compiler needs to infer the typearg for the `.toEqualTypeOf({a: ''})` style, and this library can only mark it as a failure by comparing it against a generic `Mismatch` type. So, where possible, use a typearg rather than a concrete type for `.toEqualTypeOf` and `toMatchTypeOf`. If it's much more convenient to compare two concrete types, you can use `typeof`:

```ts
const one = valueFromFunctionOne({ some: { complex: inputs } })
const two = valueFromFunctionTwo({ some: { other: inputs } })

expectTypeOf(one).toEqualTypeOf<typeof two>()
```

If you find it hard working with `expectTypeOf` API and figuring out errors, you can always use more simple `assertType` API:

```ts
const answer = 42

assertType<number>(answer)
// @ts-expect-error answer is not a string
assertType<string>(answer)
```

::: tip
When using `@ts-expect-error` syntax, you might want to make sure that you didn't make a typo. You can do that by including your type files in [`test.include`](/config/#include) config option, so Vitest will also actually *run* these tests and fail with `ReferenceError`.

This will pass, because it expects an error, but the word “answer” has a typo, so it's a false positive error:

```ts
// @ts-expect-error answer is not a string
assertType<string>(answr)
```
:::

## Run Typechecking

To enable typechecking, just add [`--typecheck`](/config/#typecheck) flag to your Vitest command in `package.json`:

```json [package.json]
{
  "scripts": {
    "test": "vitest --typecheck"
  }
}
```

Now you can run typecheck:

::: code-group
```bash [npm]
npm run test
```
```bash [yarn]
yarn test
```
```bash [pnpm]
pnpm run test
```
```bash [bun]
bun test
```
:::

Vitest uses `tsc --noEmit` or `vue-tsc --noEmit`, depending on your configuration, so you can remove these scripts from your pipeline.
````

## File: docs/guide/ui.md
````markdown
---
title: Vitest UI | Guide
---

# Vitest UI

Powered by Vite, Vitest also has a dev server under the hood when running the tests. This allows Vitest to provide a beautiful UI to view and interact with your tests. The Vitest UI is optional, so you'll need to install it with:

```bash
npm i -D @vitest/ui
```

Then you can start the tests with UI by passing the `--ui` flag:

```bash
vitest --ui
```

Then you can visit the Vitest UI at <a href="http://localhost:51204/__vitest__/">`http://localhost:51204/__vitest__/`</a>

::: warning
The UI is interactive and requires a running Vite server, so make sure to run Vitest in `watch` mode (the default). Alternatively, you can generate a static HTML report that looks identical to the Vitest UI by specifying `html` in config's `reporters` option.
:::

<img alt="Vitest UI" img-light src="/ui-1-light.png">
<img alt="Vitest UI" img-dark src="/ui-1-dark.png">

UI can also be used as a reporter. Use `'html'` reporter in your Vitest configuration to generate HTML output and preview the results of your tests:

```ts [vitest.config.ts]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    reporters: ['html'],
  },
})
```

You can check your coverage report in Vitest UI: see [Vitest UI Coverage](/guide/coverage#vitest-ui) for more details.

::: warning
If you still want to see how your tests are running in real time in the terminal, don't forget to add `default` reporter to `reporters` option: `['default', 'html']`.
:::

::: tip
To preview your HTML report, you can use the [vite preview](https://vitejs.dev/guide/cli.html#vite-preview) command:

```sh
npx vite preview --outDir ./html
```

You can configure output with [`outputFile`](/config/#outputfile) config option. You need to specify `.html` path there. For example, `./html/index.html` is the default value.
:::
````

## File: docs/guide/using-plugins.md
````markdown
---
title: Using Plugins | Guide
---

# Using Plugins

Vitest can be extended using plugins, similar to how Vite plugins work. This allows you to enhance and customize Vitest's functionality by using the same API and concepts of Vite plugins.

For detailed guidance on how to write plugins, you can refer to the [Vite plugin documentation](https://vitejs.dev/guide/api-plugin).
````

## File: docs/guide/why.md
````markdown
---
title: Why Vitest | Guide
---

# Why Vitest

:::tip NOTE
This guide assumes that you are familiar with Vite. A good way to start learning more is to read the [Why Vite Guide](https://vitejs.dev/guide/why.html), and [Next generation frontend tooling with ViteJS](https://www.youtube.com/watch?v=UJypSr8IhKY), a stream where [Evan You](https://bsky.app/profile/evanyou.me) did a demo explaining the main concepts.
:::

## The Need for a Vite Native Test Runner

Vite's out-of-the-box support for common web patterns, features like glob imports and SSR primitives, and its many plugins and integrations are fostering a vibrant ecosystem. Its dev and build story are key to its success. For docs, there are several SSG-based alternatives powered by Vite. Vite's Unit Testing story hasn't been clear though. Existing options like [Jest](https://jestjs.io/) were created in a different context. There is a lot of duplication between Jest and Vite, forcing users to configure two different pipelines.

Using Vite dev server to transform your files during testing, enables the creation of a simple runner that doesn't need to deal with the complexity of transforming source files and can solely focus on providing the best DX during testing. A test runner that uses the same configuration of your App (through `vite.config.js`), sharing a common transformation pipeline during dev, build, and test time. That is extensible with the same plugin API that lets you and the maintainers of your tools provide first-class integration with Vite. A tool that is built with Vite in mind from the start, taking advantage of its improvements in DX, like its instant Hot Module Reload (HMR). This is Vitest, a next generation testing framework powered by Vite.

Given Jest's massive adoption, Vitest provides a compatible API that allows you to use it as a drop-in replacement in most projects. It also includes the most common features required when setting up your unit tests (mocking, snapshots, coverage). Vitest cares a lot about performance and uses Worker threads to run as much as possible in parallel. Some ports have seen test running an order of magnitude faster. Watch mode is enabled by default, aligning itself with the way Vite pushes for a dev first experience. Even with all these improvements in DX, Vitest stays lightweight by carefully choosing its dependencies (or directly inlining needed pieces).

**Vitest aims to position itself as the Test Runner of choice for Vite projects, and as a solid alternative even for projects not using Vite.**

Continue reading in the [Getting Started Guide](./index)

## How is Vitest Different from X?

You can check out the [Comparisons](./comparisons) section for more details on how Vitest differs from other similar tools.
````

## File: docs/public/bit.svg
````
<svg width="101" height="100" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50.1295 92.2747C73.6014 92.2747 92.6291 73.3487 92.6291 50.0023C92.6291 26.656 73.6014 7.72998 50.1295 7.72998C26.6576 7.72998 7.62988 26.656 7.62988 50.0023C7.62988 73.3487 26.6576 92.2747 50.1295 92.2747Z" fill="url(#paint0_linear_106_15836)" fill-opacity="0.6"/>
<path d="M50.1295 92.2747C73.6014 92.2747 92.6291 73.3487 92.6291 50.0023C92.6291 26.656 73.6014 7.72998 50.1295 7.72998C26.6576 7.72998 7.62988 26.656 7.62988 50.0023C7.62988 73.3487 26.6576 92.2747 50.1295 92.2747Z" fill="url(#paint1_linear_106_15836)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.72998 49.9998C0.72998 22.8603 22.8492 0.859375 50.1346 0.859375C77.4201 0.859375 99.5393 22.8603 99.5393 49.9998C99.5393 77.1394 77.4201 99.1403 50.1346 99.1403C22.8492 99.1403 0.72998 77.1394 0.72998 49.9998ZM50.1346 4.4117C24.8216 4.4117 4.3014 24.8222 4.3014 49.9998C4.3014 75.1775 24.8216 95.588 50.1346 95.588C75.4476 95.588 95.9678 75.1775 95.9678 49.9998C95.9678 24.8222 75.4476 4.4117 50.1346 4.4117Z" fill="url(#paint2_linear_106_15836)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.7526 15.828C36.2087 16.6978 35.8694 17.7706 34.995 18.2242C27.346 22.1916 22.4683 26.5479 18.1805 34.5213C17.7154 35.3863 16.6333 35.7124 15.7637 35.2497C14.894 34.7871 14.5662 33.7108 15.0313 32.8458C19.696 24.1716 25.1331 19.3331 33.3436 15.0744C34.2181 14.6208 35.2966 14.9582 35.7526 15.828Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.8985 53.9351C45.8985 58.7567 43.0099 61.861 37.8304 61.861C35.9711 61.861 34.2446 61.4977 32.9165 60.7382C31.3892 59.8795 31.3892 58.7897 31.3892 57.6669V40.9894C31.3892 39.8005 32.1196 39.2061 33.6137 39.2061C35.1078 39.2061 35.8383 39.8005 35.8383 40.9894V47.3301C36.6683 46.7687 37.764 46.5045 39.0257 46.5045C43.0764 46.5045 45.8985 49.1795 45.8985 53.9351ZM35.8383 57.799C36.4027 58.1292 37.0999 58.2943 37.8636 58.2943C40.0217 58.2943 41.3498 56.8412 41.3498 54.2323C41.3498 51.5903 39.9885 50.0712 37.93 50.0712C37.1331 50.0712 36.4027 50.3024 35.8383 50.7317V57.799ZM54.2157 42.1453C54.2157 43.6644 53.12 44.7212 51.5927 44.7212C50.0654 44.7212 48.9698 43.6644 48.9698 42.1453C48.9698 40.6261 50.0654 39.6024 51.5927 39.6024C53.12 39.6024 54.2157 40.6261 54.2157 42.1453ZM53.8173 48.2878V60.0116C53.8173 61.2005 53.0868 61.7949 51.5927 61.7949C50.0986 61.7949 49.3682 61.2005 49.3682 60.0116V48.2878C49.3682 47.099 50.0986 46.5045 51.5927 46.5045C53.0868 46.5045 53.8173 47.099 53.8173 48.2878ZM67.2808 57.832C68.5093 57.832 68.8745 59.1199 68.8745 59.8465C68.8745 60.3088 68.7085 60.7712 68.0776 61.1345C67.3472 61.5638 66.0855 61.861 64.7906 61.861C62.4001 61.861 60.9724 60.9033 60.2419 59.5823C59.5779 58.3934 59.5115 56.9733 59.5115 55.4542V50.5005H58.3494C57.1541 50.5005 56.5565 49.9061 56.5565 48.6511C56.5565 47.3962 57.1541 46.8017 58.3494 46.8017H59.5115V43.8956C59.5115 42.7067 60.2419 42.1122 61.736 42.1122C63.2301 42.1122 63.9606 42.7067 63.9606 43.8956V46.8017H66.7496C67.9448 46.8017 68.5425 47.3962 68.5425 48.6511C68.5425 49.9061 67.9448 50.5005 66.7496 50.5005H63.9606V55.4542C63.9606 56.0487 63.9606 56.9073 64.2594 57.4687C64.4918 57.9311 64.9234 58.1292 65.4879 58.1292C65.8531 58.1292 66.2183 58.0301 66.5171 57.9641C66.7828 57.898 67.0152 57.832 67.2808 57.832Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_106_15836" x1="2.84341" y1="-36.7972" x2="92.0267" y2="79.3023" gradientUnits="userSpaceOnUse">
<stop offset="0.338542" stop-color="#FA72A1" stop-opacity="0"/>
<stop offset="1" stop-color="#FA72A1"/>
</linearGradient>
<linearGradient id="paint1_linear_106_15836" x1="31.2936" y1="31.3595" x2="95.2133" y2="110.372" gradientUnits="userSpaceOnUse">
<stop offset="0.015625" stop-color="#2A00BB"/>
<stop offset="1" stop-color="#861D89"/>
</linearGradient>
<linearGradient id="paint2_linear_106_15836" x1="82.719" y1="93.2156" x2="13.8212" y2="9.26318" gradientUnits="userSpaceOnUse">
<stop stop-color="#BE51A6"/>
<stop offset="1" stop-color="#3400EA"/>
</linearGradient>
</defs>
</svg>
````

## File: docs/public/bolt.svg
````
<svg width="395" height="171" viewBox="0 -30 395 231" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M186.72 150.388c-36.103 0-54.471-21.113-54.471-47.504 0-31.247 24.913-59.5381 61.016-59.5381 36.102 0 54.471 21.1128 54.471 47.5037 0 31.2474-24.914 59.5384-61.016 59.5384Zm1.478-33.57c12.667 0 20.69-11.401 20.69-24.0682 0-10.1341-6.545-15.8346-17.101-15.8346-12.668 0-20.691 11.4009-20.691 24.0688 0 10.134 6.545 15.834 17.102 15.834ZM286.192 147.854h-38.003L279.225 7.03194h38.003L286.192 147.854Z" fill="#000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M74.6735 150.388c-11.612 0-23.0129-4.223-29.5579-13.301l-2.3085 10.707L.186035 170.436l4.601135-22.642L35.826 7.03194h38.003L62.8504 56.647c8.8673-9.7119 17.1013-13.3011 27.6577-13.3011 22.8019 0 38.0029 14.9901 38.0029 42.4367 0 28.2914-17.524 64.6054-53.8375 64.6054Zm14.5678-56.5826c0 13.0896-9.2896 23.0126-21.3239 23.0126-6.7561 0-12.8788-2.533-16.8902-6.967l5.9116-25.9686c4.4337-4.4336 9.5007-6.9672 15.4123-6.9672 9.0785 0 16.8902 6.7561 16.8902 16.8902Z" fill="#000"/><path d="M356.767 150.388c-21.958 0-37.581-8.023-37.581-25.758 0-1.478.211-5.067.844-8.023l8.234-37.7916h-16.89l7.39-32.936h16.89l6.122-27.8688L384.321.436035 379.78 18.0536l-6.123 27.8258h20.69l-7.389 32.936h-20.691l-5.489 24.9126c-.422 1.901-.633 4.012-.633 4.856 0 4.856 2.955 8.234 9.5 8.234 1.9 0 4.645-.633 5.278-1.055v30.402c-4.011 2.745-11.189 4.223-18.156 4.223Z" fill="#000"/></svg>
````

## File: docs/public/infosupport.svg
````
<?xml version="1.0" encoding="UTF-8"?>
<svg width="117px" height="33px" viewBox="0 0 117 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch -->
    <title>Group 58</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <polygon id="path-1" points="0.5863 0.1676 5.7533 0.1676 5.7533 6 0.5863 6"></polygon>
    </defs>
    <g id="001_home_v1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="001a_home_desktophd_v3" transform="translate(-135.000000, -63.000000)">
            <g id="Group-58" transform="translate(135.000000, 63.000000)">
                <path d="M43.844,26.3399 C45.784,26.3189 48.028,25.1469 49.313,24.0499 C52.807,21.2929 54.288,16.2309 52.833,12.0169 C52.742,11.7539 52.625,11.4759 52.501,11.1789 C52.052,10.1159 51.546,8.9129 51.891,7.6079 C52.403,5.7059 54.24,4.6779 55.807,4.6459 L115.508,4.6459 L116.501,0.0059 L55.11,0.0059 C53.022,0.0109 50.698,1.1149 49.179,2.8289 C47.049,5.1309 46.32,8.8059 47.404,11.7689 C48.011,13.2019 49.399,16.4989 47.582,18.9329 C46.369,20.6769 44.498,21.6769 42.599,21.6139 L17.013,21.6139 L16.038,26.3379 L43.844,26.3399 Z" id="Fill-1" fill="#0094D8"></path>
                <path d="M47.4065,11.7804 C47.4055,11.7764 47.4055,11.7734 47.4035,11.7704 C47.4005,11.7624 47.3965,11.7544 47.3935,11.7454 L47.4065,11.7804 Z" id="Fill-3" fill="#0094D8"></path>
                <polygon id="Fill-5" fill="#0094D8" points="19.6272 0.0001 18.6292 4.5961 13.6772 4.5961 14.6382 0.0001"></polygon>
                <polygon id="Fill-7" fill="#0094D8" points="13.5271 29.2501 8.6431 29.2501 13.3641 6.1521 18.3161 6.1521"></polygon>
                <path d="M28.6555,12.3067 C29.3625,8.9847 27.2435,8.2467 25.4355,8.2467 C23.4305,8.2467 22.0425,9.6087 21.4885,10.2327 L21.4425,10.2327 L21.7935,8.5807 L19.9455,8.5807 L17.4605,20.2497 L19.4235,20.2497 L20.7775,13.8907 C21.4505,10.7227 23.5665,10.0097 24.6815,10.0097 C26.6005,10.0097 26.9625,11.0357 26.5315,13.0667 L25.0025,20.2497 L26.9655,20.2497 L28.6555,12.3067 Z" id="Fill-9" fill="#0094D8"></path>
                <path d="M35.5461,10.2096 L35.8911,8.5816 L33.9271,8.5816 L34.2361,7.1316 C34.4351,6.1946 34.8381,5.7676 35.6861,5.7676 C35.9321,5.7676 36.2411,5.7926 36.4791,5.8146 L36.8531,4.0526 C36.5461,4.0296 36.2621,4.0066 35.9701,4.0066 C34.0511,4.0066 32.7671,4.8106 32.3891,6.5736 L31.9641,8.5816 L30.3581,8.5816 L30.0111,10.2096 L31.6161,10.2096 L29.4811,20.2516 L31.4471,20.2516 L33.5791,10.2096 L35.5461,10.2096 Z" id="Fill-11" fill="#0094D8"></path>
                <path d="M43.6692,14.4054 C43.3392,15.9674 42.1402,18.8674 39.3302,18.8674 C36.5182,18.8674 36.5562,15.9674 36.8882,14.4054 C37.2182,12.8414 38.4172,9.9444 41.2282,9.9444 C44.0402,9.9444 44.0042,12.8414 43.6692,14.4054 M41.5892,8.2474 C37.8632,8.2474 35.4982,11.3934 34.8582,14.4054 C34.2172,17.4184 35.2452,20.5634 38.9692,20.5634 C42.6962,20.5634 45.0602,17.4184 45.7002,14.4054 C46.3422,11.3934 45.3142,8.2474 41.5892,8.2474" id="Fill-13" fill="#0094D8"></path>
                <path d="M64.1882,20.1544 L66.6692,8.4854 L64.7062,8.4854 L63.3382,14.9104 C62.9792,16.6074 61.7782,18.7924 59.3012,18.7924 C58.0292,18.7924 57.1842,18.1464 57.5932,16.2264 L59.2392,8.4854 L57.2762,8.4854 L55.4922,16.8734 C54.8962,19.6644 56.7982,20.4884 58.5152,20.4884 C60.3902,20.4884 61.5472,19.7734 62.6602,18.4144 L62.6972,18.4574 L62.3352,20.1544 L64.1882,20.1544 Z" id="Fill-15" fill="#0094D8"></path>
                <path d="M75.3405,14.2862 C74.7945,16.8522 73.3795,18.7942 71.2365,18.7942 C69.9885,18.7942 68.2215,17.9682 68.8785,14.8652 C69.2835,12.9702 70.2465,9.9132 73.0795,9.9132 C76.1135,9.9132 75.6585,12.7902 75.3405,14.2862 M73.8125,8.1502 C71.6945,8.1502 70.5205,9.4672 69.9095,10.1362 L69.8645,10.1362 L70.2165,8.4862 L68.3635,8.4862 L64.8995,24.7712 L66.8635,24.7712 L68.1065,18.9282 L68.1525,18.9282 C68.4905,19.7542 69.3585,20.4902 70.9225,20.4902 C74.8935,20.4902 76.8445,16.7622 77.4375,13.9732 C78.1345,10.6922 76.9135,8.1502 73.8125,8.1502" id="Fill-17" fill="#0094D8"></path>
                <path d="M87.1452,14.2862 C86.6012,16.8522 85.1822,18.7942 83.0422,18.7942 C81.7902,18.7942 80.0252,17.9682 80.6852,14.8652 C81.0872,12.9702 82.0482,9.9132 84.8832,9.9132 C87.9172,9.9132 87.4602,12.7902 87.1452,14.2862 M85.6162,8.1502 C83.4962,8.1502 82.3242,9.4672 81.7122,10.1362 L81.6662,10.1362 L82.0202,8.4862 L80.1662,8.4862 L76.7032,24.7712 L78.6672,24.7712 L79.9122,18.9282 L79.9562,18.9282 C80.2912,19.7542 81.1622,20.4902 82.7232,20.4902 C86.6972,20.4902 88.6502,16.7622 89.2412,13.9732 C89.9402,10.6922 88.7172,8.1502 85.6162,8.1502" id="Fill-19" fill="#0094D8"></path>
                <path d="M99.2585,14.3106 C98.9265,15.8706 97.7305,18.7706 94.9165,18.7706 C92.1075,18.7706 92.1435,15.8706 92.4755,14.3106 C92.8075,12.7456 94.0045,9.8466 96.8165,9.8466 C99.6265,9.8466 99.5905,12.7456 99.2585,14.3106 M97.1775,8.1496 C93.4515,8.1496 91.0865,11.2966 90.4455,14.3106 C89.8065,17.3226 90.8315,20.4656 94.5605,20.4656 C98.2835,20.4656 100.6495,17.3226 101.2895,14.3106 C101.9305,11.2966 100.9045,8.1496 97.1775,8.1496" id="Fill-21" fill="#0094D8"></path>
                <path d="M104.9245,13.3712 C105.2875,11.6742 106.7485,10.2482 108.5795,10.2482 L109.3145,10.2482 L109.7495,8.2182 C109.6015,8.1732 109.4925,8.1512 109.2475,8.1512 C107.7775,8.1512 106.5555,9.0652 105.4865,10.4272 L105.4405,10.4272 L105.8535,8.4842 L104.0005,8.4842 L101.5195,20.1542 L103.4825,20.1542 L104.9245,13.3712 Z" id="Fill-23" fill="#0094D8"></path>
                <path d="M116.1482,10.1139 L116.4942,8.4849 L114.6192,8.4849 L115.3122,5.4929 L113.3482,5.4929 L112.6562,8.4849 L111.0722,8.4849 L110.7262,10.1139 L112.3102,10.1139 L110.6712,17.8139 C110.3752,19.2189 110.5672,20.3099 112.5042,20.3099 C112.7092,20.3099 113.2852,20.2219 114.0142,20.1549 L114.3382,18.6139 L113.6492,18.6139 C113.2472,18.6139 112.4662,18.6139 112.6612,17.6979 L114.2732,10.1139 L116.1482,10.1139 Z" id="Fill-25" fill="#0094D8"></path>
                <polygon id="Fill-27" fill="#0094D8" points="0.9763 21.5997 0.0003 26.3247 7.3733 26.3127 8.3463 21.5997"></polygon>
                <path d="M56.7829,31.3302 C56.8569,31.4782 56.9299,31.5522 57.0789,31.6262 C57.2259,31.6992 57.2999,31.7732 57.5209,31.7732 C57.6689,31.7732 57.8159,31.8482 58.0379,31.8482 C58.1849,31.8482 58.3339,31.8482 58.4069,31.7732 C58.5539,31.7732 58.6289,31.6992 58.7759,31.6262 C58.8499,31.5522 58.9979,31.4782 59.0709,31.4042 C59.1449,31.3302 59.1449,31.1832 59.1449,31.0352 C59.1449,30.8882 59.0709,30.8132 58.9979,30.6662 C58.9239,30.5932 58.7759,30.5182 58.6289,30.4442 C58.4809,30.3712 58.3339,30.2972 58.1849,30.2972 C58.0379,30.2242 57.8159,30.2242 57.6689,30.1492 C57.4469,30.0752 57.2999,30.0022 57.1519,29.9282 C57.0049,29.8542 56.8569,29.7802 56.7099,29.6332 C56.5609,29.4852 56.4879,29.3382 56.3409,29.1892 C56.2659,29.0422 56.1919,28.8202 56.1919,28.5252 C56.1919,28.2302 56.2659,27.9342 56.4139,27.7142 C56.5609,27.4922 56.7099,27.2702 56.9299,27.1232 C57.1519,26.9762 57.3739,26.9012 57.6689,26.8282 C57.9649,26.7542 58.2599,26.7542 58.4809,26.7542 C58.7759,26.7542 59.0709,26.7542 59.2929,26.8282 C59.5889,26.9012 59.8089,26.9762 59.9569,27.1232 C60.1789,27.2702 60.3259,27.4922 60.3999,27.7142 C60.5479,27.9342 60.5479,28.2302 60.5479,28.6002 L59.2929,28.6002 C59.2929,28.4522 59.2929,28.3042 59.2199,28.1562 C59.1449,28.0832 59.0709,27.9342 58.9979,27.8612 C58.9239,27.7872 58.7759,27.7142 58.6289,27.7142 C58.4809,27.7142 58.3339,27.6402 58.1849,27.6402 L57.8159,27.6402 C57.6689,27.6402 57.5949,27.7142 57.5209,27.7872 L57.2999,28.0092 C57.2259,28.0832 57.2259,28.2302 57.2259,28.3782 C57.2259,28.5252 57.2999,28.6002 57.3739,28.7472 C57.4469,28.8202 57.5949,28.8942 57.7429,28.9692 C57.8899,29.0422 58.0379,29.1162 58.1849,29.1162 C58.3339,29.1162 58.4809,29.1892 58.5539,29.1892 C58.7759,29.2642 58.9979,29.3382 59.2199,29.4112 C59.4399,29.4852 59.5889,29.5592 59.7359,29.7072 C59.8839,29.8542 59.9569,30.0022 60.0309,30.1492 C60.1049,30.2972 60.1789,30.5182 60.1789,30.8132 C60.1789,31.1832 60.1049,31.4782 59.9569,31.6992 C59.8089,31.9212 59.6619,32.1422 59.3669,32.2902 C59.1449,32.4372 58.8499,32.5852 58.6289,32.5852 C58.3339,32.6592 58.0379,32.6592 57.8159,32.6592 C57.0049,32.6592 56.4139,32.5122 55.9709,32.1422 C55.6019,31.8482 55.3809,31.3302 55.3809,30.5932 L56.6359,30.5932 C56.7099,31.0352 56.7099,31.1832 56.7829,31.3302" id="Fill-29" fill="#0094D8"></path>
                <path d="M62.1716,31.4044 C62.1716,31.5514 62.2456,31.6264 62.3186,31.6994 C62.3936,31.7734 62.4666,31.8474 62.6146,31.9214 C62.6886,31.9954 62.8356,31.9954 62.9836,31.9954 C63.2046,31.9954 63.3536,31.9214 63.5736,31.8474 C63.7216,31.6994 63.8696,31.5514 63.9426,31.4044 C64.0176,31.2574 64.0906,31.0354 64.1646,30.8134 C64.2386,30.5924 64.2386,30.4444 64.2386,30.2234 C64.2386,29.9274 64.1646,29.7074 64.0176,29.5584 C63.9426,29.4114 63.7216,29.3384 63.3536,29.3384 C63.1316,29.3384 62.9836,29.4114 62.8356,29.4854 C62.6886,29.6334 62.5406,29.7804 62.4666,29.9274 C62.3186,30.0754 62.2456,30.2974 62.2456,30.5184 C62.1716,30.7404 62.1716,30.8874 62.1716,31.1094 L62.1716,31.4044 M61.1386,30.0754 C61.2856,29.7804 61.4336,29.4854 61.6546,29.2634 C61.8766,29.0424 62.0986,28.8204 62.3936,28.6734 C62.6886,28.5254 63.0576,28.4524 63.4266,28.4524 C63.7216,28.4524 64.0176,28.4524 64.2386,28.5254 C64.4596,28.5994 64.6816,28.6734 64.8286,28.8204 C64.9766,28.9684 65.1246,29.1164 65.1976,29.3384 C65.2726,29.5584 65.3456,29.8544 65.3456,30.1494 C65.3456,30.5184 65.2726,30.8874 65.1976,31.1824 C65.1246,31.4784 64.9026,31.7734 64.6816,31.9954 C64.4596,32.2164 64.2386,32.4374 63.9426,32.5854 C63.6486,32.7334 63.2786,32.8064 62.9096,32.8064 C62.3186,32.8064 61.8766,32.6594 61.5076,32.3644 C61.1386,32.0684 60.9906,31.6264 60.9906,31.0354 C60.9906,30.6664 61.0646,30.3714 61.1386,30.0754" id="Fill-31" fill="#0094D8"></path>
                <polygon id="Fill-33" fill="#0094D8" points="68.2243 26.9757 66.9693 32.7337 65.8633 32.7337 67.0433 26.9757"></polygon>
                <path d="M69.1101,27.9347 L69.3321,26.9757 L70.5131,26.9757 L70.2921,27.9347 L69.1101,27.9347 Z M70.1441,28.5257 L69.2581,32.7337 L68.1511,32.7337 L69.0371,28.5257 L70.1441,28.5257 Z" id="Fill-35" fill="#0094D8"></path>
                <g id="Group-39" transform="translate(70.000000, 26.880800)">
                    <mask id="mask-2" fill="white">
                        <use xlink:href="#path-1"></use>
                    </mask>
                    <g id="Clip-38"></g>
                    <path d="M2.4323,2.6046 C2.2853,2.7516 2.1373,2.8266 2.0633,3.0466 C1.9893,3.1946 1.9153,3.4166 1.8413,3.6376 C1.7683,3.8596 1.7683,4.0066 1.7683,4.2286 C1.7683,4.3756 1.7683,4.4496 1.8413,4.5976 C1.8413,4.7456 1.9153,4.8186 1.9893,4.8926 C2.0633,4.9666 2.1373,5.0406 2.2103,5.1146 C2.2853,5.1876 2.4323,5.1876 2.5793,5.1876 C2.8013,5.1876 3.0233,5.1146 3.1703,5.0406 C3.3183,4.8926 3.4653,4.7456 3.5393,4.5976 C3.6133,4.4496 3.7603,4.2286 3.7603,4.0066 C3.8343,3.7856 3.8343,3.6376 3.8343,3.4166 C3.8343,3.1216 3.7603,2.8996 3.6133,2.7516 C3.4653,2.5306 3.3183,2.4576 3.0233,2.4576 C2.8013,2.4576 2.5793,2.4576 2.4323,2.6046 Z M3.4653,5.3356 C3.3183,5.5566 3.1703,5.7046 2.9493,5.8526 C2.7273,5.9256 2.5053,6.0006 2.2103,6.0006 C1.6943,6.0006 1.3253,5.8526 1.0303,5.5566 C0.7343,5.2616 0.5863,4.8926 0.5863,4.3756 C0.5863,4.0066 0.6613,3.7116 0.7343,3.3426 C0.8083,3.0466 0.9553,2.7516 1.1773,2.4576 C1.3993,2.1616 1.6203,2.0136 1.9153,1.8666 C2.2103,1.7186 2.5793,1.6446 2.9493,1.6446 C3.1703,1.6446 3.4653,1.7186 3.6873,1.7926 C3.9093,1.8666 4.0563,2.0876 4.1293,2.3086 L4.5733,0.1676 L5.7533,0.1676 L4.4983,5.9256 L3.3183,5.9256 L3.4653,5.3356 Z" id="Fill-37" fill="#0094D8" mask="url(#mask-2)"></path>
                </g>
                <polygon id="Fill-40" fill="#0094D8" points="80.0349 26.9757 78.7799 32.7337 77.5249 32.7337 78.7799 26.9757"></polygon>
                <path d="M82.028,28.5255 L81.881,29.1165 C82.25,28.6725 82.766,28.4525 83.357,28.4525 C84.169,28.4525 84.612,28.8205 84.612,29.5585 L84.612,29.7075 L84.612,29.9275 C84.612,30.0025 84.612,30.0755 84.538,30.1495 L84.538,30.2965 L84.021,32.7335 L82.84,32.7335 L83.357,30.2965 C83.357,30.2235 83.357,30.1495 83.43,30.0025 L83.43,29.7805 C83.43,29.6325 83.357,29.5585 83.283,29.4855 C83.135,29.4115 83.062,29.3375 82.914,29.3375 C82.766,29.3375 82.619,29.3375 82.471,29.4115 C82.324,29.4855 82.25,29.5585 82.102,29.7075 C82.028,29.7805 81.955,29.9275 81.881,30.0755 C81.807,30.2235 81.807,30.3715 81.733,30.5185 L81.29,32.7335 L80.109,32.7335 L80.995,28.5255 L82.028,28.5255 Z" id="Fill-42" fill="#0094D8"></path>
                <path d="M87.195,28.5255 L87.048,29.1165 C87.417,28.6725 87.933,28.4525 88.524,28.4525 C89.337,28.4525 89.779,28.8205 89.779,29.5585 L89.779,29.7075 C89.779,29.7805 89.779,29.8545 89.705,29.9275 C89.705,30.0025 89.705,30.0755 89.632,30.1495 L89.632,30.2965 L89.115,32.7335 L87.933,32.7335 L88.45,30.2965 C88.45,30.2235 88.45,30.1495 88.524,30.0025 L88.524,29.7805 C88.524,29.6325 88.45,29.5585 88.377,29.4855 C88.229,29.4115 88.155,29.3375 88.007,29.3375 C87.86,29.3375 87.713,29.3375 87.564,29.4115 C87.417,29.4855 87.343,29.5585 87.196,29.7075 C87.048,29.8545 87.048,29.9275 86.974,30.0755 C86.9,30.2235 86.827,30.3715 86.827,30.5185 L86.383,32.7335 L85.203,32.7335 L86.089,28.5255 L87.195,28.5255 Z" id="Fill-44" fill="#0094D8"></path>
                <path d="M91.7722,31.4044 C91.7722,31.5514 91.8462,31.6264 91.9192,31.6994 C91.9942,31.7734 92.0672,31.8474 92.2142,31.9214 C92.2892,31.9954 92.4362,31.9954 92.5842,31.9954 C92.8052,31.9954 92.9532,31.9214 93.1742,31.8474 C93.3222,31.6994 93.4692,31.5514 93.5432,31.4044 C93.6182,31.2574 93.6912,31.0354 93.7652,30.8134 C93.8382,30.5924 93.8382,30.4444 93.8382,30.2234 C93.8382,29.9274 93.7652,29.7074 93.6182,29.5584 C93.4692,29.4114 93.2492,29.3384 92.9532,29.3384 C92.7322,29.3384 92.5842,29.4114 92.4362,29.4854 C92.2892,29.6334 92.1412,29.7804 92.0672,29.9274 C91.9942,30.0754 91.9192,30.2974 91.8462,30.5184 C91.7722,30.7404 91.7722,30.8874 91.7722,31.1094 C91.6982,31.1824 91.6982,31.3304 91.7722,31.4044 M90.7392,30.0754 C90.8862,29.7804 91.0342,29.4854 91.2552,29.2634 C91.4772,29.0424 91.6982,28.8204 91.9942,28.6734 C92.2892,28.5254 92.6582,28.4524 93.0272,28.4524 C93.3222,28.4524 93.6182,28.4524 93.8382,28.5254 C94.0602,28.5994 94.2822,28.6734 94.4292,28.8204 C94.5772,28.9684 94.7242,29.1164 94.7982,29.3384 C94.8732,29.5584 94.9462,29.8544 94.9462,30.1494 C94.9462,30.5184 94.8732,30.8874 94.7982,31.1824 C94.6512,31.4784 94.5032,31.7734 94.2822,31.9954 C94.0602,32.2164 93.8382,32.4374 93.5432,32.5854 C93.2492,32.7334 92.8792,32.8064 92.5102,32.8064 C91.9192,32.8064 91.4772,32.6594 91.1082,32.3644 C90.7392,32.0684 90.5912,31.6264 90.5912,31.0354 C90.5172,30.6664 90.5912,30.3714 90.7392,30.0754" id="Fill-46" fill="#0094D8"></path>
                <polygon id="Fill-48" fill="#0094D8" points="96.2751 32.7335 95.6841 28.5255 96.9391 28.5255 97.1611 31.5515 98.7111 28.5255 99.8921 28.5255 97.6031 32.7335"></polygon>
                <path d="M102.3279,30.8878 C102.1809,30.8878 101.9589,30.8878 101.8109,30.9618 C101.7369,30.9618 101.5899,30.9618 101.5159,31.0348 C101.4419,31.0348 101.2949,31.1098 101.2209,31.1098 C101.1469,31.1828 101.0729,31.2568 100.9989,31.3298 C100.9259,31.4048 100.9259,31.5518 100.9259,31.6258 C100.9259,31.7738 100.9989,31.9208 101.1469,31.9948 C101.2949,32.0688 101.4419,32.1428 101.5899,32.1428 C101.7369,32.1428 101.8859,32.1428 102.0329,32.0688 C102.1809,31.9948 102.2549,31.9208 102.3279,31.8478 C102.4019,31.7738 102.4749,31.6258 102.5499,31.5518 C102.6229,31.4048 102.6229,31.3298 102.6969,31.1828 L102.8449,30.8138 C102.6969,30.8138 102.5499,30.8878 102.3279,30.8878 M100.6309,29.1898 L101.0729,28.7468 C101.2209,28.6728 101.4419,28.5258 101.6639,28.5258 C101.8859,28.4518 102.1059,28.4518 102.3279,28.4518 C102.5499,28.4518 102.6969,28.4518 102.9189,28.5258 C103.1399,28.5258 103.2879,28.5998 103.5089,28.6728 C103.6569,28.7468 103.8049,28.8948 103.9519,28.9688 C104.0989,29.1168 104.0989,29.3378 104.0989,29.5588 C104.0989,29.7808 104.0989,30.0018 104.0259,30.2968 L103.6569,31.9948 C103.6569,32.0688 103.6569,32.1428 103.5829,32.2898 L103.5829,32.5848 C103.5829,32.6588 103.5829,32.7338 103.6569,32.8068 L102.4749,32.8068 L102.4749,32.3648 C102.3279,32.5118 102.1059,32.6588 101.8859,32.7338 C101.6639,32.8068 101.4419,32.8808 101.1469,32.8808 C100.9259,32.8808 100.7039,32.8808 100.5569,32.8068 C100.4089,32.7338 100.2619,32.6588 100.1129,32.5848 C99.9659,32.5118 99.8919,32.3648 99.8919,32.2168 C99.8179,32.0688 99.8179,31.9208 99.8179,31.7738 C99.8179,31.4048 99.9659,31.0348 100.2619,30.8138 C100.5569,30.5928 100.9259,30.4448 101.4419,30.3708 C101.7369,30.3708 101.9589,30.2968 102.1809,30.2968 C102.4019,30.2968 102.5499,30.2238 102.6969,30.2238 C102.8449,30.2238 102.9189,30.1498 102.9919,30.0758 C103.0659,30.0018 103.0659,29.9278 103.0659,29.7808 C103.0659,29.7068 103.0659,29.5588 102.9919,29.4858 C102.9189,29.4108 102.9189,29.3378 102.8449,29.3378 C102.7709,29.2638 102.6969,29.2638 102.6229,29.2638 L102.4019,29.2638 C102.1809,29.2638 102.0329,29.3378 101.8109,29.4108 C101.5899,29.4858 101.5159,29.6328 101.5159,29.8548 L100.4089,29.8548 C100.4089,29.5588 100.4819,29.3378 100.6309,29.1898" id="Fill-50" fill="#0094D8"></path>
                <path d="M107.864,28.5255 L107.717,29.2635 L106.905,29.2635 L106.462,31.3305 L106.462,31.4785 L106.462,31.5515 L106.462,31.6995 C106.462,31.7735 106.536,31.7735 106.536,31.7735 L106.683,31.7735 L106.831,31.7735 L107.273,31.7735 L107.052,32.6595 L106.683,32.6595 L106.314,32.6595 L105.945,32.6595 C105.798,32.6595 105.723,32.5855 105.576,32.5115 C105.502,32.4375 105.354,32.3645 105.354,32.2905 C105.281,32.2165 105.281,32.0685 105.281,31.8475 L105.281,31.6995 C105.281,31.6265 105.281,31.5515 105.354,31.4785 L105.798,29.2635 L105.059,29.2635 L105.207,28.5255 L105.945,28.5255 L106.24,27.2705 L107.422,27.2705 L107.126,28.5255 L107.864,28.5255 Z" id="Fill-52" fill="#0094D8"></path>
                <path d="M109.1931,31.4044 C109.1931,31.5514 109.2661,31.6264 109.3401,31.6994 C109.4151,31.7734 109.4881,31.8474 109.6351,31.9214 C109.7101,31.9954 109.8571,31.9954 110.0051,31.9954 C110.2261,31.9954 110.3741,31.9214 110.5951,31.8474 C110.7431,31.6994 110.8901,31.5514 110.9641,31.4044 C111.0381,31.2574 111.1121,31.0354 111.1861,30.8134 C111.2591,30.5924 111.2591,30.4444 111.2591,30.2234 C111.2591,29.9274 111.1861,29.7074 111.0381,29.5584 C110.8901,29.4114 110.6701,29.3384 110.3741,29.3384 C110.1521,29.3384 110.0051,29.4114 109.8571,29.4854 C109.7101,29.6334 109.5621,29.7804 109.4881,29.9274 C109.4151,30.0754 109.3401,30.2974 109.2661,30.5184 C109.1931,30.7404 109.1931,30.8874 109.1931,31.1094 L109.1931,31.4044 M108.1601,30.0754 C108.3071,29.7804 108.4551,29.4854 108.6761,29.2634 C108.8971,29.0424 109.1191,28.8204 109.4151,28.6734 C109.7101,28.5254 110.0791,28.4524 110.4481,28.4524 C110.7431,28.4524 111.0381,28.4524 111.2591,28.5254 C111.4811,28.5994 111.7031,28.6734 111.8501,28.8204 C111.9981,28.9684 112.1451,29.1164 112.2191,29.3384 C112.2931,29.5584 112.3671,29.8544 112.3671,30.1494 C112.3671,30.5184 112.2931,30.8874 112.2191,31.1824 C112.0721,31.4784 111.9241,31.7734 111.7031,31.9954 C111.4811,32.2164 111.2591,32.4374 110.9641,32.5854 C110.6701,32.7334 110.3001,32.8064 109.9311,32.8064 C109.3401,32.8064 108.8971,32.6594 108.5281,32.3644 C108.1601,32.0684 108.0111,31.6264 108.0111,31.0354 C108.0111,30.6664 108.0861,30.3714 108.1601,30.0754" id="Fill-54" fill="#0094D8"></path>
                <path d="M114.8025,28.5255 L114.6555,29.2635 C114.8025,28.9685 114.9505,28.7475 115.2455,28.5995 C115.5405,28.4525 115.7625,28.3785 116.1315,28.3785 L116.5005,28.3785 L116.2795,29.4855 C116.2055,29.4855 116.1315,29.4855 116.0575,29.4115 L115.8365,29.4115 C115.6145,29.4115 115.3935,29.4855 115.2455,29.5585 C115.0985,29.6325 114.9505,29.7075 114.8765,29.8545 C114.8025,30.0025 114.6555,30.1495 114.6555,30.2965 C114.5815,30.4445 114.5075,30.6665 114.5075,30.8135 L114.1385,32.6595 L112.9575,32.6595 L113.8435,28.4525 L114.8025,28.4525 L114.8025,28.5255 Z" id="Fill-56" fill="#0094D8"></path>
            </g>
        </g>
    </g>
</svg>
````

## File: docs/public/logo-shadow.svg
````
<svg width="290" height="290" viewBox="0 0 165 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_301_2)">
<g filter="url(#filter0_d_301_2)">
<path d="M120.831 57.2543L84.693 109.505C84.3099 110.059 83.7558 110.474 83.1148 110.687C82.4738 110.9 81.7809 110.898 81.1412 110.684C80.5015 110.469 79.95 110.052 79.5702 109.497C79.1905 108.941 79.0032 108.277 79.037 107.606L80.4833 78.7582L57.1343 73.8064C56.6353 73.7007 56.1704 73.474 55.7807 73.1465C55.391 72.8191 55.0885 72.4009 54.9001 71.929C54.7117 71.4571 54.6432 70.9461 54.7006 70.4412C54.758 69.9364 54.9395 69.4532 55.2291 69.0345L91.3675 16.7837C91.7507 16.2294 92.3048 15.8145 92.9458 15.6018C93.5869 15.3891 94.2798 15.3902 94.9196 15.6051C95.5593 15.8199 96.1109 16.2367 96.4906 16.7923C96.8703 17.3478 97.0575 18.0117 97.0236 18.6833L95.5773 47.5314L118.926 52.4827C119.425 52.5885 119.89 52.8152 120.28 53.1426C120.67 53.4701 120.972 53.8883 121.16 54.3602C121.349 54.8321 121.417 55.3431 121.36 55.8479C121.303 56.3528 121.121 56.836 120.831 57.2547L120.831 57.2543Z" fill="#FCC72B"/>
<path d="M82.9866 153.343C82.0254 153.344 81.0735 153.156 80.1855 152.788C79.2975 152.42 78.4909 151.88 77.8122 151.2L43.6658 117.056C42.2998 115.683 41.5341 113.824 41.5366 111.887C41.5392 109.95 42.3098 108.092 43.6796 106.723C45.0493 105.353 46.9064 104.582 48.8435 104.579C50.7807 104.577 52.6399 105.342 54.0134 106.708L82.9866 135.678L146.105 72.5626C147.481 71.2088 149.336 70.4536 151.266 70.4615C153.197 70.4693 155.046 71.2396 156.41 72.6045C157.775 73.9695 158.546 75.8184 158.554 77.7487C158.561 79.679 157.806 81.5342 156.452 82.9101L88.1597 151.2C87.4811 151.881 86.6747 152.42 85.7869 152.788C84.8992 153.156 83.9475 153.344 82.9866 153.343Z" fill="#729B1B"/>
<path d="M82.9572 153.343C83.9184 153.344 84.8703 153.156 85.7583 152.788C86.6463 152.42 87.4528 151.88 88.1316 151.2L122.278 117.056C123.644 115.683 124.41 113.824 124.407 111.887C124.405 109.95 123.634 108.092 122.264 106.723C120.894 105.353 119.037 104.582 117.1 104.579C115.163 104.577 113.304 105.342 111.93 106.708L82.9572 135.678L19.8389 72.5626C18.4629 71.2088 16.6077 70.4536 14.6775 70.4615C12.7472 70.4693 10.8982 71.2396 9.53331 72.6045C8.16839 73.9695 7.39811 75.8184 7.39025 77.7487C7.38239 79.679 8.13759 81.5342 9.49135 82.9101L77.784 151.2C78.4627 151.881 79.2691 152.42 80.1568 152.788C81.0446 153.156 81.9963 153.344 82.9572 153.343Z" fill="#729B1B" fill-opacity="0.5"/>
</g>
</g>
<defs>
<filter id="filter0_d_301_2" x="1.3902" y="10.4431" width="167.163" height="153.9" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="2" dy="3"/>
<feGaussianBlur stdDeviation="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.108333 0 0 0 0 0.108333 0 0 0 0 0.108333 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_301_2"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_301_2" result="shape"/>
</filter>
<clipPath id="clip0_301_2">
<rect width="165" height="165" fill="white"/>
</clipPath>
</defs>
</svg>
````

## File: docs/public/logo.svg
````
<svg width="260" height="260" viewBox="0 0 165 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M120.831 57.2543L84.693 109.505C84.3099 110.059 83.7558 110.474 83.1148 110.687C82.4738 110.9 81.7809 110.898 81.1412 110.684C80.5015 110.469 79.95 110.052 79.5702 109.497C79.1905 108.941 79.0032 108.277 79.037 107.606L80.4833 78.7582L57.1343 73.8064C56.6353 73.7007 56.1704 73.474 55.7807 73.1465C55.391 72.8191 55.0885 72.4009 54.9001 71.929C54.7117 71.4571 54.6432 70.9461 54.7006 70.4412C54.758 69.9364 54.9395 69.4532 55.2291 69.0345L91.3675 16.7837C91.7507 16.2294 92.3048 15.8145 92.9458 15.6018C93.5869 15.3891 94.2798 15.3902 94.9196 15.6051C95.5593 15.8199 96.1109 16.2367 96.4906 16.7923C96.8703 17.3478 97.0575 18.0117 97.0236 18.6833L95.5773 47.5314L118.926 52.4828C119.425 52.5885 119.89 52.8152 120.28 53.1426C120.67 53.4701 120.972 53.8883 121.16 54.3602C121.349 54.8321 121.417 55.3431 121.36 55.8479C121.303 56.3528 121.121 56.836 120.831 57.2547L120.831 57.2543Z" fill="#FCC72B"/>
<path d="M82.9866 153.343C82.0254 153.344 81.0735 153.156 80.1855 152.788C79.2975 152.42 78.4909 151.88 77.8122 151.2L43.6658 117.056C42.2998 115.683 41.5341 113.824 41.5366 111.887C41.5392 109.95 42.3098 108.092 43.6796 106.723C45.0493 105.353 46.9064 104.582 48.8435 104.579C50.7807 104.577 52.6399 105.342 54.0134 106.708L82.9866 135.678L146.105 72.5626C147.481 71.2088 149.336 70.4536 151.266 70.4615C153.197 70.4693 155.046 71.2396 156.41 72.6045C157.775 73.9695 158.546 75.8184 158.554 77.7487C158.561 79.679 157.806 81.5342 156.452 82.9101L88.1597 151.2C87.4811 151.881 86.6747 152.42 85.7869 152.788C84.8992 153.156 83.9475 153.344 82.9866 153.343Z" fill="#729B1B"/>
<path d="M82.9572 153.343C83.9184 153.344 84.8703 153.156 85.7583 152.788C86.6463 152.42 87.4528 151.88 88.1316 151.2L122.278 117.056C123.644 115.683 124.41 113.824 124.407 111.887C124.405 109.95 123.634 108.092 122.264 106.723C120.894 105.353 119.037 104.582 117.1 104.579C115.163 104.577 113.304 105.342 111.93 106.708L82.9572 135.678L19.8389 72.5626C18.4629 71.2088 16.6077 70.4536 14.6775 70.4615C12.7472 70.4693 10.8982 71.2396 9.53331 72.6045C8.16839 73.9695 7.39811 75.8184 7.39025 77.7487C7.38239 79.679 8.13759 81.5342 9.49135 82.9101L77.784 151.2C78.4627 151.881 79.2691 152.42 80.1568 152.788C81.0446 153.156 81.9963 153.344 82.9572 153.343Z" fill="#729B1B" fill-opacity="0.5"/>
</svg>
````

## File: docs/public/netlify.svg
````
<?xml version="1.0" encoding="UTF-8"?>
<svg width="114px" height="51px" viewBox="0 0 114 51" version="1.1" xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Generator: Sketch 41.1 (35376) - http://www.bohemiancoding.com/sketch -->
  <title>netlify-callout-vertical-light</title>
  <desc>Created with Sketch.</desc>
  <defs>
    <rect id="path-1" x="0" y="0" width="114" height="51" rx="4"></rect>
    <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="114"
      height="51" fill="#888">
      <use xlink:href="#path-1"></use>
    </mask>
  </defs>
  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="netlify-callout-vertical-light">
      <g id="Group" transform="translate(8.000000, 8.000000)" fill="#888">
        <path
          d="M23.6161838,12.0243902 C23.7871091,12.1101766 23.9295469,12.2245585 24.0434971,12.353238 C24.0577409,12.3675357 24.0577409,12.3675357 24.0719847,12.3675357 L24.0862285,12.3675357 L27.3622974,10.9520606 C27.3765412,10.9377628 27.3907849,10.9234651 27.3907849,10.9091674 C27.3907849,10.8948696 27.3907849,10.8805719 27.3765412,10.8662742 L24.3141289,7.79226241 C24.2998851,7.77796468 24.2856414,7.77796468 24.2856414,7.77796468 L24.2713976,7.77796468 C24.2571538,7.77796468 24.24291,7.79226241 24.24291,7.82085786 L23.5734525,11.9814971 C23.5876962,11.9957948 23.60194,12.0243902 23.6161838,12.0243902 Z M16.8219017,9.23633305 C16.9785833,9.47939445 17.0782897,9.76534903 17.1067773,10.0513036 C17.1067773,10.0656013 17.1210211,10.0798991 17.1352648,10.0941968 L22.0066369,12.195963 L22.0208807,12.195963 C22.0351244,12.195963 22.0493682,12.195963 22.0493682,12.1816653 C22.191806,12.0672834 22.3627313,11.9814971 22.5479004,11.9243061 C22.5621442,11.9243061 22.576388,11.9100084 22.576388,11.881413 L23.3740396,6.86291001 C23.3740396,6.84861228 23.3740396,6.83431455 23.3597958,6.82001682 L20.3116273,3.74600505 C20.2973835,3.73170732 20.2973835,3.73170732 20.2831398,3.73170732 C20.268896,3.73170732 20.2546522,3.74600505 20.2546522,3.76030278 L16.8219017,9.16484441 C16.8076579,9.19343987 16.8076579,9.22203532 16.8219017,9.23633305 Z M33.4586343,16.9714045 L28.2311678,11.7098402 C28.2169241,11.6955425 28.2026803,11.6955425 28.2026803,11.6955425 L28.1884365,11.6955425 L24.6417358,13.2253995 C24.627492,13.2396972 24.6132482,13.253995 24.6132482,13.2682927 C24.6132482,13.2825904 24.627492,13.3111859 24.6417358,13.3111859 L33.3874154,17.0714886 L33.4016592,17.0714886 C33.415903,17.0714886 33.4301468,17.0714886 33.4301468,17.0571909 L33.4586343,17.0285955 C33.4871219,17.0285955 33.4871219,16.9857023 33.4586343,16.9714045 Z M32.5897639,17.8292683 L24.2001787,14.2262405 L24.1859349,14.2262405 C24.1716911,14.2262405 24.1574474,14.2262405 24.1432036,14.2405383 C23.9153031,14.5550883 23.5734525,14.7552565 23.1746267,14.8124474 C23.1603829,14.8124474 23.1318953,14.8267452 23.1318953,14.8553406 L22.2345373,20.4457527 C22.2345373,20.4600505 22.2345373,20.4743482 22.2487811,20.4886459 C22.5621442,20.7317073 22.7473133,21.0891505 22.7900447,21.489487 C22.7900447,21.5180824 22.8042884,21.5323802 22.832776,21.5323802 L27.9035609,22.6047098 L27.9178047,22.6047098 C27.9320485,22.6047098 27.9462923,22.6047098 27.9462923,22.5904121 L32.5897639,17.9150547 C32.6040077,17.9007569 32.6040077,17.8864592 32.6040077,17.8721615 C32.6040077,17.8578638 32.6040077,17.843566 32.5897639,17.8292683 Z M21.4796171,13.0538267 L16.8931206,11.0807401 L16.8788768,11.0807401 C16.8646331,11.0807401 16.8503893,11.0950378 16.8361455,11.1093356 C16.5227824,11.5954584 15.9957626,11.881413 15.4260115,11.881413 C15.3405488,11.881413 15.2550862,11.8671152 15.1553797,11.8528175 L15.1411359,11.8528175 C15.1268922,11.8528175 15.1126484,11.8671152 15.0984046,11.881413 L11.3238034,17.8149706 C11.3095597,17.8292683 11.3095597,17.8578638 11.3238034,17.8721615 C11.3380472,17.8864592 11.352291,17.8864592 11.3665348,17.8864592 L11.3807786,17.8864592 L21.4511295,13.5256518 C21.4653733,13.5113541 21.4796171,13.4970563 21.4796171,13.4827586 L21.4796171,13.4255677 L21.4796171,13.3540791 C21.4796171,13.2682927 21.4938609,13.1825063 21.5081047,13.1110177 C21.5081047,13.0824222 21.4938609,13.0681245 21.4796171,13.0538267 Z M27.0062029,23.4339781 L22.5479004,22.5046257 L22.5336567,22.5046257 C22.5194129,22.5046257 22.5051691,22.5189235 22.4909253,22.5189235 C22.32,22.7333894 22.1063433,22.9049622 21.8499553,23.0050463 C21.8357116,23.0050463 21.8214678,23.0336417 21.8214678,23.0479394 L20.7531844,29.7106812 C20.7531844,29.7392767 20.7674282,29.7535744 20.781672,29.7678722 L20.8101595,29.7678722 C20.8244033,29.7678722 20.8386471,29.7678722 20.8386471,29.7535744 L27.0204467,23.5340622 C27.0346905,23.5197645 27.0346905,23.5054668 27.0346905,23.491169 C27.0346905,23.4482759 27.0204467,23.4339781 27.0062029,23.4339781 Z M20.781672,22.9764508 C20.3543586,22.804878 20.0409955,22.4188394 19.9270453,21.9756098 C19.9270453,21.961312 19.9128015,21.9470143 19.884314,21.9327166 L11.6229228,20.2026913 C11.6229228,20.2026913 11.6229228,20.2026913 11.608679,20.2026913 C11.5944352,20.2026913 11.5801914,20.2169891 11.5659477,20.2312868 C11.5232163,20.3027754 11.4947288,20.3599664 11.4519974,20.4171573 C11.4377537,20.431455 11.4377537,20.4600505 11.4519974,20.4743482 L18.9727122,31.5121951 C18.986956,31.5264929 18.986956,31.5264929 19.0011997,31.5264929 C19.0154435,31.5264929 19.0296873,31.5264929 19.0296873,31.5121951 L19.4854882,31.0546678 C19.4854882,31.0403701 19.499732,31.0403701 19.499732,31.0260723 L20.781672,23.019344 C20.8101595,23.019344 20.8101595,22.9907485 20.781672,22.9764508 Z M11.7938481,19.1875526 C11.7938481,19.216148 11.8080919,19.2304458 11.8365795,19.2304458 L20.0267518,20.9461733 L20.0409955,20.9461733 C20.0552393,20.9461733 20.0694831,20.9318755 20.0837269,20.9175778 C20.3258711,20.4886459 20.7531844,20.2026913 21.2374729,20.1740959 C21.2659604,20.1740959 21.2802042,20.1597981 21.2802042,20.1312027 L22.1633184,14.626577 C22.1633184,14.6122792 22.1633184,14.5836838 22.1348309,14.5836838 C22.0778558,14.5407906 22.0208807,14.4978974 21.9496618,14.4264087 C21.935418,14.412111 21.9211742,14.412111 21.9211742,14.412111 L21.9069304,14.412111 L11.7796043,18.8015139 C11.7511168,18.8158116 11.7511168,18.8301093 11.7511168,18.8587048 C11.7653606,18.9730866 11.7938481,19.0731707 11.7938481,19.1875526 Z M8.36109764,20.5744323 C8.31836631,20.5172414 8.27563497,20.4600505 8.23290364,20.3885618 C8.21865986,20.3742641 8.20441608,20.3599664 8.1901723,20.3599664 L8.17592853,20.3599664 L4.6434716,21.8898234 C4.62922782,21.8898234 4.61498405,21.9041211 4.61498405,21.9184188 C4.61498405,21.9327166 4.61498405,21.9470143 4.62922782,21.961312 L6.35272495,23.6913373 C6.36696873,23.705635 6.38121251,23.705635 6.38121251,23.705635 C6.39545629,23.705635 6.40970006,23.6913373 6.42394384,23.6770395 L8.37534142,20.6030278 C8.37534142,20.6030278 8.37534142,20.58873 8.36109764,20.5744323 Z M10.6970772,21.1320437 C10.6828334,21.117746 10.6685897,21.1034483 10.6543459,21.1034483 L10.6401021,21.1034483 C10.3837141,21.2178301 10.1273261,21.275021 9.85669432,21.275021 C9.64303765,21.275021 9.44362476,21.2464256 9.22996809,21.1749369 L9.21572431,21.1749369 C9.20148054,21.1749369 9.18723676,21.1892347 9.17299298,21.2035324 L7.12188896,24.4348192 L7.10764518,24.4491169 C7.0934014,24.4634146 7.0934014,24.4920101 7.10764518,24.5063078 L16.5370262,33.9857023 C16.5512699,34 16.5655137,34 16.5655137,34 C16.5797575,34 16.5940013,34 16.5940013,33.9857023 L18.2462795,32.312868 C18.2605233,32.2985702 18.2605233,32.2699748 18.2462795,32.255677 L10.6970772,21.1320437 Z M9.37240587,17.4003364 C9.38664965,17.4146341 9.40089343,17.4289319 9.4151372,17.4289319 L9.42938098,17.4289319 C9.57181876,17.4003364 9.72850032,17.371741 9.8709381,17.371741 C10.0276197,17.371741 10.198545,17.4003364 10.3552265,17.4432296 L10.3694703,17.4432296 C10.3837141,17.4432296 10.3979579,17.4289319 10.4122017,17.4146341 L14.2295341,11.4095879 C14.2437779,11.3952902 14.2437779,11.3666947 14.2295341,11.352397 C13.9304148,11.0378469 13.7594895,10.6232128 13.7594895,10.1799832 C13.7594895,10.0513036 13.7737332,9.92262405 13.8022208,9.79394449 C13.8022208,9.76534903 13.787977,9.7510513 13.7737332,9.73675357 C13.2894448,9.52228764 9.00206765,7.6921783 9.00206765,7.67788057 L8.98782387,7.67788057 C8.97358009,7.67788057 8.95933631,7.67788057 8.95933631,7.6921783 L5.32717294,11.352397 C5.31292916,11.3666947 5.31292916,11.3952902 5.32717294,11.4095879 L9.37240587,17.4003364 Z M9.78547543,6.93439865 C9.78547543,6.93439865 14.1155839,8.79310345 14.300753,8.87888982 L14.3149968,8.87888982 C14.3292406,8.87888982 14.3292406,8.87888982 14.3434844,8.86459209 C14.6426037,8.6215307 15.0271857,8.47855341 15.4117677,8.47855341 C15.5969368,8.47855341 15.7821059,8.50714886 15.967275,8.56433978 L15.9815188,8.56433978 C15.9957626,8.56433978 16.0100064,8.55004205 16.0242502,8.53574432 L19.5424633,3.00252313 C19.5567071,2.9882254 19.5567071,2.95962994 19.5424633,2.94533221 L16.6224888,0.0142977292 C16.6082451,0 16.6082451,0 16.5940013,0 C16.5797575,0 16.5655137,0 16.5655137,0.0142977292 L9.78547543,6.84861228 C9.77123165,6.86291001 9.77123165,6.87720774 9.77123165,6.89150547 C9.75698787,6.92010093 9.77123165,6.92010093 9.78547543,6.93439865 Z M8.10470964,18.4440706 C8.11895341,18.4440706 8.13319719,18.4297729 8.14744097,18.4154752 C8.23290364,18.2439024 8.36109764,18.0866274 8.48929164,17.9436501 C8.50353542,17.9293524 8.50353542,17.9007569 8.48929164,17.8864592 C8.44656031,17.8292683 4.58649649,12.1673675 4.58649649,12.1530698 C4.57225271,12.1387721 4.57225271,12.1387721 4.54376516,12.1244743 C4.52952138,12.1244743 4.5152776,12.1244743 4.5152776,12.1387721 L0.0142437779,16.6568545 C0,16.6711522 0,16.68545 0,16.6997477 C0,16.7140454 0.0142437779,16.7283431 0.0427313338,16.7283431 L8.10470964,18.4440706 C8.09046586,18.4440706 8.09046586,18.4440706 8.10470964,18.4440706 Z M7.73437141,19.430614 C7.73437141,19.4020185 7.72012763,19.3877208 7.69164008,19.3877208 L0.697945118,17.9150547 C0.697945118,17.9150547 0.697945118,17.9150547 0.68370134,17.9150547 C0.669457562,17.9150547 0.655213784,17.9293524 0.640970006,17.9436501 C0.626726228,17.9579479 0.640970006,17.9865433 0.655213784,18.000841 L3.77460115,21.1463415 C3.78884493,21.1606392 3.8030887,21.1606392 3.8030887,21.1606392 L3.81733248,21.1606392 L7.69164008,19.4878049 C7.72012763,19.4592094 7.73437141,19.4449117 7.73437141,19.430614 Z"
          id="Combined-Shape-Copy"></path>
        <path
          d="M67.5018666,14.7649667 L69.7772159,14.7649667 L69.7772159,29.3120637 L67.5018666,29.3120637 L67.5018666,14.7649667 Z M44.2221988,18.869426 C42.9991985,18.869426 42.0179541,19.3301306 41.2642447,20.237579 L41.19314,19.0509157 L39.06,19.0509157 L39.06,29.298103 L41.3353493,29.298103 L41.3353493,22.0105937 C41.7904192,21.172949 42.473024,20.7541266 43.3831637,20.7541266 C44.0088848,20.7541266 44.4639547,20.9076948 44.7483733,21.228792 C45.032792,21.5359284 45.1607804,22.0245545 45.1607804,22.6667488 L45.1607804,29.298103 L47.4361297,29.298103 L47.4361297,22.5271413 C47.4076878,20.0979716 46.3411178,18.869426 44.2221988,18.869426 Z M54.0488637,18.869426 C53.1813868,18.869426 52.3992354,19.0927979 51.6881888,19.5395418 C50.9771421,19.9862856 50.4367466,20.6145192 50.0385605,21.4242424 C49.6545953,22.2339657 49.4555022,23.1414141 49.4555022,24.1605486 L49.4555022,24.4397635 C49.4555022,25.9614848 49.9105721,27.1900304 50.8064909,28.1114396 C51.7024097,29.0328488 52.8685262,29.4935534 54.3190614,29.4935534 C55.1580965,29.4935534 55.9260269,29.3260245 56.6086317,28.9909666 C57.2912365,28.6559087 57.831632,28.1812433 58.2298181,27.5669705 L57.0068178,26.3803071 C56.3526549,27.2319126 55.4993989,27.6646957 54.4612708,27.6646957 C53.7217822,27.6646957 53.0960612,27.4134023 52.6125494,26.9247762 C52.1148168,26.4361501 51.844619,25.7660343 51.7735144,24.9144288 L58.4004693,24.9144288 L58.4004693,23.9930196 C58.4004693,22.3596124 58.0165041,21.1031453 57.2770156,20.2096576 C56.4948642,19.3161698 55.4282942,18.869426 54.0488637,18.869426 Z M56.12512,23.2251786 L51.7877353,23.2251786 C51.8872818,22.4294161 52.1432586,21.8151433 52.5272238,21.3823602 C52.911189,20.9356163 53.4231426,20.7262051 54.0488637,20.7262051 C54.6745848,20.7262051 55.1723174,20.9216556 55.5278408,21.3125565 C55.8833641,21.7034573 56.0824572,22.2898087 56.1393409,23.0576497 L56.1393409,23.2251786 L56.12512,23.2251786 Z M63.5200053,27.3296378 C63.363575,27.1621089 63.2924703,26.8689332 63.2924703,26.4780324 L63.2924703,20.7541266 L65.0843079,20.7541266 L65.0843079,19.0509157 L63.2924703,19.0509157 L63.2924703,16.5659029 L61.017121,16.5659029 L61.017121,19.0509157 L59.3532718,19.0509157 L59.3532718,20.7541266 L61.017121,20.7541266 L61.017121,26.5617968 C61.017121,28.5163012 61.8988189,29.4935534 63.6479937,29.4935534 C64.1315054,29.4935534 64.6292381,29.4237497 65.1554126,29.2701815 L65.1554126,27.483206 C64.8852149,27.5530098 64.6150171,27.5809313 64.3590403,27.5809313 C63.9466333,27.594892 63.6764355,27.5111275 63.5200053,27.3296378 Z M73.3040074,19.0648764 L75.5793567,19.0648764 L75.5793567,29.3120637 L73.3040074,29.3120637 L73.3040074,19.0648764 Z M88.4919641,26.0173277 L86.3446032,19.0648764 L83.8843818,19.0648764 L87.453836,29.2562207 L87.1267545,30.1357477 C86.9561033,30.6383346 86.7285684,30.9873532 86.4299288,31.1967644 C86.1455102,31.4061756 85.7046612,31.5178615 85.1358239,31.5178615 L84.7091959,31.4899401 L84.7091959,33.2769155 C85.107382,33.3886015 85.4771263,33.4444444 85.8042078,33.4444444 C87.2831848,33.4444444 88.3355339,32.5788782 88.9612549,30.8617065 L93,19.0648764 L90.5682204,19.0648764 L88.4919641,26.0173277 Z M80.0447298,15.4909255 C79.4190087,16.1051983 79.1061482,16.9847253 79.1061482,18.1295064 L79.1061482,19.0648764 L77.5560664,19.0648764 L77.5560664,20.7680874 L79.1061482,20.7680874 L79.1061482,29.3120637 L81.3814975,29.3120637 L81.3814975,20.7680874 L83.4435328,20.7680874 L83.4435328,19.0648764 L81.3814975,19.0648764 L81.3814975,18.1574279 C81.3814975,17.0266075 81.921893,16.4681777 83.0169048,16.4681777 C83.3439863,16.4681777 83.6426259,16.4960992 83.8843818,16.5379814 L83.9412655,14.7370452 C83.4861956,14.6253593 83.0737886,14.5695163 82.6613815,14.5695163 C81.5521487,14.5555556 80.6704508,14.8766527 80.0447298,15.4909255 Z M75.5793567,14.5555556 L75.5793567,16.5659029 L73.3040074,16.5659029 L73.3040074,14.5555556 L75.5793567,14.5555556 Z"
          id="Combined-Shape"></path>
      </g>
      <path
        d="M47,18.7088317 L47,13.0811682 L48.9325768,13.0811682 C49.6205775,13.0811682 50.187461,13.3008356 50.6332443,13.7401769 C51.0790276,14.1795182 51.3019159,14.7431808 51.3019159,15.4311816 L51.3019159,16.3626836 C51.3019159,17.0532611 51.0790276,17.6169237 50.6332443,18.0536882 C50.187461,18.4904527 49.6205775,18.7088317 48.9325768,18.7088317 L47,18.7088317 Z M48.1286248,13.9508278 L48.1286248,17.8430374 L48.8745995,17.8430374 C49.2791542,17.8430374 49.5960936,17.70647 49.8254272,17.4333311 C50.0547608,17.1601922 50.1694259,16.8033133 50.1694259,16.3626836 L50.1694259,15.4234513 C50.1694259,14.9879751 50.0547608,14.6336729 49.8254272,14.360534 C49.5960936,14.0873952 49.2791542,13.9508278 48.8745995,13.9508278 L48.1286248,13.9508278 Z M56.6358277,16.2351335 L54.3051401,16.2351335 L54.3051401,17.8430374 L57.0300734,17.8430374 L57.0300734,18.7088317 L53.1765153,18.7088317 L53.1765153,13.0811682 L57.0223431,13.0811682 L57.0223431,13.9508278 L54.3051401,13.9508278 L54.3051401,15.3654739 L56.6358277,15.3654739 L56.6358277,16.2351335 Z M59.84004,16.6680307 L59.84004,18.7088317 L58.7114151,18.7088317 L58.7114151,13.0811682 L60.9532042,13.0811682 C61.5999764,13.0811682 62.1088832,13.2460798 62.4799398,13.5759079 C62.8509964,13.905736 63.0365219,14.3399172 63.0365219,14.8784646 C63.0365219,15.417012 62.8509964,15.8499049 62.4799398,16.1771562 C62.1088832,16.5044075 61.5999764,16.6680307 60.9532042,16.6680307 L59.84004,16.6680307 Z M59.84004,15.7983711 L60.9532042,15.7983711 C61.2675716,15.7983711 61.5059203,15.7126944 61.6682576,15.5413384 C61.8305948,15.3699824 61.9117623,15.1516034 61.9117623,14.8861949 C61.9117623,14.6156328 61.831239,14.3921003 61.6701902,14.2155908 C61.5091413,14.0390812 61.2701484,13.9508278 60.9532042,13.9508278 L59.84004,13.9508278 L59.84004,15.7983711 Z M65.9856341,17.8430374 L68.4902535,17.8430374 L68.4902535,18.7088317 L64.8570092,18.7088317 L64.8570092,13.0811682 L65.9856341,13.0811682 L65.9856341,17.8430374 Z M74.4271293,16.4013351 C74.4271293,17.0919126 74.2087503,17.6626613 73.7719858,18.1135981 C73.3352213,18.5645349 72.7676936,18.79 72.0693857,18.79 C71.3762314,18.79 70.813213,18.5645349 70.3803136,18.1135981 C69.9474142,17.6626613 69.7309678,17.0919126 69.7309678,16.4013351 L69.7309678,15.3886649 C69.7309678,14.7006641 69.9467701,14.1305597 70.378381,13.6783344 C70.809992,13.2261092 71.3723662,13 72.0655205,13 C72.7638284,13 73.3320003,13.2261092 73.7700532,13.6783344 C74.2081061,14.1305597 74.4271293,14.7006641 74.4271293,15.3886649 L74.4271293,16.4013351 Z M73.2985045,15.3809346 C73.2985045,14.9428816 73.1889929,14.583426 72.9699665,14.3025567 C72.75094,14.0216875 72.449461,13.881255 72.0655205,13.881255 C71.68158,13.881255 71.3839662,14.0210433 71.1726701,14.3006242 C70.961374,14.580205 70.8557275,14.9403049 70.8557275,15.3809346 L70.8557275,16.4013351 C70.8557275,16.8471184 70.9626623,17.2104392 71.1765352,17.4913084 C71.3904081,17.7721776 71.688022,17.9126101 72.0693857,17.9126101 C72.455903,17.9126101 72.7573819,17.7721776 72.9738316,17.4913084 C73.1902813,17.2104392 73.2985045,16.8471184 73.2985045,16.4013351 L73.2985045,15.3809346 Z M78.0642388,15.6746862 L78.0874297,15.6746862 L79.3165485,13.0811682 L80.5533976,13.0811682 L78.6208209,16.7298731 L78.6208209,18.7088317 L77.4960612,18.7088317 L77.4960612,16.6718958 L75.5982708,13.0811682 L76.83512,13.0811682 L78.0642388,15.6746862 Z M85.0524363,17.2400734 C85.0524363,17.0236237 84.9757782,16.8496936 84.8224597,16.7182777 C84.6691412,16.5868618 84.4005157,16.4631781 84.0165752,16.3472229 C83.3466119,16.1539643 82.8402819,15.9246342 82.4975699,15.6592256 C82.1548579,15.3938171 81.9835044,15.0304963 81.9835044,14.5692523 C81.9835044,14.1080084 82.1799811,13.7311597 82.5729404,13.4386949 C82.9658996,13.1462302 83.4677203,13 84.0784176,13 C84.6968453,13 85.2005986,13.1642674 85.5896927,13.4928071 C85.9787867,13.8213468 86.166889,14.2265396 86.1540051,14.7083979 L86.1462748,14.7315888 L85.0524363,14.7315888 C85.0524363,14.4713338 84.9654712,14.260685 84.7915385,14.0996362 C84.6176057,13.9385873 84.3734593,13.8580641 84.0590919,13.8580641 C83.7576084,13.8580641 83.5244131,13.9250594 83.3594991,14.0590521 C83.1945851,14.1930447 83.1121293,14.3643981 83.1121293,14.5731175 C83.1121293,14.7637993 83.2003827,14.9203365 83.3768923,15.0427336 C83.5534018,15.1651308 83.8581017,15.2946121 84.2910011,15.4311816 C84.9120055,15.6038259 85.3822612,15.8318677 85.7017821,16.1153137 C86.0213031,16.3987597 86.1810612,16.7710991 86.1810612,17.2323431 C86.1810612,17.7142013 85.9910263,18.0942709 85.610951,18.3725634 C85.2308757,18.6508558 84.7290549,18.79 84.1054737,18.79 C83.4921996,18.79 82.9575254,18.6321744 82.501435,18.3165187 C82.0453446,18.0008629 81.8237447,17.5583072 81.8366286,16.9888384 L81.8443589,16.9656475 L82.9420625,16.9656475 C82.9420625,17.3006291 83.0444881,17.5460639 83.2493422,17.7019592 C83.4541964,17.8578546 83.7395707,17.935801 84.1054737,17.935801 C84.4121108,17.935801 84.6465944,17.8726708 84.8089317,17.7464085 C84.9712689,17.6201462 85.0524363,17.4513695 85.0524363,17.2400734 Z M90.985447,18.7088317 L90.985447,13.0811682 L92.8871025,13.0811682 C93.5493354,13.0811682 94.0659725,13.2100054 94.4370291,13.4676836 C94.8080857,13.7253618 94.9936112,14.1105849 94.9936112,14.6233645 C94.9936112,14.8836194 94.9246833,15.1161705 94.7868255,15.3210247 C94.6489676,15.5258788 94.4486258,15.6798393 94.1857941,15.7829105 C94.5233525,15.8550604 94.7765175,16.009665 94.9452967,16.246729 C95.114076,16.4837929 95.1984643,16.758216 95.1984643,17.0700066 C95.1984643,17.6085541 95.020669,18.0163237 94.6650731,18.2933277 C94.3094772,18.5703318 93.8057239,18.7088317 93.1537981,18.7088317 L90.985447,18.7088317 Z M92.1140718,16.2196729 L92.1140718,17.8430374 L93.1537981,17.8430374 C93.4527048,17.8430374 93.6807466,17.7779746 93.8379303,17.6478471 C93.995114,17.5177196 94.0737046,17.3251081 94.0737046,17.0700066 C94.0737046,16.794291 94.0067093,16.5836422 93.8727166,16.438054 C93.738724,16.2924659 93.527431,16.2196729 93.2388315,16.2196729 L92.1140718,16.2196729 Z M92.1140718,15.4389119 L92.925754,15.4389119 C93.2272375,15.4389119 93.4591444,15.37707 93.6214817,15.2533845 C93.7838189,15.129699 93.8649863,14.9493269 93.8649863,14.712263 C93.8649863,14.452008 93.7831747,14.2600407 93.6195491,14.1363551 C93.4559234,14.0126696 93.211777,13.9508278 92.8871025,13.9508278 L92.1140718,13.9508278 L92.1140718,15.4389119 Z M98.5109009,15.6746862 L98.5340918,15.6746862 L99.7632106,13.0811682 L101.00006,13.0811682 L99.067483,16.7298731 L99.067483,18.7088317 L97.9427233,18.7088317 L97.9427233,16.6718958 L96.0449329,13.0811682 L97.281782,13.0811682 L98.5109009,15.6746862 Z"
        id="DEPLOYS-BY" fill="#BCBCBC"></path>
    </g>
  </g>
</svg>
````

## File: docs/public/nuxtlabs.svg
````
<svg xmlns="http://www.w3.org/2000/svg" width="120" height="30" fill="none" viewBox="0 0 80 20"><path fill="#141414" d="M16.78 20h11.118a2.021 2.021 0 0 0 1.742-1 1.99 1.99 0 0 0-.001-2L22.172 4.143a2.005 2.005 0 0 0-1.742-1 2.02 2.02 0 0 0-1.742 1l-1.909 3.29L13.046 1a2.006 2.006 0 0 0-1.742-1 2.021 2.021 0 0 0-1.742 1L.27 17a1.99 1.99 0 0 0 .735 2.732c.306.175.653.267 1.006.267h6.98c2.765 0 4.804-1.207 6.207-3.563l3.407-5.865 1.825-3.139 5.476 9.429h-7.301l-1.826 3.138Zm-7.903-3.143h-4.87l7.3-12.57 3.643 6.284-2.439 4.201c-.932 1.528-1.99 2.085-3.634 2.085ZM44.306 19.824V16.98H37.41V4.503h-3.274v15.321h10.17ZM50.419 20c1.279 0 2.428-.526 2.97-1.336v1.16h3.036V8.794h-3.036v1.094c-.607-.766-1.691-1.27-3.014-1.27-3.187 0-5.117 2.255-5.117 5.69 0 3.437 1.93 5.692 5.16 5.692Zm.477-2.627c-1.605 0-2.667-1.226-2.667-3.064 0-1.86 1.062-3.086 2.667-3.086 1.626 0 2.688 1.225 2.688 3.086 0 1.838-1.062 3.064-2.688 3.064ZM64.999 20c3.23 0 5.226-2.255 5.226-5.691s-1.995-5.69-5.183-5.69c-1.366 0-2.428.524-3.035 1.334V4h-3.014v15.824h3.014v-1.203c.607.853 1.734 1.379 2.992 1.379Zm-.477-2.627c-1.626 0-2.689-1.226-2.689-3.064 0-1.86 1.063-3.086 2.689-3.086 1.583 0 2.667 1.225 2.667 3.086 0 1.838-1.084 3.064-2.667 3.064ZM75.747 20c2.558 0 4.25-1.38 4.25-3.48 0-4.99-5.985-2.43-5.985-4.684 0-.7.585-1.073 1.431-1.073.824 0 1.67.504 1.8 1.445h2.624c-.109-2.167-1.887-3.59-4.51-3.59-2.234 0-3.903 1.38-3.903 3.327 0 4.64 5.876 2.43 5.876 4.684 0 .613-.65 1.072-1.583 1.072-1.128 0-1.887-.613-1.995-1.597H71.15C71.258 18.489 73.08 20 75.747 20Z"/></svg>
````

## File: docs/public/robots.txt
````
User-agent: *
Allow: /
````

## File: docs/public/stackblitz.svg
````
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 35"><path fill="#1389FD" d="M10.344 20.653H0L18.909.167l-5.09 14.183h10.344L5.253 34.833l5.091-14.18z"/><path d="m40.873 23.036 3.336-1.95c.707 1.838 2.092 3.025 4.554 3.025 2.346 0 3.166-.99 3.166-2.093 0-1.47-1.328-2.035-4.271-2.884-3.025-.877-5.965-2.149-5.965-5.91 0-3.732 3.109-5.882 6.503-5.882 3.252 0 5.74 1.669 7.069 4.439l-3.28 1.895c-.707-1.499-1.781-2.545-3.789-2.545-1.641 0-2.602.849-2.602 1.979 0 1.216.763 1.866 3.762 2.771 3.139.99 6.475 2.036 6.475 6.079 0 3.704-2.969 5.967-7.182 5.967-4.044.001-6.702-1.95-7.776-4.891zM62.678 16.901v5.881c0 1.526 1.103 1.555 3.195 1.441v3.31c-5.118.565-6.845-.934-6.845-4.751v-5.881h-2.459v-3.508h2.459v-2.855l3.649-1.103v3.958h3.195v3.508h-3.194zM82.416 13.393v14.14h-3.647v-1.669c-1.018 1.272-2.545 2.064-4.609 2.064-3.761 0-6.871-3.252-6.871-7.465s3.11-7.466 6.871-7.466c2.064 0 3.592.792 4.609 2.064v-1.669h3.647zm-3.647 7.07c0-2.375-1.668-3.987-3.93-3.987-2.234 0-3.903 1.612-3.903 3.987s1.669 3.986 3.903 3.986c2.262.001 3.93-1.611 3.93-3.986zM84.994 20.463c0-4.213 3.166-7.466 7.464-7.466 2.771 0 5.176 1.471 6.334 3.648l-3.139 1.838c-.565-1.159-1.782-1.895-3.224-1.895-2.178 0-3.789 1.611-3.789 3.874 0 2.233 1.611 3.845 3.789 3.845 1.471 0 2.686-.706 3.252-1.866l3.167 1.81c-1.215 2.206-3.62 3.677-6.391 3.677-4.297 0-7.463-3.252-7.463-7.465zM109.568 27.533l-5.146-6.419v6.419h-3.647V7.739h3.647v11.876l4.864-6.222h4.354l-5.684 6.985 5.854 7.154h-4.242zM130.354 21.792c0 3.393-2.743 5.74-6.164 5.74h-8.398V7.739h7.805c3.336 0 6.022 2.262 6.022 5.57 0 1.696-.707 3.026-1.866 3.959 1.584.905 2.601 2.46 2.601 4.524zm-10.661-10.406v4.355h3.903c1.216 0 2.121-.935 2.121-2.179s-.877-2.177-2.121-2.177h-3.903zm6.787 10.152c0-1.329-.961-2.318-2.29-2.318h-4.497v4.665h4.497c1.33-.001 2.29-.99 2.29-2.347zM132.733 6.89h3.647v20.643h-3.647V6.89zM139.295 9.463c0-1.216 1.018-2.262 2.233-2.262 1.244 0 2.262 1.046 2.262 2.262s-1.018 2.233-2.262 2.233c-1.215.001-2.233-1.017-2.233-2.233zm.424 3.93h3.647v14.14h-3.647v-14.14zM151.597 16.901v5.881c0 1.526 1.103 1.555 3.195 1.441v3.31c-5.118.565-6.843-.934-6.843-4.751v-5.881h-2.46v-3.508h2.46v-2.855l3.647-1.103v3.958h3.195v3.508h-3.194zM168 24.111v3.422h-11.169V25.1l5.966-8.284h-5.683v-3.423h10.603v2.433l-5.994 8.285H168z"/></svg>
````

## File: docs/public/vital.svg
````
<svg role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117 46" class="fill-brand-royal w-20 xl:w-24"><path d="M19.5 44.035h-5.105c-1.56 0-2.979-.993-3.617-2.482L.213 14.749h7.8c1.702 0 3.12 1.064 3.687 2.695l5.318 16.309h.142l5.318-16.31a3.897 3.897 0 0 1 3.688-2.694h7.445L23.046 41.553c-.568 1.489-1.986 2.482-3.546 2.482ZM37.014 44.035h9.572V14.748h-9.572v29.285ZM64.598 22.265V33.47c0 1.347.284 2.411.78 3.12.496.71 1.49 1.064 2.836 1.064.497 0 .993-.071 1.49-.142.496-.071.992-.213 1.347-.355l.141 7.091c-.638.213-1.489.426-2.552.638-.993.213-2.057.284-3.05.284-1.985 0-3.616-.213-4.892-.709-1.347-.496-2.41-1.206-3.19-2.127-.78-.922-1.348-2.057-1.703-3.333-.354-1.276-.496-2.695-.496-4.255v-12.48h-4.68v-7.161h4.609v-3.83c0-2.127 1.702-3.9 3.83-3.9h5.6v7.73h6.88v7.161h-6.95ZM93.458 31.555h-1.205c-1.064 0-2.128.07-3.191.141-1.064.071-2.057.284-2.837.568-.85.283-1.56.709-2.056 1.205-.567.496-.85 1.206-.85 2.056 0 .568.14.993.354 1.419.283.425.567.709.992.921.426.213.851.426 1.348.497.496.07.992.142 1.489.142 1.985 0 3.474-.568 4.467-1.631 1.064-1.064 1.56-2.553 1.56-4.397v-.921h-.07Zm-17.585-12.48c1.701-1.631 3.687-2.908 6.027-3.688 2.269-.85 4.609-1.205 7.02-1.205 2.482 0 4.538.284 6.24.922 1.702.638 3.049 1.56 4.113 2.836 1.063 1.276 1.843 2.907 2.34 4.822.496 1.914.709 4.254.709 6.949v14.75h-8.793v-3.12h-.142c-.709 1.204-1.843 2.126-3.403 2.835-1.49.639-3.12.993-4.893.993a12.71 12.71 0 0 1-3.616-.496c-1.277-.284-2.411-.851-3.404-1.56a7.607 7.607 0 0 1-2.553-2.837c-.638-1.205-.993-2.623-.993-4.325 0-2.127.568-3.83 1.702-5.105 1.135-1.277 2.624-2.27 4.468-2.979a22.613 22.613 0 0 1 6.098-1.418c2.198-.213 4.396-.354 6.523-.354v-.568c0-1.418-.496-2.552-1.489-3.19-.992-.71-2.269-1.064-3.758-1.064a9.758 9.758 0 0 0-3.97.85 11.795 11.795 0 0 0-3.263 2.128l-4.963-5.176ZM106.932 44.53V3.9c0-2.127 1.701-3.9 3.829-3.9h5.956v44.53h-9.785ZM47.084 5.39c0 2.977-2.411 5.388-5.319 5.388-2.978 0-5.318-2.41-5.318-5.389C36.447 2.411 38.858 0 41.765 0c2.979 0 5.319 2.41 5.319 5.39Z"></path></svg>
````

## File: docs/public/vite.svg
````
<svg width="410" height="404" viewBox="0 0 410 404" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z" fill="url(#paint0_linear)"/>
<path d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z" fill="url(#paint1_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="6.00017" y1="32.9999" x2="235" y2="344" gradientUnits="userSpaceOnUse">
<stop stop-color="#41D1FF"/>
<stop offset="1" stop-color="#BD34FE"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="194.651" y1="8.81818" x2="236.076" y2="292.989" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFEA83"/>
<stop offset="0.0833333" stop-color="#FFDD35"/>
<stop offset="1" stop-color="#FFA800"/>
</linearGradient>
</defs>
</svg>
````

## File: docs/public/voidzero.svg
````
<svg width="378" height="164" viewBox="0 0 378 164" fill="none" xmlns="http://www.w3.org/2000/svg">
<g>
<path d="M108.815 63.6886C113.091 63.6886 116.857 64.3672 120.115 65.7243C123.372 67.0815 126.12 68.9816 128.36 71.4245C130.667 73.7995 132.398 76.6835 133.551 80.0765C134.705 83.4694 135.282 87.2356 135.282 91.375C135.282 95.5822 134.705 99.3823 133.551 102.775C132.466 106.1 130.803 108.984 128.563 111.427C126.324 113.87 123.542 115.736 120.216 117.026C116.959 118.315 113.159 118.96 108.815 118.96C104.54 118.96 100.774 118.315 97.5161 117.026C94.2587 115.668 91.5102 113.802 89.2707 111.427C87.0991 108.984 85.4365 106.066 84.2828 102.674C83.197 99.2805 82.6541 95.5144 82.6541 91.375C82.6541 87.2356 83.197 83.4694 84.2828 80.0765C85.4365 76.6835 87.1331 73.7995 89.3725 71.4245C91.612 68.9816 94.3605 67.0815 97.6179 65.7243C100.875 64.3672 104.608 63.6886 108.815 63.6886ZM108.815 108.883C111.462 108.883 113.702 108.442 115.534 107.559C117.434 106.609 118.961 105.354 120.115 103.793C121.336 102.232 122.218 100.4 122.761 98.2966C123.372 96.193 123.677 93.9197 123.677 91.4768C123.677 89.0338 123.372 86.7606 122.761 84.6569C122.218 82.4855 121.336 80.6193 120.115 79.0586C118.961 77.4978 117.434 76.2764 115.534 75.3942C113.702 74.5121 111.462 74.071 108.815 74.071C106.237 74.071 104.031 74.5121 102.199 75.3942C100.366 76.2764 98.8394 77.4978 97.6179 79.0586C96.3964 80.6193 95.4802 82.4855 94.8694 84.6569C94.3265 86.7606 94.0551 89.0338 94.0551 91.4768C94.0551 93.9197 94.3265 96.193 94.8694 98.2966C95.4802 100.4 96.3624 102.232 97.5161 103.793C98.7376 105.354 100.265 106.609 102.097 107.559C103.997 108.442 106.237 108.883 108.815 108.883Z" fill="black"/>
<path d="M218.981 118.247H208.089L207.478 110.816C205.51 113.667 203.033 115.702 200.047 116.924C197.061 118.145 193.702 118.824 189.969 118.96C185.83 118.892 182.267 118.145 179.281 116.72C176.295 115.227 173.818 113.259 171.85 110.816C169.882 108.306 168.423 105.422 167.473 102.164C166.591 98.9073 166.15 95.4465 166.15 91.7821C166.15 87.7785 166.659 84.0802 167.676 80.6872C168.762 77.2943 170.357 74.3424 172.461 71.8316C174.565 69.3209 177.143 67.3529 180.197 65.9279C183.251 64.435 186.814 63.6886 190.886 63.6886C193.804 63.6886 196.756 64.1636 199.742 65.1136C202.728 66.0636 205.273 67.828 207.376 70.4066V36.1888L218.981 45.5409V118.247ZM192.209 74.1728C189.63 74.1728 187.425 74.6138 185.592 75.496C183.76 76.3782 182.233 77.5996 181.012 79.1604C179.858 80.7211 179.01 82.5873 178.467 84.7587C177.924 86.8624 177.652 89.1356 177.652 91.5785C177.652 94.0215 177.924 96.2947 178.467 98.3984C179.01 100.502 179.858 102.334 181.012 103.895C182.233 105.456 183.76 106.711 185.592 107.661C187.492 108.543 189.766 108.984 192.413 108.984C194.923 108.984 197.095 108.509 198.927 107.559C200.828 106.541 202.388 105.218 203.61 103.59C204.899 101.961 205.849 100.095 206.46 97.9912C207.071 95.8876 207.376 93.7161 207.376 91.4768C207.376 89.1017 207.071 86.8624 206.46 84.7587C205.917 82.6551 205.035 80.8569 203.814 79.364C202.592 77.8032 201.031 76.5817 199.131 75.6996C197.231 74.7496 194.923 74.2406 192.209 74.1728Z" fill="black"/>
<path d="M26 63.3832H38.8261L53.6881 105.931L68.4483 63.3832H81.2744L61.1191 117.026H46.1553L26 63.3832Z" fill="black"/>
<path d="M270.344 31C266.883 35.1227 263.941 39.313 261.518 43.5709C259.096 47.7612 257.123 52.019 255.6 56.3445C254.077 60.67 252.97 65.0292 252.278 69.4223C251.585 73.8153 251.205 78.2083 251.135 82.6014C251.274 91.5227 252.797 100.275 255.704 108.858C258.611 117.374 263.457 125.755 270.24 134H256.95C253.973 130.35 251.378 126.43 249.163 122.24C246.948 118.117 245.113 113.86 243.66 109.467C242.206 105.006 241.099 100.511 240.337 95.9833C239.645 91.4551 239.299 86.9944 239.299 82.6014C239.299 78.2083 239.645 73.7477 240.337 69.2195C241.099 64.6237 242.206 60.0955 243.66 55.6348C245.183 51.1742 247.052 46.8825 249.267 42.7598C251.482 38.5696 254.077 34.6496 257.054 31H270.344Z" fill="black"/>
<path d="M320.955 134C327.808 125.755 332.688 117.34 335.595 108.757C338.502 100.106 340.025 91.3537 340.163 82.5C340.025 73.5787 338.502 64.8264 335.595 56.2431C332.688 47.6598 327.842 39.2454 321.059 31H334.245C337.222 34.6496 339.817 38.5696 342.032 42.7598C344.247 46.8825 346.082 51.1742 347.535 55.6348C349.058 60.0279 350.166 64.5223 350.858 69.1181C351.619 73.6463 352 78.107 352 82.5C352 86.893 351.619 91.3875 350.858 95.9833C350.096 100.511 348.954 105.006 347.431 109.467C345.978 113.86 344.144 118.117 341.929 122.24C339.714 126.43 337.118 130.35 334.141 134H320.955Z" fill="black"/>
<path d="M323.673 82.3885C323.673 87.8851 323.096 92.9066 321.943 97.4532C320.857 101.932 319.126 105.766 316.751 108.955C314.444 112.145 311.526 114.622 307.997 116.386C304.468 118.15 300.294 119.032 295.476 119.032C290.658 119.032 286.484 118.184 282.955 116.488C279.426 114.723 276.508 112.28 274.201 109.159C271.894 106.037 270.163 102.271 269.009 97.8604C267.856 93.4495 267.279 88.5298 267.279 83.101C267.279 77.5366 267.822 72.4472 268.908 67.8328C269.993 63.2184 271.69 59.2487 273.997 55.9236C276.305 52.5985 279.223 50.0538 282.752 48.2895C286.348 46.4573 290.59 45.5412 295.476 45.5412C300.226 45.5412 304.366 46.4233 307.895 48.1877C311.424 49.952 314.342 52.4628 316.649 55.72C319.025 58.9772 320.789 62.8791 321.943 67.4256C323.096 71.9043 323.673 76.892 323.673 82.3885ZM278.985 82.3885C278.985 86.1208 279.257 89.5816 279.8 92.7709C280.343 95.9603 281.259 98.7425 282.548 101.118C282.729 101.441 282.917 101.755 283.114 102.059C284.321 103.929 285.829 105.447 287.638 106.614C288.533 107.163 289.52 107.595 290.6 107.91C292.057 108.335 293.683 108.548 295.476 108.548C298.53 108.548 301.109 107.903 303.212 106.614C305.316 105.257 307.013 103.425 308.302 101.118C309.592 98.7425 310.508 95.9603 311.051 92.7709C311.593 89.5816 311.865 86.1208 311.865 82.3885C311.865 78.7242 311.593 75.2973 311.051 72.1079C310.508 68.8507 309.592 66.0685 308.302 63.7613C308.102 63.3928 307.892 63.0366 307.673 62.6926C306.477 60.8195 304.99 59.3095 303.212 58.1629C302.301 57.5748 301.3 57.1142 300.21 56.7809C298.785 56.3451 297.207 56.1272 295.476 56.1272C292.354 56.1272 289.742 56.8057 287.638 58.1629C285.534 59.5201 283.838 61.3862 282.548 63.7613C281.259 66.0685 280.343 68.8507 279.8 72.1079C279.257 75.2973 278.985 78.7242 278.985 82.3885Z" fill="black"/>
<path d="M156.455 58.1629H144.861V46.5701H156.455V58.1629Z" fill="black"/>
<path d="M156.455 63.7177V108.557H162.046V118.251H138.956V108.557H144.858V73.4118H138.956V63.7177H156.455Z" fill="black"/>
<path d="M300.726 54.4442H309.983L290.466 110.556H281.21L300.726 54.4442Z" fill="black"/>
</g>
</svg>
````

## File: docs/public/zammad.svg
````
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="126px" height="108px" viewBox="0 0 42 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
    <!-- Generator: Sketch 3.3.2 (12043) - http://www.bohemiancoding.com/sketch -->
    <title>logo</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <g id="logo" sketch:type="MSArtboardGroup">
            <g sketch:type="MSLayerGroup" transform="translate(1.000000, 0.000000)" id="Shape">
                <path d="M27.3375,12.6 L36.72,9.72 L31.1625,13.2525 L27.3375,12.6 Z" fill="#CA2317" sketch:type="MSShapeGroup"></path>
                <path d="M33.0525,19.62 L31.1625,13.2525 L36.72,9.72 L35.055,15.435 L33.0525,19.62 Z" fill="#E84F83" sketch:type="MSShapeGroup"></path>
                <path d="M39.465,7.9875 L38.43,9.72 L35.055,15.435 L36.72,9.72 L39.465,7.9875 Z" fill="#CA2317" sketch:type="MSShapeGroup"></path>
                <path d="M39.8025,9.1125 L37.1925,11.79 L38.43,9.72 L39.8025,9.1125 Z" fill="#E54011" sketch:type="MSShapeGroup"></path>
                <path d="M27.9,10.8225 L35.5725,10.0575 L30.24,11.7 L27.9,10.8225 Z" fill="#E54011" sketch:type="MSShapeGroup"></path>
                <path d="M28.1925,15.165 L31.1625,13.2525 L33.0525,19.62 L32.0625,21.645 L28.1925,15.165 Z" fill="#CA2317" sketch:type="MSShapeGroup"></path>
                <path d="M23.76,22.725 L22.3425,5.4 L32.0625,21.645 L23.76,22.725 Z" fill="#B7DFF2" sketch:type="MSShapeGroup"></path>
                <path d="M19.7325,27.1575 L23.76,22.725 L32.0625,21.645 L19.7325,27.1575 Z" fill="#E54011" sketch:type="MSShapeGroup"></path>
                <path d="M0.1575,35.865 L19.7325,27.1575 L23.76,22.725 L17.37,22.0725 L0.1575,35.865 Z" fill="#FFCE33" sketch:type="MSShapeGroup"></path>
                <path d="M0.9,28.755 L10.9575,27.225 L14.085,24.705 L12.555,24.03 L0.9,28.755 Z" fill="#D6B12D" sketch:type="MSShapeGroup"></path>
                <path d="M4.5225,20.5425 L14.085,24.705 L17.37,22.0725 L4.5225,20.5425 Z" fill="#FFDE85" sketch:type="MSShapeGroup"></path>
                <path d="M21.6225,11.6775 L20.4075,11.88 L17.37,22.0725 L20.655,20.0025 L21.6225,11.6775 Z" fill="#009EC6" sketch:type="MSShapeGroup"></path>
                <path d="M23.4,18.2475 L20.655,20.0025 L22.3425,5.4 L23.4,18.2475 Z" fill="#5EAFCE" sketch:type="MSShapeGroup"></path>
                <path d="M13.0275,13.05 L21.6225,11.6775 L22.005,8.28 L13.0275,13.05 Z" fill="#045972" sketch:type="MSShapeGroup"></path>
                <path d="M12.105,5.085 L19.575,9.585 L22.005,8.28 L22.0725,7.8075 L12.105,5.085 Z" fill="#5A8591" sketch:type="MSShapeGroup"></path>
                <path d="M13.5675,0.18 L20.3625,7.335 L22.0725,7.8075 L22.3425,5.4 L13.5675,0.18 Z" fill="#009EC6" sketch:type="MSShapeGroup"></path>
                <path d="M17.37,22.0725 L23.4,18.2475 L23.76,22.725 L17.37,22.0725 Z" fill="#F39804" sketch:type="MSShapeGroup"></path>
            </g>
        </g>
    </g>
</svg>
````

## File: docs/blog.md
````markdown
---
sidebar: false
editLink: false
outline: false
---

<script setup>
import BlogIndex from './.vitepress/components/BlogIndex.vue'
</script>

# Latest From the Vitest Blog

<BlogIndex />
````

## File: docs/index.md
````markdown
---
layout: home
sidebar: false

title: Vitest
titleTemplate: Next Generation testing framework

hero:
  name: Vitest
  text: Next Generation Testing Framework
  tagline: A Vite-native testing framework. It's fast!
  image:
    src: /logo-shadow.svg
    alt: Vitest
  actions:
    - theme: brand
      text: Get Started
      link: /guide/
    - theme: alt
      text: Features
      link: /guide/features
    - theme: alt
      text: Why Vitest?
      link: /guide/why
    - theme: alt
      text: View on GitHub
      link: https://github.com/vitest-dev/vitest

features:
  - title: Vite Powered
    icon: <span class="i-logos:vitejs"></span>
    details: Reuse Vite's config and plugins - consistent across your app and tests. But it's not required to use Vitest!
  - title: Jest Compatible
    icon: <span class="i-logos:jest"></span>
    details: Expect, snapshot, coverage, and more - migrating from Jest is straightforward.
  - title: Smart & instant watch mode
    icon: ⚡
    details: Only rerun the related changes, just like HMR for tests!
  - title: ESM, TypeScript, JSX
    icon: <span class="i-logos:typescript-icon"></span>
    details: Out-of-box ESM, TypeScript and JSX support powered by esbuild.
---
````

## File: docs/package.json
````json
{
  "name": "docs",
  "type": "module",
  "private": true,
  "scripts": {
    "dev": "vitepress --port 3333 --open",
    "build": "nr cli-table && nr prefetch && vitepress build",
    "cli-table": "tsx .vitepress/scripts/cli-generator.ts",
    "build-no-prefetch": "vitepress build",
    "serve": "vitepress serve",
    "preview-https": "pnpm run build && serve .vitepress/dist",
    "preview-https-no-prefetch": "pnpm run build-no-prefetch && serve .vitepress/dist",
    "prefetch": "tsx .vitepress/scripts/fetch-avatars.ts",
    "generate-pwa-icons": "pwa-assets-generator"
  },
  "dependencies": {
    "@vueuse/core": "catalog:",
    "vue": "catalog:"
  },
  "devDependencies": {
    "@iconify-json/carbon": "catalog:",
    "@iconify-json/logos": "catalog:",
    "@shikijs/transformers": "^3.4.2",
    "@shikijs/vitepress-twoslash": "^3.4.2",
    "@unocss/reset": "catalog:",
    "@vite-pwa/assets-generator": "^0.2.6",
    "@vite-pwa/vitepress": "^1.0.0",
    "@vitejs/plugin-vue": "catalog:",
    "https-localhost": "^4.7.1",
    "tinyglobby": "catalog:",
    "unocss": "catalog:",
    "unplugin-vue-components": "catalog:",
    "vite": "^5.2.8",
    "vite-plugin-pwa": "^0.21.2",
    "vitepress": "2.0.0-alpha.5",
    "vitepress-plugin-group-icons": "^1.5.5",
    "vitepress-plugin-tabs": "^0.7.1",
    "workbox-window": "^7.3.0"
  }
}
````

## File: docs/pwa-assets.config.ts
````typescript
import {
  defineConfig,
  minimalPreset as preset,
} from '@vite-pwa/assets-generator/config'

export default defineConfig({
  preset: {
    ...preset,
    assetName(type, size) {
      switch (type) {
        case 'transparent':
          return `pwa-${size.width}x${size.height}.png`
        case 'maskable':
          return 'maskable-icon.png'
        case 'apple':
          return 'apple-touch-icon.png'
      }
    },
  },
  images: ['public/logo.svg'],
})
````

## File: docs/team.md
````markdown
---
layout: page
title: Meet the Team
description: The development of Vitest is guided by an international team.
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamPageSection,
  VPTeamMembers
} from 'vitepress/theme'
import { teamMembers, teamEmeritiMembers } from './.vitepress/contributors'
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Meet the Team</template>
    <template #lead>
      The development of Vitest is guided by an international team, some of whom
      have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="teamMembers" />
  <VPTeamPageSection>
    <template #title>Team Emeriti</template>
    <template #lead>
      Here we honor some no-longer-active team members who have made valuable
      contributions in the past.
    </template>
    <template #members>
      <VPTeamMembers size="small" :members="teamEmeritiMembers" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
````

## File: docs/tsconfig.json
````json
{
  "compilerOptions": {
    "target": "esnext",
    "jsx": "preserve",
    "lib": ["DOM", "ESNext"],
    "baseUrl": ".",
    "module": "esnext",
    "moduleResolution": "Bundler",
    "paths": {
      "~/*": ["src/*"]
    },
    "resolveJsonModule": true,
    "types": [
      "vite/client",
      "vite-plugin-pwa/client",
      "vitepress"
    ],
    "strict": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  },
  "include": [
    "./*.ts",
    "./.vitepress/**/*.ts",
    "./.vitepress/**/*.vue"
  ],
  "exclude": ["dist", "node_modules"]
}
````

## File: docs/vite.config.ts
````typescript
import type { Plugin } from 'vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    // vitepress is aliased with replacement `join(DIST_CLIENT_PATH, '/index')`
    // This needs to be excluded from optimization
    exclude: ['@vueuse/core', 'vitepress'],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    Components({
      include: [/\.vue/, /\.md/],
      dirs: '.vitepress/components',
      dts: '.vitepress/components.d.ts',
    }) as Plugin,
    Unocss({
      shortcuts: [
        ['btn', 'px-4 py-1 rounded inline-flex justify-center gap-2 text-white leading-30px children:mya !no-underline cursor-pointer disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
      ],
      presets: [
        presetUno({
          dark: 'media',
        }),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
        }),
      ],
    }),
  ],
})
````
