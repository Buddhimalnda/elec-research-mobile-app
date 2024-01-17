import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, actions) => {
      state.user = actions.payload
    },
    logout: (state) => {
      state.user = null
    },
    register: (state, actions) => {
        state.user = actions.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { login, logout, register } = authSlice.actions

export default authSlice.reducer