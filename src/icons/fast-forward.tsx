import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

const SvgFastForward = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#191D21"
      d="M3.607 4.209 11 9.946V5.014a1.006 1.006 0 0 1 .557-.909.99.99 0 0 1 1.051.104l9 6.985A1.01 1.01 0 0 1 22 12a1.03 1.03 0 0 1-.392.805l-9 6.987a.994.994 0 0 1-1.457-.27 1 1 0 0 1-.15-.535v-4.934l-7.393 5.739a.993.993 0 0 1-1.457-.27A1 1 0 0 1 2 18.986V5.014c0-.19.053-.374.151-.534.099-.16.24-.29.407-.374a.99.99 0 0 1 1.05.103"
    />
  </Svg>
)

export default SvgFastForward
