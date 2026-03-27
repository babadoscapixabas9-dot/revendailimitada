import { lazy, Suspense } from "react";
import { Check, Key, LayoutDashboard, Users, TrendingUp, Star, ArrowRight, ChevronRight, Infinity, Sparkles, BadgeCheck, Zap, Clock, ShieldCheck } from "lucide-react";
import { RainbowButton } from "@/components/RainbowButton";
import { UrgencyBanner } from "@/components/UrgencyBanner";
import { SocialStats } from "@/components/SocialStats";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Guarantee } from "@/components/Guarantee";
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
  <section className="relative overflow-hidden px-5 pt-10 pb-8 md:pt-28 md:pb-24">
    {/* Animated background glows */}
    <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[300px] md:w-[900px] h-[250px] md:h-[700px] rounded-full bg-primary/15 blur-[80px] md:blur-[180px] pointer-events-none will-change-transform animate-hero-glow-1" />
    <div className="absolute top-[10%] left-[20%] w-[180px] md:w-[500px] h-[180px] md:h-[500px] rounded-full bg-[hsl(258_85%_55%/0.12)] blur-[60px] md:blur-[140px] pointer-events-none will-change-transform animate-hero-glow-2" />
    <div className="absolute -top-[5%] right-[15%] w-[150px] md:w-[400px] h-[150px] md:h-[400px] rounded-full bg-accent/10 blur-[60px] md:blur-[140px] pointer-events-none will-change-transform animate-hero-glow-3" />
    <div className="absolute top-[40%] left-[10%] w-[100px] md:w-[300px] h-[100px] md:h-[300px] rounded-full bg-[hsl(270_100%_65%/0.08)] blur-[50px] md:blur-[120px] pointer-events-none will-change-transform animate-hero-glow-4" />
    <div className="absolute top-[30%] right-[10%] w-[120px] md:w-[350px] h-[120px] md:h-[350px] rounded-full bg-primary/8 blur-[50px] md:blur-[130px] pointer-events-none will-change-transform animate-hero-glow-5" />

    <div className="relative mx-auto max-w-5xl text-center">
      <img src={logo} alt="Ilimitado" className="h-8 md:h-14 w-auto mx-auto mb-4 md:mb-8 object-contain" loading="eager" fetchPriority="high" />

      {/* Social proof badge */}
      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/30 px-3 md:px-4 py-1.5 mb-4 md:mb-6 animate-fade-in">
        <div className="flex -space-x-1.5">
          {["L", "A", "R", "C"].map((l, i) => (
            <div key={i} className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-primary/30 border-2 border-background flex items-center justify-center text-[8px] md:text-[10px] font-bold text-primary">
              {l}
            </div>
          ))}
        </div>
        <span className="text-[0.65rem] md:text-xs text-primary font-semibold">+1.200 revendedores ativos</span>
      </div>

      <h1 className="font-heading text-[1.55rem] leading-[1.12] font-extrabold tracking-tight sm:text-4xl md:text-6xl lg:text-7xl glow-text mb-3 md:mb-6">
        Transforme <span className="text-primary">R$9,90</span> em uma{" "}
        <span className="text-primary">Máquina de Lucro</span> Online
      </h1>

      <p className="mx-auto max-w-2xl text-[0.88rem] leading-relaxed md:text-xl text-muted-foreground mb-5 md:mb-8">
        Compre chaves vitalícias por <strong className="text-foreground">R$49,90</strong> e revenda por até{" "}
        <strong className="text-primary font-extrabold">R$147</strong> — <span className="text-foreground font-semibold">margem de até 194% de lucro</span> em cada venda.
      </p>

      <div className="mx-auto max-w-sm text-left space-y-2 md:space-y-3 mb-6 md:mb-10">
        {[
          "Comece a lucrar ainda hoje",
          "Margem de até 194% por chave vendida",
          "Sem estoque, sem entrega, 100% digital",
          "Suporte completo no grupo exclusivo",
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
          Quero começar a lucrar agora <ArrowRight className="ml-1.5 md:ml-2 h-4 w-4 md:h-5 md:w-5" />
        </RainbowButton>
      </a>

      {/* Trust badges under CTA */}
      <div className="flex items-center justify-center gap-4 md:gap-6 mt-4 md:mt-6 text-muted-foreground">
        {[
          { icon: ShieldCheck, text: "Compra segura" },
          { icon: Zap, text: "Acesso imediato" },
          { icon: Clock, text: "Garantia 7 dias" },
        ].map((b) => (
          <div key={b.text} className="flex items-center gap-1 md:gap-1.5">
            <b.icon className="h-3 w-3 md:h-4 md:w-4 text-primary/60" />
            <span className="text-[0.6rem] md:text-xs">{b.text}</span>
          </div>
        ))}
      </div>

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
              background: "linear-gradient(90deg, #7c3aed, #8b5cf6, #a855f7, #7c3aed, #8b5cf6)",
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
        Por Que Seus Clientes Vão <span className="text-primary">Amar</span>
      </h2>
      <p className="text-center text-muted-foreground text-[0.8rem] md:text-base mb-8 md:mb-14 max-w-xl mx-auto">
        Produto com altíssimo valor percebido — praticamente se vende sozinho
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
        Tão Simples Que Parece <span className="text-primary">Mentira</span>
      </h2>
      <p className="text-center text-muted-foreground text-[0.8rem] md:text-base mb-8 md:mb-14 max-w-xl mx-auto">
        3 passos e você já está lucrando — sem complicação
      </p>

      <div className="space-y-3 md:space-y-0 md:grid md:grid-cols-3 md:gap-4 mb-8 md:mb-16">
        {[
          { step: "01", title: "Compre o Acesso", desc: "Adquira o painel de revenda por apenas R$9,90 — investimento ridículo", icon: LayoutDashboard },
          { step: "02", title: "Compre Chaves", desc: "Dentro do painel, compre chaves vitalícias por R$49,90 cada", icon: Key },
          { step: "03", title: "Revenda e Lucre", desc: "Revenda cada chave por até R$147 e fique com TODO o lucro", icon: TrendingUp },
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
        <h3 className="font-heading text-lg md:text-2xl font-bold text-center mb-1 md:mb-2">
          Projeção de <span className="text-primary">Lucro Real</span>
        </h3>
        <p className="text-center text-muted-foreground text-[0.7rem] md:text-sm mb-4 md:mb-8">
          Quanto você pode ganhar vendendo chaves
        </p>
        <div className="grid grid-cols-3 gap-2 md:gap-6">
          {[
            { keys: 5, revenue: "R$475", label: "por semana" },
            { keys: 10, revenue: "R$961", label: "por semana" },
            { keys: 20, revenue: "R$1.932", label: "por semana" },
          ].map((p) => (
            <div key={p.keys} className="glass-card rounded-lg md:rounded-xl p-2.5 md:p-6 text-center">
              <p className="text-[9px] md:text-sm text-muted-foreground mb-0.5 md:mb-1">Venda {p.keys} chaves</p>
              <p className="text-lg sm:text-2xl md:text-4xl font-heading font-extrabold text-primary">{p.revenue}</p>
              <p className="text-[9px] md:text-xs text-muted-foreground mt-0.5 md:mt-1">de lucro líquido</p>
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
        Tudo Que Você <span className="text-primary">Recebe</span> Agora
      </h2>

      <div className="grid grid-cols-2 gap-2.5 md:gap-6">
        {[
          { icon: LayoutDashboard, title: "Painel de Revenda Exclusivo", desc: "Gerencie e compre chaves quando quiser, 24h por dia" },
          { icon: Key, title: "Chaves Vitalícias", desc: "Produto com alto valor percebido — seus clientes pagam felizes" },
          { icon: Users, title: "Grupo de Suporte VIP", desc: "Comunidade + suporte + dicas para você vender mais" },
          { icon: TrendingUp, title: "Produto com Alta Demanda", desc: "A Lovable está crescendo — demanda só aumenta" },
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
        Isso Foi Feito <span className="text-primary">Pra Você</span> Se...
      </h2>
      <div className="space-y-2.5 md:space-y-4">
        {[
          "Quer uma renda extra real e previsível",
          "Quer um produto digital de alta margem sem criar nada",
          "Tem Instagram, TikTok ou qualquer audiência online",
          "Trabalha com marketing digital ou quer começar",
          "Quer um negócio que funciona no automático",
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
  { name: "Lucas M.", text: "Comprei o painel e no primeiro dia já vendi 3 chaves. Já pagou o investimento mais de 40x.", revenue: "+R$4.200" },
  { name: "Ana P.", text: "Nunca foi tão fácil ganhar dinheiro online. A margem é absurda.", revenue: "+R$2.800" },
  { name: "Rafael S.", text: "Faço vendas todos os dias no automático. Melhor decisão que já tomei.", revenue: "+R$7.350" },
  { name: "Camila R.", text: "Comecei do zero, sem experiência nenhuma. Hoje já é minha principal renda extra.", revenue: "+R$5.100" },
];

const SocialProof = () => (
  <section className="px-5 py-12 md:py-28">
    <div className="mx-auto max-w-5xl">
      <h2 className="font-heading text-xl sm:text-3xl font-bold text-center md:text-4xl mb-2 md:mb-4">
        Resultados <span className="text-primary">Reais</span> de Quem Começou
      </h2>
      <p className="text-center text-muted-foreground text-[0.8rem] md:text-base mb-6 md:mb-14 max-w-xl mx-auto">
        Pessoas comuns que decidiram agir — e hoje lucram todos os dias
      </p>

      <div className="grid grid-cols-2 gap-2.5 md:gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="glass-card rounded-xl md:rounded-2xl p-3.5 md:p-8">
            <div className="flex items-center justify-between mb-2 md:mb-4">
              <div className="flex gap-0.5 md:gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 md:h-5 md:w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[0.6rem] md:text-xs font-heading font-bold text-primary bg-primary/10 rounded-full px-2 py-0.5">{t.revenue}</span>
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
    <div className="mx-auto max-w-2xl text-center glass rounded-2xl md:rounded-3xl p-5 sm:p-10 md:p-16 border border-primary/20 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/30 px-3 md:px-4 py-1 text-[0.7rem] md:text-sm font-semibold text-primary mb-3 md:mb-6 animate-pulse">
          <Zap className="h-3 w-3 md:h-4 md:w-4" />
          Oferta por tempo limitado
        </span>
        
        <h2 className="font-heading text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2.5 md:mb-4">
          Acesso Completo ao Programa de Revenda
        </h2>

        {/* What's included */}
        <div className="text-left max-w-xs mx-auto space-y-1.5 md:space-y-2.5 my-4 md:my-6">
          {[
            "Painel de revenda exclusivo",
            "Chaves vitalícias por R$49,90",
            "Grupo VIP de suporte",
            "Materiais de venda prontos",
            "Sem limites de revenda",
            "Acesso vitalício",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary shrink-0" />
              <span className="text-foreground text-[0.75rem] md:text-sm">{item}</span>
            </div>
          ))}
        </div>
        
        <div className="my-4 md:my-8">
          <span className="text-base md:text-2xl text-muted-foreground line-through">R$49,90</span>
          <span className="block text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold text-primary mt-1 md:mt-2">R$9,90</span>
          <span className="text-muted-foreground text-[0.7rem] md:text-sm">pagamento único • acesso vitalício</span>
        </div>

        <a href={CTA_URL}>
          <RainbowButton className="w-full sm:w-auto text-[0.8rem] sm:text-base md:text-lg px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 font-heading font-bold">
            Garantir meu acesso agora <ArrowRight className="ml-1.5 md:ml-2 h-4 w-4 md:h-5 md:w-5" />
          </RainbowButton>
        </a>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-3 md:gap-5 mt-4 md:mt-6 text-muted-foreground">
          {[
            { icon: ShieldCheck, text: "Compra 100% segura" },
            { icon: Clock, text: "Garantia de 7 dias" },
          ].map((b) => (
            <div key={b.text} className="flex items-center gap-1 md:gap-1.5">
              <b.icon className="h-3 w-3 md:h-4 md:w-4 text-primary/60" />
              <span className="text-[0.6rem] md:text-xs">{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── FAQ ─── */
const faqItems = [
  { q: "Preciso ter experiência?", a: "Não! Qualquer pessoa pode revender. O processo é extremamente simples e você conta com suporte completo no grupo exclusivo. Muitos dos nossos melhores revendedores começaram do zero." },
  { q: "O acesso ao painel é vitalício?", a: "Sim. Você paga apenas uma vez e tem acesso ao painel para sempre. Sem mensalidades, sem taxas escondidas." },
  { q: "Quantas chaves posso vender?", a: "Quantas quiser! Não há limite de vendas. Quanto mais você vende, mais você lucra." },
  { q: "Recebo suporte?", a: "Sim, você terá acesso ao grupo exclusivo de suporte com dicas de vendas, materiais prontos e ajuda técnica 24/7." },
  { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia total. Se não ficar satisfeito, devolvemos 100% do seu dinheiro. Risco zero." },
  { q: "Quanto posso ganhar?", a: "Depende do seu esforço! Nossos revendedores ganham em média R$2.000-R$5.000 por mês. Alguns passam de R$10.000. Cada chave vendida por R$147 te dá R$97,10 de lucro líquido." },
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
        Daqui a 30 dias você pode estar{" "}
        <span className="text-primary">lucrando todos os dias</span>
      </h2>
      <p className="text-muted-foreground text-[0.85rem] md:text-lg mb-3 md:mb-4 max-w-xl mx-auto">
        Ou pode continuar como está. A escolha é sua.
      </p>
      <p className="text-foreground text-[0.9rem] md:text-xl mb-6 md:mb-10 max-w-xl mx-auto font-semibold">
        Mas lembre-se: o preço de R$9,90 é <span className="text-primary">por tempo limitado</span>.
      </p>
      <a href={CTA_URL}>
        <RainbowButton className="w-full sm:w-auto text-[0.8rem] sm:text-base md:text-lg px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 font-heading font-bold">
          Quero começar agora por R$9,90 <ArrowRight className="ml-1.5 md:ml-2 h-4 w-4 md:h-5 md:w-5" />
        </RainbowButton>
      </a>
    </div>
  </section>
);

/* ─── Footer ─── */
const Footer = () => (
  <footer className="border-t border-border px-5 py-5 md:py-8 pb-20 md:pb-8 text-center text-[0.7rem] md:text-sm text-muted-foreground">
    <p>© {new Date().getFullYear()} Extensão Ilimitada. Todos os direitos reservados.</p>
  </footer>
);

/* ─── Page ─── */
const Index = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <Suspense fallback={null}><SaleNotification /></Suspense>
    <UrgencyBanner />
    <Hero />
    <SocialStats />
    <WhatItDoes />
    <HowItWorks />
    <Benefits />
    <ForWho />
    <SocialProof />
    <Offer />
    <Guarantee />
    <FAQ />
    <FinalCTA />
    <Footer />
    <StickyMobileCTA />
  </div>
);

export default Index;
