import { SelectSeparator } from '@radix-ui/react-select'
import { Meta, StoryObj } from '@storybook/react'

import { Select, SelectGroup, SelectItem, SelectLabel } from './select'

const meta = {
  component: Select,
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>
const options = [
  {
    label: 'Option 1',
    value: '1',
  },
  {
    label: 'Option 2',
    value: '2',
  },
  {
    label: 'Option 3',
    value: '3',
  },
]

export const Primary: Story = {
  args: {
    children: (
      <>
        <SelectItem value={'1'}>First option</SelectItem>
        <SelectItem value={'2'}>Second option</SelectItem>
        <SelectItem value={'3'}>Third option</SelectItem>
        <SelectItem value={'4'}>Fourth option</SelectItem>
        <SelectItem value={'5'}>Fifth option</SelectItem>
      </>
    ),
    placeholder: 'Primary Select',
  },
}

export const Alt: Story = {
  args: {
    children: (
      <>
        {options.map(({ label, value }) => {
          return (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          )
        })}
      </>
    ),
    placeholder: 'Alt Select',
  },
}

export const Disabled: Story = {
  args: {
    children: (
      <>
        <SelectItem value={'1'}>First option</SelectItem>
        <SelectItem value={'2'}>Second option</SelectItem>
        <SelectItem value={'3'}>Third option</SelectItem>
        <SelectItem value={'4'}>Fourth option</SelectItem>
        <SelectItem value={'5'}>Fifth option</SelectItem>
      </>
    ),
    disabled: true,
    placeholder: 'Disabled',
  },
}

export const WithGroups: Story = {
  args: {
    children: (
      <>
        <SelectGroup>
          <SelectLabel>Group 1</SelectLabel>
          <SelectItem value={'1'}>1</SelectItem>
          <SelectSeparator />
          <SelectItem value={'2'}>2</SelectItem>
          <SelectItem value={'3'}>3</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Group 2</SelectLabel>
          <SelectItem value={'4'}>4</SelectItem>
          <SelectItem value={'5'}>5</SelectItem>
          <SelectItem value={'6'}>6</SelectItem>
        </SelectGroup>
      </>
    ),
    placeholder: 'Select a theme',
  },
}
