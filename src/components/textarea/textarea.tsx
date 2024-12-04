import { TextareaHTMLAttributes, forwardRef } from 'react'

import { cn } from '@/lib/utils'

import s from './textarea.module.scss'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  errorText?: string
  label?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, disabled, errorText, label, ...props }, ref) => {
    return (
      <div className={cn(s.container, className)}>
        {label && <label className={cn(s.label, disabled && s['is-disabled'])}>{label}</label>}
        <textarea
          className={cn(s.textarea, errorText && s['is-error'])}
          disabled={disabled}
          ref={ref}
          {...props}
        />
        <span className={s['error-text']}>{errorText}</span>
      </div>
    )
  }
)
