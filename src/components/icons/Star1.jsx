import React from "react"

function Icon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" fill="none" viewBox="0 0 97 97">
            <ellipse cx="48" cy="48.5" stroke="url(#paint0_linear_17_30)" strokeWidth="2" rx="15" ry="47.5"></ellipse>
            <ellipse
                cx="48.5"
                cy="48"
                stroke="url(#paint1_linear_17_30)"
                strokeWidth="2"
                rx="15"
                ry="47.5"
                transform="rotate(90 48.5 48)"
            ></ellipse>
            <path
                fill="url(#paint2_linear_17_30)"
                stroke="#F8F0FD"
                strokeWidth="3"
                d="M48 18l5.091 24.909L78 48l-24.909 5.091L48 78l-5.091-24.909L18 48l24.909-5.091L48 18z"
            ></path>
            <defs>
                <linearGradient
                    id="paint0_linear_17_30"
                    x1="33"
                    x2="60.025"
                    y1="48.5"
                    y2="45.052"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF62B7"></stop>
                    <stop offset="1" stopColor="#9F53FF"></stop>
                </linearGradient>
                <linearGradient
                    id="paint1_linear_17_30"
                    x1="33.5"
                    x2="60.525"
                    y1="48"
                    y2="44.552"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF62B7"></stop>
                    <stop offset="1" stopColor="#9F53FF"></stop>
                </linearGradient>
                <linearGradient
                    id="paint2_linear_17_30"
                    x1="18"
                    x2="65.223"
                    y1="48"
                    y2="28.923"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF62B7"></stop>
                    <stop offset="1" stopColor="#9F53FF"></stop>
                </linearGradient>
            </defs>
        </svg>
    )
}

export default Icon
