import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ScrollProgressBar } from './components/ScrollProgressBar/ScrollProgressBar'
import { UIContainer } from './components/UIContainer/UIContainer'

export const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <ScrollProgressBar />
      <Header />
      <main className="main">
        <UIContainer>{children}</UIContainer>
      </main>
      <Footer />
    </div>
  )
}
