import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CtaButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "ghost";
}

const sizes = {
  sm: "h-10 px-4 text-[13px] rounded-xl",
  md: "h-12 px-6 text-[15px] rounded-2xl",
  lg: "h-14 px-7 text-base md:h-[60px] md:px-8 md:text-[17px] rounded-2xl",
};

export const CtaButton = ({ children, size = "lg", variant = "primary", className, ...props }: CtaButtonProps) => (
  <a
    {...props}
    className={cn(
      "group relative inline-flex select-none items-center justify-center gap-2 overflow-hidden whitespace-nowrap font-heading font-semibold tracking-[-0.01em] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      sizes[size],
      variant === "primary"
        ? "bg-[linear-gradient(110deg,#7c3aed_0%,#a21caf_55%,#db2777_100%)] text-white shadow-[0_14px_40px_-12px_rgba(192,38,211,0.85),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-2px_0_rgba(0,0,0,0.25)] hover:shadow-[0_18px_50px_-10px_rgba(192,38,211,1),inset_0_1px_0_rgba(255,255,255,0.4)]"
        : "border border-white/12 bg-white/[0.04] text-foreground hover:border-primary/40 hover:bg-white/[0.07]",
      className,
    )}
  >
    {variant === "primary" && (
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-shine bg-gradient-to-r from-transparent via-white/35 to-transparent"
      />
    )}
    <span className="relative inline-flex items-center gap-2">{children}</span>
  </a>
);
