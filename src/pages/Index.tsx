import { lazy, Suspense } from "react";
import { Check, Key, LayoutDashboard, Users, TrendingUp, Star, ArrowRight, ChevronRight, Infinity, Sparkles, BadgeCheck, Crown, Rocket, Lock, ShieldCheck, Headphones, BarChart3, Box, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { RainbowButton } from "@/components/RainbowButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logo from "@/assets/logo.png";
import heroBanner from "@/assets/hero-banner.png.asset.json";
import heroCharacter from "@/assets/hero-character.png";

const SaleNotification = lazy(() => import("@/components/SaleNotification").then(m => ({ default: m.SaleNotification })));

const CTA_URL = "https://pay.cakto.com.br/9vn97pp_807302";

/* ─── Navbar ─── */
const navLinks = [
  { label: "Início", href: "#" },
  { label: "Produtos", href: "#o-que-faz" },
  { label: "Painel", href: "#como-funciona" },
  { label: "Suporte", href: "#recebe" },
  { label: "Revendedores", href: "#depoimentos" },
  { label: "Dúvidas", href: "#faq" },
];

const Navbar = () => (
  <header className="relative z-30 border-b border-primary/10 px-4 py-3 md:px-8 md:py-4">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
      <div className="flex items-center gap-3 md:gap-5">
        <img src={logo} alt="Ilimitado" className="h-7 w-auto object-contain md:h-9" loading="eager" fetchPriority="high" />
        <span className="hidden rounded-lg border border-primary/40 px-3 py-1 text-center text-[10px] font-bold uppercase leading-tight tracking-widest text-primary sm:block">
          LOV 3.1<br />Ilimitado
        </span>
      </div>

      <nav className="hidden items-center gap-7 lg:flex">
        {navLinks.map((l) => (
          <a key={l.label} href={l.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
            {l.label}
          </a>
        ))}
      </nav>

      <a
        href={CTA_URL}
        className="flex items-center gap-2 rounded-xl border border-primary/50 bg-primary/10 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-primary/20 md:px-5 md:py-2.5 md:text-xs"
      >
        <Zap className="h-3.5 w-3.5 text-primary md:h-4 md:w-4" />
        Acesso exclusivo
      </a>
    </div>
  </header>
);

/* ─── Hero ─── */
const heroFeatures = [
  { icon: Box, title: "Produto digital", desc: "fácil de vender" },
  { icon: BarChart3, title: "Margem de", desc: "lucro alta" },
  { icon: ShieldCheck, title: "Painel exclusivo", desc: "para revendedores" },
  { icon: Headphones, title: "Grupo de suporte", desc: "para ajudar nas vendas" },
];

const heroPrices = [
  { label: "Entrada", value: "9,90", desc: "Acesso ao painel + suporte" },
  { label: "Chave", value: "34,90", desc: "Compre por apenas" },
  { label: "Lucro até", value: "147", desc: "Revenda e lucre todos os dias" },
];

const heroTrust = [
  { icon: Lock, title: "Acesso imediato", desc: "Após a confirmação" },
  { icon: Sparkles, title: "100% digital", desc: "Nada físico, tudo online" },
  { icon: ShieldCheck, title: "Pagamento seguro", desc: "Ambiente criptografado" },
  { icon: Infinity, title: "Uso ilimitado", desc: "Revenda sem limites" },
];

const Hero = () => (
  <section className="relative overflow-hidden px-4 pt-8 pb-10 md:px-8 md:pt-12 md:pb-20">
    {/* Banner de fundo */}
    <img
      src={heroBanner.url}
      alt="Painel de revenda da extensão ilimitada"
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-right opacity-60 md:opacity-75"
      loading="eager"
      fetchPriority="high"
    />
    <div className="pointer-events-none absolute inset-0 -z-[5] bg-gradient-to-r from-background via-background/90 to-background/25 md:via-background/80 md:to-background/40" />

    {/* Animated background glows */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-[4] w-[260px] md:w-[900px] h-[220px] md:h-[600px] rounded-full bg-primary/10 blur-[70px] md:blur-[170px] pointer-events-none will-change-transform animate-hero-glow-1" />
    <div className="absolute top-24 left-1/4 -z-[4] w-[140px] md:w-[420px] h-[140px] md:h-[420px] rounded-full bg-[hsl(258_85%_55%/0.08)] blur-[50px] md:blur-[130px] pointer-events-none will-change-transform animate-hero-glow-2" />
    <div className="absolute -top-10 right-1/4 -z-[4] w-[120px] md:w-[340px] h-[120px] md:h-[340px] rounded-full bg-accent/8 blur-[50px] md:blur-[130px] pointer-events-none will-change-transform animate-hero-glow-3" />

    <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
      {/* Left column */}
      <div className="text-center lg:text-left">
        <span className="inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-foreground md:px-4 md:py-2 md:text-xs">
          <Crown className="h-3.5 w-3.5 text-primary md:h-4 md:w-4" />
          Painel de revenda exclusivo
        </span>

        <h1 className="font-heading mt-4 text-[1.7rem] font-extrabold leading-[1.08] tracking-tight sm:text-4xl md:mt-6 md:text-6xl lg:text-[4.1rem] glow-text">
          Seja Revendedor da Extensão Ilimitada e{" "}
          <span className="bg-gradient-to-r from-[hsl(270_100%_72%)] to-[hsl(258_85%_55%)] bg-clip-text text-transparent">
            Lucre Todos os Dias
          </span>
        </h1>

        <p className="mx-auto mt-3.5 max-w-xl text-[0.9rem] leading-relaxed text-muted-foreground md:mt-6 md:text-lg lg:mx-0">
          Com apenas <strong className="text-primary">R$9,90</strong> você recebe acesso ao painel de revenda + grupo de suporte e pode comprar chaves por{" "}
          <strong className="text-primary">R$34,90</strong> para revender por até <strong className="text-primary">R$147</strong>.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:mt-7 md:gap-3">
          {heroFeatures.map((f) => (
            <div key={f.title} className="flex items-center gap-3 rounded-xl border border-primary/15 bg-white/[0.03] p-2.5 text-left backdrop-blur-sm md:p-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 md:h-11 md:w-11">
                <f.icon className="h-4 w-4 text-primary md:h-5 md:w-5" />
              </div>
              <div className="leading-tight">
                <p className="text-[0.8rem] font-semibold text-foreground md:text-[0.95rem]">{f.title}</p>
                <p className="text-[0.72rem] text-muted-foreground md:text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 md:mt-8">
          <a href="#oferta">
            <RainbowButton className="w-full text-[0.85rem] font-heading font-bold uppercase tracking-wide sm:w-auto sm:text-base md:px-10 md:py-5 md:text-lg">
              <Rocket className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Quero me tornar revendedor
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </RainbowButton>
          </a>
          <p className="mt-3 flex items-center justify-center gap-2 text-[0.7rem] font-bold uppercase tracking-widest text-muted-foreground md:text-xs lg:justify-start">
            <Lock className="h-3.5 w-3.5 text-primary" />
            Acesso imediato após a compra
          </p>
        </div>
      </div>

      {/* Coluna direita: personagem sobre o banner */}
      <div className="relative hidden lg:flex items-center justify-center">
        <div className="absolute inset-0 animate-character-aura rounded-full bg-primary/20 blur-[110px]" aria-hidden="true" />
        <img
          src={heroCharacter}
          alt="Personagem do painel de revenda"
          className="relative z-10 w-full max-w-[520px] animate-character-float object-contain drop-shadow-[0_0_60px_hsl(258_85%_55%/0.55)] will-change-transform motion-reduce:animate-none"
          loading="eager"
        />
      </div>
    </div>

    {/* Price steps */}
    <div className="relative mx-auto mt-8 grid max-w-5xl grid-cols-3 gap-2 md:mt-14 md:gap-4">
      {heroPrices.map((p, i) => (
        <div key={p.label} className="relative rounded-xl border border-primary/25 bg-white/[0.03] p-2.5 text-center backdrop-blur-sm md:p-6">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground md:text-xs">{p.label}</p>
          <p className="font-heading mt-1 text-lg font-extrabold text-foreground md:text-4xl">
            <span className="text-[0.6em] text-muted-foreground">R$ </span>
            <span className="text-primary">{p.value}</span>
          </p>
          <p className="mt-1 text-[9px] leading-tight text-muted-foreground md:text-sm">{p.desc}</p>
          {i < 2 && (
            <ChevronRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-primary/50 md:block" />
          )}
        </div>
      ))}
    </div>

    {/* Trust bar */}
    <div className="relative mx-auto mt-4 grid max-w-6xl grid-cols-2 gap-2 rounded-2xl border border-primary/15 bg-white/[0.02] p-3 md:mt-6 md:grid-cols-4 md:gap-4 md:p-5">
      {heroTrust.map((t) => (
        <div key={t.title} className="flex items-center gap-2.5 md:gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 md:h-10 md:w-10">
            <t.icon className="h-4 w-4 text-primary md:h-5 md:w-5" />
          </div>
          <div className="leading-tight">
            <p className="text-[0.68rem] font-bold uppercase tracking-wide text-primary md:text-xs">{t.title}</p>
            <p className="text-[0.66rem] text-muted-foreground md:text-xs">{t.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

/* ─── O Que a Extensão Faz ─── */
const WhatItDoes = () => (
  <section id="o-que-faz" className="px-5 py-12 md:py-28 scroll-mt-20">
    <div className="mx-auto max-w-5xl">
      <ScrollReveal>
        <h2 className="font-heading text-xl sm:text-3xl font-bold text-center md:text-4xl mb-2 md:mb-4">
          O Que a Extensão <span className="text-primary">Faz</span>
        </h2>
        <p className="text-center text-muted-foreground text-[0.8rem] md:text-base mb-8 md:mb-14 max-w-xl mx-auto">
          Veja os benefícios incríveis que seus clientes terão
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6">
        {[
          { icon: Infinity, title: "Prompts Infinitos", desc: "Use prompts ilimitados sem gastar nenhum crédito na Lovable" },
          { icon: Sparkles, title: "Projetos com 0 Créditos", desc: "Crie projetos completos gastando zero créditos" },
          { icon: BadgeCheck, title: "Remover Badge", desc: "Remova a badge da Lovable dos seus projetos facilmente" },
        ].map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 150}>
            <div className="glass-card rounded-xl md:rounded-2xl p-5 md:p-8 text-center hover:border-primary/30 transition-colors h-full">
              <div className="inline-flex h-11 w-11 md:h-14 md:w-14 items-center justify-center rounded-xl md:rounded-2xl bg-primary/10 border border-primary/20 mb-3 md:mb-5">
                <item.icon className="h-5 w-5 md:h-7 md:w-7 text-primary" />
              </div>
              <h3 className="font-heading text-[0.9rem] md:text-xl font-bold mb-1.5 md:mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-[0.78rem] md:text-sm leading-snug">{item.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Compatível com Navegadores ─── */
const browsers = [
  { name: "CHROME", src: "https://www.google.com/chrome/static/images/chrome-logo.svg", alt: "Logotipo do Google Chrome" },
  { name: "EDGE", src: "https://upload.wikimedia.org/wikipedia/commons/9/98/Microsoft_Edge_logo_%282019%29.svg", alt: "Logotipo do Microsoft Edge" },
  { name: "FIREFOX", src: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg", alt: "Logotipo do Mozilla Firefox" },
  { name: "BRAVE", src: "https://cdn.simpleicons.org/brave", alt: "Logotipo do Brave Browser" },
  { name: "OPERA", src: "https://upload.wikimedia.org/wikipedia/commons/4/49/Opera_2015_icon.svg", alt: "Logotipo do Opera Browser" },
  { name: "SAFARI", src: "https://cdn.simpleicons.org/safari", alt: "Logotipo do Apple Safari" },
  { name: "IOS", src: "https://cdn.simpleicons.org/apple/ffffff", alt: "Logotipo do Apple iOS" },
  { name: "ANDROID", src: "https://cdn.simpleicons.org/android/3ddc84", alt: "Logotipo do Android" },
];

const BrowserCompatibility = () => (
  <section
    aria-labelledby="browsers-heading"
    className="relative overflow-hidden border-y border-white/5 bg-[#050505] py-12 sm:py-16"
    style={{ contentVisibility: "auto", containIntrinsicSize: "1px 220px" }}
  >
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

    <div className="relative mx-auto mb-8 max-w-7xl px-4 sm:px-6">
      <div className="flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary/60" />
        <h2 id="browsers-heading" className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-white/60 sm:text-[11px]">
          Compatível com todos os navegadores
        </h2>
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-primary/60" />
      </div>
    </div>

    <div
      className="relative mx-auto max-w-7xl overflow-hidden px-6"
      style={{ maskImage: "linear-gradient(90deg,transparent,black_12%,black_88%,transparent)" }}
    >
      <div className="flex w-max items-center animate-marquee" style={{ animationDuration: "60s" }}>
        {[...Array(4)].map((_, groupIndex) => (
          <div
            key={groupIndex}
            aria-hidden={groupIndex > 0}
            className="flex shrink-0 items-center gap-12 pr-12"
          >
            {browsers.map((b) => (
              <div
                key={`${groupIndex}-${b.name}`}
                className="group flex shrink-0 items-center gap-3 opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:drop-shadow-[0_0_14px_hsl(258_85%_55%/0.65)]"
              >
                <img
                  src={b.src}
                  alt={b.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-6 w-6 object-contain"
                />
                <span className="font-heading text-xl font-bold tracking-tight text-white/90 group-hover:text-white">
                  {b.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Como Funciona ─── */
const HowItWorks = () => (
  <section id="como-funciona" className="px-5 py-12 md:py-28 scroll-mt-20">
    <div className="mx-auto max-w-5xl">
      <ScrollReveal>
        <h2 className="font-heading text-xl sm:text-3xl font-bold text-center md:text-4xl mb-2 md:mb-4">
          Como <span className="text-primary">Funciona</span>
        </h2>
        <p className="text-center text-muted-foreground text-[0.8rem] md:text-base mb-8 md:mb-14 max-w-xl mx-auto">
          3 passos simples para começar a lucrar hoje mesmo
        </p>
      </ScrollReveal>

      <div className="space-y-3 md:space-y-0 md:grid md:grid-cols-3 md:gap-4 mb-8 md:mb-16">
        {[
          { step: "01", title: "Compre o Acesso", desc: "Adquira o painel de revenda por apenas R$9,90", icon: LayoutDashboard },
          { step: "02", title: "Compre Chaves", desc: "Dentro do painel, compre chaves por R$34,90", icon: Key },
          { step: "03", title: "Revenda e Lucre", desc: "Revenda cada chave por até R$147 e fique com todo o lucro", icon: TrendingUp },
        ].map((s, i) => (
          <ScrollReveal key={s.step} delay={i * 150}>
            <div className="relative">
              <div className="glass-card rounded-xl md:rounded-2xl p-4 md:p-8 flex items-center gap-4 md:flex-col md:text-center h-full">
                <div className="flex h-11 w-11 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-xl md:rounded-2xl bg-primary/10 border border-primary/20">
                  <s.icon className="h-5 w-5 md:h-7 md:w-7 text-primary" />
                </div>
                <div className="flex-1 md:flex-none">
                  <span className="block text-[9px] md:text-xs font-bold text-accent tracking-widest uppercase mb-0.5 md:mb-2">Passo {s.step}</span>
                  <h3 className="font-heading text-[0.95rem] md:text-xl font-bold mb-0.5 md:mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-[0.78rem] md:text-sm leading-snug">{s.desc}</p>
                </div>
              </div>
              {i < 2 && (
                <div className="hidden md:flex absolute top-1/2 -right-5 -translate-y-1/2 z-10">
                  <ChevronRight className="h-8 w-8 text-primary/40" />
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="glass rounded-xl md:rounded-2xl p-5 md:p-10">
          <h3 className="font-heading text-lg md:text-2xl font-bold text-center mb-4 md:mb-8">
            Projeção de <span className="text-primary">Lucro</span>
          </h3>
          <div className="grid grid-cols-3 gap-2 md:gap-6">
            {[
              { keys: 5, revenue: "R$475" },
              { keys: 10, revenue: "R$961" },
              { keys: 20, revenue: "R$1.932" },
            ].map((p) => (
              <div key={p.keys} className="glass-card rounded-lg md:rounded-xl p-2.5 md:p-6 text-center">
                <p className="text-[9px] md:text-sm text-muted-foreground mb-0.5 md:mb-1">Venda {p.keys} chaves</p>
                <p className="text-lg sm:text-2xl md:text-4xl font-heading font-extrabold text-primary">{p.revenue}</p>
                <p className="text-[9px] md:text-xs text-muted-foreground mt-0.5 md:mt-1">de lucro líquido</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

/* ─── O que você recebe ─── */
const Benefits = () => (
  <section id="recebe" className="px-5 py-12 md:py-28 scroll-mt-20">
    <div className="mx-auto max-w-5xl">
      <ScrollReveal>
        <h2 className="font-heading text-xl sm:text-3xl font-bold text-center md:text-4xl mb-6 md:mb-14">
          O Que Você <span className="text-primary">Recebe</span>
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 gap-2.5 md:gap-6">
        {[
          { icon: LayoutDashboard, title: "Painel de Revenda Exclusivo", desc: "Gerencie e compre chaves quando quiser" },
          { icon: Key, title: "Chaves de Acesso", desc: "Produto com alto valor percebido" },
          { icon: Users, title: "Grupo de Suporte", desc: "Comunidade + suporte para ajudar nas vendas" },
          { icon: TrendingUp, title: "Produto com Alta Demanda", desc: "Ferramenta útil que vende fácil" },
        ].map((b, i) => (
          <ScrollReveal key={b.title} delay={i * 100}>
            <div className="glass-card rounded-xl md:rounded-2xl p-4 md:p-8 hover:border-primary/30 transition-colors h-full">
              <div className="inline-flex h-9 w-9 md:h-12 md:w-12 items-center justify-center rounded-lg md:rounded-xl bg-primary/10 border border-primary/20 mb-2.5 md:mb-4">
                <b.icon className="h-4 w-4 md:h-6 md:w-6 text-primary" />
              </div>
              <h3 className="font-heading text-[0.8rem] md:text-lg font-bold mb-1 md:mb-2 leading-tight">{b.title}</h3>
              <p className="text-muted-foreground text-[0.72rem] md:text-sm leading-snug">{b.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Para quem é ─── */
const ForWho = () => (
  <section className="px-5 py-12 md:py-28">
    <ScrollReveal>
      <div className="mx-auto max-w-3xl glass rounded-xl md:rounded-2xl p-5 md:p-12">
        <h2 className="font-heading text-xl sm:text-3xl font-bold text-center md:text-4xl mb-5 md:mb-10">
          Para <span className="text-primary">Quem É</span>
        </h2>
        <div className="space-y-2.5 md:space-y-4">
          {[
            "Afiliados que querem um produto de alta margem",
            "Donos de páginas no Instagram",
            "Quem quer renda extra online",
            "Quem trabalha com marketing digital",
            "Quem quer revender produtos digitais",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2.5 md:gap-4">
              <div className="flex h-5 w-5 md:h-7 md:w-7 shrink-0 items-center justify-center rounded-full bg-primary/20">
                <Check className="h-3 w-3 md:h-4 md:w-4 text-primary" />
              </div>
              <span className="text-foreground text-[0.8rem] md:text-lg">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </section>
);

/* ─── Prova Social ─── */
const testimonials = [
  { name: "Lucas M.", text: "Comprei o painel e no primeiro dia já vendi 3 chaves. Já pagou o investimento várias vezes." },
  { name: "Ana P.", text: "Incrível como é fácil vender, a margem é muito alta. Super recomendo!" },
  { name: "Rafael S.", text: "Faço vendas todos os dias. Melhor investimento de R$9,90 que já fiz." },
  { name: "Camila R.", text: "Nunca pensei que revender poderia ser tão simples. O suporte ajuda muito!" },
];

const SocialProof = () => (
  <section id="depoimentos" className="px-5 py-12 md:py-28 scroll-mt-20">
    <div className="mx-auto max-w-5xl">
      <ScrollReveal>
        <h2 className="font-heading text-xl sm:text-3xl font-bold text-center md:text-4xl mb-6 md:mb-14">
          O Que Nossos Revendedores <span className="text-primary">Dizem</span>
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 gap-2.5 md:gap-6">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 100}>
            <div className="glass-card rounded-xl md:rounded-2xl p-3.5 md:p-8 h-full">
              <div className="flex gap-0.5 md:gap-1 mb-2 md:mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 md:h-5 md:w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-foreground mb-2.5 md:mb-4 italic text-[0.72rem] md:text-base leading-snug">"{t.text}"</p>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="h-7 w-7 md:h-10 md:w-10 rounded-full bg-primary/20 flex items-center justify-center text-[10px] md:text-sm font-bold text-primary shrink-0">
                  {t.name[0]}
                </div>
                <span className="font-heading font-semibold text-[0.72rem] md:text-base">{t.name}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Oferta ─── */
const Offer = () => (
  <section id="oferta" className="px-5 py-12 md:py-28 scroll-mt-4">
    <ScrollReveal>
      <div className="mx-auto max-w-2xl text-center glass rounded-2xl md:rounded-3xl p-5 sm:p-10 md:p-16 border border-primary/20">
        <span className="inline-block rounded-full bg-primary/10 border border-primary/30 px-3 md:px-4 py-1 text-[0.7rem] md:text-sm font-semibold text-primary mb-3 md:mb-6">
          Oferta Especial
        </span>
        <h2 className="font-heading text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2.5 md:mb-4">
          Acesso ao Painel de Revenda + Grupo de Suporte
        </h2>
        <div className="my-4 md:my-8">
          <span className="text-base md:text-2xl text-muted-foreground line-through">R$49,90</span>
          <span className="block text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold text-primary mt-1 md:mt-2">R$9,90</span>
          <span className="text-muted-foreground text-[0.7rem] md:text-sm">pagamento único • acesso vitalício</span>
        </div>
        <a href={CTA_URL}>
          <RainbowButton className="w-full sm:w-auto text-[0.8rem] sm:text-base md:text-lg px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 font-heading font-bold">
            Quero garantir meu acesso <ArrowRight className="ml-1.5 md:ml-2 h-4 w-4 md:h-5 md:w-5" />
          </RainbowButton>
        </a>
      </div>
    </ScrollReveal>
  </section>
);

/* ─── FAQ ─── */
const faqItems = [
  { q: "Preciso ter experiência?", a: "Não, qualquer pessoa pode revender. O processo é simples e você conta com suporte no grupo exclusivo." },
  { q: "O acesso ao painel é vitalício?", a: "Sim. Você paga apenas uma vez e tem acesso ao painel para sempre." },
  { q: "Quantas chaves posso vender?", a: "Quantas quiser. Não há limite de vendas." },
  { q: "Recebo suporte?", a: "Sim, você terá acesso ao grupo exclusivo de suporte com dicas de vendas e ajuda técnica." },
];

const FAQ = () => (
  <section id="faq" className="px-5 py-12 md:py-28 scroll-mt-20">
    <div className="mx-auto max-w-3xl">
      <ScrollReveal>
        <h2 className="font-heading text-xl sm:text-3xl font-bold text-center md:text-4xl mb-6 md:mb-14">
          Perguntas <span className="text-primary">Frequentes</span>
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
          {faqItems.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="glass-card rounded-lg md:rounded-xl px-3.5 md:px-6 border-none">
              <AccordionTrigger className="font-heading font-semibold text-left text-[0.8rem] md:text-base hover:no-underline py-3.5 md:py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-[0.78rem] md:text-sm pb-3.5 md:pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </div>
  </section>
);

/* ─── CTA Final ─── */
const FinalCTA = () => (
  <section className="relative px-5 py-12 md:py-28">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
    <ScrollReveal>
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-xl sm:text-3xl font-bold md:text-5xl mb-3 md:mb-6">
          Comece hoje mesmo a revender e{" "}
          <span className="text-primary">lucrar online</span>
        </h2>
        <p className="text-muted-foreground text-[0.85rem] md:text-lg mb-6 md:mb-10 max-w-xl mx-auto">
          Por apenas R$9,90 você acessa o painel, compra chaves e começa a faturar imediatamente.
        </p>
        <a href={CTA_URL}>
          <RainbowButton className="w-full sm:w-auto text-[0.8rem] sm:text-base md:text-lg px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 font-heading font-bold">
            Quero acesso ao painel por R$9,90 <ArrowRight className="ml-1.5 md:ml-2 h-4 w-4 md:h-5 md:w-5" />
          </RainbowButton>
        </a>
      </div>
    </ScrollReveal>
  </section>
);

/* ─── Footer ─── */
const Footer = () => (
  <footer className="border-t border-border px-5 py-5 md:py-8 text-center text-[0.7rem] md:text-sm text-muted-foreground">
    <p>© {new Date().getFullYear()} Extensão Ilimitada. Todos os direitos reservados.</p>
  </footer>
);

/* ─── Page ─── */
const Index = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <Suspense fallback={null}><SaleNotification /></Suspense>
    <Navbar />
    <Hero />
    <BrowserCompatibility />
    <WhatItDoes />
    <HowItWorks />
    <Benefits />
    <ForWho />
    <SocialProof />
    <Offer />
    <FAQ />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
