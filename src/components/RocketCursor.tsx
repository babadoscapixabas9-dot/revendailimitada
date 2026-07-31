import { useEffect, useRef, useState } from "react";

type Spark = { id: number; x: number; y: number; size: number; hue: number };

/** Purple rocket cursor that emits glowing sparks while moving. Desktop / fine-pointer only. */
export const RocketCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [sparks, setSparks] = useState<Spark[]>([]);
  const rocketRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const raf = useRef<number>();
  const lastSpark = useRef(0);
  const sparkId = useRef(0);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const render = () => {
      if (rocketRef.current) {
        rocketRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      raf.current = requestAnimationFrame(render);
    };
    raf.current = requestAnimationFrame(render);

    const onMove = (e: PointerEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      const now = performance.now();
      if (now - lastSpark.current > 28) {
        lastSpark.current = now;
        const id = ++sparkId.current;
        const spark: Spark = {
          id,
          x: e.clientX - 6 + (Math.random() * 12 - 6),
          y: e.clientY + 4 + (Math.random() * 10 - 4),
          size: 2 + Math.random() * 4,
          hue: 265 + Math.random() * 25,
        };
        setSparks((prev) => [...prev.slice(-28), spark]);
        window.setTimeout(() => {
          setSparks((prev) => prev.filter((s) => s.id !== id));
        }, 750);
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.classList.add("rocket-cursor-active");
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.classList.remove("rocket-cursor-active");
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999]">
      {sparks.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full animate-spark-fade"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            background: `hsl(${s.hue} 100% 72%)`,
            boxShadow: `0 0 8px hsl(${s.hue} 100% 65% / 0.9), 0 0 16px hsl(${s.hue} 100% 60% / 0.6)`,
          }}
        />
      ))}
      <div ref={rocketRef} className="absolute left-0 top-0 will-change-transform">
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          className="-translate-x-1 -translate-y-1 -rotate-[40deg] drop-shadow-[0_0_10px_hsl(265_100%_65%/0.9)]"
        >
          <path
            d="M12 1.5c3.4 2.6 5.2 6.4 5.2 10.4l-2.6 3.1H9.4l-2.6-3.1C6.8 7.9 8.6 4.1 12 1.5Z"
            fill="hsl(268 90% 62%)"
            stroke="hsl(275 100% 80%)"
            strokeWidth="1.1"
          />
          <circle cx="12" cy="9.4" r="2" fill="hsl(280 100% 88%)" />
          <path d="M6.8 11.4 3.6 15.4l3.2-.6Z" fill="hsl(272 85% 55%)" />
          <path d="M17.2 11.4l3.2 4-3.2-.6Z" fill="hsl(272 85% 55%)" />
          <path d="M9.6 15.2h4.8l-2.4 5.4Z" fill="hsl(285 100% 75%)" />
        </svg>
      </div>
    </div>
  );
};