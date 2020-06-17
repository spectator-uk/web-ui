import { ThemeSizes } from 'spectator-uk-theme'

type UiButtonMetrics = {
  [key in ThemeSizes]: {
    height: string
    paddingX: {
      narrow: string
      normal: string
      wide: string
    }
    circleSize: string
  }
}

export const buttonMetrics: UiButtonMetrics = {
  xxs: {
    height: '3rem',

    paddingX: {
      narrow: '1.5rem',
      normal: '2rem',
      wide: '4rem'
    },

    circleSize: '3rem'
  },

  xs: {
    height: '4rem',

    paddingX: {
      narrow: '2rem',
      normal: '3rem',
      wide: '4rem'
    },

    circleSize: '4rem'
  },

  s: {
    height: '5rem',

    paddingX: {
      narrow: '2rem',
      normal: '4rem',
      wide: '6rem'
    },

    circleSize: '5rem'
  },

  m: {
    height: '6rem',

    paddingX: {
      narrow: '2rem',
      normal: '4rem',
      wide: '8rem'
    },

    circleSize: '6rem'
  },

  l: {
    height: '7rem',

    paddingX: {
      narrow: '3rem',
      normal: '6rem',
      wide: '12rem'
    },

    circleSize: '7rem'
  },

  xl: {
    height: '8rem',

    paddingX: {
      narrow: '4rem',
      normal: '8rem',
      wide: '16rem'
    },

    circleSize: '8rem'
  },

  xxl: {
    height: '8rem',

    paddingX: {
      narrow: '6rem',
      normal: '12rem',
      wide: '24rem'
    },

    circleSize: '8rem'
  }
}
