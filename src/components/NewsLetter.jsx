import { motion } from "framer-motion"
import React from "react"
import Button from "./styled/Button"
import H2 from "./styled/H2"
import P from "./styled/P"
import TextInput from "./styled/TextInput"

const NewsLetter = () => {
    return (
        <motion.div
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ y: "-50%", opacity: 0 }}
            transition={{ ease: [0, 1.11, 1, 1], duration: 1.5 }}
            className="rounded-3xl px-4 py-8 flex flex-col gap-2 shadow-2xl mt-56 mb-10 sm:my-40 sm:items-center sm:w-2/3 sm:mx-auto sm:py-16"
            style={{ background: "linear-gradient(75deg, var(--second-color) 12%, var(--first-color) 90%)" }}
        >
            <div className="sm:w-2/3">
                <H2 className={"text-center sm:text-5xl"}>Join our newsletter</H2>
                <P className={"text-white text-xs sm:text-base sm:text-center"}>
                    Suscribe to our newsletter to be aware of many things on discounts, gifts, training and much more.
                    Just enter your email.
                </P>
            </div>
            <div className="relative flex flex-col gap-2 rounded-full items-center p-1 sm:w-2/3 sm:flex-row sm:bg-white">
                <TextInput placeholder={"For latest update send mail"} />
                <Button text={"Suscribe"} className={"w-fit "}></Button>
            </div>
        </motion.div>
    )
}

export default NewsLetter
