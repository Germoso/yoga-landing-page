import Image from "next/image"
import React from "react"
import Button from "./styled/Button"
import img from "../../public/health-fitness.png"
import ImageBadge from "./ImageBadge"
import Heart from "./icons/Heart"
import P from "./styled/P"
import H3 from "./styled/H3"
import { motion } from "framer-motion"

const Bring = () => {
    return (
        <div className="mt-32 flex flex-col items-center gap-8 sm:flex-row-reverse  sm:gap-8  ">
            <motion.div
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: "50%", opacity: 0 }}
                transition={{ ease: [0, 1.11, 1, 1], duration: 1.5 }}
                className=" flex flex-col gap-4 items-center sm:items-start sm:w-1/2"
            >
                <H3 className={"sm:text-start"}>Bring Happiness To Good Health!</H3>
                <P className="text-center sm:text-start">
                    If you take care of your good health, take care of your mentality and lead a healthy life with
                    positive thoughts every day.
                </P>
                <Button text={"Let´s Start"} className="w-fit" />
            </motion.div>
            <motion.div
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: "-50%", opacity: 0 }}
                transition={{ ease: [0, 1.11, 1, 1], duration: 1.5 }}
                className="relative -z-10 sm:w-1/2"
            >
                <Image src={img} alt={"health fitness"} className="w-full" />
                <div className="absolute top-20 left-0">
                    <ImageBadge
                        title={"Heart Rate"}
                        text={"168 bpm"}
                        icon={
                            <div className="w-6">
                                <Heart color={"#eb6077"} />{" "}
                            </div>
                        }
                    />
                </div>
                <div className="absolute bottom-10 right-0">
                    <ImageBadge title={"Heart Rate"} text={"168 bpm"} />
                </div>
            </motion.div>
        </div>
    )
}

export default Bring
