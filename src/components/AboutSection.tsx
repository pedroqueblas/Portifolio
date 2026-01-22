"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
       {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-neon-purple/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-neon-cyan/5 blur-[120px] -z-10" />
      
      {/* Decorative lines */}
      <div className="absolute left-10 top-20 w-[1px] h-40 bg-gradient-to-b from-transparent via-neon-cyan to-transparent opacity-30"></div>
      <div className="absolute right-10 bottom-20 w-[1px] h-40 bg-gradient-to-b from-transparent via-neon-pink to-transparent opacity-30"></div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[2px] w-12 bg-neon-pink"></div>
            <h2 className="text-3xl md:text-4xl font-bold font-krona tracking-wider">
              SOBRE <span className="text-neon-cyan glitch-text" data-text="MIM">MIM</span>
            </h2>
            <div className="h-[2px] flex-grow bg-gradient-to-r from-neon-pink to-transparent opacity-30"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-neon-cyan"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-neon-pink"></div>
              
              <div className="bg-cyber-gray/50 border border-neon-cyan/20 p-8 backdrop-blur-sm relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                 
                 <p className="text-lg text-gray-300 leading-relaxed font-montserrat">
                  <span className="text-neon-cyan font-bold">&gt;</span> Olá! Sou Pedro Queblas, um entusiasta do ciberespaço e tecnologia.
                  <br /><br />
                  <span className="text-neon-cyan font-bold">&gt;</span> Encontrei meu caminho no desenvolvimento Front-End, onde código se torna arte visual.
                  <br /><br />
                  <span className="text-neon-cyan font-bold">&gt;</span> Atualmente em processo de upgrade constante, buscando dominar novas stacks e criar interfaces que desafiam o comum.
                </p>
              </div>
            </div>

            {/* Stats/Bio Data */}
            <div className="grid grid-cols-2 gap-4">
               {[
                 { label: "EXP", value: "JUNIOR" },
                 { label: "FOCO", value: "FRONT-END" },
                 { label: "STATUS", value: "DISPONÍVEL" },
                 { label: "LOCAL", value: "BRASIL" }
               ].map((stat, i) => (
                 <div key={i} className="bg-cyber-black border border-gray-800 p-4 hover:border-neon-pink transition-colors group">
                    <h4 className="text-gray-500 text-xs font-mono mb-1">{stat.label}</h4>
                    <p className="text-xl font-bold font-krona text-white group-hover:text-neon-pink transition-colors">{stat.value}</p>
                 </div>
               ))}
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-8 font-krona flex items-center gap-3">
            <span className="text-neon-green">#</span> TECH_STACK
          </h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="cyber-box w-32 h-32 flex flex-col items-center justify-center gap-3 group hover:bg-neon-cyan/10 transition-colors cursor-pointer"
              >
                <div className="relative w-12 h-12">
                  <Image
                    src={skill.url}
                    alt={skill.name}
                    fill
                    className="object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(0,243,255,0.8)] transition-all"
                  />
                </div>
                <p className="text-xs font-bold font-mono tracking-widest text-gray-400 group-hover:text-neon-cyan transition-colors">{skill.name}</p>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-2 h-2 bg-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
