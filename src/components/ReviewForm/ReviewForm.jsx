import { useReducer } from 'react'
import { Counter } from '../Counter/Counter'
import styles from './ReviewForm.module.css'
import { UIButton } from '../UIButton/UIButton'

const INITIAL_STATE = {
  name: '',
  message: '',
  rating: 5,
}

const SET_NAME_ACTION = 'SET_NAME'
const SET_MESSAGE_ACTION = 'SET_MESSAGE'
const SET_RATING_ACTION = 'SET_RATING'
const RESET_ACTION = 'RESET'

function reducer(state, { type, payload }) {
  switch (type) {
    case SET_NAME_ACTION:
      return { ...state, name: payload }
    case SET_MESSAGE_ACTION:
      return { ...state, message: payload }
    case SET_RATING_ACTION:
      return { ...state, rating: payload }
    case RESET_ACTION:
      return { ...INITIAL_STATE }
    default:
      throw new Error(`Unhandled action type ${type}`)
  }
}

export const ReviewForm = ({ onAddReview }) => {
  const [{ name, message, rating }, dispatch] = useReducer(reducer, INITIAL_STATE)

  const increment = (value) => {
    dispatch({ type: SET_RATING_ACTION, payload: value })
  }

  const decrement = (value) => {
    dispatch({ type: SET_RATING_ACTION, payload: value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    const review = {
      name,
      text: message,
      rating,
      userId: 'a304959a-76c0-4b34-954a-b38dbf310360',
    }

    onAddReview(review)

    dispatch({ type: RESET_ACTION })
  }

  return (
    <div className={styles.reviewForm}>
      <h3 className={styles.reviewFormHeading}>Review Form</h3>
      <form
        action="/"
        name="review"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="f1">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            id="f1"
            value={name}
            onChange={({ target }) => dispatch({ type: SET_NAME_ACTION, payload: target.value })}
          />
        </div>

        <div>
          <label htmlFor="f2">Message:</label>
          <textarea
            rows="7"
            name="message"
            placeholder="Type your message"
            id="f2"
            value={message}
            onChange={({ target }) => dispatch({ type: SET_MESSAGE_ACTION, payload: target.value })}
          />
        </div>

        <Counter
          min={1}
          max={5}
          value={rating}
          increment={increment}
          decrement={decrement}
          className={styles.reviewFormCounter}
        />

        <UIButton
          type="button"
          onClick={() => dispatch({ type: RESET_ACTION })}
        >
          Reset
        </UIButton>

        <br />

        <UIButton type="submit">Submit</UIButton>

        <ul>
          {name && <li>Username: {name}</li>}
          {message && <li>Message: {message}</li>}
          <li>User rating: {rating}</li>
        </ul>
      </form>
    </div>
  )
}
