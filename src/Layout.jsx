import { useEffect } from 'react'
import { Outlet } from 'react-router'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ScrollProgressBar } from './components/ScrollProgressBar/ScrollProgressBar'
import { UIContainer } from './components/UIContainer/UIContainer'
import styles from './Layout.module.css'
import { useThemeContext } from './contexts/ThemeContext'

export const Layout = () => {
  const { theme } = useThemeContext()

  useEffect(() => {
    document.documentElement.dataset.mode = theme
  }, [theme])

  return (
    <>
      <ScrollProgressBar />

      <Header />

      <main className={styles.main}>
        <UIContainer>
          <Outlet />
        </UIContainer>
      </main>

      <Footer />
    </>
  )
}
