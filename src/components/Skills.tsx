import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Cloud, Terminal, Server, GitBranch, Award, CheckCircle, ChevronRight, Cpu, Layers
} from "lucide-react";

const technicalSkills = [
  {
    id: "cloud",
    category: "Cloud Architecture",
    icon: <Cloud className="text-cyan-400" />,
    description: "Designing scalable, fault-tolerant cloud environments.",
    skills: ["AWS EC2, S3, RDS", "IAM & Security Groups", "VPC Networking", "Lambda Serverless", "Auto Scaling"],
    color: "from-cyan-500/20 to-blue-500/5",
    border: "group-hover:border-cyan-500/50"
  },
  {
    id: "devops",
    category: "DevOps Automation",
    icon: <Cpu className="text-violet-400" />,
    description: "Streamlining development lifecycles with CI/CD.",
    skills: ["Docker Containers", "Kubernetes (K8s)", "Jenkins Pipelines", "GitHub Actions", "ArgoCD"],
    color: "from-violet-500/20 to-purple-500/5",
    border: "group-hover:border-violet-500/50"
  },
  {
    id: "iac",
    category: "Infrastructure as Code",
    icon: <Terminal className="text-green-400" />,
    description: "Managing infrastructure through version-controlled code.",
    skills: ["Terraform", "Ansible", "CloudFormation", "Bash Scripting", "Python Automation"],
    color: "from-green-500/20 to-emerald-500/5",
    border: "group-hover:border-green-500/50"
  },
  {
    id: "monitor",
    category: "Observability",
    icon: <Layers className="text-orange-400" />,
    description: "Ensuring system reliability and performance.",
    skills: ["Prometheus", "Grafana", "ELK Stack", "AWS CloudWatch", "Datadog"],
    color: "from-orange-500/20 to-red-500/5",
    border: "group-hover:border-orange-500/50"
  }
];

export const Skills = () => {
  const [activeTab, setActiveTab] = useState(technicalSkills[0].id);

  return (
    <section id="skills" className="py-24 bg-[#050b1d] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-cyan-900/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-900/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Technical <span className="text-cyan-400">Expertise</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            My toolkit for building resilient infrastructure and automating deployment workflows.
          </motion.p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {technicalSkills.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative p-6 rounded-2xl bg-[#0a1025] border border-white/5 ${section.border} transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden`}
            >
              {/* Card Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(section.icon as React.ReactElement, { size: 28 })}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{section.category}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed min-h-[40px]">{section.description}</p>
                
                <div className="space-y-3">
                    {section.skills.map((skill, i) => (
                        <div key={i} className="flex items-center gap-3">
                             <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors" />
                             <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{skill}</span>
                        </div>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Banner */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0f172a]"
        >
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
             <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-blue-900/20" />
             
             <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-start gap-6">
                    <div className="p-4 bg-yellow-500/10 rounded-full text-yellow-500">
                        <Award size={40} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Professional Certifications</h3>
                        <p className="text-gray-400 max-w-lg">Validated expertise in top-tier cloud platforms and devops methodologies.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
                    {[
                        "AWS Certified Cloud Practitioner",
                        "Docker Essentials",
                        "Kubernetes Fundamentals",
                        "DevOps Foundations"
                    ].map((cert, i) => (
                        <div key={i} className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                            <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-200">{cert}</span>
                        </div>
                    ))}
                </div>
             </div>
        </motion.div>

      </div>
    </section>
  );
};
