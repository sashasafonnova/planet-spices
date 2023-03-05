import { createSlice } from '@reduxjs/toolkit';



const initialState = {
   params: {
      name: 'цене ↑',
      value: 'price',
      order: 'asc',
   }
}


export const sortSlice = createSlice({
   name: 'sort',
   initialState,
   reducers: {
      
      changeSortItem: (state, action) => {
         const { name, value, order } = action.payload;
         state.params.name = name;
         state.params.value = value;
         state.params.order = order;
      },
   },
})


export const { changeSortItem } = sortSlice.actions;

export default sortSlice.reducer;