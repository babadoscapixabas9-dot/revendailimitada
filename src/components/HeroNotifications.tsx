import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const TOTAL = 6;

interface NotifItem {
  id: number;
  visible: boolean;
  time: string;
}

const TIMES = ["Agora", "1 min", "3 min", "5 min", "8 min", "12 min"];

let counter = 0;

export const HeroNotifications = () => {
  const [items, setItems] = useState<NotifItem[]>([]);

  useEffect(() => {
    // Add one by one
    const timers: ReturnType<typeof setTimeout>[] = [];

    for (let i = 0; i < TOTAL; i++) {
      timers.push(
        setTimeout(() => {
          setItems((prev) => [
            ...prev,
            { id: ++counter, visible: true, time: TIMES[i] },
          ]);
        }, 1000 + i * 600)
      );
    }

    // Remove one by one after all appeared
    const startRemove = 1000 + TOTAL * 600 + 2000;
    for (let i = 0; i < TOTAL; i++) {
      timers.push(
        setTimeout(() => {
          setItems((prev) => {
            const copy = [...prev];
            if (copy[i]) copy[i] = { ...copy[i], visible: false };
            return copy;
          });
        }, startRemove + i * 500)
      );
    }

    // Clean up and restart
    const totalDuration = startRemove + TOTAL * 500 + 800;
    timers.push(
      setTimeout(() => {
        setItems([]);
      }, totalDuration)
    );

    // Loop
    const interval = setInterval(() => {
      setItems([]);
      for (let i = 0; i < TOTAL; i++) {
        timers.push(
          setTimeout(() => {
            setItems((prev) => [
              ...prev,
              { id: ++counter, visible: true, time: TIMES[i] },
            ]);
          }, i * 600)
        );
      }
      const sr = TOTAL * 600 + 2000;
      for (let i = 0; i < TOTAL; i++) {
        timers.push(
          setTimeout(() => {
            setItems((prev) => {
              const copy = [...prev];
              if (copy[i]) copy[i] = { ...copy[i], visible: false };
              return copy;
            });
          }, sr + i * 500)
        );
      }
      timers.push(
        setTimeout(() => setItems([]), sr + TOTAL * 500 + 800)
      );
    }, totalDuration + 1000);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="hidden lg:block absolute right-[-120px] xl:right-[-80px] top-[140px] w-[250px] pointer-events-none"
      style={{ perspective: "900px" }}
    >
      <div
        style={{
          transform: "rotateY(-18deg) rotateX(6deg) rotateZ(-2deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {items.map((n, i) => (
          <div
            key={n.id}
            className="flex items-center gap-2 rounded-xl border border-border/30 px-3 py-2 mb-2 shadow-lg"
            style={{
              background: "hsl(0 0% 10% / 0.5)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              transform: `translateZ(${(5 - i) * 3}px) translateX(${n.visible ? 0 : 120}px)`,
              opacity: n.visible ? 1 : 0,
              transition: "transform 0.5s ease, opacity 0.5s ease",
            }}
          >
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
              <img src={logo} alt="" className="w-4 h-4 object-contain" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-semibold text-primary leading-tight">
                Venda Aprovada! ✅
              </p>
              <p className="text-[9px] text-muted-foreground">
                Valor: <span className="text-foreground font-medium">R$ 147,00</span>
              </p>
            </div>
            <span className="text-[8px] text-muted-foreground whitespace-nowrap">{n.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
