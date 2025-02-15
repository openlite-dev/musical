import UApp from '@/src/components/app'
import { atoms as a, useTheme } from '@musical/alf'
import { Text } from 'react-native'

export default function Library() {
  const t = useTheme()

  return (
    <UApp>
      <Text
        style={[
          a.text_center,
          t.atoms.text_contrast_medium,
          t.atoms.text_primary_500,
        ]}
      >
        Page Library
      </Text>
    </UApp>
  )
}
