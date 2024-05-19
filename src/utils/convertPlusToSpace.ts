export function convertPlusToSpace(encodedStr: string) {
  return encodedStr.replace(/%2B/g, ' ')
}
