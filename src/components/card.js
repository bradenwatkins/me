import React from "react"

let baseStyles = ""
baseStyles += " bg-white";
baseStyles += " overflow-hidden";
baseStyles += " p-6";
baseStyles += " rounded";
baseStyles += " shadow-lg";

const Card = ({ children, className }) => (
  <div className={`${baseStyles} ${className}`}>{children}</div>
)

export default Card
