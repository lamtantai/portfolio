/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "slide-in-down":
          "slide-in-down 1s cubic-bezier(0.33, 1, 0.68, 1) 2s forwards",
      },

      transitionTimingFunction: {
        "ease-in-quint": "cubic-bezier(0.62, 0.05, 0.01, 0.99)",
      },

      keyframes: {
        "slide-in-down": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
      },

      fontFamily: {
        neue: "var(--font-neue)",
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "var(--black)",
        "light-grey": "var(--light-grey)",
      },

      fontSize: {
        "title-xs": "var(--title-xs)",
        "title-sm": "var(--title-sm)",
        "title-base": ["var(--title-base)", { lineHeight: "0.85" }],
        "paragraph-text": "var(--paragraph-text)",
        "paragraph-text-lg": "var(--paragraph-text-lg)",
      },

      lineHeight: {
        tighter: "1.1",
      },

      spacing: {
        "layout-padding": "var(--layout-horizontal-padding)",
        "section-vertical-padding": "var(--section-vertical-padding)",
      },
    },
  },
  plugins: [],
};
