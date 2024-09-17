'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { Circle } from 'lucide-react'

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} ref={ref} />
})

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  const isDisabled = props.disabled

  return (
    <div
      className={`flex items-center justify-center h-[36px] w-[36px] rounded-full ${isDisabled ? '' : 'hover:bg-dark-300 active:bg-dark-100 focus-visible:bg-dark-500'}
      `}
    >
      <div className={'flex items-center justify-center h-[24px] w-[24px]'}>
        <RadioGroupPrimitive.Item
          className={cn(
            'h-[20px] w-[20px] rounded-full border-2 border-light-100 bg-transparent disabled:border-dark-100',
            className
          )}
          ref={ref}
          {...props}
        >
          <RadioGroupPrimitive.Indicator
            className={'flex items-center justify-center h-full w-full rounded-full'}
          >
            <Circle
              className={`h-[10px] w-[10px] fill-current ${isDisabled ? 'text-dark-100' : 'text-light-100'}`}
            />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
      </div>
    </div>
  )
})

RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
