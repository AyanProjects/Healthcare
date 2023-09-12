import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Screens from './screens'
import store from './stores/store'
import './style.scss'
import ThemeProvider from './theme'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <Screens />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
