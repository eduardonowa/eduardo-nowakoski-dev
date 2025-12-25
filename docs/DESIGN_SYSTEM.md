# Design System Documentation

## Visão Geral

Este documento descreve o Design System utilizado no portfólio, baseado em CSS Variables e integrado ao Tailwind CSS.

## Tokens de Design

### Cores

#### Tema Claro (Light)

```css
--color-primary: 59 130 246; /* Azul primário */
--color-primary-light: 96 165 250; /* Azul claro */
--color-primary-dark: 37 99 235; /* Azul escuro */

--color-secondary: 139 92 246; /* Roxo secundário */
--color-secondary-light: 167 139 250; /* Roxo claro */
--color-secondary-dark: 124 58 237; /* Roxo escuro */

--color-background: 255 255 255; /* Branco */
--color-background-secondary: 249 250 251; /* Cinza muito claro */

--color-text: 17 24 39; /* Preto suave */
--color-text-secondary: 55 65 81; /* Cinza médio */
--color-text-muted: 107 114 128; /* Cinza claro */

--color-border: 229 231 235; /* Borda clara */
--color-border-light: 243 244 246; /* Borda muito clara */
```

#### Tema Escuro (Dark)

```css
--color-primary: 96 165 250; /* Azul claro */
--color-primary-light: 147 197 253; /* Azul muito claro */
--color-primary-dark: 59 130 246; /* Azul médio */

--color-secondary: 167 139 250; /* Roxo claro */
--color-secondary-light: 196 181 253; /* Roxo muito claro */
--color-secondary-dark: 139 92 246; /* Roxo médio */

--color-background: 17 24 39; /* Cinza muito escuro */
--color-background-secondary: 31 41 55; /* Cinza escuro */

--color-text: 243 244 246; /* Branco suave */
--color-text-secondary: 209 213 219; /* Cinza claro */
--color-text-muted: 156 163 175; /* Cinza médio */

--color-border: 55 65 81; /* Borda escura */
--color-border-light: 31 41 55; /* Borda muito escura */
```

### Tipografia

```css
--font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
  'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
```

**Hierarquia de Tamanhos:**

- Hero Title: `text-4xl md:text-6xl lg:text-7xl`
- Section Title: `text-3xl md:text-4xl`
- Subtitle: `text-xl md:text-2xl lg:text-3xl`
- Body: `text-lg md:text-xl`
- Small: `text-sm`

### Espaçamentos

```css
--spacing-section: 6rem; /* Espaçamento entre seções */
--spacing-container: 1.5rem; /* Padding de containers */
```

**Sistema de Espaçamento:**

- Seções: `py-section` (6rem vertical)
- Containers: Padding responsivo `px-4 sm:px-6 lg:px-8`
- Gaps: `gap-2`, `gap-4`, `gap-6` para grids e flex

### Border Radius

```css
--radius-sm: 0.25rem; /* 4px */
--radius-md: 0.5rem; /* 8px */
--radius-lg: 0.75rem; /* 12px */
--radius-xl: 1rem; /* 16px */
```

**Uso:**

- Cards: `rounded-xl` (1rem)
- Buttons: `rounded-lg` (0.75rem)
- Badges: `rounded-md` (0.5rem)

### Shadows

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
```

**Uso:**

- Cards hover: `hover:shadow-lg`
- Buttons: `shadow-lg hover:shadow-xl`
- Header scrolled: `shadow-md`

## Componentes

### Botões

#### Primary Button

```tsx
<button
  className="px-8 py-4 bg-primary text-white rounded-lg font-medium 
                   hover:bg-primary-dark transition-all duration-300 
                   shadow-lg hover:shadow-xl"
>
  Texto
</button>
```

#### Secondary Button

```tsx
<button
  className="px-8 py-4 border-2 border-primary text-primary rounded-lg 
                   font-medium hover:bg-primary hover:text-white 
                   transition-all duration-300"
>
  Texto
</button>
```

### Cards

```tsx
<div
  className="bg-background-secondary border border-border rounded-xl p-6 
                hover:shadow-lg transition-all duration-300"
>
  {/* Conteúdo */}
</div>
```

### Badges/Tags

```tsx
<span
  className="px-3 py-1 bg-primary/10 text-primary rounded-md 
                 text-sm font-medium"
>
  Tecnologia
</span>
```

## Animações

### Scroll Animations

Utilizamos `react-intersection-observer` para animações baseadas em scroll:

```tsx
const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.1,
})

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
  transition={{ duration: 0.6 }}
>
  {/* Conteúdo */}
</motion.div>
```

### Hover Animations

```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  {/* Conteúdo */}
</motion.div>
```

## Responsividade

### Breakpoints (Tailwind)

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Estratégia Mobile-First

Todos os estilos começam mobile e são aumentados com breakpoints:

```tsx
className = 'text-2xl md:text-4xl lg:text-6xl';
```

## Acessibilidade

### Contraste

- Texto principal: Contraste mínimo 4.5:1 (WCAG AA)
- Texto grande: Contraste mínimo 3:1 (WCAG AA)
- Elementos interativos: Contraste claro

### Navegação por Teclado

- Todos os elementos interativos são focáveis
- Indicadores de foco visíveis
- Ordem lógica de tabulação

### ARIA Labels

```tsx
<button aria-label="Toggle theme">
  <Sun />
</button>
```

## Customização

Para customizar o Design System:

1. Edite `app/globals.css` para alterar tokens CSS
2. Atualize `tailwind.config.ts` para novas classes utilitárias
3. Modifique componentes em `components/` para novos padrões

## Boas Práticas

1. **Sempre use tokens CSS** ao invés de valores hardcoded
2. **Mantenha consistência** usando classes Tailwind padronizadas
3. **Teste em ambos os temas** (dark e light)
4. **Valide acessibilidade** com ferramentas como Lighthouse
5. **Mantenha performance** evitando animações pesadas

