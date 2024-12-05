import { UIContainer } from '../UIContainer/UIContainer'
import styles from './Footer.module.css'
import classNames from 'classnames'
import { useThemeContext } from '../../contexts/ThemeContext'
import { CartWidget } from '../CartWidget/CartWidget'

export const Footer = () => {
  const { theme } = useThemeContext()

  return (
    <>
      <UIContainer>
        <CartWidget />
      </UIContainer>

      <footer className={classNames(styles.footer, { [styles.isDark]: theme === 'dark' })}>
        <div>&copy; Copyright {new Date().getFullYear()}</div>
      </footer>
    </>
  )
}
