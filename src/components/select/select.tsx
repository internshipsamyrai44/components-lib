import * as React from 'react'
import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { ChevronDownIcon } from '@/assets/icons'
import { cn } from '@/lib/utils'
import * as SelectPrimitive from '@radix-ui/react-select'

import styles from './select.module.scss'

const Select = ({
  children,
  placeholder,
  triggerIcon,
  triggerProps = {},
  ...props
}: {
  placeholder?: string
  triggerIcon?: ReactNode
  triggerProps?: Omit<ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>, 'children'>
} & ComponentPropsWithoutRef<typeof SelectPrimitive.Root>) => (
  <SelectPrimitive.Root {...props}>
    <SelectTrigger {...triggerProps}>
      <div className={styles['flex-gap']}>
        {triggerIcon && <>{triggerIcon}</>}
        <SelectValue placeholder={placeholder} />
      </div>
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
  <SelectPrimitive.Trigger className={cn(styles.trigger, className)} ref={ref} {...props}>
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDownIcon className={cn(styles.icon)} />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))

SelectTrigger.displayName = 'SelectTrigger'

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

SelectContent.displayName = 'SelectContent'

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label className={cn(styles.label, className)} ref={ref} {...props} />
))

SelectLabel.displayName = 'SelectLabel'

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

SelectItem.displayName = 'SelectItem'

export { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue }
