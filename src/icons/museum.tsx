import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

const SvgMuseum = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#191D21"
      fillRule="evenodd"
      d="M12 2 2 5.75v2.5h20v-2.5zm10 17.5V22H2v-2.5zm0-10v1.25h-1.25V17H22v1.25H2V17h1.25v-6.25H2V9.5zM5.75 17H7v-6.25H5.75zm3.75 0h1.25v-6.25H9.5zm3.75 0h1.25v-6.25h-1.25zM17 17h1.25v-6.25H17z"
      clipRule="evenodd"
    />
  </Svg>
)

export default SvgMuseum
