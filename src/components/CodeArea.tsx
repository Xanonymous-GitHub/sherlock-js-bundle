import type { FC, MouseEvent } from 'react'
import type { CodeToHastOptions, createHighlighter } from 'shiki'
import { StrictMode, useCallback, useMemo, useState } from 'react'
import '../styles/code-area.scss'

interface CodeAreaProps {
  sourceCode: string
  highlighter: Awaited<ReturnType<typeof createHighlighter>>
  highlightOptions: CodeToHastOptions
}

const CodeArea: FC<CodeAreaProps> = ({ sourceCode, highlighter, highlightOptions }) => {
  const renderedAreaHtml = useMemo(() => highlighter.codeToHtml(sourceCode, highlightOptions), [sourceCode])

  // It is not recommended to use `dangerouslySetInnerHTML` in React.
  // However, in this case, it is necessary to render the code block.
  // We can't find a better way to render the code block without using React because
  // we need some extra layers to wrap the code block.
  // So we are using `dangerouslySetInnerHTML` here, but we do an extra step to ensure the code is safe.
  // The step is to create a template element and insert the code block into it.
  // Then we get the first child of the template element, which is the code block.
  const codeDOMConverter = document.createElement('template')
  codeDOMConverter.insertAdjacentHTML('afterbegin', renderedAreaHtml)
  const codeArea = codeDOMConverter.firstElementChild
  codeDOMConverter.remove()

  const [copyButtonClasses, setCopyButtonClasses] = useState('copy')

  const onCopyClicked = useCallback(async (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.stopPropagation()
    e.preventDefault()
    await navigator.clipboard.writeText(sourceCode)
    setCopyButtonClasses('copy copied')
    setTimeout(() => {
      setCopyButtonClasses('copy')
    }, 3000)
  }, [])

  return (
    <div className="code-area">
      {
        codeArea
        && (
          <StrictMode>
            <button title="Copy Code" className={copyButtonClasses} onClick={e => onCopyClicked(e)}></button>
            <span className="language-name">{highlightOptions.lang}</span>
            <div dangerouslySetInnerHTML={{ __html: codeArea.outerHTML }} />
          </StrictMode>
        )
      }
    </div>
  )
}

export default CodeArea
