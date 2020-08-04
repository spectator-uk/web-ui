import React from 'react'
import theme from 'spectator-uk-theme'
import { SpectatorEventsOnlineLogo } from '../SpectatorEventsOnlineLogo'
import { SpectatorLogo } from '../SpectatorLogo'
import { SpectatorLogoMini } from '../SpectatorLogoMini'

export default {
  title: 'Logos'
}

export const Spectator = () => (
  <div style={{ fontSize: 56 }}>
    <SpectatorLogo />
  </div>
)

export const SpectatorMini = () => (
  <div style={{ fontSize: 56 }}>
    <SpectatorLogoMini />
  </div>
)

export const SpectatorEventsOnline = () => (
  <div style={{ background: theme.color.black, padding: 40, fontSize: 56 }}>
    <SpectatorEventsOnlineLogo />
  </div>
)
