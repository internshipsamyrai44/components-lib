'use client'

import * as React from 'react'
import { ComponentPropsWithoutRef } from 'react'

import { ChevronDown } from '@/assets/icons/chevron-down'
import { cn } from '@/lib/utils'
import * as SelectPrimitive from '@radix-ui/react-select'

const Select = ({
  children,
  placeholder,
  triggerProps = {},
  ...props
}: {
  placeholder?: string
  triggerProps?: Omit<ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>, 'children'>
} & ComponentPropsWithoutRef<typeof SelectPrimitive.Root>) => (
  <SelectPrimitive.Root {...props}>
    <SelectTrigger {...triggerProps}>
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
    <SelectContent>{children}</SelectContent>
  </SelectPrimitive.Root>
)

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ children, className, ...props }, ref) => (
  <SelectPrimitive.Trigger
    className={cn(
      'group cursor-pointer flex items-center justify-between box-border w-full h-9 p-1.5 px-3 rounded-sm text-light-900 leading-6',
      'bg-inherit border border-dark-100',
      'hover:text-light-100',
      'focus-visible:outline-none focus-visible:border-2 focus-visible:border-accent-500',
      'data-[state=open]:text-light-100 data-[state=open]:border-light-100 data-[state=open]:bg-dark-500',
      'data-[disabled]:text-dark-100 data-[disabled]:pointer-events-none',
      className
    )}
    ref={ref}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className={'group-data-[state=open]:rotate-180 transition-transform h-6 w-6'} />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ children, className, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      className={cn(
        'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        'data-[side=bottom]:slide-in-from-top-2',
        'data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2',
        'data-[side=top]:slide-in-from-bottom-2',
        position === 'popper' && 'data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1',
        'w-[var(--radix-select-trigger-width)]',
        'max-h-[var(--radix-select-content-available-height)]',
        'bg-dark-500',
        'border border-light-100 rounded-sm',
        className
      )}
      position={position}
      ref={ref}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          'min-w-[var(--radix-select-trigger-width)]',
          position === 'popper' && 'h-[var(--radix-select-trigger-height)] w-full'
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))

SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    className={cn(
      'flex gap-3 items-center py-1.5 pl-8 pr-2 text-sm font-semibold text-light-900',
      className
    )}
    ref={ref}
    {...props}
  />
))

SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ children, className, ...props }, ref) => (
  <SelectPrimitive.Item
    className={cn(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2.5 pr-2 text-sm outline-none',
      'text-light-100',
      'hover:text-accent-500 hover:bg-dark-300',
      'focus-visible:bg-accent-900 focus-visible:outline-none',
      className
    )}
    ref={ref}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))

SelectItem.displayName = SelectPrimitive.Item.displayName

export { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue }
