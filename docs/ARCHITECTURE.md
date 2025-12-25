# Arquitetura do Projeto

## Decisões Técnicas

### Por que Next.js?

**Escolha:** Next.js 14 com App Router

**Justificativa:**

1. **SEO Otimizado**: SSR/SSG nativo para melhor indexação em mecanismos de busca
2. **Performance**: Code splitting automático, otimização de imagens, lazy loading
3. **Developer Experience**: Hot reload, TypeScript nativo, estrutura clara
4. **Deploy Simplificado**: Integração perfeita com Vercel (deploy em um clique)
5. **Ecosystem**: Grande comunidade, documentação excelente, atualizações frequentes
6. **App Router**: Arquitetura moderna com Server Components e melhor performance

**Alternativa Considerada:** Vite + React

- Rejeitada por falta de SSR nativo (necessário para SEO de portfólio)
- Menos otimizações automáticas
- Mais configuração manual necessária

### Por que TypeScript?

**Escolha:** TypeScript com strict mode

**Justificativa:**

1. **Type Safety**: Reduz bugs em tempo de desenvolvimento
2. **IntelliSense**: Melhor autocomplete e sugestões
3. **Refactoring Seguro**: Mudanças com confiança
4. **Documentação**: Tipos servem como documentação viva
5. **Padrão da Indústria**: Esperado em projetos profissionais

### Por que Tailwind CSS?

**Escolha:** Tailwind CSS com CSS Variables

**Justificativa:**

1. **Produtividade**: Desenvolvimento mais rápido com utility classes
2. **Consistência**: Design system integrado
3. **Performance**: CSS otimizado e purgado automaticamente
4. **Customização**: Fácil extensão com design tokens via CSS Variables
5. **Manutenibilidade**: Menos CSS customizado, mais reutilização

### Por que Framer Motion?

**Escolha:** Framer Motion para animações

**Justificativa:**

1. **Performance**: Animações otimizadas com GPU acceleration
2. **API Declarativa**: Código limpo e intuitivo
3. **Flexibilidade**: Animações complexas com pouco código
4. **Acessibilidade**: Respeita `prefers-reduced-motion`
5. **Ecosystem**: Integração perfeita com React

### Por que next-themes?

**Escolha:** next-themes para gerenciamento de temas

**Justificativa:**

1. **Zero Flash**: Previne flash de conteúdo incorreto
2. **SSR Safe**: Funciona perfeitamente com Next.js
3. **Simples**: API limpa e fácil de usar
4. **Persistência**: Salva preferência automaticamente

### Por que i18n Customizado?

**Escolha:** Sistema de i18n customizado ao invés de biblioteca

**Justificativa:**

1. **Simplicidade**: Apenas 2 idiomas, não precisa de biblioteca pesada
2. **Performance**: Sem overhead de biblioteca externa
3. **Controle Total**: Flexibilidade para customização
4. **Type Safety**: Tipos TypeScript para traduções
5. **Bundle Size**: Menor tamanho final

## Estrutura de Pastas

```
portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Estilos globais e design tokens
│   ├── layout.tsx         # Layout raiz
│   └── page.tsx           # Página principal
├── components/            # Componentes React
│   ├── layout/            # Componentes de layout
│   ├── providers/         # Context providers
│   └── sections/          # Seções do portfólio
├── lib/                   # Utilitários e lógica
│   └── i18n/             # Sistema de i18n
├── docs/                  # Documentação
├── public/                # Arquivos estáticos
└── [config files]        # Configurações do projeto
```

**Princípios:**

- **Separação por Feature**: Componentes agrupados por função
- **Co-localização**: Código relacionado próximo
- **Escalabilidade**: Fácil adicionar novas features

## Fluxo de Dados

### Estado Global

1. **Tema**: Gerenciado por `next-themes` via `ThemeProvider`
2. **i18n**: Gerenciado por contexto customizado via `I18nProvider`
3. **Estado Local**: React hooks (`useState`, `useEffect`)

### Persistência

- **Tema**: `localStorage` via `next-themes`
- **Idioma**: `localStorage` customizado
- **Sem Backend**: Aplicação totalmente estática

## Performance

### Otimizações Implementadas

1. **Code Splitting**: Automático via Next.js
2. **Lazy Loading**: Componentes carregados sob demanda
3. **Image Optimization**: Pronto para uso (quando imagens forem adicionadas)
4. **CSS Purging**: Tailwind remove CSS não utilizado
5. **Font Optimization**: Next.js otimiza fontes automaticamente
6. **Scroll Animations**: Usa `IntersectionObserver` (nativo, performático)

### Métricas Esperadas

- **Lighthouse Performance**: 90+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: < 200KB (gzipped)

## Acessibilidade

### Implementações

1. **ARIA Labels**: Todos os elementos interativos
2. **Semântica HTML**: Tags corretas (`nav`, `section`, `header`, `footer`)
3. **Navegação por Teclado**: Tab order lógico
4. **Contraste**: WCAG 2.1 Level AA
5. **Reduced Motion**: Respeitado via CSS

### Testes Recomendados

- Lighthouse Accessibility Audit
- Keyboard navigation manual
- Screen reader (NVDA/JAWS)
- Color contrast checker

## SEO

### Implementações

1. **Metadata**: Completo em `layout.tsx`
2. **Open Graph**: Tags para redes sociais
3. **Semantic HTML**: Estrutura clara
4. **SSR/SSG**: Conteúdo renderizado no servidor
5. **Sitemap**: Pode ser adicionado facilmente

## Escalabilidade

### Adicionar Nova Seção

1. Criar componente em `components/sections/`
2. Adicionar traduções em `lib/i18n/translations.ts`
3. Importar em `app/page.tsx`
4. Adicionar link no Header

### Adicionar Novo Idioma

1. Adicionar tipo em `lib/i18n/translations.ts`
2. Adicionar traduções completas
3. Atualizar `I18nProvider` se necessário

### Adicionar Nova Tecnologia

1. Adicionar em `components/sections/Technologies.tsx`
2. Categorizar apropriadamente

## Segurança

### Considerações

1. **Sem Backend**: Aplicação estática, sem vulnerabilidades de servidor
2. **Sanitização**: Não necessário (sem user input)
3. **HTTPS**: Garantido pelo deploy (Vercel)
4. **Dependencies**: Manter atualizadas

## Manutenibilidade

### Boas Práticas

1. **TypeScript Strict**: Tipagem rigorosa
2. **Componentização**: Componentes pequenos e focados
3. **Documentação**: README e docs detalhados
4. **Convenções**: Nomenclatura consistente
5. **Code Review**: Estrutura preparada para reviews

## Futuras Melhorias

### Possíveis Adições

1. **Blog**: Seção de artigos técnicos
2. **Projetos Detalhados**: Páginas individuais por projeto
3. **Formulário de Contato**: Integração com serviço de email
4. **Analytics**: Google Analytics ou similar
5. **Testes**: Jest + React Testing Library
6. **E2E Tests**: Playwright ou Cypress
7. **CI/CD**: GitHub Actions para lint/test
8. **Storybook**: Documentação de componentes

## Conclusão

A arquitetura escolhida prioriza:

- ✅ Performance
- ✅ SEO
- ✅ Developer Experience
- ✅ Manutenibilidade
- ✅ Escalabilidade
- ✅ Acessibilidade

Todas as decisões foram tomadas considerando as melhores práticas da indústria e as necessidades específicas de um portfólio profissional moderno.
