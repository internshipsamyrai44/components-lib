import { theme } from '@/lib/theme/theme'
import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const twMerge = extendTailwindMerge({
  override: {
    classGroups: {
      'font-size': [...Object.keys(theme.fontSize).map(key => key)],
      'text-color': [...Object.keys(theme.colors).map(key => key)],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
