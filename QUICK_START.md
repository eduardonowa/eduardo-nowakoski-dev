# 🚀 Quick Start Guide

Guia rápido para começar a usar o portfólio.

## Instalação Rápida

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev

# 3. Abrir no navegador
# http://localhost:3000
```

## Estrutura Rápida

```
app/page.tsx          → Página principal
components/sections/  → Seções do portfólio
lib/i18n/            → Traduções
app/globals.css      → Design tokens
```

## Personalização Rápida

### 1. Alterar Cores

Edite `app/globals.css`:

```css
:root {
  --color-primary: 59 130 246; /* Sua cor aqui */
}
```

### 2. Alterar Textos

Edite `lib/i18n/translations.ts`:

```typescript
hero: {
  title: 'Seu Nome',
  subtitle: 'Seu Cargo',
}
```

### 3. Adicionar Seção

1. Crie `components/sections/NovaSecao.tsx`
2. Importe em `app/page.tsx`
3. Adicione traduções em `lib/i18n/translations.ts`

## Comandos Úteis

```bash
npm run dev        # Desenvolvimento
npm run build      # Build de produção
npm run start      # Servidor de produção
npm run lint       # Verificar código
npm run type-check # Verificar tipos
```

## Deploy Rápido

### Vercel (1 minuto)

1. Push para GitHub
2. Importe em [vercel.com](https://vercel.com)
3. Deploy automático! 🎉

## Próximos Passos

- 📖 Leia o [README.md](./README.md) completo
- 🎨 Veja [DESIGN_SYSTEM.md](./docs/DESIGN_SYSTEM.md)
- 🧩 Veja [COMPONENTS.md](./docs/COMPONENTS.md)
- 🏗️ Veja [ARCHITECTURE.md](./docs/ARCHITECTURE.md)

---

**Dúvidas?** Consulte a documentação completa ou abra uma issue.

