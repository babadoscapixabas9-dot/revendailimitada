import { CheckCircle } from "lucide-react";
import { RainbowButton } from "@/components/RainbowButton";
import logo from "@/assets/logo.png";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden px-5 py-12">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-14 mb-10 object-contain" />

        {/* Success icon */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-glow" />
          <div className="relative w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">
          Pagamento Confirmado!
        </h1>

        {/* Message */}
        <p className="text-muted-foreground text-sm sm:text-base mb-3">
          Seu acesso ao programa de revenda foi liberado com sucesso.
        </p>
        <p className="text-muted-foreground text-sm sm:text-base mb-8">
          Entre no nosso grupo exclusivo de revendedores no WhatsApp para receber suporte, materiais e começar a vender agora mesmo.
        </p>

        {/* CTA Button */}
        <a
          href="https://chat.whatsapp.com/LrqByXvP3e8AwfTyR0cOQg"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <RainbowButton className="text-sm sm:text-base w-full">
            Entrar no Grupo de Revenda
          </RainbowButton>
        </a>

        {/* Glass card with info */}
        <div className="glass-card rounded-xl p-5 mt-10 w-full">
          <p className="text-muted-foreground text-xs">
            Você também receberá um e-mail com os dados de acesso ao painel. Caso não receba em até 5 minutos, verifique sua caixa de spam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
