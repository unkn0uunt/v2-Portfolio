"use client";

import { createElement } from "react";
import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

type Social = {
  label: string;
  href: string;
  Icon: IconType;
};

const socials: Social[] = [
  {
    label: "Email",
    href: "mailto:triumphanyanga@gmail.com?subject=Hey%20Triumph%2C%20I%20saw%20your%20portfolio!",
    Icon: MdEmail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/unkn0wnt",
    Icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/Official-BigT/",
    Icon: FaGithub,
  },
  {
    label: "X",
    href: "https://x.com/un_kn0wnt",
    Icon: FaXTwitter,
  },
];

function SocialLink({ label, href, Icon }: Social) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full text-slate-700 transition-all duration-200 hover:bg-slate-900 hover:text-white hover:scale-105"
    >
      {createElement(Icon as React.FC<{ size?: number }>, { size: 22 })}
    </a>
  );
}

export default function SocialRail() {
  return (
    <aside
      className="pointer-events-none fixed left-5 top-[18vh] z-30 hidden xl:flex flex-col items-center gap-4"
      aria-label="Social links"
    >
      <div className="pointer-events-auto flex flex-col items-center gap-3.5">
        {socials.map((social) => (
          <SocialLink key={social.label} {...social} />
        ))}
      </div>
      <span className="mt-2 h-16 w-px bg-slate-400/60" aria-hidden />
    </aside>
  );
}

export function SocialRow({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-2 ${className}`}
      aria-label="Social links"
    >
      {socials.map((social) => (
        <SocialLink key={social.label} {...social} />
      ))}
    </div>
  );
}
