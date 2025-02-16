"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText";
import AnimatedByLine from "../components/AnimatedByLine";
import SocialLinks from "../components/SocialLinks";
import NewsletterSignup from "../components/NewsletterSignup";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#14213d] via-[#1a2c4d] to-[#14213d] text-[#e5e5e5]">
      <nav className="p-6">
        <SocialLinks />
      </nav>

      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full max-w-4xl"
        >
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mb-8 text-2xl font-light tracking-[0.3em] text-[#fca311]"
          >
            Elegance in Motion
          </motion.p>
          <AnimatedText text="Vinchenzia" />
          <AnimatedByLine text="by Olamilekan" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="mt-12 text-3xl font-light tracking-wide"
          >
            Coming Soon
          </motion.div>

          <NewsletterSignup />
        </motion.div>
      </main>

      <BackgroundAnimation />
    </div>
  );
}

const BackgroundAnimation = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Ensure this code only runs in the browser
    if (typeof window !== "undefined") {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });

      const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#fca311]"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            scale: Math.random() * 0.5 + 0.5,
          }}
          transition={{
            duration: Math.random() * 20 + 30,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            width: `${Math.random() * 20 + 5}px`,
            height: `${Math.random() * 20 + 5}px`,
            opacity: 0.05,
          }}
        />
      ))}
    </div>
  );
};
