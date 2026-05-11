"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Ordyn didn't just build an app; they architected a completely new operational backend for us. Their understanding of scalable engineering is unmatched.",
    author: "Sarah Chen",
    role: "CTO, FinTech Scaleup"
  },
  {
    quote: "The internal dashboards they developed reduced our support resolution time by 70%. It's rare to find an agency that truly understands enterprise systems.",
    author: "Marcus Rivera",
    role: "VP Operations, E-commerce Logistics"
  },
  {
    quote: "They took our messy data pipelines and transformed them into a highly scalable, AI-driven automation engine. Incredible technical depth and execution speed.",
    author: "David Park",
    role: "Founder, DataSys"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-32 bg-[#050816] relative border-t border-white/5 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[600px] bg-secondary/10 blur-[200px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
            >
              Trusted by engineering leaders.
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-panel p-10 rounded-[2rem] flex flex-col justify-between bg-surface/40 border border-white/5 hover:border-white/10 transition-colors shadow-2xl relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
                  <Quote size={120} className="text-white" />
              </div>
              
              <div className="relative z-10">
                <Quote className="w-8 h-8 text-primary mb-8 opacity-80" />
                <p className="text-gray-300 text-lg leading-relaxed mb-12 font-light">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-white/5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-white/10 shadow-inner">
                  <span className="text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm tracking-wide">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

