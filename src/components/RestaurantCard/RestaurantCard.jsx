import { RestaurantReviews } from '../RestaurantReviews/RestaurantReviews'
import { RestaurantMenu } from '../RestaurantMenu/RestaurantMenu'
import { ReviewForm } from '../ReviewForm/ReviewForm'
import styles from './RestaurantCard.module.css'

export const RestaurantCard = ({ restaurant }) => {
  return (
    <article className={styles.restaurantCard}>
      <h2 className={styles.restaurantCardHeading}>{restaurant?.name}</h2>
      {!!restaurant.menu.length && <RestaurantMenu menu={restaurant.menu} />}
      {!!restaurant.reviews.length && <RestaurantReviews reviews={restaurant.reviews} />}
      <hr />
      <ReviewForm />
    </article>
  )
}
