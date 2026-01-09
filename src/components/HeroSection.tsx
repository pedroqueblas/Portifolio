"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-20 px-6 overflow-hidden relative">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-krona">
            Eleve seu negócio digital a outro nível{" "}
            <span className="text-sky-blue text-glow">
              com um Front-end de qualidade!
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg font-montserrat">
            Olá! Sou Pedro Queblas, desenvolvedor Front-end com especialidade em
            React, HTML e CSS. Ajudo pequenos negócios e designers a colocarem
            em prática boas ideias. Vamos conversar?
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/pedroqueblas"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-sky-blue text-sky-blue rounded-full hover:bg-sky-blue hover:text-bg-dark transition-all duration-300 shadow-[0_0_10px_rgba(79,195,247,0.3)] hover:shadow-[0_0_20px_rgba(79,195,247,0.6)]"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/pedro-queblas/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-sky-blue text-sky-blue rounded-full hover:bg-sky-blue hover:text-bg-dark transition-all duration-300 shadow-[0_0_10px_rgba(79,195,247,0.3)] hover:shadow-[0_0_20px_rgba(79,195,247,0.6)]"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://wa.me/8196271214"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-sky-blue text-sky-blue rounded-full hover:bg-sky-blue hover:text-bg-dark transition-all duration-300 shadow-[0_0_10px_rgba(79,195,247,0.3)] hover:shadow-[0_0_20px_rgba(79,195,247,0.6)]"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center relative"
        >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-sky-blue/20 blur-[100px] rounded-full z-0 transform scale-75" />
            
            <Image
              src="/assets/avatar3.jpg"
              alt="Pedro Queblas"
              width={400}
              height={400}
              className="rounded-full border-4 border-sky-blue shadow-[0_0_30px_rgba(79,195,247,0.5)] z-10 relative object-cover w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            />
        </motion.div>
      </div>
    </section>
  );
}
