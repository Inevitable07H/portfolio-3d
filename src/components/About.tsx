"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROFILE } from "@/constants";

export default function About() {
    return (
        <section id="about" className="py-20 relative z-10">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-8 text-white"
                    >
                        About <span className="text-cyan-400">Me</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light"
                    >
                        "{PROFILE.summary}"
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
