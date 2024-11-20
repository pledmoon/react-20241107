import { Header } from './components/header'
import { Footer } from './components/footer'
import { ScrollProgressBar } from './components/ScrollProgressBar/ScrollProgressBar'

export const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <ScrollProgressBar />
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  )
}
