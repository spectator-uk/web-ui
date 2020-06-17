import React from 'react'
import { UiText } from '..'

export default {
  component: UiText,
  title: 'UiText'
}

export const Heading = () => (
  <>
    <UiText type='info' size='xxs' weight='bold' color='black60'>
      XXS
    </UiText>
    <UiText type='heading' size='xxs'>
      The quick brown fox jumps over the lazy dog
    </UiText>

    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      XS
    </UiText>
    <UiText type='heading' size='xs'>
      The quick brown fox jumps over the lazy dog
    </UiText>

    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      S
    </UiText>
    <UiText type='heading' size='s'>
      The quick brown fox jumps over the lazy dog
    </UiText>

    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      M
    </UiText>
    <UiText type='heading' size='m'>
      The quick brown fox jumps over the lazy dog
    </UiText>

    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      L
    </UiText>
    <UiText type='heading' size='l'>
      The quick brown fox jumps over the lazy dog
    </UiText>

    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      XL
    </UiText>
    <UiText type='heading' size='xl'>
      The quick brown fox jumps over the lazy dog
    </UiText>

    <br />
    <br />

    <UiText type='info' size='xxs' weight='bold' color='black60'>
      XXL
    </UiText>
    <UiText type='heading' size='xxl'>
      The quick brown fox jumps over the lazy dog
    </UiText>
  </>
)
