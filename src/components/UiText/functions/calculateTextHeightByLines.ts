import { UiTextProps } from '..'
import { ThemeBreakpoints, theme } from '../../../../global/styles/theme'
import { rem, stripUnit } from 'polished'

export const calculateTextHeightByLines = (
  lines?: UiTextProps['minLines'] | UiTextProps['maxLines'],
  type?: UiTextProps['type'],
  size?: UiTextProps['size'],
  lineHeight?: UiTextProps['lineHeight'],
  breakpoint?: ThemeBreakpoints
) => {
  if (lines && size && lineHeight && type && breakpoint) {
    const numberOfLines = typeof lines === 'number' ? lines : lines[breakpoint]

    const textBreakpoint = breakpoint === 'desktop' ? 'laptop' : breakpoint
    const textSize = typeof size === 'string' ? size : size[textBreakpoint]

    const lineHeightInRem = textSize
      ? theme.text?.[type]?.metrics?.[textBreakpoint]?.[textSize]?.lineHeight[
          lineHeight
        ]
      : undefined

    if (lineHeightInRem) {
      const height =
        numberOfLines &&
        rem(
          numberOfLines *
            (stripUnit(lineHeightInRem) * stripUnit(theme.baseUnit)),
          theme.baseUnit
        )

      return height
    }
  }
}
