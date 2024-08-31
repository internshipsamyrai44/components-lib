import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'

import s from './button.module.css'

type Props = {
  asChild?: boolean
  fullWidth?: boolean
  variant?: 'ghost' | 'outlined' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<'button'>

export const Button = forwardRef<ElementRef<'button'>, Props>(
  ({ asChild, className, fullWidth, variant = 'primary', ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        {...props}
        className={clsx(s.root, s[variant], fullWidth && s.fullWidth, className)}
        ref={ref}
      />
    )
  }
)
