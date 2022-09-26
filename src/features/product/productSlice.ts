import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Product from '../../types/Product';
import SortingType from '../../common/SortingType';

export interface ProductState {
  products: Array<Product>;
  filteredProducts: Array<Product>;
  brandFilters: Array<string>;
  tagFilters: Array<string>;
  sortingType: SortingType;
}

const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  brandFilters: [],
  tagFilters: [],
  sortingType: SortingType.P_ASC,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // Initialize product array
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
    // Add and remove filters, call filtering function after every change
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
    // Reapplies the filtering function after every change to the filters
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
    // sorting functions
    sort: (state, action: PayloadAction<SortingType>) => {
      switch (action.payload) {
        case SortingType.P_ASC:
          state.filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case SortingType.P_DESC:
          state.filteredProducts.sort((a, b) => b.price - a.price);
          break;
        case SortingType.D_ASC:
          state.filteredProducts.sort((a, b) => a.added - b.added);
          break;
        case SortingType.D_DESC:
          state.filteredProducts.sort((a, b) => b.added - a.added);
          break;
        default:
          break;
      }
      state.sortingType = action.payload;
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
  sort,
} = productSlice.actions;

export default productSlice.reducer;
