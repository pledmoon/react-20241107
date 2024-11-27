import { useContext } from 'react'
import { UIContainer } from '../UIContainer/UIContainer'
import styles from './Header.module.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { UIButton } from '../UIButton/UIButton'
import classNames from 'classnames'
import { UserContext } from '../../contexts/UserContext.js'

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const { username, setUsername } = useContext(UserContext)

  return (
    <header className={classNames(styles.header, { [styles.isDark]: theme === 'dark' })}>
      <UIContainer>
        <div className={styles.headerMain}>
          <div>HEADER</div>

          <div className={styles.headerAside}>
            {!username && <UIButton onClick={() => setUsername('John Smith')}>Log In</UIButton>}

            {username && (
              <>
                <div>
                  Welcome <strong>{username}</strong>
                </div>
                <UIButton onClick={() => setUsername(null)}>Log Out</UIButton>
              </>
            )}

            <UIButton
              type="button"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              {theme}
            </UIButton>
          </div>
        </div>
      </UIContainer>
    </header>
  )
}
