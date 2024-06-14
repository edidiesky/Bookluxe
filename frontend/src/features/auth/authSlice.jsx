import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = {
  users: [],
  currentuser: {},
  alertText: "",
  showAlert: false,
  alertType: "",
  getallRoomisLoading: false,
  getallRoomisSuccess: false,
  getallRoomisError: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handlePatientData: (state, action) => {},
  },
  extraReducers: (builder) => {
    // builder.addCase(getAllRooms.pending, (state, action) => {
    //   state.getallRoomisLoading = true;
    // });
    // builder.addCase(getAllRooms.fulfilled, (state, action) => {
    //   state.getallRoomisLoading = false;
    //   state.rooms = action.payload;
    // });
    // builder.addCase(getAllRooms.rejected, (state, action) => {
    //   state.getallRoomisSuccess = false;
    //   toast.error(action.payload);
    // });

  },
});

export const { handlePatientData } = authSlice.actions;

export default authSlice.reducer;
