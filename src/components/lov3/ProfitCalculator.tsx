import { useEffect, useRef, useState } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";
import { brl, CTA_URL, PRICES } from "@/lib/format";
import { CtaButton } from "./CtaButton";

const useAnimatedNumber = (value: number, duration = 550) => {
  const [display, setDisplay] = useState(value);
  const current = useRef(value);
  useEffect(() => {
    const from = current.current;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      current.current = from + (value - from) * eased;
      setDisplay(current.current);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);
  return display;
};

const Slider = ({
  id,
  label,
  value,
  display,
  min,
  max,
  step = 1,
  onChange,
  hint,
}: {
  id: string;
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
  hint?: string;
}) => {
  const fill = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="mb-3 flex items-end justify-between gap-3">
        <label htmlFor={id} className="text-sm font-medium text-foreground/80">
          {label}
        </label>
        <span className="font-heading text-xl font-bold tabular-nums text-white md:text-2xl">{display}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="lov3-range"
        style={{ ["--fill" as string]: `${fill}%` }}
      />
      {hint && <p className="mt-2 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
};

export const ProfitCalculator = () => {
  const [qty, setQty] = useState(10);
  const [price, setPrice] = useState<number>(PRICES.revendaMax);

  const perKey = price - PRICES.chave;
  const monthly = qty * perKey;
  const shown = useAnimatedNumber(monthly);

  return (
    <div className="relative overflow-hidden rounded-[28px] ring-gradient">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-success/20 blur-3xl"
      />
      <div className="relative grid gap-8 p-6 md:grid-cols-[1fr_1.05fr] md:gap-12 md:p-10">
        <div className="flex flex-col justify-center gap-8">
          <Slider
            id="calc-qty"
            label="Chaves vendidas por mês"
            value={qty}
            display={`${qty}`}
            min={1}
            max={60}
            onChange={setQty}
          />
          <Slider
            id="calc-price"
            label="Seu preço de venda"
            value={price}
            display={brl(price)}
            min={60}
            max={PRICES.revendaMax}
            onChange={setPrice}
            hint={`Você paga ${brl(PRICES.chave)} em cada chave · lucro de ${brl(perKey)} por venda`}
          />
        </div>

        <div className="relative flex flex-col justify-between rounded-3xl border border-white/8 bg-black/30 p-6 md:p-8">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-success">
              <TrendingUp className="h-4 w-4" /> Lucro estimado por mês
            </p>
            <p
              className="mt-3 font-heading text-[2.6rem] font-extrabold leading-none tabular-nums text-gradient-money sm:text-6xl"
              style={{ filter: "drop-shadow(0 8px 30px rgba(34,197,94,.35))" }}
            >
              {brl(shown)}
            </p>
          </div>

          <dl className="mt-6 space-y-2.5 border-t border-white/8 pt-5 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Faturamento</dt>
              <dd className="font-medium tabular-nums text-white">{brl(qty * price)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Custo das chaves</dt>
              <dd className="font-medium tabular-nums text-white/80">− {brl(qty * PRICES.chave)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Entrada na revenda</dt>
              <dd className="whitespace-nowrap font-medium tabular-nums text-white/80">{brl(PRICES.entrada)} <span className="text-muted-foreground">(1x)</span></dd>
            </div>
          </dl>

          <CtaButton href={CTA_URL} size="md" className="mt-6 w-full">
            Quero começar a lucrar <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </CtaButton>
        </div>
      </div>
      <p className="relative px-6 pb-5 text-center text-[11px] text-muted-foreground/70 md:px-10">
        Simulação. O resultado depende de quantas chaves você vende e do preço que você cobra.
      </p>
    </div>
  );
};
