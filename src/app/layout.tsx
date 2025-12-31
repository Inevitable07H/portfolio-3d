import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { ReactNode } from "react";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Vighnesh | Creative Developer",
  description: "Cinematic 3D Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
