import { resolve } from 'node:path'
import { $, cd } from 'zx'

const nodeModulePath = resolve(__dirname, '../node_modules')
const prismPath = resolve(__dirname, nodeModulePath, 'prism-esm')
const prismComponentsPath = resolve(__dirname, prismPath, 'components')
const prismPluginsPath = resolve(__dirname, prismPath, 'plugins')

function toSmallCamelCase(data: string) {
  return data
    .replaceAll(/[^A-Z0-9]/gi, ' ')
    .split(' ')
    .map((word, i) => i !== 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word)
    .reduce((acc, cur) => acc + cur)
}

const targetNames: Array<string> = []

cd(prismComponentsPath)
const allComponentImports = (await $`ls *.ts`).stdout
  .split(/\r?\n/)
  .map(item => item.trim())
  .filter(item => item !== '')
  .map((item) => {
    const importName = item.replace('.d.ts', '')
    const targetName = `${toSmallCamelCase(importName.match(/(?<=-).+/)![0])}Loader`
    targetNames.push(targetName)
    return `import { loader as ${targetName} } from 'prism-esm/components/${importName}'`
  })

cd(prismPluginsPath)
const allPluginImports = (await $`ls`).stdout
  .split(/\r?\n/)
  .map(item => item.trim())
  .filter(item => item !== '')
  .map((item) => {
    const camelName = toSmallCamelCase(item)
    targetNames.push(camelName)
    return `import { Plugin as ${camelName} } from 'prism-esm/plugins/${item}/prism-${item}'`
  })

function genFile() {
  return [
    '// Generated from getAllPrism.ts',
    'import type { Prism } from "prism-esm"',
    ...allComponentImports,
    // Since plugins do not have type definitions, importing those will cause module not found error
    // So we use @ts-ignore to skip that check.
    ...allPluginImports.map(importLine => `// @ts-ignore\n${importLine}`),
    'export const loadPrism = (prism: Prism) => {',
    ...targetNames.map(name => `    ${name}(prism)`),
    '}',
  ]
}

for (const line of genFile()) {
  // Output all lines into stdout
  console.log(line)
}
