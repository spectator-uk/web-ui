import styled, { css } from 'styled-components'
import { UiTextStyledProps } from '.'
import { rgba } from 'polished'
import { calculateTextHeightByLines } from './functions/calculateTextHeightByLines'
import { determineBreakpointValue } from '../../../utilities/functions/determineBreakpointValue'
import { ThemeTextDefinition } from 'spectator-uk-theme'

const linkStyles = css<UiTextStyledProps>`
  color: ${({ theme, color }) => !color && theme.color.primary};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => rgba(theme.color.primary, 0.5)};

  &:focus,
  &:active,
  &:visited {
    color: ${({ theme, color }) => color || theme.color.primary};
  }

  &:hover {
    text-decoration-color: ${({ theme }) => theme.color.primary};
  }
`

const text = styled.p<UiTextStyledProps>`
  font-family: ${({ textType, theme }) =>
    textType && theme.text[textType].fontFamily};

  font-weight: ${({ theme, textType, weight: fontWeight }) => {
    const weight = determineBreakpointValue<
      keyof ThemeTextDefinition['weight']
    >(fontWeight, 'mobile')

    return weight && textType && theme.text[textType].weight[weight]
  }};

  font-style: ${({ textStyle }) => textStyle === 'italic' && textStyle};

  text-align: ${({ align }) => align};

  text-transform: ${({ textType }) => textType === 'accent' && 'uppercase'};

  &,
  &:visited {
    color: ${({ theme, color }) =>
      color && color !== 'inherit' && theme.color[color]};
  }

  /* Link styles */
  ${({ as }) => as === 'a' && linkStyles}

  /* Metrics */
  font-size: ${({ theme, textType, size }) => {
    const textSize = typeof size === 'string' ? size : size?.mobile

    if (textSize) {
      return theme.text[textType].metrics.mobile?.[textSize]?.size
    }
  }};

  line-height: ${({ theme, textType, size, lineHeight }) => {
    const textSize = typeof size === 'string' ? size : size?.mobile

    if (textSize && lineHeight) {
      return theme.text[textType].metrics.mobile?.[textSize]?.lineHeight[
        lineHeight
      ]
    }
  }};


  letter-spacing: ${({ theme, textType, size }) => {
    const textSize = typeof size === 'string' ? size : size?.mobile

    if (textSize) {
      return theme.text[textType].metrics.mobile?.[textSize]?.letterSpacing
    }
  }};
  
  /* Min + max lines */
  min-height: ${({ minLines, textType, size, lineHeight }) =>
    calculateTextHeightByLines(minLines, textType, size, lineHeight, 'mobile')};

  max-height: ${({ maxLines, textType, size, lineHeight }) =>
    calculateTextHeightByLines(maxLines, textType, size, lineHeight, 'mobile')};

  /**** TABLET ****/
  @media (min-width: ${({ theme }) => theme.mq.tablet}) {
    font-weight: ${({ theme, textType, weight: fontWeight }) => {
      const weight = determineBreakpointValue<
        keyof ThemeTextDefinition['weight']
      >(fontWeight, 'tablet')

      return weight && textType && theme.text[textType].weight[weight]
    }};

    /* Metrics: tablet */
    font-size: ${({ theme, textType, size }) => {
      const textSize = typeof size === 'string' ? size : size?.tablet

      if (textSize) {
        return theme.text[textType].metrics.tablet?.[textSize]?.size
      }
    }};

    line-height: ${({ theme, textType, size, lineHeight }) => {
      const textSize = typeof size === 'string' ? size : size?.tablet

      if (textSize && lineHeight) {
        return theme.text[textType].metrics.tablet?.[textSize]?.lineHeight[
          lineHeight
        ]
      }
    }};

    letter-spacing: ${({ theme, textType, size }) => {
      const textSize = typeof size === 'string' ? size : size?.tablet

      if (textSize) {
        return theme.text[textType].metrics.tablet?.[textSize]?.letterSpacing
      }
    }};

    /* Min + max lines: tablet */
    min-height: ${({ minLines, textType, size, lineHeight }) =>
      calculateTextHeightByLines(
        minLines,
        textType,
        size,
        lineHeight,
        'tablet'
      )};

    max-height: ${({ maxLines, textType, size, lineHeight }) =>
      calculateTextHeightByLines(
        maxLines,
        textType,
        size,
        lineHeight,
        'tablet'
      )};
  }

  /**** LAPTOP ****/
  @media (min-width: ${({ theme }) => theme.mq.laptop}) {
    font-weight: ${({ theme, textType, weight: fontWeight }) => {
      const weight = determineBreakpointValue<
        keyof ThemeTextDefinition['weight']
      >(fontWeight, 'laptop')

      return weight && textType && theme.text[textType].weight[weight]
    }};

    /* Metrics: laptop and above */
    font-size: ${({ theme, textType, size }) => {
      const textSize = typeof size === 'string' ? size : size?.laptop

      if (textSize) {
        return theme.text[textType].metrics.laptop?.[textSize]?.size
      }
    }};

    line-height: ${({ theme, textType, size, lineHeight }) => {
      const textSize = typeof size === 'string' ? size : size?.laptop

      if (textSize && lineHeight) {
        return theme.text[textType].metrics.laptop?.[textSize]?.lineHeight[
          lineHeight
        ]
      }
    }};


    letter-spacing: ${({ theme, textType, size }) => {
      const textSize = typeof size === 'string' ? size : size?.laptop

      if (textSize) {
        return theme.text[textType].metrics.laptop?.[textSize]?.letterSpacing
      }
    }};

    /* Min + max lines: laptop */
    min-height: ${({ minLines, textType, size, lineHeight }) =>
      calculateTextHeightByLines(
        minLines,
        textType,
        size,
        lineHeight,
        'laptop'
      )};

    max-height: ${({ maxLines, textType, size, lineHeight }) =>
      calculateTextHeightByLines(
        maxLines,
        textType,
        size,
        lineHeight,
        'laptop'
      )};
  }
  
  /**** DESKTOP ****/
  @media (min-width: ${({ theme }) => theme.mq.desktop}) {
    font-weight: ${({ theme, textType, weight: fontWeight }) => {
      const weight = determineBreakpointValue<
        keyof ThemeTextDefinition['weight']
      >(fontWeight, 'desktop')

      return weight && textType && theme.text[textType].weight[weight]
    }};

    /* Min + max lines: desktop */
    min-height: ${({ minLines, textType, size, lineHeight }) =>
      calculateTextHeightByLines(
        minLines,
        textType,
        size,
        lineHeight,
        'desktop'
      )};

    max-height: ${({ maxLines, textType, size, lineHeight }) =>
      calculateTextHeightByLines(
        maxLines,
        textType,
        size,
        lineHeight,
        'desktop'
      )};
  }
`

export const Styled = {
  text
}
