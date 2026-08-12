"use client";
import RecentProjects from "./RecentProjects";
import WorkExperience from "./WorkExperience";

const WorkSection = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-20 mt-20 sm:mt-28 lg:mt-36 max-w-7xl mx-auto px-5 sm:px-6 md:px-16 lg:px-20 py-10 sm:py-16">
      <div className="flex-1 min-w-0">
        <WorkExperience />
      </div>
      <div className="flex-1 min-w-0">
        <RecentProjects />
      </div>
    </div>
  );
};

export default WorkSection;
