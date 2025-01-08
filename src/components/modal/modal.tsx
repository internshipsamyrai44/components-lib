import React, { useCallback, useEffect, useRef, useState } from 'react'
import type { MouseEventHandler } from 'react'
import { createContainer } from '@/components/portal'
import { Portal } from '@/components/portal/portal'
import { CrossWhiteIcon } from '@/assets'
import { cn } from '@/lib/utils'
import s from './Modal.module.scss'

const MODAL_CONTAINER_ID = 'modal-container-id'

type Props = {
  title?: string
  onClose?: () => void
  children?: React.ReactNode | React.ReactNode[]
  className?: string
}

export const Modal = (props: Props) => {
  const { title, onClose, children, className } = props

  const rootRef = useRef<HTMLDivElement>(null)
  const [isMounted, setMounted] = useState(false)

  useEffect(() => {
    createContainer({ id: MODAL_CONTAINER_ID })
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleWrapperClick = (event: MouseEvent) => {
      const { target } = event

      if (target instanceof Node && rootRef.current === target) {
        onClose?.()
      }
    }
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.()
      }
    }

    window.addEventListener('click', handleWrapperClick)
    window.addEventListener('keydown', handleEscapePress)

    return () => {
      window.removeEventListener('click', handleWrapperClick)
      window.removeEventListener('keydown', handleEscapePress)
    }
  }, [onClose])

  const handleClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement> = useCallback(() => {
    onClose?.()
  }, [onClose])

  return isMounted ? (
    <Portal id={MODAL_CONTAINER_ID}>
      <div className={s.wrap} ref={rootRef} data-testid="wrap">
        <div className={s.container}>
          <div className={s.header}>
            <p className={s.title}>{title}</p>
            <CrossWhiteIcon
              className={s['close-button']}
              onClick={handleClose}
              width={14}
              height={14}
              data-testid="modal-close-button"
            />
          </div>
          <div className={cn(s.content, className)}>{children}</div>
        </div>
      </div>
    </Portal>
  ) : null
}
