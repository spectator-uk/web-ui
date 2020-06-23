import { theme } from './global/theme'

// Provider
export * from './global/provider'

// Logos
export * from './components/Logos/SpectatorLogo'
export * from './components/Logos/SpectatorLogoMini'
export * from './components/Logos/SpectatorBoardroomLogo'

// Components
export * from './components/UiButton'
export * from './components/UiCircleBadge'
export * from './components/UiDivider'
export * from './components/UiIcon'
export * from './components/UiPageContainer'
export * from './components/UiSpinner'
export * from './components/UiText'

// Utilities
export * from './utilities/functions/calculateTextHeightByLines'
export * from './utilities/functions/determineBreakpointValue'
export * from './utilities/mixins/tripleLine'

// Types
export * from './types/asProp'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
