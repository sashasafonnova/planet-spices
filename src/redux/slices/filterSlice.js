import { createSlice } from '@reduxjs/toolkit';


const initialState = {
   menuOpen: false,
   filterParams: {},
   activeMenuItem: 'Все товары',
}


export const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {

      showMenu: (state) => {
         state.menuOpen = !state.menuOpen;
      },


      changeMenuItem: (state, action) => {
         state.activeMenuItem = action.payload;
      },

      
      changeFilterParams: (state, action) => {

         switch (action.payload.param) {
            case 'category':
               state.filterParams = {};
               state.filterParams.category = action.payload.paramValue;
               break;
            case 'type':
               state.filterParams = {};
               state.filterParams.type = action.payload.paramValue;
               break;
            case 'dishes':
               state.filterParams = {};
               state.filterParams.dishes = action.payload.paramValue;
               break;
            case 'search':
               state.filterParams = {};
               state.filterParams.search = action.payload.paramValue;
               break;
            default:
               state.filterParams = {};
         } 
      },
   },
})


export const { showMenu, changeMenuItem, changeFilterParams } = filterSlice.actions;

export default filterSlice.reducer;