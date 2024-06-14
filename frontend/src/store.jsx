import { configureStore } from "@reduxjs/toolkit";
import roomSlice from "./features/room/roomSlice";
import modalSlice from "./features/modals/modalSlice";
import authSlice from "./features/auth/authSlice";
import reservationSlice from "./features/reservation/reservationSlice";
export const store = configureStore({
  reducer: {
    room: roomSlice,
    modal: modalSlice,
    auth: authSlice,
    reservation:reservationSlice
  },
});
