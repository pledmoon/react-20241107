import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { getDishes } from '../dishes/getDishes'

const entityAdapter = createEntityAdapter()

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectDishesIds: (state) => state.ids,
    selectDishById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder.addCase(getDishes.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload)
    }),
})

export const { selectDishesIds, selectDishById } = dishesSlice.selectors
