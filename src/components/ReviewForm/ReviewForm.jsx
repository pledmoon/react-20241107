import { useReducer } from 'react'
import { Counter } from '../Counter/Counter'
import styles from './ReviewForm.module.css'

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

export const ReviewForm = () => {
  const [{ name, message, rating }, dispatch] = useReducer(reducer, INITIAL_STATE)

  const handleCounterChange = (value) => {
    dispatch({ type: SET_RATING_ACTION, payload: value })
  }

  return (
    <>
      <h3>Review Form</h3>
      <form
        action="/"
        name="review"
        method="POST"
        className={styles.reviewForm}
        onSubmit={(e) => {
          e.preventDefault()
        }}
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
          onCounterChange={handleCounterChange}
          className="reviewForm__counter"
        />

        <button
          type="button"
          onClick={() => dispatch({ type: RESET_ACTION })}
        >
          Reset
        </button>

        <ul>
          {name && <li>Username: {name}</li>}
          {message && <li>Message: {message}</li>}
          <li>User rating: {rating}</li>
        </ul>
      </form>
    </>
  )
}
