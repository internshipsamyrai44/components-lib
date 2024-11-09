import { ComponentPropsWithoutRef } from 'react'

import { CheckmarkOutlineIcon, RecaptchalogoIcon } from '@/assets/icons'
import { cn } from '@/lib/utils'

type policyLinks = [string, string]

export type RecaptchaProps = {
  errorMessage?: string
  expiredMessage?: string
  label?: string
  onClick?: () => void
  policyLinks?: policyLinks
  variant: 'checked' | 'default' | 'expired' | 'loading' | 'withError'
} & ComponentPropsWithoutRef<'div'>

export const Recaptcha = (props: RecaptchaProps) => {
  const {
    errorMessage = 'Please verify that you are not a robot',
    expiredMessage = 'Verification expired. Check the checkbox again.',
    label = 'I’m not a robot',
    onClick,
    policyLinks = [
      'https://policies.google.com/privacy?hl=ru',
      'https://policies.google.com/terms?hl=ru',
    ],
    variant,
    ...rest
  } = props
  const [Privacy, Terms] = policyLinks

  return (
    <div
      {...rest}
      className={cn(
        variant === 'withError' &&
          'inline-flex flex-col gap-3 p-2 px-1.5 pb-3.25 border border-danger-500'
      )}
    >
      <div
        className={
          'relative flex items-center justify-between w-[300px] h-[79px] p-3 px-5 bg-dark-500 border border-dark-300 rounded-sm'
        }
      >
        <RecaptchaForm onClick={onClick} variant={variant} />
        <div className={'text-light-100 pl-8 text-roboto_12'}>{label}</div>
        <div className={'w-[44px] text-[5px] text-center '}>
          <RecaptchalogoIcon className={'w-[44px] h-[44px]'} />
          <div className={'leading-normal'}>
            <a className={'text-light-100 hover:underline'} href={Privacy}>
              Privacy
            </a>
            <span className={'text-light-100'}> - </span>
            <a className={'text-light-100 hover:underline'} href={Terms}>
              Terms
            </a>
          </div>
        </div>
        {variant === 'expired' && (
          <div
            className={
              'absolute top-[2px] left-[18px] w-[175px] text-roboto_10 leading-tight text-danger-500'
            }
          >
            {expiredMessage}
          </div>
        )}
      </div>
      {variant === 'withError' && (
        <div className={'text-roboto_10 text-danger-500'}>{errorMessage}</div>
      )}
    </div>
  )
}

type RecaptchaFormProps = {
  onClick?: () => void
  variant: RecaptchaProps['variant']
}

const RecaptchaForm = ({ onClick, variant }: RecaptchaFormProps) => {
  switch (variant) {
    case 'default':
    case 'withError':
    case 'expired':
      return (
        <button
          className={cn(
            'cursor-pointer absolute top-1/2 left-[22px] -translate-y-1/2 w-[20px] h-[20px] bg-light-100 border border-light-900'
          )}
          onClick={onClick}
          type={'button'}
        />
      )
    case 'checked':
      return (
        <div
          className={
            ' absolute top-1/2 left-[18px] -translate-y-1/2 inline-block text-[31px] text-success-700'
          }
        >
          <CheckmarkOutlineIcon />
        </div>
      )
    case 'loading':
      return (
        <div
          className={
            'absolute top-1/3 left-[18px] inline-block box-border w-[25px] h-[25px] mr-[6px] border-t-[3px] border-t-accent-500 border-r-[3px] border-r-transparent border-l-[3px] border-l-transparent rounded-full animate-spin'
          }
        ></div>
      )
    default:
      return null
  }
}
