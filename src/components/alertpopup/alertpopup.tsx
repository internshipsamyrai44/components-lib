import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { CrossWhiteIcon } from '@/assets/icons'
import { cn } from '@/lib/utils'

import style from './alertpopup.module.css'

type PropsType = {
  alertType: 'error' | 'success'
  callback?: () => void
  duration?: number
  message: string
}

export const Alertpopup = (props: PropsType): React.ReactElement => {
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
    let timer: ReturnType<typeof setTimeout>

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
      <div
        aria-live={'assertive'}
        className={cn(style.container, alertType === 'success' ? style.success : style.error)}
        role={'alert'}
      >
        <p className={style.message}>
          {alertType === 'error' && <span>Error! </span>}
          {alertMessage}
        </p>
        <CrossWhiteIcon className={style.cross} onClick={handleAlertPopupClose} />
      </div>
    ),
    document.querySelector('body') as HTMLElement
  )
}
