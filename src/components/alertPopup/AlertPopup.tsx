import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { CrossWhite } from '@/assets'
import { cn } from '@/lib/utils'

import style from './AlertPopup.module.css'

type PropsType = {
  alertType: 'error' | 'success'
  callback?: () => void
  duration?: number
  message: string
}

export const AlertPopup = (props: PropsType): JSX.Element => {
  const { alertType, callback, duration = 5000, message } = props
  const [open, setOpen] = useState(true)
  const [alertMessage, setAlertMessage] = useState<null | string>(message)

  const handleAlertPopupClose = (): void => {
    setOpen(false)
    setAlertMessage(null)
    if (callback) {
      callback()
    }
  }

  useEffect(() => {
    let timer: any

    if (message) {
      setOpen(true)

      timer = setTimeout(() => {
        handleAlertPopupClose()
      }, duration)
    }

    return () => clearTimeout(timer)
  }, [])

  return createPortal(
    open && (
      <div className={cn(style.container, alertType === 'success' ? style.success : style.error)}>
        <p className={style.message}>{alertMessage}</p>
        <CrossWhite className={style.cross} onClick={handleAlertPopupClose} />
      </div>
    ),
    document.querySelector('body') as HTMLElement
  )
}
