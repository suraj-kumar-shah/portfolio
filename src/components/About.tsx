import React from "react";
import { motion } from "motion/react";
import { User, Target, Users, Brain, Clock, Search, Briefcase, GraduationCap } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-[#030712] relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute top-20 right-0 opacity-5 pointer-events-none">
            <svg width="400" height="400" viewBox="0 0 400 400">
                <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="2" fill="currentColor" className="text-white" />
                </pattern>
                <rect width="400" height="400" fill="url(#pattern-circles)" />
            </svg>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
            
          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-cyan-500"></div>
              <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-widest">Career Snapshot</h2>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Curiosity</span>, <br />
              Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Code</span>.
            </h3>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-10">
              <p>
                I am a B.Tech Computer Science graduate with a relentless passion for <strong className="text-gray-200">Cloud Computing</strong> and <strong className="text-gray-200">DevOps</strong>. My journey isn't just about writing scripts; it's about architecting systems that are self-healing, scalable, and secure.
              </p>
              <p>
                I actively contribute to open-source projects and constantly experiment with new tools like ArgoCD and Helm. My goal is to join a forward-thinking engineering team where I can solve complex infrastructure challenges.
              </p>
            </div>

            <div className="bg-[#0a1025] border-l-4 border-cyan-500 p-6 rounded-r-xl mb-12 shadow-lg">
               <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                 <Target className="text-cyan-500" size={20} /> Career Objective
               </h4>
               <p className="text-gray-400 italic">
                 "To secure a DevOps or Cloud Engineer role where I can apply my knowledge of cloud platforms, CI/CD automation, and infrastructure management to build scalable and reliable systems."
               </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Core Competencies</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                    { name: "Problem Solving", icon: <Brain size={20} /> },
                    { name: "Collaboration", icon: <Users size={20} /> },
                    { name: "Adaptability", icon: <Clock size={20} /> },
                    { name: "RCA Analysis", icon: <Search size={20} /> },
                ].map((skill, index) => (
                  <motion.div 
                    key={index} 
                    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                    className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/5 transition-all cursor-default"
                  >
                    <div className="text-cyan-400 mb-3">{skill.icon}</div>
                    <span className="text-sm text-gray-300 text-center font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

           {/* Stats/Highlight Side */}
           <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 flex flex-col gap-6"
          >
            {/* Education Card */}
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-[#0a1025] p-8 rounded-2xl border border-white/10 shadow-xl">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 text-blue-400">
                        <GraduationCap size={28} />
                    </div>
                    <h4 className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-2">Education</h4>
                    <h5 className="text-xl font-bold text-white mb-1">B.Tech Computer Science</h5>
                    <p className="text-cyan-400 text-sm font-medium mb-4">Cloud Specialization</p>
                    <p className="text-gray-500 text-sm">2023 - 2027</p>
                </div>
            </div>

            {/* Experience Summary Card */}
             <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-[#0a1025] p-8 rounded-2xl border border-white/10 shadow-xl">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 text-purple-400">
                        <Briefcase size={28} />
                    </div>
                    <h4 className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-2">Experience</h4>
                    <h5 className="text-xl font-bold text-white mb-1">Cloud & DevOps Intern</h5>
                    <p className="text-purple-400 text-sm font-medium mb-4">Self-Employed | Remote</p>
                    <div className="flex items-center gap-2">
                         <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                         <p className="text-gray-500 text-sm">Currently Active</p>
                    </div>
                </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
