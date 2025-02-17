import UApp from '@/src/components/app'
import Menu from '@/src/components/menu'
import Playlists from '@/src/components/playlists'

export default function App() {
  return (
    <UApp>
      <Menu />
      <Playlists />
    </UApp>
  )
}
