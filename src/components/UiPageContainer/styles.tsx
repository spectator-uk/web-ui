import styled from 'styled-components'
import { UiPageContainerProps } from '.'

const container = styled.div<UiPageContainerProps>`
  max-width: ${({ width }) =>
    (width === 'extraNarrow' && '80rem') || (width === 'narrow' && '117rem')};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.margins.mobile};

  @media (min-width: ${({ theme }) => theme.mq.tablet}) {
    padding: 0 ${({ theme }) => theme.margins.tablet};
  }

  @media (min-width: ${({ theme }) => theme.mq.laptop}) {
    padding: 0 ${({ theme }) => theme.margins.laptop};
  }

  @media (min-width: ${({ theme }) => theme.mq.desktop}) {
    max-width: ${({ width }) => width === 'normal' && '150rem'};
    padding: 0 ${({ theme }) => theme.margins.desktop};
  }
`

export const Styled = {
  container
}
