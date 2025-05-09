import { createOnigurumaEngine } from '@shikijs/engine-oniguruma'
import { createHighlighterCore } from 'shiki/core'
import jsLang from 'shiki/langs/javascript.mjs'
import minDarkTheme from 'shiki/themes/min-dark.mjs'

(async () => {
  const code = await (await fetch('/code.min.js')).text()
  const highlighter = await createHighlighterCore({
    themes: [minDarkTheme],
    langs: [
      jsLang,
    ],
    engine: createOnigurumaEngine(),
  })
  const codeBlock = highlighter.codeToHtml(code, {
    lang: 'javascript',
    theme: 'min-dark',
  })
  document.body.insertAdjacentHTML('afterbegin', codeBlock)
})()
