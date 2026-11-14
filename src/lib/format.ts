const fmt = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

/** 147 → "R$ 147,00" */
export const brl = (value: number) => fmt.format(value).replace(/\s/g, " ");

/** Preços oficiais do programa de revenda LOV3 */
export const PRICES = {
  entrada: 9.9,
  chave: 49.9,
  revendaMax: 147,
} as const;

export const LUCRO_MAX = Math.round((PRICES.revendaMax - PRICES.chave) * 100) / 100; // 97,10

export const CTA_URL = "https://pay.cakto.com.br/9vn97pp_807302";
