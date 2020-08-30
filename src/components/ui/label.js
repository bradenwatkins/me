import React from "react"

const baseClassName = "block text-gray-700 text-sm font-bold mb-1"

const Label = ({ children, className, ...rest }, ref) => (
  <label
    className={`${baseClassName} ${className}`}
    ref={ref}
    {...rest}
  >
    {children}
  </label>
)

export default React.forwardRef(Label)
