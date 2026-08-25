"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { experiences } from "@/data/data";
const WorkExperience = () => {
  const [expandedExperience, setExpandedExperience] = useState<string | null>(
    null
  );
  const toggleCompany = (companyName: string) => {
    setExpandedExperience(
      expandedExperience === companyName ? null : companyName
    );
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h3
        className="text-3xl font-outfit text-gray-500 font-semibold 
         tracking-wider px-5  text-center lg:text-start w-full"
      >
        Working Experience
      </h3>

      {/* Experience details */}
      <div className=" space-y-4 px-5">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.companyName}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => toggleCompany(experience.companyName)}
            className="group cursor-pointer"
          >
            <div
              className="flex items-start justify-between pt-4 pb-3 border-b border-gray-400 group-hover:border-gray-700 transition-colors duration-300"
              role="button"
              tabIndex={0}
              aria-expanded={expandedExperience === experience.companyName}
              aria-controls={`exp-content-${experience.companyName}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleCompany(experience.companyName);
                }
              }}
            >
              <div>
                <h3
                  className="text-lg  text-gray-900 group-hover:text-gray-600 transition-colors duration-300"
                  id={`exp-title-${experience.companyName}`}
                >
                  {experience.occupation} at{" "}
                  <span className="text-slate-900 font-medium">
                    {experience.companyName}
                  </span>
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {experience.dateStart} - {experience.dateEnd}
                </p>
              </div>
              <svg
                className={`h-4 w-4 shrink-0 text-gray-400 group-hover:text-gray-600 transition-all duration-300 ${
                  expandedExperience === experience.companyName
                    ? "rotate-90"
                    : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </div>
            <AnimatePresence>
              {expandedExperience === experience.companyName && (
                <ul
                  className="space-y-4 text-sm mt-2 md:text-base text-gray-600"
                  id={`exp-content-${experience.companyName}`}
                  role="region"
                  aria-labelledby={`exp-title-${experience.companyName}`}
                >
                  {experience.responsibilities.map((responsibility, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                      className="flex items-start space-x-2"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 flex-shrink-0 
                      rounded-full bg-slate-500"
                      />
                      <span>{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

WorkExperience.displayName = "WorkExperience";

export default WorkExperience;
