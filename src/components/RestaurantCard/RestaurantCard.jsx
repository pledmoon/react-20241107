import { useContext } from 'react'
import { RestaurantReviews } from '../RestaurantReviews/RestaurantReviews'
import { RestaurantMenu } from '../RestaurantMenu/RestaurantMenu'
import { ReviewForm } from '../ReviewForm/ReviewForm'
import styles from './RestaurantCard.module.css'
import classNames from 'classnames'
import { ThemeContext } from '../../contexts/ThemeContext.js'
import { UserContext } from '../../contexts/UserContext.js'

export const RestaurantCard = ({ restaurant }) => {
  const { theme } = useContext(ThemeContext)
  const { username } = useContext(UserContext)

  return (
    <article className={classNames(styles.restaurantCard, { [styles.isDark]: theme === 'dark' })}>
      <h2 className={styles.restaurantCardHeading}>{restaurant?.name}</h2>
      {!!restaurant.menu.length && <RestaurantMenu menu={restaurant.menu} />}
      {!!restaurant.reviews.length && <RestaurantReviews reviews={restaurant.reviews} />}
      <hr />
      {username && <ReviewForm />}
    </article>
  )
}
