import dynamic from 'next/dynamic'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

// Lazy load componentes pesados abaixo do fold
const ProfessionalExperience = dynamic(() => import('@/components/sections/ProfessionalExperience').then(mod => ({ default: mod.ProfessionalExperience })), {
  loading: () => null,
  ssr: true,
})

const Experience = dynamic(() => import('@/components/sections/Experience').then(mod => ({ default: mod.Experience })), {
  loading: () => null,
  ssr: true,
})

const Technologies = dynamic(() => import('@/components/sections/Technologies').then(mod => ({ default: mod.Technologies })), {
  loading: () => null,
  ssr: true,
})

const Contact = dynamic(() => import('@/components/sections/Contact').then(mod => ({ default: mod.Contact })), {
  loading: () => null,
  ssr: true,
})

// CodeSnippets carregado apenas após interação do usuário ou delay
const CodeSnippets = dynamic(() => import('@/components/background/CodeSnippets').then(mod => ({ default: mod.CodeSnippets })), {
  loading: () => null,
  ssr: false,
})

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <ScrollProgress />
      <CodeSnippets />
      <Header />
      <Hero />
      <About />
      <ProfessionalExperience />
      <Experience />
      <Technologies />
      <Contact />
      <Footer />
    </main>
  )
}

