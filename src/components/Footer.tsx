import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#02050e] border-t border-white/10 pt-12 pb-8">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
            DevOps<span className="text-cyan-500">.Profile</span>
        </h2>
        <p className="text-gray-500 text-sm mb-8">
            Building scalable infrastructure and automating the future.
        </p>

        <div className="flex justify-center gap-6 mb-8">
            <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
            </a>
             <a href="mailto:email@example.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
            </a>
        </div>

        <div className="border-t border-white/5 pt-8">
            <p className="text-gray-600 text-sm">
                &copy; {new Date().getFullYear()} B.Tech Computer Science Portfolio. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};
