import * as React from 'react'
import { DateRange } from 'react-day-picker'

import { Calendar as CalendarClassic, CalendarOutline } from '@/assets/icons'
import { Button, Calendar, Popover, PopoverContent, PopoverTrigger } from '@/components'
import { cn } from '@/lib/utils'
import { addDays, format, isEqual } from 'date-fns'

interface DatePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  endDate?: Date
  startDate?: Date
}

export function DatePickerWithRange({ className, endDate, startDate }: DatePickerProps) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: startDate || new Date(),
    to: endDate || addDays(new Date(), 20),
  })

  const [open, setOpen] = React.useState(false)

  let popoverText: React.JSX.Element | string

  if (date?.from && date.to && isEqual(date?.from, date?.to)) {
    popoverText = format(date.from, 'dd/LL/yyyy')
  } else if (date?.from && date?.to) {
    popoverText = (
      <>
        {format(date.from, 'dd/LL/yyyy')} - {format(date.to, 'dd/LL/yyyy')}
      </>
    )
  } else {
    popoverText = <span>Pick a date</span>
  }

  const CalendarIcon = open ? CalendarClassic : CalendarOutline

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            className={cn(
              'w-[250px] justify-between text-left text-regular_16',
              !date && 'text-muted-foreground'
            )}
            id={'date'}
            variant={'outlined'}
          >
            {popoverText}
            <CalendarIcon className={'fill-light-100'} />
          </Button>
        </PopoverTrigger>
        <PopoverContent align={'start'} className={'w-auto p-0'}>
          <Calendar
            defaultMonth={date?.from || new Date()}
            mode={'range'}
            onSelect={setDate}
            selected={date}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
