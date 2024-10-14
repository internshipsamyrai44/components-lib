import { ComponentPropsWithoutRef, PropsWithChildren, forwardRef } from 'react'

import { cn } from '@/lib/utils'

export type CardProps = ComponentPropsWithoutRef<'div'> & PropsWithChildren

const Card = forwardRef<HTMLDivElement, CardProps>(({ children, className, ...restProps }, ref) => {
  return (
    <div
      className={cn(
        'box-border h-[6.25rem] w-[6.25rem] border rounded-sm border-dark-300 bg-dark-500',
        className
      )}
      ref={ref}
      {...restProps}
    >
      {children}
    </div>
  )
})

Card.displayName = 'Card'
export { Card }
