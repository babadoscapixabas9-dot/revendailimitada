import { Check, Key, LayoutDashboard, Users, TrendingUp, Star, ArrowRight, ChevronRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/RainbowButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logo from "@/assets/logo.png";

const CTA_URL = "#";

/* ─── Navbar ─── */
const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass px-4 py-3">
    <div className="mx-auto max-w-6xl flex items-center justify-between">
      <img src={logo} alt="Ilimitado" className="h-8" />
      <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
        <a href="#beneficios" className="hover:text-foreground transition-colors">Benefícios</a>
        <a href="#como-funciona" className="hover:text-foreground transition-colors">Como Funciona</a>
        <a href="#oferta" className="hover:text-foreground transition-colors">Investimento</a>
        <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
      </div>
      <a href={CTA_URL}>
        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Garantir Acesso
        </Button>
      </a>
    </div>
  </nav>
);

/* ─── Hero ─── */
const Hero = () => (
  <section className="relative overflow-hidden px-4 pt-20 pb-16 md:pt-32 md:pb-24">
    {/* Background warm glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/8 blur-[160px] pointer-events-none" />
    <div className="absolute top-20 left-1/3 w-[400px] h-[400px] rounded-full bg-[hsl(16_90%_50%/0.06)] blur-[120px] pointer-events-none" />
    <div className="absolute top-10 right-1/4 w-[300px] h-[300px] rounded-full bg-[hsl(0_80%_50%/0.04)] blur-[100px] pointer-events-none" />

    <div className="relative mx-auto max-w-5xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
        <Zap className="h-4 w-4" /> Oportunidade Exclusiva
      </span>

      <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl glow-text mb-6">
        Seja Revendedor da Extensão Ilimitada e{" "}
        <span className="text-primary">Lucre Todos os Dias</span>
      </h1>

      <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl mb-8">
        Com apenas <strong className="text-foreground">R$9,90</strong> você recebe acesso ao painel de revenda + grupo de suporte e pode comprar chaves vitalícias por{" "}
        <strong className="text-foreground">R$39,90</strong> para revender por até{" "}
        <strong className="text-primary">R$147</strong>.
      </p>

      <div className="mx-auto max-w-md text-left space-y-3 mb-10">
        {[
          "Produto digital fácil de vender",
          "Margem de lucro alta",
          "Painel exclusivo para revendedores",
          "Grupo de suporte para ajudar nas vendas",
        ].map((item) => (
          <div key={item} className="flex items-center gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20">
              <Check className="h-4 w-4 text-primary" />
            </div>
            <span className="text-foreground">{item}</span>
          </div>
        ))}
      </div>

      <a href={CTA_URL}>
        <RainbowButton className="text-lg px-10 py-5 font-heading font-bold">
          Quero me tornar revendedor agora <ArrowRight className="ml-2 h-5 w-5" />
        </RainbowButton>
      </a>

      {/* Dashboard mockup */}
      <div className="mt-16 mx-auto max-w-3xl glass rounded-2xl p-6 md:p-8">
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: "Chaves Ativas", value: "24" },
            { label: "Receita Total", value: "R$3.528" },
            { label: "Lucro Líquido", value: "R$2.570" },
          ].map((s) => (
            <div key={s.label} className="glass-card rounded-xl p-4 text-center">
              <p className="text-sm text-muted-foreground">{s.label}</p>
              <p className="text-2xl font-heading font-bold text-primary mt-1">{s.value}</p>
            </div>
          ))}
        </div>
        <div className="h-2 w-full rounded-full bg-border overflow-hidden">
          <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-primary to-accent" />
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-right">75% da meta mensal</p>
      </div>
    </div>
  </section>
);

/* ─── Como Funciona ─── */
const HowItWorks = () => (
  <section className="px-4 py-20 md:py-28">
    <div className="mx-auto max-w-5xl">
      <h2 className="font-heading text-3xl font-bold text-center md:text-4xl mb-4">
        Como <span className="text-primary">Funciona</span>
      </h2>
      <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
        3 passos simples para começar a lucrar hoje mesmo
      </p>

      <div className="grid md:grid-cols-3 gap-6 md:gap-4 mb-16">
        {[
          { step: "01", title: "Compre o Acesso", desc: "Adquira o painel de revenda por apenas R$9,90", icon: LayoutDashboard },
          { step: "02", title: "Compre Chaves", desc: "Dentro do painel, compre chaves vitalícias por R$39,90", icon: Key },
          { step: "03", title: "Revenda e Lucre", desc: "Revenda cada chave por até R$147 e fique com todo o lucro", icon: TrendingUp },
        ].map((s, i) => (
          <div key={s.step} className="relative">
            <div className="glass-card rounded-2xl p-8 text-center h-full">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 mb-4">
                <s.icon className="h-7 w-7 text-primary" />
              </div>
              <span className="block text-xs font-bold text-accent tracking-widest uppercase mb-2">Passo {s.step}</span>
              <h3 className="font-heading text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
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
      <div className="glass rounded-2xl p-8 md:p-10">
        <h3 className="font-heading text-2xl font-bold text-center mb-8">
          Projeção de <span className="text-primary">Lucro</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { keys: 5, revenue: "R$735" },
            { keys: 10, revenue: "R$1.470" },
            { keys: 20, revenue: "R$2.940" },
          ].map((p) => (
            <div key={p.keys} className="glass-card rounded-xl p-6 text-center">
              <p className="text-sm text-muted-foreground mb-1">Venda {p.keys} chaves</p>
              <p className="text-3xl md:text-4xl font-heading font-extrabold text-primary">{p.revenue}</p>
              <p className="text-xs text-muted-foreground mt-1">de receita bruta</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── O que você recebe ─── */
const Benefits = () => (
  <section className="px-4 py-20 md:py-28">
    <div className="mx-auto max-w-5xl">
      <h2 className="font-heading text-3xl font-bold text-center md:text-4xl mb-14">
        O Que Você <span className="text-primary">Recebe</span>
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {[
          { icon: LayoutDashboard, title: "Painel de Revenda Exclusivo", desc: "Gerencie e compre chaves quando quiser" },
          { icon: Key, title: "Chaves Vitalícias", desc: "Produto com alto valor percebido" },
          { icon: Users, title: "Grupo de Suporte", desc: "Comunidade + suporte para ajudar nas vendas" },
          { icon: TrendingUp, title: "Produto com Alta Demanda", desc: "Ferramenta útil que vende fácil" },
        ].map((b) => (
          <div key={b.title} className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-colors">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 mb-4">
              <b.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-2">{b.title}</h3>
            <p className="text-muted-foreground text-sm">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Para quem é ─── */
const ForWho = () => (
  <section className="px-4 py-20 md:py-28">
    <div className="mx-auto max-w-3xl glass rounded-2xl p-8 md:p-12">
      <h2 className="font-heading text-3xl font-bold text-center md:text-4xl mb-10">
        Para <span className="text-primary">Quem É</span>
      </h2>
      <div className="space-y-4">
        {[
          "Afiliados que querem um produto de alta margem",
          "Donos de páginas no Instagram",
          "Quem quer renda extra online",
          "Quem trabalha com marketing digital",
          "Quem quer revender produtos digitais",
        ].map((item) => (
          <div key={item} className="flex items-center gap-4">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/20">
              <Check className="h-4 w-4 text-primary" />
            </div>
            <span className="text-foreground text-lg">{item}</span>
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
  { name: "Rafael S.", text: "Faço vendas todos os dias. Melhor investimento de R$9,90 que já fiz." },
  { name: "Camila R.", text: "Nunca pensei que revender poderia ser tão simples. O suporte ajuda muito!" },
];

const SocialProof = () => (
  <section className="px-4 py-20 md:py-28">
    <div className="mx-auto max-w-5xl">
      <h2 className="font-heading text-3xl font-bold text-center md:text-4xl mb-14">
        O Que Nossos Revendedores <span className="text-primary">Dizem</span>
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="glass-card rounded-2xl p-6 md:p-8">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-foreground mb-4 italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                {t.name[0]}
              </div>
              <span className="font-heading font-semibold">{t.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Oferta ─── */
const Offer = () => (
  <section className="px-4 py-20 md:py-28">
    <div className="mx-auto max-w-2xl text-center glass rounded-3xl p-10 md:p-16 border border-primary/20">
      <span className="inline-block rounded-full bg-primary/10 border border-primary/30 px-4 py-1 text-sm font-semibold text-primary mb-6">
        Oferta Especial
      </span>
      <h2 className="font-heading text-3xl font-bold md:text-4xl mb-4">
        Acesso ao Painel de Revenda + Grupo de Suporte
      </h2>
      <div className="my-8">
        <span className="text-2xl text-muted-foreground line-through">R$49,90</span>
        <span className="block text-6xl md:text-7xl font-heading font-extrabold text-primary mt-2">R$9,90</span>
        <span className="text-muted-foreground text-sm">pagamento único • acesso vitalício</span>
      </div>
      <a href={CTA_URL}>
        <RainbowButton className="text-lg px-12 py-5 font-heading font-bold">
          Quero garantir meu acesso agora <ArrowRight className="ml-2 h-5 w-5" />
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
  <section className="px-4 py-20 md:py-28">
    <div className="mx-auto max-w-3xl">
      <h2 className="font-heading text-3xl font-bold text-center md:text-4xl mb-14">
        Perguntas <span className="text-primary">Frequentes</span>
      </h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqItems.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="glass-card rounded-xl px-6 border-none">
            <AccordionTrigger className="font-heading font-semibold text-left hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
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
  <section className="relative px-4 py-20 md:py-28">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
    <div className="relative mx-auto max-w-3xl text-center">
      <h2 className="font-heading text-3xl font-bold md:text-5xl mb-6">
        Comece hoje mesmo a revender e{" "}
        <span className="text-primary">lucrar online</span>
      </h2>
      <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
        Por apenas R$9,90 você acessa o painel, compra chaves e começa a faturar imediatamente.
      </p>
      <a href={CTA_URL}>
        <RainbowButton className="text-lg px-12 py-5 font-heading font-bold">
          Quero acesso ao painel por R$9,90 <ArrowRight className="ml-2 h-5 w-5" />
        </RainbowButton>
      </a>
    </div>
  </section>
);

/* ─── Footer ─── */
const Footer = () => (
  <footer className="border-t border-border px-4 py-8 text-center text-sm text-muted-foreground">
    <p>© {new Date().getFullYear()} Extensão Ilimitada. Todos os direitos reservados.</p>
  </footer>
);

/* ─── Page ─── */
const Index = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <Hero />
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
