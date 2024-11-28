import { Layout } from './Layout'
import { RestaurantsPage } from './pages/RestaurantsPage'
import { restaurants } from '../data/mock'
import './global.css'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { UserContextProvider } from './contexts/UserContext'

export const App = () => {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <Layout>
          <RestaurantsPage
            className="restaurants"
            restaurants={restaurants}
          />
        </Layout>
      </UserContextProvider>
    </ThemeContextProvider>
  )
}
