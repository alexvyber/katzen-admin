import { type ClassValue, cx } from "cvax"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(cx(inputs))
}

/**
 * @param {array} arr Array to be grouped
 * @param {number} itemsPerGroup number of items per group
 * @returns {array} array of arrays
 */
export function groupArrayItems<T>(arr: T[], itemsPerGroup: number): T[][] {
  if (itemsPerGroup < 1) return [arr]

  const grouped = [] as T[][]

  for (let i = 0, len = arr.length, tmp = [] as T[]; i < len; i++) {
    if (i + 1 < len) {
      if (tmp.length < itemsPerGroup) {
        tmp.push(arr[i])
      } else {
        grouped.push(tmp)
        tmp = []
        tmp.push(arr[i])
      }
    } else {
      if (tmp.length < itemsPerGroup) {
        tmp.push(arr[i])
        grouped.push(tmp)
      } else {
        grouped.push(tmp)
        grouped.push([arr[i]])
      }
    }
  }

  return grouped
}

export function getApiUrl() {
  return "http://localhost:1337"
}

const dateFormatter = new Intl.DateTimeFormat("ru-RU")
export function formatDate(date: Date | number) {
  return dateFormatter.format(date)
}

export function getExcerpt(text: string, length: number, dots?: boolean): string {
  if (text.length > length) return text.slice(0, length) + (dots ? "..." : "")
  return text
}

const formatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  maximumFractionDigits: 0,
})

export function format(str?: string | number) {
  if (!str) return ""
  if (typeof str === "string") return formatter.format(parseFloat(str))
  return formatter.format(str)
}

export function capitalize<T>(value: T) {
  if (typeof value !== "string") return value
  return value[0].toLocaleUpperCase() + value.slice(1)
}
