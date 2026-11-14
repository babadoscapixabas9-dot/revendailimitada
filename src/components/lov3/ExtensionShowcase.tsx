import { Infinity as InfinityIcon } from "lucide-react";
import emAcao from "@/assets/lov3/lov3-em-acao.webp";
import painel from "@/assets/lov3/lov3-painel.webp";
import { useTilt } from "@/hooks/useTilt";

/** Print real da extensão num navegador inclinado em 3D, com o painel LOV3 "saltando" da tela. */
export const ExtensionShowcase = () => {
  const tilt = useTilt<HTMLDivElement>({ max: 7, scope: "self" });

  return (
    <div ref={tilt} className="relative py-4 [perspective:1600px] md:py-8">
      <div
        className="relative preserve-3d"
        style={{ transform: "rotateY(calc(-14deg + var(--ry,0deg))) rotateX(calc(7deg + var(--rx,0deg)))" }}
      >
        {/* navegador */}
        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d0a14] shadow-[0_60px_120px_-30px_rgba(124,58,237,.65)] md:rounded-2xl">
          <div className="flex items-center gap-1.5 border-b border-white/5 bg-white/[0.03] px-3 py-2 md:px-4 md:py-2.5">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57] md:h-2.5 md:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e] md:h-2.5 md:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-[#28c840] md:h-2.5 md:w-2.5" />
            <div className="mx-auto flex h-5 w-1/2 items-center justify-center rounded-md bg-white/5 text-[9px] text-muted-foreground md:h-6 md:text-[11px]">
              lovable.dev
            </div>
          </div>
          <img
            src={emAcao}
            alt="Extensão LOV3 funcionando dentro do editor do Lovable"
            className="block w-full"
            width={1600}
            height={792}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* painel LOV3 saltando pra fora */}
        <div className="absolute right-[1%] top-[8%] w-[26%] preserve-3d md:-right-[3%]" style={{ transform: "translateZ(90px)" }}>
          <img
            src={painel}
            alt="Painel lateral da extensão LOV3"
            className="w-full rounded-lg border border-fuchsia-400/30 shadow-[0_30px_60px_-10px_rgba(0,0,0,.9),0_0_50px_-8px_rgba(217,70,239,.6)] md:rounded-xl"
            width={297}
            height={766}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* selo */}
        <div className="absolute bottom-[10%] left-[4%] preserve-3d md:-left-[2%]" style={{ transform: "translateZ(130px)" }}>
          <div className="flex animate-float-y items-center gap-2 rounded-2xl border border-white/12 bg-[#120821]/95 px-3 py-2 shadow-[0_24px_50px_-12px_rgba(0,0,0,.9)] md:px-4 md:py-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-600 md:h-9 md:w-9">
              <InfinityIcon className="h-4 w-4 text-white md:h-5 md:w-5" />
            </span>
            <div className="leading-tight">
              <p className="font-heading text-[11px] font-bold text-white md:text-sm">Prompts ilimitados</p>
              <p className="text-[9px] text-muted-foreground md:text-[11px]">direto no Lovable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
