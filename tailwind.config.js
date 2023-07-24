/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E1E",
        secondary: "#2F2F2F",
        tertiary: "#3F3F3F",
        quaternary: "#4F4F4F",
        black: "#0e0e0e",
        white: {
          DEFAULT: "#FFFFFF",
          faded: "#FFFFFF80",
        },
      },
      dropShadow: {
        black: "2px 2px 2px rgba(30, 30, 30, 0.25)",
        white: "0px 4px 4px rgba(255, 255, 255, 0.5)",
      },
      fontSize: {
        h1: "2.5rem",
        h2: "2rem",
        h3: "1.75rem",
        h4: "1.5rem",
        h5: "1.25rem",
        p: "1rem",
        small: "0.875rem",
      },
    },
  },
  plugins: [],
};
