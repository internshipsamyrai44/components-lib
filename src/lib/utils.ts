import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

import config from '../../tailwind.config'

const twMerge = extendTailwindMerge({
  override: {
    classGroups: {
      'font-size': [...Object.keys(config.theme.fontSize).map(key => key)],
      'text-color': [...Object.keys(config.theme.colors).map(key => key)],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
