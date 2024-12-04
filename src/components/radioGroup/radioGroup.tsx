'use client'

import * as React from 'react'
import { RadioButtonCheckedIcon } from '@/assets/icons'
import { cn } from '@/lib/utils'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import s from './radioGroup.module.scss'

export type Option = {
  label: string
  value: string
}

export interface RadioGroupProps {
  className?: string
  defaultValue?: string
  disabled?: boolean
  onValueChange?: (value: string) => void
  options: Option[]
}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps & React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, defaultValue, disabled, onValueChange, options, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn(s['radio-group'], className)}
      defaultValue={defaultValue}
      disabled={disabled}
      onValueChange={onValueChange}
      ref={ref}
      {...props}
    >
      {options.map(option => (
        <div className={s['radio-group-options']} key={option.value}>
          <RadioGroupItem disabled={disabled} id={option.value} value={option.value} />
          <label data-disabled={disabled} className={s.label} htmlFor={option.value}>
            {option.label}
          </label>
        </div>
      ))}
    </RadioGroupPrimitive.Root>
  )
})

RadioGroup.displayName = 'RadioGroup'

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, disabled, ...props }, ref) => {
  return (
    <div data-disabled={disabled} className={s['radio-group-item']}>
      <div className={s['radio-group-item-flex']}>
        <RadioGroupPrimitive.Item
          className={cn(s['radio-button'], className)}
          disabled={disabled}
          data-disabled={disabled}
          ref={ref}
          {...props}
        >
          <RadioGroupPrimitive.Indicator className={s['radio-indicator']}>
            <RadioButtonCheckedIcon data-disabled={disabled} className={s['radio-checked-icon']} />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
      </div>
    </div>
  )
})

RadioGroupItem.displayName = 'RadioGroupItem'

export { RadioGroup, RadioGroupItem }
