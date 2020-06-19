import React, { forwardRef } from 'react'
import { Styled } from './styles'

export interface UiDividerProps {
  className?: string
}

export const UiDivider: React.FC<UiDividerProps> = forwardRef(
  ({ className }, ref) => {
    return <Styled.hr ref={ref as any} className={className} />
  }
)
