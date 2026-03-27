import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
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
        heading: ['Lexend', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        violet: "hsl(var(--violet))",
        surface: "hsl(var(--surface))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "counter-up": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(258 85% 55% / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(258 85% 55% / 0.5)" },
        },
        "progress-bar": {
          from: { width: "0%" },
          to: { width: "75%" },
        },
        "hero-glow-1": {
          "0%, 100%": { transform: "translateX(-50%) scale(1)", opacity: "0.6" },
          "50%": { transform: "translateX(-45%) scale(1.15)", opacity: "1" },
        },
        "hero-glow-2": {
          "0%, 100%": { transform: "translateY(0) scale(1)", opacity: "0.5" },
          "33%": { transform: "translateY(-20px) scale(1.1)", opacity: "0.8" },
          "66%": { transform: "translateY(10px) scale(0.95)", opacity: "0.6" },
        },
        "hero-glow-3": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.4" },
          "50%": { transform: "translate(30px, 20px) scale(1.2)", opacity: "0.7" },
        },
        "hero-glow-4": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.3" },
          "40%": { transform: "translate(40px, -20px) scale(1.3)", opacity: "0.7" },
          "70%": { transform: "translate(-20px, 10px) scale(0.9)", opacity: "0.5" },
        },
        "hero-glow-5": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.3" },
          "50%": { transform: "translate(-30px, 30px) scale(1.15)", opacity: "0.6" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "counter-up": "counter-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "progress-bar": "progress-bar 1.2s ease-out 1s forwards",
        "hero-glow-1": "hero-glow-1 6s ease-in-out infinite",
        "hero-glow-2": "hero-glow-2 8s ease-in-out infinite",
        "hero-glow-3": "hero-glow-3 7s ease-in-out infinite",
        "hero-glow-4": "hero-glow-4 9s ease-in-out infinite",
        "hero-glow-5": "hero-glow-5 10s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
