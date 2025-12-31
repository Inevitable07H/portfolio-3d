"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, Environment } from "@react-three/drei";
import { EffectComposer, Bloom, ToneMapping } from "@react-three/postprocessing";
import * as THREE from "three";

function DigitalCore() {
    const coreRef = useRef<THREE.Group>(null!);

    useFrame((state) => {
        if (coreRef.current) {
            coreRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
            coreRef.current.rotation.z = state.clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <group ref={coreRef} position={[0, 0, 0]} scale={2.5}>
            {/* Inner Dark Glass Core - The "Obstacle" or "Matter" */}
            <mesh>
                <icosahedronGeometry args={[1, 1]} />
                <meshPhysicalMaterial
                    color="#000000"
                    roughness={0.1}
                    metalness={1}
                    transmission={0}
                    clearcoat={1}
                />
            </mesh>

            {/* Glowing Wireframe Shell - The "Network" */}
            <mesh scale={1.02}>
                <icosahedronGeometry args={[1, 1]} />
                <meshBasicMaterial color="#00f3ff" wireframe />
            </mesh>

            {/* Pulsing Outer Shell - The "Aura" */}
            <mesh scale={1.1}>
                <icosahedronGeometry args={[1, 1]} />
                <meshBasicMaterial color="#bd00ff" wireframe transparent opacity={0.1} />
            </mesh>

            {/* Floating Data Blocks */}
            {[...Array(6)].map((_, i) => (
                <Float key={i} speed={2} rotationIntensity={1} floatIntensity={1}>
                    <mesh position={[
                        Math.sin(i * Math.PI / 3) * 2,
                        Math.cos(i * Math.PI / 3) * 2,
                        0
                    ]} scale={0.1}>
                        <boxGeometry />
                        <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={2} />
                    </mesh>
                </Float>
            ))}
        </group>
    );
}

function Rig() {
    useFrame((state) => {
        // Subtle Mouse Parallax that feels "heavy" and premium
        const x = (state.mouse.x * 0.5);
        const y = (state.mouse.y * 0.5);
        state.camera.position.lerp({ x, y, z: 12 }, 0.05);
        state.camera.lookAt(0, 0, 0);
    });
    return null;
}

export default function EpicScene() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            <Canvas
                dpr={[1, 2]}
                gl={{ antialias: false, powerPreference: "high-performance", alpha: false }} // Disable default AA for PostProcessing
                camera={{ position: [0, 0, 12], fov: 45 }}
            >
                <Rig />
                <color attach="background" args={['#030014']} />

                {/* --- The Content --- */}
                <DigitalCore />

                {/* --- The Environment --- */}
                {/* Close floating data particles */}
                <Sparkles
                    count={100}
                    scale={8}
                    size={2}
                    speed={0.4}
                    opacity={0.5}
                    color="#00f3ff"
                />

                {/* Background stars/network nodes */}
                <Sparkles
                    count={500}
                    scale={20}
                    size={4}
                    speed={0.2}
                    opacity={0.2}
                    color="#bd00ff"
                />

                {/* --- Lighting --- */}
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={2} color="#00f3ff" distance={30} />
                <pointLight position={[-10, -10, 10]} intensity={2} color="#bd00ff" distance={30} />
                {/* Rim light for the dark core */}
                <spotLight position={[0, 10, 0]} intensity={5} color="white" angle={0.5} penumbra={1} />

                {/* --- Effects --- */}
                <EffectComposer>
                    <Bloom
                        luminanceThreshold={0.5} // Only glow bright things
                        mipmapBlur // Soft, premium glow
                        intensity={1.5}
                        radius={0.6}
                    />
                    <ToneMapping />
                </EffectComposer>

                {/* Subtle environmental reflections */}
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
