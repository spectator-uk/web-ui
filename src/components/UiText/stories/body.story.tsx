import React from 'react'
import { UiText } from '..'

export default {
  component: UiText,
  title: 'UiText'
}

export const Body = () => (
  <>
    <UiText type='info' size='xxs' weight='bold' color='black60'>
      XXS
    </UiText>
    <UiText type='body' size='xxs'>
      The quick brown fox jumps over the lazy dog
    </UiText>

    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      XS
    </UiText>
    <UiText type='body' size='xs'>
      The quick brown fox jumps over the lazy dog
    </UiText>

    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      S
    </UiText>
    <UiText type='body' size='s'>
      The quick brown fox jumps over the lazy dog
    </UiText>

    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      M
    </UiText>
    <UiText type='body' size='m'>
      The quick brown fox jumps over the lazy dog
    </UiText>

    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      L
    </UiText>
    <UiText type='body' size='l'>
      The quick brown fox jumps over the lazy dog
    </UiText>

    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      XL
    </UiText>
    <UiText type='body' size='xl'>
      The quick brown fox jumps over the lazy dog
    </UiText>

    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      XXL
    </UiText>
    <UiText type='body' size='xxl'>
      The quick brown fox jumps over the lazy dog
    </UiText>
  </>
)
