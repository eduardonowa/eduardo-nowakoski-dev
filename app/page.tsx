import dynamic from 'next/dynamic'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { AiWorkflow } from '@/components/sections/AiWorkflow'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { CodeSnippets } from '@/components/background/CodeSnippets'

const ProfessionalExperience = dynamic(
  () =>
    import('@/components/sections/ProfessionalExperience').then((mod) => ({
      default: mod.ProfessionalExperience,
    })),
  { loading: () => null, ssr: true }
)

const Metrics = dynamic(
  () => import('@/components/sections/Metrics').then((mod) => ({ default: mod.Metrics })),
  { loading: () => null, ssr: true }
)

const Experience = dynamic(
  () => import('@/components/sections/Experience').then((mod) => ({ default: mod.Experience })),
  { loading: () => null, ssr: true }
)

const Technologies = dynamic(
  () => import('@/components/sections/Technologies').then((mod) => ({ default: mod.Technologies })),
  { loading: () => null, ssr: true }
)

const Contact = dynamic(
  () => import('@/components/sections/Contact').then((mod) => ({ default: mod.Contact })),
  { loading: () => null, ssr: true }
)

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen relative">
      <ScrollProgress />
      <CodeSnippets />
      <Header />
      <Hero />
      <About />
      <ProfessionalExperience />
      <Metrics />
      <Experience />
      <AiWorkflow />
      <Technologies />
      <Contact />
      <Footer />
    </main>
  )
}
