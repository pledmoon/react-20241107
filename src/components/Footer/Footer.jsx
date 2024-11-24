import { UIContainer } from '../UIContainer/UIContainer'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <UIContainer>
        <div>&copy; Copyright {new Date().getFullYear()}</div>
      </UIContainer>
    </footer>
  )
}
