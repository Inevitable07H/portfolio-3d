"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";
import EpicScene from "@/components/Scene";
import Intro from "@/components/Intro";
import { Experience } from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Volunteer from "@/components/Volunteer";
import Certifications from "@/components/Certifications";
import About from "@/components/About";
import { motion, AnimatePresence } from "framer-motion";
import { PROFILE } from "@/constants";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white selection:bg-purple-500/30 selection:text-white">
      <CustomCursor />

      <AnimatePresence mode="wait">
        {loading && <Intro onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Header />
          <EpicScene />

          {/* HERO SECTION - Keep as landing, About follows */}
          <section
            id="home"
            className="relative h-screen flex flex-col items-center justify-center z-10 text-center px-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 blur-[100px] opacity-20 animate-pulse" />

              <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-6 relative">
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                  Vighnesh
                </span>
                <span className="block text-2xl md:text-4xl font-light tracking-[0.5em] text-cyan-400 mt-2">
                  CHEJARA
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
              <span className="text-xs uppercase tracking-widest text-gray-500">Scroll to Explore</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent" />
            </motion.div>
          </section>

          {/* SECTIONS */}
          <div className="relative z-10 bg-gradient-to-b from-transparent via-[#030014] to-[#030014]">
            <About />
            <Education />
            <Experience />

            <Skills />
            <Volunteer />
            <Achievements /> {/* This is now Honors & Awards */}
            <Certifications />
            <Contact />

            <footer className="py-8 text-center text-gray-600 text-sm relative z-10 border-t border-white/5 bg-[#030014]">
              <p>© {new Date().getFullYear()} Vighnesh Chejara. Crafted with Next.js & React Three Fiber.</p>
            </footer>
          </div>
        </motion.div>
      )}
    </main>
  );
}
