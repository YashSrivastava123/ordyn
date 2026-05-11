"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    icon: <Search className="w-6 h-6 text-white" />,
    description: "We analyze your current bottlenecks, map out data architectures, and define precise operational requirements."
  },
  {
    number: "02",
    title: "Architect",
    icon: <PenTool className="w-6 h-6 text-white" />,
    description: "Our engineers design a robust, scalable system architecture, selecting the right stack and AI models for the job."
  },
  {
    number: "03",
    title: "Build",
    icon: <Code className="w-6 h-6 text-white" />,
    description: "We develop the backend APIs, AI agents, and custom dashboards, integrating them seamlessly with your existing tools."
  },
  {
    number: "04",
    title: "Scale",
    icon: <Rocket className="w-6 h-6 text-white" />,
    description: "Rigorous testing, secure deployment to production, and ongoing optimization as your user base and data grow."
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-32 bg-[#050816] relative border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-3xl mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            How we operate.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-xl leading-relaxed font-light"
          >
            A systematic, engineering-first approach to solving complex business problems. No guesswork, just precise execution.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[4.5rem] left-8 right-8 h-[2px] bg-surface z-0 overflow-hidden">
             <motion.div 
               initial={{ x: "-100%" }}
               whileInView={{ x: "100%" }}
               viewport={{ once: true }}
               transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
               className="w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent" 
             />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative z-10"
            >
              <div className="w-16 h-16 rounded-2xl bg-surface border border-white/10 flex items-center justify-center mb-8 relative shadow-lg group">
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-background border-4 border-[#050816]">
                    {step.number}
                </div>
                <div className="relative z-10">
                    {step.icon}
                </div>
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

