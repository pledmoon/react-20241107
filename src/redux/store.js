import { configureStore } from '@reduxjs/toolkit'
import { restaurantsSlice } from './entities/restaurants/restaurants-slice'
import { dishesSlice } from './entities/dishes/dishes-slice'
import { reviewsSlice } from './entities/reviews/reviews-slice'
import { usersSlice } from './entities/users/users-slice'
import { cartSlice } from './ui/cart/cart-slice'
import { requestSlice } from './ui/request/request-slice'

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
  },
})
