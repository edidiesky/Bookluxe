import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { getAllRooms, getSingleRooms } from "./roomReducer";
const patientData = JSON.parse(localStorage.getItem("patientData"));
const initialState = {
  rooms: [],
  room: {},
  alertText: "",
  showAlert: false,
  alertType: "",
  getallRoomisLoading: false,
  getallRoomisSuccess: false,
  getallRoomisError: false,
};

export const patientSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    handlePatientData: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getAllRooms.pending, (state, action) => {
      state.getallRoomisLoading = true;
    });
    builder.addCase(getAllRooms.fulfilled, (state, action) => {
      state.getallRoomisLoading = false;
      state.rooms = action.payload;
    });
    builder.addCase(getAllRooms.rejected, (state, action) => {
      state.getallRoomisSuccess = false;
      toast.error(action.payload);
    });

    builder.addCase(getSingleRooms.pending, (state, action) => {
      state.getallRoomisLoading = true;
    });
    builder.addCase(getSingleRooms.fulfilled, (state, action) => {
      state.getallRoomisLoading = false;
      state.room = action.payload;
    });
    builder.addCase(getSingleRooms.rejected, (state, action) => {
      state.getallRoomisSuccess = false;
      toast.error(action.payload);
    });
  },
});

export const { handlePatientData } = patientSlice.actions;

export default patientSlice.reducer;
