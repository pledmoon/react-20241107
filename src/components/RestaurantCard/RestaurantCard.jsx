import { RestaurantReviews } from '../RestaurantReviews/RestaurantReviews'
import { RestaurantMenu } from '../RestaurantMenu/RestaurantMenu'
import { ReviewForm } from '../ReviewForm/ReviewForm'
import styles from './RestaurantCard.module.css'
import classNames from 'classnames'
import { useThemeContext } from '../../contexts/ThemeContext'
import { useUserContext } from '../../contexts/UserContext'

export const RestaurantCard = ({ restaurant }) => {
  const { theme } = useThemeContext()
  const { userAuth } = useUserContext()

  return (
    <article className={classNames(styles.restaurantCard, { [styles.isDark]: theme === 'dark' })}>
      <h2 className={styles.restaurantCardHeading}>{restaurant?.name}</h2>
      {!!restaurant.menu.length && <RestaurantMenu menu={restaurant.menu} />}
      {!!restaurant.reviews.length && <RestaurantReviews reviews={restaurant.reviews} />}
      <hr />
      {userAuth.isAuth && <ReviewForm />}
    </article>
  )
}
