//import { useState } from 'react'
import { useCounter } from './use-counter'

export const Counter = () => {
  const { value, handleSubtract, handleAdd } = useCounter()

  /*
  const [value, setValue] = useState(0)

  const handleSubtract = () => {
    setValue((current) => (current > 0 ? current - 1 : 0))
  }
  const handleAdd = () => {
    setValue((current) => (current < 5 ? current + 1 : 5))
  }
  */

  return (
    <div className="counter">
      <button
        type="button"
        onClick={handleSubtract}
      >
        -
      </button>
      <input
        type="number"
        value={value}
        readOnly
        maxLength="3"
      />
      <button
        type="button"
        onClick={handleAdd}
      >
        +
      </button>
    </div>
  )
}
