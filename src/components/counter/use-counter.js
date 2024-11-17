import { useState } from 'react'

export const useCounter = () => {
  const [value, setValue] = useState(0)

  const handleSubtract = () => {
    setValue((currentValue) => (currentValue > 0 ? currentValue - 1 : 0))
  }

  const handleAdd = () => {
    setValue((currentValue) => (currentValue < 5 ? currentValue + 1 : 5))
  }

  return {
    value,
    handleSubtract,
    handleAdd,
  }
}
