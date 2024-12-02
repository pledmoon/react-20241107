import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Layout } from './Layout'
import './global.css'
import { RestaurantsPage } from './pages/RestaurantsPage'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { UserContextProvider } from './contexts/UserContext'

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <UserContextProvider>
          <Layout>
            <RestaurantsPage />
          </Layout>
        </UserContextProvider>
      </ThemeContextProvider>
    </Provider>
  )
}
