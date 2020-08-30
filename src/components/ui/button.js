import React from "react"

const baseClassName =
  "shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"

const Button = ({ children, className, ...rest }, ref) => (
  <button className={`${baseClassName} ${className}`} ref={ref} {...rest}>
    {children}
  </button>
)

export default React.forwardRef(Button)
