import { DefaultTheme } from 'styled-components'
import baseTheme from 'spectator-uk-theme'

export type ThemeBreakpoints = keyof DefaultTheme['mq']

export const theme = {
  ...baseTheme,

  mq: {
    mobile: '320px',
    tablet: '640px',
    laptop: '980px',
    desktop: '1200px'
  },

  tweakpoint: {
    largeMobile: '480px'
  },

  margins: {
    mobile: '2rem',
    tablet: '3rem',
    laptop: '4rem',
    desktop: '5rem'
  },

  columnGap: {
    mobile: '2rem',
    tablet: '3rem',
    laptop: '4rem',
    desktop: '4rem'
  },

  rowGap: {
    mobile: '2rem',
    tablet: '2rem',
    laptop: '3rem',
    desktop: '3rem'
  }
}
