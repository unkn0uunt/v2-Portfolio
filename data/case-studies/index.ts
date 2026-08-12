import { MobileCaseStudy } from "@/types/types";
import { ateCaseStudy } from "./ate";
import { asfCaseStudy } from "./asf";
import { farmxCaseStudy } from "./farmx";

export const caseStudies: Record<string, MobileCaseStudy> = {
  ate: ateCaseStudy,
  asf: asfCaseStudy,
  farmx: farmxCaseStudy,
};

export const caseStudySlugs = Object.keys(caseStudies);

export function getCaseStudy(slug: string): MobileCaseStudy | undefined {
  return caseStudies[slug];
}
