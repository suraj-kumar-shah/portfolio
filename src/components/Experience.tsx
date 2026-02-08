import React from "react";
import { motion } from "motion/react";
import { Briefcase, Calendar, Star, Heart } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#030712]">
      <div className="container mx-auto px-6">
        
        {/* Work Experience */}
        <div className="mb-20">
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <Briefcase className="text-cyan-400" /> Professional Experience
            </h2>
            </div>

            <div className="max-w-4xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative pl-8 md:pl-0"
                >
                    {/* Timeline Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-cyan-900 to-transparent md:hidden" />
                    
                    <div className="md:flex items-start gap-6 bg-[#0a1025] p-8 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all">
                        <div className="hidden md:flex flex-col items-center justify-center w-32 flex-shrink-0 border-r border-white/10 pr-6">
                            <span className="text-4xl font-bold text-cyan-500/20">2025</span>
                            <span className="text-sm text-cyan-400 mt-1">Present</span>
                        </div>
                        
                        <div>
                            <div className="flex flex-wrap items-center justify-between mb-2">
                                <h3 className="text-xl font-bold text-white">Cloud & DevOps Intern</h3>
                                <span className="md:hidden text-xs font-medium text-cyan-400 bg-cyan-900/20 px-2 py-1 rounded">2023 - Present</span>
                            </div>
                            <h4 className="text-lg text-gray-400 mb-4 font-medium">Self-Employed | Remote</h4>
                            
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2 text-gray-400 text-sm">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                                    Assisted in deploying applications on AWS and managing cloud resources.
                                </li>
                                <li className="flex items-start gap-2 text-gray-400 text-sm">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                                    Created Docker images for microservices and managed container lifecycles.
                                </li>
                                <li className="flex items-start gap-2 text-gray-400 text-sm">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                                    Supported CI/CD pipeline maintenance and automated deployment scripts.
                                </li>
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {["Cloud Deployment", "Linux Admin", "Teamwork"].map(skill => (
                                    <span key={skill} className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>

        {/* Extra-Curricular Activities */}
        <div>
             <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                    <Heart className="text-pink-500" /> Activities & Involvements
                </h2>
                <p className="text-gray-400">Beyond the code: Community engagement and continuous learning.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                    { title: "Hackathons", desc: "Participated in Cloud/DevOps based hackathons.", icon: "🏆" },
                    { title: "Open Source", desc: "Contributed to GitHub repositories for DevOps tools.", icon: "🐙" },
                    { title: "Technical Blogging", desc: "Writing articles on DevOps tools and best practices.", icon: "✍️" },
                    { title: "Community", desc: "Active member of AWS and Linux Community Meetups.", icon: "🤝" },
                    { title: "College Tech Club", desc: "Lead the Infrastructure / Deployment Team.", icon: "🎓" },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-6 bg-[#0a1025] rounded-xl border border-white/5 hover:bg-[#0f172a] transition-colors"
                    >
                        <div className="text-3xl mb-4">{item.icon}</div>
                        <h4 className="text-white font-bold mb-2">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};
