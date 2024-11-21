import styles from './UiContainer.module.css'

export const UIContainer = ({ children }) => {
  return <div className={`${styles['container']}`}>{children}</div>
}
