"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X, Terminal } from "lucide-react";

const links = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "#about" },
  { name: "Projetos", href: "#projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-cyber-black/90 border-b border-neon-cyan/30 backdrop-blur-md">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="group flex items-center gap-3">
          <div className="px-3 py-1 border border-neon-cyan/50 bg-neon-cyan/5 rounded-sm group-hover:bg-neon-cyan/10 transition-all duration-300 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-neon-cyan"></div>
             <span className="text-lg md:text-xl font-bold text-neon-cyan font-krona tracking-wider group-hover:text-neon-pink transition-colors glitch-text" data-text="PEDRO_QUEBLAS">
               &lt;PEDRO_QUEBLAS /&gt;
             </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-gray-300 hover:text-neon-cyan transition-colors duration-300 font-montserrat font-bold uppercase tracking-widest group text-sm"
            >
              <span className="absolute -left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-neon-pink">[</span>
              {link.name}
              <span className="absolute -right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-neon-pink">]</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neon-cyan hover:text-neon-pink transition-colors p-2 border border-neon-cyan/50 rounded-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-cyber-black border-b border-neon-cyan/50 overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-neon-cyan/5 pointer-events-none"></div>
            <div className="flex flex-col items-center py-8 gap-8 relative z-10">
              {links.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-neon-cyan transition-colors text-xl font-bold uppercase tracking-widest flex items-center gap-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-neon-pink">&gt;</span> {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
