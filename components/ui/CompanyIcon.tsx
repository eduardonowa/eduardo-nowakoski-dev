import type { CompanyId } from '@/lib/i18n/translations'
import { COMPANY_ASSETS } from '@/lib/i18n/translations'

const COMPANY_DIMENSIONS: Record<CompanyId, { width: number; height: number }> = {
  newfold: { width: 120, height: 35 },
  ntt: { width: 100, height: 20 },
  merkle: { width: 110, height: 23 },
  compass: { width: 120, height: 16 },
}

interface CompanyIconProps {
  company: CompanyId
  className?: string
  priority?: boolean
}

export function CompanyIcon({ company, className = '', priority = false }: Readonly<CompanyIconProps>) {
  const asset = COMPANY_ASSETS[company]
  const dimensions = COMPANY_DIMENSIONS[company]

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset.src}
      alt={asset.alt}
      width={dimensions.width}
      height={dimensions.height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={`block h-auto w-auto max-h-9 max-w-[7.5rem] object-contain object-center ${className}`}
    />
  )
}
