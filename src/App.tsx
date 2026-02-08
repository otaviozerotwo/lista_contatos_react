import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import NewContact from './pages/NewContact'
import { Provider } from 'react-redux'
import store from './store'

import GlobalStyle, { Container } from './styles'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/new',
    element: <NewContact />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </Provider>
  )
}

export default App
