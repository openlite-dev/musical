import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

const SvgCameraPhoto = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#191D21"
      fillRule="evenodd"
      d="M7.17 4 9 2h6l1.83 2H20c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM7 12c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5m8.2 0a3.2 3.2 0 1 1-6.4 0 3.2 3.2 0 0 1 6.4 0"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgCameraPhoto
