import { Outlet } from 'react-router'
import styles from './Tabs.module.css'
import { TabItem } from '../TabItem/TabItem'

export const Tabs = ({ ids }) => {
  return (
    <div className={styles.tabs}>
      <ul className={styles.tabsHeader}>
        {ids.map((id) => (
          <li
            className={styles.tabsItem}
            key={id}
          >
            <TabItem id={id} />
          </li>
        ))}
      </ul>

      <div className={styles.tabsPanes}>{<Outlet />}</div>
    </div>
  )
}
