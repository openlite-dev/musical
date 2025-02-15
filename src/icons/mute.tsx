import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

const SvgMute = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#191D21"
      d="M14.556 2v20h-1.9l-4.878-4.234V6.234L12.657 2zM6.648 7.294v9.412H1V7.294zm15.553 1.794L23 9.92 21.003 12 23 14.08l-.799.832-1.997-2.08-1.997 2.08-.799-.832L19.407 12l-1.997-2.08.798-.832 1.997 2.08z"
    />
  </Svg>
)

export default SvgMute
