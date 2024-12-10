import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurants-slice'
import { RestaurantMenu } from '../RestaurantMenu/RestaurantMenu'

export const RestaurantDishes = () => {
  const { restaurantId } = useParams()

  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId))

  const { menu } = restaurant

  return <RestaurantMenu menu={menu} />
}
