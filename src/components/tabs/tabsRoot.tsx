import * as React from 'react'
import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { cn } from '@/lib/utils'
import * as TabsPrimitive from '@radix-ui/react-tabs'

const TabsRoot = TabsPrimitive.Root

export type TabType = {
  disabled?: boolean
  title: string
  value: string
}

type CommonProps = {
  children?: ReactNode
  fullWidth?: boolean
  tabs: TabType[]
} & ComponentPropsWithoutRef<typeof TabsRoot>

export const Tabs = React.forwardRef<React.ElementRef<typeof TabsRoot>, CommonProps>(
  ({ children, className, fullWidth, tabs, ...rest }: CommonProps, ref) => (
    <TabsRoot {...rest} ref={ref}>
      <TabsList className={cn(fullWidth && 'flex')}>
        {tabs.map(tab => (
          <TabsTrigger
            className={cn(fullWidth && 'grow')}
            disabled={tab.disabled}
            key={tab.value}
            value={tab.value}
          >
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {children}
    </TabsRoot>
  )
)

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    className={cn('inline-flex items-center justify-center', className)}
    ref={ref}
    {...props}
  />
))

TabsList.displayName = TabsPrimitive.List.displayName

export type TabsTriggerProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    className={cn(
      'bg-transparent text-dark-100  py-1.5 px-6 border-b-4 border-b-dark-100 border-solid',
      'active:bg-accent-100 active:bg-opacity-15',
      'hover:bg-accent-900 hover:bg-opacity-25',
      'focus-visible:outline-2 focus-visible:outline-accent-700 focus-visible:outline focus-visible:rounded-sm',
      'disabled:text-dark-300 disabled:border-b-dark-300',
      'data-[state=active]:text-accent-500 data-[state=active]:border-b-accent-500 data-[state=active]:disabled:text-accent-900 data-[state=active]:disabled:border-b-accent-900',
      className
    )}
    ref={ref}
    {...props}
  />
))

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content className={className} ref={ref} {...props} />
))

export { TabsContent, TabsList, TabsRoot, TabsTrigger }
