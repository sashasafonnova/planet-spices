import { configureStore } from "@reduxjs/toolkit";
import sortSlice from "./slices/sortSlice";
import productsSlice from "./slices/productsSlice";
import cartSlice from "./slices/cartSlice";
import filterSlice from "./slices/filterSlice";
import tabsSlice from "./slices/tabsSlice";
import formsSlice from "./slices/formsSlice";
import favoritesSlice from "./slices/favoritesSlice";




export const store = configureStore({
   reducer: {
      sortSlice,
      productsSlice,
      cartSlice,
      filterSlice,
      tabsSlice,
      formsSlice,
      favoritesSlice,
   },
}) 