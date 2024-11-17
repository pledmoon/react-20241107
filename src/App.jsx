import { Layout } from './Layout'
import { RestaurantsPage } from './pages/RestaurantsPage'
import { restaurants } from '../data/mock'
import '../public/styles.css'

export const App = () => {
  return (
    <Layout>
      <RestaurantsPage
        className="restaurants"
        restaurants={restaurants}
      />
    </Layout>
  )
}
