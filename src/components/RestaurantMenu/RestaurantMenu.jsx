import styles from './RestaurantMenu.module.css'
import { RestaurantMenuItemContainer } from '../RestaurantMenuItem/RestaurantMenuItemContainer'

export const RestaurantMenu = ({ menu }) => {
  return (
    <div className={styles.reviewCardMenu}>
      <h3 className={styles.reviewCardHeading}>Menu</h3>
      {!!menu.length && (
        <ul>
          {menu.map((menu) => (
            <li key={menu}>
              <RestaurantMenuItemContainer id={menu} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
