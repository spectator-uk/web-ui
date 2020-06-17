import { UiTextProps } from '../UiText'
import { UiButtonColors, UiButtonProps } from '.'

export const useUiButtonLogic = (
  size: UiButtonProps['size'],
  textColor: UiButtonProps['textColor'],
  color: UiButtonColors
) => {
  const textSizeValue: UiTextProps['size'] =
    size === 'xs' || size === 's'
      ? 's'
      : size === 'm' || size === 'l'
      ? 'm'
      : size === 'xl'
      ? 'l'
      : 'm'

  const textColorValue: UiTextProps['color'] =
    (color === 'ghost' && 'black') || 'white'

  return {
    textSizeValue,
    textColorValue
  }
}
