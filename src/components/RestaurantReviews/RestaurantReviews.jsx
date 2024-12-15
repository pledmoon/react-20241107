import { useParams } from 'react-router'
import { useUserContext } from '../../contexts/UserContext'
import styles from './RestaurantReviews.module.css'
import { Review } from '../Review/Review'
import { ReviewForm } from '../ReviewForm/ReviewForm'
import { useGetReviewsByRestaurantIdQuery, useAddReviewMutation } from '@/redux/services/api'

export const RestaurantReviews = () => {
  const { userAuth } = useUserContext()

  const { restaurantId } = useParams()

  const { data, isLoading, isError } = useGetReviewsByRestaurantIdQuery(restaurantId)
  const [addReview, { isLoading: isLoadingForm }] = useAddReviewMutation()

  if (isLoading || isLoadingForm) return 'Loading...'

  if (isError) return 'Error'

  const handleAddReview = (review) => {
    addReview({ restaurantId: restaurantId, review })
  }

  return (
    <div className={styles.reviewCardReviews}>
      <h3>Reviews</h3>

      <br />

      {!!data.length && (
        <ul>
          {data.map((review) => (
            <li key={review.id}>
              <Review review={review} />
            </li>
          ))}
        </ul>
      )}

      {userAuth.isAuth && <ReviewForm onAddReview={handleAddReview} />}
    </div>
  )
}
