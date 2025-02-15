import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

const SvgDownload = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#000"
      d="M20.438 14.227v5.43c0 .43-.351.78-.782.78H4.344a.78.78 0 0 1-.782-.78v-5.43H2v5.43A2.346 2.346 0 0 0 4.344 22h15.312A2.346 2.346 0 0 0 22 19.656v-5.43z"
    />
    <Path
      fill="#000"
      d="m15.75 11.208-2.969 2.968V2H11.22v12.176l-2.97-2.968-1.104 1.104L12 17.168l4.855-4.855z"
    />
  </Svg>
)

export default SvgDownload
