import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ScrollProgressBar } from './components/ScrollProgressBar/ScrollProgressBar'
import { UIContainer } from './components/UIContainer/UIContainer'
import styles from './Layout.module.css'

export const Layout = ({ children }) => {
  return (
    <div>
      <ScrollProgressBar />

      <Header />

      <main className={styles.main}>
        <UIContainer>{children}</UIContainer>
      </main>

      <Footer />
    </div>
  )
}
