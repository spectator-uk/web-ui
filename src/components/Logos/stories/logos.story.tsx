import React from 'react'
import { SpectatorBoardroomLogo } from '../SpectatorBoardroomLogo'
import { SpectatorLogo } from '../SpectatorLogo'
import { SpectatorLogoMini } from '../SpectatorLogoMini'
import theme from 'spectator-uk-theme'

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

export const SpectatorBoardroom = () => (
  <div style={{ background: theme.color.black, padding: 40, fontSize: 56 }}>
    <SpectatorBoardroomLogo />
  </div>
)
