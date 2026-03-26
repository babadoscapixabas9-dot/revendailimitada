import React from "react";
import { cn } from "@/lib/utils";

interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const RainbowButton = React.forwardRef<HTMLButtonElement, RainbowButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div className="relative inline-flex group w-full sm:w-auto">
        <div
          className="absolute -inset-[2px] rounded-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]"
          style={{
            background: "linear-gradient(90deg, #22c55e, #16a34a, #4ade80, #22c55e, #16a34a)",
            backgroundSize: "300% 100%",
            animation: "rainbow 4s linear infinite",
          }}
        />
        <div
          className="absolute -inset-[1px] rounded-xl"
          style={{
            background: "linear-gradient(90deg, #ff0000, #ff4500, #ff6347, #ff0000, #ff4500)",
            backgroundSize: "300% 100%",
            animation: "rainbow 4s linear infinite",
          }}
        />
        <button
          ref={ref}
          className={cn(
            "relative inline-flex items-center justify-center gap-2 rounded-xl bg-background px-8 py-4 text-foreground font-medium transition-colors",
            className
          )}
          {...props}
        >
          {children}
        </button>
        <style>{`
          @keyframes rainbow {
            0% { background-position: 0% 50%; }
            100% { background-position: 300% 50%; }
          }
        `}</style>
      </div>
    );
  }
);

RainbowButton.displayName = "RainbowButton";
