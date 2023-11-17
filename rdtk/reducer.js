import { createSlice } from '@reduxjs/toolkit'

export const Reducer = createSlice({
  name: 'number',
  initialState: {
    stateR: 0,
  },
  reducers: {
    changeState: (state, action) => {
      state.stateR = action.payload
    },
    resetState: (state) => {
      state.stateR = 0
    },
  },
})

export const { changeState, resetState } = Reducer.actions

export default Reducer.reducer
