"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const RegisterUser = createAsyncThunk(
  "RegisterUser",
  async (userdata, thunkAPI) => {
    try {
      const config = {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      };
      const { data } = await axios.post(`${import.meta.env.VITE_API_BASE_URLS}/auth`, userdata);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const LoginUser = createAsyncThunk(
  "LoginUser",
  async (userdata, thunkAPI) => {
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_BASE_URLS}/auth`, userdata);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);
