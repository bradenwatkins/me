// Modeled after: https://tools.marijkeluttekes.nl/

import React from "react"
import Card from "../components/card"
import WordCount from "../components/tools/wordCount"
import TextTransform from "../components/tools/textTransform"

const toolSet = [
  { name: "Text Transform", Component: TextTransform },
  { name: "Word Count", Component: WordCount },
]

const layout = "grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
const spacing = "p-6 m-auto"

const Tools = () => (
  <>
    <h1 className="px-6 pt-6">Web tools</h1>
    <div className={`${layout} ${spacing}`}>
      {toolSet.map(({ name, Component }) => (
        <Card key={name} className="w-full h-full min-h-108 m-auto">
          <h2>{name}</h2>
          <Component />
        </Card>
      ))}
    </div>
  </>
)

export default Tools
