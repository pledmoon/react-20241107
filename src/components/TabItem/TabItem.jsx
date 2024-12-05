import { useSelector } from 'react-redux'
import { NavLink } from 'react-router'
import { selectRestaurantById } from '../../redux/entities/restaurants-slice'
import styles from '../Tabs/Tabs.module.css'

export const TabItem = ({ id }) => {
  const { name } = useSelector((state) => selectRestaurantById(state, id))

  return (
    <NavLink
      to={id}
      className={styles.tabsBtn}
    >
      {name}
    </NavLink>
  )
}
