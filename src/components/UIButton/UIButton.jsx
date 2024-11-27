import { useContext } from 'react'
import styles from './UiButton.module.css'
import classNames from 'classnames'
import { ThemeContext } from '../../contexts/ThemeContext.js'

export const UIButton = ({ className, onClick, children }) => {
  const { theme } = useContext(ThemeContext)

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
