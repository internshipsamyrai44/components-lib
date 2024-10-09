import { ComponentPropsWithoutRef } from 'react'

import CheckmarkOutline from '@/assets/icons/checkmarkOutline'
import Recaptchalogo1 from '@/assets/icons/recaptchalogo1'
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
        variant === 'withError'
          ? 'inline-flex flex-col gap-3 p-2 px-1.5 pb-3.25 border border-danger-500'
          : ''
      )}
    >
      <div
        className={
          'relative flex items-center justify-between w-[300px] h-[79px] p-3 px-5 font-medium text-medium_14 bg-dark-500 border border-dark-300 rounded-sm'
        }
      >
        <RecaptchaForm onClick={onClick} variant={variant} />
        <div className={'text-light-100 pl-8'}>{label}</div>
        <div className={'w-[44px] text-[5px] text-center'}>
          <Recaptchalogo1 className={'w-[44px] h-[44px]'} />
          <a className={'hover:underline'} href={Privacy}>
            Privacy
          </a>
          <span> - </span>
          <a className={'hover:underline'} href={Terms}>
            Terms
          </a>
        </div>
        {variant === 'expired' && (
          <div className={'text-[10px] text-red-500'}>{expiredMessage}</div>
        )}
      </div>
      {variant === 'withError' && (
        <div
          className={
            'absolute top-[2px] left-[20px] w-[185px] text-[10px] font-normal leading-tight text-red-500'
          }
        >
          {errorMessage}
        </div>
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
        // eslint-disable-next-line react/button-has-type
        <button
          className={cn(
            'btnCheck cursor-pointer absolute top-1/2 left-[20px] -translate-y-1/2 w-[20px] h-[20px] bg-[var(--color-light-100)] border border-[#b7b7b7] transition-colors duration-200 hover:bg-[var(--color-light-700)] active:bg-[var(--color-light-900)]'
          )}
          onClick={onClick}
        ></button>
      )
    case 'checked':
      return (
        <div
          className={cn(
            'absolute top-1/2 left-[15px] -translate-y-1/2 inline-block m-0 text-[31px] font-bold text-[#19983b]'
          )}
        >
          <CheckmarkOutline />
        </div>
      )
    case 'loading':
      return (
        <div
          className={
            'absolute top-1/2 left-[18px] inline-block box-border w-[25px] h-[25px] mr-[6px] border-t-[3px] border-t-[#4d8df4] border-r-[3px] border-r-transparent border-l-[3px] border-l-transparent rounded-full animate-spin'
          }
        ></div>
      )
    default:
      return null
  }
}
