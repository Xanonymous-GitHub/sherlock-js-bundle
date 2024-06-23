/// <reference types="vite/client" />

import type jQuery from '@types/jquery'

declare global {
  interface Window {
    jQuery: typeof jQuery
    $: typeof jQuery
  }

  type $ = typeof jQuery
  type jQuery = typeof jQuery
}
