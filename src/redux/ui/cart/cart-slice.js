import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const { id, val } = payload
      state[id] = val
    },
    removeFromCart: (state, { payload }) => {
      const { id, val } = payload

      state[id] = val

      if (val === 0) delete state[id]
    },
  },
  selectors: {
    selectCartItems: (state) => {
      return Object.keys(state).reduce((acc, id) => {
        acc.push({ id, amount: state[id] })

        return acc
      }, [])
    },
    selectCartItemAmountById: (state, id) => state[id],
  },
})

export { cartSlice }
export const { selectCartItemAmountById, selectCartItems } = cartSlice.selectors
export const { addToCart, removeFromCart } = cartSlice.actions
