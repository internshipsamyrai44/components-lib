import React from 'react'

import {
  Create,
  Favorites,
  Home,
  LogOut,
  Messenger,
  MyProfile,
  Search,
  Statistics,
} from '@/assets/icons'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarLink,
} from '@/components/sidebar/sidebar'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Sidebar,
  title: 'Components/Sidebar',
} satisfies Meta<typeof Sidebar>

export default meta

type Story = StoryObj<typeof meta>
const options = [
  { icon: Home, title: 'Home', url: '#' },
  { icon: Create, title: 'Create', url: '#' },
  { icon: MyProfile, title: 'My Profile', url: '#' },
  { icon: Messenger, title: 'Messenger', url: '#' },
  { icon: Search, title: 'Search', url: '#' },
  { icon: Statistics, title: 'Statistics', url: '#' },
  { icon: Favorites, title: 'Favorites', url: '#' },
  { icon: LogOut, title: 'Log Out', url: '#' },
]

export const Default: Story = {
  args: {
    children: (
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              {options.slice(0, 5).map(item => (
                <SidebarLink href={item.url} key={item.title}>
                  <item.icon />
                  <span>{item.title}</span>
                </SidebarLink>
              ))}
            </SidebarGroupContent>
            <SidebarGroupContent className={'gap-6'}>
              {options.slice(5, 7).map(item => (
                <SidebarLink href={item.url} key={item.title}>
                  <item.icon />
                  <span>{item.title}</span>
                </SidebarLink>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
          {options.slice(-1).map(item => (
            <SidebarLink href={item.url} key={item.title}>
              <item.icon />
              <span>{item.title}</span>
            </SidebarLink>
          ))}
        </SidebarContent>
      </Sidebar>
    ),
  },
}
