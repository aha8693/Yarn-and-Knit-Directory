// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
  daisyui: {
    themes: [
      {
        myknit: {
          primary: "#604A43",
          "primary-content": "#F1FAEE",
          secondary: "#846959",
          "secondary-content": "#FFF7F3",
          accent: "#604A43",
          neutral: "#1F2937",
          "base-100": "#FFFFFF",
          "base-200": "#F6F8F7",
          "base-300": "#b9b4b3",
          "base-content": "#3f312d",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
