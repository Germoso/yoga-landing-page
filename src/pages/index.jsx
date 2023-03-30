import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import React from "react"

import Bring from "@/components/Bring"
import NewsLetter from "@/components/NewsLetter"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Banner from "@/components/Banner"
import Anytime from "@/components/Anytime"
import FollowUs from "@/components/FollowUs"

const index = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-8 relative -z-10 sm:px-20">
                <Header />
                <Banner />
                <Bring />
                <Anytime />
                <FollowUs />
                <NewsLetter />
            </div>
            <Footer />
        </>
    )
}

export default index
