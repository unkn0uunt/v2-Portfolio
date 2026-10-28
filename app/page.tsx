import dynamic from "next/dynamic";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Dynamic imports for better code splitting
const Hero = dynamic(() => import("@/components/Hero"));
const About = dynamic(() => import("@/components/About"));
const WorkSection = dynamic(() => import("@/components/WorkSection"));
const ContactMe = dynamic(() => import("@/components/ContactMe"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-8 h-8 border-4 border-slate-900/20 border-t-slate-900 rounded-full animate-spin" />
  </div>
);

export default function Home() {
  return (
    <div
      className="font-outfit text-slate-900 snap-mandatory snap-y z-0
    overflow-x-hidden  scroll-smooth max-w-[1300px] mx-auto"
    >
      {[
        { id: "hero", Component: Hero, snap: "start" },
        { id: "about", Component: About, snap: "start" },
        { id: "works-section", Component: WorkSection, snap: "start" },
        { id: "contact", Component: ContactMe, snap: "start" },
      ].map(({ id, Component, snap }) => (
        <Suspense key={id} fallback={<LoadingFallback />}>
          <section id={id} className={`snap-${snap}  relative`}>
            <Component />
          </section>
        </Suspense>
      ))}
    </div>
  );
}
