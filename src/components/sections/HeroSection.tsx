"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#050816]">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-primary/15 rounded-full blur-[150px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-surface backdrop-blur-md mb-10 shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(77,162,255,0.8)] animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-gray-300">Modern Technology Partner</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-[1.1]"
          >
            Engineering Intelligent <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
              Digital Systems.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Ordyn builds AI-powered automation platforms, scalable backend systems, web applications, and mobile experiences for modern businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
          >
            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#050816] font-semibold flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 text-lg"
            >
              Book a Discovery Call
              <ArrowRight size={20} />
            </Link>
            <Link
              href="#services"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-surface border border-white/10 text-white font-semibold flex items-center justify-center gap-2 transition-colors hover:bg-white/5 text-lg"
            >
              <Terminal size={20} className="text-gray-400" />
              Explore Services
            </Link>
          </motion.div>
        </div>

        {/* Cinematic Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 relative w-full max-w-6xl mx-auto"
        >
          {/* Gradient fade out at bottom */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#050816] to-transparent z-20 pointer-events-none" />
          
          <div className="glass-panel p-2 rounded-[2rem] border border-white/10 shadow-[0_0_100px_rgba(77,162,255,0.1)] relative z-10 overflow-hidden bg-surface/50">
            <div className="bg-[#050816] rounded-3xl border border-white/5 overflow-hidden">
                <div className="h-12 bg-surface border-b border-white/5 flex items-center px-6 gap-3">
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="ml-4 w-48 h-5 bg-white/5 rounded flex items-center px-2">
                     <span className="text-[10px] text-gray-500 font-mono">ordyn.ai/infrastructure</span>
                  </div>
                </div>
                
                <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-60">
                    <div className="h-32 bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                        <div className="w-24 h-4 bg-white/10 rounded" />
                        <div className="w-16 h-8 bg-primary/20 rounded" />
                    </div>
                    <div className="h-32 bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                        <div className="w-32 h-4 bg-white/10 rounded" />
                        <div className="w-full h-8 bg-secondary/20 rounded flex items-end gap-1">
                            {[40, 75, 50, 90, 65, 85].map((h, i) => <div key={i} className="flex-1 bg-secondary rounded-t-sm" style={{height: `${h}%`}} />)}
                        </div>
                    </div>
                    <div className="h-32 bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                        <div className="w-20 h-4 bg-white/10 rounded" />
                        <div className="w-24 h-8 bg-green-500/20 rounded" />
                    </div>
                    <div className="md:col-span-3 h-64 bg-surface rounded-xl border border-white/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4DA2FF_1px,transparent_1px),linear-gradient(to_bottom,#4DA2FF_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
                    </div>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

