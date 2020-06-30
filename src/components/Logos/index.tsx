import { ThemeColors } from 'spectator-uk-theme'
import { StandardProps } from '../../types/standardProps'

export interface LogoProps extends StandardProps {
  color?: keyof ThemeColors
  className?: string
}
