import { Text, type TextProps } from 'react-native'
import { atoms as a } from '@musical/alf'

export default function UParagraph({ style, ...rest }: TextProps) {
  return <Text style={[a.text_md, style]} {...rest} />
}
