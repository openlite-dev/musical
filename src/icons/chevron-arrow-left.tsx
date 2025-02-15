import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

const SvgChevronArrowLeft = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path fill="#191D21" d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
  </Svg>
)

export default SvgChevronArrowLeft
