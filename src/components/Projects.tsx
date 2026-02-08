import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink, Server, Cloud, Layers, Code, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Enterprise CI/CD Pipeline",
    category: "DevOps Automation",
    description: "Architected a fully automated CI/CD pipeline reducing deployment time by 60%. Integrated Jenkins for orchestration, Docker for containerization, and AWS CodeDeploy for zero-downtime releases.",
    image: "https://images.unsplash.com/photo-1667372393119-c81c0cda0c29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZvcHMlMjBwaXBlbGluZXxlbnwxfHx8fDE3NzA1NjAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["Jenkins", "Docker", "AWS EC2", "Bash"],
    icon: <Layers size={24} className="text-blue-400" />
  },
  {
    id: 2,
    title: "Terraform Cloud Infra",
    category: "Infrastructure as Code",
    description: "Developed modular Terraform scripts to provision a highly available multi-tier architecture on AWS. Included VPCs, private subnets, NAT gateways, and auto-scaling groups.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGlucmZhc3RydWN0dXJlfGVufDF8fHx8MTc3MDU2MDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["Terraform", "AWS", "IAM", "Security Groups"],
    icon: <Cloud size={24} className="text-cyan-400" />
  },
  {
    id: 3,
    title: "Kubernetes Monitoring Suite",
    category: "Container Orchestration",
    description: "Deployed a microservices app on EKS with a custom monitoring stack. Configured Prometheus for metrics scraping and Grafana for visualizing cluster health and pod resource usage.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25pdG9yaW5nJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MDU2MDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["Kubernetes", "Prometheus", "Grafana", "Helm"],
    icon: <Server size={24} className="text-violet-400" />
  }
];

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-[#030712] relative">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
                <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-2 block"
                >
                    Portfolio
                </motion.span>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-white mb-6"
                >
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Deployments</span>
                </motion.h2>
            </div>
            
            <motion.a 
                href="https://github.com" 
                target="_blank"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
                View all repositories <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
            </motion.a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-[#0a1025] rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-500 h-[480px] flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-1/2 overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{ 
                    scale: hoveredIndex === index ? 1.1 : 1 
                  }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Floating Icon */}
                <div className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white shadow-lg">
                    {project.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="relative p-8 h-1/2 flex flex-col z-20 bg-[#0a1025]">
                {/* Hover Glow Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{project.category}</span>
                    <div className="h-px bg-white/10 flex-grow" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                </p>

                <div className="mt-auto flex justify-between items-center">
                    <div className="flex -space-x-2">
                        {project.tech.map((tech, i) => (
                            <div key={i} className="px-3 py-1 bg-[#1e293b] rounded-full border border-white/10 text-[10px] text-gray-300 font-medium z-10 hover:z-20 hover:scale-110 transition-transform">
                                {tech}
                            </div>
                        ))}
                    </div>
                    
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-cyan-600 hover:scale-110 transition-all duration-300">
                        <Github size={20} />
                    </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <a href="#" className="inline-flex items-center gap-2 text-cyan-400 font-medium">
                View all repositories <ArrowUpRight size={16} />
            </a>
        </div>
      </div>
    </section>
  );
};
