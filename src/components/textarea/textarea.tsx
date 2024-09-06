import { TextareaHTMLAttributes, forwardRef } from 'react'

import { cn } from '@/lib/utils'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  errorText?: string
  label: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, disabled, errorText, label, ...props }, ref) => {
    const errorStyles = errorText ? 'border-danger-500 focus-visible:ring-danger-500' : ''

    return (
      <div className={cn('flex flex-col w-full m-1', className)}>
        <span
          className={cn('text-regular_14 text-light-900', {
            'text-dark-100': disabled,
          })}
        >
          {label}
        </span>
        <textarea
          className={cn(
            'flex min-h-[84px] w-full rounded-sm border border-dark-100 bg-dark-500 px-3 py-[6px] text-regular_16 text-light-900 placeholder:text-light-900/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-light-100 focus-visible:text-light-100 focus:outline-none focus:ring-2 focus:ring-accent-700 disabled:cursor-not-allowed disabled:text-dark-100 disabled:placeholder:text-dark-100/50 resize-none',
            errorStyles
          )}
          disabled={disabled}
          ref={ref}
          {...props}
        />
        <span className={'text-regular_14 text-danger-500 h-6'}>{errorText ? errorText : ''}</span>
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea }
