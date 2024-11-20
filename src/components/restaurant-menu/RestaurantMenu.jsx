import { RestaurantMenuItem } from '../restaurant-menu-item/RestaurantMenuItem'

export const RestaurantMenu = ({ menu }) => {
  return (
    <div className="restaurant-card__menu">
      <h3 className="restaurant-card__subheading">Menu</h3>
      {!!menu.length && (
        <ul className="restaurant-card__items">
          {menu.map((menu) => (
            <li
              key={menu?.id}
              className="restaurant-card__item"
            >
              <RestaurantMenuItem name={menu.name} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
