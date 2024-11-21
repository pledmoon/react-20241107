import { useState } from 'react'
import { Counter } from '../counter'

export const RestaurantMenuItem = ({ name }) => {
  const [counterValue, setCounterValue] = useState(0)

  const handleCounterChange = (value) => {
    setCounterValue(value)
  }

  return (
    <>
      <strong>{name}</strong>
      <Counter
        value={counterValue}
        max={5}
        onCounterChange={handleCounterChange}
      />
    </>
  )
}
