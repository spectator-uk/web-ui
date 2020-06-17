import React from 'react'
import { UiButton } from '..'
import { UiText } from '../../UiText'

export default {
  component: UiButton,
  title: 'UiButton'
}

export const Primary = () => (
  <>
    <UiText type='info' size='xxs' weight='bold' color='black60'>
      XXS
    </UiText>
    <br />
    <br />
    <UiButton color='primary' size='xxs'>
      Button label
    </UiButton>

    <br />
    <br />
    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      XS
    </UiText>
    <br />
    <br />
    <UiButton color='primary' size='xs'>
      Button label
    </UiButton>

    <br />
    <br />
    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      S
    </UiText>
    <br />
    <br />
    <UiButton color='primary' size='s'>
      Button label
    </UiButton>

    <br />
    <br />
    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      M
    </UiText>
    <br />
    <br />
    <UiButton color='primary' size='m'>
      Button label
    </UiButton>

    <br />
    <br />
    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      L
    </UiText>
    <br />
    <br />
    <UiButton color='primary' size='l'>
      Button label
    </UiButton>

    <br />
    <br />
    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      XL
    </UiText>
    <br />
    <br />
    <UiButton color='primary' size='xl'>
      Button label
    </UiButton>

    <br />
    <br />
    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      XXL
    </UiText>
    <br />
    <br />
    <UiButton color='primary' size='xxl'>
      Button label
    </UiButton>
  </>
)
