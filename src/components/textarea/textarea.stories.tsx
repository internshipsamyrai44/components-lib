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
    disabled: false,
    errorText: '',
    label: 'Text-area',
    placeholder: 'Text-area',
  },
}

export const NoLabel: Story = {
  args: {
    disabled: false,
    errorText: '',
    placeholder: 'Text-area',
  },
}

export const Error: Story = {
  args: {
    disabled: false,
    errorText: 'Error text',
    label: 'Text-area',
    placeholder: 'Text-area',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    errorText: '',
    label: 'Text-area',
    placeholder: 'Text-area',
  },
}
