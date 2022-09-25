import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Product from '../../types/Product';

export interface ProductState {
  products: Array<Product>;
}

const initialState: ProductState = {
  products: [
    {
      tags: ['Trees'],
      price: 10.99,
      name: 'Handcrafted Trees Mug',
      description:
        'enim corporis voluptatibus laudantium possimus alias dolorem voluptatem similique aut aliquam voluptatem voluptatem omnis id consequatur',
      slug: 'Handcrafted-Trees-Mug',
      added: 1485723766805,
      manufacturer: 'OHara-Group',
      itemType: 'mug',
    },
  ],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    initialize: (state, action: PayloadAction<Array<Product>>) => {
      state.products = action.payload;
    },
    clear: (state) => {
      state.products = [];
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
  },
});

export const { initialize, clear, addProduct } = productSlice.actions;

export default productSlice.reducer;
