import DefaultTheme from 'vitepress/theme'
import LessUI from '../../../src/entry'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(LessUI)
  },
}
