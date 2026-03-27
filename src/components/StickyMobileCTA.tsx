import { ArrowRight } from "lucide-react";

const CTA_URL = "https://pay.cakto.com.br/9vn97pp_807302";

export const StickyMobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 border-t border-border/50 safe-area-bottom"
    style={{
      background: "hsl(0 0% 5% / 0.95)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
    }}
  >
    <a href={CTA_URL} className="block">
      <button className="w-full relative overflow-hidden rounded-xl bg-primary py-3.5 text-primary-foreground font-heading font-bold text-[0.85rem] flex items-center justify-center gap-2 animate-pulse-glow">
        Garantir acesso por R$9,90
        <ArrowRight className="h-4 w-4" />
      </button>
    </a>
    <p className="text-center text-[0.6rem] text-muted-foreground mt-1.5">
      Pagamento único • Acesso vitalício • Garantia total
    </p>
  </div>
);
