import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import styles from './button.module.scss' // Импортируем стили

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
        className={cn(
          styles.button,
          fullWidth && styles['full-width'],
          variant && styles[variant], // Используем классы по имени варианта
          className
        )}
        ref={ref}
      />
    )
  }
)
