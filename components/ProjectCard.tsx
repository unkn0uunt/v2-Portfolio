"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import ToolIcon from "./ToolIcon";
import { Project } from "@/types/types";
import DeviceMockup from "./case-studies/DeviceMockup";

const ProjectCard = ({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongDescription = project.projectDescription.length > 140;
  const isInternalLink = project.demoLink.startsWith("/");
  const isMobile = project.category === "mobile";

  if (isMobile) {
    return (
      <div className="flex flex-col h-full bg-neutral-950 rounded-2xl border border-neutral-800 overflow-hidden transition-all duration-300">
        <div className="relative w-full aspect-[4/5] flex items-center justify-center px-4 py-6 group">
          <DeviceMockup
            src={
              typeof project.projectImage === "string"
                ? project.projectImage
                : project.projectImage.src
            }
            alt={project.projectName}
            size="sm"
            variant={project.imageVariant ?? "device"}
            className="transition-all duration-300 group-hover:brightness-90"
          />

          <div className="absolute top-3 left-3 flex gap-2 z-10">
            <span className="px-2 py-0.5 bg-blue-500/90 text-white text-xs font-medium rounded-full">
              Mobile
            </span>
            {project.visibility === "private" && (
              <span className="px-2 py-0.5 bg-neutral-700 text-neutral-200 text-xs font-medium rounded-full">
                Private
              </span>
            )}
          </div>

          <div className="absolute inset-x-0 bottom-5 flex justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link
              href={project.demoLink}
              aria-label="View Case Study"
              className="border border-white/80 hover:bg-white text-white hover:text-neutral-900 px-3 py-1 rounded-lg text-sm font-semibold shadow-lg"
            >
              View Case Study
            </Link>
          </div>
        </div>

        <div className="px-4 pb-5 pt-1 flex flex-col flex-1 gap-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-bold text-neutral-100 leading-snug">
              {project.projectName}
            </h3>
            {project.year && (
              <span className="text-xs text-neutral-500 shrink-0 mt-1">
                {project.year}
              </span>
            )}
          </div>

          <p
            className={`text-neutral-400 text-sm leading-relaxed ${
              !isExpanded && isLongDescription ? "line-clamp-3" : ""
            }`}
          >
            {project.projectDescription}
          </p>
          {isLongDescription && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-neutral-500 hover:text-neutral-300 text-xs font-medium self-start"
            >
              {isExpanded ? "Show less" : "Show more"}
            </button>
          )}

          <div className="mt-auto pt-2">
            <h4 className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-2">
              Under the Hood
            </h4>
            <div className="flex flex-wrap items-center gap-2">
              {project.tools.map((tool) => (
                <ToolIcon key={tool} tool={tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white/70 rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300">
      <div className="relative w-full aspect-[16/9] group overflow-hidden bg-slate-200">
        <Image
          src={project.projectImage}
          alt={project.projectName}
          fill
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          sizes="(max-width: 768px) 100vw, 560px"
          className="object-cover object-center transition-all duration-300 group-hover:brightness-50"
        />
        <div className="absolute inset-x-0 bottom-8 flex justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            href={project.demoLink}
            {...(!isInternalLink && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
            aria-label="Live Demo"
            className="border-2 border-white hover:bg-white text-white hover:text-slate-800 px-3 py-1 rounded-xl text-sm font-semibold shadow-lg"
          >
            Live Demo
          </Link>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xl font-bold text-slate-800 leading-snug">
            {project.projectName}
          </h3>
          {project.year && (
            <span className="text-xs text-slate-400 shrink-0 mt-1">
              {project.year}
            </span>
          )}
        </div>

        <p
          className={`text-slate-600 text-sm leading-relaxed ${
            !isExpanded && isLongDescription ? "line-clamp-3" : ""
          }`}
        >
          {project.projectDescription}
        </p>
        {isLongDescription && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-slate-500 hover:text-slate-700 text-xs font-medium self-start"
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>
        )}

        <div className="mt-auto pt-2">
          <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
            Under the Hood
          </h4>
          <div className="flex flex-wrap items-center gap-2">
            {project.tools.map((tool) => (
              <ToolIcon key={tool} tool={tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
