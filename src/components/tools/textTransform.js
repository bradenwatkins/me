import React, { useState } from "react"
import EasyCopyInput from "./easyCopyInput"
import Label from "../ui/label"
import Input from "../ui/input"

const toLower = text => text.trim().toLowerCase()

const toUpper = text => text.trim().toUpperCase()

const toUpperFirst = text =>
  text
    .trim()
    .split()
    .reduce((result, word) => `${result} ${word.charAt(0)}${word.slice(1)}`, "")

const transforms = [
  {
    name: "Lowercase",
    fn: text => text.trim().toLowerCase(),
  },
  {
      name: "Uppercase",
      fn: text => text.trim().toUpperCase()
  },
  {
      name: "Capitalize words",
      fn: text => text.trim().toUpperCase()
  },
]

const TextTransform = () => {
  const [text, setText] = useState("")

  return (
    <>
      <Input
        className="mb-3"
        placeholder="Lorem ipsum dolor sit..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <h4>Results</h4>
      <Label for="lowercase">Lowercase:</Label>
      <EasyCopyInput className="mb-2" id="lowercase" value={toLower(text)} />
      <Label for="uppercase">Uppercase:</Label>
      <EasyCopyInput className="mb-2" id="uppercase" value={toUpper(text)} />
    </>
  )
}

export default TextTransform
