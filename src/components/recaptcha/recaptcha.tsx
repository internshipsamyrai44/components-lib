import { ComponentPropsWithoutRef } from 'react'

import CheckmarkOutline from '@/assets/icons/CheckmarkOutline'
import Recaptchalogo1 from '@/assets/icons/Recaptchalogo1'

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
    <div {...rest} className={variant === 'withError' ? 'inline-flex flex-col gap-3' : ''}>
      <div className={'container'}>
        <RecaptchaForm onClick={onClick} variant={variant} />
        <div className={'label'}>{label}</div>
        <div className={'footer'}>
          <Recaptchalogo1 className={'logo'} />
          <a href={Privacy}>Privacy</a>
          <span> - </span>
          <a href={Terms}>Terms</a>
        </div>
        {variant === 'expired' && <div className={'expired'}>{expiredMessage}</div>}
      </div>
      {variant === 'withError' && <div className={'error'}>{errorMessage}</div>}
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
      // eslint-disable-next-line react/button-has-type
      return <button className={'checkBox'} onClick={onClick}></button>
    case 'checked':
      return (
        <div className={'checked'}>
          <CheckmarkOutline />
        </div>
      )
    case 'loading':
      return <div className={'loader'}></div>
    default:
      return null
  }
}
