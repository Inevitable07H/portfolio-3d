"use client";

import React from "react";
import { motion } from "framer-motion";
import { CERTIFICATIONS } from "@/constants";
import { ExternalLink, Award } from "lucide-react";

export default function Certifications() {
    return (
        <section id="certifications" className="py-20 relative z-10">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-center"
                >
                    Licenses & Certifications
                </motion.h2>

                <div className="grid gap-4 max-w-4xl mx-auto">
                    {CERTIFICATIONS.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-yellow-500/10 text-yellow-500">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-yellow-200 transition-colors">
                                        {cert.name}
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        {cert.organization} • {cert.year}
                                    </p>
                                </div>
                            </div>

                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/20 text-sm font-medium transition-colors"
                            >
                                {cert.linkText || "View"}
                                <ExternalLink size={14} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
