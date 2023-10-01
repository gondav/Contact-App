import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGrey: {
          10: "#414141",
          20: "#3C3C3C ",
          30: "#373737",
          40: "#323232",
          50: "#2D2D2D",
          60: "#282828",
          70: "#232323",
          80: "#1E1E1E",
          90: "#191919",
          100: "#141414",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
