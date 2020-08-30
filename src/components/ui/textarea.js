import React from "react"

const baseClassName =
  "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

const Textarea = ({ className, ...rest }, ref) => (
  <textarea className={`${baseClassName} ${className}`} ref={ref} {...rest} />
)

export default React.forwardRef(Textarea)
