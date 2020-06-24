import React, { forwardRef } from 'react'
import { StandardProps } from 'types/standardProps'
import { Styled } from './styles'

export interface UiDividerProps extends StandardProps {}

export const UiDivider: React.FC<UiDividerProps> = forwardRef(
  ({ id, className }, ref) => {
    return <Styled.hr ref={ref as any} id={id} className={className} />
  }
)
