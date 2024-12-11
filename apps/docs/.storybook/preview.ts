import type { Preview } from '@storybook/react'
import dark from './themes/dark'
import light from './themes/light'
import { createTheme } from './utils/create-theme'

export const store = () => {
  const storedItem = window.localStorage.getItem('sb-addon-themes-3')
  const item =
    typeof storedItem === 'string' ? JSON.parse(storedItem) : storedItem

  return item.current
}

const preview: Preview = {
  parameters: {
    docs: {
      theme: store() === 'dark' ? dark : light,
    },
    darkMode: {
      current: 'light',
      classTarget: 'html',
      light: createTheme({ theme: light }),
      dark: createTheme({ theme: dark }),
      darkClass: 'dark',
      lightClass: 'light',
      stylePreview: true,
    },
    controls: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
}

export default preview
