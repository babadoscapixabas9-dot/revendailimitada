

# Mudança de Paleta de Cores: Laranja → Roxo/Violeta

Baseado na imagem enviada, o site será migrado do esquema laranja/vermelho para um esquema **roxo/violeta** escuro.

## Arquivos a editar

### 1. `src/index.css` — Variáveis CSS
- `--primary`: de `16 90% 50%` (laranja) para `258 85% 55%` (roxo/violeta)
- `--accent`: de `12 100% 58%` para `270 100% 65%` (violeta claro)
- `--ring`: atualizar para roxo
- Utilitários `.glow-primary` e `.glow-text`: trocar HSL hardcoded de laranja para roxo

### 2. `src/components/RainbowButton.tsx` — Gradiente dos botões
- Trocar gradiente `#ff0000, #ff4500, #ff6347` para tons de roxo/violeta como `#7c3aed, #8b5cf6, #a855f7`

### 3. `src/pages/Index.tsx` — Cores hardcoded
- Linha 21: glow `hsl(16_90%_50%/0.06)` → roxo equivalente
- Linhas 78-81: barra de progresso com cores hardcoded → tons de roxo

### 4. `tailwind.config.ts` — Keyframes
- `pulse-glow`: atualizar HSL hardcoded de `16 90% 50%` para o novo roxo

## Resultado
Todo o site (landing page + página de obrigado) ficará com a identidade visual roxa/violeta, mantendo o fundo escuro e os efeitos de glow/glass já existentes.

