import { configureStore } from "@reduxjs/toolkit";
import { slice as crousel_slice } from './slices/crousel_slice'

export const store = configureStore({
  reducer: {
    crousel_reducer: crousel_slice.reducer
  }
})
