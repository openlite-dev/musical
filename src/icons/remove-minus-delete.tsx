import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

const SvgRemoveMinusDelete = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path fill="#191D21" d="M19 13H5v-2h14z" />
  </Svg>
)
export default SvgRemoveMinusDelete
