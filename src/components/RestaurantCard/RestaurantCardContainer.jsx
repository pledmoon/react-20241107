import { useSelector } from 'react-redux'
import { useParams, NavLink, Outlet } from 'react-router'
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurants-slice'
import { RestaurantCard } from './RestaurantCard'

export const RestaurantCardContainer = () => {
  const { restaurantId } = useParams()
  const { name } = useSelector((state) => selectRestaurantById(state, restaurantId))

  return (
    <>
      <NavLink to="menu">Menu</NavLink>
      <NavLink to="reviews">Reviews</NavLink>

      <br />
      <br />

      <RestaurantCard>
        <h2>{name}</h2>
        <Outlet />
      </RestaurantCard>
    </>
  )
}
