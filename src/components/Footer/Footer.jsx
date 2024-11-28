import { UIContainer } from '../UIContainer/UIContainer'
import styles from './Footer.module.css'
import classNames from 'classnames'
import { useThemeContext } from '../../contexts/ThemeContext'

export const Footer = () => {
  const { theme } = useThemeContext()

  return (
    <footer className={classNames(styles.footer, { [styles.isDark]: theme === 'dark' })}>
      <UIContainer>
        <div>&copy; Copyright {new Date().getFullYear()}</div>
      </UIContainer>
    </footer>
  )
}
