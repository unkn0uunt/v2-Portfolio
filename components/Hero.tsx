"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { memo } from "react";
import AnimatedHeroName from "./ui/animated-hero-name";
import Link from "next/link";

const Hero = memo(() => {
  const [text] = useTypewriter({
    words: [
      "Frontend Engineer.",
      "Backend Developer.",
      "Full-stack Developer.",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col min-h-[calc(100vh-5rem)] justify-center max-w-7xl mx-auto pt-24 md:pt-28 lg:pt-32 pb-12"
    >
      <div className="space-y-5 md:space-y-6 px-5 sm:px-6 md:px-16 lg:px-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-300 bg-white/60 text-xs sm:text-sm font-medium text-slate-600 tracking-wide">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Open to work · Lagos, NG
        </div>

        <h4 className="text-sm sm:text-base md:text-lg font-medium text-gray-600">
          Hi,
        </h4>

        <h1 className="font-display font-bold text-[2.35rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight flex flex-wrap items-end gap-2 sm:gap-3">
          <AnimatedHeroName firstName="Triumph" lastName="Anya-Nga" />
          <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-600 font-outfit pb-1">
            here.
          </span>
        </h1>

        <div className="font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-500 min-h-[2.5rem] sm:min-h-[3.5rem] md:min-h-[4.5rem]">
          <h2 className="inline-flex items-center flex-wrap">
            {text}
            <Cursor cursorColor="#0F172A" />
          </h2>
        </div>

        <p className="text-base sm:text-lg md:text-xl max-w-2xl text-gray-600 leading-relaxed">
          I build interfaces with intent — clean web and mobile products,
          solid API integration, and work that ships.
        </p>

        <div className="pt-2 sm:pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-slate-900 text-sm sm:text-base font-semibold border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a] hover:shadow-[2px_2px_0_0_#0f172a] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </motion.div>
  );
});

Hero.displayName = "Hero";

export default Hero;
