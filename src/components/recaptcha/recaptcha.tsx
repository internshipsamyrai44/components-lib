import { ComponentPropsWithoutRef } from 'react'
import Recaptchalogo1 from '@/assets/icons/Recaptchalogo1'

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
    <div {...rest} className={variant === 'withError' ? '' : ''}>
      <div className={''}>
        {/* тут чек и крутилка*/}
        <div className={''}>{label}</div>
        <div className={''}>
          <Recaptchalogo1 className={''} />
          <a href={Privacy}>Privacy</a>
          <span> - </span>
          <a href={Terms}>Terms</a>
        </div>
        {variant === 'expired' && <div className={''}>{expiredMessage}</div>}
      </div>
      {variant === 'withError' && <div className={''}>{errorMessage}</div>}
    </div>
  )
}
