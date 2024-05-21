"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid lg:grid-cols-3 grid-cols-2">
        <li>ReactJS</li>
        <li>NodeJs</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>GraphQL</li>
        <li>Jest</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
        <li>NextJs</li>
        <li>Tailwind</li>
        <li>CSS</li>
        <li>Git e GitHub</li>
        <li>Redux</li>
        <li>Python</li>
        <li>.Net</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bacharelado em Ciência da Computação</li>
        <p>Pelo Instituto Federal Goiano - Campus Morrinhos</p>
        <p>8.º Período concluído</p>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-2">
        <li>OneBitCode</li>
        <p>out de 2023</p>
        <li>Full Stack Club</li>
        <p>dez de 2023</p>
        <li>Hora de Codar</li>
        <p>ago de 2023</p>
        <li>Geek University</li>
        <p>jun de 2022</p>
        <li>C# Completo</li>
        <p>ago de 2023</p>
        <li>Formação Cientista de Dados</li>
        <p>set de 2021</p>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mim</h2>
          <p className="text-base lg:text-lg">
            Sou um desenvolvedor full stack apaixonado por criar aplicações web
            interativas e responsivas. Possuo experiência trabalhando com
            JavaScript, TypeScript, React, Redux, NextJs, Jest, Node.js,
            Express, PostgreSQL, MongoDB, HTML, CSS e Git. Eu aprendo rápido e
            estou sempre buscando expandir meu conhecimento e melhorar minhas
            habilidades. Gosto muito de em equipe e estou animado para trabalhar
            com outras pessoas para criar aplicações incríveis.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educação{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificados{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
