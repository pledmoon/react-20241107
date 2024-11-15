export const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <header className="header">HEADER</header>
      <main className="main">{children}</main>
      <footer className="footer">FOOTER</footer>
    </div>
  )
}
