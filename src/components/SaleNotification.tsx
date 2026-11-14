import { useCallback, useEffect, useRef, useState } from "react";
import { TrendingUp, UserPlus, X, Zap } from "lucide-react";
import badge from "@/assets/lov3/lov3-badge.webp";
import { installAudioUnlock, playJoinSound, playSaleSound } from "@/lib/saleSound";
import { brl, PRICES } from "@/lib/format";

const PEOPLE = [
  ["Lucas", "SP"], ["Mariana", "RJ"], ["Pedro", "MG"], ["Ana", "BA"], ["Carlos", "PR"],
  ["Fernanda", "SC"], ["Juliana", "GO"], ["Rafael", "PE"], ["Camila", "CE"], ["Bruno", "RS"],
  ["Larissa", "DF"], ["Diego", "ES"], ["Patrícia", "PA"], ["Thiago", "AM"], ["Amanda", "SP"],
  ["Felipe", "RJ"], ["Gabriela", "MG"], ["Marcos", "MT"], ["Beatriz", "PB"], ["André", "RN"],
] as const;

const SALE_PRICES = [147, 147, 147, 127, 127, 97];

type Kind = "sale" | "join";

interface Notif {
  id: number;
  kind: Kind;
  name: string;
  uf: string;
  price: number;
  leaving: boolean;
}

const LIFE_MS = 5800;
const MAX_VISIBLE = 2;

let seq = 0;
const pick = <T,>(arr: readonly T[]) => arr[Math.floor(Math.random() * arr.length)];

const makeNotif = (index: number): Notif => {
  const kind: Kind = index === 0 || Math.random() < 0.72 ? "sale" : "join";
  const [name, uf] = pick(PEOPLE);
  return {
    id: ++seq,
    kind,
    name,
    uf,
    price: kind === "sale" ? pick(SALE_PRICES) : PRICES.entrada,
    leaving: false,
  };
};

const NotifCard = ({ n, onClose }: { n: Notif; onClose: (id: number) => void }) => {
  const isSale = n.kind === "sale";
  const lucro = n.price - PRICES.chave;

  return (
    <div
      role="status"
      onClick={() => onClose(n.id)}
      className={`pointer-events-auto relative cursor-pointer overflow-hidden rounded-2xl ring-gradient shadow-[0_24px_60px_-18px_hsl(280_90%_45%/0.75)] transition-all duration-300 ease-out ${
        n.leaving ? "translate-y-2 scale-95 opacity-0" : "animate-notif-in"
      }`}
    >
      {/* brilho interno */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: isSale
            ? "radial-gradient(120% 90% at 0% 0%, hsl(145 72% 50% / 0.14), transparent 55%)"
            : "radial-gradient(120% 90% at 0% 0%, hsl(268 92% 63% / 0.2), transparent 55%)",
        }}
      />

      <div className="relative flex items-center gap-3 px-3.5 py-3">
        <div className="relative shrink-0">
          <span
            aria-hidden
            className={`absolute inset-0 rounded-2xl animate-ping-soft ${isSale ? "bg-success/30" : "bg-primary/30"}`}
          />
          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#2a0f4d] to-[#0d0618]">
            <img src={badge} alt="" className="h-9 w-9" width={36} height={36} />
          </div>
          <span
            className={`absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#0b0614] ${
              isSale ? "bg-success text-success-foreground" : "bg-primary text-white"
            }`}
          >
            {isSale ? <Zap className="h-2.5 w-2.5" fill="currentColor" /> : <UserPlus className="h-2.5 w-2.5" />}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="truncate font-heading text-[13px] font-semibold text-white">
              {isSale ? "Venda aprovada · Pix" : "Novo revendedor LOV3"}
            </p>
            <span className="shrink-0 text-[10px] font-medium text-muted-foreground">agora</span>
          </div>
          <p className="truncate text-[11.5px] text-muted-foreground">
            {isSale ? (
              <>
                {n.name} ({n.uf}) vendeu 1 chave <span className="text-foreground/80">30 dias</span>
              </>
            ) : (
              <>
                {n.name} ({n.uf}) entrou na revenda
              </>
            )}
          </p>
          <div className="mt-1 flex items-center gap-2">
            <span className={`font-heading text-[17px] font-bold leading-none ${isSale ? "text-gradient-money" : "text-white"}`}>
              {brl(n.price)}
            </span>
            {isSale ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-semibold text-success">
                <TrendingUp className="h-3 w-3" />
                lucro {brl(lucro)}
              </span>
            ) : (
              <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary">acesso liberado</span>
            )}
          </div>
        </div>

        <button
          type="button"
          aria-label="Fechar notificação"
          onClick={(e) => {
            e.stopPropagation();
            onClose(n.id);
          }}
          className="absolute right-1.5 top-1.5 hidden rounded-md p-1 text-muted-foreground/60 hover:text-white md:block"
        >
          <X className="h-3 w-3" />
        </button>
      </div>

      {/* barra de tempo */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white/5">
        <div
          className={`h-full origin-left animate-notif-progress ${
            isSale ? "bg-gradient-to-r from-success to-emerald-300" : "bg-gradient-to-r from-primary to-accent"
          }`}
          style={{ animationDuration: `${LIFE_MS}ms` }}
        />
      </div>
    </div>
  );
};

export const SaleNotification = () => {
  const [items, setItems] = useState<Notif[]>([]);
  const live = useRef<number[]>([]);
  const timers = useRef(new Set<number>());

  const later = useCallback((fn: () => void, ms: number) => {
    const t = window.setTimeout(() => {
      timers.current.delete(t);
      fn();
    }, ms);
    timers.current.add(t);
  }, []);

  const dismiss = useCallback(
    (id: number) => {
      if (!live.current.includes(id)) return;
      live.current = live.current.filter((x) => x !== id);
      setItems((p) => p.map((n) => (n.id === id ? { ...n, leaving: true } : n)));
      later(() => setItems((p) => p.filter((n) => n.id !== id)), 320);
    },
    [later],
  );

  useEffect(() => installAudioUnlock(), []);

  useEffect(() => {
    let count = 0;
    const spawn = () => {
      if (document.visibilityState === "visible") {
        const n = makeNotif(count++);
        while (live.current.length >= MAX_VISIBLE) dismiss(live.current[0]);
        live.current.push(n.id);
        setItems((p) => [...p, n]);
        if (n.kind === "sale") playSaleSound();
        else playJoinSound();
        later(() => dismiss(n.id), LIFE_MS);
      }
      later(spawn, 15000 + Math.random() * 15000);
    };
    later(spawn, 4000);

    const pending = timers.current;
    return () => {
      pending.forEach((t) => clearTimeout(t));
      pending.clear();
    };
  }, [dismiss, later]);

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed inset-x-3 top-3 z-[200] flex flex-col-reverse gap-2 md:inset-x-auto md:bottom-6 md:left-6 md:top-auto md:w-[360px] md:flex-col"
    >
      {items.map((n) => (
        <NotifCard key={n.id} n={n} onClose={dismiss} />
      ))}
    </div>
  );
};
