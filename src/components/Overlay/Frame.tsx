"use client";

import { Menu } from "lucide-react";

export function Frame() {
    return (
        <>
            {/* Logo */}
            <div className="fixed top-8 left-8 z-50">
                <h1
                    style={{
                        fontSize: "6vw",
                        lineHeight: 0.85,
                        letterSpacing: "-0.04em",
                    }}
                >
                    VIGHNESH
                </h1>

                <p
                    style={{
                        fontFamily: "JetBrains Mono",
                        fontSize: 12,
                        opacity: 0.6,
                        marginTop: 18,
                        letterSpacing: "0.2em",
                    }}
                >
                    CREATIVE DEVELOPER
                </p>

            </div>

            {/* Menu */}
            <div className="fixed top-8 right-8 z-50">
                <Menu size={22} />
            </div>

            {/* Footer hint */}
            <section
                style={{
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <h2
                    style={{
                        fontSize: "7vw",
                        textAlign: "center",
                        opacity: 0.9,
                    }}
                >
                    BUILT WITH INTENT.
                </h2>
            </section>

        </>
    );
}
