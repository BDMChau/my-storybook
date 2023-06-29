import ThemesProvider from '../src/styles/ThemeProvider'
import LocalizationProvider from '../src/styles/LocalizationProvider'

export const parameters = {
  backgrounds: {
    default: 'light',
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [(Story, context) => (
  <ThemesProvider>
    <LocalizationProvider>
      <Story {...context} />
    </LocalizationProvider>
  </ThemesProvider>
)];
