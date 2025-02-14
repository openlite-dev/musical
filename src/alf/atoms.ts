import type { StyleProp, ViewStyle } from 'react-native'
import { Platform, StyleSheet } from 'react-native'

import * as tokens from '@/src/alf/tokens'
import { native } from '@/src/alf/util/platform'

export const atoms = {
  debug: {
    borderColor: 'red',
    borderWidth: 1,
  },

  /*==============================================
  =                 POSITIONING                 =
  = ------------------------------------------- =
  = Atomic styles for element positioning,      =
  = z-index management and layout control.      =
  = Includes absolute, relative, fixed, sticky  =
  = and other position-related properties.      =
  ===============================================*/
  fixed: {
    position: Platform.select({
      web: 'fixed',
      native: 'absolute',
    }) as 'absolute',
  },
  absolute: {
    position: 'absolute',
  },
  relative: {
    position: 'relative',
  },
  inset_0: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  z_10: {
    zIndex: 10,
  },
  z_20: {
    zIndex: 20,
  },
  z_30: {
    zIndex: 30,
  },
  z_40: {
    zIndex: 40,
  },
  z_50: {
    zIndex: 50,
  },
  overflow_hidden: {
    overflow: 'hidden',
  },

  /*==============================================
  =              WIDTH x HEIGHT                 =
  = ------------------------------------------- =
  = Atomic styles for dimensional control.      =
  = Includes width, height, max/min dimensions  =
  = and aspect ratio properties for precise     =
  = element sizing and proportions.             =
  ===============================================*/
  w_full: {
    width: '100%',
  },
  h_full: {
    height: '100%',
  },
  util_screen_outer: {
    height: '100%',
  } as StyleProp<ViewStyle>,

  /*==============================================
  =                BACKGROUND                   =
  = ------------------------------------------  =
  = Atomic styles for background properties.    =
  = Includes colors, images, gradients,         =
  = opacity and other visual fill styles        =
  = for creating rich surface appearances.      =
  ===============================================*/
  bg_transparent: {
    backgroundColor: 'transparent',
  },

  /*==============================================
  =              BORDER RADIUS                  =
  = ------------------------------------------- =
  = Atomic styles for dimensional control.      =
  = Includes width, height, max/min dimensions  =
  = and aspect ratio properties for precise     =
  = element sizing and proportions.             =
  ===============================================*/
  rounded_2xs: {
    borderRadius: tokens.borderRadius._2xs,
  },
  rounded_xs: {
    borderRadius: tokens.borderRadius.xs,
  },
  rounded_sm: {
    borderRadius: tokens.borderRadius.sm,
  },
  rounded_md: {
    borderRadius: tokens.borderRadius.md,
  },
  rounded_full: {
    borderRadius: tokens.borderRadius.full,
  },

  /*==============================================
  =                    FLEX                     =
  = ------------------------------------------- =
  = Atomic styles for dimensional control.      =
  = Includes width, height, max/min dimensions  =
  = and aspect ratio properties for precise     =
  = element sizing and proportions.             =
  ===============================================*/
  gap_0: {
    gap: 0,
  },
  gap_2xs: {
    gap: tokens.space._2xs,
  },
  gap_xs: {
    gap: tokens.space.xs,
  },
  gap_sm: {
    gap: tokens.space.sm,
  },
  gap_md: {
    gap: tokens.space.md,
  },
  gap_lg: {
    gap: tokens.space.lg,
  },
  gap_xl: {
    gap: tokens.space.xl,
  },
  gap_2xl: {
    gap: tokens.space._2xl,
  },
  gap_3xl: {
    gap: tokens.space._3xl,
  },
  gap_4xl: {
    gap: tokens.space._4xl,
  },
  gap_5xl: {
    gap: tokens.space._5xl,
  },
  flex: {
    display: 'flex',
  },
  flex_col: {
    flexDirection: 'column',
  },
  flex_row: {
    flexDirection: 'row',
  },
  flex_col_reverse: {
    flexDirection: 'column-reverse',
  },
  flex_row_reverse: {
    flexDirection: 'row-reverse',
  },
  flex_wrap: {
    flexWrap: 'wrap',
  },
  flex_nowrap: {
    flexWrap: 'nowrap',
  },
  flex_0: {
    flex: native(0) as number,
  },
  flex_1: {
    flex: 1,
  },
  flex_grow: {
    flexGrow: 1,
  },
  flex_shrink: {
    flexShrink: 1,
  },
  flex_shrink_0: {
    flexShrink: 0,
  },
  justify_start: {
    justifyContent: 'flex-start',
  },
  justify_center: {
    justifyContent: 'center',
  },
  justify_between: {
    justifyContent: 'space-between',
  },
  justify_end: {
    justifyContent: 'flex-end',
  },
  align_center: {
    alignItems: 'center',
  },
  align_start: {
    alignItems: 'flex-start',
  },
  align_end: {
    alignItems: 'flex-end',
  },
  align_baseline: {
    alignItems: 'baseline',
  },
  align_stretch: {
    alignItems: 'stretch',
  },
  self_auto: {
    alignSelf: 'auto',
  },
  self_start: {
    alignSelf: 'flex-start',
  },
  self_end: {
    alignSelf: 'flex-end',
  },
  self_center: {
    alignSelf: 'center',
  },
  self_stretch: {
    alignSelf: 'stretch',
  },
  self_baseline: {
    alignSelf: 'baseline',
  },

  /*==============================================
  =                    TEXT                     =
  = ------------------------------------------- =
  = Atomic styles for dimensional control.      =
  = Includes width, height, max/min dimensions  =
  = and aspect ratio properties for precise     =
  = element sizing and proportions.             =
  ===============================================*/
  text_left: {
    textAlign: 'left',
  },
  text_center: {
    textAlign: 'center',
  },
  text_right: {
    textAlign: 'right',
  },
  text_2xs: {
    fontSize: tokens.fontSize._2xs,
    letterSpacing: tokens.TRACKING,
  },
  text_xs: {
    fontSize: tokens.fontSize.xs,
    letterSpacing: tokens.TRACKING,
  },
  text_sm: {
    fontSize: tokens.fontSize.sm,
    letterSpacing: tokens.TRACKING,
  },
  text_md: {
    fontSize: tokens.fontSize.md,
    letterSpacing: tokens.TRACKING,
  },
  text_lg: {
    fontSize: tokens.fontSize.lg,
    letterSpacing: tokens.TRACKING,
  },
  text_xl: {
    fontSize: tokens.fontSize.xl,
    letterSpacing: tokens.TRACKING,
  },
  text_2xl: {
    fontSize: tokens.fontSize._2xl,
    letterSpacing: tokens.TRACKING,
  },
  text_3xl: {
    fontSize: tokens.fontSize._3xl,
    letterSpacing: tokens.TRACKING,
  },
  text_4xl: {
    fontSize: tokens.fontSize._4xl,
    letterSpacing: tokens.TRACKING,
  },
  text_5xl: {
    fontSize: tokens.fontSize._5xl,
    letterSpacing: tokens.TRACKING,
  },
  leading_tight: {
    lineHeight: 1.15,
  },
  leading_snug: {
    lineHeight: 1.3,
  },
  leading_normal: {
    lineHeight: 1.5,
  },
  tracking_normal: {
    letterSpacing: tokens.TRACKING,
  },
  font_normal: {
    fontWeight: tokens.fontWeight.normal,
  },
  font_bold: {
    fontWeight: tokens.fontWeight.bold,
  },
  font_extrabold: {
    fontWeight: tokens.fontWeight.extrabold,
  },
  italic: {
    fontStyle: 'italic',
  },

  /*==============================================
  =                    BORDER                   =
  = ------------------------------------------- =
  = Atomic styles for dimensional control.      =
  = Includes width, height, max/min dimensions  =
  = and aspect ratio properties for precise     =
  = element sizing and proportions.             =
  ===============================================*/
  border_0: {
    borderWidth: 0,
  },
  border_t_0: {
    borderTopWidth: 0,
  },
  border_b_0: {
    borderBottomWidth: 0,
  },
  border_l_0: {
    borderLeftWidth: 0,
  },
  border_r_0: {
    borderRightWidth: 0,
  },
  border: {
    borderWidth: StyleSheet.hairlineWidth,
  },
  border_t: {
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  border_b: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  border_l: {
    borderLeftWidth: StyleSheet.hairlineWidth,
  },
  border_r: {
    borderRightWidth: StyleSheet.hairlineWidth,
  },
}
