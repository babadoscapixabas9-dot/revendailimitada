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
        heading: ['Sora', 'Inter', 'sans-serif'],
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
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
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
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "spark-fade": {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.2) translateY(10px)" },
        },
        "character-float": {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-18px) scale(1.02)" },
        },
        "character-aura": {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.12)" },
        },
        "card-sway": {
          "0%, 100%": { transform: "translateY(0) rotateY(-16deg) rotateX(8deg)" },
          "50%": { transform: "translateY(-14px) rotateY(16deg) rotateX(4deg)" },
        },
        "ring-spin": {
          from: { transform: "rotateX(74deg) rotateZ(0deg)" },
          to: { transform: "rotateX(74deg) rotateZ(360deg)" },
        },
        "ring-spin-reverse": {
          from: { transform: "rotateX(70deg) rotateY(14deg) rotateZ(360deg)" },
          to: { transform: "rotateX(70deg) rotateY(14deg) rotateZ(0deg)" },
        },
        "grid-move": {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "0 56px" },
        },
        "float-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shine: {
          "0%": { transform: "translateX(-120%) skewX(-20deg)" },
          "60%, 100%": { transform: "translateX(220%) skewX(-20deg)" },
        },
        "notif-in": {
          "0%": { opacity: "0", transform: "translateY(16px) scale(0.92)" },
          "60%": { opacity: "1", transform: "translateY(-3px) scale(1.01)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "notif-progress": {
          from: { transform: "scaleX(1)" },
          to: { transform: "scaleX(0)" },
        },
        "ping-soft": {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        "orb-drift": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(4%, -6%, 0) scale(1.08)" },
        },
        "coin-spin": {
          from: { transform: "rotateY(0deg) rotateX(12deg)" },
          to: { transform: "rotateY(360deg) rotateX(12deg)" },
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
        marquee: "marquee 60s linear infinite",
        "spark-fade": "spark-fade 0.75s ease-out forwards",
        "character-float": "character-float 6s ease-in-out infinite",
        "character-aura": "character-aura 4s ease-in-out infinite",
        "card-sway": "card-sway 9s ease-in-out infinite",
        "ring-spin": "ring-spin 18s linear infinite",
        "ring-spin-reverse": "ring-spin-reverse 26s linear infinite",
        "grid-move": "grid-move 2.4s linear infinite",
        "float-y": "float-y 5s ease-in-out infinite",
        shine: "shine 3.6s ease-in-out infinite",
        "notif-in": "notif-in 0.55s cubic-bezier(.2,.9,.3,1.2) both",
        "notif-progress": "notif-progress linear forwards",
        "ping-soft": "ping-soft 1.6s cubic-bezier(0,0,.2,1) infinite",
        "orb-drift": "orb-drift 14s ease-in-out infinite",
        "coin-spin": "coin-spin 5s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
