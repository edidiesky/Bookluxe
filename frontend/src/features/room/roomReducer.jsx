"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllRooms = createAsyncThunk(
  "getAllRooms",
  async (name, thunkAPI) => {
    try {

      const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URLS}/room`);
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


export const getSingleRooms = createAsyncThunk(
  "getSingleRooms",
  async (roomid, thunkAPI) => {
    try {
 
      const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URLS}/room/${roomid}`);
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
