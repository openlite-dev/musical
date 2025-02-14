import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function App() {
  const { top } = useSafeAreaInsets()
  return (
    <View style={{ paddingTop: top }}>
      <Text>Hello, world</Text>
    </View>
  )
}
