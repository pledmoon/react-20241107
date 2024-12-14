import { useSelector } from 'react-redux'
import { selectCartItemAmountById } from '../../redux/ui/cart/cart-slice'
import { useGetDishByDishIdQuery } from '@/redux/services/api'

export const CartItem = ({ id }) => {
  const total = useSelector((state) => selectCartItemAmountById(state, id))

  const { data, isLoading, isError } = useGetDishByDishIdQuery(id)

  if (isLoading) return 'Loading...'

  if (isError) return 'Error'

  const { name } = data

  return (
    <div>
      {name}: <strong>{total}</strong>
    </div>
  )
}
