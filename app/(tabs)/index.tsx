import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { atoms as a, useTheme } from '@musical/alf'

export default function App() {
  const t = useTheme()
  const { top } = useSafeAreaInsets()
  return (
    <View style={{ paddingTop: top }}>
      <View
        style={[
          a.size_5xl,
          a.rounded_full,
          a.border_2,
          t.atoms.border_success_500,
        ]}
      >
        <Text>CIRCLE</Text>
      </View>
      <Text style={[a.text_center]}>Hello, world</Text>
    </View>
  )
}
