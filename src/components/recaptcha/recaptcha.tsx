import { ComponentPropsWithoutRef } from 'react'
import Recaptchalogo1 from '@/assets/icons/Recaptchalogo1'
import CheckmarkOutline from '@/assets/icons/CheckmarkOutline'
import { cn } from '@/lib/utils'

type policyLinks = [string, string]

export type RecaptchaProps = {
  variant: 'default' | 'checked' | 'loading' | 'withError' | 'expired'
  policyLinks?: policyLinks
  errorMessage?: string
  expiredMessage?: string
  label?: string
  onClick?: () => void
} & ComponentPropsWithoutRef<'div'>

export const Recaptcha = (props: RecaptchaProps) => {
  const {
    variant,
    policyLinks = [
      'https://policies.google.com/privacy?hl=ru',
      'https://policies.google.com/terms?hl=ru',
    ],
    errorMessage = 'Please verify that you are not a robot',
    expiredMessage = 'Verification expired. Check the checkbox again.',
    label = 'I’m not a robot',
    onClick,
    ...rest
  } = props
  const [Privacy, Terms] = policyLinks

  return (
    <div {...rest} className={cn({ 'with-error': variant === 'withError' })}>
      <div className="container">
        <RecaptchaForm onClick={onClick} variant={variant} />
        <div className="label">{label}</div>
        <div className="footer">
          <Recaptchalogo1 className="logo" />
          <a href={Privacy}>Privacy</a>
          <span> - </span>
          <a href={Terms}>Terms</a>
        </div>
        {variant === 'expired' && <div className="expired">{expiredMessage}</div>}
      </div>
      {variant === 'withError' && <div className="error">{errorMessage}</div>}
    </div>
  )
}

type RecaptchaFormProps = {
  variant: RecaptchaProps['variant']
  onClick?: () => void
}

const RecaptchaForm = ({ variant, onClick }: RecaptchaFormProps) => {
  switch (variant) {
    case 'default':
    case 'withError':
    case 'expired':
      return <button className="checkBox" onClick={onClick}></button>
    case 'checked':
      return (
        <div className="checked">
          <CheckmarkOutline />
        </div>
      )
    case 'loading':
      return <div className="loader"></div>
    default:
      return null
  }
}
