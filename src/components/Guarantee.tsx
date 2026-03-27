import { ShieldCheck } from "lucide-react";

export const Guarantee = () => (
  <section className="px-5 py-10 md:py-20">
    <div className="mx-auto max-w-2xl glass rounded-xl md:rounded-2xl p-5 md:p-10 text-center border border-primary/10">
      <div className="inline-flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6">
        <ShieldCheck className="h-7 w-7 md:h-8 md:w-8 text-primary" />
      </div>
      <h3 className="font-heading text-lg md:text-2xl font-bold mb-2 md:mb-3">
        Garantia <span className="text-primary">Risco Zero</span>
      </h3>
      <p className="text-muted-foreground text-[0.8rem] md:text-base leading-relaxed max-w-lg mx-auto">
        Se em até <strong className="text-foreground">7 dias</strong> você sentir que o programa não é pra você, devolvemos{" "}
        <strong className="text-foreground">100% do seu dinheiro</strong>. Sem perguntas, sem burocracia. O risco é todo nosso.
      </p>
    </div>
  </section>
);
