import { useState, useEffect } from 'react'
import { Layout } from './Layout'
import { RestaurantsPage } from './pages/RestaurantsPage'
import { restaurants } from '../data/mock'
import './global.css'
import { ThemeContext } from './contexts/ThemeContext'
import { UserContext } from './contexts/UserContext'

export const App = () => {
  const [theme, setTheme] = useState('light')
  const [username, setUsername] = useState(null)

  useEffect(() => {
    document.documentElement.dataset.mode = theme
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <UserContext.Provider
        value={{
          username,
          setUsername,
        }}
      >
        <Layout>
          <RestaurantsPage
            className="restaurants"
            restaurants={restaurants}
          />
        </Layout>
      </UserContext.Provider>
    </ThemeContext.Provider>
  )
}
