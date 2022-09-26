import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import CartItem from '../../types/Cart';
import Product from '../../types/Product';

export interface CartState {
  cart: Array<CartItem>;
  totalPrice: number;
}

const initialState: CartState = {
  cart: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    initialize: (state, action: PayloadAction<Array<CartItem>>) => {
      state.cart = action.payload;
    },
    clear: (state) => {
      state.cart = [];
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      const item = state.cart.find(
        (el) => el.product.slug === action.payload.slug
      );

      if (item) {
        item.count++;
      } else {
        state.cart.push({ product: action.payload, count: 1 });
      }
      state.totalPrice += action.payload.price;
    },
  },
});

export const { initialize, clear, addProduct } = cartSlice.actions;

export default cartSlice.reducer;
