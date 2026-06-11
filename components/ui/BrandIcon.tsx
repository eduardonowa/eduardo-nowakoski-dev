import type { BrandId } from '@/lib/i18n/translations'
import { BRAND_ASSETS } from '@/lib/i18n/translations'
import { LogoTile } from '@/components/ui/LogoTile'

const BRAND_NEEDS_CONTRAST: Record<BrandId, boolean> = {
  stellantis: true,
  enel: true,
  vivo: false,
}

const BRAND_SIZE_CLASSES = {
  md: 'h-8 w-auto max-w-[8rem]',
  lg: 'h-10 w-auto max-w-[10rem]',
} as const

interface BrandIconProps {
  brand: BrandId
  className?: string
  priority?: boolean
  size?: keyof typeof BRAND_SIZE_CLASSES
}

export function BrandIcon({
  brand,
  className = '',
  priority = false,
  size = 'md',
}: Readonly<BrandIconProps>) {
  const asset = BRAND_ASSETS[brand]

  return (
    <LogoTile className={className} contrast={BRAND_NEEDS_CONTRAST[brand]}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset.src}
        alt={asset.alt}
        width={140}
        height={40}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`block object-contain object-left ${BRAND_SIZE_CLASSES[size]}`}
      />
    </LogoTile>
  )
}
