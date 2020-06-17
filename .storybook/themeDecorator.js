import React from 'react'
import { SpectatorWebUiProvider } from '../src/global/provider'

export const ThemeDecorator = storyFn => (
  <SpectatorWebUiProvider>
    <div style={{ padding: 40 }}>{storyFn()}</div>
  </SpectatorWebUiProvider>
)
