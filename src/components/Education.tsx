"use client";

import React from "react";
import { motion } from "framer-motion";
import { EDUCATION } from "@/constants";
import { BadgeCheck, GraduationCap, MarsStroke, MarsStrokeIcon } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="py-20 relative z-10">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-16 flex items-center gap-4"
                >
                    <span className="w-12 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                        Education
                    </span>
                </motion.h2>

                <div className="space-y-8 max-w-4xl">
                    {EDUCATION.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 border-l-2 border-white/10"
                        >
                            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#030014]" />
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                                    <h3 className="text-2xl font-bold text-white">{edu.institution}</h3>
                                    <span className="px-4 py-1 rounded-full bg-blue-500/10 text-blue-300 text-sm font-mono border border-blue-500/20">
                                        {edu.duration}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-300 text-lg">
                                    <GraduationCap size={20} className="text-blue-400" />
                                    {edu.degree}
                                </div>
                                <div className="flex items-center gap-2 text-gray-300 text-lg">
                                    <BadgeCheck size={20} className="text-blue-400" />
                                    {edu.CGPA}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
