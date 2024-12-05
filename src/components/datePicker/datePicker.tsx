import React, { useState } from 'react'
import { DateRange } from 'react-day-picker'

import { CalendarIcon as CalendarClassic, CalendarOutlineIcon } from '@/assets/icons'
import { Button, Calendar, Popover, PopoverContent, PopoverTrigger } from '@/components'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import s from './datePicker.module.scss'

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

  const CalendarIcon = open ? CalendarClassic : CalendarOutlineIcon

  return (
    <div className={cn(s['date-picker'], className)}>
      <Popover onOpenChange={setOpen}>
        {label && (
          <label className={cn(s.label, props.disabled && s['is-disabled'])}>{label}</label>
        )}
        <PopoverTrigger asChild>
          <Button
            className={cn(
              s.button,
              range && s['is-range'],
              open && s['is-open'],
              errorText && s['is-error']
            )}
            disabled={props.disabled}
            id={'date'}
            variant={'outlined'}
          >
            {popoverText}
            <CalendarIcon className={cn(s.icon, errorText && s['is-error'])} />
          </Button>
        </PopoverTrigger>
        <span className={s['error-text']}>{errorText ? errorText : ''}</span>
        <PopoverContent align={'start'} className={s['popover-content']}>
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
