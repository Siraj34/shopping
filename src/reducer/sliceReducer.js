import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  product: [],
  sign: null,
  shipping: [],
  paymentMethod: '',
  clear: [],
  orders: [],
  filter: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    set_cart: (state, action) => {
      state.items = [...state.items, action.payload]
      // localStorage.setItem('items')
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      )

      let newBasket = [...state.items]

      if (index >= 0) {
        // The item exist in basket
        newBasket.splice(index, 1)
      } else {
        console.warn(
          `Can't remove product  (id: ${action.payload.id}) as it is not present in the cart`
        )
      }

      state.items = newBasket
    },

    getAll: (state, action) => {
      state.product = action.payload
    },

    getSignin: (state, action) => {
      state.sign = action.payload
    },
    getSignOut: (state, action) => {
      state.sign = null
    },

    getShipping: (state, action) => {
      state.shipping = action.payload
    },
    getPayment: (state, action) => {
      state.paymentMethod = action.payload
    },

    getClear: (state, action) => {
      state.clear = action.payload
    },
    getOrders: (state, action) => {
      state.orders = action.payload
    },

    getFilter: (state, action) => {
      state.filter = action.payload
    },
  },
})

export const {
  set_cart,
  removeFromBasket,
  getAll,
  getBasket,
  getSignin,
  getSignOut,
  getShipping,
  getPayment,
  getClear,
  getOrders,
  getFilter,
} = cartSlice.actions
export const selectCart = (state) => state.cart.items
export const selectSignin = (state) => state.cart.sign
export const selectProduct = (state) => state.cart.product
export const selectShipping = (state) => state.cart.shipping
export const selectPayment = (state) => state.cart.paymentMethod
export const selectClear = (state) => state.cart.clear
export const selectOrders = (state) => state.cart.orders
export const selectFilter = (state) => state.cart.filter

export const selectTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price, 0)

export default cartSlice.reducer
