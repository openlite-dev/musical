import type { StyleProp, View as ViewType, ViewStyle } from 'react-native'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { atoms as a } from '@musical/alf'

export type ScreenProps = React.ComponentProps<typeof ViewType> & {
  style?: StyleProp<ViewStyle>
  noInsetTop?: boolean
}

export default function UApp(props: ScreenProps) {
  const { top } = useSafeAreaInsets()

  return (
    <View
      style={[
        a.util_screen_outer,
        { paddingTop: props.noInsetTop ? 0 : top },
        props.style,
      ]}
      {...props}
    />
  )
}
