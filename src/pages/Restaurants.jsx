import { Outlet } from 'react-router'
import { TabsContainer } from '../components/Tabs/TabsContainer'

export const Restaurants = () => {
  return (
    <TabsContainer>
      <Outlet />
    </TabsContainer>
  )
}
