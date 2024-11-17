import { useCounter } from './use-counter'

export const Counter = () => {
  const { value, handleSubtract, handleAdd } = useCounter()

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
