import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

const SvgPlaylist = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#191D21"
      fillRule="evenodd"
      d="m3.447 12.894 8-4a1.001 1.001 0 0 0 0-1.79l-8-4A1.002 1.002 0 0 0 2 4v8a1 1 0 0 0 1.447.895M15 8.999h6a1 1 0 1 0 0-2h-6a1 1 0 1 0 0 2m-5 2h11a1 1 0 0 1 0 2H10a1 1 0 1 1 0-2m11 4H3a1 1 0 1 0 0 2h18a1 1 0 0 0 0-2M3 19h18a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2"
      clipRule="evenodd"
    />
  </Svg>
)

export default SvgPlaylist
