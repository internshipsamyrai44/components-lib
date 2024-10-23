'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

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

const SidebarLink = React.forwardRef<
  HTMLAnchorElement,
  { isActive?: boolean; isDisabled?: boolean } & React.ComponentProps<'a'>
>(({ className, isActive, isDisabled, ...props }, ref) => (
  <a
    className={cn(
      'flex items-center gap-3 text-light-100 text-regular_14 size-max rounded-sm border-2 border-input border-transparent',
      'focus:outline-none focus:border-accent-700',
      className
    )}
    data-sidebar={'link'}
    ref={ref}
    {...props}
  />
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
  const getClassNames = () => {
    if (isDisabled) {
      return 'text-dark-100 fill-dark-100 cursor-not-allowed'
    }
    if (isActive) {
      return 'text-accent-500 text-bold_14'
    }

    return 'text-light-100 hover:text-accent-100 hover:fill-accent-100'
  }

  return (
    <div className={cn('flex items-center gap-3', getClassNames(), className)}>
      {IconToRender ? <IconToRender /> : null}
      <span>{title}</span>
    </div>
  )
}

SidebarItem.displayName = 'SidebarItem'

export { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarItem, SidebarLink }
