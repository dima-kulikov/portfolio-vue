/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "540px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#5c62ec",
        secondary: "#3c3e85",
        accent: "#facc15",

        dark: "#171718",
        darkLight: "#555555",
        black70: "rgba(0,0,0,0.7)",
        black80: "rgba(0,0,0,0.8)",

        light: "#ffffff",
        lightGray: "#f9fafb",

        gray400: "#9ca3af",
        gray500: "#6b7280",
      },
      backgroundImage: {
        banner: "url('assets/images/banner-bg.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      boxShadow: {
        purple:
          "0 4px 8px rgba(99,102,241,0.4), 0 6px 12px rgba(99,102,241,0.25)",
        dark: "0 1px 4px rgba(23,23,24,0.25)",
        light: "0 1px 4px rgba(255,255,255,0.05)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "blink-2": {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        "spin-slow": {
          "0%": {
            transform: "translate(-50%, -50%) rotate(0deg)",
          },
          "100%": {
            transform: "translate(-50%, -50%) rotate(360deg)",
          },
        },
        "rotate-banner": {
          "0%": {
            transform: "translate(-50%, -50%) rotate(0deg)",
          },
          "100%": {
            transform: "translate(-50%, -50%) rotate(360deg)",
          },
        },
        "rotate-banner-2": {
          "0%": {
            transform: "translate(-50%, -50%) rotate(180deg)",
          },
          "100%": {
            transform: "translate(-50%, -50%) rotate(540deg)",
          },
        },
      },
      animation: {
        blink: "blink 5s ease-in-out infinite",
        "spin-slow": "spin-slow 10s linear infinite",
        "blink-2": "blink-2 5s ease-in-out infinite",
        "rotate-banner": "rotate-banner 22s linear infinite",
        "rotate-banner-2": "rotate-banner-2 22s linear infinite",
      },
    },
  },
  plugins: [],
};
