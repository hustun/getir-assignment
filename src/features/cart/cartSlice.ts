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
      state.totalPrice = 0;
    },
    // handles adding and increasing the count of a product, also handles price increase
    addProduct: (state, action: PayloadAction<Product>) => {
      const item = state.cart.find(
        (el) => el.product.slug === action.payload.slug
      );

      if (item) {
        item.count++;
      } else {
        state.cart.push({ product: action.payload, count: 1 });
      }
      state.totalPrice = +(state.totalPrice + action.payload.price).toFixed(2);
    },
    // handles decreasing the count of the product(and removing if needed), also handles price decrease
    removeProduct: (state, action: PayloadAction<Product>) => {
      const item = state.cart.find(
        (el) => el.product.slug === action.payload.slug
      );

      if (item) {
        item.count--;

        if (item.count === 0) {
          state.cart = state.cart.filter((cartItem) => cartItem !== item);
        }

        state.totalPrice = +(state.totalPrice - action.payload.price).toFixed(
          2
        );
      }
    },
  },
});

export const { initialize, clear, addProduct, removeProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
