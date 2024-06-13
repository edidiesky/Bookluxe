import { configureStore } from "@reduxjs/toolkit";
import roomSlice from "./features/room/roomSlice";
export const store = configureStore({
  reducer: {
    room: roomSlice,
  },
});
