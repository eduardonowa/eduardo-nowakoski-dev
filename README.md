# 💼 Portfolio - Eduardo Nowakoski

> Modern, responsive portfolio website for Senior Front-End / Full-Stack AEM Developer built with Next.js, TypeScript, and Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-18.3-61dafb?style=flat-square&logo=react)](https://reactjs.org/)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 🌓 **Dark/Light Mode** - Theme switching with persistent user preference
- 🌍 **Internationalization** - Support for Portuguese (pt-BR) and English (en-US)
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Performance Optimized** - Built with Next.js 14 for optimal performance
- ♿ **Accessible** - WCAG 2.1 Level AA compliant
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and semantic HTML
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🧪 **Well Tested** - Comprehensive test coverage with Jest
- 📚 **Storybook** - Component documentation and testing

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📜 Available Scripts

| Script                    | Description                    |
| ------------------------- | ------------------------------ |
| `npm run dev`             | Start development server       |
| `npm run build`           | Build for production           |
| `npm run start`           | Start production server        |
| `npm run lint`            | Run ESLint                     |
| `npm run type-check`      | Check TypeScript types         |
| `npm test`                | Run tests                      |
| `npm run test:watch`      | Run tests in watch mode        |
| `npm run test:coverage`   | Generate test coverage report  |
| `npm run storybook`       | Start Storybook                |
| `npm run build-storybook` | Build Storybook for production |

## 🛠️ Tech Stack

### Core

- **[Next.js 14](https://nextjs.org/)** - React framework with SSR/SSG
- **[React 18](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### Styling

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **CSS Variables** - Design tokens for theming

### Features

- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[next-themes](https://github.com/pacocrawford/next-themes)** - Theme management
- **[react-intersection-observer](https://github.com/thebuilder/react-intersection-observer)** - Scroll animations
- **[lucide-react](https://lucide.dev/)** - Icon library

### Development

- **[Jest](https://jestjs.io/)** - Testing framework
- **[Storybook](https://storybook.js.org/)** - Component documentation
- **[ESLint](https://eslint.org/)** - Code linting

## 📁 Project Structure

```
portfolio/
├── app/                          # Next.js App Router
│   ├── globals.css               # Global styles and design tokens
│   ├── layout.tsx                 # Root layout with providers
│   └── page.tsx                   # Home page
├── components/
│   ├── background/               # Background components
│   │   ├── CodeGridBackground.tsx
│   │   └── CodeSnippets.tsx
│   ├── layout/                   # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── providers/                # Context providers
│   │   ├── ThemeProvider.tsx
│   │   └── I18nProvider.tsx
│   ├── sections/                 # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── ProfessionalExperience.tsx
│   │   ├── Technologies.tsx
│   │   └── Contact.tsx
│   └── ui/                       # UI components
│       ├── LoadingSkeleton.tsx
│       ├── ScrollProgress.tsx
│       └── TextReveal.tsx
├── hooks/                        # Custom React hooks
│   ├── useMagnetic.ts
│   └── useParallax.ts
├── lib/
│   └── i18n/
│       └── translations.ts       # i18n translations
├── __tests__/                    # Test files
├── docs/                        # Documentation
├── public/                       # Static assets
└── .storybook/                 # Storybook configuration
```

## 🎨 Design System

The project uses a design system based on CSS Variables (Dracula-inspired theme) for easy customization and theme support.

### Theme Colors

- **Primary**: Purple (#BD93F9)
- **Secondary**: Pink (#FF79C6)
- **Background**: Dark (#282A36) / Light (#FFFFFF)
- **Text**: Foreground (#F8F8F2) / Dark (#282A36)

### Customization

Edit CSS variables in `app/globals.css` to customize colors, spacing, and other design tokens.

## 🌍 Internationalization

The portfolio supports two languages:

- 🇧🇷 **Portuguese (pt-BR)** - Default
- 🇺🇸 **English (en-US)**

Language preference is stored in localStorage and persists across sessions.

## 🧪 Testing

### Run Tests

```bash
npm test
```

### Watch Mode

```bash
npm run test:watch
```

### Coverage Report

```bash
npm run test:coverage
```

### Storybook

```bash
npm run storybook
```

Opens Storybook at [http://localhost:6006](http://localhost:6006)

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import the project on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Automatic deployments on every push

## 📚 Documentation

- [Deployment Guide](docs/DEPLOY.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Components](docs/COMPONENTS.md)
- [Design System](docs/DESIGN_SYSTEM.md)
- [Performance](docs/PERFORMANCE.md)

## 🏗️ Architecture Decisions

### Why Next.js?

- **SEO**: Native SSR/SSG for better search engine indexing
- **Performance**: Automatic optimizations (code splitting, image optimization)
- **Developer Experience**: Great DX with hot reload, TypeScript support
- **Deployment**: Seamless integration with Vercel
- **Ecosystem**: Large community and resources

### Why TypeScript?

- **Type Safety**: Catch errors at compile time
- **IntelliSense**: Better IDE support and autocomplete
- **Refactoring**: Safer and more reliable code changes
- **Documentation**: Types serve as inline documentation

### Why Tailwind CSS?

- **Productivity**: Faster development with utility classes
- **Consistency**: Integrated design system
- **Performance**: Optimized and purged CSS
- **Customization**: Easy to extend with design tokens

## ✨ Key Features

### Performance

- ✅ Automatic code splitting
- ✅ Lazy loading components
- ✅ Image optimization (when images are added)
- ✅ SSR/SSG for better SEO

### Accessibility

- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ WCAG 2.1 Level AA compliant
- ✅ Semantic HTML

### UX/UI

- ✅ Smooth animations with Framer Motion
- ✅ Scroll-based animations
- ✅ Micro-interactions
- ✅ Responsive design (mobile-first)
- ✅ Dark/Light mode toggle

### SEO

- ✅ Optimized metadata
- ✅ Open Graph tags
- ✅ Semantic structure
- ✅ Clean URLs

## 🤝 Contributing

This is a personal portfolio project. However, if you find any issues or have suggestions, feel free to open an issue or submit a pull request.

## 📄 License

This project is private and personal.

## 👤 Author

**Eduardo Lopes Nowakoski**

- 📧 Email: eduardo_nowa@hotmail.com
- 💼 LinkedIn: [linkedin.com/in/eduardo-nowakoski-1598071a4](https://linkedin.com/in/eduardo-nowakoski-1598071a4)
- 📱 Phone: +55 54 99648-5010

---

<div align="center">

Made with ❤️ using [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/)

</div>
