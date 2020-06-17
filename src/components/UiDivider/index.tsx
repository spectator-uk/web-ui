import React from 'react'
import { Styled } from './styles'

export interface UiDividerProps {
  className?: string
}

export const UiDivider: React.FC<UiDividerProps> = ({ className }) => {
  return <Styled.hr className={className} />
}
