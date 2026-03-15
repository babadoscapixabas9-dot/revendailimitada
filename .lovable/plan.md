

# Landing Page — Painel de Revenda da Extensão Ilimitada

## Visão Geral
Landing page de alta conversão com design dark premium (estilo fintech/SaaS), focada em vender o acesso ao painel de revenda por R$9,90.

## Estrutura & Seções

### 1. Hero
- Headline grande com efeito de glow sutil: "Seja Revendedor da Extensão Ilimitada e Lucre Todos os Dias"
- Subtítulo explicando a proposta de valor (R$9,90 → compra chaves por R$39,90 → revende por até R$147)
- 4 bullet points com checkmarks verdes
- CTA botão verde vibrante: "Quero me tornar revendedor agora"
- Mockup estilizado de um dashboard com stats (chaves ativas, receita)

### 2. Como Funciona (3 Passos)
- 3 cards conectados por linhas/setas direcionais
- Passo 1: Compre acesso (R$9,90) → Passo 2: Compre chaves (R$39,90) → Passo 3: Revenda (até R$147)
- Seção de lucro com números animados (counter animation ao scroll): 5 chaves = R$735, 10 = R$1.470, 20 = R$2.940

### 3. O Que Você Recebe
- Grid 2x2 com cards glassmorphism (bordas cyan, fundo semi-transparente)
- Ícones Lucide para cada benefício: Painel Exclusivo, Chaves Vitalícias, Grupo de Suporte, Alta Demanda

### 4. Para Quem É
- Lista com checkmarks verdes dos perfis ideais (afiliados, donos de páginas, marketing digital, etc.)

### 5. Prova Social
- Cards de depoimentos com estrelas amarelas, nomes fictícios e avatares
- 3-4 depoimentos curtos e persuasivos

### 6. Oferta
- Bloco de destaque centralizado com muito espaço
- Preço riscado R$49,90, preço atual R$9,90 em destaque grande verde
- CTA: "Quero garantir meu acesso agora"

### 7. FAQ
- Accordion com 4 perguntas e respostas
- Estilo clean com bordas sutis

### 8. CTA Final
- Fundo com gradiente sutil
- Headline: "Comece hoje mesmo a revender e lucrar online"
- Botão CTA final verde

## Design
- **Fundo:** #0F172A (deep navy)
- **CTA/Dinheiro:** #22C55E (verde esmeralda)
- **Acentos/Bordas:** #06B6D4 (cyan)
- **Texto:** #F8FAFC (principal), #94A3B8 (secundário)
- **Badges:** #8B5CF6 (violeta)
- **Fontes:** Lexend (headlines) + Inter (corpo)
- **Efeitos:** Glassmorphism nos cards, glow nos CTAs, counter animation nos números de lucro
- **Mobile-first:** Layout responsivo, CTAs sempre acessíveis

## Implementação
- Página única (`Index.tsx`) com todas as seções como componentes
- Animações com CSS (scroll-triggered counters, hover effects nos botões)
- Fontes Google importadas via index.html
- Variáveis CSS atualizadas para o tema dark premium

