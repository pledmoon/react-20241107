import { RestaurantReviews } from '../restaurant-reviews'
import { RestaurantMenu } from '../restaurant-menu'
import { ReviewForm } from '../ReviewForm/ReviewForm'

export const RestaurantCard = ({ restaurant }) => {
  return (
    <article className="restaurant-card">
      <h2 className="restaurant-card__heading">{restaurant?.name}</h2>
      {!!restaurant.menu.length && <RestaurantMenu menu={restaurant.menu} />}
      {!!restaurant.reviews.length && <RestaurantReviews reviews={restaurant.reviews} />}
      <hr />
      <ReviewForm />
    </article>
  )
}
