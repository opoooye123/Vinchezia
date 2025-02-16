import { motion } from "framer-motion"
import { Instagram, Facebook, Twitter } from "lucide-react"

const SocialLinks = () => {
  const links = [
    { icon: Instagram, href: "https://instagram.com" },
    { icon: Facebook, href: "https://facebook.com" },
    { icon: Twitter, href: "https://twitter.com" },
  ]

  return (
    <motion.div
      className="flex justify-end space-x-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {links.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#fca311] hover:text-[#e5e5e5] transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <link.icon size={24} />
        </motion.a>
      ))}
    </motion.div>
  )
}

export default SocialLinks

