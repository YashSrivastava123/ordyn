"use client";

import { motion } from "framer-motion";
import { Database, Zap, Cpu, Network, Monitor } from "lucide-react";

export default function AiAutomationShowcase() {
  return (
    <section className="py-32 bg-[#050816] relative border-t border-white/5 overflow-hidden">
      {/* Cinematic Grid & Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
            >
              Automation that scales operations.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg leading-relaxed mb-8"
            >
              We design intelligent workflows that connect your data silos. From AI chatbot interfaces to complex CRM integrations and backend orchestration, we eliminate manual bottlenecks.
            </motion.p>

            <div className="space-y-6">
              {[
                { title: "AI Workflows", icon: <Cpu className="w-5 h-5 text-primary" /> },
                { title: "CRM Integrations", icon: <Network className="w-5 h-5 text-secondary" /> },
                { title: "Analytics Pipelines", icon: <Database className="w-5 h-5 text-white" /> }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4 glass-panel p-4 rounded-xl border border-white/5"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center border border-white/10">
                    {item.icon}
                  </div>
                  <span className="text-white font-medium">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Node Graph Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[500px] glass-panel rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center bg-surface/30"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
             
             {/* Central Node */}
             <motion.div 
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl bg-surface border-2 border-primary/50 flex items-center justify-center shadow-[0_0_40px_rgba(77,162,255,0.3)] z-20"
               animate={{ boxShadow: ["0 0 20px rgba(77,162,255,0.2)", "0 0 60px rgba(77,162,255,0.6)", "0 0 20px rgba(77,162,255,0.2)"] }}
               transition={{ duration: 4, repeat: Infinity }}
             >
                <Zap className="text-primary w-10 h-10" />
             </motion.div>

             {/* Surrounding Nodes */}
             <div className="absolute top-[15%] left-[20%] w-16 h-16 rounded-xl bg-surface border border-white/10 flex items-center justify-center z-10">
                <Database className="text-gray-400 w-6 h-6" />
             </div>
             <div className="absolute bottom-[20%] left-[15%] w-16 h-16 rounded-xl bg-surface border border-white/10 flex items-center justify-center z-10">
                <Network className="text-gray-400 w-6 h-6" />
             </div>
             <div className="absolute top-[25%] right-[15%] w-16 h-16 rounded-xl bg-surface border border-white/10 flex items-center justify-center z-10">
                <Cpu className="text-secondary w-6 h-6" />
             </div>
             <div className="absolute bottom-[15%] right-[25%] w-16 h-16 rounded-xl bg-surface border border-white/10 flex items-center justify-center z-10">
                <Monitor className="text-gray-400 w-6 h-6" />
             </div>

             {/* SVG Connecting Lines */}
             <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <motion.line x1="28%" y1="22%" x2="50%" y2="50%" stroke="var(--primary)" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" 
                  animate={{ strokeDashoffset: [0, -20] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} />
                <motion.line x1="22%" y1="75%" x2="50%" y2="50%" stroke="var(--primary)" strokeWidth="2" strokeDasharray="5,5" opacity="0.3"
                  animate={{ strokeDashoffset: [0, -20] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} />
                <motion.line x1="78%" y1="33%" x2="50%" y2="50%" stroke="var(--secondary)" strokeWidth="2" strokeDasharray="5,5" opacity="0.3"
                  animate={{ strokeDashoffset: [0, 20] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} />
                <motion.line x1="68%" y1="80%" x2="50%" y2="50%" stroke="var(--secondary)" strokeWidth="2" strokeDasharray="5,5" opacity="0.3"
                  animate={{ strokeDashoffset: [0, 20] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} />
             </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
