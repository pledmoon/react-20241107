import { RestaurantReviews } from '../restaurant-reviews/RestaurantReviews'
import { RestaurantMenu } from '../restaurant-menu/RestaurantMenu.jsx'

export const RestaurantCard = ({ restaurant, isHidden }) => {
  return (
    !isHidden && (
      <article
        className="restaurant-card"
        key={restaurant?.id}
      >
        <h2 className="restaurant-card__heading">{restaurant?.name}</h2>
        {!!restaurant.menu.length && <RestaurantMenu menu={restaurant.menu} />}
        {!!restaurant.reviews.length && <RestaurantReviews reviews={restaurant.reviews} />}
      </article>
    )
  )
}
