import React, { forwardRef } from 'react'
import { icons } from './icons'
import { ThemeSizes, ThemeColors } from 'spectator-uk-theme'
import { theme } from '../../global/theme'
import { iconMetrics } from './metrics'

export interface UiIconProps {
  icon: keyof typeof icons | undefined
  size?: ThemeSizes
  color?: 'currentColor' | keyof ThemeColors
  className?: string
}

export const UiIcon: React.FC<UiIconProps> = forwardRef(
  ({ icon, size = 'm', color = 'currentColor', className }, ref) => {
    const sizeValue = iconMetrics[size]?.sizeValue

    const colorValue =
      color === 'currentColor' ? 'currentColor' : theme.color[color]

    return (
      <svg
        ref={ref as any}
        width={sizeValue}
        height={sizeValue}
        viewBox={icon ? icons[icon].viewBox : undefined}
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
