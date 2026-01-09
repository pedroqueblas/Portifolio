"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  repoUrl?: string;
  liveUrl?: string;
  index: number;
}

export default function ProjectCard({ title, description, image, repoUrl, liveUrl, index }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-bg-card rounded-xl overflow-hidden border border-gray-800 hover:border-sky-blue/50 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(79,195,247,0.15)] flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-bg-dark rounded-full text-white hover:text-sky-blue hover:bg-white transition-colors"
              aria-label="Ver Repositório"
            >
              <Github size={24} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-bg-dark rounded-full text-white hover:text-sky-blue hover:bg-white transition-colors"
              aria-label="Ver Demo"
            >
              <ExternalLink size={24} />
            </a>
          )}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 font-krona group-hover:text-sky-blue transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 font-montserrat flex-grow">
          {description}
        </p>
        <button className="w-full py-2 border border-sky-blue text-sky-blue rounded-lg hover:bg-sky-blue hover:text-bg-dark transition-all duration-300 font-semibold cursor-pointer">
          Ver Detalhes
        </button>
      </div>
    </motion.div>
  );
}
