"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    const trailX = useSpring(mouseX, { damping: 50, stiffness: 100, mass: 1 });
    const trailY = useSpring(mouseY, { damping: 50, stiffness: 100, mass: 1 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const updateHoverState = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        }

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", updateHoverState);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", updateHoverState);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            {/* Main Glow */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                <div className={`
            relative flex items-center justify-center rounded-full blur-md transition-all duration-300
            ${isHovering ? "w-16 h-16 bg-blue-400/30" : "w-8 h-8 bg-blue-500/40"}
        `}>
                    <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-lg animate-pulse" />
                </div>
            </motion.div>

            {/* Trailing Watery Effect */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                style={{
                    x: trailX,
                    y: trailY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                <div className={`
             rounded-full blur-2xl transition-all duration-500 bg-blue-600/30
             ${isHovering ? "w-32 h-32 opacity-50" : "w-16 h-16 opacity-30"}
        `} />
            </motion.div>
        </>
    );
}
