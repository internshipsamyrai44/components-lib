import { Meta, StoryObj } from '@storybook/react'

import { AlertPopup } from './alertPopup'

const meta = {
  component: AlertPopup,
  title: 'Components/AlertPopup',
} satisfies Meta<typeof AlertPopup>

export default meta

type Story = StoryObj<typeof meta>

export const Success: Story = {
  args: {
    alertType: 'success',
    duration: 5000,
    message: 'Name was successfully changed',
  },
}

export const Error: Story = {
  args: {
    alertType: 'error',
    duration: 5000,
    message: 'E-mail is invalid',
  },
}
