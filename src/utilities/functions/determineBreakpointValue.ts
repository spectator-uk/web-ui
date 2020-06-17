import { ThemeBreakpoints } from 'global/theme'

export const determineBreakpointValue = <T extends string>(
  input?:
    | T
    | {
        [key in ThemeBreakpoints]?: T
      },
  breakpoint?: ThemeBreakpoints
) => {
  if (typeof input === 'string') {
    return input
  }

  if (input && typeof input !== 'string' && breakpoint) {
    return input[breakpoint]
  }
}
