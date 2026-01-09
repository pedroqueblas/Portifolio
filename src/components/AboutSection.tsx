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
    <section id="about" className="py-20 px-6 bg-bg-card/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-krona">
            Sobre <span className="text-sky-blue">mim</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-12 font-montserrat">
            Olá! Sou Pedro Queblas, um jovem estudante apaixonado por tecnologia,
            jogos e animes. Encontrei meu caminho no desenvolvimento de software,
            especialmente na área de Front-End. Desde que criei meu primeiro site
            de forma independente, percebi o quanto essa área me encanta.
            Atualmente, estou em formação e sempre buscando expandir meus
            conhecimentos, com o objetivo de me aprofundar cada vez mais no
            desenvolvimento web.
          </p>

          <h3 className="text-2xl font-bold mb-8 font-krona">Techs</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-bg-card p-4 rounded-xl border border-gray-800 hover:border-sky-blue transition-colors shadow-lg flex flex-col items-center"
              >
                <Image
                  src={skill.url}
                  alt={skill.name}
                  width={80}
                  height={80}
                  className="w-16 h-16 md:w-20 md:h-20"
                />
                <p className="mt-2 text-gray-400 font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
