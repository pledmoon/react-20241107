import { useSelector } from 'react-redux'
import { selectDishById } from '../../redux/entities/dishes/dishes-slice'
import { RestaurantMenuItem } from './RestaurantMenuItem'
import { getDishes } from '../../redux/entities/dishes/getDishes'
import { useRequest } from '../../hooks/useRequest'

export const RestaurantMenuItemContainer = ({ id }) => {
  const requestStatus = useRequest(getDishes)

  const dish = useSelector((state) => selectDishById(state, id))

  if (requestStatus === 'pending') {
    return 'Loading...'
  }

  if (requestStatus === 'rejected') {
    return 'Error'
  }

  if (!dish) {
    return null
  }

  const { name } = dish

  return (
    <RestaurantMenuItem
      name={name}
      id={id}
    />
  )
}
