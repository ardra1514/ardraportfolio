import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";

import serenoph from "../assets/serenoph.png";
import sereno1 from "../assets/sereno1.png";
import livechatph from "../assets/livechatph.png";
import livechat from "../assets/livechat.png";
import learnly from "../assets/learnly.png"

const Projects = () => {
  const projects = [
    {
      title: "Live Chat",
      description:
        "A real-time chat application with a clean interface and seamless messaging experience.",
      link: "https://chat-applications-front.onrender.com",
      image: livechat,
      mobileImage: livechatph,
      number: "01",
      technologies: ["React.js", "Node.js", "Socket.io", "MongoDB"],
    },

    {
      title: "Sereno Care",
      description:
        "A doctor appointment platform that connects patients and doctors with an easy-to-use booking experience.",
      link: "https://serenocare-front-end.onrender.com",
      image: sereno1,
      mobileImage: serenoph,
      number: "02",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    },

    {
      title: "AI Learning Platform",
      description:
        "An AI-powered learning platform with PDF-based learning, AI topic explanations, Q&A, quiz generation, flashcards, study notes, and SEO optimization for improved discoverability.",
      link: "https://learnly-ai-six.vercel.app/",
      image: learnly,
      mobileImage: livechatph,
      number: "03",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Gemini API",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#0b0b0b] px-5 py-24 text-white sm:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-white/40">
            Selected Projects
          </p>

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              My Work<span className="text-white/30">.</span>
            </h2>

            <p className="max-w-md text-sm leading-6 text-white/50 sm:text-right">
              A collection of projects I've built while exploring modern web
              technologies and creating real-world applications.
            </p>
          </div>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} project`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              className="group block cursor-pointer"
            >
              {/* Image Card */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-black/40">

                {/* Project Number */}
                <div className="absolute left-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-sm font-medium backdrop-blur-md">
                  {project.number}
                </div>

                {/* Arrow */}
                <div className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                  <FiArrowUpRight size={20} />
                </div>

                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <picture>
                    <source
                      media="(max-width: 639px)"
                      srcSet={project.mobileImage}
                    />

                    <img
                      src={project.image}
                      alt={`${project.title} project`}
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </picture>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                  {/* View Project */}
                  <div className="absolute bottom-5 left-5 right-5 flex translate-y-3 items-center justify-between opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-sm font-medium">
                      View Live Project
                    </span>

                    <FiExternalLink size={18} />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="mt-5 px-1">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-white/80 sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-white/50">
                      {project.description}
                    </p>
                  </div>

                  <FiArrowUpRight
                    size={24}
                    className="mt-1 shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  />
                </div>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/50 transition-all duration-300 group-hover:border-white/20 group-hover:text-white/70"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;