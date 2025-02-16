"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <motion.h1
          className="text-3xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Vinchenzia
        </motion.h1>
        <nav>
          <motion.ul
            className="flex space-x-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                Products
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                Contact
              </Link>
            </li>
          </motion.ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

