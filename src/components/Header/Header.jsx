import { UIContainer } from '../UIContainer/UIContainer'
import styles from './Header.module.css'
import { UIButton } from '../UIButton/UIButton'
import classNames from 'classnames'
import { useThemeContext } from '../../contexts/ThemeContext'
import { useUserContext } from '../../contexts/UserContext'
import { TopNav } from '../TopNav/TopNav'

export const Header = () => {
  const { theme, setTheme } = useThemeContext()
  const { userAuth, setUserAuth } = useUserContext()

  return (
    <header className={classNames(styles.header, { [styles.isDark]: theme === 'dark' })}>
      <UIContainer>
        <div className={styles.headerMain}>
          <div className={styles.headerCol}>
            <div>LOGO</div>

            <TopNav className={styles.headerNav} />
          </div>

          <div className={styles.headerAside}>
            {!userAuth.isAuth && (
              <UIButton
                onClick={() =>
                  setUserAuth({
                    isAuth: true,
                    name: 'John Smith',
                  })
                }
              >
                Log In
              </UIButton>
            )}

            {userAuth.isAuth && (
              <>
                <div>
                  Welcome <strong>{userAuth.name}</strong>
                </div>
                <UIButton onClick={() => setUserAuth({ isAuth: false })}>Log Out</UIButton>
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
