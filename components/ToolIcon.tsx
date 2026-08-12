import React from "react";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiFramer,
  SiReact,
  SiJavascript,
  SiSolidity,
  SiAxios,
  SiEthers,
  SiGreensock,
  SiReactrouter,
  SiDaisyui,
  SiUnsplash,
  SiSanity,
  SiCss3,
  SiNetlify,
  SiVercel,
  SiDocker,
  SiExpress,
  SiVite,
  SiPostman,
  SiSass,
  SiMongodb,
  SiCloudinary,
  SiChakraui,
  SiShadcnui,
  SiRedux,
  SiHtml5,
  SiLaravel,
  SiRender,
  SiExpo,
  SiPostgresql,
  SiNestjs,
  SiFastapi,
  SiBun,
  SiNodedotjs,
} from "react-icons/si";

const toolConfig = {
  nextjs: { Icon: SiNextdotjs, color: "bg-black", label: "Next.js" },
  bootstrap: { Icon: SiBootstrap, color: "bg-black", label: "Bootstrap" },
  html5: { Icon: SiHtml5, color: "bg-black", label: "HTML5" },
  typescript: { Icon: SiTypescript, color: "bg-blue-600", label: "TypeScript" },
  tailwindcss: {
    Icon: SiTailwindcss,
    color: "bg-cyan-500",
    label: "Tailwind CSS",
  },
  laravel: {
    Icon: SiLaravel,
    color: "bg-red-500",
    label: "Laravel",
  },
  "framer motion": {
    Icon: SiFramer,
    color: "bg-purple-600",
    label: "Framer Motion",
  },
  react: { Icon: SiReact, color: "bg-cyan-400", label: "React" },
  javascript: {
    Icon: SiJavascript,
    color: "bg-yellow-400",
    label: "JavaScript",
  },
  solidity: { Icon: SiSolidity, color: "bg-gray-800", label: "Solidity" },
  axios: { Icon: SiAxios, color: "bg-purple-500", label: "Axios" },
  "ethers.js": { Icon: SiEthers, color: "bg-blue-700", label: "Ethers.js" },
  gsap: { Icon: SiGreensock, color: "bg-green-500", label: "GSAP" },
  "react-router": {
    Icon: SiReactrouter,
    color: "bg-red-500",
    label: "React Router",
  },
  daisyui: { Icon: SiDaisyui, color: "bg-green-400", label: "DaisyUI" },
  unsplash: { Icon: SiUnsplash, color: "bg-black", label: "Unsplash" },
  sanity: { Icon: SiSanity, color: "bg-red-600", label: "Sanity" },
  css: { Icon: SiCss3, color: "bg-blue-500", label: "CSS3" },
  netlify: { Icon: SiNetlify, color: "bg-teal-500", label: "Netlify" },
  vercel: { Icon: SiVercel, color: "bg-black", label: "Vercel" },
  render: { Icon: SiRender, color: "bg-black", label: "Render" },
  docker: { Icon: SiDocker, color: "bg-blue-600", label: "Docker" },
  expressjs: { Icon: SiExpress, color: "bg-gray-700", label: "Express.js" },
  express: { Icon: SiExpress, color: "bg-gray-700", label: "Express.js" },
  "node.js": { Icon: SiNodedotjs, color: "bg-green-700", label: "Node.js" },
  nodejs: { Icon: SiNodedotjs, color: "bg-green-700", label: "Node.js" },
  node: { Icon: SiNodedotjs, color: "bg-green-700", label: "Node.js" },
  vite: { Icon: SiVite, color: "bg-purple-500", label: "Vite" },
  postman: { Icon: SiPostman, color: "bg-orange-500", label: "Postman" },
  sass: { Icon: SiSass, color: "bg-pink-500", label: "Sass" },
  mongodb: { Icon: SiMongodb, color: "bg-green-600", label: "MongoDB" },
  cloudinary: { Icon: SiCloudinary, color: "bg-blue-500", label: "Cloudinary" },
  chakraui: { Icon: SiChakraui, color: "bg-teal-600", label: "Chakra UI" },
  shadcnui: { Icon: SiShadcnui, color: "bg-gray-900", label: "shadcn/ui" },
  redux: { Icon: SiRedux, color: "bg-purple-700", label: "Redux" },
  "react native": { Icon: SiReact, color: "bg-cyan-400", label: "React Native" },
  expo: { Icon: SiExpo, color: "bg-black", label: "Expo" },
  nativewind: { Icon: SiTailwindcss, color: "bg-cyan-500", label: "NativeWind" },
  "react navigation": {
    Icon: SiReactrouter,
    color: "bg-purple-600",
    label: "React Navigation",
  },
  postgres: { Icon: SiPostgresql, color: "bg-blue-700", label: "PostgreSQL" },
  postgresql: { Icon: SiPostgresql, color: "bg-blue-700", label: "PostgreSQL" },
  nestjs: { Icon: SiNestjs, color: "bg-red-600", label: "NestJS" },
  fastapi: { Icon: SiFastapi, color: "bg-teal-600", label: "FastAPI" },
  bunjs: { Icon: SiBun, color: "bg-amber-400 text-black", label: "Bun" },
  bun: { Icon: SiBun, color: "bg-amber-400 text-black", label: "Bun" },
};

const ToolIcon: React.FC<{ tool: string }> = ({ tool }) => {
  const iconSize = 20;
  const baseClassName = "rounded-full h-8 w-8 p-1 text-white";

  const config = toolConfig[tool.toLowerCase() as keyof typeof toolConfig];

  if (config) {
    const { Icon, color, label } = config;
    const IconComponent = Icon as React.ComponentType<{
      size?: number;
      className?: string;
      title?: string;
      "aria-label"?: string;
    }>;
    return (
      <IconComponent
        size={iconSize}
        className={`${baseClassName} ${color}`}
        title={label}
        aria-label={label}
      />
    );
  }

  return (
    <span className="inline-block px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-md">
      {tool}
    </span>
  );
};

export default ToolIcon;
