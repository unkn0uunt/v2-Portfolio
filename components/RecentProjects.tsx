"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  featuredMobileProjects,
  featuredWebProjects,
} from "@/data/data";
import Link from "next/link";
import { Project } from "@/types/types";

function WorkIndexList({
  projects,
  title,
}: {
  projects: Project[];
  title: string;
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl text-center lg:text-start font-outfit text-gray-500 font-semibold tracking-wider">
        {title}
      </h3>

      <ul className="divide-y divide-gray-300">
        {projects.map((project, index) => {
          const isInternal = project.demoLink.startsWith("/");
          const stack = project.tools.slice(0, 3).join(" · ");

          return (
            <li key={project.id}>
              <Link
                href={project.demoLink}
                {...(!isInternal && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="group flex items-baseline justify-between gap-4 py-4 hover:bg-black/[0.02] transition-colors px-1 -mx-1 rounded"
              >
                <div className="flex items-baseline gap-3 min-w-0">
                  <span className="text-gray-400 font-mono text-sm shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors truncate">
                      {project.projectName}
                      {project.visibility === "private" && (
                        <span className="ml-2 text-[10px] uppercase tracking-wider text-gray-400 font-normal">
                          Private
                        </span>
                      )}
                    </p>
                    <p className="text-sm text-gray-500 truncate mt-0.5">
                      {project.year ? `${project.year} — ` : ""}
                      {stack}
                    </p>
                  </div>
                </div>
                <span
                  className="text-gray-400 group-hover:text-gray-700 group-hover:translate-x-0.5 transition-all shrink-0"
                  aria-hidden
                >
                  ↗
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const RecentProjects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-10"
    >
      <WorkIndexList projects={featuredWebProjects} title="Recent Web" />
      <WorkIndexList projects={featuredMobileProjects} title="Recent Mobile" />

      <Link
        href="/works"
        className="inline-block hover:bg-slate-800 hover:text-white transition-all duration-300 rounded-lg px-3 py-1.5 text-sm font-medium border border-slate-300"
      >
        View all works
      </Link>
    </motion.div>
  );
};

export default RecentProjects;
