import React from 'react'
import UiSpinner from '..'
import { UiText } from '../../UiText'

export default {
  component: UiSpinner,
  title: 'UiSpinner'
}

export const Primary = () => (
  <div style={{ fontSize: 16 }}>
    <UiText type='info' size='xxs' weight='bold' color='black60'>
      XXS
    </UiText>
    <br />
    <br />
    <UiSpinner size='xxs' />

    <br />
    <br />
    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      XS
    </UiText>
    <br />
    <br />
    <UiSpinner size='xs' />

    <br />
    <br />
    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      S
    </UiText>
    <br />
    <br />
    <UiSpinner size='s' />

    <br />
    <br />
    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      M
    </UiText>
    <br />
    <br />
    <UiSpinner size='m' />

    <br />
    <br />
    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      L
    </UiText>
    <br />
    <br />
    <UiSpinner size='l' />

    <br />
    <br />
    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      XL
    </UiText>
    <br />
    <br />
    <UiSpinner size='xl' />

    <br />
    <br />
    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      XXL
    </UiText>
    <br />
    <br />
    <UiSpinner size='xxl' />
  </div>
)
