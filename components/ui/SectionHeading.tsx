import type { LucideIcon } from 'lucide-react'

interface SectionHeadingProps {
  icon: LucideIcon
  title: string
  titleId: string
  subtitle?: string
  className?: string
}

export function SectionHeading({
  icon: Icon,
  title,
  titleId,
  subtitle,
  className = 'mb-12',
}: Readonly<SectionHeadingProps>) {
  return (
    <div className={`text-center ${className}`.trim()}>
      <div className="inline-flex items-center gap-2 text-primary mb-4">
        <Icon className="w-6 h-6 shrink-0" aria-hidden="true" />
        <h2 id={titleId} className="text-3xl md:text-4xl font-bold text-text leading-tight">
          {title}
        </h2>
      </div>
      {subtitle ? (
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">{subtitle}</p>
      ) : null}
    </div>
  )
}
