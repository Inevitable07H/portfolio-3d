"use client";

import React, { useState, useEffect } from "react";
// Actually, I should check if lib/utils exists. Since I haven't seen it, I will assume it might not or I'll just use template literals.

const NAV_ITEMS = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#career" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Volunteer", href: "#volunteer" },
    { name: "Awards", href: "#awards" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            // Use lenis if available or standard scroll. 
            // Since we are adding Lenis, standard scrollIntoView might fight with it, 
            // but typically Lenis intercepts it or we use the lenis instance.
            // For now, native scrollIntoView behavior: 'smooth' usually works well enough with Lenis 
            // or we just let default anchor behavior work if Lenis catches it.
            // Let's stick to standard smooth scroll for now.
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4 bg-[#030014]/50 backdrop-blur-md border-b border-[#2a0e61]/30" : "py-6 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="#home" className="flex items-center gap-2 group">
                    <div className="relative w-10 h-10">
                        {/* Logo Container */}
                        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                            {/* Red Filled Hexagon */}
                            <path d="M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0Z" fill="#ef4444" className="group-hover:fill-red-500 transition-colors" />
                            {/* Outlined Triangle (Inverted/Overlapping) - Adjusted to look like the image concept usually implies a cut or overlay. 
                    Based on image: "rest 3 are how the video is... logo has been changed... first image is new logo" which is "new logo... red hexagon/triangle". 
                    I'll draw a white/transparent triangle cutout or overlay as requested by "color change as per theme". 
                    Actually, let's make it an overlay triangle for that "tech" look.
                */}
                            <path d="M50 70L80 20H20L50 70Z" stroke="white" strokeWidth="4" className="stroke-white group-hover:stroke-cyan-200" fill="transparent" />
                        </svg>
                    </div>
                    <span className="font-bold text-xl tracking-tighter text-white">Vighnesh</span>
                </a>
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => handleScrollTo(e, item.href)}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button - simplified for now */}
                <button className="md:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                </button>
            </div>
        </header>
    );
}
