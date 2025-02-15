import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

const SvgWarningSignError = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path fill="#191D21" d="M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z" />
  </Svg>
)

export default SvgWarningSignError
