// src/store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
  addToCart: (state, action) => {
  const item = state.find(p => p.id === action.payload.id);
  if (item) {
  item.quantity += action.payload.quantity || 1;
  } else {
  state.push({ ...action.payload, quantity: action.payload.quantity || 1 });
  }
  },
  removeFromCart: (state, action) => {
  return state.filter(item => item.id !== action.payload);
  },
  updateQuantity: (state, action) => {
  const item = state.find(p => p.id === action.payload.id);
  if (item) {
  item.quantity = action.payload.quantity;
  }
  },
  clearCart: () => {
  return [];
  },
  },
});

// Selectors for cart data
export const selectCart = state => state.cart;

export const selectCartTotal = state =>
state.cart.reduce((total, item) => total + item.quantity * parseFloat(item.price), 0);

export const selectCartCount = state =>
state.cart.reduce((total, item) => total + item.quantity, 0);

export const {
addToCart,
removeFromCart,
updateQuantity,
clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
