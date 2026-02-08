import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Linkedin, Github, FileText, Send } from "lucide-react";

export const Contact = () => {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for reaching out! This is a demo form.");
        setFormState({ name: "", email: "", message: "" });
    };

  return (
    <section id="contact" className="py-24 bg-[#030712] relative overflow-hidden">
        {/* Glow Effect */}
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
                Open to full-time opportunities in Cloud Engineering and DevOps. Feel free to connect for collaborations or interviews.
            </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#0a1025] p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl">
            
            <div className="space-y-8">
                <div>
                    <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                    <div className="space-y-6">
                        <a href="shivk50976@gmail.com" className="flex items-center gap-4 group">
                            <div className="p-3 bg-white/5 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <span className="text-gray-200 font-medium group-hover:text-cyan-400 transition-colors">shivk50976@gmail.com</span>
                            </div>
                        </a>

                        <a href="https://linkedin.com/in/shiv-kumar7" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                            <div className="p-3 bg-white/5 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                <Linkedin size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">LinkedIn</p>
                                <span className="text-gray-200 font-medium group-hover:text-blue-400 transition-colors">linkedin.com/in/shiv-kumar7</span>
                            </div>
                        </a>

                         <a href="https://github.com/shivvvk" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                            <div className="p-3 bg-white/5 rounded-lg text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                                <Github size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">GitHub</p>
                                <span className="text-gray-200 font-medium group-hover:text-purple-400 transition-colors">github.com/shivvvk</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5">
                    <a 
                        href="/resume.pdf"
                        className="w-full py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2"
                    >
                        <FileText size={18} /> Download Resume
                    </a>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm text-gray-400 mb-2">Name</label>
                    <input 
                        type="text" 
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        className="w-full bg-[#030712] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600"
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm text-gray-400 mb-2">Email</label>
                    <input 
                        type="email" 
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="w-full bg-[#030712] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600"
                        placeholder="Your Email"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm text-gray-400 mb-2">Message</label>
                    <textarea 
                        rows={4} 
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        className="w-full bg-[#030712] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600 resize-none"
                        placeholder="How can I help you?"
                        required
                    ></textarea>
                </div>
                <button 
                    type="submit" 
                    className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-900/20"
                >
                    Send Message <Send size={18} />
                </button>
            </form>
        </div>
      </div>
    </section>
  );
};
