"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Terminal } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  repoUrl?: string;
  liveUrl?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Fechar ao pressionar ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Bloquear scroll do body quando aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-cyber-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-cyber-gray border border-neon-cyan/50 shadow-[0_0_50px_rgba(0,243,255,0.2)] flex flex-col md:flex-row overflow-hidden group"
          >
             {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-pink z-20"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-cyan z-20"></div>
            
            {/* Botão Fechar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-30 p-2 bg-black/60 hover:bg-neon-pink/20 text-white hover:text-neon-pink transition-colors border border-white/10 hover:border-neon-pink rounded-none clip-path-polygon"
            >
              <X size={24} />
            </button>

            {/* Imagem (Esquerda/Topo) */}
            <div className="relative w-full md:w-1/2 h-64 md:h-auto min-h-[300px] border-b md:border-b-0 md:border-r border-neon-cyan/30">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-cyber-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 font-mono text-xs text-neon-cyan bg-black/50 px-2 py-1 border border-neon-cyan/50">
                FONTE_IMG: {project.title.toUpperCase()}
              </div>
            </div>

            {/* Conteúdo (Direita/Baixo) */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto custom-scrollbar relative bg-[url('/grid.svg')] bg-opacity-5">
              <div className="flex items-center gap-2 mb-2 text-neon-pink text-xs font-mono">
                 <Terminal size={14} />
                 <span>EXECUTANDO_VISUALIZADOR.EXE</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold font-krona text-white mb-6 border-l-4 border-neon-cyan pl-4">
                {project.title}
              </h3>

              <div className="prose prose-invert max-w-none mb-8 flex-grow">
                <p className="text-gray-300 font-montserrat leading-relaxed text-sm md:text-base whitespace-pre-line border-l border-gray-800 pl-4 ml-1">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-neon-cyan/20">
                {project.repoUrl && project.repoUrl !== "#" && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-button text-sm flex items-center gap-2"
                  >
                    <Github size={18} /> GITHUB
                  </a>
                )}
                
                {project.liveUrl && project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-button cyber-button-pink text-sm flex items-center gap-2"
                  >
                    <ExternalLink size={18} /> DEPLOY
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
