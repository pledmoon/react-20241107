import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { getReviews } from './getReviews'

const entityAdapter = createEntityAdapter()

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectReviewsIds: (state) => state.ids,
    selectReviewById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder.addCase(getReviews.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload)
    }),
})

export const { selectReviewsIds, selectReviewById } = reviewsSlice.selectors
