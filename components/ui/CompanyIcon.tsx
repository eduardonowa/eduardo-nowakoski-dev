import type { CompanyId } from '@/lib/i18n/translations'
import { COMPANY_ASSETS } from '@/lib/i18n/translations'
import { AssetLogo } from '@/components/ui/AssetLogo'

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
    <AssetLogo
      src={asset.src}
      alt={asset.alt}
      contrast={COMPANY_NEEDS_CONTRAST[company]}
      priority={priority}
      size={size}
      className={className}
      width={160}
      height={48}
      sizeClasses={COMPANY_SIZE_CLASSES}
    />
  )
}
