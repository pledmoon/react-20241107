import { useParams } from 'react-router'
import { RestaurantMenu } from '../RestaurantMenu/RestaurantMenu'
import { useGetDishesByRestaurantIdQuery } from '@/redux/services/api'

export const RestaurantDishes = () => {
  const { restaurantId } = useParams()

  const { data, isLoading, isError } = useGetDishesByRestaurantIdQuery(restaurantId)

  if (isLoading) return 'Loading...'

  if (isError) return 'Error'

  return <RestaurantMenu menu={data} />
}
