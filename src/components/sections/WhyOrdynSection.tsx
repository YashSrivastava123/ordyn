"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Shield, Zap, Server } from "lucide-react";

const features = [
  "Production-grade architecture out of the box",
  "Military-grade security & SOC2 compliance",
  "AI-driven workflows without the technical debt",
  "Extremely fast deployment cycles",
  "Enterprise-ready cloud infrastructure",
  "Modern engineering standards & testing"
];

export default function WhyOrdynSection() {
  return (
    <section id="why-us" className="py-32 bg-[#050816] relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
            >
              Enterprise-grade from day one.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-xl leading-relaxed mb-10 font-light"
            >
              We bridge the gap between cutting-edge AI research and robust enterprise systems. Our engineering team builds infrastructure that doesn't just work in a demo—it performs flawlessly under production load.
            </motion.p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4 text-gray-300 bg-surface/30 p-3 rounded-xl border border-white/5 backdrop-blur-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium text-sm md:text-base">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="glass-panel p-2 rounded-[2rem] border border-white/10 shadow-2xl bg-surface/50">
              <div className="bg-[#050816] rounded-3xl overflow-hidden border border-white/5 p-8 relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />
                
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <Server className="w-5 h-5 text-gray-400" />
                  Infrastructure Health
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-surface rounded-2xl border border-white/5 p-6 flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Shield className="w-6 h-6 text-green-400 mb-4" />
                    <span className="text-gray-500 text-sm font-medium mb-1">Uptime SLA</span>
                    <span className="text-3xl font-bold text-white tracking-tight">99.99%</span>
                  </div>
                  <div className="bg-surface rounded-2xl border border-white/5 p-6 flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Zap className="w-6 h-6 text-primary mb-4" />
                    <span className="text-gray-500 text-sm font-medium mb-1">Avg Latency</span>
                    <span className="text-3xl font-bold text-white tracking-tight">12ms</span>
                  </div>
                </div>

                <div className="bg-surface rounded-2xl border border-white/5 p-6 relative overflow-hidden">
                   <div className="flex justify-between items-end mb-6">
                      <span className="text-gray-500 text-sm font-medium">Request Volume (24h)</span>
                      <span className="text-white font-bold">142.5M</span>
                   </div>
                   <div className="h-24 flex items-end gap-1">
                      {/* Animated bars */}
                      {[30, 45, 25, 60, 40, 80, 55, 90, 75, 100, 85, 60].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.05 }}
                          className="flex-1 bg-gradient-to-t from-primary/20 to-primary rounded-t-sm"
                        />
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

