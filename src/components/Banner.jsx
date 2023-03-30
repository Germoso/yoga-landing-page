import React from "react"
import ListYogaImg from "../../public/list-yoga.png"
import Image from "next/image"
import NextButton from "@/components/NextButton"
import { motion } from "framer-motion"

const Banner = () => {
    return (
        <motion.div
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ y: "-50%", opacity: 0 }}
            transition={{ ease: [0, 1.11, 1, 1], duration: 1.5 }}
            className="sm:gap-8 mt-40 flex flex-col items-center sm:flex-row sm:items-center"
        >
            <div className="flex gap-2 items-center">
                <h4 className="text-4xl">#01</h4>
                <div className="relative bg-firstColorLight rounded-full -z-10">
                    <Image src={ListYogaImg} alt="list yoga" />
                </div>
            </div>
            <p className="sm:text-start text-center mt-2">
                Get a list of specific influencers in your niche at your fingertips so you can focus managing your
                status.
            </p>
            <div className="mt-16 sm:mt-0 sm:mr-8">
                <NextButton />
            </div>
        </motion.div>
    )
}

export default Banner
