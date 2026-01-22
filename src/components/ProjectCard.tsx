"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Maximize2 } from "lucide-react";
import clsx from "clsx";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  repoUrl?: string;
  liveUrl?: string;
  index: number;
  onOpenModal: () => void;
}

export default function ProjectCard({
  title,
  description,
  image,
  repoUrl,
  liveUrl,
  index,
  onOpenModal,
}: ProjectProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  };

  return (
    <div
      className="h-[450px] w-full cursor-pointer perspective-1000 group"
      onMouseEnter={() => !isFlipped && setIsFlipped(true)}
      onMouseLeave={() => isFlipped && setIsFlipped(false)}
      onClick={handleFlip}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setIsAnimating(false)}
        className="relative w-full h-full preserve-3d"
      >
        {/* Frente do Card */}
        <div className="absolute w-full h-full backface-hidden bg-cyber-gray border border-gray-800 overflow-hidden clip-path-polygon z-10">
           {/* Decorative corner */}
           <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-neon-cyan/50 z-20"></div>
           <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-neon-pink/50 z-20"></div>
           
           <div className="relative h-2/3 w-full border-b border-neon-cyan/30">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-cyber-black/40 group-hover:bg-transparent transition-colors"></div>
            
            {/* Scanline overlay */}
            <div className="absolute inset-0 bg-[url('/scanline.png')] opacity-20 pointer-events-none"></div>
          </div>

          <div className="h-1/3 p-6 bg-cyber-gray flex flex-col justify-between relative">
            <div>
               <div className="flex justify-between items-start mb-2">
                 <span className="text-xs font-mono text-neon-cyan">PROJECT_0{index + 1}</span>
                 <div className="flex gap-1">
                   <div className="w-1 h-1 bg-neon-pink rounded-full animate-pulse"></div>
                   <div className="w-1 h-1 bg-neon-pink rounded-full animate-pulse delay-100"></div>
                   <div className="w-1 h-1 bg-neon-pink rounded-full animate-pulse delay-200"></div>
                 </div>
               </div>
               <h3 className="text-xl font-bold font-krona text-white truncate">{title}</h3>
            </div>
            
            <div className="flex justify-between items-center">
               <span className="text-xs text-gray-500 font-mono">STATUS: CLASSIFICADO</span>
               <span className="text-neon-cyan text-xs font-bold animate-pulse">&gt;&gt; ACESSAR_DADOS</span>
            </div>
          </div>
        </div>

        {/* Verso do Card */}
        <div
          className="absolute w-full h-full backface-hidden bg-cyber-black border border-neon-cyan overflow-hidden"
          style={{ transform: "rotateY(180deg)" }}
        >
          {/* Grid background */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none"></div>
          
          {/* Header Fixo */}
          <div className="absolute top-0 left-0 right-0 h-14 px-6 flex items-center bg-cyber-black/95 z-20 border-b border-gray-800">
            <div className="flex items-center gap-2 w-full">
              <Code2 className="text-neon-pink w-5 h-5 shrink-0" />
              <h3 className="text-lg font-bold font-krona text-neon-cyan truncate">
                {title}
              </h3>
            </div>
          </div>

          {/* Conteúdo com Scroll */}
          <div className="absolute top-14 bottom-28 left-0 right-0 overflow-y-auto scrollbar-hide p-6">
             <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gray-800 h-full"></div>
             <p className="text-gray-300 text-sm leading-relaxed font-mono pl-4 relative z-10">
               <span className="text-neon-green mr-2">$</span>
               {description}
             </p>
          </div>
    
          {/* Botões Fixos no Rodapé */}
          <div className="absolute bottom-0 left-0 right-0 h-28 px-6 py-4 bg-cyber-black/95 z-30 border-t border-gray-800 flex flex-col gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal();
              }}
              className="w-full py-2 bg-neon-cyan/10 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-cyber-black transition-all text-xs font-bold uppercase flex items-center justify-center gap-2"
            >
              <Maximize2 size={14} /> Ver Detalhes
            </button>

            <div className="flex gap-3">
              <a
                href={repoUrl && repoUrl !== "#" ? repoUrl : undefined}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`flex-1 py-2 border border-neon-cyan/50 text-center text-xs font-bold uppercase transition-all flex items-center justify-center gap-2 ${repoUrl && repoUrl !== "#" ? "text-neon-cyan hover:bg-neon-cyan hover:text-cyber-black cursor-pointer" : "text-gray-600 border-gray-800 cursor-not-allowed opacity-50"}`}
              >
                <Github size={14} /> GITHUB
              </a>
              
               <a
                href={liveUrl && liveUrl !== "#" ? liveUrl : undefined}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`flex-1 py-2 border border-neon-pink/50 text-center text-xs font-bold uppercase transition-all flex items-center justify-center gap-2 ${liveUrl && liveUrl !== "#" ? "text-neon-pink hover:bg-neon-pink hover:text-cyber-black cursor-pointer" : "text-gray-600 border-gray-800 cursor-not-allowed opacity-50"}`}
              >
                <ExternalLink size={14} /> DEPLOY
              </a>
            </div>
          </div>
          
          <div className="absolute bottom-1 right-2 text-[8px] text-gray-700 font-mono pointer-events-none z-40">
            NÍVEL_SEG_5
          </div>
        </div>
      </motion.div>
    </div>
  );
}
