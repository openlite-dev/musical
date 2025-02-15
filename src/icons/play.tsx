import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

const SvgPlay = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#191D21"
      d="M21.449 11.106 3.447 2.105A1 1 0 0 0 2 3v18a1.002 1.002 0 0 0 1.447.895l18.002-9a1.001 1.001 0 0 0 0-1.79"
    />
  </Svg>
)

export default SvgPlay
