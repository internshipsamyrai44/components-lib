import { Meta, StoryObj } from '@storybook/react'
import { Recaptcha } from '@/components/recaptcha/recaptcha'
import { action } from '@storybook/addon-actions'

const meta = {
  component: Recaptcha,
  title: 'Components/Recaptcha',
  tags: ['autodocs'],
} satisfies Meta<typeof Recaptcha>

export default meta

type Story = StoryObj<typeof meta>

export const Initial: Story = {
  args: { variant: 'default', onClick: action('Button clicked') },
}
export const Checked: Story = {
  args: { variant: 'checked', onClick: action('Button clicked') },
}

export const Loading: Story = {
  args: { variant: 'loading', onClick: action('Button clicked') },
}

export const Expired: Story = {
  args: { variant: 'expired', onClick: action('Button clicked') },
}

export const WithError: Story = {
  args: { variant: 'withError', onClick: action('Button clicked') },
}
