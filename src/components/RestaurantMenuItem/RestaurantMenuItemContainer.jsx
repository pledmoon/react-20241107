import { useSelector } from 'react-redux'
import { selectDishById } from '../../redux/entities/dishes-slice'
import { RestaurantMenuItem } from './RestaurantMenuItem'

export const RestaurantMenuItemContainer = ({ id }) => {
  const { name } = useSelector((state) => selectDishById(state, id))

  return <RestaurantMenuItem name={name} />
}
