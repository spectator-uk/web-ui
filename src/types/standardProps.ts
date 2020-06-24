import { SyntheticEvent } from 'react'

export interface StandardProps {
  onClick?: (event: SyntheticEvent) => void | Promise<void> | Function
  id?: string
  className?: string
}
