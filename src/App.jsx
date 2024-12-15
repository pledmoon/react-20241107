import { createBrowserRouter, RouterProvider, Navigate } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import './global.css'
import { Layout } from './Layout'
import { Homepage } from './pages/Homepage'
import { Restaurants } from './pages/Restaurants'
import { RestaurantCard } from './components/RestaurantCard/RestaurantCard'
import { RestaurantDishes } from './components/RestaurantDishes/RestaurantDishes'
import { RestaurantReviews } from './components/RestaurantReviews/RestaurantReviews'
import { DishDetail } from './pages/DishDetail'
import { NotFound } from './pages/NotFound'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { UserContextProvider } from './contexts/UserContext'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/restaurants',
        element: <Restaurants />,
        children: [
          {
            element: <RestaurantCard />,
            path: ':restaurantId',
            children: [
              {
                element: <RestaurantDishes />,
                path: 'menu',
                index: true,
              },
              {
                element: <RestaurantReviews />,
                path: 'reviews',
              },
              {
                index: true,
                element: (
                  <Navigate
                    to="menu"
                    replace
                  />
                ),
              },
            ],
          },
        ],
      },
      {
        path: '/dish/:dishId',
        element: <DishDetail />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <UserContextProvider>
          <RouterProvider router={router} />
        </UserContextProvider>
      </ThemeContextProvider>
    </Provider>
  )
}
