import { createSlice } from '@reduxjs/toolkit';


const initialState = {
   menuOpen: false,
}


export const menuBurgerSlice = createSlice({
   name: 'menuBurger',
   initialState,
   reducers: {

      showMenuBurger: (state) => {
         state.menuOpen = !state.menuOpen;
      },

   },
})


export const { showMenuBurger } = menuBurgerSlice.actions;

export default menuBurgerSlice.reducer;