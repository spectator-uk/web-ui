import React from 'react'
import { UiLogo } from '..'

export default {
  component: UiLogo,
  title: 'UiLogo'
}

export const Full = () => (
  <div style={{ fontSize: 56 }}>
    <UiLogo />
  </div>
)

export const Mini = () => (
  <div style={{ fontSize: 56 }}>
    <UiLogo type='spectator-mini' />
  </div>
)
