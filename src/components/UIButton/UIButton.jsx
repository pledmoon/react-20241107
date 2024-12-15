import styles from './UiButton.module.css'
import classNames from 'classnames'
import { useThemeContext } from '../../contexts/ThemeContext'

export const UIButton = ({ className, onClick, children, ...props }) => {
  const { theme } = useThemeContext()

  return (
    <button
      className={classNames(className, styles.btn, { [styles.isDark]: theme === 'dark' })}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
