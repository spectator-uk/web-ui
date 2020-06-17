import React, { forwardRef } from 'react'
import { Styled } from './styles'
import { DefaultTheme } from 'styled-components'
import {
  ThemeSizes,
  ThemeTextLineHeights,
  ThemeTextWeights,
  ThemeColors
} from 'spectator-uk-theme'
import { ThemeBreakpoints } from 'global/theme'
import { AsProp } from 'types/asProp'

export interface UiTextProps {
  type: keyof DefaultTheme['text']
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
  onClick?: () => void
  as?: AsProp
  className?: string
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
      onClick,
      as = 'p',
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
        className={className}
      >
        {children}
      </Styled.text>
    )
  }
)
