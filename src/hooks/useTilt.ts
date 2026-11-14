import { useEffect, useRef } from "react";

interface TiltOptions {
  /** graus máximos de inclinação */
  max?: number;
  /** "window": segue o mouse na tela toda · "self": só quando o mouse está sobre o elemento */
  scope?: "self" | "window";
}

const clamp = (v: number) => Math.max(-1, Math.min(1, v));

/**
 * Inclinação 3D suave seguindo o mouse. Escreve as variáveis CSS
 * --rx / --ry (graus) e --mx / --my (0–100%, p/ brilho) no elemento.
 * Desligado em touch e em prefers-reduced-motion.
 */
export const useTilt = <T extends HTMLElement>({ max = 10, scope = "self" }: TiltOptions = {}) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;

    const tick = () => {
      cx += (tx - cx) * 0.085;
      cy += (ty - cy) * 0.085;
      el.style.setProperty("--ry", `${(cx * max).toFixed(2)}deg`);
      el.style.setProperty("--rx", `${(-cy * max).toFixed(2)}deg`);
      el.style.setProperty("--mx", `${(50 + cx * 50).toFixed(1)}%`);
      el.style.setProperty("--my", `${(50 + cy * 50).toFixed(1)}%`);
      raf = Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001 ? requestAnimationFrame(tick) : 0;
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const w = scope === "window" ? window.innerWidth / 2 : r.width / 2;
      const h = scope === "window" ? window.innerHeight / 2 : r.height / 2;
      tx = clamp((e.clientX - (r.left + r.width / 2)) / w);
      ty = clamp((e.clientY - (r.top + r.height / 2)) / h);
      kick();
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
      kick();
    };

    const target: Window | HTMLElement = scope === "window" ? window : el;
    target.addEventListener("pointermove", onMove as EventListener, { passive: true });
    if (scope === "self") el.addEventListener("pointerleave", onLeave);
    else document.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      target.removeEventListener("pointermove", onMove as EventListener);
      el.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [max, scope]);

  return ref;
};
