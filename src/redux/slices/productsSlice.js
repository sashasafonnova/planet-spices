import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
   fetchStatus: 'pending',
   products: [],
}

export const fetchProducts = createAsyncThunk( 'products/fetchProducts', async (params) => {

   const { sortValue, sortOrder, filterCategory, filterType, filterDishes, filterSearch, pageParam, limitParam } = params;

   const sort = sortValue ? `sortBy=${sortValue}` : '';
   const order = sortOrder ? `order=${sortOrder}` : '';
   const category = filterCategory ? `category=${filterCategory}` : '';
   const type = filterType ? `type=${filterType}` : '';
   const dishes = filterDishes ? `dishes=${filterDishes}` : '';
   const search = filterSearch ? `search=${filterSearch}` : '';
   const page = pageParam ? `page=${pageParam}` : '';
   const limit = limitParam ? `limit=${limitParam}` : '';

 
   const { data } = await axios.get(`https://63e4d3758e1ed4ccf6e6dea9.mockapi.io/planet-spices/products?${category}&${sort}&${type}&${dishes}&${order}&${search}&${page}&${limit}`);
   return data;
   
   })


export const productsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {

      countIncrement: (state, action) => {
         const foundItem = state.products.find(product => product.id === action.payload.id);
         foundItem && foundItem.count++;
      },


      countDecrement: (state, action) => {
         const foundItem = state.products.find(product => product.id === action.payload.id);
         if (foundItem.count > 1) {
            foundItem.count--;
         }
      },

      
      countReset: (state, action) => {
         const foundItem = state.products.find(product => product.id === action.payload.id);
         
         if (foundItem) {
            foundItem.count = 1;
         }
      },

   },
   



   extraReducers: {

      [fetchProducts.pending]: (state) => {
         state.fetchStatus = "loading";
      }, 


      [fetchProducts.fulfilled]: (state, action) => {
         state.products = action.payload;         
         state.products = action.payload.map(obj => {
            return {
               ...obj,
               count: 1,
            }
         }); 
         state.fetchStatus = "success";       
      }, 


      [fetchProducts.rejected]: (state) => {
         state.fetchStatus = "error";
      }
   }

})


export const { countIncrement, countDecrement, countReset } = productsSlice.actions;

export default productsSlice.reducer;