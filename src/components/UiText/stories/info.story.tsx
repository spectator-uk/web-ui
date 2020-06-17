import React from 'react'
import { UiText } from '..'

export default {
  component: UiText,
  title: 'UiText'
}

export const Info = () => (
  <>
    <UiText type='info' size='xxs' weight='bold' color='black60'>
      XXS
    </UiText>
    <UiText type='info' size='xxs'>
      The quick brown fox jumps over the lazy dog
    </UiText>

    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      XS
    </UiText>
    <UiText type='info' size='xs'>
      The quick brown fox jumps over the lazy dog
    </UiText>

    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      S
    </UiText>
    <UiText type='info' size='s'>
      The quick brown fox jumps over the lazy dog
    </UiText>

    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      M
    </UiText>
    <UiText type='info' size='m'>
      The quick brown fox jumps over the lazy dog
    </UiText>

    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      L
    </UiText>
    <UiText type='info' size='l'>
      The quick brown fox jumps over the lazy dog
    </UiText>

    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      XL
    </UiText>
    <UiText type='info' size='xl'>
      The quick brown fox jumps over the lazy dog
    </UiText>

    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      XXL
    </UiText>
    <UiText type='info' size='xxl'>
      The quick brown fox jumps over the lazy dog
    </UiText>
  </>
)
