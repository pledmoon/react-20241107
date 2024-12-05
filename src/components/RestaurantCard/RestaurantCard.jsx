import { useThemeContext } from '../../contexts/ThemeContext'
import classNames from 'classnames'
import styles from './RestaurantCard.module.css'

export const RestaurantCard = ({ children }) => {
  const { theme } = useThemeContext()

  return (
    <article className={classNames(styles.restaurantCard, { [styles.isDark]: theme === 'dark' })}>
      {children}
    </article>
  )
}
