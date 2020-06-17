import React from 'react'
import { ThemeProvider, StyleSheetManager } from 'styled-components'
import { GlobalCss } from './css'
import griddie from 'styled-griddie'
import { theme } from './theme'

export const SpectatorWebUiProvider: React.FC = ({ children }) => {
  return (
    <>
      <GlobalCss />

      <StyleSheetManager stylisPlugins={[griddie]}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StyleSheetManager>
    </>
  )
}
