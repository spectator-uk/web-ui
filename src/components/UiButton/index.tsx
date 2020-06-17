import React, { SyntheticEvent } from 'react'
import { Styled } from './styles'
import { UiIconProps } from '../UiIcon'
import { useUiButtonLogic } from './logic'
import { ThemeSizes, ThemeColors } from 'spectator-uk-theme'

export interface UiButtonProps {
  href?: string
  as?: 'button' | 'a' | 'span'
  size?: ThemeSizes
  width?: 'narrow' | 'normal' | 'wide' | 'full'
  color?: keyof Pick<ThemeColors, 'primary' | 'ghost' | 'ghostWhite'>
  textColor?: keyof ThemeColors
  shape?: 'pill' | 'circle' | 'square'
  icon?: UiIconProps['icon']
  iconPosition?: 'before' | 'center' | 'after'
  iconSize?: ThemeSizes
  iconColor?: keyof ThemeColors
  hovered?: boolean
  onClick?: (event: SyntheticEvent) => void | Promise<void> | Function
  className?: string
}

export type UiButtonIconProps = UiIconProps &
  Pick<UiButtonProps, 'iconPosition'>

export const UiButton: React.FC<UiButtonProps> = ({
  href,
  as = 'button',
  size = 'm',
  width = 'normal',
  color = 'primary',
  textColor,
  shape = 'pill',
  icon,
  iconPosition = 'before',
  iconSize = size,
  iconColor,
  hovered = false,
  onClick,
  className,
  children
}) => {
  const { textSizeValue, textColorValue } = useUiButtonLogic(
    size,
    color,
    textColor
  )

  return (
    <Styled.button
      as={as}
      href={href}
      size={size}
      width={width}
      color={color}
      shape={shape}
      hovered={hovered}
      onClick={onClick}
      className={className}
    >
      <Styled.buttonText
        forwardedAs='span'
        type='accent'
        weight='bold'
        size={textSizeValue}
        color={textColorValue}
      >
        {!icon && children}

        {icon && iconPosition === 'before' && (
          <>
            <Styled.icon
              icon={icon}
              iconPosition={iconPosition}
              size={iconSize}
              color={iconColor || textColorValue}
            />

            {children}
          </>
        )}

        {icon && iconPosition === 'center' && (
          <Styled.icon
            icon={icon}
            iconPosition={iconPosition}
            size={iconSize}
            color={iconColor || textColorValue}
          />
        )}

        {icon && iconPosition === 'after' && (
          <>
            {children}

            <Styled.icon
              icon={icon}
              iconPosition={iconPosition}
              size={iconSize}
              color={iconColor || textColorValue}
            />
          </>
        )}
      </Styled.buttonText>
    </Styled.button>
  )
}
