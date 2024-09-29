import React, { useRef } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'

const meta = {
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outlined', 'ghost'],
    },
  },
  component: Button,
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
}

export const FullWidth: Story = {
  args: {
    ...Primary.args,
    children: 'Full Width',
    fullWidth: true,
    variant: 'secondary',
  },
  render: args => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const anchorRef = useRef<HTMLAnchorElement>(null)

    return (
      <div>
        <Button {...args}>Go to google</Button>
      </div>
    )
  },
}

export const Outline: Story = {
  args: {
    children: 'outlined',
    variant: 'outlined',
  },
}

export const Ghost: Story = {
  args: {
    children: 'ghost',
    variant: 'ghost',
  },
}

export const AsLink: Story = {
  args: {
    ...Primary.args,
    children: 'Link',
  },
  render: args => {
    return (
      <Button {...args} asChild>
        <a>Go to google</a>
      </Button>
    )
  },
}
