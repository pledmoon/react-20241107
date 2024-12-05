import { useSelector } from 'react-redux'
import { selectCartItems } from '../../redux/ui/cart/cart-slice'
import { CartItem } from '../CartItem/CartItem'

export const CartWidget = () => {
  const items = useSelector(selectCartItems)

  if (!items.length) return null

  return (
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
}
