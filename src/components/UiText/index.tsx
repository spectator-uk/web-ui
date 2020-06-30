import React, { forwardRef } from 'react'
import {
  ThemeColors,
  ThemeSizes,
  ThemeTextLineHeights,
  ThemeTextWeights
} from 'spectator-uk-theme'
import { StandardProps } from '../../types/standardProps'
import { theme, ThemeBreakpoints } from '../../global/theme'
import { AsProp } from '../../types/asProp'
import { Styled } from './styles'

export interface UiTextProps extends StandardProps {
  type: keyof typeof theme['text']
  size:
    | ThemeSizes
    | { [key in Exclude<ThemeBreakpoints, 'desktop'>]?: ThemeSizes }
    | undefined
  lineHeight?: ThemeTextLineHeights
  weight?: ThemeTextWeights | { [key in ThemeBreakpoints]?: ThemeTextWeights }
  textStyle?: 'normal' | 'italic'
  color?: keyof ThemeColors
  align?: 'left' | 'center'
  minLines?: number | { [key in ThemeBreakpoints]?: number }
  maxLines?: number | { [key in ThemeBreakpoints]?: number }
  href?: string
  as?: AsProp
}

export type UiTextStyledProps = UiTextProps & {
  textType: UiTextProps['type']
  webfontLoaded?: boolean
}

export const UiText: React.FC<UiTextProps> = forwardRef(
  (
    {
      type,
      size,
      lineHeight = 'normal',
      weight = 'regular',
      textStyle = 'normal',
      color,
      align,
      minLines,
      maxLines,
      href,
      as = 'p',
      onClick,
      id,
      className,
      children
    },
    ref
  ) => {
    return (
      <Styled.text
        ref={ref}
        as={as}
        textType={type}
        size={size}
        lineHeight={lineHeight}
        weight={weight}
        textStyle={textStyle}
        color={color}
        align={align}
        minLines={minLines}
        maxLines={maxLines}
        href={href}
        onClick={onClick}
        id={id}
        className={className}
      >
        {children}
      </Styled.text>
    )
  }
)
