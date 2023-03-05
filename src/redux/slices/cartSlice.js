import { createSlice } from '@reduxjs/toolkit';
import { calcPrice } from '../../utils/calcPrice';
import { getCartLS } from '../../utils/getCartLS';


const { products, totalPrice } = getCartLS(); 

const initialState = {
   totalPrice,
   products,
}


export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      
      addProduct: (state, action) => {
         const foundItem = state.products.find(product => product.id === action.payload.id);         
         foundItem ? foundItem.count = foundItem.count + action.payload.count : state.products.push(action.payload);            

         state.totalPrice = calcPrice(state.products);
         
      },


      removeProduct: (state, action) => {
         const foundItem = state.products.find(product => product.id === action.payload.id);
         state.totalPrice = state.totalPrice - foundItem.price * foundItem.count;
         
         state.products = state.products.filter(product => product.id !== action.payload.id);         
      },


      clearCart: (state) => {
         state.products = [];
         state.totalPrice = 0;
      },


      countIncrement: (state, action) => {
         const foundItem = state.products.find(product => product.id === action.payload.id);

         if (foundItem) {
            foundItem.count ++;
            state.totalPrice = state.products.reduce((sum, product) => {
               return product.price * product.count + sum
            }, 0);
         }
   },


      countDecrement: (state, action) => {
         const foundItem = state.products.find(product => product.id === action.payload.id);

         if (foundItem.count > 1) {
            foundItem.count--;
            state.totalPrice = state.totalPrice - foundItem.price; 
         }
      },
}
})


export const { addProduct, removeProduct, clearCart, countIncrement, countDecrement } = cartSlice.actions;

export default cartSlice.reducer;