import { useSelector } from 'react-redux'
import { selectCartItems, selectCartItemAmountById } from '../../redux/ui/cart/cart-slice'
import { selectDishById } from '../../redux/entities/dishes-slice'

export const CartWidget = () => {
  const items = useSelector(selectCartItems)

  return (
    !!items.length && (
      <div>
        <h3>Cart</h3>
        {items.map(({ id }) => (
          <CartItem
            key={id}
            id={id}
          />
        ))}
      </div>
    )
  )
}

const CartItem = ({ id }) => {
  const { name } = useSelector((state) => selectDishById(state, id))
  const total = useSelector((state) => selectCartItemAmountById(state, id))

  return (
    <div>
      {name}: <strong>{total}</strong>
    </div>
  )
}
