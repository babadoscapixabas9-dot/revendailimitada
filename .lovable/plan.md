

# Aplicar Paleta de Cores e Logo da Referência

## Paleta de Cores (extraída da imagem)
A imagem usa um tema dark com acentos em laranja/vermelho quente, muito diferente do verde/cyan atual:

- **Fundo:** ~`#0A0A0A` (preto profundo, mais escuro que o atual)
- **Primary/CTA:** ~`#E8590C` (laranja queimado) — botões e destaques
- **Accent:** ~`#FF6B35` (laranja claro para hovers)
- **Texto principal:** `#F5F5F5` (branco suave)
- **Texto secundário:** `#737373` (cinza neutro)
- **Bordas/Cards:** `#1A1A1A` com bordas `#262626`
- **Glow:** tons de laranja/vermelho ao invés de verde

## Logo
- Copiar a imagem enviada (`user-uploads://image.png`) para `src/assets/logo.png`
- Adicionar um header/navbar com a logo no topo da página
- Logo posicionada à esquerda, links de navegação ao centro, botão CTA à direita (como na referência)

## Alterações

### 1. `src/index.css` — Atualizar variáveis CSS
- `--background` → preto profundo (~0 0% 4%)
- `--primary` → laranja (~24 90% 48%)
- `--accent` → laranja claro (~20 100% 60%)
- `--card` → cinza muito escuro (~0 0% 10%)
- `--border` → cinza escuro (~0 0% 15%)
- `--muted-foreground` → cinza neutro
- Atualizar `.glow-green` → `.glow-orange` com tons laranja
- Atualizar `.glass` e `.glass-card` com bordas laranja/neutras ao invés de cyan

### 2. `tailwind.config.ts` — Atualizar keyframes
- `pulse-glow` → usar tons de laranja ao invés de verde

### 3. `src/pages/Index.tsx` — Adicionar Navbar + Logo
- Importar a logo de `@/assets/logo.png`
- Adicionar componente `Navbar` no topo com: logo à esquerda, links centrais (Benefícios, Casos de Uso, Investimento, FAQ, Loja), botão "Garantir Acesso" à direita
- Renomear classes `glow-green` → `glow-primary` nos botões
- Manter toda a estrutura de seções existente

