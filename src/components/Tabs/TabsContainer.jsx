import { useSelector } from 'react-redux'
import { selectRestaurantsIds } from '../../redux/entities/restaurants-slice'
import { Tabs } from './Tabs'

export const TabsContainer = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds)

  return restaurantsIds.length ? (
    <section>
      <h1>Restaurants</h1>
      <Tabs ids={restaurantsIds} />
    </section>
  ) : null
}
