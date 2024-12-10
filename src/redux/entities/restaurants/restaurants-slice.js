import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { getRestaurants } from './getRestaurants'

const entityAdapter = createEntityAdapter()

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload)
    }),
})

export const { selectRestaurantsIds, selectRestaurantById } = restaurantsSlice.selectors
