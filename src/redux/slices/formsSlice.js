import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   formStatus: false,
}


export const formsSlice = createSlice({
   name: 'forms',
   initialState,
   reducers: {

      changeFormStatus: (state, action) => {
         state.formStatus = action.payload;
      },

   },
})


export const { changeFormStatus } = formsSlice.actions;

export default formsSlice.reducer;