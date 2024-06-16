(async () => {
    const codeArea = document.createElement('p')
    codeArea.textContent = await (await fetch('/code.min.js')).text()
    document.body.appendChild(codeArea)
})()
