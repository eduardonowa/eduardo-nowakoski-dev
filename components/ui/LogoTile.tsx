import type { ReactNode } from 'react'

interface LogoTileProps {
  children: ReactNode
  className?: string
  /** Light warm surface in dark mode for logos with poor contrast on charcoal */
  contrast?: boolean
}

export function LogoTile({
  children,
  className = '',
  contrast = false,
}: Readonly<LogoTileProps>) {
  const classes = ['logo-tile', contrast && 'logo-tile--contrast', className]
    .filter(Boolean)
    .join(' ')

  return <span className={classes}>{children}</span>
}
