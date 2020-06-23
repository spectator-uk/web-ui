import styled from 'styled-components'
import { UiSpinnerProps } from '.'
import { spinnerMetrics } from './metrics'

const container = styled.span`
  position: relative;
  display: inline-flex;
`

const spinner = styled.svg<UiSpinnerProps>`
  animation: rotate 2s linear infinite;
  z-index: 2;
  width: ${({ size }) => size && spinnerMetrics[size].sizeValue};
  height: ${({ size }) => size && spinnerMetrics[size].sizeValue};

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`

const circle = styled.circle<UiSpinnerProps>`
  stroke: ${({ theme, color }) => color && theme.color[color]};
  stroke-width: 0.5rem;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`

export const Styled = {
  container,
  spinner,
  circle
}
