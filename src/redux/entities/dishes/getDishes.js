import { createAsyncThunk } from '@reduxjs/toolkit'
import { selectDishesIds } from './dishes-slice'

export const getDishes = createAsyncThunk(
  'dishes/getDishes',
  async (_, { rejectWithValue }) => {
    const response = await fetch('http://localhost:3001/api/dishes')
    const result = await response.json()
    console.log(result)
    if (!result.length) {
      rejectWithValue('dishes/getDishes no data')
      return
    }

    return result
  },
  {
    condition: (_, { getState }) => {
      return selectDishesIds(getState()).length === 0
    },
  },
)
