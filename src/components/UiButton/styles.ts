import { darken, lighten } from 'polished'
import styled, { css } from 'styled-components'
import { UiButtonIconProps, UiButtonProps } from '.'
import { UiIcon } from '../UiIcon'
import { UiText, UiTextProps } from '../UiText'
import { buttonMetrics } from './metrics'

const hoverState = css<UiButtonProps>`
  cursor: pointer;

  background: ${({ customBg, color, theme }) =>
    (customBg && darken(0.03, customBg)) ||
    (color && color === 'ghost' && theme.color.coolGrey) ||
    (color && color !== 'ghostWhite' && lighten(0.03, theme.color[color]))};
`

const button = styled.button<UiButtonProps>`
  /* Default state */
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none;
  border: none;
  transition: background-color 0.1s ease-out, box-shadow 0.2s ease-out;

  width: ${({ shape, size, width }) =>
    ((shape === 'circle' || shape === 'square') &&
      size &&
      buttonMetrics[size].circleSize) ||
    (shape !== 'circle' && width === 'full' && '100%')};

  height: ${({ shape, size }) =>
    (shape === 'circle' || shape === 'square') &&
    size &&
    buttonMetrics[size].circleSize};

  min-height: ${({ shape, size }) =>
    shape !== 'circle' &&
    shape !== 'square' &&
    size &&
    buttonMetrics[size].height};

  padding: ${({ shape, width, size }) =>
    shape !== 'circle' &&
    shape !== 'square' &&
    width &&
    width !== 'full' &&
    size &&
    `0 ${buttonMetrics[size].paddingX[width]}`};

  background: ${({ customBg, color, theme }) =>
    customBg ||
    (color && ((color === 'ghost' && 'none') || theme.color[color]))};

  border-radius: ${({ shape }) =>
    (shape === 'pill' && '100rem') || (shape === 'circle' && '50%')};

  /* Hover state */
  ${({ hovered }) => hovered && hoverState}

  &:hover {
    ${hoverState}
  }

  /* Focus state */
  &:focus {
    background: ${({ customBg, color, theme }) =>
      (customBg && darken(0.03, customBg)) ||
      (color && color === 'ghost' && theme.color.coolGrey) ||
      (color && color !== 'ghostWhite' && lighten(0.03, theme.color[color]))};
  }
`

const icon = styled(UiIcon)<UiButtonIconProps>`
  margin: ${({ iconPosition }) =>
    (iconPosition === 'before' && '0 1rem 0') ||
    (iconPosition === 'after' && '0 0 0 1rem')};
`

const buttonText = styled(UiText)<UiTextProps>`
  display: flex;
  align-items: center;
`

export const Styled = {
  button,
  buttonText,
  icon
}
