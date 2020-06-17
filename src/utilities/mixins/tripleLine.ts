import { ThemeColors } from 'spectator-uk-theme'
import { css } from 'styled-components'
import { rgba } from 'polished'
import { theme } from '../../global/theme'

export const tripleLine = (
  position: string = 'top',
  color?: keyof ThemeColors
) => {
  if (position === 'none') {
    return css`
      position: unset;
      border-top: none;
      border-bottom: none;

      &::before,
      &::after {
        content: none;
      }
    `
  }

  const themeColor = color ? theme.color[color] : theme.color.primary

  const style = css`
    position: relative;
    ${`border-${position}`}: 2px solid ${themeColor};

    &::before,
    &::after {
      content: ' ';
      position: absolute;
      left: 0;
      right: 0;
      width: 100%;
      height: 1px;
      pointer-events: none;
    }

    &::before {
      ${position}: 0.5rem;
      background: ${rgba(themeColor, 0.2)};
    }

    &::after {
      ${position}: 1.125rem;
      background: ${rgba(themeColor, 0.1)};
    }
  `

  return style
}
