import type { Metadata } from "next";
import { Krona_One, Montserrat } from "next/font/google";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${kronaOne.variable} ${montserrat.variable} antialiased bg-[#0a0a0a] text-[#f6f6f6] min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
