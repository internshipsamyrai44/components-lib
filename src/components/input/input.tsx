import * as React from 'react'
import { ChangeEvent, KeyboardEvent, useState } from 'react'

import { EyeIcon, EyeOffIcon, SearchIcon } from '@/assets/icons'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
  errorMessage?: string
  label?: string
  onChangeValue?: (value: string) => void
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  type?: 'email' | 'password' | 'search' | 'text'
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      children,
      className,
      disabled,
      errorMessage,
      label,
      onChange,
      onChangeValue,
      onEnter,
      onKeyDown,
      placeholder,
      type = 'text',
      value,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

    const isPassword = type === 'password'
    const isSearch = type === 'search'
    const finalType = isPassword && showPassword ? 'text' : type

    const handlePasswordToggle = () => setShowPassword(prev => !prev)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onChangeValue?.(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.code === 'Enter') {
        onEnter?.(e)
      }
      onKeyDown?.(e)
    }

    const iconClasses = cn({ 'fill-dark-100': disabled }, { 'fill-light-100': !disabled })

    return (
      <div className={cn('flex flex-col w-full gap-2', className)}>
        <label
          className={cn('text-regular_14 text-light-900', disabled ? 'text-light-900/50' : '')}
        >
          {label}
        </label>
        <div className={'flex relative'}>
          {isSearch && (
            <span
              className={
                'absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200'
              }
            >
              <SearchIcon
                className={cn(
                  isFocused ? 'fill-light-100' : 'fill-light-900',
                  disabled && 'fill-dark-100',
                  value && 'text-light-100',
                  errorMessage && 'fill-light-100'
                )}
              />
            </span>
          )}
          <input
            aria-invalid={!!errorMessage}
            aria-label={label}
            className={cn(
              'flex border-box bg-dark-700 text-light-900 text-regular_16 py-1.5 px-3 min-h-[36px] w-full rounded-sm border border-input border-dark-100 placeholder:text-light-900 hover:border-light-900 disabled:cursor-not-allowed',
              'focus:outline-none focus:border-light-100 focus:text-light-100 focus:placeholder:text-light-100',
              disabled ? 'placeholder:text-light-900/50 hover:border-light-900/50' : '',
              isSearch ? 'px-10' : '',
              errorMessage && !isFocused ? 'border-danger-500 placeholder:text-light-100' : '',
              className
            )}
            disabled={disabled}
            onBlur={() => setIsFocused(false)}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onKeyDown={onKeyPressHandler}
            placeholder={isFocused ? '' : placeholder}
            ref={ref}
            type={finalType}
            {...props}
          />
          {isPassword && (
            <button
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              className={cn('absolute top-1/2 right-3 transform -translate-y-1/2', iconClasses)}
              disabled={disabled}
              onClick={handlePasswordToggle}
              type={'button'}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon className={iconClasses} />}
            </button>
          )}
        </div>
        <div
          className={
            'text-regular_14 text-danger-500 error-message min-h-6 overflow-hidden whitespace-nowrap text-ellipsis'
          }
        >
          {errorMessage && !isFocused ? errorMessage : ''}
        </div>
        )
      </div>
    )
  }
)

Input.displayName = 'Input'
export { Input }
