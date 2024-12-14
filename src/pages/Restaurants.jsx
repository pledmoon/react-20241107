import { Outlet } from 'react-router'
import { Tabs } from '../components/Tabs/Tabs'

export const Restaurants = () => {
  return (
    <Tabs>
      <Outlet />
    </Tabs>
  )
}
