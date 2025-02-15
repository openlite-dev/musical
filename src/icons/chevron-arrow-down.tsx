import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

const SvgChevronArrowDown = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path fill="#191D21" d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" />
  </Svg>
)

export default SvgChevronArrowDown
