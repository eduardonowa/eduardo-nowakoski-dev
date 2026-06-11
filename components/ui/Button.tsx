import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode, type Ref } from 'react'

type ButtonVariant = 'primary' | 'outline'
type ButtonSize = 'md' | 'lg'

type BaseProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
}

export type ButtonProps = BaseProps &
  (
    | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
    | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  )

const sizeClasses: Record<ButtonSize, string> = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-on-primary hover:bg-primary-dark shadow-md hover:shadow-lg',
  outline:
    'border-2 border-primary text-primary bg-background hover:bg-primary hover:text-on-primary',
}

function getButtonClasses(variant: ButtonVariant, size: ButtonSize, className: string) {
  return [
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300',
    sizeClasses[size],
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ')
}

export const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = 'primary', size = 'lg', className = '', children, href, ...props },
    ref
  ) {
    const classes = getButtonClasses(variant, size, className)

    if (href) {
      const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>
      return (
        <a ref={ref as Ref<HTMLAnchorElement>} href={href} className={classes} {...anchorProps}>
          {children}
        </a>
      )
    }

    const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>
    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        type="button"
        className={classes}
        {...buttonProps}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
