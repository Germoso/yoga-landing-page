import React from "react"

const P = ({ children, className }) => {
    return <p className={`${className}`}>{children}</p>
}

export default P
