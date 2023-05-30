import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}>
                <div>
                    <Navbar />
                    <Hero />
                </div>
            </motion.div>
        </>
    )
}

export default Home