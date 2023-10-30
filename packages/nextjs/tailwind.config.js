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
          primary: "#ffd700", // A primary gold color
          "primary-content": "#f5e6a3", // Lighter shade of primary for content
          secondary: "#274457", // Deep blue for secondary elements
          "secondary-content": "#ffffff", // White for content on dark backgrounds
          accent: "#8b4513", // Rich wood brown as an accent
          "accent-content": "#d2a679", // Lighter shade of accent for content
          neutral: "#c0c0c0", // Silver as a neutral color
          "neutral-content": "#ffffff", // White for content on neutral backgrounds
          "base-100": "#3e2723", // Very dark wood color
          "base-200": "#5d4037", // Darker wood shade
          "base-300": "#795548", // Lighter wood shade
          "base-content": "#d7ccc8", // Light shade for content on base backgrounds
          info: "#4a90e2", // Info in blue shade
          success: "#228b22", // Success in forest green shade
          warning: "#dAA520", // Goldenrod warning color
          error: "#b22222", // Firebrick red error color
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
