import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { useUserContext } from '../../contexts/UserContext'
import styles from './RestaurantReviews.module.css'
import { ReviewContainer } from '../Review/ReviewContainer'
import { selectRestaurantById } from '../../redux/entities/restaurants-slice'
import { ReviewForm } from '../ReviewForm/ReviewForm'

export const RestaurantReviews = () => {
  const { restaurantId } = useParams()
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId))
  const { reviews } = restaurant
  const { userAuth } = useUserContext()

  return (
    <div className={styles.reviewCardReviews}>
      <h3>Reviews</h3>

      <br />

      {!!reviews.length && (
        <ul>
          {reviews.map((review) => (
            <li key={review}>
              <ReviewContainer id={review} />
            </li>
          ))}
        </ul>
      )}

      {userAuth.isAuth && <ReviewForm />}
    </div>
  )
}
