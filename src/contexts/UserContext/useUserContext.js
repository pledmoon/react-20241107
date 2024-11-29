import { useContext } from 'react'
import { UserContext } from './UserContext'

function useUserContext() {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUserContext must be used within UserContextProvider')
  }

  return context
}

export { useUserContext }
