import { NavLink } from 'react-router'
import styles from '../Tabs/Tabs.module.css'

export const TabItem = ({ name, id }) => {
  return (
    <NavLink
      to={id}
      className={styles.tabsBtn}
    >
      {name}
    </NavLink>
  )
}
