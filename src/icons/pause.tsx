import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

const SvgPause = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#191D21"
      fillRule="evenodd"
      d="M6 22c2.209 0 4-1.247 4-2.786V4.786C10 3.247 8.209 2 6 2S2 3.247 2 4.786v14.428C2 20.753 3.791 22 6 22m12 0c2.209 0 4-1.247 4-2.786V4.786C22 3.247 20.209 2 18 2s-4 1.247-4 2.786v14.428C14 20.753 15.791 22 18 22"
      clipRule="evenodd"
    />
  </Svg>
)

export default SvgPause
