import { useSelector } from 'react-redux'
import { selectRestaurantsIds } from '../../redux/entities/restaurants/restaurants-slice'
import { getRestaurants } from '../../redux/entities/restaurants/getRestaurants'
import { useRequest } from '../../hooks/useRequest'
import { Tabs } from './Tabs'

export const TabsContainer = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds)

  const requestStatus = useRequest(getRestaurants)

  if (requestStatus === 'pending') {
    return 'Loading...'
  }

  if (requestStatus === 'rejected') {
    return 'Error'
  }

  if (!restaurantsIds.length) {
    return null
  }

  return (
    <section>
      <h1>Restaurants</h1>
      <Tabs ids={restaurantsIds} />
    </section>
  )
}
