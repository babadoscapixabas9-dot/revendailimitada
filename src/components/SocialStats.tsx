import { useEffect, useRef, useState } from "react";
import { Users, Key, TrendingUp, ShieldCheck } from "lucide-react";

const useCountUp = (end: number, duration = 2000) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { value, ref };
};

export const SocialStats = () => {
  const resellers = useCountUp(1247, 2500);
  const keys = useCountUp(8431, 2500);
  const revenue = useCountUp(980, 2500);

  return (
    <section className="px-5 py-8 md:py-14 border-y border-border/50">
      <div className="mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
        <div ref={resellers.ref}>
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <Users className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            <span className="text-xl md:text-3xl font-heading font-extrabold text-foreground tabular-nums">
              {resellers.value.toLocaleString("pt-BR")}+
            </span>
          </div>
          <p className="text-[0.65rem] md:text-sm text-muted-foreground">Revendedores Ativos</p>
        </div>
        <div ref={keys.ref}>
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <Key className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            <span className="text-xl md:text-3xl font-heading font-extrabold text-foreground tabular-nums">
              {keys.value.toLocaleString("pt-BR")}+
            </span>
          </div>
          <p className="text-[0.65rem] md:text-sm text-muted-foreground">Chaves Vendidas</p>
        </div>
        <div ref={revenue.ref}>
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            <span className="text-xl md:text-3xl font-heading font-extrabold text-foreground tabular-nums">
              R${revenue.value}K+
            </span>
          </div>
          <p className="text-[0.65rem] md:text-sm text-muted-foreground">Gerados por Revendedores</p>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            <span className="text-xl md:text-3xl font-heading font-extrabold text-foreground">4.9</span>
            <span className="text-primary text-sm">★</span>
          </div>
          <p className="text-[0.65rem] md:text-sm text-muted-foreground">Avaliação dos Revendedores</p>
        </div>
      </div>
    </section>
  );
};
