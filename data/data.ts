import { JobExperience, Project } from "@/types/types";

export const experiences: JobExperience[] = [
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
    occupation: "Mobile App Devloper",
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
  // 1- SageSync
  {
    id: crypto.randomUUID(),
    projectName: "SageSync",
    projectImage:
      "https://res.cloudinary.com/dznd7vzlb/image/upload/v1760974226/sage-sync_y63eq9.png",

    projectDescription: `SageSync is a financial management SaaS designed for African freelancers, small business owners, and digital entrepreneurs. It simplifies income tracking, invoicing, and goal management with an intuitive dashboard built using React, Tailwind CSS, shadcnUI, Typescript, Node.js, Express.js, and MongoDB. Featuring AI-assisted expense categorization and a built-in business card generator, SageSync helps users stay financially organized and professional. With secure authentication, responsive design, and seamless data visualization, it turns complex financial workflows into simple, actionable insights. SageSync embodies modern simplicity, empowering users to manage and grow their business finances efficiently from any device.`,
    demoLink: "https://sage-sync.vercel.app/",
    githubLink: "https://github.com/Official-BigT/sage-sync-212ee2c6",
    tools: [
      "NextJS",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Expressjs",
      "mongodb",
      "vercel",
      "render",
    ],
  },
  // 2 Spark Event Platform
  {
    id: crypto.randomUUID(),
    projectName: "Spark Event Platform App",
    projectImage:
      "https://res.cloudinary.com/dznd7vzlb/image/upload/v1769262076/Login_page_v1_nbd5pu.png",
    projectDescription: `Spark is an internal company application designed for event networking and coordination. Built with React Native and Expo, it enables attendees to browse schedules, request meetings with sponsors or participants, manage QR-based tickets, and receive real-time notifications. As Frontend Engineer, I implemented the UI across all mobile screens, navigation architecture, state management, and backend API integration.`,
    demoLink: "/projects/spark",
    githubLink: "https://github.com/Official-BigT/Spark",
    tools: [
      "React Native",
      "Expo",
      "TypeScript",
      "NativeWind",
      "React Navigation",
    ],
  },
  // 3 Furnishpere
  {
    id: crypto.randomUUID(),
    projectName: "Furnisphere",
    projectImage:
      "https://res.cloudinary.com/dznd7vzlb/image/upload/v1761072343/furnisphere_oxtmku.png",
    projectDescription:
      "Furnisphere is a modern furniture-themed web project built to showcase my Figma-to-code implementation, frontend development, and web accessibility skills. Developed with Next.js, TypeScript, and Tailwind CSS, it features a fully responsive design, smooth animations with Framer Motion, seamless smooth scrolling using Lenis, and a clean, user-friendly interface that follows accessibility best practices. Furnisphere isn’t a live store but a demonstration of high-quality, accessible UI and UX design in code.",
    demoLink: "https://furnisphere-ods.vercel.app/",
    githubLink: "https://github.com/Official-BigT/Furnisphere",
    tools: ["NextJS", "TypeScript", "TailwindCSS", "Framer Motion"],
  },
   // 4 Rakel's Fashion Hub
   {
    id: crypto.randomUUID(),
    projectName: "Rakel's Fashion House",
    projectImage: "https://res.cloudinary.com/dznd7vzlb/image/upload/v1774616158/Rakels_n5ajgq.png",
    projectDescription:
      "Rakel's Fashion House is a comprehensive fashion store designed to facilitate product management, order processing, and customer support. The frontend is a modern, fully scaffolded React/TypeScript application with a clean, user-friendly interface, featuring smooth animations and a responsive design. It includes features like product management, order processing, customer support, and a responsive design. It also includes a backend API built with Node.js, Express.js, and MongoDB. ",
    demoLink: "https://rakels-fashion-house.vercel.app/",
    githubLink: "https://github.com/Official-BigT/Rakel's-Fashion-House",
    tools: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Cloudinary"],
  },
  // 5 Forge Gym (not completed)
  {
    id: crypto.randomUUID(),
    projectName: "Forge Gym",
    projectImage:
      "https://res.cloudinary.com/dznd7vzlb/image/upload/v1764715807/forge-gym_z34ieg.png",
    projectDescription:
      "Forge Gym is a comprehensive gym management system designed to facilitate member management, class scheduling, check-ins, subscription handling, and administrative oversight. The frontend is a modern, fully scaffolded React/TypeScript application with an energetic yellow/charcoal theme, featuring smooth animations and a responsive design.",
    demoLink: "https://forgegym.vercel.app/",
    githubLink: "https://github.com/Official-BigT/Forge-gym-Frontend/",
    tools: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Cloudinary",
    ],
  },
 
  // 6 Crypto Live-Tracker
  {
    id: crypto.randomUUID(),
    projectName: "Crypto Live-Tracker",
    projectImage:
      "https://res.cloudinary.com/dznd7vzlb/image/upload/v1760974226/crypto-live-tracker_d80dym.png",
    projectDescription: `CryptoLiveTracker is a real-time cryptocurrency dashboard powered by the CoinGecko API. It provides live price updates, percentage changes, market capitalization, and trending coin insights in an elegant, responsive UI. Built with React.js, Tailwind CSS and CoinGecko API, it ensures smooth performance and dynamic data fetching using React hooks. The platform includes intuitive sorting, dark mode, and an interactive chart section that visualizes live trends. CryptoLiveTracker serves as both a personal project for mastering API integration and a valuable tool for crypto enthusiasts who want accurate, fast, and visually engaging market tracking in one place.`,
    demoLink: "https://crypto-live-tracker-rouge.vercel.app/",
    githubLink: "https://github.com/Official-BigT/Crypto_Live-Tracker",
    tools: ["React", "TailwindCSS", "Redux", "react-router"],
  },
  // 7 SafeDep Package Insights
  {
    id: crypto.randomUUID(),
    projectName: "SafeDep Package Insights",
    projectImage:
      "https://res.cloudinary.com/dznd7vzlb/image/upload/v1768005978/Inter_Task_aiutrd.png",
    projectDescription: `SafeDep Package Insights is a Next.js 16 application that displays security insights and analysis for open source packages using the SafeDep API. The application provides detailed information about package vulnerabilities, licenses, versions, and security metrics.`,
    demoLink: "https://safedep-package-insights.vercel.app/",
    githubLink: "https://github.com/Official-BigT/SafeDep",
    tools: ["NextJS", "React", "TypeScript", "TailwindCSS"],
  },
  // 8 v1-Portfolio
  {
    id: crypto.randomUUID(),
    projectName: "v1-Portfolio",
    projectImage:
      "https://res.cloudinary.com/dznd7vzlb/image/upload/v1761072491/v1-portfolio_fzngdu.png",
    projectDescription: `
        Laravel(Blade) | PHP based portfolio developed by yours truly in his earlier days as a novice developer.
      `,
    demoLink: "https://triumph-anya-ngav1-portfolio.vercel.app/",
    githubLink: "https://github.com/Official-BigT/v1-Portfolio",
    tools: ["Html5", "TailwindCSS", "Laravel", "Bootstrap"],
  },

  // Update the following projects when there's more
  // // 6
  // {
  //   id: crypto.randomUUID(),
  //   projectName: "MetaSecure-web3.0",
  //   projectImage:
  //     "https://res.cloudinary.com/dhvwthnzq/image/upload/v1753115194/Screenshot_2025-07-21_172341_zalzo8.png",
  //   projectDescription:
  //     "MetaSecure Web3.0 is a decentralized application (dApp) built using Solidity and React. This project leverages the power of blockchain technology to enhance web security and provide decentralized solutions.",
  //   demoLink: "https://meta-secure-web3-0.vercel.app/",
  //   githubLink: "https://github.com/deji-ice/MetaSecure-web3.0",
  //   tools: [
  //     "React",
  //     "JavaScript",
  //     "Solidity",
  //     "Axios",
  //     "tailwindCSS",
  //     "Ethers.js",
  //   ],
  // },
  // // 7
  // {
  //   id: crypto.randomUUID(),
  //   projectName: "HarvestGrove",
  //   projectImage:
  //     "https://res.cloudinary.com/dhvwthnzq/image/upload/v1706018424/mines/Screenshot_62_xmbyau.png",
  //   projectDescription:
  //     "Transforming a Figma design into a vibrant HarvestGrove landing page, I utilized React, Framer Motion, and GSAP for dynamic animations. With Tailwind CSS and Cloudinary, the result is a visually stunning and responsive digital showcase that harmonizes artistry and technology.",
  //   demoLink: "https://harvestgrove.vercel.app",
  //   githubLink: "https://github.com/deji-ice/HarvestGrovee",
  //   tools: [
  //     "React",
  //     "Javascript",
  //     "TailwindCSS",
  //     "GSAP",
  //     "Framer Motion",
  //     "Cloudinary",
  //   ],
  // },
  // // 8
  // {
  //   id: crypto.randomUUID(),
  //   projectName: "Photographer Portfolio Showcase",
  //   projectImage:
  //     "https://res.cloudinary.com/dhvwthnzq/image/upload/v1691492785/cartizn/Screenshot_2023-08-08_100540_txylyj.png",
  //   projectDescription:
  //     "An Artistic Fusion of Technology and Imagery, i crafted a captivating portfolio website for a photographer using React, Framer Motion, and GSAP to bring imagery to life. Leveraged Tailwind CSS for a polished design and integrated Cloudinary for seamless image loading. Collaborated with a designer to harmonize artistry and technology, resulting in a visually stunning digital showcase.",
  //   demoLink: "https://cartizn.vercel.app/",
  //   githubLink: "https://github.com/deji-ice/cartizn",
  //   tools: [
  //     "React",
  //     "React-Router",
  //     "GSAP",
  //     "Framer Motion",
  //     "Javascript",
  //     "TailwindCSS",
  //     "SEO",
  //     "Cloudinary",
  //   ],
  // },
  // // 9
  // {
  //   id: crypto.randomUUID(),
  //   projectName: "AirBnb Clone",
  //   projectImage:
  //     "https://res.cloudinary.com/dhvwthnzq/image/upload/v1706101494/Screenshot_63_mkyrpo.png",
  //   projectDescription:
  //     "Crafting an Airbnb-inspired frontend clone with TypeScript and static data. Elevate the user experience with seamless property browsing, responsive design, and an intuitive interface. A showcase of design and functionality inspired by Airbnb's renowned simplicity.",
  //   demoLink: "https://airbnb-500-c.vercel.app/",
  //   githubLink: "https://github.com/deji-ice/airbnb-500C/",
  //   tools: [
  //     "React",
  //     "TypeScript",
  //     "TailwindCSS",
  //     "DaisyUI",
  //     "Unsplash",
  //     "Cloudinary",
  //   ],
  // },
  // // 10
  // {
  //   id: crypto.randomUUID(),
  //   projectName: "Blog with Embedded Sanity CMS",
  //   projectImage: `https://res.cloudinary.com/dhvwthnzq/image/upload/v1700045704/mines/Screenshot_407_tmrvrf.png`,
  //   projectDescription:
  //     "A personal blog website using Next.js 13 and TypeScript, with an embedded content management system from Sanity. Leveraged Tailwind CSS for responsive design and utilized Next.js SSG and revalidation for optimal performance. Implemented dynamic routing to generate pages for each blog post and used server-side rendering to enhance SEO. Ensured a seamless user experience with lazy loading and image optimization.",
  //   demoLink: "https://thecodechronicles.vercel.app/",
  //   githubLink: "https://github.com/deji-ice/nextjs-blog",
  //   tools: ["Typescript", "NextJS", "Sanity", "TailwindCSS"],
  // },
  // // 11
  // {
  //   id: crypto.randomUUID(),
  //   projectName: "Africash Fintech Landing Page",
  //   projectImage: `https://res.cloudinary.com/dhvwthnzq/image/upload/v1700045703/mines/Screenshot_392_w80o0x.png`,
  //   projectDescription:
  //     "Africash is a fintech landing page built with React, Tailwind CSS, and Framer Motion. The landing page is designed to promote the Africash financial platform with a modern and responsive user interface. Features include easy navigation, smooth animations, and informative sections highlighting the platform's key benefits.",
  //   demoLink: "https://africash.netlify.app/",
  //   githubLink: "https://github.com/deji-ice/Africash",
  //   tools: ["React", "TailwindCSS", "Framer Motion"],
  // },
];
