"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import * as THREE from "three";

function SpinningLoader() {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.5;
            meshRef.current.rotation.y += delta * 0.5;
        }
    });

    return (
        <mesh ref={meshRef}>
            <octahedronGeometry args={[1, 0]} />
            <meshBasicMaterial color="#06b6d4" wireframe />
        </mesh>
    );
}

export default function Intro({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1; // Adjust speed here
            });
        }, 30);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress === 100) {
            const timer = setTimeout(() => {
                onComplete();
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [progress, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono text-white"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* HTML Text Overlay - Guaranteed Visibility */}
            <div className="absolute z-10 flex flex-col items-center gap-4">
                <h1 className="text-4xl font-bold tracking-widest text-cyan-400">
                    LOADING
                </h1>
                <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-cyan-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear" }}
                    />
                </div>
                <p className="text-sm text-gray-500">{progress}%</p>
            </div>

            {/* Simple 3D Background */}
            <div className="absolute inset-0 z-0 opacity-50">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <SpinningLoader />
                </Canvas>
            </div>
        </motion.div>
    );
}
