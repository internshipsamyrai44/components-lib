import React, { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { RadioGroup, RadioGroupItem } from './RadioGroup'

const meta = {
  component: RadioGroup,
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>

const options = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' },
]

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string>('option-2')

    return (
      <RadioGroup defaultValue={'option-2'} onValueChange={setValue}>
        {options.map(option => (
          <div className={'flex items-center gap-2'} key={option.value}>
            <RadioGroupItem id={option.value} value={option.value} />
            <label className={'text-regular_14 text-light-100'} htmlFor={option.value}>
              {option.label}
            </label>
          </div>
        ))}
        <span className={'text-h2 text-light-100 mt-5'}>Selected Item: {value}</span>
      </RadioGroup>
    )
  },
}

export const Disabled: Story = {
  render: () => {
    return (
      <RadioGroup defaultValue={'option-2'}>
        {options.map(option => (
          <div className={'flex items-center gap-2'} key={option.value}>
            <RadioGroupItem disabled id={option.value} value={option.value} />
            <label className={'text-regular_14 text-light-900'} htmlFor={option.value}>
              {option.label}
            </label>
          </div>
        ))}
        <span className={'text-light-100 text-h2 mt-5'}>All options are disabled</span>
      </RadioGroup>
    )
  },
}
