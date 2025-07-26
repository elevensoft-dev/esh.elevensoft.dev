import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const blockedDomains = ['tempmail.com', 'mailinator.com', '10minutemail.com']
export const isValidDomain = (email: string) => {
  const domain = email.split('@')[1]?.toLowerCase()
  return domain && !blockedDomains.includes(domain)
}

export const isValidEmailFull = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && isValidDomain(email)

