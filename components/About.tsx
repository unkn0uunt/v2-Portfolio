/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { memo } from "react";

const technologies = [
  "HTML5 & CSS",
  "Javascript",
  "Typescript",
  "NativeWind",
  "Tailwind CSS",
  "Bootstrap CSS",
  "Cursor AI",
  "React",
  "React Native",
  "NextJS",
  "Expo",
  "Express.js",
  "Node.js",
  "Nest.js",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "Cloudinary",
  "React Navigation",
  "Redux",
  "Framer Motion",
  "POSTMAN",
  "Vercel",
  "Netlify",
  "Render",
  "MS. Azure",
  "AWS",
  "Canva",
  "Figma",
  "Adobe Illustrator",
];

const About = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col px-5 sm:px-6 md:px-16 lg:px-20 pt-16 sm:pt-20 
      max-w-7xl mx-auto w-full"
    >
      <h2
        className="text-3xl  xl:text-3xl md:text-4xl  text-center 
        mb-8 sm:mb-12 md:mb-16 mt-5 font-semibold text-gray-500 
        font-outfit tracking-wider"
      >
        About Me
      </h2>

      <div
        className="flex flex-col lg:flex-row items-center lg:items-start 
        gap-8 lg:gap-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <Image
            src="https://res.cloudinary.com/dznd7vzlb/image/upload/v1757474790/bigme_basypp.jpg"
            // src="https://res.cloudinary.com/dznd7vzlb/image/upload/v1757474786/BigT_b4grw8.jpg"
            alt="Triumph Anya-Nga"
            height={285}
            width={375}
            priority
            className="border-dashed border-2 border-gray-400 object-cover 
            rounded-lg shadow-lg transition-transform duration-300 
            hover:scale-105 w-full max-w-[320px] h-auto"
          />
        </motion.div>

        <div className="space-y-6 text-base sm:text-lg lg:text-xl w-full">
          <div className="space-y-4">
            <p className="leading-relaxed">
              Before diving into tech fully, I was an internet of things
              enthusiast with drive to always use the internet, which sparked my
              love for everything on the web and how it works. Now, I blend that
              drive to building aesthetic, clean and seamless UIs, digital
              products and full on websites for people to use and enjoy.
            </p>
            <p className="leading-relaxed">
              I’m always curious and growing — currently adding Framer Motion
              and Animation to my stack for frontend development while staying
              active in the backend dev space with Express.js and Nest.js, AI
              prompt engineering and new technologies also keeps me sharp and
              grounded too.
            </p>
            <p className="leading-relaxed">
              When I’m not coding, you’ll find me gaming, vibing to music, or
              watching movies that spark new ideas. They help me unwind and feed
              my creativity in unexpected ways, also apply myself to other
              ramifications of life in general.
            </p>
          </div>

          <div className="pt-4">
            <h3 className="text-base mb-3 font-semibold text-gray-800">
              Technologies I work with:
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              {technologies.map((tech, index) => (
                <motion.li
                  key={tech}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.4) }}
                  className="flex items-center space-x-2 text-sm sm:text-base text-gray-700"
                >
                  <span className="h-1.5 w-1.5 bg-gray-500 rounded-full shrink-0" />
                  <span>{tech}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

About.displayName = "About";

export default About;
