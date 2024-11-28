import { createContext, useState } from 'react'

const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState({ isAuth: false })

  return (
    <UserContext.Provider
      value={{
        userAuth,
        setUserAuth,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserContextProvider }
