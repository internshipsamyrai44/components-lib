import { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './checkbox'

const meta = {
  component: Checkbox,
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultWithLabel: Story = {
  args: {
    label: 'You agree to our Terms of Service and Privacy Policy.',
  },
}

export const DisabledWithLabel: Story = {
  args: {
    disabled: true,
    label: 'You agree to our Terms of Service and Privacy Policy.',
  },
}
