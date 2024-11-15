export const RestaurantReviews = ({ reviews }) => {
  return (
    <div className="restaurant-card__reviews">
      <h3 className="restaurant-card__subheading">Отзывы</h3>
      {!!reviews.length && (
        <ul className="restaurant-card__reviews">
          {reviews.map((review) => (
            <li
              className="restaurant-card__review"
              key={review?.id}
            >
              <strong>{review.user}</strong>
              <div>
                {review?.text} ({review.rating}/5)
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
