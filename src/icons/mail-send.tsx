import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

const SvgMailSend = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path fill="#000" d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
  </Svg>
)

export default SvgMailSend
