import styles from './UiButton.module.css'
import classNames from 'classnames'
import { useThemeContext } from '../../contexts/ThemeContext'

export const UIButton = ({ className, onClick, children }) => {
  const { theme } = useThemeContext()

  return (
    <button
      className={classNames(className, styles.btn, { [styles.isDark]: theme === 'dark' })}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
