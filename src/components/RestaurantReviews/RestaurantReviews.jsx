import styles from './RestaurantReviews.module.css'
import { Review } from '../Review/Review'

export const RestaurantReviews = ({ reviews }) => {
  return (
    <div className={styles.reviewCardReviews}>
      <h3 className={styles.reviewCardHeading}>Reviews</h3>
      {!!reviews.length && (
        <ul>
          {reviews.map((review) => (
            <li key={review}>
              <Review id={review} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
