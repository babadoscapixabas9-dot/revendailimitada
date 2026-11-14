import { CheckCircle2, MessageCircle } from "lucide-react";
import { CtaButton } from "@/components/lov3/CtaButton";
import logo from "@/assets/lov3/lov3-logo-sm.webp";

const ThankYou = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-5 py-12">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,hsl(280_90%_50%/.35),transparent_65%)] blur-2xl" />
        <div className="absolute inset-x-[-40%] bottom-0 h-[40%] grid-floor animate-grid-move opacity-30" />
      </div>

      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">
        <img src={logo} alt="LOV3" className="mb-10 h-14 w-auto drop-shadow-[0_16px_32px_rgba(168,85,247,.55)]" />

        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full bg-success/30 blur-xl" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-success/40 bg-success/10">
            <CheckCircle2 className="h-10 w-10 text-success" />
          </div>
        </div>

        <h1 className="mb-3 font-heading text-3xl font-bold text-white">Pagamento confirmado!</h1>
        <p className="mb-3 text-sm text-muted-foreground sm:text-base">
          Seu acesso ao programa de revenda LOV3 foi liberado.
        </p>
        <p className="mb-8 text-sm text-muted-foreground sm:text-base">
          Entre no grupo exclusivo de revendedores no WhatsApp para receber suporte, materiais e começar a vender agora.
        </p>

        <CtaButton
          href="https://chat.whatsapp.com/DUaFegzuT8vL7HcUEjOc1j"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <MessageCircle className="h-5 w-5" />
          Entrar no grupo de revenda
        </CtaButton>

        <div className="glass-card mt-10 w-full rounded-2xl p-5">
          <p className="text-xs text-muted-foreground">
            Você também vai receber um e-mail com os dados de acesso ao painel. Se não chegar em até 5 minutos, confira a
            caixa de spam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
