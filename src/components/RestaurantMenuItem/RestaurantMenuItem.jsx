import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import { Counter } from '../Counter/Counter'
import styles from './RestaurantMenuItem.module.css'
import { useUserContext } from '../../contexts/UserContext'
import { addToCart, removeFromCart, selectCartItemAmountById } from '../../redux/ui/cart/cart-slice'

export const RestaurantMenuItem = ({ name, id }) => {
  const { userAuth } = useUserContext()

  const dispatch = useDispatch()
  const counterValue = useSelector((state) => selectCartItemAmountById(state, id)) || 0

  const increment = (val) => dispatch(addToCart({ id, val }))
  const decrement = (val) => dispatch(removeFromCart({ id, val }))

  return (
    <div className={styles.restaurantCardItem}>
      <Link to={`/dish/${id}`}>{name}</Link>

      {userAuth.isAuth && (
        <Counter
          value={counterValue}
          max={5}
          increment={increment}
          decrement={decrement}
          className={styles.restaurantCardCounter}
        />
      )}
    </div>
  )
}
