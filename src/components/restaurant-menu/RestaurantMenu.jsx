import { Counter } from '../counter'

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
              <strong>{menu?.name}</strong>
              <Counter />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
