// A function wrapper to let the original function `callback` be called,
// after the caller stops calling the wrapper `debounceFn` for a specified period `wait`.
// See https://stackoverflow.com/questions/25991367/difference-between-throttling-and-debouncing-a-function
export function debounceFn<T extends (...args: any[]) => void>(
  callback: T,
  wait: number,
  immediate: boolean = false,
) {
  let timeout: ReturnType<typeof setTimeout> | null

  return function <U>(this: U, ...args: Parameters<typeof callback>): void {
    const later = () => {
      clearTimeout(timeout as unknown as number)
      timeout = null

      if (!immediate) {
        callback.apply(this, args)
      }
    }
    const callNow = immediate && !timeout

    if (Number.isSafeInteger(timeout)) {
      clearTimeout(timeout as unknown as number)
    }

    timeout = setTimeout(later, wait)

    if (callNow) {
      callback.apply(this, args)
    }
  }
}

// A function wrapper to let the original function `callback` be called at most once per specified period `wait`.
// See https://stackoverflow.com/questions/25991367/difference-between-throttling-and-debouncing-a-function
export function throttleFn<T extends (...args: any[]) => void>(
  callback: T,
  wait: number,
) {
  let timeout: ReturnType<typeof setTimeout> | null

  return function <U>(this: U, ...args: Parameters<typeof callback>): void {
    if (!timeout) {
      callback.apply(this, args)
      timeout = setTimeout(() => {
        clearTimeout(timeout as unknown as number)
        timeout = null
      }, wait)
    }
  }
}
