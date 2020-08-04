import { theme } from './global/theme'

// Provider
export * from './components/Logos/SpectatorEventsOnlineLogo'
// Logos
export * from './components/Logos/SpectatorLogo'
export * from './components/Logos/SpectatorLogoMini'
// Components
export * from './components/UiButton'
export * from './components/UiCircleBadge'
export * from './components/UiDivider'
export * from './components/UiIcon'
export * from './components/UiPageContainer'
export * from './components/UiSpinner'
export * from './components/UiText'
export * from './global/provider'
export * from './types/asProp'
// Types
export * from './types/standardProps'
// Utilities
export * from './utilities/functions/calculateTextHeightByLines'
export * from './utilities/functions/determineBreakpointValue'
export * from './utilities/mixins/tripleLine'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
