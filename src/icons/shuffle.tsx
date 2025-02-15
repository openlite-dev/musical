import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

const SvgShuffle = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#191D21"
      d="m21.449 16.562-6-3.334a.92.92 0 0 0-.974.05 1.1 1.1 0 0 0-.347.403 1.2 1.2 0 0 0-.127.541v2.065c-.858-.242-1.619-.795-2.162-1.572A4.75 4.75 0 0 1 11.001 12c0-.983.295-1.939.838-2.715.543-.777 1.304-1.33 2.162-1.572v2.065c0 .189.044.375.127.54s.203.304.348.404.31.156.48.165.34-.031.492-.115l6-3.334a1.05 1.05 0 0 0 .403-.41c.097-.176.149-.378.149-.584s-.052-.408-.149-.584a1.05 1.05 0 0 0-.402-.41l-6-3.334a.92.92 0 0 0-.973.05c-.145.1-.265.239-.348.404a1.2 1.2 0 0 0-.127.54v2.323a5.7 5.7 0 0 0-2.27.984 6.4 6.4 0 0 0-1.73 1.905 6.3 6.3 0 0 0-2.162-2.194A5.53 5.53 0 0 0 5 5.333H3a.95.95 0 0 0-.707.325A1.18 1.18 0 0 0 2 6.444c0 .295.105.577.293.786A.95.95 0 0 0 3 7.555h2c1.061 0 2.079.469 2.829 1.302S9 10.821 9 12s-.421 2.31-1.171 3.143S6.06 16.445 5 16.445H3a.95.95 0 0 0-.707.325 1.18 1.18 0 0 0-.293.786c0 .295.105.577.293.786a.95.95 0 0 0 .707.325h2c.991 0 1.966-.274 2.839-.795A6.3 6.3 0 0 0 10 15.678a6.4 6.4 0 0 0 1.73 1.905c.688.497 1.46.832 2.27.984v2.323c0 .189.044.375.127.54s.203.304.348.404.31.156.48.165.34-.031.492-.115l6-3.334a1.05 1.05 0 0 0 .403-.41c.097-.176.149-.378.149-.584s-.052-.408-.149-.584a1.05 1.05 0 0 0-.402-.41"
    />
  </Svg>
)

export default SvgShuffle
