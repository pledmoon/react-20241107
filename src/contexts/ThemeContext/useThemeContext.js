import { useContext } from 'react'
import { ThemeContext } from './ThemeContextProvider'

const useThemeContext = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useThemeContext must be used within ThemeContextProvider')
  }

  return context
}

export { useThemeContext }
