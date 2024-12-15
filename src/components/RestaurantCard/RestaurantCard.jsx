import { useThemeContext } from '../../contexts/ThemeContext'
import { useParams, NavLink, Outlet } from 'react-router'
import classNames from 'classnames'
import styles from './RestaurantCard.module.css'
import { useGetRestaurantByIdQuery } from '@/redux/services/api'

export const RestaurantCard = () => {
  const { theme } = useThemeContext()

  const { restaurantId } = useParams()
  const { data, isLoading, isError } = useGetRestaurantByIdQuery(restaurantId)

  if (isLoading) return 'Loading...'

  if (isError) return 'Error'

  const { name } = data

  return (
    <>
      <NavLink to="menu">Menu</NavLink>
      <NavLink to="reviews">Reviews</NavLink>

      <br />
      <br />

      <h2>{name}</h2>

      <article className={classNames(styles.restaurantCard, { [styles.isDark]: theme === 'dark' })}>
        <Outlet />
      </article>
    </>
  )
}
