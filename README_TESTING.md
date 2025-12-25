# Testes Unitários - Portfolio

Este projeto utiliza Jest e React Testing Library para testes unitários.

## Configuração

### Dependências

- `jest` - Framework de testes
- `jest-environment-jsdom` - Ambiente DOM para testes
- `@testing-library/react` - Utilitários para testar componentes React
- `@testing-library/jest-dom` - Matchers adicionais do Jest DOM
- `@testing-library/user-event` - Simulação de eventos de usuário

### Arquivos de Configuração

- `jest.config.js` - Configuração do Jest com Next.js
- `jest.setup.js` - Setup global para todos os testes

## Estrutura de Testes

```
__tests__/
├── components/
│   ├── layout/
│   │   ├── Header.test.tsx
│   │   └── Footer.test.tsx
│   ├── sections/
│   │   ├── Hero.test.tsx
│   │   ├── About.test.tsx
│   │   ├── Experience.test.tsx
│   │   ├── Technologies.test.tsx
│   │   └── Contact.test.tsx
│   └── ui/
│       ├── ScrollProgress.test.tsx
│       └── TextReveal.test.tsx
├── hooks/
│   ├── useMagnetic.test.tsx
│   └── useParallax.test.tsx
├── providers/
│   └── I18nProvider.test.tsx
└── lib/
    └── i18n/
        └── translations.test.ts
```

## Executando Testes

### Executar todos os testes
```bash
npm test
```

### Executar em modo watch
```bash
npm run test:watch
```

### Executar com cobertura
```bash
npm run test:coverage
```

### Abrir relatório HTML de cobertura
```bash
npm run test:coverage:open
```

## Relatório de Cobertura

O Jest gera relatórios de cobertura em múltiplos formatos:

1. **HTML** - `coverage/index.html` (abre no navegador)
   - Visualização interativa
   - Linhas cobertas/não cobertas destacadas
   - Estatísticas por arquivo
   - Navegação por diretórios

2. **LCOV** - `coverage/lcov.info` (para integração com CI/CD)
   - Formato padrão para ferramentas como Codecov, Coveralls

3. **Text** - Exibido no terminal
   - Resumo rápido no console

4. **JSON Summary** - `coverage/coverage-summary.json`
   - Para scripts e automação

### Visualizar Relatório HTML

Após executar `npm run test:coverage`, abra o arquivo:

```
coverage/index.html
```

No navegador, você verá:
- ✅ **Cobertura geral** (branches, functions, lines, statements)
- ✅ **Cobertura por arquivo** com cores indicando:
  - 🟢 Verde: Cobertura alta
  - 🟡 Amarelo: Cobertura média
  - 🔴 Vermelho: Cobertura baixa
- ✅ **Linhas cobertas/não cobertas** destacadas
- ✅ **Estatísticas detalhadas** por arquivo

### Thresholds de Cobertura

O projeto está configurado com thresholds mínimos:
- **Branches**: 70%
- **Functions**: 70%
- **Lines**: 70%
- **Statements**: 70%

Se a cobertura estiver abaixo desses valores, os testes falharão.

## Cobertura de Testes

Os testes cobrem:

- ✅ **Providers**: I18nProvider (ThemeProvider mockado)
- ✅ **Hooks**: useMagnetic, useParallax
- ✅ **Componentes de Layout**: Header, Footer
- ✅ **Componentes de Seção**: Hero, About, Experience, Technologies, Contact
- ✅ **Componentes UI**: ScrollProgress, TextReveal
- ✅ **Utilitários**: Translations

## Mocks e Setup

### Mocks Configurados

1. **next-themes**: Mock do ThemeProvider e useTheme
2. **framer-motion**: Mock dos componentes motion
3. **react-intersection-observer**: Mock do useInView
4. **window.matchMedia**: Mock para media queries
5. **localStorage**: Mock completo
6. **scrollIntoView**: Mock do método

### Exemplo de Teste

```tsx
import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/sections/Hero'
import { I18nProvider } from '@/components/providers/I18nProvider'

describe('Hero', () => {
  it('should render hero title', () => {
    render(
      <I18nProvider>
        <Hero />
      </I18nProvider>
    )

    expect(screen.getByText(/Eduardo Nowakoski/i)).toBeInTheDocument()
  })
})
```

## Boas Práticas

1. **Sempre envolver componentes com Providers necessários**
2. **Usar `screen` para queries ao invés de `container` quando possível**
3. **Usar `getByText`, `getByRole`, etc. para queries semânticas**
4. **Mockar dependências externas (next-themes, framer-motion)**
5. **Testar comportamento, não implementação**

## Próximos Passos

- [ ] Adicionar testes para ProfessionalExperience
- [ ] Adicionar testes para CodeSnippets
- [ ] Adicionar testes de integração
- [ ] Adicionar testes E2E com Playwright/Cypress
- [ ] Aumentar cobertura de código para 80%+
