import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

const SvgAddMorePlus = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path fill="#000" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
  </Svg>
)

export default SvgAddMorePlus
