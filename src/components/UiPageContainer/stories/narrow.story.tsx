import React from 'react'
import { UiPageContainer } from '..'

export default {
  component: UiPageContainer,
  title: 'UiPageContainer'
}

export const Narrow = () => (
  <UiPageContainer width='narrow'>
    <div style={{ background: '#f1f2f2', height: '100vh' }}></div>
  </UiPageContainer>
)
