import React from "react"
import routimeYoga1 from "../../public/routine-yoga-1.png"
import routimeYoga2 from "../../public/routine-yoga-2.png"
import Play from "./icons/Play"
import PersonRunning from "./icons/PersonRunning"
import H3 from "./styled/H3"
import Button from "./styled/Button"
import P from "./styled/P"
import Image from "next/image"
import ImageBadge from "./ImageBadge"
import { motion } from "framer-motion"

const Anytime = () => {
    return (
        <div className="sm:flex sm:items-center sm:gap-16">
            <motion.div
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: "50%", opacity: 0 }}
                transition={{ ease: [0, 1.11, 1, 1], duration: 1.5 }}
                className="mt-20 flex flex-col items-center gap-4 sm:items-start"
            >
                <H3 className="text-4xl text-center sm:text-start ">Anytime, any place, any workout</H3>
                <P className="text-center sm:text-start">
                    Take your routine at any time of your day, with the new videos and with the teachers who will guide
                    you
                </P>
                <Button text={"Get Started Free"} />
            </motion.div>
            <motion.div
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: "-50%", opacity: 0 }}
                transition={{ ease: [0, 1.11, 1, 1], duration: 1.5 }}
                className=" relative -z-10"
            >
                <div className="w-full">
                    <div className="w-[80%]  relative top-6 z-10 rounded-full overflow-hidden  border-white border-solid border-4   ">
                        <Image src={routimeYoga1} alt={"health fitness"} />
                    </div>
                    <div className=" relative -top-6 left-20 w-[80%] rounded-full overflow-hidden -z-10">
                        <Image src={routimeYoga2} alt={"health fitness"} />
                    </div>
                </div>
                <div className="absolute top-20 right-0 z-10">
                    <ImageBadge
                        title={"High Quality Video"}
                        icon={
                            <div className="w-6">
                                <Play color={"#8b52ff"} />{" "}
                            </div>
                        }
                    />
                </div>
                <div className="absolute bottom-10 left-0">
                    <ImageBadge
                        title={"Professional Trainer"}
                        icon={
                            <div className="w-6">
                                <PersonRunning color={"#8b52ff"} />{" "}
                            </div>
                        }
                    />
                </div>
            </motion.div>
        </div>
    )
}

export default Anytime
