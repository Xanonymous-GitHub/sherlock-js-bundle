import type { ElementType } from 'react'
import type { Container } from 'react-dom/client'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'

export function renderComponent<P extends object>(
  JsxComponent: ElementType<P> | string,
  rootContainer: Container,
  props?: P,
): void {
  createRoot(rootContainer).render(createElement(JsxComponent, props))
}
