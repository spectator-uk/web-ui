import React, { forwardRef } from 'react'
import { StandardProps } from '../../types/standardProps'
import { AsProp } from '../../types/asProp'
import { Styled } from './styles'

export interface UiPageContainerProps extends StandardProps {
  width?: 'extraNarrow' | 'narrow' | 'normal'
  as?: AsProp
}

export const UiPageContainer: React.FC<UiPageContainerProps> = forwardRef(
  ({ width = 'normal', as, id, className, children }, ref) => {
    return (
      <Styled.container
        ref={ref}
        as={as}
        width={width}
        id={id}
        className={className}
      >
        {children}
      </Styled.container>
    )
  }
)
