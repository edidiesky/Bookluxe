import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { GetSingleReservation } from "./reservationReducer";
const initialState = {
  reservation: null,
  reservations: [],
  alertText: "",
  showAlert: false,
  alertType: "",
  loginisLoading: false,
  loginisSuccess: false,
  loginisError: false,

  getsingleReservationisLoading: false,
  getsingleReservationisSuccess: false,
  getsingleReservationisError: false,
};

export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(GetSingleReservation.pending, (state, action) => {
      state.getsingleReservationisLoading = true;
    });
    builder.addCase(GetSingleReservation.fulfilled, (state, action) => {
      state.getsingleReservationisLoading = false;
      state.getsingleReservationisSuccess = true;
      state.reservation = action.payload
    });
    builder.addCase(GetSingleReservation.rejected, (state, action) => {
      state.getsingleReservationisSuccess = false;
      toast.error(action.payload);
    });
  },
});

export default reservationSlice.reducer;
