"use client";

import { motion } from "framer-motion";

const expertise = [
  "AI Automation",
  "Web Platforms",
  "Mobile Apps",
  "Cloud Infrastructure",
  "Enterprise Systems",
  "AI Automation",
  "Web Platforms",
  "Mobile Apps",
  "Cloud Infrastructure",
  "Enterprise Systems" // Duplicated for seamless scrolling
];

export default function TrustBar() {
  return (
    <div className="py-12 bg-background border-y border-white/5 overflow-hidden flex relative">
      {/* Gradients for smooth fade out at edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        animate={{ x: [0, -1035] }} // Adjust value based on actual width
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20
        }}
        className="flex whitespace-nowrap items-center gap-16 md:gap-24 px-8"
      >
        {expertise.map((item, index) => (
          <div key={index} className="flex items-center gap-4 group">
            <div className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-300" />
            <span className="text-xl md:text-2xl font-semibold text-gray-500 group-hover:text-gray-300 transition-colors duration-300 tracking-tight">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
