"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { PROFILE } from "@/constants";

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative z-10 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-white"
                    >
                        Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Epic</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg mb-10"
                    >
                        I'm always open to discussing product design, collaborating on AI/IoT projects, or just chatting about the latest tech.
                    </motion.p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">

                        <div className="flex items-center gap-4">
                            {PROFILE.social.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target={social.url.startsWith("mailto") ? "_self" : "_blank"}
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, color: "#ffffff" }}
                                    className="p-4 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/30 transition-all"
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
