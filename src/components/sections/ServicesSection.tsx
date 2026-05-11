"use client";

import { motion } from "framer-motion";
import { Bot, LayoutDashboard, Database, ShoppingCart, Cloud, Code2, Smartphone, Box } from "lucide-react";

const services = [
  {
    icon: <Bot className="w-6 h-6 text-primary" />,
    title: "AI Automation Systems",
    description: "Custom AI agents and autonomous workflows that connect your data silos and automate complex operational tasks."
  },
  {
    icon: <Database className="w-6 h-6 text-secondary" />,
    title: "Backend Infrastructure",
    description: "Scalable, secure, and highly available API architectures engineered for high-throughput enterprise applications."
  },
  {
    icon: <LayoutDashboard className="w-6 h-6 text-blue-400" />,
    title: "Internal Admin Dashboards",
    description: "High-performance bespoke tooling and admin panels built for operations, customer support, and data management."
  },
  {
    icon: <Box className="w-6 h-6 text-indigo-400" />,
    title: "SaaS Product Development",
    description: "End-to-end development of multi-tenant SaaS platforms, handling everything from authentication to complex billing engines."
  },
  {
    icon: <Code2 className="w-6 h-6 text-primary" />,
    title: "Web Application Development",
    description: "Modern, extremely fast, and SEO-optimized web applications using Next.js, React, and cutting-edge frontend tooling."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-secondary" />,
    title: "Mobile App Development",
    description: "Native-feeling iOS and Android applications built with React Native for maximum performance and cross-platform efficiency."
  },
  {
    icon: <ShoppingCart className="w-6 h-6 text-blue-400" />,
    title: "Ecommerce Systems",
    description: "Custom headless commerce routing, inventory sync, and dynamic pricing engines that eliminate manual operations."
  },
  {
    icon: <Cloud className="w-6 h-6 text-indigo-400" />,
    title: "Cloud & DevOps Engineering",
    description: "CI/CD pipelines, containerization, and serverless deployments optimized for speed, security, and cost-efficiency."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Comprehensive <br /> technical capabilities.
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed">
            We operate across the entire modern tech stack, delivering cohesive, performant, and scalable solutions for every layer of your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-panel p-8 rounded-[2rem] group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 bg-surface/50 border border-white/5 hover:border-white/20"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-surface border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {service.description}
                  </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

