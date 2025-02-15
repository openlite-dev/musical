export const COLORS = {
  PRIMARY: '#1814E4',
  SUCCESS: '#23E9B4',
  INFO: '#91D7E0',
  WARNING: '#FFAC4B',
  ERROR: '#FF5A5A',
} as const

export const HUES = {
  PRIMARY: hexToHSL(COLORS.PRIMARY).h,
  SUCCESS: hexToHSL(COLORS.SUCCESS).h,
  INFO: hexToHSL(COLORS.INFO).h,
  WARN: hexToHSL(COLORS.WARNING).h,
  ERROR: hexToHSL(COLORS.ERROR).h,
} as const

export const COLOR_OPACITIES = [
  0, 0.05, 0.1, 0.15, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.85, 0.9, 0.95, 1,
]

export const defaultScale = generateScale(6, 100)

export function generateScale(start: number, end: number) {
  const range = end - start

  const colors = COLOR_OPACITIES.map((opacity) => {
    return start + range * opacity
  })

  return colors
}

export function hexToHSL(hex: string): { h: number; s: number; l: number } {
  hex = hex.replace(/^#/, '')

  const r = parseInt(hex.slice(0, 2), 16) / 255
  const g = parseInt(hex.slice(2, 4), 16) / 255
  const b = parseInt(hex.slice(4, 6), 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }

    h /= 6
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  }
}
