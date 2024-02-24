import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import StatusCode from '../utils.js'
import axios from 'axios'

const initialState = {
  data: [],
  status: StatusCode,
}

export const dataSlice = createSlice({
  name: 'basket',
  initialState,
  //reducers: {
  // getProduct: (state, action) => {
  //  state.data = [...state.data, action.payload]
  // },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.data = action.payload
        state.status = StatusCode.LOADING
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = StatusCode.IDLE
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.data = action.payload
        state.status = StatusCode.ERROR
      })
  },
})

export const { set_cart, removeFromBasket, getProduct } = dataSlice.actions

export const selectData = (state) => state.basket.data

export const selectStatus = (state) => state.basket.status

export default dataSlice.reducer

export const getProducts = createAsyncThunk('basket/getBasket', async () => {
  const { data } = await axios.get('http://localhost:4000/api/posts/')
  console.log(data)
  return data
})
