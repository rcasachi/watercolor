import { create } from '@storybook/theming'

export const createTheme = ({ theme }) => {
  const themeValue = {
    brandTitle: 'WatercolorUI',
    brandUrl: 'https://rcasachi.github.io/watercolor/',
    brandImage: './src/stories/assets/watercolor.png',
    brandTarget: '_self',

    ...theme,
  }

  return create(themeValue)
}
