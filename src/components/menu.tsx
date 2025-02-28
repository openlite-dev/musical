import { Image, Pressable, View } from 'react-native'
import { atoms as a } from '@musical/alf'
import UParagraph from '@/src/components/paragraph'
import SvgNotification from '@/src/icons/notification'

export default function Menu() {
  return (
    <View
      style={[a.flex_row, a.justify_between, a.items_center, a.px_xl, a.pb_0]}
    >
      <UParagraph size="xl" weight="bold">
        Hola, Sebastián
      </UParagraph>

      <View style={[a.flex_row, a.items_center, a.gap_lg]}>
        <Pressable>
          <SvgNotification color="#000" />
        </Pressable>
        <Image
          source={require('../../assets/usuario.png')}
          style={[a.size_3xl, a.rounded_full]}
        />
      </View>
    </View>
  )
}
