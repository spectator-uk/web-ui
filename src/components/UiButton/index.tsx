import React, { forwardRef } from 'react'
import { ThemeColors, ThemeSizes } from 'spectator-uk-theme'
import { StandardProps } from '../../types/standardProps'
import { UiIconProps } from '../UiIcon'
import { useUiButtonLogic } from './logic'
import { Styled } from './styles'

export interface UiButtonProps extends StandardProps {
  href?: string
  as?: 'button' | 'a' | 'span'
  size?: ThemeSizes
  width?: 'narrow' | 'normal' | 'wide' | 'full'
  color?: keyof Pick<ThemeColors, 'primary' | 'ghost' | 'ghostWhite'>
  customBg?: string
  textColor?: keyof ThemeColors
  shape?: 'pill' | 'circle' | 'square'
  icon?: UiIconProps['icon']
  iconPosition?: 'before' | 'center' | 'after'
  iconSize?: ThemeSizes
  iconColor?: keyof ThemeColors
  hovered?: boolean
}

export type UiButtonIconProps = UiIconProps &
  Pick<UiButtonProps, 'iconPosition'>

export const UiButton: React.FC<UiButtonProps> = forwardRef(
  (
    {
      href,
      as = 'button',
      size = 'm',
      width = 'normal',
      color = 'primary',
      customBg,
      textColor,
      shape = 'pill',
      icon,
      iconPosition = 'before',
      iconSize = size,
      iconColor,
      hovered = false,
      onClick,
      id,
      className,
      children
    },
    ref
  ) => {
    const { textSizeValue, textColorValue } = useUiButtonLogic(
      size,
      color,
      textColor
    )

    return (
      <Styled.button
        ref={ref as any}
        as={as}
        href={href}
        size={size}
        width={width}
        color={color}
        customBg={customBg}
        shape={shape}
        hovered={hovered}
        onClick={onClick}
        id={id}
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
)
