"use client";
import React from "react";
import { EXPERIENCE, PROJECTS } from "@/constants";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, Briefcase, Code2 } from "lucide-react";

const Section = ({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) => (
    <section id={id} className="py-20 relative z-10">
        <div className="container mx-auto px-6">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-bold mb-16 flex items-center gap-4"
            >
                <span className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                    {title}
                </span>
            </motion.h2>
            <div className="grid gap-8">
                {children}
            </div>
        </div>
    </section>
);

const ExperienceCard = ({ role, company, date, description, link, index }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
        className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-500 backdrop-blur-sm overflow-hidden"
    >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                    <Briefcase size={18} className="text-purple-400" />
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">{role}</h3>
                </div>
                <h4 className="text-lg text-gray-400 mb-4 font-medium">{company}</h4>
                <p className="text-gray-300 leading-relaxed text-lg">{description}</p>
            </div>

            <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20 whitespace-nowrap">
                <Calendar size={14} />
                {date}
            </div>
        </div>
        {link && (
            <div className="relative z-10 mt-6">
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/20 text-sm font-medium transition-colors border border-white/5 hover:border-white/20 text-gray-300 hover:text-white"
                >
                    View Role
                    <ExternalLink size={14} />
                </a>
            </div>
        )}
    </motion.div>
);

const ProjectCard = ({ title, date, description, tags, link, index }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
        className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 backdrop-blur-sm overflow-hidden flex flex-col h-full"
    >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 flex-1">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    <Code2 size={24} className="text-cyan-400" />
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                </div>
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all hover:scale-110"
                    >
                        <ExternalLink size={20} />
                    </a>
                )}
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>
        </div>

        <div className="relative z-10">
            <div className="flex flex-wrap gap-2">
                {tags?.map((tag: string, i: number) => (
                    <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-white/10 text-gray-300"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

export const Experience = () => {
    return (
        <div className="relative">
            <Section title="Career History" id="career">
                <div className="space-y-6">
                    {EXPERIENCE.map((exp, index) => (
                        <ExperienceCard key={index} {...exp} index={index} />
                    ))}
                </div>
            </Section>

            <Section title="Featured Projects" id="projects">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={index} {...project} index={index} />
                    ))}
                </div>
            </Section>
        </div>
    );
};
