import React from 'react'
import { Styled } from './styles'
import { ThemeSizes, ThemeColors } from 'spectator-uk-theme'

export interface UiCircleBadgeProps {
  size?: ThemeSizes
  color?: keyof ThemeColors
  pulse?: boolean
  className?: string
}

const UiCircleBadge: React.FC<UiCircleBadgeProps> = ({
  size = 's',
  color = 'primary',
  pulse = true,
  className
}) => {
  return (
    <Styled.circle
      size={size}
      color={color}
      pulse={pulse}
      className={className}
    />
  )
}

export default UiCircleBadge
