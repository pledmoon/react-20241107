import { useSelector } from 'react-redux'
import { selectReviewById } from '../../redux/entities/reviews-slice'
import { selectUserById } from '../../redux/entities/users-slice'
import { Review } from './Review'

export const ReviewContainer = ({ id }) => {
  const { userId, text, rating } = useSelector((state) => selectReviewById(state, id))
  const { name } = useSelector((state) => selectUserById(state, userId))

  const review = {
    text,
    rating,
    name,
  }

  return <Review review={review} />
}
