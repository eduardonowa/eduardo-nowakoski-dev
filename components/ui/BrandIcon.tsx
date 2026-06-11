import type { BrandId } from '@/lib/i18n/translations'
import { BRAND_ASSETS } from '@/lib/i18n/translations'

const BRAND_DIMENSIONS: Record<BrandId, { width: number; height: number }> = {
  vivo: { width: 80, height: 28 },
  enel: { width: 80, height: 29 },
  stellantis: { width: 120, height: 25 },
}

interface BrandIconProps {
  brand: BrandId
  className?: string
  priority?: boolean
}

export function BrandIcon({ brand, className = '', priority = false }: Readonly<BrandIconProps>) {
  const asset = BRAND_ASSETS[brand]
  const dimensions = BRAND_DIMENSIONS[brand]

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset.src}
      alt={asset.alt}
      width={dimensions.width}
      height={dimensions.height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={`block h-auto w-auto max-h-8 max-w-[8rem] object-contain object-center ${className}`}
    />
  )
}
