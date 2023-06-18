import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function classes(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}