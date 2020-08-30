import React, { useRef } from "react"
import { FiClipboard } from "react-icons/fi"
import Input from "../ui/input"
import Button from "../ui/button"

const EasyCopyInput = ({ id, label, className, ...rest }) => {
  const ref = useRef()

  const handleCopy = () => {
    ref.current.select()
    document.execCommand("copy")
    document.getSelection().removeAllRanges()
  }

  return (
    <div className={`w-full flex flex-row ${className}`}>
      <Input ref={ref} {...rest} />
      <Button onClick={() => handleCopy()}>
        <FiClipboard />
      </Button>
    </div>
  )
}

export default EasyCopyInput
