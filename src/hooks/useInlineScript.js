import { useEffect } from "react"

const useInlineScript = text => {
  useEffect(() => {
    const script = document.createElement("script")
    const textNode = document.createTextNode(text)
    script.appendChild(textNode)
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [text])
}

export default useInlineScript
