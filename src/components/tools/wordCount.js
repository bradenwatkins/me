import React, { useState } from "react"
import EasyCopyInput from "./easyCopyInput"
import Label from "../ui/label"
import Textarea from "../ui/textarea"

const countCharacters = text => text.length

const countWords = text =>
  text
    .trim()
    .split(/\s+/)
    .filter(word => word !== "").length

const countParagraphs = text =>
  text
    .trim()
    .split(/\n+/)
    .filter(paragraph => paragraph !== "").length

const WordCount = () => {
  const [text, setText] = useState("")

  return (
    <>
      <Textarea
        className="mb-3"
        onChange={e => setText(e.target.value)}
        placeholder="Lorem ipsum dolor sit..."
        rows="8"
        value={text}
      />
      <h4>Results</h4>
      <Label for="characters">Characters:</Label>
      <EasyCopyInput
        className="mb-2"
        id="characters"
        value={countCharacters(text)}
      />
      <Label for="words">Words:</Label>
      <EasyCopyInput className="mb-2" value={countWords(text)} id="words" />
      <Label for="paragraphs">Paragraphs:</Label>
      <EasyCopyInput
        className="mb-2"
        value={countParagraphs(text)}
        id="paragraphs"
      />
    </>
  )
}

export default WordCount
