"use client";

import React from "react";
import { SocialRow } from "@/components/SocialRail";

const ContactMe = () => {
  return (
    <footer className="relative z-10 flex text-center flex-col mt-10 lg:mt-28 mb-8 max-w-7xl px-5 sm:px-6 lg:px-10 mx-auto items-center">
      <h3 className="text-2xl sm:text-3xl mb-6 lg:mb-10 font-semibold font-outfit text-gray-500">
        Get In Touch
      </h3>

      <div className="pb-28 lg:pb-12 max-w-2xl tracking-wide text-center">
        <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed mb-8">
          Have a product to ship — web, mobile, or both?{" "}
          <span className="underline decoration-black decoration-2">
            Let&apos;s talk
          </span>
          .
          <br className="hidden sm:block" /> I work across UI and API
          integration, and I reply quickly.
        </p>
        <a
          href="mailto:triumphanyanga@gmail.com?subject=Hey%20Triumph%2C%20I%20saw%20your%20portfolio!"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-slate-900 text-sm sm:text-base font-semibold border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a] hover:shadow-[2px_2px_0_0_#0f172a] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
        >
          Say Hello
        </a>
      </div>

      <SocialRow className="xl:hidden mb-8" />

      <p className="text-xs tracking-wide text-slate-500">
        Created by <span className="font-semibold text-slate-700">Unkn0wnT</span>{" "}
        @2026
      </p>
    </footer>
  );
};

export default ContactMe;
