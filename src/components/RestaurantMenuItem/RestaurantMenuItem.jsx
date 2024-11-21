import { useState } from 'react'
import { Counter } from '../Counter/Counter'
import styles from './RestaurantMenuItem.module.css'

export const RestaurantMenuItem = ({ name }) => {
  const [counterValue, setCounterValue] = useState(0)

  const handleCounterChange = (value) => {
    setCounterValue(value)
  }

  return (
    <div className={styles.restaurantCard__item}>
      <strong>{name}</strong>
      <Counter
        value={counterValue}
        max={5}
        onCounterChange={handleCounterChange}
        className="restaurantCard__counter"
      />
    </div>
  )
}
