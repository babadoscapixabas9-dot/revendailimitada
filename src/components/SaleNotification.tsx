import { useEffect, useState } from "react";
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

export const SaleNotification = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

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
      setTimeout(() => setNotifications((prev) => [...prev, n2]), 800);

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
  }, []);

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
            background: "hsl(0 0% 10% / 0.35)",
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
