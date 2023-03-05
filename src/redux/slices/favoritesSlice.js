
import { createSlice } from '@reduxjs/toolkit';
import { getFavoritesLS } from '../../utils/getFavoritesLS';

const products  = getFavoritesLS();


const initialState = {
   products,
}



export const favoritesSlice = createSlice({
   name: 'favorites',
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
      


      toggleIsFavorite: (state, action) => {
         const foundItem = state.products.find(product => product.id === action.payload.id);
        
         if (foundItem) {
            state.products = state.products.filter(product => product.id !== action.payload.id);  
         } else {
            state.products.push(action.payload); 
         }
      },



      clearFavorites: (state) => {
         state.products = [];
      },

} 

})


export const { countIncrement, countDecrement, countReset, toggleIsFavorite, clearFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;