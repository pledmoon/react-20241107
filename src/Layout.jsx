import { Header } from './components/header'
import { Footer } from './components/footer'

export const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  )
}
