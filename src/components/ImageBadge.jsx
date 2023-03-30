import React from "react"

const ImageBadge = ({ title, text, icon = null }) => {
    return (
        <div className=" relative z-50 flex gap-2 items-center rounded-xl bg-white w-fit py-2 px-4">
            {icon}
            <div className="flex flex-col text-xs">
                <span className="font-semibold bg-clip-text bg-gradient-to-r from-purple-200 to-pink-400">{title}</span>
                <span className="text-secondColor">{text}</span>
            </div>
        </div>
    )
}

export default ImageBadge
