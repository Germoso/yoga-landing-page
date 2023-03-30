import React, { useEffect, useState } from "react"
import Moon from "@/components/icons/Moon"
import { Spin as Hamburger } from "hamburger-react"
import { motion, useAnimation } from "framer-motion"
import Logo from "./Logo"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const controls = useAnimation()

    const mediaQuery = () => {
        if (!window.matchMedia("(max-width: 640px)").matches) setIsOpen(true)
        else {
            controls.set("hidden")
            setIsOpen(false)
        }
    }

    useEffect(() => {
        if (isOpen) controls.start("visible")
        else controls.start("hidden")
    }, [isOpen])

    useEffect(() => {
        mediaQuery()

        window.addEventListener("resize", (e) => {
            mediaQuery()
        })
    }, [])

    const variants = {
        visible: {
            x: 0,
        },
        hidden: {
            x: "100vw",
        },
    }

    return (
        <div className="fixed top-0 left-0 bg-negro flex w-full justify-between p-2 items-center">
            <Logo />
            <motion.ul
                animate={controls}
                variants={variants}
                className="font-semibold fixed backdrop-blur-3xl z-[999] top-0 left-20 h-screen flex flex-col justify-center w-full gap-10 pl-10 text-textColor text-xl sm:h-fit sm:flex-row sm:relative sm:w-fit sm:left-0 sm:backdrop-blur-none sm:pl-0"
            >
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Health</a>
                </li>
                <li>
                    <a href="#">Routine</a>
                </li>
                <li>
                    <a href="#">Follow</a>
                </li>
            </motion.ul>
            <div className="flex gap-2 items-center  ">
                <div className="w-6">
                    <Moon />
                </div>
                <div className="sm:hidden z-[999] relative">
                    <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} />
                </div>
            </div>
        </div>
    )
}
export default Navbar
