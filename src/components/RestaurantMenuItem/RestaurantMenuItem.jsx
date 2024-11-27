import { useState, useContext } from 'react'
import { Counter } from '../Counter/Counter'
import styles from './RestaurantMenuItem.module.css'
import { UserContext } from '../../contexts/UserContext.js'

export const RestaurantMenuItem = ({ name }) => {
  const { username } = useContext(UserContext)

  const [counterValue, setCounterValue] = useState(0)

  const handleCounterChange = (value) => {
    setCounterValue(value)
  }

  return (
    <div className={styles.restaurantCardItem}>
      <strong>{name}</strong>
      {username && (
        <Counter
          value={counterValue}
          max={5}
          onCounterChange={handleCounterChange}
          className={styles.restaurantCardCounter}
        />
      )}
    </div>
  )
}
