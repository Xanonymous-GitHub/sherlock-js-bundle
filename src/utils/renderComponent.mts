import { type ElementType, createElement } from 'react'
import { type Root } from 'react-dom/client'
import { flushSync } from 'react-dom'

export function getRenderedComponent<P extends object>(
  JsxComponent: ElementType<P> | string,
  root: Root,
  props?: P,
): Node | null {
  const fragment = new DocumentFragment()

  flushSync(() => {
    root.render(createElement(JsxComponent, props))
  })

  return fragment.firstChild
}
