import Link from "next/link";
import { MobileCaseStudy } from "@/types/types";
import DeviceMockup from "./DeviceMockup";
import ScreenGallery from "./ScreenGallery";

type MobileCaseStudyLayoutProps = {
  study: MobileCaseStudy;
};

function VisibilityBadge({
  visibility,
}: {
  visibility: MobileCaseStudy["visibility"];
}) {
  if (visibility === "public") return null;

  const label = visibility === "nda" ? "NDA" : "Private";
  const styles =
    visibility === "nda"
      ? "bg-amber-500/10 text-amber-400"
      : "bg-neutral-700/50 text-neutral-300";

  return (
    <span className={`px-3 py-1 text-sm font-medium rounded-full ${styles}`}>
      {label}
    </span>
  );
}

export default function MobileCaseStudyLayout({
  study,
}: MobileCaseStudyLayoutProps) {
  const isStoreOnly = study.mode === "store-only";
  const hasStoreLinks = study.storeLinks?.ios || study.storeLinks?.android;

  return (
    <div className="min-h-screen bg-neutral-950">
      <div className="border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-100 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Works
          </Link>
        </div>
      </div>

      <div className="border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-wrap items-start gap-3 mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-100 font-display">
              {study.title}
            </h1>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full">
              Mobile App
            </span>
            <VisibilityBadge visibility={study.visibility} />
          </div>

          <p className="text-xl text-neutral-400 max-w-3xl mb-4">
            {study.tagline}
          </p>

          {study.parentCompany && (
            <p className="text-sm text-neutral-500 mb-6">{study.parentCompany}</p>
          )}

          {study.privateNotice && study.visibility !== "public" && (
            <p className="text-sm text-neutral-400 border border-neutral-800 rounded-lg px-4 py-3 mb-8 max-w-3xl">
              {study.privateNotice}
            </p>
          )}

          {(study.storeLinks?.ios || study.storeLinks?.android) && (
            <div className="flex flex-wrap gap-3 mb-8">
              {study.storeLinks?.ios && (
                <a
                  href={study.storeLinks.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 hover:bg-white text-neutral-900 rounded-lg transition-colors font-medium"
                >
                  App Store
                </a>
              )}
              {study.storeLinks?.android && (
                <a
                  href={study.storeLinks.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-100 rounded-lg transition-colors"
                >
                  Google Play
                </a>
              )}
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {study.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-neutral-800 text-neutral-300 text-sm rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {study.heroScreens.length > 0 && (
        <div className="border-b border-neutral-800 bg-neutral-900/30">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
              {study.heroScreens.map((screen) => (
                <DeviceMockup
                  key={screen.src}
                  src={screen.src}
                  alt={screen.alt}
                  variant={screen.variant ?? "device"}
                  size="lg"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 py-16">
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-100 mb-4">Overview</h2>
          <div className="space-y-4">
            {study.overview.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-neutral-300 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-100 mb-2">My Role</h2>
          <p className="text-neutral-100 font-semibold mb-4">{study.role}</p>
          <ul className="space-y-2">
            {study.responsibilities.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-neutral-300"
              >
                <span className="text-blue-400 mt-1" aria-hidden>
                  ▹
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-100 mb-4">
            Product Features
          </h2>
          <ul className="space-y-2">
            {study.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-neutral-300"
              >
                <span className="text-neutral-500 mt-1" aria-hidden>
                  —
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {!isStoreOnly && study.screens.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-neutral-100 mb-6">Screens</h2>
            <ScreenGallery screens={study.screens} columns={2} />
          </section>
        )}

        {isStoreOnly && !hasStoreLinks && study.heroScreens.length === 0 && (
          <section className="mb-16 border border-neutral-800 rounded-lg p-8 text-center">
            <p className="text-neutral-400">
              App store links and screenshots coming soon.
            </p>
          </section>
        )}
      </div>
    </div>
  );
}
