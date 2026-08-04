import React, { useState } from "react";
import ToolIcon from "./ToolIcon";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/data";
import Link from "next/link";
import Image from "next/image";
const RecentProjects = () => {
  const latestProjects = projects.slice(0, 4);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <h3 className="text-3xl text-center lg:text-start font-outfit text-gray-500 font-semibold px-5 tracking-wider">
        Recent Projects
      </h3>

      <div className="space-y-4 px-5">
        {latestProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => toggleProject(project.id)}
          >
            <div
              className="flex items-center justify-between py-4 border-b border-gray-400 group-hover:border-gray-700 transition-colors duration-300"
              role="button"
              tabIndex={0}
              aria-expanded={expandedProject === project.id}
              aria-controls={`project-content-${project.id}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleProject(project.id);
                }
              }}
            >
              <div className="flex items-center gap-4">
                <span className="text-gray-400 font-mono text-sm">
                  0{index + 1}
                </span>
                <h4
                  className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors duration-300"
                  id={`project-title-${project.id}`}
                >
                  {project.projectName}
                </h4>
              </div>
              <div
                className={`text-gray-400 group-hover:text-gray-600 transition-all duration-300 ${
                  expandedProject === project.id ? "rotate-90" : ""
                }`}
                aria-hidden="true"
              >
                →
              </div>
            </div>

            <AnimatePresence>
              {expandedProject === project.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                  }}
                  className="overflow-hidden"
                  id={`project-content-${project.id}`}
                  role="region"
                  aria-labelledby={`project-title-${project.id}`}
                >
                  <div className="pt-6 pb-4 space-y-4">
                    {/* Project Image */}
                    <div className=" w-full h-48 rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        src={
                          typeof project.projectImage === "string"
                            ? project.projectImage
                            : project.projectImage.src
                        }
                        width={500}
                        height={300}
                        alt={project.projectName}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.projectDescription}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <ToolIcon key={tool} tool={tool} />
                      ))}
                    </div>

                    <div className="flex gap-4 pt-2">
                      {project.demoLink.startsWith("/") ? (
                        <Link
                          href={project.demoLink}
                          className="text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors duration-300 underline underline-offset-4"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Case Study
                        </Link>
                      ) : (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors duration-300 underline underline-offset-4"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Demo
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-300 underline underline-offset-4"
                          onClick={(e) => e.stopPropagation()}
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <button className="hover:bg-slate-800 hover:text-white transition-all duration-300 rounded-lg ml-2 px-2 py-1">
        <Link href="/projects">View All Projects</Link>
      </button>
    </motion.div>
  );
};

export default RecentProjects;
