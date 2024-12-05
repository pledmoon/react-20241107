import styles from './counter.module.css'
import classNames from 'classnames'
import { UIButton } from '../UIButton/UIButton'

export const Counter = ({ increment, decrement, value = 0, min = 0, max = 999, className }) => {
  const classes = classNames(className, styles.counter)

  return (
    <div className={classes}>
      <UIButton
        type="button"
        onClick={() => decrement && decrement(value > min ? value - 1 : min)}
      >
        -
      </UIButton>
      <input
        type="number"
        value={value}
        readOnly
        maxLength="3"
      />
      <UIButton
        type="button"
        onClick={() => increment && increment(value < max ? value + 1 : max)}
      >
        +
      </UIButton>
    </div>
  )
}
