"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function CtaSection() {
  return (
    <section id="contact" className="py-40 relative overflow-hidden bg-[#050816] border-t border-white/5">
      {/* Cinematic Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[600px] pointer-events-none opacity-40">
         <motion.div 
            animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-blue-500 blur-[150px] rounded-full mix-blend-screen"
         />
      </div>
      <div className="absolute inset-0 bg-[#050816]/60 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-panel p-16 rounded-[3rem] border border-white/10 bg-surface/30 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-[1.1]">
            Build smarter digital infrastructure.
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Ordyn helps ambitious businesses scale with AI automation, modern web applications, and high-performance engineering.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                    href="mailto:info@ordyn.in"
                    className="w-full sm:w-auto px-10 py-5 rounded-full bg-white text-[#050816] font-semibold flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 text-lg"
                >
                    Start a Project
                    <ArrowRight size={20} />
                </Link>
                <Link
                    href="#calendar"
                    className="w-full sm:w-auto px-10 py-5 rounded-full bg-surface border border-white/10 text-white font-semibold flex items-center justify-center gap-2 transition-colors hover:bg-white/5 text-lg"
                >
                    <Calendar size={20} className="text-gray-400" />
                    Schedule a Call
                </Link>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
