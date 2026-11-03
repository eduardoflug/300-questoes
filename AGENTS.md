# Project Guidance

## User Preferences

- Idioma português (Brasil)
- Preço de venda R$ 14,90
- Entrega como PDF
- Pagamento processado via Kiwify
- Paleta escura (azul-marinho) com destaque em verde/amarelo e alto contraste

## Accepted Requirements

- Página de vendas com 300 questões divididas em Língua Portuguesa (60), Raciocínio Lógico (50), Informática (50) e Conhecimentos Específicos (140)
- Material entregue em PDF para venda
- Preço de R$ 14,90 com checkout de pagamento
- Gabarito ao final de cada bloco de matéria
- FAQ, seção de benefícios, como usar e rodapé com avisos legais

## Verified Commands

- **typecheck**: `pnpm typecheck`
- **fix**: `pnpm fix`
- **build**: `pnpm build`

## Learnings

- Landing page lives in src/frontend/src/pages/Home.tsx with shared copy and data in src/frontend/src/lib/content.ts; PurchaseButton and SubjectGrid are reusable components.
- CHECKOUT_URL in src/frontend/src/lib/content.ts is a placeholder Kiwify link (pay.kiwify.com.br/simulado-gm-imperatriz); replace with the real product checkout URL before launch.
- pnpm fix (biome --write) resolves both format and organizeImports errors in one pass; run it before pnpm check.
- Decorative Tailwind animations such as animate-fade-up need a motion-safe/motion-reduce guard to honor prefers-reduced-motion.
