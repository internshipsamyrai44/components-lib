import React, { useRef } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './checkbox'

const meta = {
  component: Checkbox,
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div className={'items-top flex space-x-2 bg-accent-900'}>
        <Checkbox id={'terms1'} />
        <div className={'grid gap-1.5 leading-none'}>
          <label
            className={
              'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            }
            htmlFor={'terms1'}
          >
            Accept terms and conditions
          </label>
          <p className={'text-sm text-muted-foreground'}>
            You agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    ),
  },
}

export const Disabled: Story = {
  args: {
    checked: true,
    children: (
      <div className={'items-top flex space-x-2 bg-accent-900'}>
        <Checkbox id={'terms1'} />
        <div className={'grid gap-1.5 leading-none'}>
          <label
            className={
              'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            }
            htmlFor={'terms1'}
          >
            Accept terms and conditions
          </label>
        </div>
      </div>
    ),
    disabled: true,
  },
}
