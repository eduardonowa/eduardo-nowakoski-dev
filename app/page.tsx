import dynamic from 'next/dynamic'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { CodeSnippets } from '@/components/background/CodeSnippets'
import { SectionSkeleton } from '@/components/ui/SectionSkeleton'

const ProfessionalExperience = dynamic(
  () =>
    import('@/components/sections/ProfessionalExperience').then((mod) => ({
      default: mod.ProfessionalExperience,
    })),
  { loading: () => <SectionSkeleton minHeight="min-h-[480px]" />, ssr: true }
)

const Metrics = dynamic(
  () => import('@/components/sections/Metrics').then((mod) => ({ default: mod.Metrics })),
  { loading: () => <SectionSkeleton minHeight="min-h-[280px]" />, ssr: true }
)

const Experience = dynamic(
  () => import('@/components/sections/Experience').then((mod) => ({ default: mod.Experience })),
  { loading: () => <SectionSkeleton minHeight="min-h-[400px]" />, ssr: true }
)

const CaseStudy = dynamic(
  () => import('@/components/sections/CaseStudy').then((mod) => ({ default: mod.CaseStudy })),
  { loading: () => <SectionSkeleton minHeight="min-h-[520px]" />, ssr: true }
)

const AemArchitecture = dynamic(
  () => import('@/components/sections/AemArchitecture').then((mod) => ({ default: mod.AemArchitecture })),
  { loading: () => <SectionSkeleton minHeight="min-h-[480px]" />, ssr: true }
)

const Technologies = dynamic(
  () => import('@/components/sections/Technologies').then((mod) => ({ default: mod.Technologies })),
  { loading: () => <SectionSkeleton minHeight="min-h-[400px]" />, ssr: true }
)

const Contact = dynamic(
  () => import('@/components/sections/Contact').then((mod) => ({ default: mod.Contact })),
  { loading: () => <SectionSkeleton minHeight="min-h-[320px]" />, ssr: true }
)

const AiWorkflow = dynamic(
  () => import('@/components/sections/AiWorkflow').then((mod) => ({ default: mod.AiWorkflow })),
  { loading: () => <SectionSkeleton minHeight="min-h-[280px]" />, ssr: true }
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
      <CaseStudy />
      <AemArchitecture />
      <Technologies />
      <Contact />
      <AiWorkflow />
      <Footer />
    </main>
  )
}
