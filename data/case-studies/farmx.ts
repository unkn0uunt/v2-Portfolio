import { MobileCaseStudy, PRIVATE_CASE_STUDY_NOTICE } from "@/types/types";

export const farmxCaseStudy: MobileCaseStudy = {
  slug: "farmx",
  title: "FarmX",
  tagline:
    "Farm-to-door marketplace for African agriculture — verified producers, fresh produce, and location-based delivery.",
  role: "Mobile Engineer — UI & API Integration",
  overview: [
    "FarmX connects consumers to verified farms and fresh produce with location-based delivery. The mobile app covers discovery, catalogues, farm profiles, and cart flows.",
    "I built the consumer UI and integrated catalogue, farm, cart, and order APIs — from onboarding through checkout.",
  ],
  responsibilities: [
    "Implemented home, produce catalogue, farm profile, and product detail screens",
    "Integrated backend APIs for listings, cart state, and order-related flows",
    "Built quantity controls, seasonal badges, and delivery metadata into product UI",
    "Shipped responsive layouts and loading states for everyday grocery usage",
  ],
  features: [
    "Location-based farm discovery and verified producer profiles",
    "Multi-category explore hub (marketplace, farms, wholesale, pre-orders)",
    "Produce catalogue with ratings, discounts, and cart controls",
    "Farm profiles with stats, product lists, and follow actions",
    "Product detail with harvest data, delivery zones, and assurance copy",
  ],
  techStack: [
    "React Native",
    "Expo",
    "TypeScript",
    "TailwindCSS",
    "NestJS",
    "Postgres",
  ],
  visibility: "private",
  privateNotice: PRIVATE_CASE_STUDY_NOTICE,
  heroScreens: [
    {
      src: "https://res.cloudinary.com/dznd7vzlb/image/upload/v1785847452/farmx1_aopmwa.png",
      alt: "FarmX home screen",
      caption: "Home & discovery",
      variant: "device",
    },
    {
      src: "https://res.cloudinary.com/dznd7vzlb/image/upload/v1785847453/farmx4_nqqigc.png",
      alt: "FarmX welcome screen",
      caption: "Welcome",
      variant: "device",
    },
    {
      src: "https://res.cloudinary.com/dznd7vzlb/image/upload/v1786535100/produce_ewxmuh.png",
      alt: "FarmX produce catalog",
      caption: "Produce catalog",
      variant: "device",
    },
  ],
  screens: [
    {
      src: "https://res.cloudinary.com/dznd7vzlb/image/upload/v1785847453/farmx2_cnhu2q.png",
      alt: "FarmX onboarding",
      caption: "Onboarding",
      variant: "device",
    },
    {
      src: "https://res.cloudinary.com/dznd7vzlb/image/upload/v1786535099/farm2_flbo6m.png",
      alt: "FarmX farm profile",
      caption: "Farm profile",
      variant: "device",
    },
    {
      src: "https://res.cloudinary.com/dznd7vzlb/image/upload/v1786535099/farm1_oy8cxf.png",
      alt: "FarmX farm profile with cart",
      caption: "Farm profile — cart flow",
      variant: "device",
    },
    {
      src: "https://res.cloudinary.com/dznd7vzlb/image/upload/v1786535100/produce2_wgqgdw.png",
      alt: "FarmX product detail",
      caption: "Product detail",
      variant: "device",
    },
  ],
};
