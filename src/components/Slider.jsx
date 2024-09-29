"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    title: "Industry experts",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, recusandae nesciunt. Mollitia quidem",
  },
  {
    title: "Dedicated Team",
    description: "Our team is committed to providing the best service possible to all our clients.",
  },
  {
    title: "Outcome focused",
    description: "We prioritize results and work tirelessly to achieve the best outcomes for our clients.",
  },
  {
    title: "High Quality Service",
    description: "We pride ourselves on delivering top-notch service that exceeds expectations.",
  },
  {
    title: "Cyber Security Expert",
    description: "Our team includes certified cybersecurity professionals to keep your data safe.",
  },
]

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className="w-full bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-[#4d262d] mb-2">WHY CHOOSE US</h2>
          <h3 className="text-4xl font-bold mb-4">We Are Different From Others</h3>
          <p className="text-gray-600 max-w-3xl mx-auto font-semibold text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cupiditate accusantium recusandae soluta
            explicabo hic! Facere unde nam accusantium natus?
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-3/5 relative h-[300px] flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="relative w-[450px] h-[300px]"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 100 }}
                  transition={{ delay: 0.2 }}
                  className="bg-[#cc334d] text-gray-200 rounded-full p-8 w-[300px] h-[300px] flex flex-col justify-center bg-opacity-85 absolute z-10 left-0"
                >
                  <h4 className="text-2xl font-bold mb-3">{slides[currentSlide].title}</h4>
                  <p className="text-sm">{slides[currentSlide].description}</p>
                </motion.div>
                <motion.img
                  src="https://media.istockphoto.com/id/613241758/photo/young-woman-working-on-a-laptop.jpg?s=612x612&w=0&k=20&c=B3WbJ7VFEr77G0T698I0WMkM5LOV-pMrLCljEEJGh-o="
                  alt="Placeholder image"
                  className="rounded-full absolute top-0 right-0 w-[300px] h-[300px] object-cover"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="w-2/5 flex items-center justify-end">
            <div className="w-full max-w-[300px] space-y-5">
              {slides.map((slide, index) => (
                <Button
  key={index}
  variant={currentSlide === index ? "default" : "secondary"}
  className={`w-full py-4 text-base font-bold px-4 rounded-l-full flex items-center ${
    currentSlide === index
      ? "bg-[#b52d44] text-white"
      : "bg-[#f0f0f0] text-gray-700 hover:bg-[#a5cfd2]"
  }`}
  onClick={() => setCurrentSlide(index)}
>
  <ChevronLeft className={`mr-4 h-4 w-4 ${currentSlide === index ? "" : "invisible"}`} />
  
  <span className="ml-auto"> {/* Pushes the text to the right */}
    {slide.title}
  </span>
</Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}