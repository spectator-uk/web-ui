import React from 'react'
import { Styled } from './styles'
import { AsProp } from '../../types/asProp'

export interface UiPageContainerProps {
  width?: 'extraNarrow' | 'narrow' | 'normal'
  as?: AsProp
  className?: string
}

const UiPageContainer: React.FC<UiPageContainerProps> = ({
  width = 'normal',
  as,
  className,
  children
}) => {
  return (
    <Styled.container as={as} width={width} className={className}>
      {children}
    </Styled.container>
  )
}

export default UiPageContainer
