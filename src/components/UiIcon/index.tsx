import React, { forwardRef } from 'react'
import { ThemeColors, ThemeSizes } from 'spectator-uk-theme'
import { theme } from '../../global/theme'
import { StandardProps } from '../../types/standardProps'
import { iconMetrics } from './metrics'

export interface UiIconProps extends StandardProps {
  icon: {
    viewBox: string
    path: string
  }
  size?: ThemeSizes
  color?: 'currentColor' | keyof ThemeColors
}

export const UiIcon: React.FC<UiIconProps> = forwardRef(
  ({ icon, size = 'm', color = 'currentColor', id, className }, ref) => {
    const sizeValue = iconMetrics[size]?.sizeValue

    const colorValue =
      color === 'currentColor' ? 'currentColor' : theme.color[color]

    if (icon.viewBox && icon.path) {
      return (
        <svg
          ref={ref as any}
          width={sizeValue}
          height={sizeValue}
          viewBox={icon.viewBox}
          id={id}
          className={className}
        >
          <path d={icon.path} fill={colorValue} fillRule='nonzero' />
        </svg>
      )
    }

    return null
  }
)
