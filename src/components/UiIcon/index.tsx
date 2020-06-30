import React, { forwardRef } from 'react'
import { ThemeColors, ThemeSizes } from 'spectator-uk-theme'
import { StandardProps } from '../../types/standardProps'
import { theme } from '../../global/theme'
import { icons } from './icons'
import { iconMetrics } from './metrics'

export interface UiIconProps extends StandardProps {
  icon: keyof typeof icons | undefined
  size?: ThemeSizes
  color?: 'currentColor' | keyof ThemeColors
}

export const UiIcon: React.FC<UiIconProps> = forwardRef(
  ({ icon, size = 'm', color = 'currentColor', id, className }, ref) => {
    const sizeValue = iconMetrics[size]?.sizeValue

    const colorValue =
      color === 'currentColor' ? 'currentColor' : theme.color[color]

    return (
      <svg
        ref={ref as any}
        width={sizeValue}
        height={sizeValue}
        viewBox={icon ? icons[icon].viewBox : undefined}
        id={id}
        className={className}
      >
        <path
          d={icon ? icons[icon]?.path : undefined}
          fill={colorValue}
          fillRule='nonzero'
        />
      </svg>
    )
  }
)
