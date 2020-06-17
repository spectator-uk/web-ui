import React from 'react'
import UiPageContainer from '..'

export default {
  component: UiPageContainer,
  title: 'UiPageContainer'
}

export const ExtraNarrow = () => (
  <UiPageContainer width='extraNarrow'>
    <div style={{ background: '#f1f2f2', height: '100vh' }}></div>
  </UiPageContainer>
)
