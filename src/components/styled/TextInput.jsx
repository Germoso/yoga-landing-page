import React from "react"

const TextInput = ({ placeholder }) => {
    return (
        <input
            className="px-6 py-4 rounded-full w-full text-xs focus:outline-none "
            type="text"
            placeholder={placeholder}
        />
    )
}

export default TextInput
