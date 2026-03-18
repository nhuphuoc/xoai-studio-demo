import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f0f1a",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#00d4ff",
          foreground: "#000000",
        },
        accent: {
          DEFAULT: "#39ff14",
          foreground: "#000000",
        },
        surface: "#1a1a2e",
        card: {
          DEFAULT: "#1a1a2e",
          foreground: "#ffffff",
        },
        border: "#2a2a4a",
      },
      boxShadow: {
        "neon-blue": "0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff",
        "neon-green": "0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14",
        "neon-blue-sm": "0 0 5px #00d4ff, 0 0 10px #00d4ff",
        "neon-green-sm": "0 0 5px #39ff14, 0 0 10px #39ff14",
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "50px 50px",
      },
      animation: {
        "pulse-neon": "pulse-neon 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "slide-up": "slide-up 0.8s ease-out",
        "slide-down": "slide-down 0.8s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "glitch": "glitch 1s linear infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
      keyframes: {
        "pulse-neon": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 10px #00d4ff, 0 0 20px #00d4ff",
            opacity: "1"
          },
          "50%": {
            boxShadow: "0 0 20px #00d4ff, 0 0 40px #00d4ff, 0 0 60px #00d4ff",
            opacity: "0.8"
          },
        },
        "slide-up": {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "glitch": {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
