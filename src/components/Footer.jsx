import React from "react"
import Logo from "./Logo"
import H2 from "./styled/H2"
import P from "./styled/P"
import Facebook from "@/components/icons/Facebook"
import Instagram from "@/components/icons/Instagram"
import Twitter from "@/components/icons/Twitter"
import Youtube from "@/components/icons/Youtube"
import { motion } from "framer-motion"

const Footer = () => {
    return (
        <footer className="bg-firstColorDark relative -z-10">
            <motion.div
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ y: "-50%", opacity: 0 }}
                transition={{ ease: [0, 1.11, 1, 1], duration: 1.5 }}
                className="container mx-auto px-4 flex flex-col gap-4 py-4"
            >
                <div className="flex flex-col gap-4 sm:flex-row sm:mt-10">
                    <div className="w-2/3">
                        <Logo />
                        <P className={"text-textColorLight"}>
                            Take care of your health and your mind with the best Yoga classes
                        </P>
                    </div>
                    <div>
                        <H2>Address</H2>
                        <P className={"text-textColorLight"}>12345 M/01 Sol</P>
                        <P className={"text-textColorLight"}>Avenue, Dominican Republic</P>
                    </div>
                    <div>
                        <H2>Contact</H2>
                        <P className={"text-textColorLight"}>+123 456 789</P>
                        <P className={"text-textColorLight"}>yoga@email.com</P>
                    </div>
                    <div>
                        <H2>Office</H2>
                        <P className={"text-textColorLight"}>Monday - Saturday</P>
                        <P className={"text-textColorLight"}>9Am - 10PM</P>
                    </div>
                </div>

                <div className="flex flex-col gap-4 py-4">
                    <hr className="w-full" />
                    <div className="sm:flex sm:justify-between ">
                        <div className="flex justify-center gap-4 sm:items-center">
                            <div className="w-6">
                                <Facebook color={"#ff52ae"} />
                            </div>
                            <div className="w-6">
                                <Instagram color={"#ff52ae"} />
                            </div>
                            <div className="w-6">
                                <Twitter color={"#ff52ae"} />
                            </div>
                            <div className="w-6">
                                <Youtube color={"#ff52ae"} />
                            </div>
                        </div>
                        <P className={"text-center text-textColorLight"}>Copyrigth Yoga. All rigth reserved</P>
                    </div>
                </div>
            </motion.div>
        </footer>
    )
}

export default Footer
