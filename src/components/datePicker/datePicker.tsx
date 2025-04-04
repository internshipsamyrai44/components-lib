import React, { useState } from 'react'
import { DateRange, Matcher } from 'react-day-picker'

import { CalendarIcon as CalendarClassic, CalendarOutlineIcon } from '@/assets/icons'
import { Button, Calendar, Popover, PopoverContent, PopoverTrigger } from '@/components'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import s from './datePicker.module.scss'

interface DatePickerProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  disabledDates?: Matcher
  date?: Date
  endDate?: Date
  errorText?: string
  label?: string
  range?: boolean
  startDate?: Date
  onChange?: (date: Date | DateRange | undefined) => void
}

export function DatePicker({
  className,
  date,
  endDate,
  errorText,
  label,
  range = false,
  startDate,
  disabledDates,
  onChange,
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

  const handleSelect = (date: Date | DateRange | undefined) => {
    if (range) {
      setDateRange(date as DateRange)
    } else {
      setSelected(date as Date)
    }
    onChange?.(date)
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
            id={'date'}
            variant={'outlined'}
            {...props}
          >
            {popoverText}
            <CalendarIcon className={cn(s.icon, errorText && s['is-error'])} />
          </Button>
        </PopoverTrigger>
        <span className={s['error-text']}>{errorText ? errorText : ''}</span>
        <PopoverContent align={'start'} className={s['popover-content']}>
          {range ? (
            <Calendar
              startMonth={new Date(1901, 0)}
              defaultMonth={dateRange?.from || new Date()}
              mode={'range'}
              onSelect={handleSelect}
              selected={dateRange}
              captionLayout="dropdown-years"
            />
          ) : (
            <Calendar
              startMonth={new Date(1901, 0)}
              endMonth={dateRange?.to || new Date()}
              defaultMonth={date}
              mode={'single'}
              onSelect={handleSelect}
              selected={selected}
              disabled={disabledDates}
              captionLayout="dropdown-years"
            />
          )}
        </PopoverContent>
      </Popover>
    </div>
  )
}
