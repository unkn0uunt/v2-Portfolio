"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import LogoMark from "@/components/LogoMark";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
];

const menuVariants = {
  closed: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.25, staggerChildren: 0.04, staggerDirection: -1 },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const itemVariants = {
  closed: { opacity: 0, x: -12 },
  open: { opacity: 1, x: 0 },
};

export default function NavBar() {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = useState(false);
  const scrolled = useScroll(12);
  const floating = scrolled && !open;

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1280 && open) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center transition-[padding] duration-500 ease-out",
        floating ? "px-3 pt-2 sm:px-4 sm:pt-3 md:pt-4" : "px-0 pt-0"
      )}
    >
      <header
        className={cn(
          "pointer-events-auto w-full border border-transparent font-outfit text-white transition-all duration-500 ease-out",
          open
            ? "max-w-none rounded-b-2xl border-transparent bg-slate-900 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.45)]"
            : floating
              ? "max-w-[min(100%,80rem)] rounded-2xl border-white/12 bg-slate-900 shadow-[0_20px_50px_-18px_rgba(0,0,0,0.55)] backdrop-blur-xl"
              : "max-w-none rounded-none border-transparent bg-slate-900"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className={cn(
              "shrink-0 transition-transform duration-500 ease-out",
              floating ? "scale-95" : "scale-100"
            )}
            aria-label="UNKNW0WNT home"
          >
            <LogoMark
              inverted
              className={cn(
                "transition-[height] duration-500 ease-out",
                floating ? "h-9" : "h-10"
              )}
            />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-white transition-colors hover:bg-white/10 xl:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="relative block h-5 w-6">
              <span
                className={cn(
                  "absolute left-0 top-0.5 h-0.5 w-6 bg-current transition-all duration-300 ease-out",
                  open && "top-2.5 rotate-45"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-2.5 h-0.5 w-6 bg-current transition-opacity duration-200",
                  open && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[1.125rem] h-0.5 w-6 bg-current transition-all duration-300 ease-out",
                  open && "top-2.5 -rotate-45"
                )}
              />
            </span>
          </button>

          <nav className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium text-white/85 transition-colors duration-200 hover:text-white",
                    active && "text-white underline underline-offset-4"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-3 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
            >
              Get In Touch
            </Link>
          </nav>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="border-t border-white/10 xl:hidden"
            >
              <div className="space-y-1 px-4 pb-6 pt-3">
                {navItems.map((item) => (
                  <motion.div key={item.href} variants={itemVariants}>
                    <Link
                      href={item.href}
                      className="block rounded-md px-3 py-2.5 text-base font-medium text-white hover:bg-white/10"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants}>
                  <Link
                    href="/contact"
                    className="mt-2 inline-flex rounded-full bg-white px-4 py-2.5 text-base font-semibold text-slate-900"
                    onClick={() => setOpen(false)}
                  >
                    Get In Touch
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
