import { useRef } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Tabs, TabsContent } from './tabsRoot'

const meta = {
  argTypes: {},
  args: {
    children: (
      <>
        <TabsContent className={'text-light-100'} value={'Hello'}>
          Hello
        </TabsContent>
        <TabsContent className={'text-light-100'} value={'I am a'}>
          I am a
        </TabsContent>
        <TabsContent className={'text-light-100'} value={'switcher'}>
          Tab-switcher
        </TabsContent>
      </>
    ),

    defaultValue: 'Hello',
    tabs: [
      { disabled: false, title: 'Hello', value: 'Hello' },
      { disabled: false, title: 'I am a', value: 'I am a' },
      { disabled: false, title: 'Tab-switcher', value: 'switcher' },
    ],
  },
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const TabSwitcherDemo: Story = {
  args: {},
}

export const FullWidth = {
  args: {
    fullWidth: true,
    tabs: [
      { disabled: false, title: 'Hello', value: 'Hello' },
      { disabled: false, title: 'I am a', value: 'I am a' },
      { disabled: false, title: 'Tab-switcher', value: 'switcher' },
    ],
  },
}
