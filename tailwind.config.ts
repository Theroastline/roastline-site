import type { Config } from "tailwindcss";

// Roastline brand palette — mirrors RoastlineApp Theme.swift + the roaster portal
// so the marketing site, web portal, and iOS app read as one product
// (transit-map metaphor, warm coffee tones).
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: "#3C1F13", // Dark Roast — darkest surfaces / primary text
        coffee: "#634C42", // Espresso Bean — primary brown
        terracotta: "#B75934", // Burnt Caramel — accent / CTA
        sky: "#89BAD3", // Cold Brew Blue — secondary
        tan: "#AD8B7C", // Oat Milk — muted
        cream: "#F5EEE3", // app background
        card: "#FFFFFF", // card surface
        ink: "#3C1F13", // primary text
        inksoft: "#8A7164", // secondary text
        hairline: "#E8DDCF", // dividers
        success: "#3E7C5A",
        danger: "#B23B2E",
      },
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        sans: ["var(--font-satoshi)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        brand: "16px",
        "brand-lg": "24px",
      },
      boxShadow: {
        card: "0 4px 10px rgba(0,0,0,0.05)",
        lift: "0 18px 40px -18px rgba(60,31,19,0.35)",
      },
      maxWidth: {
        site: "1120px",
      },
    },
  },
  plugins: [],
};
export default config;
