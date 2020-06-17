import styled, { css } from 'styled-components'
import { lighten, rgba } from 'polished'
import { UiIcon } from '../UiIcon'
import { UiButtonProps, UiButtonIconProps } from '.'
import { buttonMetrics } from './metrics'
import { UiText, UiTextProps } from '../UiText'

const hoverState = css<UiButtonProps>`
  cursor: pointer;

  background: ${({ color, theme }) =>
    color &&
    ((color === 'ghost' && theme.color.coolGrey) ||
      (color !== 'ghostWhite' && lighten(0.03, theme.color[color])))};

  box-shadow: ${({ color, theme }) =>
    color &&
    color !== 'ghost' &&
    color !== 'ghostWhite' &&
    `0 1rem 3rem 0 ${rgba(theme.color[color], 0.25)}`};
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

  background: ${({ color, theme }) =>
    color && ((color === 'ghost' && 'none') || theme.color[color])};

  border-radius: ${({ shape }) =>
    (shape === 'pill' && '100rem') || (shape === 'circle' && '50%')};

  box-shadow: ${({ color, theme }) =>
    color &&
    color !== 'ghost' &&
    `0 1rem 3rem 0 ${rgba(theme.color[color], 0.15)}`};

  /* Hover state */
  ${({ hovered }) => hovered && hoverState}

  &:hover {
    ${hoverState}
  }

  /* Focus state */
  &:focus {
    background: ${({ color, theme }) =>
      color &&
      ((color === 'ghost' && theme.color.coolGrey) ||
        (color !== 'ghostWhite' && lighten(0.03, theme.color[color])))};

    box-shadow: 0 0 0 1px ${({ theme }) => theme.color.white},
      ${({ theme }) => `0 0 0 4px ${rgba(theme.color.primary, 0.6)}`},
      ${({ color, theme }) =>
        color &&
        color !== 'ghost' &&
        color !== 'ghostWhite' &&
        `0 1rem 6rem 0 ${rgba(theme.color[color], 0.2)}`};
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
