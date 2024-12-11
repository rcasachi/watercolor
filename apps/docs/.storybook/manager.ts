import { addons } from '@storybook/addons'
import light from './themes/light'
import { createTheme } from './utils/create-theme'

addons.setConfig({
  theme: createTheme({
    theme: light,
  }),
})
