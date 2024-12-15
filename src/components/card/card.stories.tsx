import { Meta, StoryObj } from '@storybook/react'

import { Card } from './card'

const meta = {
  component: Card,
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    style: {
      width: '200px',
      height: '200px',
    },
  },
}
