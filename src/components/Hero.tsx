import React from "react";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Cloud,
  Terminal,
  Server,
} from "lucide-react";


import shivPhoto from "../shiv-photo.jpeg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50 },
  },
};

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#030712]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* LEFT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:w-1/2 text-center lg:text-left"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Cloud <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Architect
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 max-w-xl mb-10"
            >
              Shiv Kumar B.Tech CSE{" "}
              <span className="text-white">Cloud Infrastructure</span>,{" "}
              <span className="text-white">Automation</span>, and{" "}
              <span className="text-white">Scalable Systems</span>.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="/resume.pdf"
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl text-white font-semibold hover:scale-105 transition"
              >
                <span className="flex items-center gap-2">
                  <FileText size={18} /> Download Resume
                </span>
              </a>

              <SocialButton href="https://github.com" icon={<Github size={20} />} label="GitHub" />
              <SocialButton href="https://linkedin.com" icon={<Linkedin size={20} />} label="LinkedIn" />
              <SocialButton href="mailto:contact@example.com" icon={<Mail size={20} />} label="Email" />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex gap-6 justify-center lg:justify-start text-gray-400"
            >
              <TechIcon icon={<Cloud />} label="AWS" />
              <TechIcon icon={<Terminal />} label="Terraform" />
              <TechIcon icon={<Server />} label="Kubernetes" />
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative animate-float">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[2rem] blur-2xl opacity-40" />

              {/* Image Card */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={shivPhoto}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* 🔥 Text Badge */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%]">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-4 shadow-lg">
                    <p className="text-white text-lg font-bold">
                       Shiv Kumar
                    </p>
                    <p className="text-cyan-300 text-sm font-medium">
                      B.Tech CSE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ---------- Reusable Components ---------- */

const SocialButton = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:text-cyan-400 hover:border-cyan-400 transition"
  >
    {icon}
    <span>{label}</span>
  </a>
);

const TechIcon = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex flex-col items-center gap-1">
    <div className="p-3 bg-white/5 rounded-lg">{icon}</div>
    <span className="text-xs">{label}</span>
  </div>
);
