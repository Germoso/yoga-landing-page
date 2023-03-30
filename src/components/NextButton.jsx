import { motion, useAnimation } from "framer-motion"
import React, { useState, useEffect } from "react"
import Arrow from "@/components/icons/Arrow"
import Elipse from "@/components/icons/Elipse"

const NextButton = () => {
    const animationControl = useAnimation()
    const [isHover, setIsHover] = useState(false)

    const variants = {
        hover: { x: 4 },
        noHover: { x: 0 },
    }

    useEffect(() => {
        if (isHover) animationControl.start("hover")
        else animationControl.start("noHover")
    }, [isHover])

    return (
        <div className="relative w-48 flex justify-center items-center">
            <div className="w-full absolute">
                <Elipse />
            </div>

            <motion.a
                onHoverStart={() => {
                    setIsHover(true)
                }}
                onHoverEnd={() => {
                    setIsHover(false)
                }}
                href="#"
                className="relative z-10 flex gap-1 items-center justify-center text-firstColor text-lg"
            >
                Next
                <motion.div animate={animationControl} variants={variants} className="w-8">
                    <Arrow fill={"#8b52ff"} />
                </motion.div>
            </motion.a>
        </div>
    )
}

export default NextButton
