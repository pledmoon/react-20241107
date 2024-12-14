import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Counter } from '../components/Counter/Counter'
import { useUserContext } from '../contexts/UserContext'
import { addToCart, removeFromCart, selectCartItemAmountById } from '../redux/ui/cart/cart-slice'
import { useGetDishByDishIdQuery } from '@/redux/services/api'

export const DishDetail = () => {
  const { userAuth } = useUserContext()

  const { dishId } = useParams()
  const { data, isLoading, isError } = useGetDishByDishIdQuery(dishId)

  const dispatch = useDispatch()
  const counterValue = useSelector((state) => selectCartItemAmountById(state, dishId)) || 0

  const increment = (val) => dispatch(addToCart({ id: dishId, val }))
  const decrement = (val) => dispatch(removeFromCart({ id: dishId, val }))

  if (isLoading) return 'Loading...'

  if (isError) return 'Error'

  const { name, ingredients, price } = data

  return (
    <div>
      <h1>{name}</h1>
      <br />
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>- {ingredient}</li>
        ))}
      </ul>
      <br />
      <div>
        Price: <strong>{price}</strong>
      </div>
      <br />
      {userAuth.isAuth && (
        <Counter
          value={counterValue}
          max={5}
          increment={increment}
          decrement={decrement}
        />
      )}
    </div>
  )
}
