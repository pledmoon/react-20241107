import { useSelector } from 'react-redux'
import { selectReviewById } from '../../redux/entities/reviews-slice'
import { selectUserById } from '../../redux/entities/users-slice'

export const Review = ({ id }) => {
  const { userId, text, rating } = useSelector((state) => selectReviewById(state, id))
  const { name } = useSelector((state) => selectUserById(state, userId))

  return (
    <>
      <strong>{name}</strong>
      <div>
        {text} ({rating}/5)
      </div>
    </>
  )
}
