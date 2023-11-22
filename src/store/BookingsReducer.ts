import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface BookingInitialState {
  bookingValues: string[];
}
const initialState: BookingInitialState = {
  bookingValues: []
}

export const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
      addBooking: (state, action: PayloadAction<string>) => {
        state.bookingValues = [...state.bookingValues, action.payload];
      }
    }
})

export const { addBooking } = bookingSlice.actions
export default bookingSlice.reducer
