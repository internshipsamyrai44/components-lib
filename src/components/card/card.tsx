import { ComponentPropsWithoutRef, PropsWithChildren, forwardRef } from 'react'

import { cn } from '@/lib/utils'
import s from './card.module.scss'

export type CardProps = ComponentPropsWithoutRef<'div'> & PropsWithChildren

const Card = forwardRef<HTMLDivElement, CardProps>(({ children, className, ...restProps }, ref) => {
  return (
    <div className={cn(s['card-wrapper'], className)} ref={ref} {...restProps}>
      {children}
    </div>
  )
})

Card.displayName = 'Card'
export { Card }
