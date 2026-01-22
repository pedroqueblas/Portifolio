import type { Metadata } from "next";
import { Krona_One, Montserrat } from "next/font/google";
import "./globals.css";
import CyberEffects from "@/components/CyberEffects";

const kronaOne = Krona_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-krona",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Pedro Queblas | Portfolio",
  description: "Desenvolvedor Front-end especializado em React, Next.js e UX/UI.",
  icons: {
    icon: "/assets/logopedro.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${kronaOne.variable} ${montserrat.variable} antialiased bg-cyber-black text-[#f6f6f6] min-h-screen flex flex-col selection:bg-neon-pink selection:text-white`}
      >
        <CyberEffects />
        {children}
      </body>
    </html>
  );
}
