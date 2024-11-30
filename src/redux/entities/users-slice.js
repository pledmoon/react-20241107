import { createSlice } from '@reduxjs/toolkit'
import { normalizedUsers } from '../../../data/normalized-mock'

const initialState = {
  entities: normalizedUsers.reduce((acc, user) => {
    acc[user.id] = user

    return acc
  }, {}),

  ids: normalizedUsers.map((user) => user.id),
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  selectors: {
    selectUsersIds: (state) => state.ids,
    selectUserById: (state, id) => state.entities[id],
  },
})

export const { selectUsersIds, selectUserById } = usersSlice.selectors
