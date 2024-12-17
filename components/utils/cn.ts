import { clsx, type ClassValue } from 'clsx'

const cn = (...args: ClassValue[]) => {
  return clsx(args)
}
export { cn }
