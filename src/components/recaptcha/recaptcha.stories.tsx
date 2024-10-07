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
