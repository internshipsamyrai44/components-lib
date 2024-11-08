import React from 'react'

import {
  CreateActiveIcon,
  CreateIcon,
  FavoritesActiveIcon,
  FavoritesIcon,
  HomeActiveIcon,
  HomeIcon,
  LogOutActiveIcon,
  LogOutIcon,
  MessengerActiveIcon,
  MessengerIcon,
  MyProfileActiveIcon,
  MyProfileIcon,
  SearchActiveIcon,
  SearchIcon,
  StatisticsActiveIcon,
  StatisticsIcon,
} from '@/assets/icons'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarItem,
  SidebarLink,
} from '@/components/sidebar'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Sidebar,
  title: 'Components/Sidebar',
} satisfies Meta<typeof Sidebar>

export default meta

type Story = StoryObj<typeof meta>
const options = [
  { icon: HomeIcon, iconActive: HomeActiveIcon, title: 'Home', url: '#' },
  { icon: CreateIcon, iconActive: CreateActiveIcon, title: 'Create', url: '#' },
  { icon: MyProfileIcon, iconActive: MyProfileActiveIcon, title: 'My Profile', url: '#' },
  { icon: MessengerIcon, iconActive: MessengerActiveIcon, title: 'Messenger', url: '#' },
  { icon: SearchIcon, iconActive: SearchActiveIcon, title: 'Search', url: '#' },
  { icon: StatisticsIcon, iconActive: StatisticsActiveIcon, title: 'Statistics', url: '#' },
  { icon: FavoritesIcon, iconActive: FavoritesActiveIcon, title: 'Favorites', url: '#' },
  { icon: LogOutIcon, iconActive: LogOutActiveIcon, title: 'Log Out', url: '#' },
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
              <SidebarItem icon={item.icon} title={item.title} />
            </SidebarLink>
          ))}
        </SidebarContent>
      </Sidebar>
    ),
  },
}
