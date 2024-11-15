import { useState } from 'react'
import { Tabs } from '../components/tabs/Tabs'

export const RestaurantsPage = ({ restaurants, ...rest }) => {
  const [tab, setTab] = useState(0)

  const handleTabChange = (index) => {
    setTab(index)
  }

  return restaurants.length ? (
    <section {...rest}>
      <h1>Restaurants</h1>

      <Tabs
        restaurants={restaurants}
        currentTab={tab}
        onTabChange={handleTabChange}
      />
    </section>
  ) : null
}
