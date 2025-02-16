"use client"

import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="bg-gray-200 py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Elegance in Every Stitch
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover the latest in high-end fashion
        </motion.p>
      </div>
    </div>
  )
}

export default Hero

