import { Pressable, View } from 'react-native'
import { atoms as a } from '@musical/alf'
import UParagraph from '@/src/components/paragraph'
import SvgMenuBurgerSettings from '@/src/icons/menu-burger-settings'
import Search from '@/src/components/search'

export default function Menu() {
  return (
    <>
      <View
        style={[
          a.flex_row,
          a.justify_between,
          a.items_center,
          a.px_xl,
          a.pb_0,
          a.pt_xl,
        ]}
      >
        <UParagraph size="xl" weight="bold">
          Hola, Maria
        </UParagraph>

        <Pressable>
          <SvgMenuBurgerSettings />
        </Pressable>
      </View>
      <Search />
    </>
  )
}
