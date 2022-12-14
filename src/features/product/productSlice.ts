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
  typeFilter: string;
  isLoading: boolean;
}

const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  brandFilters: [],
  tagFilters: [],
  sortingType: SortingType.P_ASC,
  typeFilter: '',
  isLoading: true,
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
    // Add and remove filters, call filtering function after every change and sort the results
    addBrandFilter: (state, action: PayloadAction<string>) => {
      state.brandFilters.push(action.payload);
      productSlice.caseReducers.filter(state);
      productSlice.caseReducers.sort(state);
    },
    addTagFilter: (state, action: PayloadAction<string>) => {
      state.tagFilters.push(action.payload);
      productSlice.caseReducers.filter(state);
      productSlice.caseReducers.sort(state);
    },
    removeBrandFilter: (state, action: PayloadAction<string>) => {
      state.brandFilters = state.brandFilters.filter(
        (el) => el !== action.payload
      );
      productSlice.caseReducers.filter(state);
      productSlice.caseReducers.sort(state);
    },
    removeTagFilter: (state, action: PayloadAction<string>) => {
      state.tagFilters = state.tagFilters.filter((el) => el !== action.payload);
      productSlice.caseReducers.filter(state);
      productSlice.caseReducers.sort(state);
    },
    clearTagFilters: (state) => {
      state.tagFilters = [];
      productSlice.caseReducers.filter(state);
      productSlice.caseReducers.sort(state);
    },
    clearBrandFilters: (state) => {
      state.brandFilters = [];
      productSlice.caseReducers.filter(state);
      productSlice.caseReducers.sort(state);
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
        })
        .filter((el) => {
          return state.typeFilter !== ''
            ? state.typeFilter === el.itemType
            : true;
        });
    },
    // sorting functions
    setSortingType: (state, action: PayloadAction<SortingType>) => {
      state.sortingType = action.payload;
      productSlice.caseReducers.sort(state);
    },
    sort: (state) => {
      switch (state.sortingType) {
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
    },
    setTypeFilter: (state, action: PayloadAction<string>) => {
      state.typeFilter = action.payload;
      productSlice.caseReducers.filter(state);
      productSlice.caseReducers.sort(state);
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
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
  setSortingType,
  setTypeFilter,
  setIsLoading,
  clearTagFilters,
  clearBrandFilters,
} = productSlice.actions;

export default productSlice.reducer;
