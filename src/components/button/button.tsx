import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'

type Props = {
  asChild?: boolean
  fullWidth?: boolean
  variant?: 'ghost' | 'outlined' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<'button'>

export const Button = forwardRef<ElementRef<'button'>, Props>(
  ({ asChild, className, fullWidth, variant = 'primary', ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    const isGhost = variant === 'ghost'
    const isOutlined = variant === 'outlined'
    const isSecondary = variant === 'secondary'
    const isPrimary = variant === 'primary'

    return (
      <Comp
        {...props}
        className={cn(
          'cursor-pointer inline-flex items-center box-border rounded py-1.5 px-6',
          'focus-visible:outline outline-2 focus-visible:outline-accent-700',
          fullWidth && 'justify-center items-center w-full',
          isPrimary &&
            'text-light-100 bg-accent-500 active:text-light-100 active:bg-accent-700 hover:bg-accent-100 disabled:bg-accent-900 disabled:text-light-900',
          isSecondary &&
            'text-light-100 bg-dark-300 active:bg-dark-500 hover:bg-dark-100 focus-visible:bg-dark-300 focus-visible:outline-accent-300',
          isOutlined &&
            'text-accent-500 bg-transparent border-accent-500 box-border border-solid border-2 active:border-accent-700 active:text-accent-700',
          isOutlined &&
            'hover:border-accent-100 hover:text-accent-100 focus-visible:border-transparent focus-visible:text-accent-700 disabled:border-accent-900 disabled:text-accent-900',
          isGhost &&
            'border-none text-accent-500 bg-transparent active:text-accent-700 hover:text-accent-100 disabled:text-accent-900 disabled:bg-transparent'
        )}
        ref={ref}
      />
    )
  }
)
