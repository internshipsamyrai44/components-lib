'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import s from './sidebar.module.scss'

interface SidebarItemProps {
  className?: string
  icon: React.ElementType
  iconActive?: React.ElementType
  isActive?: boolean
  isDisabled?: boolean
  title: string
}

const Sidebar = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div className={cn(s.sidebar, className)} ref={ref} {...props} data-sidebar={'sidebar'}>
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
        className={cn(s['sidebar-content'], className)}
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
        className={cn(s['sidebar-group'], className)}
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
      className={cn(s['sidebar-group-content'], className)}
      data-sidebar={'group-content'}
      ref={ref}
      {...props}
    />
  )
)

SidebarGroupContent.displayName = 'SidebarGroupContent'

const SidebarLink = React.forwardRef<
  HTMLAnchorElement,
  { isActive?: boolean; isDisabled?: boolean } & React.ComponentProps<'a'>
>(({ className, isActive, isDisabled, ...props }, ref) => (
  <a className={cn(s['sidebar-link'], className)} data-sidebar={'link'} ref={ref} {...props} />
))

SidebarLink.displayName = 'SidebarLink'

const SidebarItem: React.FC<SidebarItemProps> = ({
  className,
  icon: Icon,
  iconActive: IconActive,
  isActive,
  isDisabled,
  title,
}) => {
  const IconToRender = isActive ? IconActive : Icon

  return (
    <div
      className={cn(
        s['sidebar-item'],
        isDisabled && s['sidebar-item-disabled'],
        isActive && s['sidebar-item-active'],
        className
      )}
    >
      {IconToRender ? <IconToRender /> : null}
      <span>{title}</span>
    </div>
  )
}

SidebarItem.displayName = 'SidebarItem'

export { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarItem, SidebarLink }
