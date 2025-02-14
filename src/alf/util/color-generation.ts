export const BLUE_HUE = 211
export const RED_HUE = 346
export const GREEN_HUE = 152

export const COLOR_OPACITIES = [
  0, 0.05, 0.1, 0.15, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.85, 0.9, 0.95, 1,
]

export function generateScale(start: number, end: number) {
  const range = end - start

  const colors = COLOR_OPACITIES.map((opacity) => {
    return start + range * opacity
  })

  return colors
}

export const defaultScale = generateScale(6, 100)
