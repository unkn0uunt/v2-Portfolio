"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ToolIcon from "./ToolIcon";
import { Project } from "@/types/types";

const ProjectCard = ({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongDescription = project.projectDescription.length > 150;
  
  // Check if the demo link is internal (starts with /)
  const isInternalLink = project.demoLink.startsWith('/');

  return (
    <div
      key={project.projectName}
      className="flex flex-col bg-slate-100 rounded-2xl border overflow-hidden transition-all duration-300"
    >
      <div className="relative w-full aspect-[16/9] group overflow-hidden">
        <Image
          src={project.projectImage}
          alt={project.projectName}
          fill
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover object-center rounded-t-2xl border-b transition-all duration-300 group-hover:brightness-50"
        />
        <div className="absolute inset-x-0  bottom-10 flex items-center text-sm justify-center gap-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          <Link
            href={project.demoLink}
            {...(!isInternalLink && {
              target: "_blank",
              rel: "noopener noreferrer"
            })}
            aria-label={isInternalLink ? "View Case Study" : "Live Demo"}
            className="border-white border-[2px] hover:bg-white text-white hover:text-slate-800 px-3 py-1 rounded-xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out shadow-lg"
          >
            {isInternalLink ? "View Case Study" : "Live Demo"}
          </Link>
          {project.githubLink && (
            <Link
              href={project.githubLink}
              target="_blank"
              aria-label="GitHub Repository"
              rel="noopener noreferrer"
              className="border-white border-2 hover:bg-white text-white hover:text-slate-800 px-3 py-1 rounded-xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out shadow-lg"
            >
              GitHub Repo
            </Link>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-slate-800 mb-2">
          {project.projectName}
        </h3>

        <div className="mb-4">
          <motion.p
            id={`project-desc-${project.projectName}`}
            className={`text-slate-600 text-sm ${
              !isExpanded && isLongDescription ? "line-clamp-3" : ""
            }`}
            animate={{ height: "auto" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {project.projectDescription}
          </motion.p>

          {isLongDescription && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-slate-500 hover:text-slate-700 text-xs mt-2 font-medium transition-colors duration-200"
              aria-expanded={isExpanded}
              aria-controls={`project-desc-${project.projectName}`}
            >
              {isExpanded ? "Show less" : "Show more"}
            </button>
          )}
        </div>

        {/* Tools Stack */}
        <div className="mt-4">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            Under the Hood
          </h4>
          <div className="flex flex-wrap items-center gap-3">
            {project.tools.map((tool: string, i: number) => (
              <div key={i} title={tool} className="flex items-center">
                <ToolIcon tool={tool} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
