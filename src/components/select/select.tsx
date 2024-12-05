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
        styles.container,
        position === 'popper' && styles['popper-position'],
        className
      )}
      position={position}
      ref={ref}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(styles.viewport, position === 'popper' && styles['popper-position-viewport'])}
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
  <SelectPrimitive.Item className={cn(styles.item, className)} ref={ref} {...props}>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))

SelectItem.displayName = 'SelectItem'

export { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue }
