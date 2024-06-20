import { codeToHtml } from 'shiki'
import './code-preview-page.scss'

const code = await (await fetch('/code.min.js')).text()
const codeBlock = await codeToHtml(code, {
    lang: 'javascript',
    theme: 'min-dark'
})
document.body.insertAdjacentHTML('afterbegin', codeBlock)
