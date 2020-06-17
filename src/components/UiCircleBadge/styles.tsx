import styled from 'styled-components'
import { UiCircleBadgeProps } from '.'
import { rgba } from 'polished'
import { determineBreakpointValue } from '../../utilities/functions/determineBreakpointValue'

const circle = styled.span<UiCircleBadgeProps>`
  position: relative;
  display: inline-block;

  width: ${({ size: cardSize }) => {
    const size = determineBreakpointValue(cardSize, 'mobile')
    return ((size === 'xl' || size === 'xxl') && '1.25rem') || '1rem'
  }};

  height: ${({ size: cardSize }) => {
    const size = determineBreakpointValue(cardSize, 'mobile')
    return ((size === 'xl' || size === 'xxl') && '1.25rem') || '1rem'
  }};

  &:before {
    content: '';
    position: relative;
    display: block;
    width: 300%;
    height: 300%;
    box-sizing: border-box;
    margin-left: -100%;
    margin-top: -100%;
    border-radius: 1.875rem;
    background-color: ${({ theme, color }) =>
      color && rgba(theme.color[color], 0.5)};
    animation: ${({ pulse }) =>
      pulse && 'pulse-ring 3s cubic-bezier(0.215, 1.5, 0.355, 1) infinite'};
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${({ theme, color }) => color && theme.color[color]};
    border-radius: 1.875rem;
  }

  /** TABLET */
  @media (min-width: ${({ theme }) => theme.mq.tablet}) {
    width: ${({ size: cardSize }) => {
      const size = determineBreakpointValue(cardSize, 'tablet')
      return ((size === 'xl' || size === 'xxl') && '1.25rem') || '1rem'
    }};

    height: ${({ size: cardSize }) => {
      const size = determineBreakpointValue(cardSize, 'tablet')
      return ((size === 'xl' || size === 'xxl') && '1.25rem') || '1rem'
    }};
  }

  /** LAPTOP */
  @media (min-width: ${({ theme }) => theme.mq.laptop}) {
    width: ${({ size: cardSize }) => {
      const size = determineBreakpointValue(cardSize, 'laptop')
      return ((size === 'xl' || size === 'xxl') && '1.25rem') || '1rem'
    }};

    height: ${({ size: cardSize }) => {
      const size = determineBreakpointValue(cardSize, 'laptop')
      return ((size === 'xl' || size === 'xxl') && '1.25rem') || '1rem'
    }};
  }

  /** DESKTOP */
  @media (min-width: ${({ theme }) => theme.mq.desktop}) {
    width: ${({ size: cardSize }) => {
      const size = determineBreakpointValue(cardSize, 'desktop')
      return ((size === 'xl' || size === 'xxl') && '1.25rem') || '1rem'
    }};

    height: ${({ size: cardSize }) => {
      const size = determineBreakpointValue(cardSize, 'desktop')
      return ((size === 'xl' || size === 'xxl') && '1.25rem') || '1rem'
    }};
  }

  @keyframes pulse-ring {
    0% {
      transform: scale(0.33);
    }
    80%,
    100% {
      opacity: 0;
    }
  }
`

export const Styled = {
  circle
}
