import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './RadioGroup'

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
  args: {
    options: options,
  },
  render: () => {
    const [value, setValue] = useState<string>('option-2')

    return (
      <div className={'flex flex-col w-full gap-10'}>
        <RadioGroup defaultValue={value} onValueChange={setValue} options={options} />
        <span className={'text-h2 text-light-100 mt-5'}>Selected Item: {value}</span>
      </div>
    )
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: options[1]?.value,
    disabled: true,
    options: options,
  },
}
