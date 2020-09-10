import React, { useState } from "react"
import EasyCopyInput from "./easyCopyInput"
import Label from "../ui/label"
import Input from "../ui/input"
import { toLowerCase, toUpperCase, toCapitalize } from "./utils"

const transforms = [
  {
    name: "Lowercase",
    fn: toLowerCase,
  },
  {
    name: "Uppercase",
    fn: toUpperCase,
  },
  {
    name: "Capitalize words",
    fn: toCapitalize,
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
      {transforms.map(({ name, fn }) => (
        <div>
          <Label for={name}>{name}:</Label>
          <EasyCopyInput className="mb-2" id={name} value={fn(text)} />
        </div>
      ))}
    </>
  )
}

export default TextTransform
