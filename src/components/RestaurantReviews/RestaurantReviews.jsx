import styles from './RestaurantReviews.module.css'

export const RestaurantReviews = ({ reviews }) => {
  return (
    <div className={styles.reviewCardReviews}>
      <h3 className={styles.reviewCardHeading}>Reviews</h3>
      {!!reviews.length && (
        <ul>
          {reviews.map((review) => (
            <li key={review?.id}>
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
