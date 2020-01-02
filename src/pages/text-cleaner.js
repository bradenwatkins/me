import React, { useState } from "react"
import styles from "./text-cleaner.module.css"

function clean(text = "") {
  return text
    .replace(/\n\n/g, "~~~~~")
    .replace(/\n/g, " ")
    .replace(/~~~~~/g, "\n\n")
    .replace(/ {2}/g, " ")
}

function TextCleaner() {
  const [text, setText] = useState("")
  return (
    <div className={styles.container}>
      <textarea
        label="Text Cleaner"
        variant="outlined"
        rows="30"
        className={styles.input}
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Insert text to be cleaned here..."
      />
      <button onClick={() => setText(clean(text))}>Clean Text</button>
    </div>
  )
}

export default TextCleaner
