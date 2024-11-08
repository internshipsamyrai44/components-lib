'use client'

import * as React from 'react'

import { RadioButtonCheckedIcon } from '@/assets/icons'
import { cn } from '@/lib/utils'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

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
      className={cn('grid gap-2', className)}
      defaultValue={defaultValue}
      disabled={disabled}
      onValueChange={onValueChange}
      ref={ref}
      {...props}
    >
      {options.map(option => (
        <div className={'flex items-center gap-0.5'} key={option.value}>
          <RadioGroupItem disabled={disabled} id={option.value} value={option.value} />
          <label
            className={cn('text-regular_14', disabled ? 'text-dark-100' : 'text-light-100')}
            htmlFor={option.value}
          >
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
    <div
      className={cn(
        'flex items-center justify-center h-[36px] w-[36px] rounded-full transition-colors',
        disabled ? '' : 'hover:bg-dark-300 active:bg-dark-100 focus-within:bg-dark-300'
      )}
    >
      <div className={'flex items-center justify-center h-[24px] w-[24px]'}>
        <RadioGroupPrimitive.Item
          className={cn(
            'flex items-center justify-center h-[20px] w-[20px] rounded-full border-2 border-light-100 bg-transparent focus:outline-none',
            disabled && 'border-dark-100',
            className
          )}
          disabled={disabled}
          ref={ref}
          {...props}
        >
          <RadioGroupPrimitive.Indicator className={'h-[24px] w-[24px]'}>
            <RadioButtonCheckedIcon className={cn(disabled ? 'fill-dark-100' : 'fill-light-100')} />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
      </div>
    </div>
  )
})

RadioGroupItem.displayName = 'RadioGroupItem'

export { RadioGroup, RadioGroupItem }
