import { JobExperience, Project } from "@/types/types";

export const experiences: JobExperience[] = [
  {
    occupation: "Freelance Fullstack Developer",
    companyName: "Rentigram — Rent Luxury Cars, Jets & Yachts",
    dateStart: "08/2026",
    dateEnd: "Till Date",
    responsibilities: [
      `Shipped a luxury rental marketplace for cars, jets, yachts, and experiences across Nigeria — search, category browsing, and listing discovery built for high-intent hosts and renters.`,
      `Delivered MERN-stack product surfaces with responsive listing cards, host verification cues, and filter flows tuned for premium inventory discovery.`,
      `Integrated end-to-end marketplace journeys from browse to host profiles, reinforcing trust and conversion for a high-ticket rental audience.`,
    ],
  },
  {
    occupation: "Freelance Fullstack Developer",
    companyName: "Rakel's Fashion House - Outfits for Women who dress to rule!",
    dateStart: "02/2026",
    dateEnd: "Till Date",
    responsibilities: [
      `Built AI-assisted product discovery and recommendation workflows across Rakel's Fashion Hub platform, improving item relevance, shopper engagement, and purchase intent.`,
      `Implemented robust authentication, authorization, and protected commerce flows to secure customer accounts, order data, and checkout operations.`,
      `Delivered and optimized end-to-end e-commerce experiences, including the brand landing page, product catalog, and core purchase journeys, to strengthen usability, trust, and conversion.`,
    ],
  },
  {
    occupation: "Freelance Fullstack Developer",
    companyName: "The Legal Home — Hamilton & Reese Attorneys at Law",
    dateStart: "01/2026",
    dateEnd: "Till Date",
    responsibilities: [
      `Designed and delivered a premium legal services website with practice-area navigation, partner profiles, and consultation flows built for trust and discretion.`,
      `Implemented responsive, accessible layouts across case studies, attorney bios, and client intake sections to reinforce the firm's established brand credibility.`,
      `Optimized page structure and content hierarchy for clarity and fast discovery, helping prospective clients navigate complex legal services with confidence.`,
    ],
  },
  {
    occupation: "Freelance Fullstack Developer",
    companyName: "Nero Labs — Cosmetic & Home Chemical Formulation Studio",
    dateStart: "12/2025",
    dateEnd: "Till Date",
    responsibilities: [
      `Built a product and education platform for formulation courses, raw material catalogues, DIY resources, and WhatsApp-driven order flows.`,
      `Delivered a clean, trust-first interface across product categories, course schedules, and consultation booking to support both students and small brand owners.`,
      `Structured content sections for testimonials, FAQs, and downloadable resources to reduce friction from first visit to course enrollment or product inquiry.`,
    ],
  },
  {
    occupation: "Mobile App Developer",
    companyName: "Spark Africa LLC",
    dateStart: "11/2025",
    dateEnd: "Till Date",
    responsibilities: [
      `Integrated heavy data synchronization features into the frontend platform, improving recommendation accuracy and enhancing attendees match-making satisfaction.`,
      `Implemented secure authentication systems and protected route logic to ensure user privacy and platform security.`,
      `Developed and maintained responsive, high-performance user interfaces for Spark's mobile assets, including the home page, ticketing and profile screens, core frontend platform, driving user engagement and brand consistency.`,
      `Collaborated closely with backend engineers and UI/UX designers to ensure seamless integration and consistency across the product experience.`,
    ],
  },
  {
    occupation: "Fullstack Developer with AI skills",
    companyName: "GoMyCode NG.",
    dateStart: "03/2025",
    dateEnd: "09/2025",
    responsibilities: [
      `Developed SageSync- Financial Management Tool using React, TypeScript, Node.js(Express.js), MongoDB and REST APIs that helped structure the application, improve their user experience and boosted performance by 30%.`,
      `Implemented industry best practices including Agile methodology and peer code reviews, creating a collaborative developing environment that increased project success rates by 40%.`,
      `Integrated practical industry standards such as Git version control and test-driven development, producing conventional software shipping with modern development workflows.`,
      `Led tasks on responsive designs with CSS Grid, Flexbox, shadcn UI, and Tailwind CSS, driving a 50% improvement in frontend competency and enabling professional interfaces in 4 weeks.`,
    ],
  },
  {
    occupation: "Freelance Fullstack Developer",
    companyName: "Petrochem Oil Trading Nigeria Ltd",
    dateStart: "11/2024",
    dateEnd: "Till Date",
    responsibilities: [
      `Developed a corporate web platform presenting petroleum product lines, supply programmes, and leadership credentials for B2B trading audiences.`,
      `Built documentation-focused sections covering markets, operations, HSE, and counterparty verification to communicate regulatory compliance and trade discipline.`,
      `Delivered a responsive, professional interface across product catalogues, enquiry flows, and company governance content for West African and international stakeholders.`,
    ],
  },
  {
    occupation: "Software Developer Intern",
    companyName: "Whitehat Academy",
    dateStart: "06/2023",
    dateEnd: "01/2024",
    responsibilities: [
      "Collaborated with a team of three to build an internal admin portal for the operations team, enabling payment fixes, user role management, and system configuration — which improved operational efficiency by 20%.",
      "Built a simplified frontend interface for testing and triggering backend actions, allowing non-technical team members to interact with endpoints without needing Postman.",
      "Worked closely with backend engineers to integrate APIs and services, reducing data retrieval time by 30% and ensuring smooth frontend-backend communication.",
      "Partnered with UI/UX designers to enhance usability and visual consistency, leading to a 25% drop in bounce rate and a 15% improvement in user satisfaction among internal users.",
    ],
  },
  {
    occupation: "Freelance Fullstack Engineer",
    companyName: "ODS",
    dateStart: "02/2022",
    dateEnd: "Till Date",
    responsibilities: [
      `Engineered and shipped AI-powered matchmaking workflows across the ODS stack, improving recommendation precision and conversion across key user journeys.`,
      `Architected secure authentication, authorization, and route-guard strategies across client and server layers, hardening account protection while preserving a seamless user experience.`,
      `Led end-to-end delivery of responsive, high-performance product surfaces across ODS digital properties, including the landing page, blog, and core platform, reinforcing product consistency and brand credibility.`,
    ],
  },
  {
    occupation: "UI/UX Designer",
    companyName: "Harde Business School",
    dateStart: "01/2019",
    dateEnd: "06/2019",
    responsibilities: [
      `Focused on user-centred designs, prototyping and human-computer interaction. `,
      `Ensured all projects were handled according to professional convention.`,
      `Maintained a sharp product design and experience delivery all with certification. `,
    ],
  },
];

export const projects: Project[] = [
  // — Mobile (featured on homepage)
  {
    id: "ate",
    projectName: "Africa Technology Expo",
    projectImage:
      "https://res.cloudinary.com/dznd7vzlb/image/upload/v1786544139/ate1_rj7vfo.png",
    projectDescription:
      "Official companion app for Africa Technology Expo — ticket authentication, attendee networking, schedules, QR ticketing, and on-site engagement.",
    demoLink: "/works/ate",
    tools: ["React Native", "Expo", "TypeScript", "TailwindCSS", "FastAPI", "Postgres"],
    category: "mobile",
    featured: true,
    visibility: "private",
    imageVariant: "marketing",
    year: "2026",
  },
  {
    id: "asf",
    projectName: "Africa Startup Festival",
    projectImage:
      "https://res.cloudinary.com/dznd7vzlb/image/upload/v1785846655/1242_2688_t1mqlp.png",
    projectDescription:
      "Official ASF companion app — connect with founders and investors, build your agenda, discover startups, and book focused meetings on the floor.",
    demoLink: "/works/asf",
    tools: ["React Native", "Expo", "TypeScript", "TailwindCSS", "FastAPI", "Postgres"],
    category: "mobile",
    featured: true,
    visibility: "private",
    imageVariant: "marketing",
    year: "2026",
  },
  {
    id: "farmx",
    projectName: "FarmX",
    projectImage:
      "https://res.cloudinary.com/dznd7vzlb/image/upload/v1785847452/farmx1_aopmwa.png",
    projectDescription:
      "Farm-to-door marketplace for African agriculture — verified farms, fresh produce delivery, and a multi-category explore hub for consumers.",
    demoLink: "/works/farmx",
    tools: ["React Native", "Expo", "TypeScript", "TailwindCSS", "NestJS", "Postgres"],
    category: "mobile",
    featured: true,
    visibility: "private",
    imageVariant: "device",
    year: "2026",
  },

  // — Web (featured on homepage)
  {
    id: "rentigram",
    projectName: "Rentigram",
    projectImage:
      "https://res.cloudinary.com/dznd7vzlb/image/upload/v1786553110/Screenshot_2026-08-12_at_5.06.06_PM_m166mk.png",
    projectDescription:
      "Discover and rent luxury cars, jets, yachts and experiences across Nigeria.",
    demoLink: "https://www.rentigram.com",
    tools: ["PostgreSQL", "Expressjs", "React", "Node.js"],
    category: "web",
    featured: true,
    year: "2026",
  },
  {
    id: "legal-home",
    projectName: "The Legal Home",
    projectImage:
      "https://res.cloudinary.com/dznd7vzlb/image/upload/v1785851344/legal-home_t9zobn.png",
    projectDescription:
      "A premium legal services website for Hamilton & Reese Attorneys at Law — practice areas, partner profiles, case studies, and consultation flows. Built for clarity, trust, and fast discovery in a high-stakes industry.",
    demoLink: "https://legal-home.vercel.app/",
    tools: ["React", "TypeScript", "TailwindCSS"],
    category: "web",
    featured: true,
    year: "2026",
  },
  {
    id: "nero-labs",
    projectName: "Nero Labs",
    projectImage:
      "https://res.cloudinary.com/dznd7vzlb/image/upload/v1785851343/nero-labs_qdiuqk.png",
    projectDescription:
      "A formulation studio platform for cosmetic and home chemical products — teaching safe DIY recipes, selling raw materials, and guiding small brands from kitchen batch to product line.",
    demoLink: "https://nero-labs-three.vercel.app/",
    tools: ["React", "TypeScript", "TailwindCSS"],
    category: "web",
    featured: true,
    year: "2025",
  },
  {
    id: "rakels-fashion-house",
    projectName: "Rakel's Fashion House",
    projectImage:
      "https://res.cloudinary.com/dznd7vzlb/image/upload/v1774616158/Rakels_n5ajgq.png",
    projectDescription:
      "A full-stack e-commerce platform for product management, order processing, and customer support. Features a responsive React/TypeScript frontend with smooth animations and a Node.js/MongoDB backend.",
    demoLink: "https://rakels-fashion-house.vercel.app/",
    tools: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Cloudinary"],
    category: "web",
    featured: true,
    year: "2026",
  },
  {
    id: "petrochem",
    projectName: "Petrochem Oil Trading LTD",
    projectImage:
      "https://res.cloudinary.com/dznd7vzlb/image/upload/v1785851344/petrochem_twmfnf.png",
    projectDescription:
      "A corporate web platform for a petroleum trading and brokerage firm — product lines, supply programmes, leadership, and counterparty credentials.",
    demoLink: "https://wwwpetrochemoiltradingltd.com/",
    tools: ["React", "TypeScript", "TailwindCSS"],
    category: "web",
    featured: false,
    year: "2024",
  },

  // — Web (remaining)
  {
    id: "furnisphere",
    projectName: "Furnisphere",
    projectImage:
      "https://res.cloudinary.com/dznd7vzlb/image/upload/v1761072343/furnisphere_oxtmku.png",
    projectDescription:
      "A modern furniture-themed showcase built from Figma to demonstrate responsive design, Framer Motion animations, and web accessibility best practices.",
    demoLink: "https://furnisphere-ods.vercel.app/",
    tools: ["NextJS", "TypeScript", "TailwindCSS", "Framer Motion"],
    category: "web",
    year: "2024",
  },
  {
    id: "forge-gym",
    projectName: "Forge Gym",
    projectImage:
      "https://res.cloudinary.com/dznd7vzlb/image/upload/v1764715807/forge-gym_z34ieg.png",
    projectDescription:
      "A gym management system for member management, class scheduling, check-ins, and subscription handling. Built with React/TypeScript and an energetic yellow/charcoal theme.",
    demoLink: "https://forgegym.vercel.app/",
    tools: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Cloudinary"],
    category: "web",
    year: "2025",
  },
  {
    id: "sage-sync",
    projectName: "SageSync",
    projectImage:
      "https://res.cloudinary.com/dznd7vzlb/image/upload/v1760974226/sage-sync_y63eq9.png",
    projectDescription:
      "A financial management SaaS for African freelancers and small business owners. Simplifies income tracking, invoicing, and goal management with AI-assisted expense categorization.",
    demoLink: "https://sage-sync.vercel.app/",
    tools: ["NextJS", "React", "TypeScript", "TailwindCSS", "Expressjs", "mongodb", "vercel", "render"],
    category: "web",
    year: "2025",
  },
  {
    id: "crypto-live-tracker",
    projectName: "Crypto Live-Tracker",
    projectImage:
      "https://res.cloudinary.com/dznd7vzlb/image/upload/v1760974226/crypto-live-tracker_d80dym.png",
    projectDescription:
      "A real-time cryptocurrency dashboard powered by the CoinGecko API. Live prices, market cap, trending coins, dark mode, and interactive charts in a responsive UI.",
    demoLink: "https://crypto-live-tracker-rouge.vercel.app/",
    tools: ["React", "TailwindCSS", "Redux", "react-router"],
    category: "web",
    year: "2024",
  },
  {
    id: "safedep-package-insights",
    projectName: "SafeDep Package Insights",
    projectImage:
      "https://res.cloudinary.com/dznd7vzlb/image/upload/v1768005978/Inter_Task_aiutrd.png",
    projectDescription:
      "A Next.js application displaying security insights for open source packages via the SafeDep API — vulnerabilities, licenses, versions, and security metrics.",
    demoLink: "https://safedep-package-insights.vercel.app/",
    tools: ["NextJS", "React", "TypeScript", "TailwindCSS"],
    category: "web",
    year: "2025",
  },
  {
    id: "v1-portfolio",
    projectName: "v1-Portfolio",
    projectImage:
      "https://res.cloudinary.com/dznd7vzlb/image/upload/v1761072491/v1-portfolio_fzngdu.png",
    projectDescription:
      "My first portfolio site — a Laravel/Blade and PHP build from my early developer days, styled with Tailwind CSS and Bootstrap.",
    demoLink: "https://triumph-anya-ngav1-portfolio.vercel.app/",
    tools: ["Html5", "TailwindCSS", "Laravel", "Bootstrap"],
    category: "web",
    year: "2023",
  },
];

export const featuredWebProjects = projects.filter(
  (p) => p.category === "web" && p.featured
);

export const featuredMobileProjects = projects.filter(
  (p) => p.category === "mobile" && p.featured
);
