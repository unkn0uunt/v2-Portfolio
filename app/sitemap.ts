import type { MetadataRoute } from "next";
import { caseStudySlugs } from "@/data/case-studies";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/works",
    "/contact",
    ...caseStudySlugs.map((slug) => `/works/${slug}`),
  ];

  return paths.map((path) => ({
    url: new URL(path, siteUrl).toString(),
  }));
}
