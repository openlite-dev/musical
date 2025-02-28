import UApp from '@/src/components/app'
import Menu from '@/src/components/menu'
import SvgBaselineHome from '@/src/icons/baseline-home'
import SvgRoundLibraryMusic from '@/src/icons/round-library-music'
import SvgRoundMusicNote from '@/src/icons/round-music-note'
import { Tabs } from 'expo-router'

export default function TabsLayout() {
  return (
    <UApp>
      <Menu />
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Principal',
            tabBarIcon: () => <SvgBaselineHome color="#000" />,
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: 'Explorar',
            tabBarIcon: () => <SvgRoundMusicNote color="#000" />,
          }}
        />
        <Tabs.Screen
          name="library"
          options={{
            title: 'Biblioteca',
            tabBarIcon: () => <SvgRoundLibraryMusic color="#000" />,
          }}
        />
      </Tabs>
    </UApp>
  )
}
