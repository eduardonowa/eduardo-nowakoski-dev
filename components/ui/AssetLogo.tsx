import { LogoTile } from '@/components/ui/LogoTile'

type AssetLogoSize = 'md' | 'lg'

interface AssetLogoProps {
  src: string
  alt: string
  contrast?: boolean
  priority?: boolean
  size?: AssetLogoSize
  className?: string
  width?: number
  height?: number
  sizeClasses: Record<AssetLogoSize, string>
}

export function AssetLogo({
  src,
  alt,
  contrast = false,
  priority = false,
  size = 'md',
  className = '',
  width = 140,
  height = 40,
  sizeClasses,
}: Readonly<AssetLogoProps>) {
  return (
    <LogoTile className={className} contrast={contrast}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`block object-contain object-left ${sizeClasses[size]}`}
      />
    </LogoTile>
  )
}
