"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const products = [
  { id: 1, name: "Elegant Dress", price: "$299", image: "/placeholder.svg?height=300&width=300" },
  { id: 2, name: "Designer Suit", price: "$499", image: "/placeholder.svg?height=300&width=300" },
  { id: 3, name: "Luxury Handbag", price: "$399", image: "/placeholder.svg?height=300&width=300" },
]

const FeaturedProducts = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts

