

## Plano: Criar página de obrigado em `/456`

### O que será feito

Criar uma página de confirmação de pagamento na rota `/456` com a mesma identidade visual (dark theme, laranja, glassmorphism, logo). A página terá:

- Logo centralizada no topo
- Ícone de check com animação de sucesso
- Título "Pagamento Confirmado!"
- Mensagem de boas-vindas ao programa de revenda
- Botão CTA com link para o grupo WhatsApp (`https://chat.whatsapp.com/LrqByXvP3e8AwfTyR0cOQg`)
- Efeitos de glow no fundo, consistentes com a landing page

### Arquivos a criar/editar

1. **`src/pages/ThankYou.tsx`** — Nova página com layout centralizado, logo, ícone animado de confirmação, texto e botão rainbow para o grupo WhatsApp.

2. **`src/App.tsx`** — Adicionar rota `<Route path="/456" element={<ThankYou />} />`.

