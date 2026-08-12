import { notFound } from "next/navigation";
import type { Metadata } from "next";
import MobileCaseStudyLayout from "@/components/case-studies/MobileCaseStudyLayout";
import { caseStudies, caseStudySlugs, getCaseStudy } from "@/data/case-studies";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case Study Not Found" };

  const heroImage = study.heroScreens[0]?.src;

  return {
    title: `${study.title} — Case Study | BigT Portfolio`,
    description: study.tagline,
    openGraph: {
      title: `${study.title} — Case Study`,
      description: study.tagline,
      ...(heroImage && {
        images: [{ url: heroImage, alt: study.title }],
      }),
    },
  };
}

export default async function MobileCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) notFound();

  return <MobileCaseStudyLayout study={study} />;
}
