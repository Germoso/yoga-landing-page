import React from "react"
import CircleButton from "./CircleButton"
import followYoga1 from "../../public/follow-yoga-1.png"
import followYoga2 from "../../public/follow-yoga-2.png"
import followYoga3 from "../../public/follow-yoga-3.png"
import followYoga4 from "../../public/follow-yoga-4.png"
import H3 from "./styled/H3"
import Image from "next/image"
import { motion } from "framer-motion"

const FollowUs = () => {
    return (
        <div className=" h-screen relative flex flex-col items-center gap-5 mt-40 w-full">
            <motion.div
                viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ ease: [0, 1.11, 1, 1], duration: 1.5 }}
                className="flex flex-col items-center gap-5 w-96 relative sm:top-48 "
            >
                <H3 className="text-5xl text-center">
                    Follow Us On Instagram
                    <span className="uppercase text-secondColor"> #yoga</span>
                </H3>
                <CircleButton className="z-50" text={"Follow"} w={"20"} h="20" />
            </motion.div>
            <div className="w-full sm:absolute">
                <div className="flex gap-5 px-5 sm:justify-between w-full">
                    <motion.div
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ y: "-50%", opacity: 0 }}
                        transition={{ ease: [0, 1.11, 1, 1], duration: 1.5 }}
                        className="max-w-[250px]"
                    >
                        <Image
                            className=" rounded-full border-4 border-solid border-white -z-10 w-full"
                            src={followYoga1}
                            alt="yoga 1"
                        />
                    </motion.div>
                    <motion.div
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ y: " 50%", opacity: 0 }}
                        transition={{ ease: [0, 1.11, 1, 1], duration: 1.5 }}
                        className="max-w-[250px]"
                    >
                        <Image
                            className="w-full rounded-full border-4 border-solid border-white relative top-10 -z-10 sm:top-0"
                            src={followYoga2}
                            alt="yoga 1"
                        />
                    </motion.div>
                </div>
                <div className="relative w-full flex flex-col gap-5  mt-10 sm:flex-row sm:justify-between">
                    <motion.div
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        initial={{ y: "-50%", x: "-50%", opacity: 0 }}
                        transition={{ ease: [0, 1.11, 1, 1], duration: 1.5 }}
                        className="flex justify-start max-w-lg "
                    >
                        <Image
                            src={followYoga3}
                            className="w-[80%] rounded-full border-4 border-solid border-white rotate-[15deg] -z-10"
                            alt="yoga 1"
                        />
                    </motion.div>
                    <motion.div
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        initial={{ y: "50%", x: "50%", opacity: 0 }}
                        transition={{ ease: [0, 1.11, 1, 1], duration: 1.5 }}
                        className="flex justify-end max-w-lg"
                    >
                        <Image
                            src={followYoga4}
                            className="w-[80%] rounded-full border-4 border-solid border-white -rotate-[15deg] mt-2 relative -z-10"
                            alt="yoga 1"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default FollowUs
