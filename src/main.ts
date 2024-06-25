import { createHighlighterCore } from 'shiki/core'
import minDarkTheme from 'shiki/themes/min-dark.mjs'
import jsLang from 'shiki/langs/javascript.mjs'
import getWasm from 'shiki/wasm'

(async () => {
  const code = await (await fetch('/code.min.js')).text()
  const highlighter = await createHighlighterCore({
    themes: [minDarkTheme],
    langs: [
      jsLang,
    ],
    loadWasm: getWasm,
  })
  const codeBlock = highlighter.codeToHtml(code, {
    lang: 'javascript',
    theme: 'min-dark',
  })
  document.body.insertAdjacentHTML('afterbegin', codeBlock)
})()
