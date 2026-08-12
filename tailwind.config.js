/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'hero': "url('/Assets/stacked-peaks-haikei(3).png')",
      // },

      fontFamily: {
        clash: ["Clash Display", "sans-serif"],
        display: ["Clash Display", "var(--font-outfit)", "sans-serif"],
        programme: ["var(--font-programme)"],
        montecatiniPro: ["var(--font-montecatiniPro)"],
        outfit: ["var(--font-outfit)"],
      },
    },
  },
};
