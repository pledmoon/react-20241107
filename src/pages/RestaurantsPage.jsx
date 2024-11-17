import { useState } from 'react'
import { Tabs } from '../components/tabs'
import { RestaurantCard } from '../components/restaurant-card'

export const RestaurantsPage = ({ restaurants, ...rest }) => {
  const [currentTabId, setCurrentTabId] = useState(restaurants[0]?.id ?? null)

  const currentTab = restaurants.find((tab) => tab.id === currentTabId)

  const handleTabChange = (tabId) => {
    setCurrentTabId(tabId)
  }

  return restaurants.length ? (
    <section {...rest}>
      <h1>Restaurants</h1>

      <Tabs
        data={restaurants}
        currentTabId={currentTabId}
        onTabChange={handleTabChange}
      >
        {currentTab && <RestaurantCard restaurant={currentTab} />}
      </Tabs>
    </section>
  ) : null
}
