import React, { useRef } from 'react'

import { Meta, StoryObj } from '@storybook/react'
import { addDays } from 'date-fns'

import { DatePickerWithRange as DatePicker } from './datePicker'

const meta = {
  component: DatePicker,
  title: 'Components/Date Picker',
} satisfies Meta<typeof DatePicker>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    endDate: addDays(new Date(), 5),
    startDate: new Date(),
  },
}
