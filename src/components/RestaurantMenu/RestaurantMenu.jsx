import styles from './RestaurantMenu.module.css'
import { RestaurantMenuItemContainer } from '../RestaurantMenuItem/RestaurantMenuItemContainer'

export const RestaurantMenu = ({ menu }) => {
  return (
    <div className={styles.reviewCardMenu}>
      <h3>Menu</h3>
      <br />
      {!!menu.length && (
        <ul>
          {menu.map((id) => (
            <li key={id}>
              <RestaurantMenuItemContainer id={id} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
