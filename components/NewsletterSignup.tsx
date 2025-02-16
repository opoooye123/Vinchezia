"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const NewsletterSignup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [interests, setInterests] = useState({
    menswear: false,
    womenswear: false,
    accessories: false,
    events: false,
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    // Add interests to formData
    Object.entries(interests).forEach(([key, value]) => {
      if (value) formData.append(`interests-${key}`, "true")
    })

    try {
      const response = await fetch("https://formspree.io/f/mbldzvvg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        const result = await response.json()
        console.log("Form submission successful:", result)
        setIsSubmitted(true)
      } else {
        const errorData = await response.json()
        console.error("Form submission failed:", errorData)
        throw new Error(errorData.error || "Form submission failed")
      }
    } catch (error) {
      console.error("Error details:", error)
      alert("There was an error submitting the form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        className="mt-12 w-full max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-2xl text-[#fca311]">Thank you for joining our waitlist!</p>
        <p className="mt-4 text-[#e5e5e5]">We&apos;ll keep you updated on our launch.</p>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="mt-12 w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3, duration: 1 }}
    >
      <h3 className="text-2xl mb-6 text-[#fca311]">Be the first to experience Vinchenzia</h3>
      <form onSubmit={handleSubmit} method="POST" className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-[#e5e5e5]">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            className="bg-[#14213d] border-[#fca311] text-[#e5e5e5]"
            required
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-[#e5e5e5]">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            className="bg-[#14213d] border-[#fca311] text-[#e5e5e5]"
            required
          />
        </div>
        <div className="space-y-2">
          <Label className="text-[#e5e5e5]">Interests</Label>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(interests).map(([key, value]) => (
              <div key={key} className="flex items-center space-x-2">
                <Checkbox
                  id={key}
                  name={`interests-${key}`}
                  checked={value}
                  onCheckedChange={(checked) => setInterests((prev) => ({ ...prev, [key]: checked === true }))}
                  className="border-[#fca311]"
                />
                <Label htmlFor={key} className="text-[#e5e5e5] capitalize">
                  {key}
                </Label>
              </div>
            ))}
          </div>
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#fca311] text-[#14213d] hover:bg-[#e5e5e5] transition-colors duration-300"
        >
          {isSubmitting ? "Submitting..." : "Join the Waitlist"}
        </Button>
      </form>
    </motion.div>
  )
}

export default NewsletterSignup

