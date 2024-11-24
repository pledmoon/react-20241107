import { RestaurantMenuItem } from '../RestaurantMenuItem/RestaurantMenuItem'
import styles from './RestaurantMenu.module.css'

export const RestaurantMenu = ({ menu }) => {
  return (
    <div className={styles.reviewCardMenu}>
      <h3 className={styles.reviewCardHeading}>Menu</h3>
      {!!menu.length && (
        <ul>
          {menu.map((menu) => (
            <li key={menu?.id}>
              <RestaurantMenuItem name={menu.name} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
