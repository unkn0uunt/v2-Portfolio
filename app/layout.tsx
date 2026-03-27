import "./globals.css";
import NavBar from "@/components/NavBar";
// import Script from "next/script";
import { Outfit } from "next/font/google";
import SmoothScrolling from "@/components/SmoothScrolling";
// import SVGLoader from "@/components/SVGloader";

// Optimize font loading
// const programme = localFont({
//   src: [
//     {
//       path: "../public/fonts/Programme-Regular.woff2",
//       weight: "400",
//     },
//   ],
//   variable: "--font-outfit",
//   preload: true,
// });
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

// const montecatiniPro = localFont({
//   src: [
//     {
//       path: "../public/fonts/MontecatiniPro-StrettoUltra.woff2",
//       weight: "700",
//     },
//   ],
//   variable: "--font-montecatiniPro",
//   preload: true,
// });

// const NowPlaying = dynamic(() => import("@/components/NowPlaying"), {
//   loading: () => <div className="h-6 bg-slate-900" />,
// });

export const metadata = {
  viewport: { width: "device-width", initialScale: 1 },
  title: "Triumph Anya-Nga - Software Engineer Portfolio",
  // verification: {
  //   google: "ltfOnPx-NMzt2vBROfh-jAQr5R-U7ynE-3t3kmMTJGo",
  // },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  description:
    "Triumph Anya-Nga - Software Engineer Portfolio: Creating professional, scalable, and SEO-friendly websites that establishes a robust online presence for small businesses through innovative web solutions in Tech, AI, and digital innovation with hands-on experience building scalable web applications, APIs, integrating databases, and securing applications with modern authentication methods." 
    ,
  keywords: [
    "Triumph Anya-Nga",
    "BigT",
    "Unkn0wnT",
    "Lagos",
    "Port-Harcourt",
    "Nigeria",
    "HTML/CSS",
    "JavaScript",
    "React",
    "React Native",
    "Tailwind CSS",
    "Typescript",
    "Next.js",
    "Express.js",
    "Node.js",
    "Frontend Engineer",
    "Backend Developer",
    "Web development",
    "Mobile development",
    "Frontend development",
    "Frontend developer",
    "Backend development",
    "Backend developer",
    "Fullstack developer",
    "Graphic designer",
    "Software developer",
    "Freelance",
    "Web Developer",
    "Web Development Portfolio",
    "Web Performance Optimization",
    "Portfolio Showcase",
    "SEO-Friendly Websites",
    "Portfolio website",
    "Technical Skills",
    "SEO Optimization",
    "AI-assisted coding",
    "AI-automation",
    "Artificial Intelligence"
  ],
  robots: {
    googleBot: {
      index: true,
    },
  },
  icons: {
    icon: "/favicon-32x32.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Triumph Anya-Nga - Software Developer Portfolio",
    description:
      "Triumph Anya-Nga - An experienced software developer (Backend heavy) in various technologies for development operations and management. Motivated and detail-oriented Tech and Design enthusiast of a strong foundation in design and software development. Passionate about driving scalable solutions in Tech, AI, and digital innovation with hands-on experience building scalable web applications, APIs, integrating databases, and securing applications with modern authentication methods. I help convert ideas and insights into meaningful and purposeful products.",
    creator: "@un_kn0wnt",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={` ${outfit.variable}  font-sans scroll-smooth`}>
      <head>
        {/* <meta name="theme-color" content="#FAF9F6" /> */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>

      {/* <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-2PKP3NR2VS"
      /> */}
      {/* <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2PKP3NR2VS');
        `}
      </Script> */}

      <body className="antialiased overflow-x-hidden bg-[#ebebf3]">
        {/* <SVGLoader/> */}
        {/* <NowPlaying /> */}
        <NavBar />
        <SmoothScrolling>
          <main className="relative">{children}</main>
        </SmoothScrolling>
      </body>
    </html>
  );
}