import { createAsyncThunk } from '@reduxjs/toolkit'

export const getReviews = createAsyncThunk('dishes/getReviews', async (_, { rejectWithValue }) => {
  const response = await fetch('http://localhost:3001/api/reviews?restaurantId=:restaurantId')
  const result = await response.json()

  if (!result.length) {
    rejectWithValue('dishes/getReviews no data')
    return
  }

  return result
})
