import type { CSSProperties, ReactNode } from "react";
import { Infinity as InfinityIcon, TrendingUp, Zap, KeyRound } from "lucide-react";
import logo from "@/assets/lov3/lov3-logo-sm.webp";
import badge from "@/assets/lov3/lov3-badge.webp";
import { useTilt } from "@/hooks/useTilt";
import { cn } from "@/lib/utils";

/* ─── Moeda 3D (camadas empilhadas = espessura real) ─── */
const Coin3D = ({ size, delay = 0 }: { size: number; delay?: number }) => {
  const depth = Math.max(4, Math.round(size / 9));
  const face =
    "radial-gradient(circle at 34% 28%, #fffbe6 0%, #fde68a 22%, #f5b301 52%, #b7791f 78%, #7a4a0c 100%)";
  return (
    <div className="preserve-3d animate-coin-spin" style={{ width: size, height: size, animationDelay: `${delay}s` }}>
      {Array.from({ length: depth }).map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full"
          style={{ transform: `translateZ(${-i}px)`, background: i % 2 ? "#a86b0f" : "#8a560a" }}
        />
      ))}
      {[0, 1].map((side) => (
        <div
          key={side}
          className="backface-hidden absolute inset-0 flex items-center justify-center rounded-full"
          style={{
            transform: side ? `rotateY(180deg) translateZ(${depth}px)` : "translateZ(1px)",
            background: face,
            boxShadow: "inset 0 0 0 2px rgba(255,255,255,.35), inset 0 -4px 10px rgba(122,74,12,.6)",
          }}
        >
          <div
            className="flex items-center justify-center rounded-full font-heading font-extrabold text-[#7a4a0c]"
            style={{
              width: "72%",
              height: "72%",
              fontSize: size * 0.3,
              border: "2px solid rgba(122,74,12,.35)",
              textShadow: "0 1px 0 rgba(255,255,255,.6)",
            }}
          >
            R$
          </div>
        </div>
      ))}
    </div>
  );
};

/* ─── Chip flutuante (fica "na frente" do cartão em Z) ─── */
const FloatChip = ({ z, className, style, children }: { z: number; className?: string; style?: CSSProperties; children: ReactNode }) => (
  <div className={cn("absolute preserve-3d", className)} style={{ ...style, transform: `translateZ(${z}px)` }}>
    <div
      className="animate-float-y rounded-2xl border border-white/12 bg-[#120821]/90 px-3 py-2 shadow-[0_20px_40px_-12px_rgba(0,0,0,.8),0_0_0_1px_rgba(168,85,247,.15)] md:px-3.5 md:py-2.5"
      style={{ animationDelay: `${z / 60}s` }}
    >
      {children}
    </div>
  </div>
);

/* ─── Cartão-licença LOV3 ─── */
const LicenseCard = () => (
  <div className="relative aspect-[1.586/1] w-full preserve-3d">
    {/* espessura do cartão */}
    {Array.from({ length: 7 }).map((_, i) => (
      <div
        key={i}
        className="absolute inset-0 rounded-[7%/11%]"
        style={{ transform: `translateZ(${-(i + 1) * 1.4}px)`, background: `hsl(276 70% ${26 - i * 2.4}%)` }}
      />
    ))}

    {/* face */}
    <div
      className="absolute inset-0 overflow-hidden rounded-[7%/11%] border border-white/25"
      style={{
        transform: "translateZ(1px)",
        containerType: "inline-size",
        background: "linear-gradient(135deg, #2a0b55 0%, #6419b8 36%, #2a0b4d 64%, #0c0417 100%)",
        boxShadow: "0 40px 80px -20px rgba(120, 30, 220, .55), inset 0 1px 0 rgba(255,255,255,.3)",
      }}
    >
      {/* holográfico — segue o mouse via --mx/--my */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-70 mix-blend-screen"
        style={{
          background:
            "radial-gradient(60% 80% at var(--mx,30%) var(--my,20%), rgba(255,120,255,.45), transparent 60%), conic-gradient(from 200deg at 75% 30%, rgba(0,255,255,0), rgba(0,220,255,.22), rgba(255,0,200,.28), rgba(140,90,255,.2), rgba(0,255,255,0))",
        }}
      />
      {/* textura em grade */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          maskImage: "radial-gradient(80% 70% at 80% 100%, black, transparent)",
          WebkitMaskImage: "radial-gradient(80% 70% at 80% 100%, black, transparent)",
        }}
      />
      {/* reflexo passando */}
      <div aria-hidden className="absolute inset-y-0 left-0 w-1/3 animate-shine bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      <div className="relative flex h-full flex-col justify-between p-[6%]">
        <div className="flex items-start justify-between">
          <img src={logo} alt="LOV3" className="h-[11cqw] w-auto drop-shadow-[0_4px_12px_rgba(168,85,247,.6)]" />
          <span className="rounded-full border border-white/25 bg-white/10 px-2 py-0.5 text-[3.2cqw] font-bold uppercase tracking-[0.16em] text-white">
            30 dias
          </span>
        </div>

        <div className="flex items-center gap-[5%]">
          {/* chip EMV */}
          <div className="relative h-[9.5cqw] w-[13cqw] overflow-hidden rounded-md bg-gradient-to-br from-[#fdf4ff] via-[#e9d5ff] to-[#a855f7] shadow-inner">
            <div className="absolute inset-x-0 top-1/3 h-px bg-[#6b21a8]/40" />
            <div className="absolute inset-x-0 top-2/3 h-px bg-[#6b21a8]/40" />
            <div className="absolute inset-y-0 left-1/2 w-px bg-[#6b21a8]/40" />
          </div>
          <div className="leading-tight">
            <p className="flex items-center gap-1 font-heading text-[5.4cqw] font-bold text-white">
              <InfinityIcon className="h-[1.2em] w-[1.2em] text-fuchsia-300" /> Prompts ilimitados
            </p>
            <p className="text-[2.8cqw] uppercase tracking-[0.2em] text-white/60">Licença mensal</p>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-[4.6cqw] tracking-[0.14em] text-white/90">LOV3-7F3K-9QX2-••••</p>
            <p className="mt-0.5 text-[2.6cqw] uppercase tracking-[0.22em] text-white/50">Chave de ativação</p>
          </div>
          <img src={badge} alt="" className="h-[10cqw] w-auto" />
        </div>
      </div>
    </div>
  </div>
);

/** Cena 3D do hero: cartão-licença + anéis orbitais + moedas + chips com a conta. */
export const LicenseScene = ({ className }: { className?: string }) => {
  const tilt = useTilt<HTMLDivElement>({ max: 12, scope: "window" });

  return (
    <div className={cn("relative mx-auto aspect-[1/0.92] w-full max-w-[560px] [perspective:1400px]", className)}>
      {/* brilho atrás */}
      <div
        aria-hidden
        className="absolute inset-[8%] rounded-full blur-3xl animate-character-aura"
        style={{ background: "radial-gradient(circle, hsl(286 95% 58% / .55), hsl(262 90% 50% / .25) 45%, transparent 70%)" }}
      />

      <div
        ref={tilt}
        className="absolute inset-0 preserve-3d"
        style={{ transform: "rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))" }}
      >
        {/* anéis orbitais */}
        <div className="absolute inset-[3%] preserve-3d">
          <div className="absolute inset-0 rounded-full border border-fuchsia-400/35 animate-ring-spin shadow-[0_0_30px_rgba(217,70,239,.25)]">
            <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-300 shadow-[0_0_14px_4px_rgba(240,171,252,.8)]" />
          </div>
        </div>
        <div className="absolute inset-[12%] preserve-3d">
          <div className="absolute inset-0 rounded-full border border-dashed border-violet-400/30 animate-ring-spin-reverse">
            <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-violet-300 shadow-[0_0_12px_3px_rgba(196,181,253,.8)]" />
          </div>
        </div>

        {/* moedas */}
        <div className="absolute left-[4%] top-[8%] preserve-3d" style={{ transform: "translateZ(-80px)" }}>
          <div className="animate-float-y preserve-3d" style={{ animationDelay: "-1s" }}>
            <Coin3D size={46} delay={-2} />
          </div>
        </div>
        <div className="absolute right-[2%] top-[42%] preserve-3d" style={{ transform: "translateZ(140px)" }}>
          <div className="animate-float-y preserve-3d" style={{ animationDelay: "-3s" }}>
            <Coin3D size={58} />
          </div>
        </div>
        <div className="absolute bottom-[6%] left-[22%] preserve-3d" style={{ transform: "translateZ(40px)" }}>
          <div className="animate-float-y preserve-3d" style={{ animationDelay: "-2s" }}>
            <Coin3D size={34} delay={-1} />
          </div>
        </div>

        {/* cartão */}
        <div className="absolute left-1/2 top-1/2 w-[74%] -translate-x-1/2 -translate-y-1/2 preserve-3d">
          <div className="preserve-3d animate-card-sway">
            <LicenseCard />
          </div>
        </div>

        {/* chips com a conta */}
        <FloatChip z={70} className="left-[5%] top-[14%] md:left-[0%] md:top-[16%]">
          <p className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            <KeyRound className="h-3 w-3 text-violet-300" /> Você paga
          </p>
          <p className="font-heading text-sm font-bold text-white md:text-base">R$ 49,90</p>
        </FloatChip>

        <FloatChip z={110} className="right-[8%] top-[4%] md:right-[2%] md:top-[6%]">
          <p className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            <Zap className="h-3 w-3 text-success" fill="currentColor" /> Pix recebido
          </p>
          <p className="font-heading text-sm font-bold text-white md:text-base">R$ 147,00</p>
        </FloatChip>

        <FloatChip z={150} className="bottom-[10%] right-[10%] md:bottom-[10%] md:right-[4%]">
          <p className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-success/80">
            <TrendingUp className="h-3 w-3" /> Seu lucro
          </p>
          <p className="font-heading text-lg font-extrabold text-gradient-money md:text-2xl">+R$ 97,10</p>
        </FloatChip>
      </div>
    </div>
  );
};
