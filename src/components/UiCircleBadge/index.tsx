import React, { forwardRef } from 'react'
import { ThemeColors, ThemeSizes } from 'spectator-uk-theme'
import { StandardProps } from '../../types/standardProps'
import { Styled } from './styles'

export interface UiCircleBadgeProps extends StandardProps {
  size?: ThemeSizes
  color?: keyof ThemeColors
  pulse?: boolean
}

export const UiCircleBadge: React.FC<UiCircleBadgeProps> = forwardRef(
  ({ size = 's', color = 'primary', pulse = true, id, className }, ref) => {
    return (
      <Styled.circle
        ref={ref as any}
        size={size}
        color={color}
        pulse={pulse}
        id={id}
        className={className}
      />
    )
  }
)
