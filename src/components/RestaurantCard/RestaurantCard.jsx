import { useSelector } from 'react-redux'
import { selectRestaurantById } from '../../redux/entities/restaurants-slice'

import { useThemeContext } from '../../contexts/ThemeContext'
import { useUserContext } from '../../contexts/UserContext'
import classNames from 'classnames'
import styles from './RestaurantCard.module.css'
import { RestaurantReviews } from '../RestaurantReviews/RestaurantReviews'
import { RestaurantMenu } from '../RestaurantMenu/RestaurantMenu'
import { ReviewForm } from '../ReviewForm/ReviewForm'

export const RestaurantCard = ({ id }) => {
  const { theme } = useThemeContext()
  const { userAuth } = useUserContext()

  const { name, menu, reviews } = useSelector((state) => selectRestaurantById(state, id))

  return (
    <article className={classNames(styles.restaurantCard, { [styles.isDark]: theme === 'dark' })}>
      <h2 className={styles.restaurantCardHeading}>{name}</h2>
      {!!menu.length && <RestaurantMenu menu={menu} />}
      {!!reviews.length && <RestaurantReviews reviews={reviews} />}
      <hr />
      {userAuth.isAuth && <ReviewForm />}
    </article>
  )
}
