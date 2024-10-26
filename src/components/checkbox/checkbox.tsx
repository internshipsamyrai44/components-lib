import * as React from 'react'
import { ComponentPropsWithoutRef, useId } from 'react'

import { CheckComponent } from '@/assets/icons/check'
import { cn } from '@/lib/utils'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import style from './checkbox.module.css'

type CheckboxProps = {
  label?: null | string

  onChange?: (checked: CheckboxPrimitive.CheckedState) => void
} & ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, id, label, onChange, ...props }, ref) => {
    const innerId = useId()
    const finalId = id ?? innerId

    return (
      <div className={style.container}>
        <div className={cn(props.disabled ? style.disabledwrapper : style.wrapper)}>
          <CheckboxPrimitive.Root
            className={cn(style.root, className)}
            onCheckedChange={onChange}
            ref={ref}
            {...props}
          >
            <CheckboxPrimitive.Indicator className={cn(style.indicator)}>
              <CheckComponent className={cn(style.check, props.disabled ? style.disabled : null)} />
            </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>
        </div>
        {label && (
          <label
            className={cn(props.disabled ? style.disabledlabel : style.label)}
            htmlFor={finalId}
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)

Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
