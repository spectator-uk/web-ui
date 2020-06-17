import React from 'react'
import { Styled } from './styles'

export interface UiDividerProps {
  className?: string
}

const UiDivider: React.FC<UiDividerProps> = ({ className }) => {
  return <Styled.hr className={className} />
}

export default UiDivider
