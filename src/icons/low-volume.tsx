import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

const SvgLowVolume = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#191D21"
      d="M18 1v22h-2.241L10 18.343V5.658L15.759 1zM8.667 6.824v10.353H2V6.824zm12.21 2.48A3.8 3.8 0 0 1 22 12c0 .969-.368 1.883-1.018 2.588l-.125.13-.952-.906a2.532 2.532 0 0 0 .12-3.496l-.107-.114z"
    />
  </Svg>
)

export default SvgLowVolume
