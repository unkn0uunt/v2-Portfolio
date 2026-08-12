import { StaticImageData } from "next/image";

export interface SpotifyData {
  is_playing: boolean;
  item: {
    name: string;
    album: {
      name: string;
      artists: Array<{ name: string }>;
      images: [{ url: string }];
    };
    external_urls: {
      spotify: string;
    };
  };
  currently_playing_type: string;
}
export interface LogoData {
  alt: string;
  src: string | StaticImageData;
}

export type JobExperience = {
  occupation: string;
  companyName: string;
  dateStart: string;
  dateEnd: string;
  responsibilities: string[];
};

export type ProjectCategory = "web" | "mobile";
export type ProjectVisibility = "public" | "private" | "nda";
export type CaseStudyMode = "full" | "store-only";
export type ScreenVariant = "device" | "marketing";

export type Project = {
  id: string;
  projectName: string;
  projectImage: string | StaticImageData;
  projectDescription: string;
  demoLink: string;
  githubLink?: string;
  tools: string[];
  category?: ProjectCategory;
  featured?: boolean;
  visibility?: ProjectVisibility;
  year?: string;
  /** "marketing" = full portrait promo shot (skip phone bezel). "device" = raw app screenshot. */
  imageVariant?: ScreenVariant;
};

export type CaseStudyScreen = {
  src: string;
  alt: string;
  caption?: string;
  variant?: ScreenVariant;
};

export type StoreLinks = {
  ios?: string;
  android?: string;
};

export type MobileCaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  overview: string[];
  /** What you personally owned / shipped */
  responsibilities: string[];
  /** Product capabilities (separate from your role) */
  features: string[];
  techStack: string[];
  heroScreens: CaseStudyScreen[];
  screens: CaseStudyScreen[];
  visibility: ProjectVisibility;
  mode?: CaseStudyMode;
  githubLink?: string;
  storeLinks?: StoreLinks;
  privateNotice?: string;
  parentCompany?: string;
};

export const PRIVATE_CASE_STUDY_NOTICE =
  "Private client build. Selected screens shown with permission — source and live access are not public.";
