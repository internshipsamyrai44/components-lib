import { Recaptcha } from '@/components/recaptcha/recaptcha'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Recaptcha,
  tags: ['autodocs'],
  title: 'Components/Recaptcha',
} satisfies Meta<typeof Recaptcha>

export default meta

type Story = StoryObj<typeof meta>

export const Initial: Story = {
  args: { onClick: action('Button clicked'), variant: 'default' },
}
export const Checked: Story = {
  args: { onClick: action('Button clicked'), variant: 'checked' },
}

export const Loading: Story = {
  args: { onClick: action('Button clicked'), variant: 'loading' },
}

export const Expired: Story = {
  args: { onClick: action('Button clicked'), variant: 'expired' },
}

export const WithError: Story = {
  args: { onClick: action('Button clicked'), variant: 'withError' },
}
