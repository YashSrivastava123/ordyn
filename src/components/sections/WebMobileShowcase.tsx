"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Tablet } from "lucide-react";

export default function WebMobileShowcase() {
  return (
    <section className="py-32 bg-background relative border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Built for every screen.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-xl leading-relaxed"
          >
            From scalable web platforms to seamless iOS and Android experiences. We engineer interfaces that look beautiful and perform flawlessly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Web Mockup (MacBook style) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 relative"
          >
            <div className="glass-panel p-2 rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl bg-surface/50">
              <div className="bg-[#050816] rounded-xl md:rounded-2xl border border-white/5 overflow-hidden aspect-[16/10] relative flex flex-col">
                 {/* Browser Header */}
                 <div className="h-10 bg-surface border-b border-white/5 flex items-center px-4 gap-4">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-white/20" />
                        <div className="w-3 h-3 rounded-full bg-white/20" />
                        <div className="w-3 h-3 rounded-full bg-white/20" />
                    </div>
                    <div className="flex-1 h-6 bg-white/5 rounded-md flex items-center px-3">
                        <div className="w-4 h-4 rounded bg-white/10" />
                        <div className="ml-2 w-32 h-2 rounded bg-white/20" />
                    </div>
                 </div>
                 
                 {/* App Content */}
                 <div className="flex-1 flex p-6 gap-6">
                    {/* Sidebar */}
                    <div className="w-48 hidden md:flex flex-col gap-4 border-r border-white/5 pr-6">
                        <div className="w-full h-8 rounded bg-primary/20 border border-primary/20" />
                        <div className="w-3/4 h-4 rounded bg-white/5 mt-4" />
                        <div className="w-full h-4 rounded bg-white/5" />
                        <div className="w-5/6 h-4 rounded bg-white/5" />
                    </div>
                    {/* Main Area */}
                    <div className="flex-1 flex flex-col gap-6">
                        <div className="flex justify-between items-center">
                            <div className="w-48 h-8 rounded bg-white/10" />
                            <div className="w-24 h-8 rounded-full bg-primary/20 border border-primary/30" />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-24 rounded-xl bg-white/5 border border-white/5" />
                            <div className="h-24 rounded-xl bg-white/5 border border-white/5" />
                            <div className="h-24 rounded-xl bg-white/5 border border-white/5" />
                        </div>
                        <div className="flex-1 rounded-xl bg-surface border border-white/5 relative overflow-hidden">
                            {/* Graph lines */}
                            <svg className="absolute bottom-0 w-full h-32" preserveAspectRatio="none" viewBox="0 0 100 100">
                                <path d="M0,100 L0,50 Q25,20 50,60 T100,30 L100,100 Z" fill="url(#gradient-blue)" opacity="0.5" />
                                <path d="M0,50 Q25,20 50,60 T100,30" fill="none" stroke="var(--primary)" strokeWidth="2" />
                                <defs>
                                    <linearGradient id="gradient-blue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
                                        <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Floating Tag */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 px-6 py-3 rounded-full glass-panel border border-white/10"
            >
                <Monitor className="text-primary w-5 h-5" />
                <span className="text-sm font-medium text-white">Web Applications</span>
            </motion.div>
          </motion.div>

          {/* Mobile Mockup (iPhone style) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 relative flex justify-center lg:justify-end"
          >
            <div className="w-[280px] md:w-[320px] glass-panel p-2 rounded-[2.5rem] border border-white/10 shadow-2xl bg-surface/50 relative z-10">
              <div className="bg-[#050816] rounded-[2rem] border border-white/10 overflow-hidden aspect-[9/19] relative flex flex-col pt-12 px-5 pb-8">
                 {/* Dynamic Island fake */}
                 <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />
                 
                 <div className="flex justify-between items-center mb-8 mt-2">
                    <div className="w-10 h-10 rounded-full bg-white/10" />
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                        <div className="w-4 h-4 bg-primary rounded-sm" />
                    </div>
                 </div>

                 <div className="text-2xl font-bold text-white mb-2">Total Balance</div>
                 <div className="text-4xl font-light text-primary mb-8">$124,592.00</div>

                 <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="h-14 rounded-xl bg-surface flex items-center justify-center text-sm text-white font-medium border border-white/5">Send</div>
                    <div className="h-14 rounded-xl bg-primary text-background flex items-center justify-center text-sm font-bold">Receive</div>
                 </div>

                 <div className="text-sm font-medium text-gray-400 mb-4">Recent Transactions</div>
                 <div className="flex flex-col gap-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-surface border border-white/5" />
                                <div className="flex flex-col gap-1">
                                    <div className="w-20 h-3 rounded bg-white/20" />
                                    <div className="w-12 h-2 rounded bg-white/10" />
                                </div>
                            </div>
                            <div className="w-16 h-3 rounded bg-white/10" />
                        </div>
                    ))}
                 </div>
              </div>
            </div>

            {/* Floating Tags */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 flex items-center gap-3 px-6 py-3 rounded-full glass-panel border border-white/10 z-20"
            >
                <Smartphone className="text-secondary w-5 h-5" />
                <span className="text-sm font-medium text-white">iOS & Android</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
