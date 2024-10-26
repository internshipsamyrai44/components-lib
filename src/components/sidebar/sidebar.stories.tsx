import React from 'react'

import {
  Create,
  CreateActive,
  Favorites,
  FavoritesActive,
  Home,
  HomeActive,
  LogOut,
  LogOutActive,
  Messenger,
  MessengerActive,
  MyProfile,
  MyProfileActive,
  Search,
  SearchActive,
  Statistics,
  StatisticsActive,
} from '@/assets/icons'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarItem,
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
  { icon: Home, iconActive: HomeActive, title: 'Home', url: '#' },
  { icon: Create, iconActive: CreateActive, title: 'Create', url: '#' },
  { icon: MyProfile, iconActive: MyProfileActive, title: 'My Profile', url: '#' },
  { icon: Messenger, iconActive: MessengerActive, title: 'Messenger', url: '#' },
  { icon: Search, iconActive: SearchActive, title: 'Search', url: '#' },
  { icon: Statistics, iconActive: StatisticsActive, title: 'Statistics', url: '#' },
  { icon: Favorites, iconActive: FavoritesActive, title: 'Favorites', url: '#' },
  { icon: LogOut, iconActive: LogOutActive, title: 'Log Out', url: '#' },
]

export const Default: Story = {
  args: {
    children: (
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              {options.slice(0, 5).map((item, index) => (
                <SidebarLink href={item.url} isActive={index === 0} key={item.title}>
                  <SidebarItem
                    icon={item.icon}
                    iconActive={item.iconActive}
                    isActive={index === 0}
                    isDisabled={index === 1}
                    title={item.title}
                  />
                </SidebarLink>
              ))}
            </SidebarGroupContent>
            <SidebarGroupContent className={'gap-6'}>
              {options.slice(5, 7).map(item => (
                <SidebarLink href={item.url} key={item.title}>
                  <SidebarItem icon={item.icon} title={item.title} />
                </SidebarLink>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
          {options.slice(-1).map(item => (
            <SidebarLink href={item.url} key={item.title}>
              <SidebarItem
                icon={item.icon}
                title={item.title}
              />
            </SidebarLink>
          ))}
        </SidebarContent>
      </Sidebar>
    ),
  },
}
