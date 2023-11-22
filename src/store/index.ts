import { configureStore } from "@reduxjs/toolkit";
import BookingsReducer from "@src/store/BookingsReducer";

export const store = configureStore({
    reducer: {
        booking: BookingsReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch