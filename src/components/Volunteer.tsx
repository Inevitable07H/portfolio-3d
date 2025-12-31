"use client";

import React from "react";
import { motion } from "framer-motion";
import { VOLUNTEER } from "@/constants";
import { HeartHandshake } from "lucide-react";

export default function Volunteer() {
    return (
        <section id="volunteer" className="py-20 relative z-10">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-16 flex items-center gap-4"
                >
                    <span className="w-12 h-1 bg-gradient-to-r from-pink-500 to-rose-400 rounded-full" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                        Volunteering
                    </span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {VOLUNTEER.map((org, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 rounded-3xl p-8 border border-white/10"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center shrink-0 overflow-hidden">
                                    {org.logo ? (
                                        <img
                                            src={org.logo}
                                            alt={org.organization}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <HeartHandshake className="text-pink-400" size={32} />
                                    )}
                                </div>
                                <h3 className="text-2xl font-bold text-white">{org.organization}</h3>
                            </div>

                            <div className="space-y-6">
                                {org.roles.map((role, rIdx) => (
                                    <div key={rIdx} className="relative pl-6 border-l border-white/10">
                                        <div className="absolute -left-[3px] top-2 w-1.5 h-1.5 rounded-full bg-pink-500" />
                                        <h4 className="text-xl font-semibold text-pink-200 mb-1">{role.title}</h4>
                                        <span className="text-sm font-mono text-gray-500 mb-2 block">{role.date}</span>
                                        <p className="text-gray-300 leading-relaxed">{role.impact}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
