import React from "react"

function Icon({ fill }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24">
            <path
                fill={fill}
                fillRule="evenodd"
                d="M12.293 4.293a1 1 0 011.414 0l7 7a1 1 0 010 1.414l-7 7a1 1 0 01-1.414-1.414L17.586 13H4a1 1 0 110-2h13.586l-5.293-5.293a1 1 0 010-1.414z"
                clipRule="evenodd"
            ></path>
        </svg>
    )
}

export default Icon
