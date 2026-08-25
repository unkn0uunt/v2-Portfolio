"use client";

import Link from "next/link";
import { SocialRow } from "@/components/SocialRail";

export default function ContactPage() {
  return (
    <main className="relative z-10 min-h-screen max-w-3xl mx-auto px-5 sm:px-6 pt-28 pb-20">
      <p className="text-sm uppercase tracking-widest text-slate-500 mb-4">
        Contact — usually replies within a day
      </p>
      <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
        Let&apos;s build.
      </h1>

      <a
        href="mailto:triumphanyanga@gmail.com"
        className="inline-flex items-center gap-2 text-lg sm:text-xl md:text-2xl text-slate-800 hover:text-slate-600 underline underline-offset-4 break-all mb-10"
      >
        triumphanyanga@gmail.com
        <svg
          className="h-4 w-4 sm:h-5 sm:w-5 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </a>

      <a
        href="mailto:triumphanyanga@gmail.com?subject=Hey%20Triumph%2C%20I%20saw%20your%20portfolio!"
        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-slate-900 text-sm sm:text-base font-semibold border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a] hover:shadow-[2px_2px_0_0_#0f172a] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all mb-14"
      >
        Say Hello
      </a>

      <SocialRow className="justify-start mb-16" />

      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 underline underline-offset-4"
      >
        <svg
          className="h-3.5 w-3.5 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back home
      </Link>
    </main>
  );
}
