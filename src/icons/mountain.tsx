import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

const SvgMountain = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#191D21"
      fillRule="evenodd"
      d="M9.74 2c.168.007.32.148.394.369l6.364 18.666a.94.94 0 0 1-.02.649c-.083.197-.229.316-.387.316H2.455c-.162 0-.312-.126-.393-.332a.94.94 0 0 1-.002-.665L9.333 2.336c.089-.204.242-.33.407-.336m6.75 4.348 5.455 14.666a.94.94 0 0 1-.009.66c-.081.202-.23.326-.39.326h-3.703L13.8 10.138l1.926-3.865c.091-.184.241-.287.396-.272s.295.146.369.347"
      clipRule="evenodd"
    />
  </Svg>
)

export default SvgMountain
