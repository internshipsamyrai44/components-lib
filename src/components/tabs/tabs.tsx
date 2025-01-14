import * as React from 'react'
import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { cn } from '@/lib/utils'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import styles from './tabs.module.scss' // Импортируем стили

export type TabType = {
  disabled?: boolean
  title: string
  value: string
}

type CommonProps = {
  children?: ReactNode
  fullWidth?: boolean
  tabs: TabType[]
} & ComponentPropsWithoutRef<typeof TabsPrimitive.Root>

const Tabs = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Root>, CommonProps>(
  ({ children, className, fullWidth, tabs, ...rest }, ref) => (
    <TabsPrimitive.Root
      {...rest}
      className={cn(styles.tabs, fullWidth && styles.fullWidth)}
      ref={ref}
    >
      <TabsList className={cn(fullWidth && styles.fullWidth)}>
        {tabs.map(tab => (
          <TabsTrigger
            className={cn(fullWidth && 'grow', styles.tabsTrigger)}
            disabled={tab.disabled}
            key={tab.value}
            value={tab.value}
          >
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {children}
    </TabsPrimitive.Root>
  )
)

Tabs.displayName = 'Tabs'

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List className={cn(styles.tabsList, className)} ref={ref} {...props} />
))

TabsList.displayName = 'TabsList'

export type TabsTriggerProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger className={cn(styles.tabsTrigger, className)} ref={ref} {...props} />
))

TabsTrigger.displayName = 'TabsTrigger'

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content className={cn(styles.tabsContent, className)} ref={ref} {...props} />
))

TabsContent.displayName = 'TabsContent'

export { Tabs, TabsContent, TabsList, TabsTrigger }
