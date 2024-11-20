import { useScrollProgress } from '../../hooks/useScrollProgress'
import styles from './ScrollProgressBar.module.css'

export const ScrollProgressBar = () => {
  const scrollProgress = useScrollProgress()

  return (
    <div
      className={`${styles['scrollbar']}`}
      style={{ width: `${scrollProgress}%` }}
    ></div>
  )
}
