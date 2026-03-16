import { useEffect, useState, useCallback } from "react";
import logo from "@/assets/logo.png";

const NAMES = [
  "João", "Maria", "Pedro", "Ana", "Carlos", "Fernanda", "Lucas", "Juliana",
  "Rafael", "Camila", "Bruno", "Larissa", "Diego", "Patricia", "Thiago",
  "Amanda", "Felipe", "Gabriela", "Marcos", "Beatriz", "André", "Renata",
];

interface Notification {
  id: number;
  name: string;
  visible: boolean;
}

let idCounter = 0;

const playCashSound = () => {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Coin hit sound
    const playTone = (freq: number, startTime: number, duration: number, gain: number) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.connect(g);
      g.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + startTime);
      g.gain.setValueAtTime(gain, ctx.currentTime + startTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + startTime + duration);
      osc.start(ctx.currentTime + startTime);
      osc.stop(ctx.currentTime + startTime + duration);
    };

    // Cash register "cha-ching" 
    playTone(1200, 0, 0.08, 0.15);
    playTone(1800, 0.03, 0.06, 0.12);
    playTone(2400, 0.08, 0.15, 0.18);
    playTone(3200, 0.1, 0.2, 0.12);
    playTone(2000, 0.15, 0.3, 0.08);

    // Metallic ring
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.15, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.03)) * 0.06;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buf;
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 4000;
    filter.Q.value = 8;
    noise.connect(filter);
    filter.connect(ctx.destination);
    noise.start(ctx.currentTime + 0.08);

    setTimeout(() => ctx.close(), 1000);
  } catch (e) {
    // Audio not supported
  }
};

export const SaleNotification = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [userInteracted, setUserInteracted] = useState(false);

  // Track user interaction to enable audio
  useEffect(() => {
    const handler = () => setUserInteracted(true);
    window.addEventListener("click", handler, { once: true });
    window.addEventListener("touchstart", handler, { once: true });
    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, []);

  const playSound = useCallback(() => {
    if (userInteracted) playCashSound();
  }, [userInteracted]);

  useEffect(() => {
    const showPair = () => {
      const n1: Notification = {
        id: ++idCounter,
        name: NAMES[Math.floor(Math.random() * NAMES.length)],
        visible: true,
      };
      const n2: Notification = {
        id: ++idCounter,
        name: NAMES[Math.floor(Math.random() * NAMES.length)],
        visible: true,
      };

      setNotifications((prev) => [...prev, n1]);
      playSound();
      setTimeout(() => {
        setNotifications((prev) => [...prev, n2]);
        playSound();
      }, 800);

      setTimeout(() => {
        setNotifications((prev) =>
          prev.map((n) => (n.id === n1.id ? { ...n, visible: false } : n))
        );
      }, 4000);
      setTimeout(() => {
        setNotifications((prev) =>
          prev.map((n) => (n.id === n2.id ? { ...n, visible: false } : n))
        );
      }, 4800);

      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== n1.id && n.id !== n2.id));
      }, 5500);
    };

    const initialTimeout = setTimeout(showPair, 3000);
    const interval = setInterval(showPair, 5 * 60 * 1000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [playSound]);

  return (
    <div className="fixed top-4 left-4 right-4 md:left-auto md:right-6 md:top-6 z-[200] flex flex-col gap-2 md:w-[340px] pointer-events-none">
      {notifications.map((n) => (
        <div
          key={n.id}
          className={`flex items-center gap-3 rounded-2xl border border-border/40 px-4 py-3 shadow-2xl transition-all duration-500 pointer-events-auto ${
            n.visible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
          style={{
            background: "hsl(0 0% 10% / 0.65)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
            <img src={logo} alt="" className="w-6 h-6 object-contain" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-primary">
              Venda Aprovada! ✅
            </p>
            <p className="text-xs text-muted-foreground">
              Valor: <span className="text-foreground font-medium">R$ 147,00</span>
            </p>
          </div>
          <span className="text-[10px] text-muted-foreground whitespace-nowrap">Agora</span>
        </div>
      ))}
    </div>
  );
};
