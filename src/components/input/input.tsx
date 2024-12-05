import * as React from 'react'
import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { EyeIcon, EyeOffIcon, SearchIcon } from '@/assets/icons'
import { cn } from '@/lib/utils'
import s from './input.module.scss'

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

    return (
      <div className={cn(s['input-container'], className)}>
        <label data-disabled={disabled} className={s.label}>
          {label}
        </label>
        <div className={s['input-wrapper']}>
          {isSearch && (
            <span className={s['search-icon']}>
              <SearchIcon
                className={cn(s['search-icon-fill'], isFocused && s['search-icon-fill-focus'])}
                data-disabled={disabled}
                data-value={value}
                data-error={errorMessage}
              />
            </span>
          )}
          <input
            aria-invalid={!!errorMessage}
            aria-label={label}
            className={cn(s.input, isSearch && s['input-search'], className)}
            disabled={disabled}
            data-disabled={disabled}
            data-error={errorMessage}
            data-isFocused={isFocused}
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
              className={s['password-toggle']}
              disabled={disabled}
              onClick={handlePasswordToggle}
              type={'button'}
            >
              {showPassword ? (
                <EyeOffIcon />
              ) : (
                <EyeIcon data-disabled={disabled} className={s['password-toggle-icon']} />
              )}
            </button>
          )}
        </div>
        <div className={s['input-error-message']}>
          {errorMessage && !isFocused ? errorMessage : ''}
        </div>
        )
      </div>
    )
  }
)

Input.displayName = 'Input'
export { Input }
