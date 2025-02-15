import { HUES, defaultScale } from '@/src/alf/util/color-generation'
import type {
  BgColorAtoms,
  BorderColorAtoms,
  Palette,
  TextColorAtoms,
  Theme,
} from '@/src/alf/util/types'
import { atoms } from '@/src/alf/atoms'

export interface Hues {
  hues: {
    primary: number
    success: number
    info: number
    warn: number
    error: number
  }
}

export interface Result {
  lightPalette: Palette
  darkPalette: Palette
  light: Theme
  dark: Theme
}

const themes = createThemes({
  hues: {
    primary: HUES.PRIMARY,
    success: HUES.SUCCESS,
    info: HUES.INFO,
    warn: HUES.WARN,
    error: HUES.ERROR,
  },
})

export const defaultTheme = themes.light

function createBackgroundAtoms(palette: Palette): BgColorAtoms {
  const colorAtoms = {} as BgColorAtoms

  Object.entries(palette).forEach(([key, value]) => {
    // @ts-expect-error
    colorAtoms[`bg_${key}`] = {
      backgroundColor: value,
    }
  })

  return colorAtoms
}

function createBorderAtoms(palette: Palette): BorderColorAtoms {
  const colorAtoms = {} as BorderColorAtoms

  Object.entries(palette).forEach(([key, value]) => {
    // @ts-expect-error
    colorAtoms[`border_${key}`] = {
      borderColor: value,
    }
  })
  return colorAtoms
}

function createTextAtoms(palette: Palette): TextColorAtoms {
  const colorAtoms = {} as TextColorAtoms

  Object.entries(palette).forEach(([key, value]) => {
    // @ts-expect-error
    colorAtoms[`text_${key}`] = {
      color: value,
    }
  })
  return colorAtoms
}

export function createThemes({ hues }: Hues): Result {
  const color = {
    black: '#191D21',

    gray_0: `hsl(${hues.primary}, 20%, ${defaultScale[14]}%)`,
    gray_25: `hsl(${hues.primary}, 20%, ${defaultScale[13]}%)`,
    gray_50: `hsl(${hues.primary}, 20%, ${defaultScale[12]}%)`,
    gray_100: `hsl(${hues.primary}, 20%, ${defaultScale[11]}%)`,
    gray_200: `hsl(${hues.primary}, 20%, ${defaultScale[10]}%)`,
    gray_300: `hsl(${hues.primary}, 20%, ${defaultScale[9]}%)`,
    gray_400: `hsl(${hues.primary}, 20%, ${defaultScale[8]}%)`,
    gray_500: `hsl(${hues.primary}, 20%, ${defaultScale[7]}%)`,
    gray_600: `hsl(${hues.primary}, 24%, ${defaultScale[6]}%)`,
    gray_700: `hsl(${hues.primary}, 24%, ${defaultScale[5]}%)`,
    gray_800: `hsl(${hues.primary}, 28%, ${defaultScale[4]}%)`,
    gray_900: `hsl(${hues.primary}, 28%, ${defaultScale[3]}%)`,
    gray_950: `hsl(${hues.primary}, 28%, ${defaultScale[2]}%)`,
    gray_975: `hsl(${hues.primary}, 28%, ${defaultScale[1]}%)`,
    gray_1000: `hsl(${hues.primary}, 28%, ${defaultScale[0]}%)`,

    primary_25: `hsl(${hues.primary}, 99%, 97%)`,
    primary_50: `hsl(${hues.primary}, 99%, 95%)`,
    primary_100: `hsl(${hues.primary}, 99%, 90%)`,
    primary_200: `hsl(${hues.primary}, 99%, 80%)`,
    primary_300: `hsl(${hues.primary}, 99%, 70%)`,
    primary_400: `hsl(${hues.primary}, 99%, 60%)`,
    primary_500: `hsl(${hues.primary}, 99%, 53%)`,
    primary_600: `hsl(${hues.primary}, 99%, 42%)`,
    primary_700: `hsl(${hues.primary}, 99%, 34%)`,
    primary_800: `hsl(${hues.primary}, 99%, 26%)`,
    primary_900: `hsl(${hues.primary}, 99%, 18%)`,
    primary_950: `hsl(${hues.primary}, 99%, 10%)`,
    primary_975: `hsl(${hues.primary}, 99%, 7%)`,

    success_25: `hsl(${hues.success}, 82%, 97%)`,
    success_50: `hsl(${hues.success}, 82%, 95%)`,
    success_100: `hsl(${hues.success}, 82%, 90%)`,
    success_200: `hsl(${hues.success}, 82%, 80%)`,
    success_300: `hsl(${hues.success}, 82%, 70%)`,
    success_400: `hsl(${hues.success}, 82%, 60%)`,
    success_500: `hsl(${hues.success}, 82%, 50%)`,
    success_600: `hsl(${hues.success}, 82%, 42%)`,
    success_700: `hsl(${hues.success}, 82%, 34%)`,
    success_800: `hsl(${hues.success}, 82%, 26%)`,
    success_900: `hsl(${hues.success}, 82%, 18%)`,
    success_950: `hsl(${hues.success}, 82%, 10%)`,
    success_975: `hsl(${hues.success}, 82%, 7%)`,

    info_25: `hsl(${hues.info}, 85%, 97%)`,
    info_50: `hsl(${hues.info}, 85%, 95%)`,
    info_100: `hsl(${hues.info}, 85%, 90%)`,
    info_200: `hsl(${hues.info}, 85%, 80%)`,
    info_300: `hsl(${hues.info}, 85%, 70%)`,
    info_400: `hsl(${hues.info}, 85%, 60%)`,
    info_500: `hsl(${hues.info}, 85%, 50%)`,
    info_600: `hsl(${hues.info}, 85%, 42%)`,
    info_700: `hsl(${hues.info}, 85%, 34%)`,
    info_800: `hsl(${hues.info}, 85%, 26%)`,
    info_900: `hsl(${hues.info}, 85%, 18%)`,
    info_950: `hsl(${hues.info}, 85%, 10%)`,
    info_975: `hsl(${hues.info}, 85%, 7%)`,

    warn_25: `hsl(${hues.warn}, 95%, 97%)`,
    warn_50: `hsl(${hues.warn}, 95%, 95%)`,
    warn_100: `hsl(${hues.warn}, 95%, 90%)`,
    warn_200: `hsl(${hues.warn}, 95%, 80%)`,
    warn_300: `hsl(${hues.warn}, 95%, 70%)`,
    warn_400: `hsl(${hues.warn}, 95%, 60%)`,
    warn_500: `hsl(${hues.warn}, 95%, 50%)`,
    warn_600: `hsl(${hues.warn}, 95%, 42%)`,
    warn_700: `hsl(${hues.warn}, 95%, 34%)`,
    warn_800: `hsl(${hues.warn}, 95%, 26%)`,
    warn_900: `hsl(${hues.warn}, 95%, 18%)`,
    warn_950: `hsl(${hues.warn}, 95%, 10%)`,
    warn_975: `hsl(${hues.warn}, 95%, 7%)`,

    error_25: `hsl(${hues.error}, 91%, 97%)`,
    error_50: `hsl(${hues.error}, 91%, 95%)`,
    error_100: `hsl(${hues.error}, 91%, 90%)`,
    error_200: `hsl(${hues.error}, 91%, 80%)`,
    error_300: `hsl(${hues.error}, 91%, 70%)`,
    error_400: `hsl(${hues.error}, 91%, 60%)`,
    error_500: `hsl(${hues.error}, 91%, 50%)`,
    error_600: `hsl(${hues.error}, 91%, 42%)`,
    error_700: `hsl(${hues.error}, 91%, 34%)`,
    error_800: `hsl(${hues.error}, 91%, 26%)`,
    error_900: `hsl(${hues.error}, 91%, 18%)`,
    error_950: `hsl(${hues.error}, 91%, 10%)`,
    error_975: `hsl(${hues.error}, 91%, 7%)`,
  } as const

  const lightPalette = {
    white: color.gray_0,
    black: color.gray_1000,

    contrast_25: color.gray_25,
    contrast_50: color.gray_50,
    contrast_100: color.gray_100,
    contrast_200: color.gray_200,
    contrast_300: color.gray_300,
    contrast_400: color.gray_400,
    contrast_500: color.gray_500,
    contrast_600: color.gray_600,
    contrast_700: color.gray_700,
    contrast_800: color.gray_800,
    contrast_900: color.gray_900,
    contrast_950: color.gray_950,
    contrast_975: color.gray_975,

    primary_25: color.primary_25,
    primary_50: color.primary_50,
    primary_100: color.primary_100,
    primary_200: color.primary_200,
    primary_300: color.primary_300,
    primary_400: color.primary_400,
    primary_500: color.primary_500,
    primary_600: color.primary_600,
    primary_700: color.primary_700,
    primary_800: color.primary_800,
    primary_900: color.primary_900,
    primary_950: color.primary_950,
    primary_975: color.primary_975,

    success_25: color.success_25,
    success_50: color.success_50,
    success_100: color.success_100,
    success_200: color.success_200,
    success_300: color.success_300,
    success_400: color.success_400,
    success_500: color.success_500,
    success_600: color.success_600,
    success_700: color.success_700,
    success_800: color.success_800,
    success_900: color.success_900,
    success_950: color.success_950,
    success_975: color.success_975,

    info_25: color.info_25,
    info_50: color.info_50,
    info_100: color.info_100,
    info_200: color.info_200,
    info_300: color.info_300,
    info_400: color.info_400,
    info_500: color.info_500,
    info_600: color.info_600,
    info_700: color.info_700,
    info_800: color.info_800,
    info_900: color.info_900,
    info_950: color.info_950,
    info_975: color.info_975,

    error_25: color.error_25,
    error_50: color.error_50,
    error_100: color.error_100,
    error_200: color.error_200,
    error_300: color.error_300,
    error_400: color.error_400,
    error_500: color.error_500,
    error_600: color.error_600,
    error_700: color.error_700,
    error_800: color.error_800,
    error_900: color.error_900,
    error_950: color.error_950,
    error_975: color.error_975,
  } as const

  const darkPalette: Palette = {
    white: color.gray_25,
    black: color.black,

    contrast_25: color.gray_975,
    contrast_50: color.gray_950,
    contrast_100: color.gray_900,
    contrast_200: color.gray_800,
    contrast_300: color.gray_700,
    contrast_400: color.gray_600,
    contrast_500: color.gray_500,
    contrast_600: color.gray_400,
    contrast_700: color.gray_300,
    contrast_800: color.gray_200,
    contrast_900: color.gray_100,
    contrast_950: color.gray_50,
    contrast_975: color.gray_25,

    primary_25: color.primary_975,
    primary_50: color.primary_950,
    primary_100: color.primary_900,
    primary_200: color.primary_800,
    primary_300: color.primary_700,
    primary_400: color.primary_600,
    primary_500: color.primary_500,
    primary_600: color.primary_400,
    primary_700: color.primary_300,
    primary_800: color.primary_200,
    primary_900: color.primary_100,
    primary_950: color.primary_50,
    primary_975: color.primary_25,

    success_25: color.success_975,
    success_50: color.success_950,
    success_100: color.success_900,
    success_200: color.success_800,
    success_300: color.success_700,
    success_400: color.success_600,
    success_500: color.success_500,
    success_600: color.success_400,
    success_700: color.success_300,
    success_800: color.success_200,
    success_900: color.success_100,
    success_950: color.success_50,
    success_975: color.success_25,

    info_25: color.info_975,
    info_50: color.info_950,
    info_100: color.info_900,
    info_200: color.info_800,
    info_300: color.info_700,
    info_400: color.info_600,
    info_500: color.info_500,
    info_600: color.info_400,
    info_700: color.info_300,
    info_800: color.info_200,
    info_900: color.info_100,
    info_950: color.info_50,
    info_975: color.info_25,

    error_25: color.error_975,
    error_50: color.error_950,
    error_100: color.error_900,
    error_200: color.error_800,
    error_300: color.error_700,
    error_400: color.error_600,
    error_500: color.error_500,
    error_600: color.error_400,
    error_700: color.error_300,
    error_800: color.error_200,
    error_900: color.error_100,
    error_950: color.error_50,
    error_975: color.error_25,
  } as const

  const light: Theme = {
    scheme: 'light',
    name: 'light',
    palette: lightPalette,
    atoms: {
      ...createBackgroundAtoms(lightPalette),
      ...createBorderAtoms(lightPalette),
      ...createTextAtoms(lightPalette),
      text: {
        color: lightPalette.black,
      },
      text_contrast_low: {
        color: lightPalette.contrast_400,
      },
      text_contrast_medium: {
        color: lightPalette.contrast_700,
      },
      text_contrast_high: {
        color: lightPalette.contrast_900,
      },
      text_inverted: {
        color: lightPalette.white,
      },
      bg: {
        backgroundColor: lightPalette.white,
      },
      bg_contrast_25: {
        backgroundColor: lightPalette.contrast_25,
      },
      bg_contrast_50: {
        backgroundColor: lightPalette.contrast_50,
      },
      bg_contrast_100: {
        backgroundColor: lightPalette.contrast_100,
      },
      bg_contrast_200: {
        backgroundColor: lightPalette.contrast_200,
      },
      bg_contrast_300: {
        backgroundColor: lightPalette.contrast_300,
      },
      bg_contrast_400: {
        backgroundColor: lightPalette.contrast_400,
      },
      bg_contrast_500: {
        backgroundColor: lightPalette.contrast_500,
      },
      bg_contrast_600: {
        backgroundColor: lightPalette.contrast_600,
      },
      bg_contrast_700: {
        backgroundColor: lightPalette.contrast_700,
      },
      bg_contrast_800: {
        backgroundColor: lightPalette.contrast_800,
      },
      bg_contrast_900: {
        backgroundColor: lightPalette.contrast_900,
      },
      bg_contrast_950: {
        backgroundColor: lightPalette.contrast_950,
      },
      bg_contrast_975: {
        backgroundColor: lightPalette.contrast_975,
      },
      border_contrast_low: {
        borderColor: lightPalette.contrast_100,
      },
      border_contrast_medium: {
        borderColor: lightPalette.contrast_200,
      },
      border_contrast_high: {
        borderColor: lightPalette.contrast_300,
      },
      shadow_sm: {
        ...atoms.shadow_sm,
        shadowColor: lightPalette.black,
      },
      shadow_md: {
        ...atoms.shadow_md,
        shadowColor: lightPalette.black,
      },
      shadow_lg: {
        ...atoms.shadow_lg,
        shadowColor: lightPalette.black,
      },
    },
  }

  const dark: Theme = {
    scheme: 'dark',
    name: 'dark',
    palette: darkPalette,
    atoms: {
      ...createBackgroundAtoms(darkPalette),
      ...createBorderAtoms(darkPalette),
      ...createTextAtoms(darkPalette),
      text: {
        color: darkPalette.white,
      },
      text_contrast_low: {
        color: darkPalette.contrast_400,
      },
      text_contrast_medium: {
        color: darkPalette.contrast_600,
      },
      text_contrast_high: {
        color: darkPalette.contrast_900,
      },
      text_inverted: {
        color: darkPalette.black,
      },
      bg: {
        backgroundColor: darkPalette.black,
      },
      bg_contrast_25: {
        backgroundColor: darkPalette.contrast_25,
      },
      bg_contrast_50: {
        backgroundColor: darkPalette.contrast_50,
      },
      bg_contrast_100: {
        backgroundColor: darkPalette.contrast_100,
      },
      bg_contrast_200: {
        backgroundColor: darkPalette.contrast_200,
      },
      bg_contrast_300: {
        backgroundColor: darkPalette.contrast_300,
      },
      bg_contrast_400: {
        backgroundColor: darkPalette.contrast_400,
      },
      bg_contrast_500: {
        backgroundColor: darkPalette.contrast_500,
      },
      bg_contrast_600: {
        backgroundColor: darkPalette.contrast_600,
      },
      bg_contrast_700: {
        backgroundColor: darkPalette.contrast_700,
      },
      bg_contrast_800: {
        backgroundColor: darkPalette.contrast_800,
      },
      bg_contrast_900: {
        backgroundColor: darkPalette.contrast_900,
      },
      bg_contrast_950: {
        backgroundColor: darkPalette.contrast_950,
      },
      bg_contrast_975: {
        backgroundColor: darkPalette.contrast_975,
      },
      border_contrast_low: {
        borderColor: darkPalette.contrast_100,
      },
      border_contrast_medium: {
        borderColor: darkPalette.contrast_200,
      },
      border_contrast_high: {
        borderColor: darkPalette.contrast_300,
      },
      shadow_sm: {
        ...atoms.shadow_sm,
        shadowOpacity: 0.7,
        shadowColor: color.black,
      },
      shadow_md: {
        ...atoms.shadow_md,
        shadowOpacity: 0.7,
        shadowColor: color.black,
      },
      shadow_lg: {
        ...atoms.shadow_lg,
        shadowOpacity: 0.7,
        shadowColor: color.black,
      },
    },
  }

  return {
    lightPalette,
    darkPalette,
    light,
    dark,
  }
}
