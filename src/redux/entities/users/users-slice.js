import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { getUsers } from './getUsers'

const entityAdapter = createEntityAdapter()

export const usersSlice = createSlice({
  name: 'users',
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectUsersIds: (state) => state.ids,
    selectUserById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload)
    }),
})

export const { selectUsersIds, selectUserById } = usersSlice.selectors
