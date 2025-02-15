import React from 'react'
import { createThemes, defaultTheme } from '@/src/alf/themes'
import type { Theme, ThemeName } from '@/src/alf/util/types'
import { HUES } from './util/color-generation'

export { atoms } from '@/src/alf/atoms'
export * as tokens from '@/src/alf/tokens'
export * from '@/src/alf//util/types'

export type Alf = {
  themeName: ThemeName
  theme: Theme
  themes: ReturnType<typeof createThemes>
}

export const Context = React.createContext<Alf>({
  themeName: 'light',
  theme: defaultTheme,
  themes: createThemes({
    hues: {
      primary: HUES.PRIMARY,
      success: HUES.SUCCESS,
      info: HUES.INFO,
      warn: HUES.WARN,
      error: HUES.ERROR,
    },
  }),
})

export function useAlf() {
  return React.useContext(Context)
}

export function useTheme(theme?: ThemeName) {
  const alf = useAlf()
  return React.useMemo(() => {
    return theme ? alf.themes[theme] : alf.theme
  }, [theme, alf])
}

export function ThemeProvider({
  children,
  theme: themeName,
}: React.PropsWithChildren<{ theme: ThemeName }>) {
  const themes = React.useMemo(() => {
    return createThemes({
      hues: {
        primary: HUES.PRIMARY,
        success: HUES.SUCCESS,
        info: HUES.INFO,
        warn: HUES.WARN,
        error: HUES.ERROR,
      },
    })
  }, [])

  const value = React.useMemo<Alf>(
    () => ({
      themes,
      themeName: themeName,
      theme: themes[themeName],
    }),
    [themeName, themes],
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}
