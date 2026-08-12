import { MobileCaseStudy, PRIVATE_CASE_STUDY_NOTICE } from "@/types/types";

export const asfCaseStudy: MobileCaseStudy = {
  slug: "asf",
  title: "Africa Startup Festival",
  tagline:
    "Connect with founders, investors, and operators — discover startups, book meetings, and build your festival agenda.",
  role: "Mobile Engineer — UI & API Integration",
  parentCompany: "Built under Spark Africa LLC",
  overview: [
    "ASF is the official companion for Africa Startup Festival. Founders, investors, and operators use it to discover startups, book meetings, and build a personal agenda on site.",
    "I shipped the mobile UI and wired attendee matching, meeting booking, schedule sync, and exhibitor discovery to backend services on the Spark event stack.",
  ],
  responsibilities: [
    "Implemented onboarding, schedule, networking, and exhibitor screens in React Native",
    "Integrated APIs for attendee search, meeting booking, and session sync",
    "Built checklist and QR flows used during live festival attendance",
    "Worked with backend and design to stabilize production event traffic",
  ],
  features: [
    "Checklist onboarding for connect, meetings, and schedule tasks",
    "Personal schedule with session details and add-to-agenda",
    "Attendee networking with search and 20-minute meeting requests",
    "Exhibitor and startup directory with profile detail",
    "QR scan and digital ticketing for floor access",
  ],
  techStack: [
    "React Native",
    "Expo",
    "TypeScript",
    "TailwindCSS",
    "FastAPI",
    "Postgres",
  ],
  visibility: "private",
  privateNotice: PRIVATE_CASE_STUDY_NOTICE,
  heroScreens: [
    {
      src: "https://res.cloudinary.com/dznd7vzlb/image/upload/v1785846655/1242_2688_t1mqlp.png",
      alt: "ASF home — discover startups",
      caption: "Discover ASF 2026",
      variant: "marketing",
    },
    {
      src: "https://res.cloudinary.com/dznd7vzlb/image/upload/v1785846653/1242_2688-1_aio3ow.png",
      alt: "ASF event checklist",
      caption: "Event checklist",
      variant: "marketing",
    },
    {
      src: "https://res.cloudinary.com/dznd7vzlb/image/upload/v1785846652/1242_2688-3_ijhqkd.png",
      alt: "ASF schedule",
      caption: "Schedule",
      variant: "marketing",
    },
  ],
  screens: [
    {
      src: "https://res.cloudinary.com/dznd7vzlb/image/upload/v1785846653/1242_2688-4_hiydn8.png",
      alt: "ASF session details",
      caption: "Session details",
      variant: "marketing",
    },
    {
      src: "https://res.cloudinary.com/dznd7vzlb/image/upload/v1785846652/1242_2688-2_pcfmfd.png",
      alt: "ASF exhibitors and startups",
      caption: "Exhibitors & startups",
      variant: "marketing",
    },
  ],
};
