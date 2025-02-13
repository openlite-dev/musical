import { Tabs } from 'expo-router'
import { Platform } from 'react-native'

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: Platform.select({
        ios: {
          position: 'absolute',
        },
        default: {},
      }),
    }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
    </Tabs>
  )
}
