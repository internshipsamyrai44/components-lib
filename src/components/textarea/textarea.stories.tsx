import { Meta, StoryObj } from '@storybook/react'

import { Textarea } from './textarea'

const meta = {
  component: Textarea,
  title: 'Components/Textarea',
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Text-area',
    placeholder: 'Text-area',
  },
}

export const Error: Story = {
  args: {
    errorText: 'Error text',
    label: 'Text-area',
    placeholder: 'Text-area',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Text-area',
    placeholder: 'Text-area',
  },
}
