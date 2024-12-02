import { useSelector } from 'react-redux'
import { selectRestaurantById } from '../../redux/entities/restaurants-slice'
import { RestaurantCard } from './RestaurantCard'

export const RestaurantCardContainer = ({ id }) => {
  const { name, menu, reviews } = useSelector((state) => selectRestaurantById(state, id))

  const data = {
    name,
    menu,
    reviews,
  }

  return <RestaurantCard data={data} />
}
