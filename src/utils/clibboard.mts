export async function copyToClipboard(text: string) {
  if (!document.hasFocus()) {
    return
  }

  await navigator.clipboard.writeText(text)
}
