import { UIContainer } from '../UIContainer/UIContainer'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <UIContainer>
        <div className="header__main">HEADER</div>
      </UIContainer>
    </header>
  )
}
