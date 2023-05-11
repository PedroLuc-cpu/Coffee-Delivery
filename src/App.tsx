import { DefaultLayout } from './layout/DefaultLayout'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <DefaultLayout />
        <GlobalStyle />
      </ThemeProvider>
    </div>
  )
}

export default App
