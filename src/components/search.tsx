import { atoms as a, useTheme } from '@musical/alf'
import { TextInput, View } from 'react-native'
import SvgSearchMagnifiyingGlass from '../icons/search-magnifiying-glass'
import { isIOS } from '../constants/os'

export default function Search() {
  const t = useTheme()
  return (
    <View style={[a.mt_2xl, a.px_lg]}>
      <View
        style={[
          a.flex_row,
          a.items_center,
          isIOS ? a.py_md : a.py_xs,
          a.px_md,
          a.rounded_md,
          a.gap_lg,
          t.atoms.bg_contrast_50,
        ]}
      >
        <SvgSearchMagnifiyingGlass />
        <TextInput placeholder="Search music..." style={[a.flex_1]} />
      </View>
    </View>
  )
}
