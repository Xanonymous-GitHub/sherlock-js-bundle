import { getHighlighterCore } from 'shiki'
import minDarkTheme from 'shiki/themes/min-dark.mjs'
import './code-preview-page.scss'

(async () => {
    const code = await (await fetch('/code.min.js')).text()
    const highlighter = await getHighlighterCore({
        themes: [minDarkTheme],
        langs: [
            import('shiki/langs/javascript.mjs')
        ],
        loadWasm: import('shiki/wasm')
    })
    const codeBlock = highlighter.codeToHtml(code, {
        lang: 'javascript',
        theme: 'min-dark'
    })
    document.body.insertAdjacentHTML('afterbegin', codeBlock)
})();
