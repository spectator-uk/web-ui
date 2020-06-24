import React, { forwardRef } from 'react'
import { ThemeColors, ThemeSizes } from 'spectator-uk-theme'
import { StandardProps } from 'types/standardProps'
import { Styled } from './styles'

export interface UiSpinnerProps extends StandardProps {
  color?: keyof ThemeColors
  size?: ThemeSizes
}

export const UiSpinner: React.FC<UiSpinnerProps> = forwardRef(
  ({ color = 'primary', size = 'm', id, className }, ref) => {
    return (
      <Styled.container ref={ref as any} id={id} className={className}>
        <Styled.spinner viewBox='0 0 50 50' size={size}>
          <Styled.circle
            cx='25'
            cy='25'
            r='20'
            fill='none'
            stroke-width='5'
            color={color}
          />
        </Styled.spinner>
      </Styled.container>
    )
  }
)
