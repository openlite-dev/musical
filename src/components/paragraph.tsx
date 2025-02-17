import { Text, type TextProps } from 'react-native'
import { atoms as a, type Theme, useTheme } from '@musical/alf'

const paragraphVariants = (t: Theme) => ({
  variant: {
    default: [t.atoms.text_black],
    error: [t.atoms.text_error_500],
    success: [t.atoms.text_success_500],
  },
  size: {
    default: [a.text_md],
    sm: [a.text_sm],
    lg: [a.text_lg],
    xl: [a.text_2xl],
  },
  weight: {
    default: [a.font_normal],
    bold: [a.font_bold],
  },
})

type ParagraphVariants = ReturnType<typeof paragraphVariants>

interface TextBaseProps extends TextProps {
  variant?: keyof ParagraphVariants['variant']
  size?: keyof ParagraphVariants['size']
  weight?: keyof ParagraphVariants['weight']
}

export default function UParagraph({
  style,
  variant = 'default',
  size = 'default',
  weight = 'default',
  ...rest
}: TextBaseProps) {
  const t = useTheme()
  const variants = paragraphVariants(t)

  return (
    <Text
      style={[
        variants.variant[variant],
        variants.size[size],
        variants.weight[weight],
        style,
      ]}
      {...rest}
    />
  )
}
