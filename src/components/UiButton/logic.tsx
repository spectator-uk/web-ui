import { UiTextProps } from '../UiText'
import { UiButtonProps } from '.'

export const useUiButtonLogic = (
  size: UiButtonProps['size'],
  color: UiButtonProps['color'],
  textColor: UiButtonProps['textColor']
) => {
  const textSizeValue: UiTextProps['size'] =
    size === 'xxs'
      ? 'xs'
      : size === 'xs' || size === 's'
      ? 's'
      : size === 'm' || size === 'l'
      ? 'm'
      : size === 'xl' || size === 'xxl'
      ? 'l'
      : 'm' // default

  const textColorValue: UiTextProps['color'] =
    textColor || (color === 'ghost' && 'black') || 'white'

  return {
    textSizeValue,
    textColorValue
  }
}
