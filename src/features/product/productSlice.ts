import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Product from '../../types/Product';

export interface ProductState {
  products: Array<Product>;
  filteredProducts: Array<Product>;
  brandFilters: Array<string>;
  tagFilters: Array<string>;
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
  filteredProducts: [
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
  brandFilters: [],
  tagFilters: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    initialize: (state, action: PayloadAction<Array<Product>>) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    clear: (state) => {
      state.products = [];
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    addBrandFilter: (state, action: PayloadAction<string>) => {
      state.brandFilters.push(action.payload);
      productSlice.caseReducers.filter(state);
    },
    addTagFilter: (state, action: PayloadAction<string>) => {
      state.tagFilters.push(action.payload);
      productSlice.caseReducers.filter(state);
    },
    removeBrandFilter: (state, action: PayloadAction<string>) => {
      state.brandFilters = state.brandFilters.filter(
        (el) => el !== action.payload
      );
      productSlice.caseReducers.filter(state);
    },
    removeTagFilter: (state, action: PayloadAction<string>) => {
      state.tagFilters = state.tagFilters.filter((el) => el !== action.payload);
      productSlice.caseReducers.filter(state);
    },
    filter: (state) => {
      state.filteredProducts = state.products
        .filter((el) => {
          return state.brandFilters.length > 0
            ? state.brandFilters.includes(el.manufacturer)
            : true;
        })
        .filter((el) => {
          return state.tagFilters.length > 0
            ? el.tags.some((tag) => state.tagFilters.includes(tag))
            : true;
        });
    },
  },
});

export const {
  initialize,
  clear,
  addProduct,
  addBrandFilter,
  addTagFilter,
  removeBrandFilter,
  removeTagFilter,
} = productSlice.actions;

export default productSlice.reducer;
