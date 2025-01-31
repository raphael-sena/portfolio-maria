import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: "#ff6b35",
        grey: "#d7dae5",
        brown: "#9d7f71",
        lightBrown: "#c7bbb5",
        gold: "#bfba98",
      },

      fontFamily: {
        liber: ['LiberRegular', 'sans-serif'],
        delicious: ['BeautifullyDelicious', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
