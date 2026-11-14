import { lazy, Suspense, useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Chrome,
  Clock,
  Headphones,
  Infinity as InfinityIcon,
  KeyRound,
  LayoutDashboard,
  Lock,
  Play,
  Rocket,
  Sparkles,
  Store,
  TrendingUp,
  Zap,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SoundToggle } from "@/components/SoundToggle";
import { CtaButton } from "@/components/lov3/CtaButton";
import { LicenseScene } from "@/components/lov3/LicenseScene";
import { ExtensionShowcase } from "@/components/lov3/ExtensionShowcase";
import { ProfitCalculator } from "@/components/lov3/ProfitCalculator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTilt } from "@/hooks/useTilt";
import { brl, CTA_URL, LUCRO_MAX, PRICES } from "@/lib/format";
import logo from "@/assets/lov3/lov3-logo-sm.webp";
import badge from "@/assets/lov3/lov3-badge.webp";
import produto from "@/assets/lov3/lov3-produto.webp";

const SaleNotification = lazy(() =>
  import("@/components/SaleNotification").then((m) => ({ default: m.SaleNotification })),
);

/* ─── Peças reutilizáveis ─── */
const Eyebrow = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.08] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-200">
    {children}
  </span>
);

const SectionTitle = ({ eyebrow, title, sub }: { eyebrow: string; title: ReactNode; sub?: string }) => (
  <ScrollReveal className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 className="mt-4 font-heading text-[1.9rem] font-bold leading-[1.08] text-white sm:text-4xl md:text-5xl">{title}</h2>
    {sub && <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:text-lg">{sub}</p>}
  </ScrollReveal>
);

/* ─── Navbar ─── */
const navLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "A extensão", href: "#extensao" },
  { label: "Lucro", href: "#lucro" },
  { label: "Dúvidas", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/[0.06] bg-background/75 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:h-[72px] md:px-6">
        <a href="#top" className="flex items-center gap-2.5" aria-label="LOV3 Revenda — início">
          <img src={logo} alt="LOV3" className="h-7 w-auto md:h-8" width={96} height={33} />
          <span className="hidden rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:inline">
            Revenda
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/70 transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <SoundToggle />
          <CtaButton href="#oferta" size="sm">
            <span className="sm:hidden">Revender</span>
            <span className="hidden sm:inline">Quero revender</span>
          </CtaButton>
        </div>
      </div>
    </header>
  );
};

/* ─── Hero ─── */
const Hero = () => (
  <section id="top" className="relative overflow-hidden pb-14 pt-24 md:pb-24 md:pt-32">
    {/* fundo */}
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -left-[20%] -top-[30%] h-[70vh] w-[70vw] rounded-full bg-[radial-gradient(circle,hsl(262_90%_45%/.35),transparent_65%)] blur-2xl animate-orb-drift" />
      <div className="absolute -right-[15%] top-[5%] h-[60vh] w-[55vw] rounded-full bg-[radial-gradient(circle,hsl(300_90%_50%/.22),transparent_65%)] blur-2xl animate-orb-drift [animation-delay:-6s]" />
      <div className="absolute inset-x-[-40%] bottom-0 h-[48%] grid-floor animate-grid-move opacity-50" />
      <div className="absolute inset-x-0 bottom-[48%] h-px bg-gradient-to-r from-transparent via-fuchsia-400/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      <div className="absolute inset-0 noise opacity-[0.035]" />
    </div>

    <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 md:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
      <div className="text-center lg:text-left">
        <div className="animate-fade-in">
          <Eyebrow>
            <img src={badge} alt="" className="h-4 w-4" width={16} height={16} />
            Seja revendedor LOV3
          </Eyebrow>
        </div>

        <h1
          className="mt-5 animate-fade-in font-heading text-[2.55rem] font-bold leading-[1.02] text-white opacity-0 [animation-delay:80ms] sm:text-6xl lg:text-[3.6rem] xl:text-[4.3rem]"
        >
          Compre por <span className="text-gradient">R$&nbsp;49,90</span>.
          <br />
          Revenda por <span className="text-gradient-money">R$&nbsp;147</span>.
        </h1>

        <p className="mx-auto mt-5 max-w-xl animate-fade-in text-[15px] leading-relaxed text-muted-foreground opacity-0 [animation-delay:160ms] md:text-lg lg:mx-0">
          Entre na revenda por <strong className="font-semibold text-white">R$ 9,90</strong> e venda a extensão LOV3 —
          chave mensal de 30 dias com <strong className="font-semibold text-white">prompts ilimitados</strong> no Lovable.
          Até <strong className="font-semibold text-success">{brl(LUCRO_MAX)} de lucro</strong> em cada venda.
        </p>

        <div className="mt-8 flex animate-fade-in flex-col items-stretch gap-3 opacity-0 [animation-delay:240ms] sm:flex-row sm:items-center sm:justify-center lg:justify-start">
          <CtaButton href="#oferta">
            <Rocket className="h-5 w-5" />
            Quero ser revendedor · R$ 9,90
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </CtaButton>
          <CtaButton href="#como-funciona" variant="ghost">
            <Play className="h-4 w-4" fill="currentColor" />
            Ver como funciona
          </CtaButton>
        </div>

        <ul className="mt-6 flex animate-fade-in flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-muted-foreground opacity-0 [animation-delay:320ms] lg:justify-start">
          {["Acesso imediato", "Pagamento único", "Grupo de suporte"].map((t) => (
            <li key={t} className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-success" /> {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-4 lg:mt-0">
        <LicenseScene className="max-w-[420px] sm:max-w-[540px]" />
      </div>
    </div>
  </section>
);

/* ─── Como funciona (a conta) ─── */
const steps = [
  {
    n: "01",
    icon: LayoutDashboard,
    label: "Entrada",
    price: brl(PRICES.entrada),
    title: "Entre na revenda",
    desc: "Pagamento único. Acesso imediato ao painel de revenda e ao grupo de suporte.",
  },
  {
    n: "02",
    icon: KeyRound,
    label: "Você paga",
    price: brl(PRICES.chave),
    title: "Compre a chave",
    desc: "Chave mensal LOV3: 30 dias com prompts ilimitados. Compre só quando vender.",
  },
  {
    n: "03",
    icon: TrendingUp,
    label: "Você vende",
    price: `até ${brl(PRICES.revendaMax)}`,
    title: "Revenda e lucre",
    desc: "Você define o preço. O cliente instala pela Chrome Web Store e ativa com a chave.",
    highlight: true,
  },
];

const HowItWorks = () => {
  const custoPct = (PRICES.chave / PRICES.revendaMax) * 100;
  return (
    <section id="como-funciona" className="relative scroll-mt-20 px-4 py-16 md:px-6 md:py-24">
      <SectionTitle
        eyebrow="Como funciona"
        title={
          <>
            A conta é <span className="text-gradient">simples</span>.
          </>
        }
        sub="Três passos. Sem estoque, sem produto físico, sem complicação."
      />

      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3 md:gap-5">
        {steps.map((s, i) => (
          <ScrollReveal key={s.n} delay={i * 120}>
            <div
              className={`group relative h-full overflow-hidden rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 md:p-7 ${
                s.highlight ? "ring-gradient shadow-[0_30px_60px_-30px_rgba(34,197,94,.45)]" : "glass-card"
              }`}
            >
              <span className="pointer-events-none absolute -right-2 -top-6 font-heading text-[7rem] font-extrabold leading-none text-white/[0.03]">
                {s.n}
              </span>
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/25 to-fuchsia-500/10 ring-1 ring-inset ring-white/10">
                  <s.icon className="h-5 w-5 text-violet-200" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Passo {s.n}</span>
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{s.label}</p>
              <p
                className={`mt-1 font-heading text-3xl font-bold tabular-nums md:text-[2.1rem] ${
                  s.highlight ? "text-gradient-money" : "text-white"
                }`}
              >
                {s.price}
              </p>
              <h3 className="mt-4 font-heading text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* barra de margem */}
      <ScrollReveal className="mx-auto mt-6 max-w-6xl">
        <div className="glass-card rounded-3xl p-5 md:p-7">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <p className="text-sm text-muted-foreground">
              Em cada chave vendida por <span className="font-semibold text-white">{brl(PRICES.revendaMax)}</span>
            </p>
            <p className="font-heading text-xl font-bold text-white md:text-2xl">
              Seu lucro: <span className="text-gradient-money">{brl(LUCRO_MAX)}</span>
              <span className="ml-2 align-middle text-sm font-medium text-success">
                ({Math.round(100 - custoPct)}% de margem)
              </span>
            </p>
          </div>
          <div className="mt-4 flex h-4 overflow-hidden rounded-full bg-white/5 md:h-5">
            <div className="h-full bg-gradient-to-r from-violet-600 to-violet-400" style={{ width: `${custoPct}%` }} />
            <div className="h-full flex-1 bg-gradient-to-r from-emerald-500 to-green-300 shadow-[0_0_20px_rgba(34,197,94,.5)]" />
          </div>
          <div className="mt-2.5 flex justify-between text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-violet-400" /> Custo da chave {brl(PRICES.chave)}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-green-400" /> Seu lucro {brl(LUCRO_MAX)}
            </span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

/* ─── A extensão ─── */
const features = [
  { icon: InfinityIcon, title: "Prompts ilimitados", desc: "Seu cliente cria no Lovable sem gastar créditos." },
  { icon: Clock, title: "Chave de 30 dias", desc: "Licença mensal — cliente satisfeito renova todo mês." },
  { icon: Chrome, title: "Chrome Web Store", desc: "Extensão publicada na loja oficial. Instala em 1 minuto." },
  { icon: Sparkles, title: "Painel dentro do Lovable", desc: "Chat lateral LOV3 direto no editor, sem trocar de aba." },
];

const Extension = () => (
  <section id="extensao" className="relative scroll-mt-20 overflow-hidden px-4 py-16 md:px-6 md:py-24">
    <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,hsl(270_90%_45%/.22),transparent_65%)] blur-2xl" />

    <SectionTitle
      eyebrow="O que você vende"
      title={
        <>
          Um produto que <span className="text-gradient">vende sozinho</span>.
        </>
      }
      sub="Todo mundo que usa o Lovable quer prompts ilimitados. Você entrega a chave, a LOV3 faz o resto."
    />

    <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
      <ScrollReveal>
        <ExtensionShowcase />
      </ScrollReveal>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 90}>
            <div className="flex h-full items-start gap-4 rounded-2xl glass-card p-4 md:p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-[0_10px_24px_-8px_rgba(192,38,211,.7)]">
                <f.icon className="h-5 w-5 text-white" />
              </span>
              <div>
                <h3 className="font-heading text-base font-semibold text-white">{f.title}</h3>
                <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Calculadora ─── */
const Profit = () => (
  <section id="lucro" className="relative scroll-mt-20 px-4 py-16 md:px-6 md:py-24">
    <SectionTitle
      eyebrow="Simulador de lucro"
      title={
        <>
          Quanto você quer <span className="text-gradient-money">lucrar</span>?
        </>
      }
      sub="Arraste e veja quanto sobra no seu bolso todo mês."
    />
    <ScrollReveal className="mx-auto max-w-5xl">
      <ProfitCalculator />
    </ScrollReveal>
  </section>
);

/* ─── Oferta ─── */
const included = [
  { icon: LayoutDashboard, text: "Painel de revenda exclusivo" },
  { icon: KeyRound, text: `Chaves mensais por ${brl(PRICES.chave)} (30 dias · prompts ilimitados)` },
  { icon: TrendingUp, text: `Revenda por até ${brl(PRICES.revendaMax)} — o lucro é todo seu` },
  { icon: Headphones, text: "Grupo de suporte + materiais de venda" },
  { icon: Zap, text: "Acesso liberado na hora, após o pagamento" },
];

const ProductCard3D = () => {
  const tilt = useTilt<HTMLDivElement>({ max: 10, scope: "self" });
  return (
    <div ref={tilt} className="relative mx-auto w-full max-w-[420px] [perspective:1200px]">
      <div
        aria-hidden
        className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle,hsl(286_95%_58%/.55),transparent_70%)] blur-3xl"
      />
      <div
        className="relative preserve-3d"
        style={{ transform: "rotateY(calc(10deg + var(--ry,0deg))) rotateX(calc(4deg + var(--rx,0deg)))" }}
      >
        <div className="relative overflow-hidden rounded-[28px] border border-white/15 shadow-[0_50px_100px_-30px_rgba(124,58,237,.8)]">
          <img
            src={produto}
            alt="Chave da extensão LOV3 — 30 dias"
            className="block w-full"
            width={596}
            height={596}
            loading="lazy"
            decoding="async"
          />
          {/* reflexo */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 mix-blend-overlay"
            style={{ background: "radial-gradient(50% 60% at var(--mx,30%) var(--my,20%), rgba(255,255,255,.35), transparent 70%)" }}
          />
          {/* selo por cima do selo antigo */}
          <span className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg">
            Chave mensal
          </span>
        </div>

        <div className="absolute -bottom-5 left-[2%] preserve-3d md:-left-8" style={{ transform: "translateZ(80px)" }}>
          <div className="animate-float-y rounded-2xl border border-white/12 bg-[#120821]/95 px-3.5 py-2.5 shadow-[0_24px_50px_-12px_rgba(0,0,0,.9)]">
            <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Pra você</p>
            <p className="font-heading text-lg font-bold text-white">{brl(PRICES.chave)}</p>
          </div>
        </div>
        <div className="absolute right-[4%] top-[40%] preserve-3d md:-right-8" style={{ transform: "translateZ(120px)" }}>
          <div className="animate-float-y rounded-2xl border border-success/30 bg-[#08140d]/95 px-3.5 py-2.5 shadow-[0_24px_50px_-12px_rgba(0,0,0,.9)] [animation-delay:-2s]">
            <p className="text-[10px] font-medium uppercase tracking-wider text-success/80">Pro cliente</p>
            <p className="font-heading text-lg font-bold text-gradient-money">{brl(PRICES.revendaMax)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Offer = () => (
  <section id="oferta" className="relative scroll-mt-16 px-4 py-16 md:px-6 md:py-24">
    <ScrollReveal className="mx-auto max-w-6xl">
      <div className="relative overflow-hidden rounded-[32px] ring-gradient">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-violet-600/25 blur-3xl" />
          <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
          <div className="absolute inset-0 noise opacity-[0.04]" />
        </div>

        <div className="relative grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-[0.9fr_1fr] lg:gap-14 lg:p-14">
          <ProductCard3D />

          <div>
            <Eyebrow>
              <Store className="h-3.5 w-3.5" /> Programa de revenda
            </Eyebrow>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-[1.08] text-white md:text-[2.6rem]">
              Tudo pra você vender a LOV3 <span className="text-gradient">hoje</span>.
            </h2>

            <ul className="mt-6 space-y-3">
              {included.map((it) => (
                <li key={it.text} className="flex items-start gap-3 text-[15px] text-foreground/90">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/15">
                    <Check className="h-3.5 w-3.5 text-success" strokeWidth={3} />
                  </span>
                  {it.text}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-end gap-x-4 gap-y-1">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Entrada na revenda</p>
                <p className="font-heading text-6xl font-extrabold leading-none text-white md:text-7xl">
                  <span className="mr-1 align-top text-2xl font-bold text-muted-foreground md:text-3xl">R$</span>9,90
                </p>
              </div>
              <p className="pb-1.5 text-sm text-muted-foreground">pagamento único</p>
            </div>

            <CtaButton href={CTA_URL} className="mt-7 w-full sm:w-auto">
              Quero ser revendedor LOV3
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </CtaButton>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Lock className="h-3.5 w-3.5 text-violet-300" /> Pagamento seguro
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-violet-300" /> Acesso imediato
              </span>
              <span className="flex items-center gap-1.5">
                <Headphones className="h-3.5 w-3.5 text-violet-300" /> Suporte no grupo
              </span>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  </section>
);

/* ─── FAQ ─── */
const faqItems = [
  {
    q: "Quanto custa pra começar?",
    a: `${brl(PRICES.entrada)}, pagamento único. Você recebe acesso ao painel de revenda e ao grupo de suporte na hora.`,
  },
  {
    q: "Quanto eu pago em cada chave?",
    a: `${brl(PRICES.chave)} por chave mensal LOV3 — 30 dias de acesso com prompts ilimitados. Você compra no painel, só quando for vender.`,
  },
  {
    q: "Por quanto posso revender?",
    a: `Você define o preço. Vendendo por ${brl(PRICES.revendaMax)}, seu lucro é de ${brl(LUCRO_MAX)} em cada chave.`,
  },
  {
    q: "Como meu cliente recebe e usa?",
    a: "Você entrega a chave de ativação. O cliente instala a extensão LOV3 pela Chrome Web Store, ativa com a chave e já usa dentro do Lovable.",
  },
  {
    q: "Preciso de experiência pra vender?",
    a: "Não. O processo é simples e no grupo de suporte você recebe ajuda e materiais pra divulgar.",
  },
  {
    q: "Tem limite de vendas?",
    a: "Não. Compre e revenda quantas chaves quiser.",
  },
];

const FAQ = () => (
  <section id="faq" className="scroll-mt-20 px-4 py-16 md:px-6 md:py-24">
    <SectionTitle
      eyebrow="Dúvidas"
      title={
        <>
          Perguntas <span className="text-gradient">frequentes</span>
        </>
      }
    />
    <ScrollReveal className="mx-auto max-w-3xl">
      <Accordion type="single" collapsible className="space-y-3">
        {faqItems.map((f, i) => (
          <AccordionItem
            key={f.q}
            value={`faq-${i}`}
            className="rounded-2xl border-none glass-card px-5 transition-colors data-[state=open]:bg-white/[0.04] md:px-6"
          >
            <AccordionTrigger className="py-5 text-left font-heading text-[15px] font-semibold text-white hover:no-underline md:text-base">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground md:text-[15px]">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </ScrollReveal>
  </section>
);

/* ─── CTA final ─── */
const FinalCTA = () => (
  <section className="relative overflow-hidden px-4 pb-28 pt-12 md:px-6 md:pb-24 md:pt-16">
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-x-[-40%] bottom-0 h-[55%] grid-floor animate-grid-move opacity-40" />
      <div className="absolute left-1/2 top-1/3 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,hsl(286_90%_50%/.3),transparent_65%)] blur-2xl" />
    </div>
    <ScrollReveal className="mx-auto max-w-3xl text-center">
      <img
        src={logo}
        alt="LOV3"
        className="mx-auto h-16 w-auto animate-float-y drop-shadow-[0_20px_40px_rgba(168,85,247,.6)] md:h-24"
        width={280}
        height={96}
        loading="lazy"
      />
      <h2 className="mt-8 font-heading text-[2rem] font-bold leading-[1.08] text-white sm:text-5xl">
        Uma venda paga seu acesso <span className="text-gradient-money">quase 10x</span>.
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-[15px] text-muted-foreground md:text-lg">
        Entra por {brl(PRICES.entrada)}, vende uma chave e já lucra {brl(LUCRO_MAX)}. O resto é lucro.
      </p>
      <CtaButton href={CTA_URL} className="mt-8 w-full sm:w-auto">
        <BadgeCheck className="h-5 w-5" />
        Começar agora por R$ 9,90
      </CtaButton>
    </ScrollReveal>
  </section>
);

/* ─── Barra fixa mobile ─── */
const MobileStickyCta = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const offer = document.getElementById("oferta");
    let offerVisible = false;
    const update = () => setShow(window.scrollY > 640 && !offerVisible);
    const io = offer
      ? new IntersectionObserver(([e]) => {
          offerVisible = e.isIntersecting;
          update();
        })
      : null;
    if (offer && io) io.observe(offer);
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      io?.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-background/85 px-4 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-3 backdrop-blur-xl transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="leading-tight">
          <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Entrada</p>
          <p className="font-heading text-xl font-bold text-white">R$ 9,90</p>
        </div>
        <CtaButton href={CTA_URL} size="md" className="flex-1">
          Quero revender <ArrowRight className="h-4 w-4" />
        </CtaButton>
      </div>
    </div>
  );
};

/* ─── Footer ─── */
const Footer = () => (
  <footer className="border-t border-white/[0.06] px-4 py-8 pb-28 md:px-6 md:pb-8">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-xs text-muted-foreground md:flex-row md:text-left">
      <img src={logo} alt="LOV3" className="h-6 w-auto opacity-80" width={70} height={24} loading="lazy" />
      <p>© {new Date().getFullYear()} LOV3 Revenda. Todos os direitos reservados.</p>
    </div>
  </footer>
);

/* ─── Página ─── */
const Index = () => (
  <div className="min-h-screen overflow-x-clip bg-background">
    <Suspense fallback={null}>
      <SaleNotification />
    </Suspense>
    <Navbar />
    <main>
      <Hero />
      <HowItWorks />
      <Extension />
      <Profit />
      <Offer />
      <FAQ />
      <FinalCTA />
    </main>
    <Footer />
    <MobileStickyCta />
  </div>
);

export default Index;
