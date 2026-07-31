import { useEffect, useRef, useState } from "react";

const POOL = 26;
const LIFE = 620; // ms

/** Purple rocket cursor that emits glowing sparks while moving. Desktop / fine-pointer only. */
export const RocketCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const rocketRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const layer = layerRef.current;
    const rocket = rocketRef.current;
    if (!layer || !rocket) return;

    document.documentElement.classList.add("rocket-cursor-active");

    // Pre-allocated spark pool — no React state, no timers, no DOM churn.
    const nodes: HTMLSpanElement[] = [];
    const born = new Float64Array(POOL);
    const px = new Float32Array(POOL);
    const py = new Float32Array(POOL);
    const ps = new Float32Array(POOL);
    for (let i = 0; i < POOL; i++) {
      const el = document.createElement("span");
      el.style.cssText =
        "position:absolute;left:0;top:0;border-radius:9999px;width:6px;height:6px;opacity:0;will-change:transform,opacity;" +
        "background:hsl(272 100% 74%);box-shadow:0 0 8px hsl(270 100% 65% / .9),0 0 16px hsl(270 100% 60% / .6)";
      layer.appendChild(el);
      nodes.push(el);
      born[i] = -Infinity;
    }

    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let next = 0;
    let lastSpark = 0;
    let moving = false;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      moving = true;
    };

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);

      // smooth follow (light easing keeps it fluid without lag)
      rx += (mx - rx) * 0.45;
      ry += (my - ry) * 0.45;
      rocket.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;

      if (moving && now - lastSpark > 34) {
        lastSpark = now;
        moving = false;
        const i = next;
        next = (next + 1) % POOL;
        px[i] = rx - 4 + (Math.random() * 10 - 5);
        py[i] = ry + 4 + (Math.random() * 8 - 4);
        ps[i] = 0.5 + Math.random() * 0.7;
        born[i] = now;
      }

      for (let i = 0; i < POOL; i++) {
        const age = now - born[i];
        const el = nodes[i];
        if (age > LIFE) {
          if (el.style.opacity !== "0") el.style.opacity = "0";
          continue;
        }
        const t = age / LIFE;
        el.style.opacity = String(1 - t);
        el.style.transform = `translate3d(${px[i]}px, ${py[i] + t * 14}px, 0) scale(${ps[i] * (1 - t * 0.8)})`;
      }
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("rocket-cursor-active");
      nodes.forEach((n) => n.remove());
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999]">
      <div ref={layerRef} className="absolute inset-0" />
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