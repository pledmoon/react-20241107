import { UIContainer } from '../UIContainer/UIContainer'
import styles from './Header.module.css'
import { UIButton } from '../UIButton/UIButton'
import classNames from 'classnames'
import { useThemeContext } from '../../contexts/ThemeContext'
import { useUserContext } from '../../contexts/UserContext'

export const Header = () => {
  const { theme, setTheme } = useThemeContext()
  const { username, setUsername } = useUserContext()

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
