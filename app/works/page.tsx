"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/data";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types/types";

type Filter = "all" | "web" | "mobile";

type PairRow = {
  mobile: Project;
  webs: Project[];
};

/** One mobile + up to two web cards per row */
function buildMobileWebPairs(items: Project[]): {
  pairs: PairRow[];
  leftoverWebs: Project[];
  leftoverMobiles: Project[];
} {
  const mobiles = items.filter((p) => p.category === "mobile");
  const webs = items.filter((p) => p.category !== "mobile");
  const pairs: PairRow[] = [];
  let wi = 0;

  for (const mobile of mobiles) {
    if (wi >= webs.length) break;
    const chunk = webs.slice(wi, wi + 2);
    wi += chunk.length;
    pairs.push({ mobile, webs: chunk });
  }

  return {
    pairs,
    leftoverWebs: webs.slice(wi),
    leftoverMobiles: mobiles.slice(pairs.length),
  };
}

const WorksPage = () => {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(
    () =>
      projects.filter((p) =>
        filter === "all" ? true : p.category === filter
      ),
    [filter]
  );

  const allLayout = useMemo(
    () => (filter === "all" ? buildMobileWebPairs(filtered) : null),
    [filter, filtered]
  );

  const fade = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: "All" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
  ];

  return (
    <motion.main
      className="py-24 px-4 sm:px-6 lg:px-8 min-h-screen max-w-[1200px] mx-auto"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.06, delayChildren: 0.1 },
        },
      }}
    >
      <motion.header className="text-center mb-12 mt-5" variants={fade}>
        <p className="text-sm uppercase tracking-widest text-slate-500 mb-4">
          Selected Work
        </p>
        <h1 className="text-slate-800 text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Works
        </h1>
        <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed mb-8">
          Web builds and mobile apps — from client platforms to event and
          agriculture products.
        </p>

        <div className="flex justify-center gap-2">
          {filters.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filter === id
                  ? "bg-slate-800 text-white"
                  : "bg-slate-200 text-slate-600 hover:bg-slate-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </motion.header>

      {/* ALL — 1 mobile | 2 stacked webs via CSS grid row-span */}
      {filter === "all" && allLayout && (
        <div className="space-y-10">
          {allLayout.pairs.map(({ mobile, webs }) => (
            <motion.div
              key={mobile.id}
              variants={fade}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 lg:items-start"
            >
              {/* Mobile spans both web rows on large screens */}
              <div className="lg:row-span-2">
                <ProjectCard project={mobile} />
              </div>
              {webs.map((web) => (
                <div key={web.id}>
                  <ProjectCard project={web} />
                </div>
              ))}
            </motion.div>
          ))}

          {allLayout.leftoverMobiles.length > 0 && (
            <motion.div
              variants={fade}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {allLayout.leftoverMobiles.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </motion.div>
          )}

          {allLayout.leftoverWebs.length > 0 && (
            <motion.div
              variants={fade}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {allLayout.leftoverWebs.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </motion.div>
          )}
        </div>
      )}

      {/* WEB only — clean 2-col */}
      {filter === "web" && (
        <motion.div
          variants={fade}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </motion.div>
      )}

      {/* MOBILE only — tighter 3-col */}
      {filter === "mobile" && (
        <motion.div
          variants={fade}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </motion.div>
      )}
    </motion.main>
  );
};

export default WorksPage;
