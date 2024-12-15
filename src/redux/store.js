import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './ui/cart/cart-slice'
import { apiSlice } from '@/redux/services/api'

export const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})
