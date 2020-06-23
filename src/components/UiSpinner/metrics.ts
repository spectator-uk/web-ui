import { ThemeSizes } from 'spectator-uk-theme'

type UiSpinnerMetrics = {
  [key in ThemeSizes]: {
    sizeValue: string
  }
}

export const spinnerMetrics: UiSpinnerMetrics = {
  xxs: {
    sizeValue: '0.75em'
  },

  xs: {
    sizeValue: '1em'
  },

  s: {
    sizeValue: '1.25em'
  },

  m: {
    sizeValue: '1.5em'
  },

  l: {
    sizeValue: '2em'
  },

  xl: {
    sizeValue: '3em'
  },

  xxl: {
    sizeValue: '4em'
  }
}
