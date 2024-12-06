import { NavLink } from 'react-router'
import styles from './TopNav.module.css'

export const TopNav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/restaurants">Restaurants</NavLink>
        </li>
      </ul>
    </nav>
  )
}
