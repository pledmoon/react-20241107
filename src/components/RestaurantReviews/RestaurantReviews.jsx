import styles from './RestaurantReviews.module.css'
import { ReviewContainer } from '../Review/ReviewContainer'

export const RestaurantReviews = ({ reviews }) => {
  return (
    <div className={styles.reviewCardReviews}>
      <h3 className={styles.reviewCardHeading}>Reviews</h3>
      {!!reviews.length && (
        <ul>
          {reviews.map((review) => (
            <li key={review}>
              <ReviewContainer id={review} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
