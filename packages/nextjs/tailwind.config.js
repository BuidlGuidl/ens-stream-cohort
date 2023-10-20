/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "scaffoldEthDark",
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        scaffoldEth: {
          primary: "#0f0f46",
          "primary-content": "#b9c7f0",
          secondary: "#111d38",
          "secondary-content": "#ffffff",
          accent: "#e56c79", // new accent color
          "accent-content": "#d4d9f4",
          neutral: "#7289e0",
          "neutral-content": "#ffffff",
          "base-100": "#000000",
          "base-200": "#222222",
          "base-300": "#444444",
          "base-content": "#d4e6ff",
          info: "#93BBFB",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",
          "--rounded-btn": "9999rem",
          ".tooltip": {
            "--tooltip-tail": "6px",
          },
        },
      },
      {
        scaffoldEthDark: {
          primary: "#212638",
          "primary-content": "#F9FBFF",
          secondary: "#4969A6",
          "secondary-content": "#F9FBFF",
          accent: "#2A3655",
          "accent-content": "#F9FBFF",
          neutral: "#212638",
          "neutral-content": "#385183",
          "base-100": "#385183",
          "base-200": "#2A3655",
          "base-300": "#212638",
          "base-content": "#F9FBFF",
          info: "#385183",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "hsl(var(--p))",
          },
        },
      },
    ],
  },
  theme: {
    // Extend Tailwind classes (e.g. font-bai-jamjuree, animate-grow)
    extend: {
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
      },
    },
  },
};
