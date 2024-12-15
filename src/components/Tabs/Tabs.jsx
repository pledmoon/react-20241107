import { Outlet } from 'react-router'
import styles from './Tabs.module.css'
import { TabItem } from '../TabItem/TabItem'
import { useGetRestaurantsQuery } from '@/redux/services/api'

export const Tabs = () => {
  const { data, isLoading, isError } = useGetRestaurantsQuery()

  if (isLoading) return 'Loading...'

  if (isError) return 'Error'

  if (!data.length) return null

  return (
    <div className={styles.tabs}>
      <ul className={styles.tabsHeader}>
        {data.map((restaurant) => (
          <li
            className={styles.tabsItem}
            key={restaurant.id}
          >
            <TabItem
              name={restaurant.name}
              id={restaurant.id}
            />
          </li>
        ))}
      </ul>

      <div className={styles.tabsPanes}>{<Outlet />}</div>
    </div>
  )
}
