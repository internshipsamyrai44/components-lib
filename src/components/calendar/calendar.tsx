import * as React from 'react'
import { DayPicker } from 'react-day-picker'

import { ChevronLeft, ChevronRight } from '@/assets/icons'
import { cn } from '@/lib/utils'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      className={cn('px-6 py-4', className)}
      classNames={{
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-bold_16 ml-2',
        day: cn(
          'h-9 w-9 p-0 font-regular_16 aria-selected:opacity-100 text-center',
          'focus-within:relative focus-within:z-20'
        ),
        hidden: 'invisible',
        month: 'space-y-3',
        month_caption: 'h-9 flex items-center',
        nav: 'flex items-center absolute right-6 top-[16px]',
        outside: 'text-light-900 aria-selected:opacity-70',
        range_end: 'bg-accent-900 rounded-r-full',
        range_middle: 'bg-accent-900 rounded-none',
        range_start: 'bg-accent-900 rounded-l-full',
        selected: 'bg-accent-900 ',
        today: 'text-bold_16 text-accent-500',
        weekday: 'text-regular_16 text-light-900 ',
        weekdays: 'h-[40px] ',
        weeks: 'before:block before:h-3',
        ...classNames,
      }}
      components={{
        Button: ({ className, ...props }) => (
          <button
            type={'button'}
            {...props}
            className={cn(
              className,
              'flex items-center justify-center h-9 w-9 m-0 rounded-full bg-dark-100 fill-light-100'
            )}
          />
        ),

        Chevron: ({ orientation, ...props }) => {
          if (orientation === 'left') {
            return <ChevronLeft {...props} className={'fill-light-100 h-[20px] w-[20px]'} />
          } else {
            return <ChevronRight {...props} className={'fill-light-100 h-[20px] w-[20px]'} />
          }
        },
      }}
      modifiers={{
        weekends: { dayOfWeek: [5, 6] },
      }}
      modifiersClassNames={{
        weekends: 'text-danger-500',
      }}
      showOutsideDays={showOutsideDays}
      {...props}
    />
  )
}
Calendar.displayName = 'Calendar'

export { Calendar }
