import { useState } from 'react'

import { useSelector } from 'react-redux'
import { selectRestaurantsIds } from '../redux/entities/restaurants-slice'
import { Tabs } from '../components/Tabs/Tabs'
import { RestaurantCard } from '../components/RestaurantCard/RestaurantCard'

export const RestaurantsPage = ({ ...rest }) => {
  const restaurantsIds = useSelector(selectRestaurantsIds)
  const [currentTabId, setCurrentTabId] = useState(restaurantsIds[0] ?? null)

  const handleTabChange = (tabId) => {
    setCurrentTabId(tabId)
  }

  return restaurantsIds.length ? (
    <section {...rest}>
      <h1>Restaurants</h1>

      <Tabs
        ids={restaurantsIds}
        currentTabId={currentTabId}
        onTabChange={handleTabChange}
      >
        {currentTabId && (
          <RestaurantCard
            key={currentTabId}
            id={currentTabId}
          />
        )}
      </Tabs>
    </section>
  ) : null
}
