import typographyPlugin from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        background: {
          DEFAULT: "#121212",
        },
        foreground: {
          DEFAULT: "#e0e0e0",
        },
        primary: {
          DEFAULT: "#6366f1",
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-text": "linear-gradient(to right, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "soft-xl": "0 20px 27px 0 rgba(0, 0, 0, 0.05)",
        "soft-md": "0 4px 7px rgba(0, 0, 0, 0.07)",
        "inner-light": "inset 0 1px 1px 0 rgba(139, 92, 246, 0.15)",
        neon: '0 0 5px theme("colors.primary.400"), 0 0 20px theme("colors.primary.700")',
        "glow-indigo": "0 0 15px rgba(99, 102, 241, 0.5)",
        "glow-purple": "0 0 15px rgba(139, 92, 246, 0.5)",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "#e0e0e0",
            a: {
              color: "#818cf8",
              "&:hover": {
                color: "#6366f1",
              },
            },
            h1: {
              color: "#e0e0e0",
            },
            h2: {
              color: "#e0e0e0",
            },
            h3: {
              color: "#e0e0e0",
            },
            h4: {
              color: "#e0e0e0",
            },
            blockquote: {
              borderLeftColor: "#4f46e5",
              color: "#9ca3af",
            },
            strong: {
              color: "#f3f4f6",
            },
            code: {
              color: "#f3f4f6",
              backgroundColor: "#1f2937",
              borderRadius: "0.25rem",
              padding: "0.125rem 0.25rem",
            },
          },
        },
      },
    },
  },
  plugins: [typographyPlugin],
};
