import { useSelector } from 'react-redux'
import { selectReviewById } from '../../redux/entities/reviews/reviews-slice'
import { selectUserById } from '../../redux/entities/users/users-slice'
import { Review } from './Review'
import { useRequest } from '@/hooks/useRequest'
import { getReviews } from '@/redux/entities/reviews/getReviews'
import { getUsers } from '@/redux/entities/users/getUsers'

export const ReviewContainer = ({ id }) => {
  const reviewsStatus = useRequest(getReviews)
  const usersStatus = useRequest(getUsers)

  const review = useSelector((state) => selectReviewById(state, id))

  if (!review) {
    return null
  }

  const { userId, text, rating } = useSelector((state) => selectReviewById(state, id))
  const { name } = useSelector((state) => selectUserById(state, userId))

  const reviewData = {
    text,
    rating,
    name,
  }

  return <Review review={reviewData} />
}
