import { TextareaHTMLAttributes, forwardRef } from 'react'

import { cn } from '@/lib/utils'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  errorText?: string
  label?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, disabled, errorText, label, ...props }, ref) => {
    const errorStyles = errorText
      ? 'text-light-100 placeholder:text-light-100 border-danger-500 focus-visible:ring-danger-500'
      : ''

    return (
      <div className={cn('flex flex-col w-full m-1', className)}>
        {label && (
          <label
            className={cn('text-regular_14 text-light-900', {
              'text-dark-100': disabled,
            })}
          >
            {label}
          </label>
        )}
        <textarea
          className={cn(
            'flex min-h-[84px] w-full rounded-sm border border-dark-100 bg-dark-500 px-3 py-[6px] text-regular_16 text-light-900 placeholder:text-light-900/50 resize-none focus:ring-light-100',
            'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-light-100 focus-visible:text-light-100 focus:outline-none focus:ring-2 focus:ring-accent-700',
            { 'cursor-not-allowed text-dark-100 placeholder:text-dark-100': disabled },
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
