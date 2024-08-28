import { useRef } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'

const meta = {
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
        <Button {...args} asChild>
          <a href={'https://google.com'} ref={anchorRef} rel={'noreferrer'} target={'_blank'}>
            Go to google
          </a>
        </Button>
        <Button {...args} onClick={() => alert('clicked nice button')} ref={buttonRef}>
          Nice button
        </Button>
        <button onClick={() => buttonRef.current?.click()} type={'button'}>
          Button
        </button>
      </div>
    )
  },
}

export const AsLink: Story = {
  args: {
    ...Primary.args,
    children: 'Link',
  },
}
