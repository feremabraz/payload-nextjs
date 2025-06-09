/** @type {import('@tailwindcss/postcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/(frontend)/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/(payload)/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        titillium: ["var(--font-titillium-web)"],
      },
      colors: {
        border: "var(--color-border)",
        input: "var(--color-input)",
        ring: "var(--color-ring)",
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "var(--color-secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--color-destructive)",
          foreground: "var(--color-destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--color-muted)",
          foreground: "var(--color-muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--color-popover)",
          foreground: "var(--color-popover-foreground)",
        },
        card: {
          DEFAULT: "var(--color-card)",
          foreground: "var(--color-card-foreground)",
        },
      },
      spacing: {
        hero: "1.9375rem", // 32px
        18: "4.5rem", // 72px
        30: "7.5rem", // 120px
        31: "7.75rem", // 124px
        32.5: "8.125rem", // 130px
        37: "9.25rem", // 148px
        75: "18.75rem", // 300px
        80: "20rem", // 320px
        100: "25rem", // 400px
        125: "31.25rem", // 500px
        150: "37.5rem", // 600px
        162: "40.5rem", // 648px
        250: "62.5rem", // 1000px
        360: "90rem", // 1440px
        437: "109.25rem", // 1748px
        454: "113.5rem", // 1816px
        772: "193rem", // 3088px
      },
      maxWidth: {
        xs: "15.625rem", // 250px
        sm: "18.75rem", // 300px
        md: "21.875rem", // 350px
        lg: "27.3125rem", // 437px
        xl: "34.375rem", // 550px
        "2xl": "40rem", // 640px
        "3xl": "48rem", // 768px
        "4xl": "64rem", // 1024px
        "5xl": "80rem", // 1280px
        "6xl": "83.8125rem", // 1341px
        "7xl": "90rem", // 1440px
        "8xl": "96rem", // 1536px
      },
      height: {
        xs: "5rem", // 80px
        sm: "7.5rem", // 120px
        md: "10.125rem", // 162px
        lg: "31.25rem", // 500px
        xl: "37.5rem", // 600px
        "2xl": "43.75rem", // 700px
        hero: "48.25rem", // 772px
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
