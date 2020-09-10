export const countCharacters = text => text.length

export const countParagraphs = text =>
  text
    .trim()
    .split(/\n+/)
    .filter(paragraph => paragraph !== "").length

export const countWords = text =>
  text
    .trim()
    .split(/\s+/)
    .filter(word => word !== "").length

const isAlpha = text => RegExp(/[a-zA-Z]+/).test(text)

export const toCapitalize = text =>
  text
    .trim()
    .split("")
    .map((char, i, arr) =>
      i === 0 || !isAlpha(arr[i - 1]) ? char.toUpperCase() : char
    )
    .join("")

export const toLowerCase = text => text.trim().toLowerCase()

export const toUpperCase = text => text.trim().toUpperCase()
