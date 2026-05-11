"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AI Ecommerce Platform",
    metric: "$10M+ Processed Annually",
    description: "A highly scalable, headless commerce engine with dynamic AI pricing and inventory routing.",
    color: "from-primary/20",
    border: "group-hover:border-primary/50"
  },
  {
    title: "Healthcare Automation System",
    metric: "3x Faster Data Processing",
    description: "HIPAA-compliant data pipelines and AI workflows that reduced administrative overhead by 70%.",
    color: "from-secondary/20",
    border: "group-hover:border-secondary/50"
  },
  {
    title: "Enterprise Analytics Dashboard",
    metric: "100k+ Concurrent Users",
    description: "Real-time streaming analytics interface built for a massive logistics network.",
    color: "from-blue-500/20",
    border: "group-hover:border-blue-500/50"
  },
  {
    title: "Mobile Commerce App",
    metric: "4.9 App Store Rating",
    description: "A premium React Native shopping experience focused on extreme performance and micro-interactions.",
    color: "from-indigo-500/20",
    border: "group-hover:border-indigo-500/50"
  }
];

export default function CaseStudiesSection() {
  return (
    <section className="py-32 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
            >
              Proven at scale.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg leading-relaxed"
            >
              We don't just build software; we engineer business-critical systems. Here are a few examples of our work in production.
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-colors"
          >
            View All Work <ArrowUpRight size={18} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-surface p-1 transition-all duration-500 ${project.border} hover:shadow-2xl`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
              
              {/* Mockup Area */}
              <div className={`h-64 rounded-2xl bg-gradient-to-br ${project.color} to-transparent border border-white/5 relative overflow-hidden flex items-center justify-center`}>
                 <div className="w-[80%] h-[120%] mt-[20%] rounded-t-xl bg-background border-t border-x border-white/10 shadow-2xl relative overflow-hidden">
                    <div className="h-8 bg-surface border-b border-white/5 flex items-center px-4 gap-2">
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                    </div>
                    {/* Abstract content lines */}
                    <div className="p-6 flex flex-col gap-4">
                        <div className="w-1/3 h-4 rounded bg-white/5" />
                        <div className="w-full h-32 rounded-lg bg-white/5" />
                        <div className="w-2/3 h-4 rounded bg-white/5" />
                    </div>
                 </div>
              </div>

              <div className="p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-300 mb-6">
                  {project.metric}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center justify-between">
                  {project.title}
                  <ArrowUpRight className="text-gray-500 group-hover:text-white transition-colors" size={24} />
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
