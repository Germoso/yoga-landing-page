import { motion, useAnimation } from "framer-motion"
import React, { useState, useEffect } from "react"
import Arrow from "@/components/icons/Arrow"

const Button = ({ text, className }) => {
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
            className={`shadow-xl py-3 px-5 text-white rounded-full flex items-center justify-center gap-2 whitespace-nowrap  ${className}`}
        >
            {text}
            <motion.div animate={animationControl} variants={variants} className="w-4">
                <Arrow fill={"#FFF"} />
            </motion.div>
        </motion.button>
    )
}

export default Button
