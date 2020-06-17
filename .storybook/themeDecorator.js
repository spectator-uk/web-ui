import React from 'react'
import { SpectatorWebUiProvider } from '../src/global/provider'

export const ThemeDecorator = storyFn => (
  <SpectatorWebUiProvider>{storyFn()}</SpectatorWebUiProvider>
)
