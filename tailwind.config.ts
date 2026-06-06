import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        panel: "rgba(255,255,255,0.04)",
      },
      boxShadow: {
        glow: "0 20px 80px rgba(139,92,246,0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
