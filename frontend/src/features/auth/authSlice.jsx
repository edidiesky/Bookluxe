import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { LoginUser, RegisterUser } from "./authReducer";
const customerData = JSON.parse(localStorage.getItem("customer"));
const customerToken = localStorage.getItem("customertoken");
const initialState = {
  users: [],
  token: customerToken ? customerToken : "",
  currentUser: customerData ? customerData : null,
  alertText: "",
  showAlert: false,
  alertType: "",
  loginisLoading: false,
  loginisSuccess: false,
  loginisError: false,

  registerisLoading: false,
  registerisSuccess: false,
  registerisError: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handlePatientData: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(LoginUser.pending, (state, action) => {
      state.loginisLoading = true;
    });
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.loginisLoading = false;
      state.loginisSuccess = true;
      state.currentUser = action.payload.user;
      state.token = action.payload.token;
      toast.success("Login process sucessfully!!!!");
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.loginisSuccess = false;
      toast.error(action.payload);
    });

    builder.addCase(RegisterUser.pending, (state, action) => {
      state.registerisLoading = true;
    });
    builder.addCase(RegisterUser.fulfilled, (state, action) => {
      state.registerisLoading = false;
      state.registerisSuccess = true;
      toast.success("registration process sucessfully!!!!");
    });
    builder.addCase(RegisterUser.rejected, (state, action) => {
      state.registerisSuccess = false;
      toast.error(action.payload);
    });
  },
});

export const { handlePatientData } = authSlice.actions;

export default authSlice.reducer;
