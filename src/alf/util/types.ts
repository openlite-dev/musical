export type ThemeName = 'light' | 'dark'

export type Palette = {
  white: string
  black: string

  contrast_25: string
  contrast_50: string
  contrast_100: string
  contrast_200: string
  contrast_300: string
  contrast_400: string
  contrast_500: string
  contrast_600: string
  contrast_700: string
  contrast_800: string
  contrast_900: string
  contrast_950: string
  contrast_975: string

  primary_25: string
  primary_50: string
  primary_100: string
  primary_200: string
  primary_300: string
  primary_400: string
  primary_500: string
  primary_600: string
  primary_700: string
  primary_800: string
  primary_900: string
  primary_950: string
  primary_975: string

  success_25: string
  success_50: string
  success_100: string
  success_200: string
  success_300: string
  success_400: string
  success_500: string
  success_600: string
  success_700: string
  success_800: string
  success_900: string
  success_950: string
  success_975: string

  info_25: string
  info_50: string
  info_100: string
  info_200: string
  info_300: string
  info_400: string
  info_500: string
  info_600: string
  info_700: string
  info_800: string
  info_900: string
  info_950: string
  info_975: string

  error_25: string
  error_50: string
  error_100: string
  error_200: string
  error_300: string
  error_400: string
  error_500: string
  error_600: string
  error_700: string
  error_800: string
  error_900: string
  error_950: string
  error_975: string
}

export type PaletteKeys = keyof Palette

type BgColorKeys = `bg_${PaletteKeys}`
type BorderColorKeys = `border_${PaletteKeys}`

export type BgColorAtoms = {
  [K in BgColorKeys]: {
    backgroundColor: string
  }
}

export type BorderColorAtoms = {
  [K in BorderColorKeys]: {
    borderColor: string
  }
}

export type ThemedAtoms = {
  text: {
    color: string
  }
  text_contrast_low: {
    color: string
  }
  text_contrast_medium: {
    color: string
  }
  text_contrast_high: {
    color: string
  }
  text_inverted: {
    color: string
  }
  bg: {
    backgroundColor: string
  }
  bg_contrast_25: {
    backgroundColor: string
  }
  bg_contrast_50: {
    backgroundColor: string
  }
  bg_contrast_100: {
    backgroundColor: string
  }
  bg_contrast_200: {
    backgroundColor: string
  }
  bg_contrast_300: {
    backgroundColor: string
  }
  bg_contrast_400: {
    backgroundColor: string
  }
  bg_contrast_500: {
    backgroundColor: string
  }
  bg_contrast_600: {
    backgroundColor: string
  }
  bg_contrast_700: {
    backgroundColor: string
  }
  bg_contrast_800: {
    backgroundColor: string
  }
  bg_contrast_900: {
    backgroundColor: string
  }
  bg_contrast_950: {
    backgroundColor: string
  }
  bg_contrast_975: {
    backgroundColor: string
  }
  border_contrast_low: {
    borderColor: string
  }
  border_contrast_medium: {
    borderColor: string
  }
  border_contrast_high: {
    borderColor: string
  }
  shadow_sm: {
    shadowRadius: number
    shadowOpacity: number
    elevation: number
    shadowColor: string
  }
  shadow_md: {
    shadowRadius: number
    shadowOpacity: number
    elevation: number
    shadowColor: string
  }
  shadow_lg: {
    shadowRadius: number
    shadowOpacity: number
    elevation: number
    shadowColor: string
  }
}

export type Theme = {
  scheme: 'light' | 'dark'
  name: ThemeName
  palette: Palette
  atoms: ThemedAtoms & BgColorAtoms & BorderColorAtoms
}
