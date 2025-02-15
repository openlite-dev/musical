import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

const SvgHighVolume = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#191D21"
      d="M15.714 2v20h-1.92l-4.937-4.234V6.234L13.793 2zm-8 5.294v9.412H2V7.294zm12.622.32A6.55 6.55 0 0 1 22 12a6.56 6.56 0 0 1-1.523 4.223l-.13.15-.842-.796A5.36 5.36 0 0 0 20.857 12a5.36 5.36 0 0 0-1.24-3.447l-.12-.14zm-2.155 1.934c.613.654.962 1.525.962 2.452 0 .88-.316 1.712-.873 2.352l-.107.118-.816-.823A2.38 2.38 0 0 0 18 12c0-.571-.198-1.109-.55-1.531l-.091-.103z"
    />
  </Svg>
)

export default SvgHighVolume
