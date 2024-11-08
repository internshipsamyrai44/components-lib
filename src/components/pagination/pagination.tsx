import React, { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'

import { PaginationArrowBackIcon, PaginationArrowForwardIcon } from '@/assets/icons'
import { cn } from '@/lib/utils'

import styles from './pagination.module.css'

import { usePagination } from './usePagination'

type PaginationProps = {
  currentPage: number
  onChangePage: (num: number) => void
  pageSize: number
  siblingCount?: number
  totalCount: number
} & ComponentPropsWithoutRef<'div'>

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      children,
      className,
      currentPage,
      onChangePage,
      pageSize,
      siblingCount = 1,
      totalCount,
      ...rest
    },
    ref
  ) => {
    const classNames = { container: styles.container, root: cn(styles.root, className) } as const
    const { handleClickNextBtn, handleClickPrevBtn, handlePageChange, paginationRange } =
      usePagination({ currentPage, onChangePage, pageSize, siblingCount, totalCount })

    const disabledPrevBtn = currentPage < 2
    const disabledNextBtn = currentPage >= Math.ceil(totalCount / pageSize)

    const mainButtons = React.useMemo(
      () =>
        paginationRange.map((pageLocal: number, i: number) => {
          const isSelected = currentPage === pageLocal

          return (
            <PaginationButton
              isSelected={isSelected}
              key={i}
              onClick={() => handlePageChange(pageLocal as number)}
            >
              <div className={cn('text-regular_14')}>{pageLocal}</div>
            </PaginationButton>
          )
        }),
      [paginationRange, currentPage, handlePageChange]
    )

    return (
      <div className={cn(classNames.root)} {...rest} ref={ref}>
        <div className={cn(classNames.container)}>
          <PaginationButton
            aria-label={'Previous page'}
            disabled={disabledPrevBtn}
            onClick={() => handleClickPrevBtn()}
          >
            <PaginationArrowBackIcon />
          </PaginationButton>
          {mainButtons}
          <PaginationButton
            aria-label={'Next page'}
            disabled={disabledNextBtn}
            onClick={() => {
              handleClickNextBtn()
            }}
          >
            <PaginationArrowForwardIcon />
          </PaginationButton>
        </div>
        {children}
      </div>
    )
  }
)

type PaginationButtonProps = {
  isSelected?: boolean
  onClick?: () => void
} & ComponentPropsWithoutRef<'button'>

const PaginationButton = ({
  children,
  className,
  isSelected,
  onClick,
  ...rest
}: PaginationButtonProps) => {
  const classNames = {
    btn: cn(styles.btn, isSelected && styles.selected, className),
  } as const

  return (
    <button className={cn(classNames.btn)} onClick={onClick} type={'button'} {...rest}>
      {children}
    </button>
  )
}

type SelectContainerProps = {
  children: ReactNode
  content: string[]
} & Omit<ComponentPropsWithoutRef<'div'>, 'content'>

export const SelectContainer = ({
  children,
  className,
  content,
  ...rest
}: SelectContainerProps) => {
  const classNames = {
    select: cn(styles.select, className),
  }

  return (
    <div className={classNames.select} {...rest}>
      <span className={cn('text-regular_14 text-light-100')}>{content[0] || ''}</span>
      <div>{children}</div>
      <span className={cn('text-regular_14 text-light-100')}> {content[1] || ''}</span>
    </div>
  )
}
