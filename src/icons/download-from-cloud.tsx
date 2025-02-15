import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

const SvgDownloadFromCloud = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#191D21"
      d="M12 2a7.03 7.03 0 0 0-5.742 3.004A6.51 6.51 0 0 0 0 11.5C0 15.084 2.916 18 6.5 18H9v-2H6.5A4.505 4.505 0 0 1 2 11.5C2 9.019 4.019 7 6.5 7l.86.047.308-.533A5.01 5.01 0 0 1 12 4a4.97 4.97 0 0 1 4.932 4.215l.15.96 1.1-.144c.105-.014.209-.031.318-.031 1.93 0 3.5 1.57 3.5 3.5S20.43 16 18.5 16H15v2h3.5c3.032 0 5.5-2.467 5.5-5.5a5.507 5.507 0 0 0-5.295-5.496A6.96 6.96 0 0 0 12 2m-1 10v8H8l4 4 4-4h-3v-8z"
    />
  </Svg>
)

export default SvgDownloadFromCloud
