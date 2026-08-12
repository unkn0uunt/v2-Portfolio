import { MobileCaseStudy, PRIVATE_CASE_STUDY_NOTICE } from "@/types/types";

export const ateCaseStudy: MobileCaseStudy = {
  slug: "ate",
  title: "Africa Technology Expo",
  tagline:
    "One app for networking, schedules, and meetings — the official companion for Africa Technology Expo.",
  role: "Mobile Engineer — UI & API Integration",
  parentCompany: "Built under Spark Africa LLC",
  overview: [
    "Africa Technology Expo (ATE) is the mobile companion for a major tech gathering. Attendees authenticate with tickets, browse schedules, connect with people on the floor, and manage QR-based access.",
    "I owned screen implementation and API integration for auth, meetings, schedule sync, and ticketing — React Native on iOS and Android.",
  ],
  responsibilities: [
    "Built core mobile screens and navigation across onboarding, home, networking, and schedule",
    "Integrated backend APIs for authentication, meeting requests, and ticket services",
    "Implemented QR ticket flows and real-time notification hooks",
    "Collaborated with design and backend to keep client and server contracts aligned",
  ],
  features: [
    "Ticket-linked authentication and attendee onboarding",
    "Event checklist for connect, meetings, and schedule tasks",
    "Physical and virtual meeting requests with timed slots",
    "QR ticket display, transfer, and badge-scan networking",
    "Schedule browsing with stage filters and add-to-calendar",
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
      src: "https://res.cloudinary.com/dznd7vzlb/image/upload/v1786544139/ate1_rj7vfo.png",
      alt: "ATE event checklist",
      caption: "Event checklist",
      variant: "marketing",
    },
    {
      src: "https://res.cloudinary.com/dznd7vzlb/image/upload/v1786544140/ate2_s8fuzd.png",
      alt: "ATE request a meeting",
      caption: "Meeting requests",
      variant: "marketing",
    },
    {
      src: "https://res.cloudinary.com/dznd7vzlb/image/upload/v1786544142/ate5_lb4qwn.png",
      alt: "ATE ticket QR code",
      caption: "QR ticketing",
      variant: "marketing",
    },
  ],
  screens: [
    {
      src: "https://res.cloudinary.com/dznd7vzlb/image/upload/v1786544141/ate4_qenryc.png",
      alt: "ATE swipe to connect",
      caption: "Attendee networking",
      variant: "marketing",
    },
    {
      src: "https://res.cloudinary.com/dznd7vzlb/image/upload/v1786544140/ate3_fp0vyg.png",
      alt: "ATE schedule and sessions",
      caption: "Schedule & sessions",
      variant: "marketing",
    },
  ],
};
