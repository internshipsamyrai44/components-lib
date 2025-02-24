import * as React from 'react'
import { ComponentPropsWithoutRef, useId } from 'react'

import { CheckIcon } from '@/assets/icons'
import { cn } from '@/lib/utils'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import style from './checkbox.module.scss'

type CheckboxProps = {
  label?: null | string
  onChange?: (checked: CheckboxPrimitive.CheckedState) => void
} & ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, id, label, onChange, ...props }, ref) => {
    const innerId = useId()
    const finalId = id ?? innerId

    return (
      <div className={cn(style.container, className)}>
        <div className={cn(style.wrapper, props.disabled ? style['is-disabled'] : '')}>
          <CheckboxPrimitive.Root
            id={finalId}
            className={style.root}
            onCheckedChange={onChange}
            ref={ref}
            {...props}
          >
            <CheckboxPrimitive.Indicator asChild>
              <CheckIcon className={cn(style.check, props.disabled && style.disabled)} />
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

Checkbox.displayName = 'Checkbox'

export { Checkbox }
