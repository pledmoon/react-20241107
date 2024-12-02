import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectRestaurantsIds } from '../../redux/entities/restaurants-slice'
import { Tabs } from './Tabs'
import { RestaurantCardContainer } from '../RestaurantCard/RestaurantCardContainer'

export const TabsContainer = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds)
  const [currentTabId, setCurrentTabId] = useState(restaurantsIds[0] ?? null)

  const handleTabChange = (tabId) => {
    setCurrentTabId(tabId)
  }

  return restaurantsIds.length ? (
    <section>
      <h1>Restaurants</h1>

      <Tabs
        ids={restaurantsIds}
        currentTabId={currentTabId}
        onTabChange={handleTabChange}
      >
        {currentTabId && (
          <RestaurantCardContainer
            key={currentTabId}
            id={currentTabId}
          />
        )}
      </Tabs>
    </section>
  ) : null
}
