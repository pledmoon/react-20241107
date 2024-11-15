import { useState } from 'react'

export const useCounter = () => {
  const [value, setValue] = useState({ value: 0 })

  const handleSubtract = () => {
    setValue((current) => ({
      ...current,
      value: current.value > 0 ? current.value - 1 : 0,
    }))
  }

  const handleAdd = () => {
    setValue((current) => ({
      ...current,
      value: current.value < 5 ? current.value + 1 : 5,
    }))
  }

  return {
    value: value.value,
    handleSubtract,
    handleAdd,
  }
}
