"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { AWARDS } from "@/constants";

export default function Achievements() {
    return (
        <section id="awards" className="py-20 relative z-10">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"
                >
                    Honors & Awards
                </motion.h2>

                <div className="grid grid-cols-1 gap-6 justify-center max-w-4xl mx-auto">
                    {AWARDS.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-6 rounded-2xl bg-[#0a0a2e]/50 border border-white/5 backdrop-blur-sm hover:border-yellow-500/30 transition-all duration-300 hover:z-20"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400/20 to-orange-500/20 text-yellow-400 shrink-0">
                                    <Trophy size={24} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-200 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-yellow-500/80 mb-2 font-mono">{item.date}</p>
                                    <p className="text-gray-400 text-sm mb-4">{item.organization}</p>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {[item.image, item.image1, item.image2].filter(Boolean).map((img, i) => (
                                            <div key={i} className="relative w-24 h-16 rounded-lg overflow-hidden border border-white/10 group-hover:border-yellow-500/30 transition-all duration-300 hover:scale-[2.5] hover:z-50 hover:shadow-xl cursor-pointer">
                                                <img
                                                    src={img}
                                                    alt={`${item.title} ${i + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
