'use client'

import * as React from 'react'
import {RadioButtonChecked} from '@/assets/icons/radio-button-checked'
import {cn} from '@/lib/utils'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

export type Option = {
  label: string
  value: string
}

export interface RadioGroupProps {
  options: Option[]
  defaultValue?: string
  onValueChange?: (value: string) => void
  className?: string
  disabled?: boolean
}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps & React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({className, options, defaultValue, onValueChange, disabled, ...props}, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-2', className)}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {options.map(option => (
        <div className={'flex items-center gap-0.5'} key={option.value}>
          <RadioGroupItem id={option.value} value={option.value} disabled={disabled}/>
          <label className={cn('text-regular_14', disabled ? 'text-dark-100' : 'text-light-100')}
                 htmlFor={option.value}>
            {option.label}
          </label>
        </div>
      ))}
    </RadioGroupPrimitive.Root>
  )
})

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({className, disabled, ...props}, ref) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center h-[36px] w-[36px] rounded-full transition-colors',
        !disabled && 'hover:bg-dark-300 active:bg-dark-100 focus-visible:outline-none focus-visible:bg-dark-500'
      )}
    >
      <div className={'flex items-center justify-center h-[24px] w-[24px]'}>
        <RadioGroupPrimitive.Item
          className={cn(
            'flex items-center justify-center h-[20px] w-[20px] rounded-full border-2 border-light-100 bg-transparent',
            disabled && 'border-dark-100',
            className
          )}
          ref={ref}
          disabled={disabled}
          {...props}
        >
          <RadioGroupPrimitive.Indicator className={'h-[24px] w-[24px]'}>
            <RadioButtonChecked className={cn(disabled ? 'fill-dark-100' : 'fill-light-100')}/>
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
      </div>
    </div>
  )
})

RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export {RadioGroup, RadioGroupItem}