import normalize from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'
import { rgba } from 'polished'

export const GlobalCss = createGlobalStyle`
  ${normalize}

  html, body {
    font-size: ${theme.baseUnit};
    line-height: ${theme.baseUnit};
    font-family: ${theme.text.body.fontFamily};
    color: ${theme.color.black};
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }

  ::selection {
    background-color: ${rgba(theme.color.primary, 0.2)};
  }
`
