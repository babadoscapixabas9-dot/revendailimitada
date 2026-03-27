import { useState, useEffect } from "react";
import { Flame, Users } from "lucide-react";

export const UrgencyBanner = () => {
  const [viewers, setViewers] = useState(47);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers((v) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = v + delta;
        return Math.max(31, Math.min(89, next));
      });
    }, 3000 + Math.random() * 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-primary/90 backdrop-blur-sm border-b border-primary/30 px-4 py-2 text-center">
      <p className="text-primary-foreground text-[0.7rem] md:text-sm font-medium flex items-center justify-center gap-2 flex-wrap">
        <Flame className="h-3.5 w-3.5 md:h-4 md:w-4 animate-pulse" />
        <span className="font-bold">OFERTA POR TEMPO LIMITADO</span>
        <span className="hidden sm:inline">•</span>
        <span className="flex items-center gap-1">
          <Users className="h-3 w-3 md:h-3.5 md:w-3.5" />
          <span className="tabular-nums font-bold">{viewers}</span> pessoas vendo agora
        </span>
      </p>
    </div>
  );
};
