import React, { forwardRef } from 'react'
import { Styled } from './styles'
import { AsProp } from '../../types/asProp'

export interface UiPageContainerProps {
  width?: 'extraNarrow' | 'narrow' | 'normal'
  as?: AsProp
  className?: string
}

export const UiPageContainer: React.FC<UiPageContainerProps> = forwardRef(
  ({ width = 'normal', as, className, children }, ref) => {
    return (
      <Styled.container ref={ref} as={as} width={width} className={className}>
        {children}
      </Styled.container>
    )
  }
)
