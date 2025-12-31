"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Stars, Float, Sparkles } from "@react-three/drei";

function PortalVortex() {
    const points = useRef<THREE.Points>(null!);

    // Create a spiral geometry
    const particles = useMemo(() => {
        const count = 2000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            // Spiral math
            const t = Math.random() * 100;
            const angle = 0.5 * t;
            const radius = 0.2 * t + 0.5; // Expanding spiral

            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            const z = (Math.random() - 0.5) * 5; // Depth variation

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            // Color gradient: Blue center -> Cyan/Purple edge
            const color = new THREE.Color();
            color.setHSL(0.5 + Math.random() * 0.2, 0.8, 0.5); // Blue-ish
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }
        return { positions, colors };
    }, []);

    useFrame((state) => {
        if (points.current) {
            // Rotate the entire vortex
            points.current.rotation.z -= 0.005;
            // Pulse effect?
        }
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.positions.length / 3}
                    array={particles.positions}
                    itemSize={3}
                    args={[particles.positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={particles.colors.length / 3}
                    array={particles.colors}
                    itemSize={3}
                    args={[particles.colors, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.15}
                vertexColors
                transparent
                opacity={0.8}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}

function FloatingParticles() {
    // Background dust
    return (
        <Sparkles
            count={800}
            scale={25}
            size={4}
            speed={0.2}
            opacity={0.4}
            color="#4f46e5" // Indigo
        />
    )
}

function IntroLogo3D() {
    const group = useRef<THREE.Group>(null!);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y += 0.01;
        }
    })

    return (
        <Float speed={2} rotationIntensity={0.2}>
            <group ref={group}>
                {/* Hexagon Mesh */}
                <mesh>
                    <cylinderGeometry args={[1, 1, 0.5, 6]} />
                    <meshStandardMaterial color="#ef4444" emissive="#7f1d1d" emissiveIntensity={0.5} />
                </mesh>
                {/* Triangle Overlay - just a visual representation */}
                <mesh position={[0, 0, 0.3]}>
                    <coneGeometry args={[0.8, 1, 3]} />
                    <meshStandardMaterial color="#fff" wireframe />
                </mesh>
            </group>
        </Float>
    )
}

export default function LoadingScene({ progress }: { progress: number }) {
    // This scene is specifically for the loading/intro phase
    // It matches the "Portal" video description
    return (
        <>
            <color attach="background" args={["#000"]} />

            <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} />

            <group rotation={[0, 0, Math.PI / 4]}>
                <PortalVortex />
            </group>

            <FloatingParticles />

            {/* Intro Centerpiece */}
            <group position={[0, 0, 2]}>
                <IntroLogo3D />
            </group>

            <ambientLight intensity={0.2} />
            <pointLight position={[5, 5, 5]} color="#3b82f6" intensity={2} />
            <pointLight position={[-5, -5, -5]} color="#a855f7" intensity={2} />
        </>
    );
}
