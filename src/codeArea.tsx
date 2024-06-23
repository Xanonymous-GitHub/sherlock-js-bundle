import { type FC, useEffect } from 'react'
import type { Prism } from 'prism-esm'
import { getRenderedComponent } from './utils/renderComponent.mts'

interface CodeAreaProps {
  id: string
  submissionName: string
  submissionId: string
  displayName: string
  highlightLineNumStr: string
  workspaceId: string
  fullName: string
  prism: Prism
}

declare module 'prism-esm' {
  interface Prism {
    plugins: {
      lineHighlight: {
        highlightLines: (pre: HTMLPreElement, lines?: string, classes?: string[]) => any
      }
    }
  }
}

const CodeArea: FC<CodeAreaProps> = (
  {
    id,
    submissionName,
    submissionId,
    displayName,
    highlightLineNumStr,
    workspaceId,
    fullName,
    prism,
  },
) => {
  const dataSrc = [
    '/dashboard/workspaces/manage/',
    workspaceId,
    '/submission/',
    submissionId,
    '/file/',
    id,
    '/',
    fullName,
  ].reduce((acc, cur) => acc + cur)

  const CodeContainer = getRenderedComponent(
        `<pre class="line-numbers mt-0" data-line={${highlightLineNumStr}} data-src={${dataSrc}}></pre>`,
  ) as HTMLPreElement

  useEffect(() => {
    prism.plugins.lineHighlight.highlightLines(CodeContainer)
  }, [])

  return (
    <>
      <div className="card-header">
        {submissionName}
        :
        {displayName}
      </div>
      { CodeContainer }
    </>
  )
}

export default CodeArea
