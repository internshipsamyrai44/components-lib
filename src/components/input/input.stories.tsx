import { Meta, StoryObj } from '@storybook/react'

import { Input } from './input'

const meta = {
  component: Input,
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'email',
    label: 'Email',
    placeholder: 'Epam@epam.com',
    type: 'email',
  },
}

export const Required: Story = {
  args: {
    id: 'name',
    label: 'Name',
    placeholder: 'Name',
    required: true,
    type: 'text',
  },
}

export const Password: Story = {
  args: {
    id: 'password',
    label: 'Email',
    placeholder: 'Epam@epam.com',
    type: 'password',
  },
}

export const SearchMode: Story = {
  args: {
    id: 'search',
    placeholder: 'Input search',
    type: 'search',
  },
}

export const Disabled: Story = {
  render: () => (
    <div className={'flex flex-col w-full gap-10'}>
      <Input
        disabled
        id={'disabled-input'}
        label={'Email'}
        placeholder={'Epam@epam.com'}
        type={'text'}
      />
      <Input
        disabled
        id={'disabled-password'}
        label={'Email'}
        placeholder={'Epam@epam.com'}
        type={'password'}
      />
      <div className={'pt-5'}>
        <Input disabled id={'disabled-search'} placeholder={'Input search'} type={'search'} />
      </div>
    </div>
  ),
}

export const ErrorMessage: Story = {
  args: {
    errorMessage: 'Error text',
    id: 'error-input',
    label: 'Email',
    placeholder: 'Epam@epam.com',
    type: 'text',
  },
  render: args => (
    <div className={'flex flex-col w-full gap-10'}>
      <Input {...args} />
      <Input {...{ ...args, id: 'error-password', type: 'password' }} />
      <Input {...{ ...args, id: 'error-search', placeholder: 'Input search', type: 'search' }} />
    </div>
  ),
}
