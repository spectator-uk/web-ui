import { ThemeSizes } from 'spectator-uk-theme'

type UiIconMetrics = {
  [key in ThemeSizes]: {
    sizeValue: string
  }
}

export const iconMetrics: UiIconMetrics = {
  xxs: {
    sizeValue: '0.4em'
  },

  xs: {
    sizeValue: '0.4em'
  },

  s: {
    sizeValue: '0.6em'
  },

  m: {
    sizeValue: '0.8em'
  },

  l: {
    sizeValue: '1em'
  },

  xl: {
    sizeValue: '1.2em'
  },

  xxl: {
    sizeValue: '1.4em'
  }
}
