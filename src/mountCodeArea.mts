export async function mountCodeArea(theme: string) {
  const codeAreaPlaces = document.querySelectorAll('div[id^="code-area-"]')
  for (const codeAreaPlace of codeAreaPlaces) {
    const dataSrc = codeAreaPlace.getAttribute('data-src')
    if (!dataSrc) {
      console.warn(`data-src attribute is missing, on page ${location.href}`)
      continue
    }

    const sourceCode = await (await fetch(new URL(`${location.origin}${dataSrc}`))).text()

    const lang = dataSrc.split('.').slice(-1)[0]
    if (!lang) {
      console.warn(`lang is missing, on page ${location.href}`)
      continue
    }

    const codeArea = (await import('./components/CodeArea.tsx')).default
    const { bundledLanguages, createHighlighter } = (await import('shiki'))
    const { renderComponent } = (await import('./utils/renderComponent.mts'))

    renderComponent(codeArea, codeAreaPlace, {
      sourceCode,
      highlighter: await createHighlighter({
        themes: [theme],
        langs: Object.keys(bundledLanguages),
      }),
      highlightOptions: {
        lang,
        theme,
      },
    })
  }
}
