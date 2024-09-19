import React, { useState } from 'react'
import { DateRange } from 'react-day-picker'

import { Calendar as CalendarClassic, CalendarOutline } from '@/assets/icons'
import { Button, Calendar, Popover, PopoverContent, PopoverTrigger } from '@/components'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'

interface DatePickerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  date?: Date
  endDate?: Date
  errorText?: string
  label?: string
  range?: boolean
  startDate?: Date
}

export function DatePicker({
  className,
  date,
  endDate,
  errorText,
  label,
  range = false,
  startDate,
  ...props
}: DatePickerProps) {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: startDate,
    to: endDate,
  })

  const [selected, setSelected] = useState<Date | undefined>(date)

  const [open, setOpen] = useState(false)

  const dateFormat = 'dd/LL/yyyy'
  let popoverText: React.JSX.Element | string

  if (range && dateRange?.from && dateRange?.to) {
    popoverText = `${format(dateRange.from, dateFormat)} - ${format(dateRange.to, dateFormat)}`
  } else if (selected) {
    popoverText = format(selected, dateFormat)
  } else {
    popoverText = <span>Pick a date</span>
  }

  const CalendarIcon = open ? CalendarClassic : CalendarOutline
  const errorStyles = errorText ? 'outline-none ring-1 text-danger-500 ring-danger-500' : ''

  return (
    <div className={cn('grid', className)}>
      <Popover onOpenChange={setOpen}>
        <label
          className={cn('text-regular_14 text-light-900', { 'text-dark-100': props.disabled })}
        >
          {label || (range ? 'Date Range' : 'Date')}
        </label>
        <PopoverTrigger asChild>
          <Button
            className={cn(
              'justify-between text-left text-regular_16',
              range ? 'w-[262px]' : 'w-[158px]',
              // 'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-300',
              'disabled:cursor-not-allowed disabled:text-light-900',
              errorStyles
            )}
            disabled={props.disabled}
            id={'date'}
            variant={'outlined'}
          >
            {popoverText}
            <CalendarIcon className={cn('fill-light-100', { 'fill-danger-500': errorText })} />
          </Button>
        </PopoverTrigger>
        <span className={'text-regular_14 text-danger-500 h-6'}>{errorText ? errorText : ''}</span>
        <PopoverContent align={'start'} className={'w-auto p-0'}>
          {range ? (
            <Calendar
              defaultMonth={dateRange?.from || new Date()}
              mode={'range'}
              onSelect={setDateRange}
              selected={dateRange}
            />
          ) : (
            <Calendar
              defaultMonth={date}
              mode={'single'}
              onSelect={setSelected}
              selected={selected}
            />
          )}
        </PopoverContent>
      </Popover>
    </div>
  )
}
