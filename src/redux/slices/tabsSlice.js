import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   category: {
      name: 'Скидки',
      value: 'Скидка'
   }
}


export const tabsSlice = createSlice({
   name: 'tabs',
   initialState,
   reducers: {
      
      changeCategory: (state, action) => {
         state.category = action.payload;
      },
}
})


export const { changeCategory } = tabsSlice.actions;

export default tabsSlice.reducer;