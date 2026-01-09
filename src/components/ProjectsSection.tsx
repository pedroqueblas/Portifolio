"use client";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Projeto Exemplo 1",
    description: "Uma breve descrição do projeto desenvolvido utilizando tecnologias modernas de front-end. Este projeto demonstra habilidades em desenvolvimento web.",
    image: "/assets/avatar3.jpg", // Placeholder
    repoUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Projeto Exemplo 2",
    description: "Uma breve descrição do projeto desenvolvido utilizando tecnologias modernas de front-end. Este projeto demonstra habilidades em desenvolvimento web.",
    image: "/assets/avatar3.jpg", // Placeholder
    repoUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Projeto Exemplo 3",
    description: "Uma breve descrição do projeto desenvolvido utilizando tecnologias modernas de front-end. Este projeto demonstra habilidades em desenvolvimento web.",
    image: "/assets/avatar3.jpg", // Placeholder
    repoUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Projeto Exemplo 4",
    description: "Uma breve descrição do projeto desenvolvido utilizando tecnologias modernas de front-end. Este projeto demonstra habilidades em desenvolvimento web.",
    image: "/assets/avatar3.jpg", // Placeholder
    repoUrl: "#",
    liveUrl: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-krona">
          Meus <span className="text-sky-blue">Projetos</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
