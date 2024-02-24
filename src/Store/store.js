'use client'
import { configureStore } from '@reduxjs/toolkit'

import cartSlice from '../reducer/sliceReducer'
import dataSlice from '../reducer/cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    basket: dataSlice,
  },
})
