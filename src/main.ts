import { getHighlighterCore } from 'shiki'
import minDarkTheme from 'shiki/themes/min-dark.mjs'
import jsLang from 'shiki/langs/javascript.mjs'
import './code-preview-page.scss'
import getWasm from 'shiki/wasm'

(async () => {
    const code = await (await fetch('/code.min.js')).text()
    const highlighter = await getHighlighterCore({
        themes: [minDarkTheme],
        langs: [
            jsLang
        ],
        loadWasm: getWasm
    })
    const codeBlock = highlighter.codeToHtml(code, {
        lang: 'javascript',
        theme: 'min-dark'
    })
    document.body.insertAdjacentHTML('afterbegin', codeBlock)
})();
