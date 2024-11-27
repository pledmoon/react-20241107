import { useContext } from 'react'
import { UIContainer } from '../UIContainer/UIContainer'
import styles from './Footer.module.css'
import classNames from 'classnames'
import { ThemeContext } from '../../contexts/ThemeContext.js'

export const Footer = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <footer className={classNames(styles.footer, { [styles.isDark]: theme === 'dark' })}>
      <UIContainer>
        <div>&copy; Copyright {new Date().getFullYear()}</div>
      </UIContainer>
    </footer>
  )
}
