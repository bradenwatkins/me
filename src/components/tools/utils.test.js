import {
  countCharacters,
  countWords,
  countParagraphs,
  toCapitalize,
  toLowerCase,
  toUpperCase,
} from "./utils"

it("countCharacters should count the characters", () => {
  expect(countCharacters("i have\t20\ncharacters")).toEqual(20)
})

it("countParagraphs should count the paragraphs", () => {
  expect(countParagraphs("i\nhave\n\n3 paragraphs")).toEqual(3)
})

it("countWords should count the words", () => {
  expect(countWords("i have\t4\nwords")).toEqual(4)
})

it("toCapitalize should capitalize the first letter of each letter group", () => {
  expect(toCapitalize("capitalize each word")).toEqual("Capitalize Each Word")

  expect(toCapitalize("capitalize each    word")).toEqual(
    "Capitalize Each    Word"
  )

  expect(toCapitalize("capitalize-each_word")).toEqual("Capitalize-Each_Word")
})

it("toLowerCase should lowercase all letters", () => {
  expect(toLowerCase("LOWER-CASE ALL_MY$LETTERS")).toEqual(
    "lower-case all_my$letters"
  )
})

it("toUpperCase should uppercase all letters", () => {
  expect(toUpperCase("upper-case all_my$letters")).toEqual(
    "UPPER-CASE ALL_MY$LETTERS"
  )
})
