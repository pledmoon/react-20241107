import { RestaurantCard } from '../restaurant-card/RestaurantCard.jsx'

export const Tabs = ({ restaurants, currentTab, onTabChange }) => {
  return (
    <div className="tabs">
      <ul className="tabs__header">
        {restaurants.map((tab, index) => (
          <li
            className="tabs__item"
            key={tab.id}
          >
            <button
              type="button"
              onClick={() => onTabChange(index)}
              className={`tabs__btn ${currentTab === index ? 'is-active' : ''}`}
            >
              {tab.name}
            </button>
          </li>
        ))}
      </ul>

      <div className="tabs__panes">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard
            restaurant={restaurant}
            key={restaurant.id}
            isHidden={currentTab !== index}
          />
        ))}
      </div>
    </div>
  )
}
