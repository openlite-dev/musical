import SvgAccountUser from '@/src/icons/account-user'
import SvgMailSend from '@/src/icons/mail-send'
import SvgMuseum from '@/src/icons/museum'
import { Tabs } from 'expo-router'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: 'Principal', tabBarIcon: () => <SvgAccountUser /> }}
      />
      <Tabs.Screen
        name="explore"
        options={{ title: 'Explorar', tabBarIcon: () => <SvgMailSend /> }}
      />
      <Tabs.Screen
        name="library"
        options={{ title: 'Biblioteca', tabBarIcon: () => <SvgMuseum /> }}
      />
    </Tabs>
  )
}
