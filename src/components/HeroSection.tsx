"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-20 px-6 overflow-hidden relative">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-neon-purple/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                staggerChildren: 0.1,
                duration: 0.8
              }
            }
          }}
        >
          <motion.div 
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="mb-4 inline-block px-4 py-1 border border-neon-green/50 bg-neon-green/10 text-neon-green font-mono text-sm tracking-widest rounded-sm"
          >
            &lt;SYSTEM_READY /&gt;
          </motion.div>

          <motion.h1 
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-krona"
          >
            <span className="block mb-2">ELEVANDO SEU</span>
            <span className="text-neon-cyan glitch-text block mb-2" data-text="NEGÓCIO DIGITAL">
              NEGÓCIO DIGITAL
            </span>
            <span className="text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">
              PARA O PRÓXIMO NÍVEL
            </span>
          </motion.h1>

          <motion.p 
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            className="text-lg text-gray-400 mb-8 max-w-lg font-montserrat border-l-2 border-neon-pink pl-4"
          >
            Sou <span className="text-white font-bold">Pedro Queblas</span>. Desenvolvedor Front-end especializado em criar experiências digitais imersivas com React e Next.js.
          </motion.p>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="flex flex-wrap gap-6 items-center"
          >
            <motion.a
              href="https://wa.me/8196271214"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cyber-button group"
            >
              <span className="relative z-10 flex items-center gap-2">
                INICIAR PROTOCOLO <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            <div className="flex gap-4">
              <motion.a
                href="https://github.com/pedroqueblas"
                target="_blank"
                whileHover={{ y: -3, color: "#00f3ff" }}
                className="text-gray-400 hover:text-neon-cyan transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/pedro-queblas/"
                target="_blank"
                whileHover={{ y: -3, color: "#ff00ff" }}
                className="text-gray-400 hover:text-neon-pink transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:pedroqueblas@gmail.com"
                whileHover={{ y: -3, color: "#00ff99" }}
                className="text-gray-400 hover:text-neon-green transition-colors"
              >
                <MessageCircle size={24} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center relative"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Cyber Frame */}
            <div className="absolute inset-0 border-2 border-neon-cyan/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 border border-neon-pink/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            
            <div className="absolute -inset-4 border border-neon-purple/20 rounded-full opacity-50"></div>
            
            {/* Hologram Effect Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-neon-cyan/50 shadow-[0_0_30px_rgba(0,243,255,0.3)] bg-cyber-black">
               <Image
                src="/assets/logopedro.ico"
                alt="Pedro Queblas"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/80 to-transparent"></div>
              
              {/* Scanline overlay for image */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
            </div>

            {/* Floating Tech Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-6 -right-6 bg-cyber-black border border-neon-pink p-3 rounded-lg shadow-[0_0_15px_rgba(255,0,255,0.4)] z-30"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-pink rounded-full animate-ping"></div>
                <span className="text-xs font-mono text-neon-pink font-bold">REACT_DEV</span>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-cyber-black border border-neon-cyan p-3 rounded-lg shadow-[0_0_15px_rgba(0,243,255,0.4)] z-30"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-cyan rounded-full animate-ping"></div>
                <span className="text-xs font-mono text-neon-cyan font-bold">NEXT_JS</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
