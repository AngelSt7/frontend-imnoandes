import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";
import { customColors } from "./tailwind/colors";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/react/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        xs: "500px",
        mdx: "700px",
        xmd: "900px"
      },
      colors: customColors,
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" }
        }
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"], 
        poppins: ["var(--font-poppins)", "sans-serif"], 
      },
      animation: {
        "caret-blink": "caret-blink 1.2s ease-out infinite"
      }
    }
  },
  plugins: [heroui()]
};

export default config;
