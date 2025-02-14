import { Platform } from 'react-native'
import { isAndroid, isIOS, isNative } from '@/src/constants/os'

export const platform = Platform.select

export function ios(value: any) {
  if (isIOS) {
    return value
  }
}

export function android(value: any) {
  if (isAndroid) {
    return value
  }
}

export function native(value: any) {
  if (isNative) {
    return value
  }
}
