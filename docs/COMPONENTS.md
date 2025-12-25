# Componentes - Documentação

## Visão Geral

Esta documentação descreve os componentes principais do portfólio, seus props, uso e exemplos.

## Layout Components

### Header

Componente de cabeçalho com navegação, toggle de tema e idioma.

**Localização:** `components/layout/Header.tsx`

**Funcionalidades:**

- Navegação responsiva
- Menu mobile com animação
- Toggle de tema (dark/light)
- Toggle de idioma (pt-BR/en-US)
- Header fixo com blur no scroll
- Animações com Framer Motion

**Uso:**

```tsx
import { Header } from '@/components/layout/Header';

<Header />;
```

**Props:** Nenhum (usa contexto de i18n e theme)

### Footer

Componente de rodapé com informações de copyright.

**Localização:** `components/layout/Footer.tsx`

**Uso:**

```tsx
import { Footer } from '@/components/layout/Footer';

<Footer />;
```

## Section Components

### Hero

Seção principal de apresentação com CTAs.

**Localização:** `components/sections/Hero.tsx`

**Funcionalidades:**

- Apresentação profissional
- Headline destacando senioridade
- CTAs para projetos e contato
- Animação de scroll down
- Animações escalonadas

**Uso:**

```tsx
import { Hero } from '@/components/sections/Hero';

<Hero />;
```

### About

Seção sobre o desenvolvedor com resumo profissional.

**Localização:** `components/sections/About.tsx`

**Funcionalidades:**

- Conteúdo baseado em traduções
- Animações de entrada
- Layout responsivo

**Uso:**

```tsx
import { About } from '@/components/sections/About';

<About />;
```

### Experience

Seção de experiência profissional com projetos anonimizados.

**Localização:** `components/sections/Experience.tsx`

**Funcionalidades:**

- Cards de projetos
- Informações: segmento, tipo, stack, atuação
- Ícones por projeto
- Animações escalonadas

**Projetos Exibidos:**

1. **Telecomunicações** - E-commerce B2B
2. **Automotivo** - Landing page reutilizável
3. **Energia** - Portais institucionais

**Uso:**

```tsx
import { Experience } from '@/components/sections/Experience';

<Experience />;
```

### Technologies

Seção de tecnologias e ferramentas agrupadas por categoria.

**Localização:** `components/sections/Technologies.tsx`

**Funcionalidades:**

- Grid responsivo de categorias
- Badges de tecnologias
- Animações de entrada

**Categorias:**

- Frontend
- Language
- CMS
- Backend
- Template
- AEM
- State
- Testing
- Documentation
- Styling
- Tools
- Workflow
- DevOps
- Architecture

**Uso:**

```tsx
import { Technologies } from '@/components/sections/Technologies';

<Technologies />;
```

### Contact

Seção de contato com informações e links.

**Localização:** `components/sections/Contact.tsx`

**Funcionalidades:**

- Cards de métodos de contato
- Links para email, telefone e LinkedIn
- CTA principal
- Animações de hover

**Uso:**

```tsx
import { Contact } from '@/components/sections/Contact';

<Contact />;
```

## Provider Components

### ThemeProvider

Provider para gerenciamento de temas usando `next-themes`.

**Localização:** `components/providers/ThemeProvider.tsx`

**Funcionalidades:**

- Dark mode como padrão
- Persistência no localStorage
- Suporte a sistema (desabilitado)

**Uso:**

```tsx
import { ThemeProvider } from '@/components/providers/ThemeProvider';

<ThemeProvider>{children}</ThemeProvider>;
```

**Hook:**

```tsx
import { useTheme } from 'next-themes';

const { theme, setTheme } = useTheme();
```

### I18nProvider

Provider para internacionalização customizado.

**Localização:** `components/providers/I18nProvider.tsx`

**Funcionalidades:**

- Suporte a pt-BR e en-US
- Persistência no localStorage
- Atualização do atributo `lang` do HTML

**Uso:**

```tsx
import { I18nProvider } from '@/components/providers/I18nProvider';

<I18nProvider>{children}</I18nProvider>;
```

**Hook:**

```tsx
import { useI18n } from '@/components/providers/I18nProvider';

const { locale, setLocale, t } = useI18n();
```

## Padrões de Uso

### Animações com Framer Motion

Todos os componentes de seção usam animações baseadas em scroll:

```tsx
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.1,
})

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 30 }}
  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
  transition={{ duration: 0.6 }}
>
  {/* Conteúdo */}
</motion.div>
```

### Internacionalização

Todos os textos vêm das traduções:

```tsx
import { useI18n } from '@/components/providers/I18nProvider'

const { t } = useI18n()

<h1>{t.hero.title}</h1>
```

### Tema

Componentes se adaptam automaticamente ao tema:

```tsx
// Classes Tailwind usam tokens CSS que mudam com o tema
<div className="bg-background text-text border-border">{/* Conteúdo */}</div>
```

## Estrutura de IDs

Seções usam IDs para navegação:

- `#home` - Hero section
- `#about` - About section
- `#experience` - Experience section
- `#technologies` - Technologies section
- `#contact` - Contact section

## Responsividade

Todos os componentes são responsivos usando classes Tailwind:

```tsx
className = 'text-2xl md:text-4xl lg:text-6xl';
className = 'grid md:grid-cols-2 lg:grid-cols-3';
className = 'px-4 sm:px-6 lg:px-8';
```

## Acessibilidade

- Todos os botões têm `aria-label`
- Links têm texto descritivo
- Navegação por teclado funcional
- Contraste adequado em ambos os temas
- Semântica HTML correta

## Customização

Para adicionar novos componentes:

1. Crie o arquivo em `components/`
2. Use os padrões estabelecidos (animações, i18n, tema)
3. Importe e use em `app/page.tsx`
4. Adicione traduções em `lib/i18n/translations.ts`

## Exemplos

### Criar Nova Seção

```tsx
'use client';

import { useI18n } from '@/components/providers/I18nProvider';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function NewSection() {
  const { t } = useI18n();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="new-section"
      ref={ref}
      className="py-section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text">{t.newSection.title}</h2>
        </motion.div>
      </div>
    </section>
  );
}
```
