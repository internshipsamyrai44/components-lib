'use client'

import * as React from 'react'

import { CheckComponent } from '@/assets/icons/check'
import { cn } from '@/lib/utils'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import style from './checkbox.module.css'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <div className={style.wrapper}>
    <CheckboxPrimitive.Root className={cn(style.root, className)} ref={ref} {...props}>
      <CheckboxPrimitive.Indicator className={cn(style.indicator)}>
        <CheckComponent className={cn(style.check, props.disabled ? style.disabled : null)} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  </div>
))

Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
