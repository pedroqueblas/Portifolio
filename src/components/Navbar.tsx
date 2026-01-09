"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Sobre mim", href: "#about" },
  { name: "Projetos", href: "#projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-bg-header/80 backdrop-blur-md border-b border-sky-blue/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-sky-blue font-krona">
          &lt;Pedro /&gt;
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-white hover:text-sky-blue transition-colors duration-300 font-montserrat font-semibold"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-bg-header border-b border-sky-blue/20 absolute w-full shadow-lg"
        >
          <div className="flex flex-col items-center py-6 gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-sky-blue transition-colors text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  );
}
