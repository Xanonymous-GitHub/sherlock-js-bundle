import { createElement, type ElementType } from "react";
import { createRoot } from "react-dom/client"

export function getRenderedComponent<P extends {}>(
    JsxComponent: ElementType<P> | string,
    props?: P
): HTMLElement {
    const element = document.createElement('div')
    createRoot(element).render(createElement(JsxComponent, props))
    return element
}
