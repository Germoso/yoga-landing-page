import React from "react"
import Star1 from "@/components/icons/Star1"
import Circle from "@/components/icons/Circle"
import GetStartedButton from "@/components/styled/Button"
import Image from "next/image"
import HomeYoga from "../../public/home-yoga.png"
import { motion } from "framer-motion"

const Header = () => {
    return (
        <>
            <div className="flex items-center flex-col gap-10 mt-24 sm:mt-16   sm:flex-row sm:justify-center sm:items-center sm:gap-0 ">
                <motion.div
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ y: "-50%", opacity: 0 }}
                    transition={{ ease: [0, 1.11, 1, 1], duration: 1.5 }}
                    className="flex flex-col gap-4 w-2/3 items-center sm:w-1/2 sm:items-start"
                >
                    <h1 className="relative text-4xl text-center w-[250px] -z-10 sm:text-start sm:text-6xl sm:w-[400px]">
                        Choose Your Best
                        <span
                            style={{
                                background: "linear-gradient(75deg, var(--second-color) 12%, var(--first-color) 90%)",
                            }}
                            className="p-2 mt-3 mb-2 ml-4 rounded-md rotate-[15deg] inline-block text-white sm:ml-6 sm:mt-4 "
                        >
                            Yoga
                        </span>{" "}
                        Teacher
                        <div className="absolute -bottom-4 -left-2 w-14 sm:-left-10 sm:-bottom-6">
                            <Star1 />
                        </div>
                    </h1>

                    <div className="relative -z-10  sm:w-2/3">
                        <p className="text-center sm:text-start">
                            Calm your mind and body with the best yoga teachers available, relax your day and stay
                            positive.
                        </p>
                        <div className="absolute -right-4 -bottom-6 w-4 -z-10 sm:-bottom-10">
                            <Circle />
                        </div>
                    </div>
                    <GetStartedButton className={"w-fit"} text={"Get Started Now"} />

                    <div className="w-full justify-center flex gap-10 mt-4 sm:justify-start">
                        <div className="flex items-center flex-col">
                            <h3 className="text-2xl">300+</h3>
                            <span className="text-xs">Class</span>
                        </div>
                        <div className="flex items-center flex-col">
                            <h3 className="text-2xl">40+</h3>
                            <span className="text-xs">Participans</span>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ y: "50%", opacity: 0 }}
                    transition={{ ease: [0, 1.11, 1, 1], duration: 1.5 }}
                    className="w-full max-w-lg relative -z-10"
                >
                    <Image className="  " src={HomeYoga} alt="home yoga" />
                </motion.div>
            </div>
        </>
    )
}

export default Header
