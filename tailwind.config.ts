import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F6F4EF",
        "bg-elev": "#FBFAF7",
        paper: "#FFFFFF",
        ink: {
          DEFAULT: "#15171A",
          2: "#2C2F33",
        },
        muted: {
          DEFAULT: "#6B6F75",
          2: "#9A9DA3",
        },
        line: {
          DEFAULT: "#E4E1D9",
          2: "#EFECE5",
        },
        accent: {
          DEFAULT: "#1F4A45",
          2: "#2C6660",
          soft: "#DDE5E2",
        },
        warn: "#B95C3F",
      },
      fontFamily: {
        serif: ["Instrument Serif", "Times New Roman", "serif"],
        sans: ["Inter", "-apple-system", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        DEFAULT: "10px",
        lg: "16px",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 0 rgba(20,22,25,0.04), 0 1px 2px rgba(20,22,25,0.04)",
        md: "0 1px 0 rgba(20,22,25,0.04), 0 12px 28px -12px rgba(20,22,25,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
