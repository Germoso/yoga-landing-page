import { motion, useAnimation } from "framer-motion"
import React, { useState, useEffect } from "react"
import Arrow from "@/components/icons/Arrow"

const CircleButton = ({ text, w, h, className }) => {
    const animationControl = useAnimation()
    const [isHover, setIsHover] = useState(false)

    const variants = {
        hover: { x: 6 },
        noHover: { x: 0 },
    }

    useEffect(() => {
        if (isHover) animationControl.start("hover")
        else animationControl.start("noHover")
    }, [isHover])

    return (
        <motion.button
            onHoverStart={() => {
                setIsHover(true)
            }}
            onHoverEnd={() => {
                setIsHover(false)
            }}
            style={{
                background: "linear-gradient(75deg, var(--second-color) 12%, var(--first-color) 90%)",
            }}
            className={`py-4 px-4 text-white rounded-full flex flex-col justify-center items-center w-${w} h-${h} ${className}`}
        >
            {text}
            <motion.div animate={animationControl} variants={variants} className="w-4">
                <Arrow fill={"#FFF"} />
            </motion.div>
        </motion.button>
    )
}

export default CircleButton
