import styles from './RestaurantMenu.module.css'
import { RestaurantMenuItem } from '../RestaurantMenuItem/RestaurantMenuItem'

export const RestaurantMenu = ({ menu }) => {
  return (
    <div className={styles.reviewCardMenu}>
      <h3>Menu</h3>

      <br />

      {!!menu.length && (
        <ul>
          {menu.map((menuItem) => (
            <RestaurantMenuItem
              key={menuItem.id}
              menuItem={menuItem}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
