# Portfolio - Eduardo Nowakoski

Portfólio profissional completo para desenvolvedor Senior Front-End / Full-Stack AEM, desenvolvido com Next.js, TypeScript, Tailwind CSS e Framer Motion.

## 🚀 Visão Geral

Este projeto é um portfólio moderno e profissional que apresenta a experiência e habilidades de um desenvolvedor sênior especializado em Front-End e AEM (Adobe Experience Manager). O portfólio foi construído com foco em performance, acessibilidade, design moderno e experiência do usuário.

## 🛠️ Stack Tecnológica

### Core

- **Next.js 14** - Framework React com SSR/SSG para otimização de performance e SEO
- **React 18** - Biblioteca UI moderna
- **TypeScript** - Tipagem estática para maior segurança e produtividade

### Estilização

- **Tailwind CSS** - Framework CSS utility-first
- **CSS Variables** - Design tokens para temas e customização
- **PostCSS** - Processamento de CSS

### Funcionalidades

- **Framer Motion** - Animações fluidas e microinterações
- **next-themes** - Gerenciamento de temas (Dark/Light mode)
- **react-intersection-observer** - Animações baseadas em scroll
- **lucide-react** - Ícones modernos e leves

## 📁 Estrutura de Pastas

```
portfolio/
├── app/                    # App Router do Next.js
│   ├── globals.css        # Estilos globais e design tokens
│   ├── layout.tsx         # Layout raiz com providers
│   └── page.tsx           # Página principal
├── components/
│   ├── layout/            # Componentes de layout
│   │   ├── Header.tsx     # Cabeçalho com navegação
│   │   └── Footer.tsx     # Rodapé
│   ├── providers/         # Context providers
│   │   ├── ThemeProvider.tsx  # Provider de temas
│   │   └── I18nProvider.tsx  # Provider de internacionalização
│   └── sections/          # Seções do portfólio
│       ├── Hero.tsx       # Seção hero/apresentação
│       ├── About.tsx      # Sobre mim
│       ├── Experience.tsx # Experiência profissional
│       ├── Technologies.tsx # Tecnologias
│       └── Contact.tsx    # Contato
├── lib/
│   └── i18n/
│       └── translations.ts # Traduções (pt-BR e en-US)
├── public/                # Arquivos estáticos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🎨 Design System

O projeto utiliza um Design System baseado em CSS Variables, permitindo fácil customização e suporte a temas.

### Tokens de Design

Os tokens estão definidos em `app/globals.css` e incluem:

- **Cores**: Primária, secundária, backgrounds, textos, bordas
- **Tipografia**: Fontes e tamanhos
- **Espaçamentos**: Seções e containers
- **Border Radius**: Valores padronizados
- **Shadows**: Sombras para elevação

### Temas

- **Dark Mode** (padrão): Tema escuro moderno
- **Light Mode**: Tema claro profissional
- Persistência da preferência do usuário via localStorage

## 🌍 Internacionalização (i18n)

O portfólio suporta dois idiomas:

- 🇧🇷 **Português (pt-BR)** - Idioma padrão
- 🇺🇸 **Inglês (en-US)**

O sistema de i18n é customizado e armazena a preferência do usuário no localStorage.

## 🚀 Como Rodar Localmente

### Pré-requisitos

- Node.js 18+
- npm, yarn ou pnpm

### Instalação

1. Clone o repositório:

```bash
git clone <repository-url>
cd portfolio
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador

### Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run start` - Inicia servidor de produção
- `npm run lint` - Executa ESLint
- `npm run type-check` - Verifica tipos TypeScript

## 📦 Deploy

### Vercel (Recomendado)

1. Faça push do código para um repositório Git (GitHub, GitLab, Bitbucket)
2. Importe o projeto na [Vercel](https://vercel.com)
3. A Vercel detectará automaticamente Next.js e configurará o build
4. Deploy automático a cada push

### Domínio Customizado

Para usar um domínio customizado como `eduardo-nowakoski-dev.com`:

📖 **Guia completo:** Veja [docs/CUSTOM_DOMAIN_SETUP.md](docs/CUSTOM_DOMAIN_SETUP.md)

**Resumo rápido:**

1. Compre um domínio (Namecheap, Google Domains, etc.)
2. Adicione o domínio na Vercel (Settings > Domains)
3. Configure os registros DNS no seu registrador
4. Aguarde a propagação DNS (1-2 horas)
5. HTTPS será configurado automaticamente

### Outras Plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:

- Netlify
- AWS Amplify
- Railway
- Render

## ✨ Funcionalidades

### Performance

- ✅ Code splitting automático
- ✅ Lazy loading de componentes
- ✅ Otimização de imagens (quando adicionadas)
- ✅ SSR/SSG para melhor SEO

### Acessibilidade

- ✅ ARIA labels
- ✅ Navegação por teclado
- ✅ Contraste adequado (WCAG)
- ✅ Semântica HTML correta

### UX/UI

- ✅ Animações suaves com Framer Motion
- ✅ Scroll animations
- ✅ Microinterações
- ✅ Design responsivo (mobile-first)
- ✅ Dark/Light mode toggle

### SEO

- ✅ Metadata otimizada
- ✅ Open Graph tags
- ✅ Estrutura semântica
- ✅ URLs amigáveis

## 🏗️ Decisões Arquiteturais

### Por que Next.js?

- **SEO**: SSR/SSG nativo para melhor indexação
- **Performance**: Otimizações automáticas (code splitting, image optimization)
- **Developer Experience**: API routes, middleware, etc.
- **Deploy**: Integração perfeita com Vercel
- **Ecosystem**: Grande comunidade e recursos

### Por que TypeScript?

- **Type Safety**: Reduz bugs em tempo de desenvolvimento
- **IntelliSense**: Melhor experiência de desenvolvimento
- **Refactoring**: Mais seguro e confiável
- **Documentação**: Tipos servem como documentação

### Por que Tailwind CSS?

- **Produtividade**: Desenvolvimento mais rápido
- **Consistência**: Design system integrado
- **Performance**: CSS otimizado e purgado
- **Customização**: Fácil extensão com design tokens

### Por que Framer Motion?

- **Performance**: Animações otimizadas
- **API**: Declarativa e intuitiva
- **Flexibilidade**: Animações complexas com pouco código
- **Acessibilidade**: Respeita preferências de movimento

## 📝 Boas Práticas Adotadas

1. **Componentização**: Componentes reutilizáveis e modulares
2. **Separação de Responsabilidades**: Lógica separada da apresentação
3. **TypeScript Strict**: Tipagem rigorosa para maior segurança
4. **Clean Code**: Código limpo e legível
5. **Performance First**: Otimizações desde o início
6. **Acessibilidade**: WCAG 2.1 Level AA
7. **SEO**: Otimizações para mecanismos de busca
8. **Documentação**: Código e decisões documentados

## 🔧 Customização

### Cores

Edite as variáveis CSS em `app/globals.css`:

```css
:root {
  --color-primary: 59 130 246; /* Azul */
  --color-secondary: 139 92 246; /* Roxo */
  /* ... */
}
```

### Conteúdo

Edite as traduções em `lib/i18n/translations.ts` para atualizar textos.

### Seções

Adicione novas seções em `components/sections/` e importe em `app/page.tsx`.

## 📄 Licença

Este projeto é privado e pessoal.

## 👤 Autor

**Eduardo Lopes Nowakoski**

- Email: eduardo_nowa@hotmail.com
- LinkedIn: [linkedin.com/in/eduardo-nowakoski-1598071a4](https://linkedin.com/in/eduardo-nowakoski-1598071a4)
- Phone: +55 54 99648-5010

---

Desenvolvido com ❤️ usando Next.js, TypeScript e Tailwind CSS
