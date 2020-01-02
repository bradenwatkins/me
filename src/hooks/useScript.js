import { useEffect } from "react"

const useScript = config => {
  useEffect(() => {
    const script = document.createElement("script")

    script.src = config.url
    script.integrity = config.integrity
    script.crossOrigin = "anonymous"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [config])
}

export default useScript
