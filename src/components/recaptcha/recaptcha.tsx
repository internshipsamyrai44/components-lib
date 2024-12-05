import { ComponentPropsWithoutRef } from 'react'

import { CheckmarkOutlineIcon, RecaptchalogoIcon } from '@/assets/icons'
import { cn } from '@/lib/utils'

import styles from './recaptcha.module.scss'

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
    <div {...rest} className={cn(variant === 'withError' && styles['container-with-error'])}>
      <div className={styles['main-container']}>
        <RecaptchaForm onClick={onClick} variant={variant} />
        <div className={styles.label}>{label}</div>
        <div className={styles['logo-container']}>
          <RecaptchalogoIcon className={styles.logo} />
          <div className={styles['privacy-links']}>
            <a className={styles['privacy-link']} href={Privacy}>
              Privacy
            </a>
            <span className={styles['terms-separator']}> - </span>
            <a className={styles['privacy-link']} href={Terms}>
              Terms
            </a>
          </div>
        </div>
        {variant === 'expired' && <div className={styles['expired-message']}>{expiredMessage}</div>}
      </div>
      {variant === 'withError' && <div className={styles['error-message']}>{errorMessage}</div>}
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
      return <button className={styles.button} onClick={onClick} type={'button'} />
    case 'checked':
      return (
        <div className={styles.checked}>
          <CheckmarkOutlineIcon />
        </div>
      )
    case 'loading':
      return <div className={styles.loading}></div>
    default:
      return null
  }
}
