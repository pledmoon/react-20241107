import styles from './counter.module.css'

export const Counter = ({ onCounterChange, value = 0, min = 0, max = 999 }) => {
  return (
    <div className={`${styles['counter']}`}>
      <button
        type="button"
        onClick={() => onCounterChange && onCounterChange(value > min ? value - 1 : min)}
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
        onClick={() => onCounterChange && onCounterChange(value < max ? value + 1 : max)}
      >
        +
      </button>
    </div>
  )
}
