import { resolve } from 'path'
import { $, cd } from "zx";

const nodeModulePath = resolve(__dirname, '../node_modules')
const prismPath = resolve(__dirname, nodeModulePath, 'prism-esm')
const prismComponentsPath = resolve(__dirname, prismPath, 'components')

cd(prismComponentsPath)
const allComponentImports = (await $`ls *.ts`).stdout
    .split(/\r?\n/)
    .map((item) => { return item.trim() })
    .filter((item) => item !== "")
    .map((item, i) => `import { loader as _${i} } from 'prism-esm/components/${item.replace('.d.ts', '')}'`)

for (const component of allComponentImports) {
    console.log(component)
}

for (let i = 0; i < allComponentImports.length; i++) {
    console.log(`_${i}(prism)`)
}
