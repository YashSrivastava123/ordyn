"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Smartphone, Monitor, Code2, Globe, Apple, CheckCircle2, ChevronRight } from "lucide-react";

const projects = [
  {
    id: "fiberise",
    title: "Fiberise Fit",
    type: "E-commerce Platform",
    description: "A complete e-commerce platform architected on Next.js with scalable frontend architecture, payment integrations, optimized product flow, and performance-focused engineering.",
    role: "Full Stack Architecture",
    impact: "Architected and developed scalable e-commerce platform using Next.js.",
    tech: ["Next.js", "React", "Node.js", "E-commerce"],
    links: { web: "https://fiberisefit.com/" },
    color: "from-blue-500",
    glowColor: "rgba(59, 130, 246, 0.15)",
    mockupType: "web"
  },
  {
    id: "lyte",
    title: "Lyte Health App",
    type: "Mobile Application",
    description: "A healthcare and fitness mobile application delivering modern health tracking and wellness experience.",
    role: "Mobile App Engineering",
    impact: "Delivered a seamless, high-performance cross-platform health tech experience.",
    tech: ["Flutter", "Dart", "REST APIs", "Health Tech"],
    links: { ios: "https://apps.apple.com/in/app/lyte-health/id6759277122", android: "https://play.google.com/store/apps/details?id=com.ddhealthcare.fitx" },
    color: "from-purple-500",
    glowColor: "rgba(168, 85, 247, 0.15)",
    mockupType: "mobile"
  },
  {
    id: "hrms",
    title: "HRMS Platform",
    type: "Enterprise Web & Mobile",
    description: "An enterprise HRMS platform with employee management, workflow handling, attendance systems, and scalable dashboard architecture.",
    role: "Enterprise Architecture",
    impact: "Streamlined enterprise operations with a unified web and mobile ecosystem.",
    tech: ["React", "Node.js", "Flutter", "PostgreSQL"],
    links: { web: "https://ddhealthcarevps.cloud/", ios: "https://apps.apple.com/in/app/hrms-management/id6760163509" },
    color: "from-emerald-500",
    glowColor: "rgba(16, 185, 129, 0.15)",
    mockupType: "hybrid"
  },
  {
    id: "sapience",
    title: "Sapience Automata",
    type: "Corporate Website",
    description: "Corporate technology website showcasing automation and digital engineering solutions with modern UI/UX implementation.",
    role: "Frontend Architecture",
    impact: "Elevated brand presence with a high-performance, conversion-optimized architecture.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    links: { web: "https://www.sapienceautomata.com/" },
    color: "from-primary",
    glowColor: "rgba(77, 162, 255, 0.15)",
    mockupType: "web"
  },
  {
    id: "tailshug",
    title: "Tailshug",
    type: "Web & Mobile Platform",
    description: "A modern pet-care and pet-services platform with scalable architecture, responsive frontend, and seamless mobile experience.",
    role: "Full Stack & Mobile",
    impact: "Built a highly responsive, cross-platform ecosystem for modern pet care services.",
    tech: ["React Native", "Node.js", "MongoDB", "AWS"],
    links: { web: "https://www.tailshug.com", android: "https://play.google.com/store/apps/details?id=com.tailshug.tailshug" },
    color: "from-orange-500",
    glowColor: "rgba(249, 115, 22, 0.15)",
    mockupType: "hybrid"
  }
];

const AbstractWebMockup = ({ color }: { color: string }) => (
  <div className="w-[120%] h-[120%] md:w-[110%] md:h-[110%] bg-[#0B0F19] rounded-2xl md:rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden flex flex-col transform translate-x-[5%] translate-y-[5%] md:translate-x-[10%] md:translate-y-[10%] group-hover:-translate-y-[2%] transition-transform duration-700 ease-out">
    <div className="h-8 md:h-12 bg-surface border-b border-white/5 flex items-center px-4 md:px-6 gap-2">
      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/20" />
      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/20" />
      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/20" />
      <div className="ml-4 flex-1 max-w-sm h-4 md:h-6 bg-white/5 rounded-md" />
    </div>
    <div className="flex-1 flex p-4 md:p-8 gap-4 md:gap-8">
      <div className="w-1/4 hidden md:flex flex-col gap-4 border-r border-white/5 pr-8">
        <div className={`w-full h-8 rounded bg-gradient-to-r ${color} to-transparent opacity-20`} />
        <div className="w-3/4 h-4 rounded bg-white/5 mt-4" />
        <div className="w-full h-4 rounded bg-white/5" />
        <div className="w-5/6 h-4 rounded bg-white/5" />
      </div>
      <div className="flex-1 flex flex-col gap-4 md:gap-6">
        <div className="flex justify-between items-center">
          <div className="w-1/3 h-6 md:h-10 rounded bg-white/10" />
          <div className={`w-24 h-6 md:h-10 rounded-full bg-gradient-to-r ${color} to-transparent opacity-20`} />
        </div>
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          <div className="h-16 md:h-24 rounded-lg md:rounded-xl bg-white/5 border border-white/5" />
          <div className="h-16 md:h-24 rounded-lg md:rounded-xl bg-white/5 border border-white/5" />
          <div className="h-16 md:h-24 rounded-lg md:rounded-xl bg-white/5 border border-white/5" />
        </div>
        <div className="flex-1 rounded-lg md:rounded-xl bg-surface border border-white/5 relative overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${color} to-transparent opacity-5`} />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:1rem_1rem] md:bg-[size:2rem_2rem] [mask-image:linear-gradient(to_top,white,transparent)]" />
        </div>
      </div>
    </div>
  </div>
);

const AbstractMobileMockup = ({ color }: { color: string }) => (
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] md:w-[300px] h-[480px] md:h-[600px] bg-[#050816] rounded-[2.5rem] md:rounded-[3rem] border-[6px] md:border-[8px] border-surface shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col group-hover:-translate-y-1/2 group-hover:scale-105 transition-transform duration-700 ease-out z-10">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 md:w-40 h-6 md:h-8 bg-surface rounded-b-3xl z-20" />
    <div className={`h-1/3 bg-gradient-to-br ${color} to-[#050816] p-6 pt-12 md:pt-16 flex flex-col justify-end`}>
       <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md mb-4 flex items-center justify-center border border-white/20">
          <div className="w-8 h-8 rounded-full bg-white/20" />
       </div>
       <div className="w-3/4 h-6 rounded bg-white/20 mb-2" />
       <div className="w-1/2 h-4 rounded bg-white/10" />
    </div>
    <div className="flex-1 p-6 flex flex-col gap-4 bg-[#0B0F19]">
       {[1, 2, 3].map((i) => (
         <div key={i} className="w-full p-4 rounded-2xl bg-surface border border-white/5 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} to-transparent opacity-20`} />
            <div className="flex-1 flex flex-col gap-2">
               <div className="w-full h-3 rounded bg-white/10" />
               <div className="w-2/3 h-2 rounded bg-white/5" />
            </div>
         </div>
       ))}
    </div>
  </div>
);

const AbstractHybridMockup = ({ color }: { color: string }) => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute inset-0 transform -translate-x-4 md:-translate-x-12 translate-y-8 md:translate-y-16 scale-90 md:scale-95 opacity-80 group-hover:opacity-100 group-hover:-translate-y-4 md:group-hover:translate-y-12 transition-all duration-700 ease-out">
       <AbstractWebMockup color={color} />
    </div>
    <div className="absolute right-4 md:right-12 bottom-0 transform translate-y-1/4 scale-75 md:scale-90 group-hover:-translate-y-12 group-hover:scale-[0.8] md:group-hover:scale-100 transition-all duration-700 ease-out origin-bottom-right">
       <AbstractMobileMockup color={color} />
    </div>
  </div>
);

export default function CaseStudiesSection() {
  return (
    <section className="py-32 bg-[#050816] relative border-t border-white/5 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-surface backdrop-blur-md mb-8 shadow-xl"
          >
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            <span className="text-xs font-semibold tracking-wider uppercase text-gray-300">Trusted Engineering Partner</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-8"
          >
            Products Built Across <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">Web, Mobile & AI.</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 mt-8"
          >
             <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-white mb-2">5+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">Enterprise Products</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-white mb-2">Millions</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">Of Users Handled</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-white mb-2">100%</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">Delivery Rate</span>
             </div>
          </motion.div>
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-32 md:gap-40">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col gap-12 lg:gap-24 items-center ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-300 mb-6 bg-gradient-to-r ${project.color} to-transparent [background-clip:text] text-transparent`}>
                    {project.type}
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 font-light">
                    {project.description}
                  </p>

                  <div className="w-full h-px bg-white/10 mb-8" />

                  <div className="flex flex-col gap-6 w-full mb-10">
                     <div>
                        <span className="block text-sm text-gray-500 mb-2 font-medium uppercase tracking-wider">Role</span>
                        <span className="text-white font-medium">{project.role}</span>
                     </div>
                     <div>
                        <span className="block text-sm text-gray-500 mb-2 font-medium uppercase tracking-wider">Impact</span>
                        <span className="text-white italic text-gray-300">"{project.impact}"</span>
                     </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-4 py-2 rounded-lg bg-surface border border-white/5 text-sm text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                     {project.links.web && (
                        <Link href={project.links.web} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#050816] font-semibold hover:scale-105 active:scale-95 transition-transform">
                           <Globe size={18} />
                           View Website
                        </Link>
                     )}
                     {project.links.ios && (
                        <Link href={project.links.ios} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-surface text-white font-medium hover:bg-white/5 transition-colors">
                           <Apple size={18} />
                           iOS App
                        </Link>
                     )}
                     {project.links.android && (
                        <Link href={project.links.android} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-surface text-white font-medium hover:bg-white/5 transition-colors">
                           <Smartphone size={18} />
                           Android App
                        </Link>
                     )}
                  </div>
                </div>

                {/* Visual Side */}
                <div className="w-full lg:w-1/2 aspect-square md:aspect-[4/3] lg:aspect-square relative group">
                  <div className="absolute inset-0 glass-panel rounded-[2rem] md:rounded-[3rem] border border-white/10 bg-surface/30 overflow-hidden shadow-2xl" style={{ boxShadow: `0 0 100px ${project.glowColor}` }}>
                     <div className={`absolute inset-0 bg-gradient-to-br ${project.color} to-transparent opacity-10 group-hover:opacity-20 transition-opacity duration-700`} />
                     
                     {/* Mockup Renderer based on type */}
                     {project.mockupType === "web" && <AbstractWebMockup color={project.color} />}
                     {project.mockupType === "mobile" && <AbstractMobileMockup color={project.color} />}
                     {project.mockupType === "hybrid" && <AbstractHybridMockup color={project.color} />}
                     
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA block */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-40 glass-panel p-12 md:p-20 rounded-[2rem] md:rounded-[3rem] border border-white/10 bg-surface/50 text-center relative overflow-hidden"
        >
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 blur-[100px] pointer-events-none" />
           <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10">
              Let’s build your next digital product.
           </h3>
           <Link href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#050816] font-semibold text-lg hover:scale-105 transition-transform relative z-10">
              Start a Conversation
              <ChevronRight size={20} />
           </Link>
        </motion.div>

      </div>
    </section>
  );
}

