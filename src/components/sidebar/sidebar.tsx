'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

const Sidebar = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        className={cn(
          'flex h-screen w-[220px] bg-dark-700 pt-[72px] pb-9 border-r-[1px] border-dark-300',
          className
        )}
        ref={ref}
        {...props}
        data-sidebar={'sidebar'}
      >
        {children}
      </div>
    )
  }
)

Sidebar.displayName = 'Sidebar'

const SidebarContent = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn('flex flex-col justify-between h-full mx-auto', className)}
        data-sidebar={'content'}
        ref={ref}
        {...props}
      />
    )
  }
)

SidebarContent.displayName = 'SidebarContent'

const SidebarGroup = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn('flex flex-col gap-[60px]', className)}
        data-sidebar={'group'}
        ref={ref}
        {...props}
      />
    )
  }
)

SidebarGroup.displayName = 'SidebarGroup'

const SidebarGroupContent = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      className={cn('flex flex-col gap-[24px]', className)}
      data-sidebar={'group-content'}
      ref={ref}
      {...props}
    />
  )
)

SidebarGroupContent.displayName = 'SidebarGroupContent'

const SidebarLink = React.forwardRef<HTMLAnchorElement, React.ComponentProps<'a'>>(
  ({ className, ...props }, ref) => (
    <a
      className={cn('flex items-center gap-3 text-light-100 text-regular_14', className)}
      data-sidebar={'link'}
      ref={ref}
      {...props}
    />
  )
)

SidebarLink.displayName = 'SidebarLink'

export { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarLink }
