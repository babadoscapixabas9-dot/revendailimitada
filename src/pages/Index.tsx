import { lazy, Suspense } from "react";
import { Check, Key, LayoutDashboard, Users, TrendingUp, Star, ArrowRight, ChevronRight, Infinity, Sparkles, BadgeCheck } from "lucide-react";
import { RainbowButton } from "@/components/RainbowButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logo from "@/assets/logo.png";

const SaleNotification = lazy(() => import("@/components/SaleNotification").then(m => ({ default: m.SaleNotification })));

const CTA_URL = "https://pay.cakto.com.br/9vn97pp_807302";

/* ─── Hero ─── */
const Hero = () => (
  <section className="relative overflow-hidden px-5 pt-12 pb-10 md:pt-32 md:pb-24">
    {/* Background warm glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[350px] md:h-[600px] rounded-full bg-primary/8 blur-[100px] md:blur-[160px] pointer-events-none" />
    <div className="absolute top-20 left-1/3 w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-[hsl(16_90%_50%/0.06)] blur-[60px] md:blur-[120px] pointer-events-none" />

    <div className="relative mx-auto max-w-5xl text-center">
      <img src={logo} alt="Ilimitado" className="h-8 md:h-14 w-auto mx-auto mb-5 md:mb-8 object-contain" loading="eager" fetchPriority="high" />

      <h1 className="font-heading text-[1.55rem] leading-[1.15] font-extrabold tracking-tight sm:text-4xl md:text-6xl lg:text-7xl glow-text mb-3.5 md:mb-6">
        Seja Revendedor da Extensão Ilimitada e{" "}
        <span className="text-primary">Lucre Todos os Dias</span>
      </h1>

      <p className="mx-auto max-w-2xl text-[0.9rem] leading-relaxed md:text-xl text-muted-foreground mb-5 md:mb-8">
        Com apenas <strong className="text-foreground">R$19,90</strong> você recebe acesso ao painel de revenda + grupo de suporte e pode comprar chaves vitalícias por{" "}
        <strong className="text-foreground">R$39,90</strong> para revender por até{" "}
        <strong className="text-primary">R$147</strong>.
      </p>

      <div className="mx-auto max-w-sm text-left space-y-2 md:space-y-3 mb-6 md:mb-10">
        {[
          "Produto digital fácil de vender",
          "Margem de lucro alta",
          "Painel exclusivo para revendedores",
          "Grupo de suporte para ajudar nas vendas",
        ].map((item) => (
          <div key={item} className="flex items-center gap-2.5 md:gap-3">
            <div className="flex h-5 w-5 md:h-6 md:w-6 shrink-0 items-center justify-center rounded-full bg-primary/20">
              <Check className="h-3 w-3 md:h-4 md:w-4 text-primary" />
            </div>
            <span className="text-foreground text-[0.8rem] md:text-base">{item}</span>
          </div>
        ))}
      </div>

      <a href="#oferta">
        <RainbowButton className="w-full sm:w-auto text-[0.8rem] sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 font-heading font-bold">
          Quero me tornar revendedor <ArrowRight className="ml-1.5 md:ml-2 h-4 w-4 md:h-5 md:w-5" />
        </RainbowButton>
      </a>

      {/* Dashboard mockup */}
      <div className="mt-8 md:mt-16 mx-auto max-w-3xl glass rounded-xl md:rounded-2xl p-3.5 md:p-8 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
        <div className="grid grid-cols-3 gap-1.5 md:gap-4 mb-3 md:mb-6">
          {[
            { label: "Chaves Ativas", value: "24", delay: "0.5s" },
            { label: "Receita Total", value: "R$3.528", delay: "0.7s" },
            { label: "Lucro Líquido", value: "R$2.570", delay: "0.9s" },
          ].map((s) => (
            <div key={s.label} className="glass-card rounded-lg md:rounded-xl p-2 md:p-4 text-center animate-counter-up opacity-0" style={{ animationDelay: s.delay, animationFillMode: 'forwards' }}>
              <p className="text-[9px] md:text-sm text-muted-foreground leading-tight">{s.label}</p>
              <p className="text-sm md:text-2xl font-heading font-bold text-primary mt-0.5 md:mt-1">{s.value}</p>
            </div>
          ))}
        </div>
        <div className="h-1.5 md:h-2 w-full rounded-full bg-border overflow-hidden">
          <div
            className="h-full rounded-full animate-progress-bar"
            style={{
              background: "linear-gradient(90deg, #ff0000, #ff4500, #ff6347, #ff0000, #ff4500)",
              backgroundSize: "300% 100%",
              animation: "progress-bar 1.2s ease-out 1s forwards, rainbow 4s linear 2.2s infinite",
            }}
          />
        </div>
        <p className="text-[9px] md:text-xs text-muted-foreground mt-1.5 md:mt-2 text-right animate-fade-in opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>75% da meta mensal</p>
      </div>
    </div>
  </section>
);

/* ─── O Que a Extensão Faz ─── */
const WhatItDoes = () => (
  <section className="px-5 py-12 md:py-28">
    <div className="mx-auto max-w-5xl">
      <h2 className="font-heading text-xl sm:text-3xl font-bold text-center md:text-4xl mb-2 md:mb-4">
        O Que a Extensão <span className="text-primary">Faz</span>
      </h2>
      <p className="text-center text-muted-foreground text-[0.8rem] md:text-base mb-8 md:mb-14 max-w-xl mx-auto">
        Veja os benefícios incríveis que seus clientes terão
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6">
        {[
          { icon: Infinity, title: "Prompts Infinitos", desc: "Use prompts ilimitados sem gastar nenhum crédito na Lovable" },
          { icon: Sparkles, title: "Projetos com 0 Créditos", desc: "Crie projetos completos gastando zero créditos" },
          { icon: BadgeCheck, title: "Remover Badge", desc: "Remova a badge da Lovable dos seus projetos facilmente" },
        ].map((item) => (
          <div key={item.title} className="glass-card rounded-xl md:rounded-2xl p-5 md:p-8 text-center hover:border-primary/30 transition-colors">
            <div className="inline-flex h-11 w-11 md:h-14 md:w-14 items-center justify-center rounded-xl md:rounded-2xl bg-primary/10 border border-primary/20 mb-3 md:mb-5">
              <item.icon className="h-5 w-5 md:h-7 md:w-7 text-primary" />
            </div>
            <h3 className="font-heading text-[0.9rem] md:text-xl font-bold mb-1.5 md:mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-[0.78rem] md:text-sm leading-snug">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Como Funciona ─── */
const HowItWorks = () => (
  <section className="px-5 py-12 md:py-28">
    <div className="mx-auto max-w-5xl">
      <h2 className="font-heading text-xl sm:text-3xl font-bold text-center md:text-4xl mb-2 md:mb-4">
        Como <span className="text-primary">Funciona</span>
      </h2>
      <p className="text-center text-muted-foreground text-[0.8rem] md:text-base mb-8 md:mb-14 max-w-xl mx-auto">
        3 passos simples para começar a lucrar hoje mesmo
      </p>

      <div className="space-y-3 md:space-y-0 md:grid md:grid-cols-3 md:gap-4 mb-8 md:mb-16">
        {[
          { step: "01", title: "Compre o Acesso", desc: "Adquira o painel de revenda por apenas R$19,90", icon: LayoutDashboard },
          { step: "02", title: "Compre Chaves", desc: "Dentro do painel, compre chaves vitalícias por R$39,90", icon: Key },
          { step: "03", title: "Revenda e Lucre", desc: "Revenda cada chave por até R$147 e fique com todo o lucro", icon: TrendingUp },
        ].map((s, i) => (
          <div key={s.step} className="relative">
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
        ))}
      </div>

      {/* Projeção de lucro */}
      <div className="glass rounded-xl md:rounded-2xl p-5 md:p-10">
        <h3 className="font-heading text-lg md:text-2xl font-bold text-center mb-4 md:mb-8">
          Projeção de <span className="text-primary">Lucro</span>
        </h3>
        <div className="grid grid-cols-3 gap-2 md:gap-6">
          {[
            { keys: 5, revenue: "R$735" },
            { keys: 10, revenue: "R$1.470" },
            { keys: 20, revenue: "R$2.940" },
          ].map((p) => (
            <div key={p.keys} className="glass-card rounded-lg md:rounded-xl p-2.5 md:p-6 text-center">
              <p className="text-[9px] md:text-sm text-muted-foreground mb-0.5 md:mb-1">Venda {p.keys} chaves</p>
              <p className="text-lg sm:text-2xl md:text-4xl font-heading font-extrabold text-primary">{p.revenue}</p>
              <p className="text-[9px] md:text-xs text-muted-foreground mt-0.5 md:mt-1">de receita bruta</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── O que você recebe ─── */
const Benefits = () => (
  <section className="px-5 py-12 md:py-28">
    <div className="mx-auto max-w-5xl">
      <h2 className="font-heading text-xl sm:text-3xl font-bold text-center md:text-4xl mb-6 md:mb-14">
        O Que Você <span className="text-primary">Recebe</span>
      </h2>

      <div className="grid grid-cols-2 gap-2.5 md:gap-6">
        {[
          { icon: LayoutDashboard, title: "Painel de Revenda Exclusivo", desc: "Gerencie e compre chaves quando quiser" },
          { icon: Key, title: "Chaves Vitalícias", desc: "Produto com alto valor percebido" },
          { icon: Users, title: "Grupo de Suporte", desc: "Comunidade + suporte para ajudar nas vendas" },
          { icon: TrendingUp, title: "Produto com Alta Demanda", desc: "Ferramenta útil que vende fácil" },
        ].map((b) => (
          <div key={b.title} className="glass-card rounded-xl md:rounded-2xl p-4 md:p-8 hover:border-primary/30 transition-colors">
            <div className="inline-flex h-9 w-9 md:h-12 md:w-12 items-center justify-center rounded-lg md:rounded-xl bg-primary/10 border border-primary/20 mb-2.5 md:mb-4">
              <b.icon className="h-4 w-4 md:h-6 md:w-6 text-primary" />
            </div>
            <h3 className="font-heading text-[0.8rem] md:text-lg font-bold mb-1 md:mb-2 leading-tight">{b.title}</h3>
            <p className="text-muted-foreground text-[0.72rem] md:text-sm leading-snug">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Para quem é ─── */
const ForWho = () => (
  <section className="px-5 py-12 md:py-28">
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
  </section>
);

/* ─── Prova Social ─── */
const testimonials = [
  { name: "Lucas M.", text: "Comprei o painel e no primeiro dia já vendi 3 chaves. Já pagou o investimento várias vezes." },
  { name: "Ana P.", text: "Incrível como é fácil vender, a margem é muito alta. Super recomendo!" },
  { name: "Rafael S.", text: "Faço vendas todos os dias. Melhor investimento de R$19,90 que já fiz." },
  { name: "Camila R.", text: "Nunca pensei que revender poderia ser tão simples. O suporte ajuda muito!" },
];

const SocialProof = () => (
  <section className="px-5 py-12 md:py-28">
    <div className="mx-auto max-w-5xl">
      <h2 className="font-heading text-xl sm:text-3xl font-bold text-center md:text-4xl mb-6 md:mb-14">
        O Que Nossos Revendedores <span className="text-primary">Dizem</span>
      </h2>

      <div className="grid grid-cols-2 gap-2.5 md:gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="glass-card rounded-xl md:rounded-2xl p-3.5 md:p-8">
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
        ))}
      </div>
    </div>
  </section>
);

/* ─── Oferta ─── */
const Offer = () => (
  <section id="oferta" className="px-5 py-12 md:py-28 scroll-mt-4">
    <div className="mx-auto max-w-2xl text-center glass rounded-2xl md:rounded-3xl p-5 sm:p-10 md:p-16 border border-primary/20">
      <span className="inline-block rounded-full bg-primary/10 border border-primary/30 px-3 md:px-4 py-1 text-[0.7rem] md:text-sm font-semibold text-primary mb-3 md:mb-6">
        Oferta Especial
      </span>
      <h2 className="font-heading text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2.5 md:mb-4">
        Acesso ao Painel de Revenda + Grupo de Suporte
      </h2>
      <div className="my-4 md:my-8">
        <span className="text-base md:text-2xl text-muted-foreground line-through">R$49,90</span>
        <span className="block text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold text-primary mt-1 md:mt-2">R$19,90</span>
        <span className="text-muted-foreground text-[0.7rem] md:text-sm">pagamento único • acesso vitalício</span>
      </div>
      <a href={CTA_URL}>
        <RainbowButton className="w-full sm:w-auto text-[0.8rem] sm:text-base md:text-lg px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 font-heading font-bold">
          Quero garantir meu acesso <ArrowRight className="ml-1.5 md:ml-2 h-4 w-4 md:h-5 md:w-5" />
        </RainbowButton>
      </a>
    </div>
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
  <section className="px-5 py-12 md:py-28">
    <div className="mx-auto max-w-3xl">
      <h2 className="font-heading text-xl sm:text-3xl font-bold text-center md:text-4xl mb-6 md:mb-14">
        Perguntas <span className="text-primary">Frequentes</span>
      </h2>
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
    </div>
  </section>
);

/* ─── CTA Final ─── */
const FinalCTA = () => (
  <section className="relative px-5 py-12 md:py-28">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
    <div className="relative mx-auto max-w-3xl text-center">
      <h2 className="font-heading text-xl sm:text-3xl font-bold md:text-5xl mb-3 md:mb-6">
        Comece hoje mesmo a revender e{" "}
        <span className="text-primary">lucrar online</span>
      </h2>
      <p className="text-muted-foreground text-[0.85rem] md:text-lg mb-6 md:mb-10 max-w-xl mx-auto">
        Por apenas R$19,90 você acessa o painel, compra chaves e começa a faturar imediatamente., compra chaves e começa a faturar imediatamente.
      </p>
      <a href={CTA_URL}>
        <RainbowButton className="w-full sm:w-auto text-[0.8rem] sm:text-base md:text-lg px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 font-heading font-bold">
          Quero acesso ao painel por R$19,90 <ArrowRight className="ml-1.5 md:ml-2 h-4 w-4 md:h-5 md:w-5" /> <ArrowRight className="ml-1.5 md:ml-2 h-4 w-4 md:h-5 md:w-5" />
        </RainbowButton>
      </a>
    </div>
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
    <Hero />
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
