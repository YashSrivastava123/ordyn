"use client";

import { motion } from "framer-motion";
import { Activity, Users, Zap, Server } from "lucide-react";

export default function ShowcaseSection() {
  return (
    <section className="py-32 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Built for performance.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            A glimpse into the type of enterprise-grade interfaces and dashboards we engineer. Dark, dense, and data-rich.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-panel rounded-2xl border border-white/10 p-2 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle gradient overlay on top of the mockup */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none" />
          
          <div className="bg-[#0B0F19] rounded-xl border border-white/5 overflow-hidden flex flex-col md:flex-row h-full md:h-[600px]">
            {/* Sidebar */}
            <div className="w-full md:w-64 bg-[#060913] border-r border-white/5 p-6 flex flex-col gap-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                  <span className="text-background text-xs font-bold">O</span>
                </div>
                <span className="text-sm font-semibold text-white">System Monitor</span>
              </div>
              
              <div className="space-y-2">
                <div className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-wider">Overview</div>
                <div className="flex items-center gap-3 text-sm text-primary bg-primary/10 px-3 py-2 rounded-lg">
                  <Activity size={16} /> Dashboard
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400 hover:text-white px-3 py-2 transition-colors">
                  <Server size={16} /> Infrastructure
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400 hover:text-white px-3 py-2 transition-colors">
                  <Users size={16} /> AI Agents
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400 hover:text-white px-3 py-2 transition-colors">
                  <Zap size={16} /> Workflows
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 overflow-hidden flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-white">Cluster Metrics</h3>
                  <p className="text-sm text-gray-400">Real-time performance overview</p>
                </div>
                <div className="flex gap-2">
                  <div className="px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-400 border border-green-500/20 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    All Systems Operational
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { label: "Active Requests", value: "24,892", trend: "+12%" },
                  { label: "Avg Latency", value: "42ms", trend: "-5%" },
                  { label: "Error Rate", value: "0.01%", trend: "0%" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-5">
                    <div className="text-gray-400 text-sm mb-2">{stat.label}</div>
                    <div className="flex items-end gap-3">
                      <div className="text-2xl font-semibold text-white">{stat.value}</div>
                      <div className={`text-xs mb-1 ${stat.trend.startsWith('+') ? 'text-green-400' : stat.trend.startsWith('-') ? 'text-primary' : 'text-gray-500'}`}>
                        {stat.trend}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex-1 bg-white/5 border border-white/5 rounded-xl p-6 relative">
                <div className="absolute top-6 left-6 text-sm font-medium text-white">Network Traffic</div>
                {/* Abstract graph lines */}
                <div className="absolute inset-0 pt-16 pb-6 px-6 flex items-end">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path
                      d="M0,80 Q10,60 20,70 T40,40 T60,50 T80,20 T100,10 L100,100 L0,100 Z"
                      fill="url(#gradient-primary)"
                      opacity="0.2"
                    />
                    <path
                      d="M0,80 Q10,60 20,70 T40,40 T60,50 T80,20 T100,10"
                      fill="none"
                      stroke="var(--primary)"
                      strokeWidth="2"
                    />
                    <path
                      d="M0,90 Q15,75 25,85 T45,65 T65,75 T85,50 T100,45 L100,100 L0,100 Z"
                      fill="url(#gradient-secondary)"
                      opacity="0.1"
                    />
                    <path
                      d="M0,90 Q15,75 25,85 T45,65 T65,75 T85,50 T100,45"
                      fill="none"
                      stroke="var(--secondary)"
                      strokeWidth="2"
                    />
                    <defs>
                      <linearGradient id="gradient-primary" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--primary)" stopOpacity="1" />
                        <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="gradient-secondary" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--secondary)" stopOpacity="1" />
                        <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
