import { theme } from './global/theme'

// Provider
export * from './global/provider'

// Logos
export * from './components/Logos/SpectatorLogo'
export * from './components/Logos/SpectatorLogoMini'
export * from './components/Logos/SpectatorTVLogo'

// Components
export * from './components/UiButton'
export * from './components/UiCircleBadge'
export * from './components/UiDivider'
export * from './components/UiIcon'
export * from './components/UiPageContainer'
export * from './components/UiSpinner'
export * from './components/UiText'

// Types
export * from './types/standardProps'
export * from './types/asProp'

// Utilities
export * from './utilities/functions/calculateTextHeightByLines'
export * from './utilities/functions/determineBreakpointValue'
export * from './utilities/mixins/tripleLine'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
