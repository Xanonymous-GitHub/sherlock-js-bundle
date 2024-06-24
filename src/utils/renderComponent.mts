import { type ElementType, createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { flushSync } from 'react-dom'

export function getRenderedComponent<P extends object>(
  JsxComponent: ElementType<P> | string,
  props?: P,
): Node | null {
  const fragment = new DocumentFragment()
  const root = createRoot(fragment)

  flushSync(() => {
    root.render(createElement(JsxComponent, props))
  })

  const child = fragment.firstChild
  root.unmount()

  return child
}
