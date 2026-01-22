"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "Dashboard Financeiro",
    description:
      "Aplicação web desenvolvida com Next.js focada na visualização e organização de finanças pessoais. Permite o acompanhamento de receitas e despesas através de gráficos interativos, filtragem por período e categorização, oferecendo uma experiência clara, responsiva e acessível.",
    image: "/assets/projeto1.png", 
    repoUrl: "https://github.com/pedroqueblas/dashboard-financeiro",
    liveUrl: "https://dashboard-financeiro-silk.vercel.app/login",
  },
  {
    title: "Agendamento - Hemope",
    description:
      "Aplicação web desenvolvida com Django para agendamento de doações de sangue no HEMOPE. O sistema permite o cadastro de doadores, escolha de datas e horários disponíveis e acompanhamento do histórico de doações.",
    image: "/assets/agendamento.png", 
    repoUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Henrique Cavalcanti - OFC",
    description: "Em construção.",
    image: "/assets/henriqueofc.png", 
    repoUrl: "https://github.com/pedroqueblas/henriquedublador.git",
    liveUrl: "https://henriquedublador.vercel.app/",
  },
  {
    title: "Sheep - Company",
    description: "Em construção.",
    image: "/assets/avatar3.jpg", 
    repoUrl: "#",
    liveUrl: "#",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section id="projects" className="py-20 px-6 relative bg-cyber-gray/20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16"
        >
          <div className="flex items-center gap-4 mb-2">
            <span className="text-neon-cyan font-mono text-sm tracking-[0.5em] uppercase">PORTFÓLIO</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center font-krona tracking-wider">
            MEUS <span className="text-neon-pink glitch-text" data-text="PROJETOS">PROJETOS</span>
          </h2>
          <div className="w-24 h-1 bg-neon-cyan mt-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-white animate-scanline"></div>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
              onOpenModal={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
