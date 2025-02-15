import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

const SvgChevronArrowUp = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path fill="#191D21" d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
  </Svg>
)

export default SvgChevronArrowUp
