"use client";

import React from "react";
import { motion } from "framer-motion";
import { SKILLS } from "@/constants";

export default function Skills() {
    return (
        <section id="skills" className="py-20 relative z-10">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
                >
                    Professional Arsenal
                </motion.h2>

                <div className="grid gap-12 max-w-5xl mx-auto">
                    {/* Technical Skills */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-2 h-8 bg-cyan-500 rounded-full" />
                            Technical Skills
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {SKILLS.technical.map((skill, index) => (
                                <SkillBadge key={skill} skill={skill} index={index} color="cyan" />
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-2 h-8 bg-purple-500 rounded-full" />
                            Tools & Technologies
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {SKILLS.tools.map((skill, index) => (
                                <SkillBadge key={skill} skill={skill} index={index} color="purple" />
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-2 h-8 bg-pink-500 rounded-full" />
                            Soft Skills
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {SKILLS.soft.map((skill, index) => (
                                <SkillBadge key={skill} skill={skill} index={index} color="pink" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SkillBadge({ skill, index, color = "cyan" }: { skill: string, index: number, color?: string }) {
    const colors = {
        cyan: "border-cyan-500/20 bg-cyan-500/5 text-cyan-200 hover:border-cyan-400/50",
        purple: "border-purple-500/20 bg-purple-500/5 text-purple-200 hover:border-purple-400/50",
        pink: "border-pink-500/20 bg-pink-500/5 text-pink-200 hover:border-pink-400/50",
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className={`px-5 py-2 rounded-xl border transition-all duration-300 cursor-default ${colors[color as keyof typeof colors]}`}
        >
            <span className="font-medium text-sm tracking-wide">
                {skill}
            </span>
        </motion.div>
    );
}
