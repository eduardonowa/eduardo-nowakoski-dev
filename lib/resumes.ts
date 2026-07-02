import type { Locale } from '@/lib/i18n/translations'

export type ResumeRole = 'aem' | 'frontend'

const RESUME_PATHS: Record<Locale, Record<ResumeRole, string>> = {
  'en-US': {
    aem: '/resumes/eduardo-nowakoski-senior-aem-engineer.pdf',
    frontend: '/resumes/eduardo-nowakoski-senior-frontend-engineer.pdf',
  },
  'pt-BR': {
    aem: '/resumes/eduardo-nowakoski-desenvolvedor-aem-senior.pdf',
    frontend: '/resumes/eduardo-nowakoski-desenvolvedor-frontend-senior.pdf',
  },
}

export function getResumePath(locale: Locale, role: ResumeRole): string {
  return RESUME_PATHS[locale][role]
}
