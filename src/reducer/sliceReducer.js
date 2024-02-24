import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  product: [],
  basket: null,
  shipping: [],
  paymentMethod: '',
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
      state.basket = action.payload
    },
    getSignOut: (state, action) => {
      state.basket = null
    },

    getShipping: (state, action) => {
      state.shipping = action.type.payload
    },
    getPayment: (state, action) => {
      state.paymentMethod = action.type.payload
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
} = cartSlice.actions
export const selectCart = (state) => state.cart.items
export const selectSignin = (state) => state.cart.basket
export const selectProduct = (state) => state.cart.product
export const selectShipping = (state) => state.cart.shipping
export const selectPayment = (state) => state.cart.paymentMethod

export const selectTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price, 0)
export default cartSlice.reducer
