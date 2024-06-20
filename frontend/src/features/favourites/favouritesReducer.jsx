"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const addListToWish = createAsyncThunk(
  "addListToWish",
  async (name, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const config = {
        headers: {
          authorization: `Bearer ${state.auth.token}`,
        },
      };
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_BASE_URLS}/favourites/${name}`,
        name,
        config
      );
      localStorage.setItem("client", JSON.stringify(data.user));

      return data.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const GetUserFavouriteRooms = createAsyncThunk(
  "GetUserFavouriteRooms",
  async (name, thunkAPI) => {
    try {
       const state = thunkAPI.getState();
       const config = {
         headers: {
           authorization: `Bearer ${state.auth.token}`,
         },
       };
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_BASE_URLS}/favourites/user`,
        config
      );
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
