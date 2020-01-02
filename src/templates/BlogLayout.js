import React from "react"

function postsLayout({ children }) {
  const style = {
    maxWidth: "44rem",
    padding: "2rem",
    margin: "auto",
  }
  return <div style={style}>{children}</div>
}

export default postsLayout
