import * as React from 'react'
import { SVGProps } from 'react'

export const PaginationArrowBackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill={'none'} height={16} width={16} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <g clipPath={'url(#a)'}>
      <path
        d={
          'M9.22 12.667a.668.668 0 0 1-.52-.247l-3.22-4a.667.667 0 0 1 0-.847l3.333-4a.668.668 0 0 1 1.027.854L6.86 8l2.88 3.573a.666.666 0 0 1-.52 1.094Z'
        }
        fill={'#fff'}
      />
    </g>
    <defs>
      <clipPath id={'a'}>
        <path d={'M0 0h16v16H0z'} fill={'#fff'} />
      </clipPath>
    </defs>
  </svg>
)
