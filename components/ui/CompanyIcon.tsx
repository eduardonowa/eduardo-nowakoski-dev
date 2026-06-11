import type { CompanyId } from '@/lib/i18n/translations'
import { COMPANY_ASSETS } from '@/lib/i18n/translations'
import { LogoTile } from '@/components/ui/LogoTile'

const COMPANY_NEEDS_CONTRAST: Record<CompanyId, boolean> = {
  newfold: true,
  merkle: true,
  ntt: false,
  compass: false,
}

const COMPANY_SIZE_CLASSES = {
  md: 'h-9 w-auto max-w-[8.5rem]',
  lg: 'h-11 w-auto max-w-[11rem]',
} as const

interface CompanyIconProps {
  company: CompanyId
  className?: string
  priority?: boolean
  size?: keyof typeof COMPANY_SIZE_CLASSES
}

export function CompanyIcon({
  company,
  className = '',
  priority = false,
  size = 'md',
}: Readonly<CompanyIconProps>) {
  const asset = COMPANY_ASSETS[company]

  return (
    <LogoTile className={className} contrast={COMPANY_NEEDS_CONTRAST[company]}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset.src}
        alt={asset.alt}
        width={160}
        height={48}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`block object-contain object-left ${COMPANY_SIZE_CLASSES[size]}`}
      />
    </LogoTile>
  )
}
