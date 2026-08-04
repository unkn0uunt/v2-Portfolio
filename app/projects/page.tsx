"use client";
import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/data";
import ProjectCard from "@/components/ProjectCard";

const ProjectsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const headerItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.main
      className="py-24 px-4 md:px-16 lg:px-8 min-h-screen max-w-[1200px] mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.header className="text-center mb-16 mt-5" variants={headerVariants}>
        <motion.p
          className="text-sm uppercase tracking-widest text-slate-500 mb-4"
          variants={headerItemVariants}
        >
          My Work
        </motion.p>
        <motion.h1
          className="text-slate-800  md:text-4xl font-bold tracking-tight mb-6"
          variants={headerItemVariants}
        >
          Projects
        </motion.h1>
        <motion.p
          className="text-sm  text-slate-600 max-w-xl italic mx-auto leading-relaxed"
          variants={headerItemVariants}
        >
          A collection of projects that kept me up at night (in a good way),
          from web apps to creative experiments. Each one taught me something
          new.
        </motion.p>
      </motion.header>

      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
      
            className="transform-gpu"
          >
            <ProjectCard project={project} priority={index < 2} />
          </motion.div>
        ))}
      </motion.section>
    </motion.main>
  );
};

export default ProjectsPage;
