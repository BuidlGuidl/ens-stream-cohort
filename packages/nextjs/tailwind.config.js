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
          primary: "#4a4e69", // A muted blue-gray, like shadowed brick
          "primary-content": "#e0e1dd", // Soft off-white for a gentle contrast
          secondary: "#22223b", // A deep blue, akin to the twilight sky
          "secondary-content": "#ffffff", // Pure white for clear legibility
          accent: "#9a8c98", // A subdued lavender-gray, like weathered stone
          "accent-content": "#f2e9e4", // A pale, dusty pink for accent content
          neutral: "#6b705c", // An earthy gray-green, reflecting mossy stones
          "neutral-content": "#ffffff", // White to stand out against the neutral
          "base-100": "#1c1c1e", // Dark slate gray, nearly black for the base
          "base-200": "#2a2a2d", // Slightly lighter shade of dark gray
          "base-300": "#38383b", // Even lighter, medium-dark gray
          "base-content": "#cad2c5", // A muted sage green, offering a soft contrast
          info: "#a8dadc", // A pale, icy blue for informational elements
          success: "#a5a58d", // A soft olive, representing success with subtlety
          warning: "#e9c46a", // A muted gold for warnings, less intense
          error: "#e76f51", // A softer terracotta red for errors
          "--rounded-btn": "9999rem", // Fully rounded buttons for a modern look
          ".tooltip": {
            "--tooltip-tail": "6px", // Tail size for tooltips, unobtrusive
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
