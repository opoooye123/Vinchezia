"use client"

import { motion } from "framer-motion"

const AnimatedByLine = ({ text }: { text: string }) => {
  return (
    <motion.p
      className="text-2xl font-light mt-4 tracking-[0.25em] text-[#fca311]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 2,
        duration: 1.2,
        type: "spring",
        damping: 20,
        stiffness: 90,
      }}
    >
      {text}
    </motion.p>
  )
}

export default AnimatedByLine

