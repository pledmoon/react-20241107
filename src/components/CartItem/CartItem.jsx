import { useSelector } from 'react-redux'
import { selectDishById } from '../../redux/entities/dishes/dishes-slice'
import { selectCartItemAmountById } from '../../redux/ui/cart/cart-slice'

export const CartItem = ({ id }) => {
  const { name } = useSelector((state) => selectDishById(state, id))
  const total = useSelector((state) => selectCartItemAmountById(state, id))

  return (
    <div>
      {name}: <strong>{total}</strong>
    </div>
  )
}
