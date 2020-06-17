import { configure, addDecorator } from '@storybook/react'
import { ThemeDecorator } from './themeDecorator'
const { withPropsTable } = require('storybook-addon-react-docgen')

// automatically import all files ending in *.story.tsx
configure(require.context('../src/components', true, /\story\.tsx?$/), module)

addDecorator(ThemeDecorator)

addDecorator(withPropsTable)
