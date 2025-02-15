import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

const SvgChevronArrowRight = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path fill="#191D21" d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z" />
  </Svg>
)

export default SvgChevronArrowRight
